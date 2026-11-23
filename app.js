(function () {
  const PARTS = window.CET4_PARTS || [];
  const allStages = PARTS.flatMap(p => p.stages.map(s => ({ ...s, partName: p.name })));
  const allLabs = allStages.flatMap(s =>
    s.labs.map((lab, i) => ({ ...lab, stageId: s.id, stageTitle: s.title, key: `${s.id}-lab-${i}` }))
  );
  const allQuestions = allStages.flatMap(s =>
    s.quiz.map((q, i) => ({ ...q, stageId: s.id, stageTitle: s.title, qKey: `${s.id}-q-${i}` }))
  );

  const STORAGE_DONE = "cet4_zero_done_v3";
  const STORAGE_STARS = "cet4_zero_stars_v3";
  const STORAGE_WRONG = "cet4_zero_wrong_v3";
  const STORAGE_THEME = "cet4_zero_theme_v3";

  let completed = new Set(JSON.parse(localStorage.getItem(STORAGE_DONE) || "[]"));
  let starsMap = JSON.parse(localStorage.getItem(STORAGE_STARS) || "{}");
  let wrongSet = new Set(JSON.parse(localStorage.getItem(STORAGE_WRONG) || "[]"));

  let currentFilter = "all";
  let currentTab = "map";
  let activeStageId = null;
  let quizAnswers = {}; // stageId -> { qIdx: oIdx }
  let labModes = {}; // labKey -> { trunk, mod, bilingual, analysis, pickedSeg }
  let bankSearch = "";

  let practiceMode = "all";
  let practiceQueue = [];
  let practiceIdx = 0;
  let practicePicked = null;

  // 主题初始化
  if (localStorage.getItem(STORAGE_THEME) === "dark") {
    document.documentElement.classList.add("dark");
    document.getElementById("themeBtn").textContent = "☀️ 日间";
  }

  document.getElementById("themeBtn").addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem(STORAGE_THEME, isDark ? "dark" : "light");
    document.getElementById("themeBtn").textContent = isDark ? "☀️ 日间" : "🌙 夜间";
  });

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) {
      alert("当前浏览器不支持语音朗读");
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.88;
    window.speechSynthesis.speak(utter);
  }

  function saveState() {
    localStorage.setItem(STORAGE_DONE, JSON.stringify([...completed]));
    localStorage.setItem(STORAGE_STARS, JSON.stringify(starsMap));
    localStorage.setItem(STORAGE_WRONG, JSON.stringify([...wrongSet]));
  }

  function getRank(n) {
    if (n === 0) return "🌱 零基础起跑";
    if (n < 5) return "🧱 句子骨架学徒";
    if (n < 9) return "✂️ 修饰拆解能手";
    if (n < 14) return "🔍 从句破译官";
    if (n < 18) return "⚡ 四级阅读猎手";
    return "🏆 四级长难句通关宗师";
  }

  function updateProgressUI() {
    const done = completed.size;
    const total = allStages.length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    document.getElementById("rankBadge").textContent = getRank(done);
    document.getElementById("progressText").textContent = `${done} / ${total} 章 (${pct}%)`;
    document.getElementById("progressFill").style.width = `${pct}%`;
  }

  function getLabMode(key) {
    if (!labModes[key]) {
      labModes[key] = {
        trunk: true,
        mod: true,
        bilingual: false,
        analysis: false,
        pickedSeg: null
      };
    }
    return labModes[key];
  }

  function getLabPlainText(lab) {
    return lab.segments.map(s => s.t).join(" ");
  }

  function getRoleLabel(seg) {
    if (seg.tag) return seg.tag;
    if (seg.k === "subj") return "主语（谁）";
    if (seg.k === "verb") return "核心谓语（动作/状态）";
    if (seg.k === "obj") return "宾语/表语（承受者/特征）";
    if (seg.k === "mod") return "修饰成分";
    return "连接/虚词";
  }

  function renderSentenceHTML(lab, labKey, mode) {
    if (mode.bilingual) {
      // 双语字幕逐块对照模式：每个英文词块下方直接紧跟中文意思
      return `<div class="bilingual-wrap">${lab.segments.map((seg, idx) => {
        const cls = mode.trunk && (seg.k === "subj" || seg.k === "verb" || seg.k === "obj")
          ? `seg-${seg.k}`
          : mode.mod && seg.k === "mod"
            ? "seg-mod"
            : "seg-plain";
        const isPicked = mode.pickedSeg === idx ? "seg-picked" : "";
        const roleTag = seg.tag ? `<span class="seg-tag">[${escapeHtml(seg.tag)}]</span>` : "";
        return `
          <span class="bi-chunk ${isPicked}" data-seg="${idx}" data-lab="${labKey}">
            <span class="bi-en ${cls}">${roleTag}${escapeHtml(seg.t)}</span>
            <span class="bi-zh">${escapeHtml(seg.zh || "")}</span>
          </span>
        `;
      }).join("")}</div>`;
    }

    // 正常连贯阅读模式：可点任意词块，也可点整句空白直接展开中文
    return lab.segments.map((seg, idx) => {
      const txt = escapeHtml(seg.t);
      const isPicked = mode.pickedSeg === idx ? "seg-picked" : "";
      let cls = "chunk-span";
      if (mode.trunk && (seg.k === "subj" || seg.k === "verb" || seg.k === "obj")) {
        cls += ` seg-${seg.k}`;
      } else if (mode.mod && seg.k === "mod") {
        cls += " seg-mod";
      }
      const tag = (mode.mod && seg.k === "mod" && seg.tag)
        ? `<span class="seg-tag">[${escapeHtml(seg.tag)}]</span>`
        : "";
      return `<span class="${cls} ${isPicked}" data-seg="${idx}" data-lab="${labKey}">${tag}${txt}</span>`;
    }).join(" ");
  }

  function renderLabCard(lab, labKey) {
    const mode = getLabMode(labKey);
    const pickedSegObj = mode.pickedSeg !== null ? lab.segments[mode.pickedSeg] : null;

    return `
      <div class="lab-card" data-labkey="${labKey}">
        <div class="lab-source">
          <span class="source-tag">${escapeHtml(lab.source)}</span>
          <div style="display:flex;gap:6px;align-items:center;">
            <button class="pill-btn" data-toggle="bilingual" data-key="${labKey}" style="${mode.bilingual ? "background:var(--primary);color:#fff;border-color:var(--primary);" : ""}">
              ${mode.bilingual ? "✓ 双语对照中" : "💬 逐块双语"}
            </button>
            <button class="speak-btn" data-speak-key="${labKey}" aria-label="朗读整句">🔊</button>
          </div>
        </div>

        <div class="sentence-display" data-sentence-click="${labKey}" title="点击句子看中文意思">
          ${renderSentenceHTML(lab, labKey, mode)}
          <div class="tap-hint">👆 点单词/词块看该块意思 · 点空白或下方看整句中文</div>
        </div>

        ${pickedSegObj ? `
          <div class="chunk-popup">
            <div style="min-width:0;flex:1;">
              <div style="font-size:13px;font-weight:800;">${escapeHtml(pickedSegObj.t)}</div>
              <div style="font-size:13px;color:var(--primary);font-weight:700;margin-top:2px;">
                中文：${escapeHtml(pickedSegObj.zh || "（结构词）")}
                <span style="font-size:11px;color:var(--muted);font-weight:600;margin-left:6px;">[${escapeHtml(getRoleLabel(pickedSegObj))}]</span>
              </div>
            </div>
            <div style="display:flex;gap:6px;align-items:center;flex-shrink:0;">
              ${!mode.analysis ? `<button class="pill-btn" data-toggle="analysis" data-key="${labKey}">看整句中文</button>` : ""}
              <button class="speak-btn" data-speak-chunk="${escapeHtml(pickedSegObj.t)}" aria-label="朗读词块">🔊</button>
            </div>
          </div>
        ` : ""}

        <div class="legend-bar">
          <span class="seg-subj">主语</span>
          <span class="seg-verb">谓语</span>
          <span class="seg-obj">宾/表语</span>
          <span class="seg-mod">[修饰/从句]</span>
        </div>

        <div class="lab-controls">
          <button class="ctrl-btn ${mode.trunk ? "active" : ""}" data-toggle="trunk" data-key="${labKey}">
            ${mode.trunk ? "✓ 标主干" : "标主干"}
          </button>
          <button class="ctrl-btn ${mode.mod ? "active" : ""}" data-toggle="mod" data-key="${labKey}">
            ${mode.mod ? "✓ 切修饰" : "切修饰"}
          </button>
          <button class="ctrl-btn ${mode.analysis ? "active" : ""}" data-toggle="analysis" data-key="${labKey}">
            ${mode.analysis ? "▲ 收起整句中文" : "👁️ 点我看整句中文"}
          </button>
        </div>

        ${mode.analysis ? `
          <div class="lab-analysis">
            <div><strong>📖 整句中文：</strong>${escapeHtml(lab.zh)}</div>
            <div style="margin-top:6px;"><strong>🎯 小白拆解：</strong>${escapeHtml(lab.tip)}</div>
          </div>
        ` : ""}
      </div>
    `;
  }

  function bindLabEvents(root, labsMap, rerenderFn) {
    // 1. 点击词块：显示该词块的中文意思与语法成分，并允许单块朗读
    root.querySelectorAll("[data-seg]").forEach(el => {
      el.addEventListener("click", e => {
        e.stopPropagation();
        const key = el.dataset.lab;
        const segIdx = Number(el.dataset.seg);
        const mode = getLabMode(key);
        mode.pickedSeg = mode.pickedSeg === segIdx ? null : segIdx;
        rerenderFn();
      });
    });

    // 2. 点击句子容器（空白区域/提示区）：直接切换整句中文翻译！
    root.querySelectorAll("[data-sentence-click]").forEach(box => {
      box.addEventListener("click", () => {
        const key = box.dataset.sentenceClick;
        const mode = getLabMode(key);
        mode.analysis = !mode.analysis;
        rerenderFn();
      });
    });

    // 3. 控制按钮：标主干 / 切修饰 / 双语对照 / 整句中文
    root.querySelectorAll("[data-toggle]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const key = btn.dataset.key;
        const field = btn.dataset.toggle;
        const mode = getLabMode(key);
        mode[field] = !mode[field];
        rerenderFn();
      });
    });

    // 4. 整句朗读
    root.querySelectorAll("[data-speak-key]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const lab = labsMap[btn.dataset.speakKey];
        if (lab) speak(getLabPlainText(lab));
      });
    });

    // 5. 单词块朗读
    root.querySelectorAll("[data-speak-chunk]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        speak(btn.dataset.speakChunk);
      });
    });
  }

  function renderMap() {
    updateProgressUI();
    const container = document.getElementById("worldsContainer");
    container.innerHTML = "";

    PARTS.forEach(part => {
      const list = part.stages.filter(s => {
        if (currentFilter === "done") return completed.has(s.id);
        if (currentFilter === "todo") return !completed.has(s.id);
        return true;
      });
      if (!list.length) return;

      const doneCount = part.stages.filter(s => completed.has(s.id)).length;
      const card = document.createElement("div");
      card.className = "world-card";
      card.innerHTML = `
        <div class="world-head">
          <div>
            <div class="world-title">${escapeHtml(part.name)}</div>
            <div class="world-sub">${escapeHtml(part.subtitle)}</div>
          </div>
          <div class="world-stat">${doneCount}/${part.stages.length}</div>
        </div>
        <div class="stage-list"></div>
      `;

      const stageList = card.querySelector(".stage-list");
      list.forEach(stage => {
        const isDone = completed.has(stage.id);
        const star = starsMap[stage.id] || 0;
        const btn = document.createElement("button");
        btn.className = `stage-btn ${isDone ? "done" : ""}`;
        btn.innerHTML = `
          <div style="min-width:0">
            <div class="stage-meta">
              <span>${stage.labs.length} 句精拆</span>
              <span>•</span>
              <span>${stage.vocab.length} 词</span>
              <span>•</span>
              <span>${stage.quiz.length} 题</span>
            </div>
            <div class="stage-name">${escapeHtml(stage.title)}</div>
            <div class="stage-preview">${isDone ? `${"⭐".repeat(star || 2)} 已通关` : "零基础铺垫 → 四级真题实战"}</div>
          </div>
          <div class="stage-badge">${isDone ? "✓" : "→"}</div>
        `;
        btn.addEventListener("click", () => openDetail(stage.id));
        stageList.appendChild(btn);
      });

      container.appendChild(card);
    });

    if (!container.children.length) {
      container.innerHTML = `<div class="world-card" style="text-align:center;color:var(--muted);font-size:14px;">当前筛选下暂无章节</div>`;
    }
  }

  function openDetail(stageId) {
    activeStageId = stageId;
    document.getElementById("viewMap").classList.add("hidden");
    document.getElementById("viewDetail").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    renderDetail();
  }

  function closeDetail() {
    activeStageId = null;
    document.getElementById("viewDetail").classList.add("hidden");
    document.getElementById("viewMap").classList.remove("hidden");
    renderMap();
  }

  function renderDetail() {
    const idx = allStages.findIndex(s => s.id === activeStageId);
    const stage = allStages[idx];
    if (!stage) return;

    const isDone = completed.has(stage.id);
    const prev = idx > 0 ? allStages[idx - 1] : null;
    const next = idx < allStages.length - 1 ? allStages[idx + 1] : null;
    const pickedMap = quizAnswers[stage.id] || {};

    const labsMap = {};
    stage.labs.forEach((lab, i) => {
      labsMap[`${stage.id}-lab-${i}`] = lab;
    });

    const answeredCount = Object.keys(pickedMap).length;
    const correctCount = stage.quiz.filter((q, i) => pickedMap[i] === q.answer).length;

    const el = document.getElementById("viewDetail");
    el.innerHTML = `
      <button class="detail-back" id="backMapBtn">← 返回章节地图</button>

      <!-- Step 1: 大白话语法 + 3 阶生长演示 -->
      <div class="section-box">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">
          <div>
            <div style="font-size:12px;color:var(--muted);">${escapeHtml(stage.partName)}</div>
            <h2 style="margin:4px 0 0;font-size:18px;font-weight:800;">${escapeHtml(stage.title)}</h2>
          </div>
          <button id="toggleStageBtn" class="pill-btn" style="${isDone ? "background:var(--ok-soft);color:var(--ok);border-color:var(--ok);" : "background:var(--primary);color:#fff;border-color:var(--primary);"}">
            ${isDone ? "✓ 已通关" : "手动打卡"}
          </button>
        </div>

        <p style="margin:10px 0 0;font-size:14px;">${escapeHtml(stage.summary)}</p>

        <div class="evo-box">
          <div style="font-size:13px;font-weight:800;margin-bottom:8px;">🌱 看句子是怎么一步步“长”成四级长难句的：</div>
          ${stage.evolution.map(ev => `
            <div class="evo-step">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;">
                <span class="evo-label">${escapeHtml(ev.label)}</span>
                <button class="speak-btn" style="min-width:28px;min-height:28px;font-size:12px;" data-speak-raw="${escapeHtml(ev.en)}">🔊</button>
              </div>
              <div style="font-size:13.5px;font-weight:700;margin-top:4px;">${escapeHtml(ev.en)}</div>
              <div style="font-size:12.5px;color:var(--muted);margin-top:2px;">${escapeHtml(ev.zh)}</div>
            </div>
          `).join("")}
        </div>

        <div style="font-size:13px;font-weight:800;margin-top:12px;">📌 零基础保命口诀</div>
        <ul class="point-list">
          ${stage.points.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
        </ul>
      </div>

      <!-- Step 2: 本章核心词汇扫盲 -->
      <div class="section-box">
        <div style="font-size:15px;font-weight:800;">📚 Step 2 · 先扫清本章 ${stage.vocab.length} 个四级高频词（点一下听发音）</div>
        <div class="vocab-grid">
          ${stage.vocab.map(v => `
            <button class="vocab-card" data-speak-raw="${escapeHtml(v.w)}">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <span style="font-size:14px;font-weight:800;">${escapeHtml(v.w)}</span>
                <span style="font-size:12px;">🔊</span>
              </div>
              ${v.p ? `<div style="font-size:11px;color:var(--muted);">${escapeHtml(v.p)}</div>` : ""}
              <div style="font-size:12px;color:var(--primary);font-weight:600;margin-top:2px;">${escapeHtml(v.m)}</div>
            </button>
          `).join("")}
        </div>
      </div>

      <!-- Step 3: 4 句渐进拆句精讲 -->
      <div class="section-box">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
          <div>
            <div style="font-size:15px;font-weight:800;">🔬 Step 3 · 逐句精拆（先热身短句 → 再练真题原句）</div>
            <div style="font-size:12px;color:var(--muted);margin-top:2px;">点击任意英文词块看该块意思；点「💬 逐块双语」可像双语字幕一样学！</div>
          </div>
          <button id="toggleStageBiBtn" class="pill-btn">💬 本章全开双语对照</button>
        </div>
        ${stage.labs.map((lab, i) => renderLabCard(lab, `${stage.id}-lab-${i}`)).join("")}
      </div>

      <!-- Step 4: 5 道阶梯过关测验 -->
      <div class="section-box">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
          <div>
            <div style="font-size:15px;font-weight:800;">🎯 Step 4 · 5 题阶梯闯关（答对 ≥ 4 题即过关）</div>
            <div style="font-size:12px;color:var(--muted);margin-top:2px;">当前进度：已做 ${answeredCount}/${stage.quiz.length} 题 · 答对 ${correctCount} 题</div>
          </div>
        </div>

        ${stage.quiz.map((q, qIdx) => {
          const picked = pickedMap[qIdx];
          const answered = picked !== undefined;
          const isCorrect = picked === q.answer;
          return `
            <div class="quiz-card">
              <span class="quiz-type-badge">[第 ${qIdx + 1} 题 · ${escapeHtml(q.type)}]</span>
              <div class="quiz-q">${escapeHtml(q.q).replace(/\n/g, "<br>")}</div>
              ${q.options.map((opt, oIdx) => {
                let cls = "";
                if (answered) {
                  if (oIdx === q.answer) cls = "correct";
                  else if (oIdx === picked) cls = "wrong";
                }
                return `<button class="quiz-opt ${cls}" data-q="${qIdx}" data-o="${oIdx}">${String.fromCharCode(65 + oIdx)}. ${escapeHtml(opt)}</button>`;
              }).join("")}
              ${answered ? `<div class="quiz-explain" style="color:${isCorrect ? "var(--ok)" : "var(--err)"}">${isCorrect ? "✅ 答对了！" : "❌ 思路纠正："} ${escapeHtml(q.explain)}</div>` : ""}
            </div>
          `;
        }).join("")}

        <div class="nav-footer">
          <button class="btn-secondary" id="prevStageBtn" ${!prev ? "disabled" : ""}>← 上一章</button>
          <button class="btn-primary" id="nextStageBtn" ${!next ? "disabled" : ""}>下一章 ${next ? `(${next.id})` : ""} →</button>
        </div>
      </div>
    `;

    document.getElementById("backMapBtn").addEventListener("click", closeDetail);

    document.getElementById("toggleStageBtn").addEventListener("click", () => {
      if (completed.has(stage.id)) {
        completed.delete(stage.id);
        delete starsMap[stage.id];
      } else {
        completed.add(stage.id);
        starsMap[stage.id] = Math.max(starsMap[stage.id] || 0, 2);
      }
      saveState();
      updateProgressUI();
      renderDetail();
    });

    document.getElementById("toggleStageBiBtn").addEventListener("click", () => {
      const keys = stage.labs.map((_, i) => `${stage.id}-lab-${i}`);
      const allOn = keys.every(k => getLabMode(k).bilingual);
      keys.forEach(k => {
        const m = getLabMode(k);
        m.bilingual = !allOn;
        if (!allOn) m.analysis = true;
      });
      renderDetail();
    });

    el.querySelectorAll("[data-speak-raw]").forEach(btn => {
      btn.addEventListener("click", () => speak(btn.dataset.speakRaw));
    });

    bindLabEvents(el, labsMap, renderDetail);

    el.querySelectorAll(".quiz-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        const qIdx = Number(btn.dataset.q);
        const oIdx = Number(btn.dataset.o);
        const qObj = stage.quiz[qIdx];
        const qKey = `${stage.id}-q-${qIdx}`;

        if (!quizAnswers[stage.id]) quizAnswers[stage.id] = {};
        quizAnswers[stage.id][qIdx] = oIdx;

        if (oIdx === qObj.answer) wrongSet.delete(qKey);
        else wrongSet.add(qKey);

        const rightNum = stage.quiz.filter((q, i) => quizAnswers[stage.id][i] === q.answer).length;
        if (rightNum >= Math.ceil(stage.quiz.length * 0.8)) {
          completed.add(stage.id);
          starsMap[stage.id] = rightNum === stage.quiz.length ? 3 : 2;
        }

        saveState();
        updateProgressUI();
        renderDetail();
      });
    });

    if (prev) document.getElementById("prevStageBtn").addEventListener("click", () => openDetail(prev.id));
    if (next) document.getElementById("nextStageBtn").addEventListener("click", () => openDetail(next.id));
  }

  // Tab 2: 真题拆句库
  function renderBank() {
    const box = document.getElementById("viewBank");
    const filtered = allLabs.filter(l => {
      if (!bankSearch.trim()) return true;
      const kw = bankSearch.trim().toLowerCase();
      return (
        getLabPlainText(l).toLowerCase().includes(kw) ||
        l.zh.toLowerCase().includes(kw) ||
        l.source.toLowerCase().includes(kw) ||
        l.stageTitle.toLowerCase().includes(kw)
      );
    });

    const labsMap = {};
    filtered.forEach(l => { labsMap[l.key] = l; });

    box.innerHTML = `
      <div class="hero-card">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
          <div>
            <div style="font-size:16px;font-weight:800;">🔬 四级渐进长难句库（共 ${allLabs.length} 句）</div>
            <div style="font-size:12px;color:var(--muted);margin-top:2px;">点句子直接看中文，点词块看逐块意思，支持全开「双语字幕对照」。</div>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button id="biAllBtn" class="pill-btn">💬 全部双语对照</button>
            <button id="blindAllBtn" class="pill-btn">🙈 全部盲读</button>
          </div>
        </div>
        <input id="bankSearchInput" type="search" value="${escapeHtml(bankSearch)}" placeholder="搜英文词、中文意思、2023.12、定语从句..." style="width:100%;margin-top:10px;padding:10px 12px;border-radius:10px;border:1px solid var(--border);background:var(--card-2);color:var(--text);font-size:13px;" />
      </div>
      ${filtered.map(l => `
        <div class="section-box" style="padding:12px 14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:4px;">
            <span style="font-size:12px;color:var(--muted);font-weight:700;">${escapeHtml(l.stageTitle)}</span>
            <button class="pill-btn" data-jump="${l.stageId}">学这一章 →</button>
          </div>
          ${renderLabCard(l, l.key)}
        </div>
      `).join("")}
    `;

    document.getElementById("bankSearchInput").addEventListener("input", e => {
      bankSearch = e.target.value;
      renderBank();
    });

    document.getElementById("biAllBtn").addEventListener("click", () => {
      filtered.forEach(l => {
        labModes[l.key] = { trunk: true, mod: true, bilingual: true, analysis: true, pickedSeg: null };
      });
      renderBank();
    });

    document.getElementById("blindAllBtn").addEventListener("click", () => {
      filtered.forEach(l => {
        labModes[l.key] = { trunk: false, mod: false, bilingual: false, analysis: false, pickedSeg: null };
      });
      renderBank();
    });

    box.querySelectorAll("[data-jump]").forEach(btn => {
      btn.addEventListener("click", () => {
        switchTab("map");
        openDetail(btn.dataset.jump);
      });
    });

    bindLabEvents(box, labsMap, renderBank);
  }

  // Tab 3: 100题综合刷题 + 错题本
  function initPractice(mode) {
    practiceMode = mode;
    if (mode === "wrong") {
      practiceQueue = allQuestions.filter(q => wrongSet.has(q.qKey));
    } else {
      practiceQueue = [...allQuestions].sort(() => Math.random() - 0.5);
    }
    practiceIdx = 0;
    practicePicked = null;
    renderPractice();
  }

  function renderPractice() {
    const box = document.getElementById("viewPractice");
    const wrongCount = wrongSet.size;

    const headerHTML = `
      <div class="hero-card">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
          <div style="font-size:16px;font-weight:800;">⚡ 100 题综合刷题 & 错题本</div>
          <span style="font-size:12px;color:var(--muted);">待复习错题：<strong>${wrongCount}</strong> 题</span>
        </div>
        <div class="filter-row">
          <button class="filter-chip ${practiceMode === "all" ? "active" : ""}" id="modeAllBtn">🎲 全库随机 (${allQuestions.length})</button>
          <button class="filter-chip ${practiceMode === "wrong" ? "active" : ""}" id="modeWrongBtn">📕 只刷错题 (${wrongCount})</button>
        </div>
      </div>
    `;

    if (!practiceQueue.length) {
      box.innerHTML = `
        ${headerHTML}
        <div class="section-box" style="text-align:center;padding:28px 16px;">
          <div style="font-size:28px;">🎉</div>
          <div style="font-size:15px;font-weight:700;margin-top:6px;">错题本目前清空了！</div>
          <div style="font-size:13px;color:var(--muted);margin-top:4px;">做错的题目会自动收入这里，重做答对就会自动移除。</div>
          <button class="btn-primary" id="goAllPracticeBtn" style="margin-top:14px;max-width:220px;">切回全库随机刷题</button>
        </div>
      `;
      document.getElementById("modeAllBtn").addEventListener("click", () => initPractice("all"));
      document.getElementById("modeWrongBtn").addEventListener("click", () => initPractice("wrong"));
      document.getElementById("goAllPracticeBtn").addEventListener("click", () => initPractice("all"));
      return;
    }

    const item = practiceQueue[practiceIdx];
    const answered = practicePicked !== null;
    const isCorrect = practicePicked === item.answer;

    box.innerHTML = `
      ${headerHTML}
      <div class="section-box">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <span class="source-tag">${escapeHtml(item.stageTitle)}</span>
          <span style="font-size:12px;color:var(--muted);">${practiceIdx + 1} / ${practiceQueue.length}</span>
        </div>
        <div class="quiz-card">
          <span class="quiz-type-badge">[${escapeHtml(item.type)}]</span>
          <div class="quiz-q">${escapeHtml(item.q).replace(/\n/g, "<br>")}</div>
          ${item.options.map((opt, oIdx) => {
            let cls = "";
            if (answered) {
              if (oIdx === item.answer) cls = "correct";
              else if (oIdx === practicePicked) cls = "wrong";
            }
            return `<button class="quiz-opt ${cls}" data-po="${oIdx}">${String.fromCharCode(65 + oIdx)}. ${escapeHtml(opt)}</button>`;
          }).join("")}
          ${answered ? `<div class="quiz-explain" style="color:${isCorrect ? "var(--ok)" : "var(--err)"}">${isCorrect ? "✅ 答对了！" : "❌ 已记入错题本："} ${escapeHtml(item.explain)}</div>` : ""}
        </div>
        <div class="nav-footer">
          <button class="btn-secondary" id="reshuffleBtn">重新洗牌</button>
          <button class="btn-primary" id="nextPracticeBtn">下一题 →</button>
        </div>
      </div>
    `;

    document.getElementById("modeAllBtn").addEventListener("click", () => initPractice("all"));
    document.getElementById("modeWrongBtn").addEventListener("click", () => initPractice("wrong"));

    box.querySelectorAll("[data-po]").forEach(btn => {
      btn.addEventListener("click", () => {
        practicePicked = Number(btn.dataset.po);
        if (practicePicked === item.answer) wrongSet.delete(item.qKey);
        else wrongSet.add(item.qKey);
        saveState();
        renderPractice();
      });
    });

    document.getElementById("reshuffleBtn").addEventListener("click", () => initPractice(practiceMode));
    document.getElementById("nextPracticeBtn").addEventListener("click", () => {
      if (practiceMode === "wrong") {
        practiceQueue = allQuestions.filter(q => wrongSet.has(q.qKey));
        practiceIdx = practiceQueue.length ? (practiceIdx + 1) % practiceQueue.length : 0;
      } else {
        practiceIdx = (practiceIdx + 1) % practiceQueue.length;
      }
      practicePicked = null;
      renderPractice();
    });
  }

  function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll(".nav-tab").forEach(b => {
      b.classList.toggle("active", b.dataset.tab === tab);
    });
    document.getElementById("viewMap").classList.toggle("hidden", tab !== "map");
    document.getElementById("viewDetail").classList.add("hidden");
    document.getElementById("viewBank").classList.toggle("hidden", tab !== "bank");
    document.getElementById("viewPractice").classList.toggle("hidden", tab !== "practice");

    if (tab === "map") renderMap();
    if (tab === "bank") renderBank();
    if (tab === "practice") {
      if (!practiceQueue.length) initPractice(practiceMode);
      else renderPractice();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      currentFilter = chip.dataset.filter;
      document.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("active", c === chip));
      renderMap();
    });
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (!confirm("确定要清空所有通关进度和错题记录吗？")) return;
    completed.clear();
    starsMap = {};
    wrongSet.clear();
    quizAnswers = {};
    saveState();
    if (activeStageId) renderDetail();
    else renderMap();
  });

  renderMap();
})();
