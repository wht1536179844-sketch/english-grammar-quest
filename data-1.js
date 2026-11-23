window.CET4_PARTS = window.CET4_PARTS || [];

window.CET4_PARTS.push(
  {
    id: "p1",
    name: "阶段一 · 零基础句子骨架（第 1–4 章）",
    subtitle: "先学会在任意句子里一眼找出「谁干了什么」，不再一读长句就懵",
    stages: [
      {
        id: "1-1",
        title: "第1章 · 谁干了什么（主谓宾 & 主系表）",
        summary: "任何英语句子再长，核心永远只有两种骨架：①「谁 + 做了 + 什么」（主谓宾）；②「谁 + 是/怎么样」（主系表）。",
        evolution: [
          { label: "① 极简骨架 (4词)", en: "Studies found a fact.", zh: "研究发现了一个事实。" },
          { label: "② 加上定语 (9词)", en: "Several recent studies have found a meaningful impact.", zh: "近几项研究发现了一个有意义的影响。" },
          { label: "③ 变成四级真题 (23词)", en: "Several recent studies have found that even low-intensity exercise, done for a short amount of time, can have a meaningful impact on health.", zh: "近几项研究发现，即使是短时间内进行的低强度运动，也能对健康产生有意义的影响。" }
        ],
        points: [
          "主谓宾（SVO）：发出动作的人/物是主语，动作是谓语，承受动作的是宾语。",
          "主系表（SVP）：be 动词（am/is/are/was/were）或感官/状态动词（seem/become/feel）连接主语和它的特征。",
          "零基础第一步：别管单词认不认识，先用眼睛找动词！动词前面多半是「谁（主语）」，动词后面是「干了啥（宾/表）」。"
        ],
        vocab: [
          { w: "impact", p: "/ˈɪmpækt/", m: "n. 影响，冲击" },
          { w: "intensity", p: "/ɪnˈtensəti/", m: "n. 强度" },
          { w: "research", p: "/rɪˈsɜːtʃ/", m: "n./v. 研究" },
          { w: "ability", p: "/əˈbɪləti/", m: "n. 能力" },
          { w: "effective", p: "/ɪˈfektɪv/", m: "adj. 有效的" },
          { w: "lifestyle", p: "/ˈlaɪfstaɪl/", m: "n. 生活方式" }
        ],
        labs: [
          {
            source: "热身短句 · 主谓宾骨架",
            segments: [
              { t: "Walking", zh: "散步", k: "subj" },
              { t: "can lift", zh: "能提升", k: "verb" },
              { t: "your mood.", zh: "你的情绪。", k: "obj" }
            ],
            zh: "散步能提升你的情绪。",
            tip: "最标准的「谁 + 动作 + 什么」结构。Walking 是动名词作主语。"
          },
          {
            source: "热身短句 · 主系表骨架",
            segments: [
              { t: "Social health", zh: "社交健康", k: "subj" },
              { t: "is", zh: "是", k: "verb" },
              { t: "very important.", zh: "非常重要的。", k: "obj" }
            ],
            zh: "社交健康非常重要。",
            tip: "中文说“社交健康很重要”没有“是”，但英语必须加系动词 is 把主语和形容词连起来。"
          },
          {
            source: "2023.12 四级套1 · Section A",
            segments: [
              { t: "Several recent studies", zh: "近几项研究", k: "subj" },
              { t: "have found", zh: "已经发现", k: "verb" },
              { t: "that", zh: "（引导宾语从句）", k: "plain" },
              { t: "even low-intensity exercise,", zh: "即使是低强度运动，", k: "subj" },
              { t: "done for a short amount of time,", zh: "哪怕只做很短时间，", k: "mod", tag: "插入修饰" },
              { t: "can have", zh: "也能产生", k: "verb" },
              { t: "a meaningful impact on health.", zh: "对健康有意义的影响。", k: "obj" }
            ],
            zh: "近几项研究发现，即使是短时间内进行的低强度运动，也能对健康产生有意义的影响。",
            tip: "整句有两层骨架：外层「研究发现……」，内层「运动能产生影响」。"
          },
          {
            source: "2023.12 四级套3 · Section A",
            segments: [
              { t: "A rich social life", zh: "丰富的社交生活", k: "subj" },
              { t: "can lower", zh: "能降低", k: "verb" },
              { t: "stress levels", zh: "压力水平", k: "obj" },
              { t: "and boost", zh: "并增强", k: "verb" },
              { t: "heart health.", zh: "心脏健康。", k: "obj" }
            ],
            zh: "丰富的社交生活能降低压力水平并增强心脏健康。",
            tip: "一个主语带动两个并列谓语动词（lower 和 boost），阅读时抓住主语“社交生活”就能一气读完。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "四级高频词「impact」在句子 have a meaningful impact on health 中的意思是：", options: ["疾病", "影响", "时间", "运动"], answer: 1, explain: "have an impact on... 是四级必考搭配，意为“对……产生影响”。" },
          { type: "骨架识别", q: "在「Walking can lift your mood.」中，谓语动词是：", options: ["Walking", "can lift", "your", "mood"], answer: 1, explain: "情态动词 can + 实义动词 lift 共同组成句子的谓语。" },
          { type: "主干抓取", q: "「A rich social life can lower stress levels and boost heart health.」中，谁能降低压力、增强心脏健康？", options: ["stress levels", "a rich social life", "heart health", "social support"], answer: 1, explain: "句首主语是 A rich social life，后面两个动作都由它发出。" },
          { type: "真题拆解", q: "在「Several recent studies have found that even low-intensity exercise, done for a short amount of time, can have a meaningful impact on health.」中，真正发出 can have 动作的主语是：", options: ["recent studies", "a short amount of time", "low-intensity exercise", "health"], answer: 2, explain: "done for a short amount of time 是修饰 exercise 的插入语，真正主语是 exercise。" },
          { type: "真题理解", q: "根据 2023.12 真题句意，下列哪项符合研究发现？", options: ["只有高强度长时间运动才有益健康", "短时间的低强度运动也能对健康产生积极影响", "低强度运动对健康毫无意义", "必须每天运动超过一小时"], answer: 1, explain: "even low-intensity exercise... can have a meaningful impact on health 明确说明低强度短时间运动也有意义。" }
        ]
      },
      {
        id: "1-2",
        title: "第2章 · 时态与被动一眼辨认",
        summary: "零基础看长句常分不清「是现在还是过去」「是主动做还是被别人做」。只需盯住动词的 4 种核心形态！",
        evolution: [
          { label: "① 主动一般态", en: "People built the supermarket.", zh: "人们建了这家超市。" },
          { label: "② 变成被动态", en: "Big houses are advertised as a reward.", zh: "大房子被宣传为一种回报。" },
          { label: "③ 变成四级真题", en: "Big houses are advertised as a reward for hard work and diligence, turning housing from a basic necessity into a luxury.", zh: "大房子被宣传为努力工作和勤奋的回报，从而把住房从基本必需品变成了奢侈品。" }
        ],
        points: [
          "主动完成时：`have / has / had + 过去分词`（已经做了……），别把 `has` 当成“拥有”！",
          "被动语态：`be (am/is/are/was/were/been) + 过去分词`（被……了），四级阅读里 40% 以上的句子都带被动！",
          "正在进行：`be + doing`（正在做……）；一般将来：`will + 动词原形`。"
        ],
        vocab: [
          { w: "advertise", p: "/ˈædvətaɪz/", m: "v. 做广告，宣传" },
          { w: "reward", p: "/rɪˈwɔːd/", m: "n. 回报，奖励" },
          { w: "diligence", p: "/ˈdɪlɪdʒəns/", m: "n. 勤奋" },
          { w: "necessity", p: "/nəˈsesəti/", m: "n. 必需品" },
          { w: "luxury", p: "/ˈlʌkʃəri/", m: "n. 奢侈品" },
          { w: "implement", p: "/ˈɪmplɪment/", m: "v. 实施，执行" }
        ],
        labs: [
          {
            source: "热身短句 · 现在完成时",
            segments: [
              { t: "Attitudes towards paternity leave", zh: "对陪产假的态度", k: "subj" },
              { t: "have drastically changed", zh: "已经剧烈地改变了", k: "verb" },
              { t: "in the last five years.", zh: "在过去五年里。", k: "mod", tag: "时间状语" }
            ],
            zh: "在过去五年里，人们对陪产假的态度发生了剧烈变化。",
            tip: "have + changed 是现在完成时，表示从五年前持续到现在的改变。"
          },
          {
            source: "热身短句 · 一般过去时被动",
            segments: [
              { t: "The traditional school year", zh: "传统学年制", k: "subj" },
              { t: "was first implemented", zh: "最早被实行", k: "verb" },
              { t: "in an agricultural society.", zh: "在一个农业社会中。", k: "mod", tag: "地点/背景状语" }
            ],
            zh: "传统学年制最早是在农业社会时期开始实行的。",
            tip: "was + implemented 是被动语态，表示学年制“被实行”。"
          },
          {
            source: "2023.06 四级套1 · 仔细阅读 Passage 1",
            segments: [
              { t: "Big houses", zh: "大房子", k: "subj" },
              { t: "are advertised", zh: "被宣传为", k: "verb" },
              { t: "as a reward for hard work and diligence,", zh: "作为努力工作和勤奋的回报，", k: "obj" },
              { t: "turning housing from a basic necessity into a luxury.", zh: "从而把住房从基本必需品变成了奢侈品。", k: "mod", tag: "现在分词作结果状语" }
            ],
            zh: "大房子被宣传为努力工作和勤奋的回报，从而把住房从基本必需品变成了奢侈品。",
            tip: "are advertised 被动语态作主句谓语；后面的 turning... 表示这件事造成的社会后果。"
          },
          {
            source: "2023.12 四级套2 · Section B",
            segments: [
              { t: "In May,", zh: "在五月，", k: "mod", tag: "时间" },
              { t: "male employees", zh: "男性员工", k: "subj" },
              { t: "claimed", zh: "声称", k: "verb" },
              { t: "they", zh: "他们", k: "subj" },
              { t: "were illegally denied", zh: "被非法剥夺了", k: "verb" },
              { t: "access to paid parental leave.", zh: "享受带薪育儿假的权利。", k: "obj" }
            ],
            zh: "五月，男性员工声称他们被非法剥夺了享受带薪育儿假的权利。",
            tip: "were denied 是被动语态（be denied sth. = 被拒绝给予某物 / 被剥夺某权利）。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「turning housing from a basic necessity into a luxury」中，necessity 的意思是：", options: ["奢侈品", "必需品", "房间", "奖励"], answer: 1, explain: "necessity 意为“必需品”，与后面的 luxury（奢侈品）构成反义对比。" },
          { type: "语态辨析", q: "在「Big houses are advertised as a reward...」中，are advertised 的意思是：", options: ["大房子自己做广告", "大房子被宣传为……", "大房子曾经广告过", "大房子正在建造"], answer: 1, explain: "be + 过去分词构成被动语态，意为“被宣传为”。" },
          { type: "时态识别", q: "「Attitudes have drastically changed」中的 have changed 表达什么时间概念？", options: ["将来要发生", "正在发生", "从过去持续至今已经发生的变化", "被动语态"], answer: 2, explain: "have/has + done 为现在完成时，强调过去发生并延续/影响到现在的变化。" },
          { type: "真题词组", q: "「they were illegally denied access to paid parental leave」准确的意思是：", options: ["他们主动拒绝休育儿假", "他们被非法拒绝享受带薪育儿假", "他们非法申请了育儿假", "他们得到了全额补贴"], answer: 1, explain: "were denied 为被动语态，意为“被拒绝给予（某种权利或机会）”。" },
          { type: "真题理解", q: "根据 2023.06 真题句，把大房子宣传为勤奋的回报带来了什么结果？", options: ["人人都能买得起大房子", "住房从基本必需品变成了奢侈品", "人们不再努力工作", "房子面积变小了"], answer: 1, explain: "turning housing from a basic necessity into a luxury 直接点明后果。" }
        ]
      },
      {
        id: "1-3",
        title: "第3章 · 否定、疑问与倒装语序",
        summary: "看懂否定词（not / no / never / hardly）和把词序倒过来的句型，就不会把文章的意思理解成反话！",
        evolution: [
          { label: "① 正常语序", en: "A complication comes with usability.", zh: "实用性带来了一个难题。" },
          { label: "② 介短提前倒装", en: "With its extreme usability comes a complication.", zh: "伴随着极高的实用性而来的，是一个难题。" },
          { label: "③ 变成四级真题", en: "But with its extreme usability comes a complication: what do you do if you strongly feel something should not be done, even if the data insists that it should?", zh: "但伴随着极高的实用性而来的，是一个棘手问题：即使数据坚持认为某件事应该做，如果你强烈觉得不该做，你该怎么办？" }
        ],
        points: [
          "看到句首是介词短语（With...）后面直接跟动词 `comes / lies / stands`，后面的名词才是真正主语（全部倒装）。",
          "疑问句语序放在 `what / where / how` 开头时表示提问；但放在动词后面当宾语从句时要变回陈述语序。",
          "留意隐性否定词：`no longer`（不再）、`hardly`（几乎不）、`neither... nor...`（既不……也不……）。"
        ],
        vocab: [
          { w: "complication", p: "/ˌkɒmplɪˈkeɪʃn/", m: "n. 复杂情况，棘手问题" },
          { w: "usability", p: "/ˌjuːzəˈbɪləti/", m: "n. 实用性，可用性" },
          { w: "suspicion", p: "/səˈspɪʃn/", m: "n. 怀疑" },
          { w: "multiply", p: "/ˈmʌltɪplaɪ/", m: "v. 成倍增加，繁殖" },
          { w: "tolerate", p: "/ˈtɒləreɪt/", m: "v. 容忍，宽容" },
          { w: "desirable", p: "/dɪˈzaɪərəbl/", m: "adj. 令人向往的，可取的" }
        ],
        labs: [
          {
            source: "热身短句 · 否定与 no longer",
            segments: [
              { t: "Students", zh: "学生们", k: "subj" },
              { t: "no longer spend", zh: "不再花费", k: "verb" },
              { t: "summers", zh: "整个夏天", k: "obj" },
              { t: "farming.", zh: "去务农。", k: "mod", tag: "动名词" }
            ],
            zh: "学生们不再把整个夏天花在务农上了。",
            tip: "no longer = not... any longer，表示“不再”。"
          },
          {
            source: "热身短句 · neither...nor 并列否定",
            segments: [
              { t: "It", zh: "这件事", k: "subj" },
              { t: "is", zh: "是", k: "verb" },
              { t: "neither desirable nor morally acceptable.", zh: "既不可取，在道德上也不可接受。", k: "obj" }
            ],
            zh: "这既不可取，在道德上也是不可接受的。",
            tip: "neither A nor B 意为“既不 A 也不 B”，整句话表达全盘否定态度！"
          },
          {
            source: "2023.12 四级套3 · 仔细阅读 Passage 2",
            segments: [
              { t: "But with its extreme usability", zh: "但伴随着它极高的实用性", k: "mod", tag: "介短提前(倒装)" },
              { t: "comes", zh: "而来的是", k: "verb" },
              { t: "a complication:", zh: "一个棘手问题：", k: "subj" },
              { t: "what do you do", zh: "你该怎么办", k: "plain" },
              { t: "if you strongly feel something should not be done,", zh: "如果你强烈觉得某事不该做，", k: "mod", tag: "条件状从" },
              { t: "even if the data insists that it should?", zh: "即使数据坚持认为它应该（被做）？", k: "mod", tag: "让步状从" }
            ],
            zh: "但伴随着极高的实用性而来的，是一个棘手问题：即使数据坚持认为某件事应该做，如果你强烈觉得不该做，你该怎么办？",
            tip: "前半句全部倒装，真正主语是 a complication；末尾 that it should 后省略了 be done。"
          },
          {
            source: "2023.06 四级套2 · 仔细阅读 Passage 1",
            segments: [
              { t: "In the early days,", zh: "在早期，", k: "mod", tag: "时间状语" },
              { t: "as the supermarket multiplied,", zh: "随着超市数量成倍增加，", k: "mod", tag: "时间状从" },
              { t: "so did", zh: "（也同样增加了）", k: "verb" },
              { t: "our suspicion of it.", zh: "我们对它的怀疑。", k: "subj" }
            ],
            zh: "在早期，随着超市数量成倍增加，人们对它的怀疑也随之增加。",
            tip: "so + 助动词 did + 主语，表示“……也一样”，did 替代前面的 multiplied。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「neither desirable nor morally acceptable」表达的作者态度是：", options: ["完全赞同", "既不可取也不可接受（坚决否定）", "有些犹豫", "值得尝试"], answer: 1, explain: "neither... nor... 表示“既不……也不……”，明确否定。" },
          { type: "语序还原", q: "「with its extreme usability comes a complication」中，真正的主语是：", options: ["its extreme usability", "comes", "a complication", "with"], answer: 2, explain: "介词短语放句首引起全部倒装，正常语序是 A complication comes with its extreme usability。" },
          { type: "替代词识别", q: "在「as the supermarket multiplied, so did our suspicion of it」中，did 的意思是：", options: ["做了坏事", "替代前面的 multiplied（成倍增加）", "表示过去常常", "没有实际含义"], answer: 1, explain: "so did... 中的 did 为助动词，代指前面出现过的动词 multiplied。" },
          { type: "省略补全", q: "「even if the data insists that it should」末尾省略了什么内容？", options: ["not be done", "be done", "feel strongly", "come with usability"], answer: 1, explain: "承接前文的 something should not be done，后面省略了 be done。" },
          { type: "真题理解", q: "2023.12 套3 的那句真题揭示了商业决策中的什么矛盾？", options: ["数据永远都是错的", "直觉与数据分析结论发生冲突时该如何抉择", "大家都不喜欢使用数据", "数据太复杂导致电脑死机"], answer: 1, explain: "“你强烈觉得不该做”代表直觉，“数据坚持认为应该做”代表数据分析，两者冲突构成难题。" }
        ]
      },
      {
        id: "1-4",
        title: "第4章 · 长串并列与共享成分",
        summary: "四级喜欢用 `A, B, and C` 一口气并列三个长动作或三个被动状态，读的时候一定要看清谁和谁并列，别漏掉前面共享的助动词！",
        evolution: [
          { label: "① 单个被动", en: "Supermarkets are blamed.", zh: "超市受到指责。" },
          { label: "② 三个并列", en: "They are attacked, blamed, and accused.", zh: "它们受到攻击、受到指责，并且受到指控。" },
          { label: "③ 变成四级真题", en: "For more than a decade, they have been under attack from e-commerce giants, blamed for making Americans fat, and accused of contributing to climate change.", zh: "十多年来，它们一直受到电商巨头的冲击，被指责让美国人变胖，并被指控加剧了气候变化。" }
        ],
        points: [
          "遇到 `, and` 时，看紧 `and` 后面的第一个词是什么词性（名词/动词原形/过去分词/to do），然后往前找长得一模一样的队友！",
          "在 `have been [A], [B], and [C]` 结构中，B 和 C 都共用前面的 `have been`，千万别把过去分词当主动过去式。"
        ],
        vocab: [
          { w: "giant", p: "/ˈdʒaɪənt/", m: "n. 巨头，巨人" },
          { w: "accuse", p: "/əˈkjuːz/", m: "v. 指控，指责" },
          { w: "contribute to", p: "/kənˈtrɪbjuːt/", m: "导致，促成，贡献" },
          { w: "rivalry", p: "/ˈraɪvəlri/", m: "n. 竞争，对抗" },
          { w: "hinder", p: "/ˈhɪndə(r)/", m: "v. 阻碍" },
          { w: "ultimately", p: "/ˈʌltɪmətli/", m: "adv. 最终" }
        ],
        labs: [
          {
            source: "热身短句 · 三个动词原形并列",
            segments: [
              { t: "Social support", zh: "社交支持", k: "subj" },
              { t: "can lower", zh: "能降低", k: "verb" },
              { t: "stress,", zh: "压力，", k: "obj" },
              { t: "improve", zh: "改善", k: "verb" },
              { t: "mood,", zh: "情绪，", k: "obj" },
              { t: "and boost", zh: "并提升", k: "verb" },
              { t: "heart health.", zh: "心脏健康。", k: "obj" }
            ],
            zh: "社交支持能降低压力、改善情绪并提升心脏健康。",
            tip: "can + (1) lower... (2) improve... and (3) boost... 三个动词原形共享前面的 can。"
          },
          {
            source: "热身短句 · 动名词并列作宾语",
            segments: [
              { t: "Shopping for food", zh: "买食物", k: "subj" },
              { t: "involved", zh: "过去常涉及", k: "verb" },
              { t: "mud, noisy chickens, bargaining, and getting short-changed.", zh: "泥泞、吵闹的鸡、讨价还价，以及被缺斤少两。", k: "obj" }
            ],
            zh: "过去买食物免不了踩泥巴、面对吵闹的鸡、讨价还价，以及被少找零钱。",
            tip: "involved 后面一口气并列了四个名词/动名词宾语。"
          },
          {
            source: "2023.06 四级套2 · 仔细阅读 Passage 1",
            segments: [
              { t: "For more than a decade,", zh: "十多年来，", k: "mod", tag: "时间状语" },
              { t: "they", zh: "它们（超市）", k: "subj" },
              { t: "have been", zh: "一直", k: "verb" },
              { t: "under attack from e-commerce giants,", zh: "处于电商巨头的攻击之下，", k: "obj" },
              { t: "blamed for making Americans fat,", zh: "被指责让美国人变胖，", k: "obj" },
              { t: "and accused of contributing to climate change.", zh: "并被指控加剧了气候变化。", k: "obj" }
            ],
            zh: "十多年来，它们一直受到电商巨头的冲击，被指责让美国人变胖，并被指控加剧了气候变化。",
            tip: "have been 统领了后面的三件事：under attack / blamed / accused。"
          },
          {
            source: "2023.12 四级套2 · 仔细阅读 Passage 1",
            segments: [
              { t: "Competitive rivalry", zh: "竞争对抗", k: "subj" },
              { t: "can also hinder", zh: "也可能阻碍", k: "verb" },
              { t: "effective decision-making", zh: "有效决策", k: "obj" },
              { t: "and increase", zh: "并且增加", k: "verb" },
              { t: "your willingness to take risks,", zh: "你冒险的意愿，", k: "obj" },
              { t: "behaviors that can ultimately hurt your venture's success.", zh: "这些行为最终会损害你创业的成功。", k: "mod", tag: "总结同位语" }
            ],
            zh: "竞争对抗也可能阻碍有效决策并增加你冒险的意愿，这些行为最终会损害你创业的成功。",
            tip: "can hinder... and (can) increase... 并列两个动词；结尾 behaviors 总结前面两件事。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「accused of contributing to climate change」中，contribute to 在这里的意思是：", options: ["向……捐款", "写文章投给……", "导致 / 促成 / 加剧", "解决"], answer: 2, explain: "contribute to + 负面现象（如 climate change）常译为“导致、促成、加剧”。" },
          { type: "共享识别", q: "在「they have been under attack..., blamed for..., and accused of...」中，blamed 和 accused 共用了前面的哪两个词？", options: ["For more", "they have been", "e-commerce giants", "making Americans"], answer: 1, explain: "共用 they have been，构成被动状态并列。" },
          { type: "逻辑方向", q: "上面那句话里，“让美国人变胖”和“加剧气候变化”是谁对谁的指责？", options: ["超市指责电商巨头", "外界对超市的指责与指控", "美国人指责气候变化", "电商指责消费者"], answer: 1, explain: "they 指超市，have been blamed / accused 表明超市是被指责的对象。" },
          { type: "并列配对", q: "在「Competitive rivalry can also hinder effective decision-making and increase your willingness...」中，increase 和谁是并列关系？", options: ["rivalry", "hinder", "decision-making", "take risks"], answer: 1, explain: "can (1) hinder... and (2) increase...，两个动词原形并列。" },
          { type: "真题理解", q: "根据第二句真题，竞争对抗带来的两个负面结果是什么？", options: ["帮助保持专注和提高效率", "阻碍有效决策和增加冒险意愿", "降低企业声誉和增加利润", "减少工作时间和减轻压力"], answer: 1, explain: "hinder effective decision-making and increase your willingness to take risks。" }
        ]
      }
    ]
  },
  {
    id: "p2",
    name: "阶段二 · 句子的各种“小挂件”（第 5–8 章）",
    subtitle: "名词后面拖一长串？破折号插在中间？学会把介词短语、插入语和非谓语摘下来看",
    stages: [
      {
        id: "2-1",
        title: "第5章 · 介词短语后置定语（从后往前翻）",
        summary: "中文把修饰语放前面（“在图书馆里的男孩”），英文把介词短语放名词后面（the boy in the library）。记住：介词短语永远不是主干心脏！",
        evolution: [
          { label: "① 核心名词", en: "They announced a settlement.", zh: "他们宣布了一项和解协议。" },
          { label: "② 加一个介短", en: "They announced a settlement with JPMorgan Chase.", zh: "他们宣布了一项与摩根大通的和解协议。" },
          { label: "③ 变成四级真题", en: "In May, the ACLU and Outten & Golden LLP announced a historic class-action $5m settlement with JPMorgan Chase on behalf of male employees who claim they were illegally denied access to paid parental leave.", zh: "五月，美国公民自由联盟和 Outten & Golden 律师事务所代表声称被非法剥夺带薪育儿假的男性员工，宣布与摩根大通达成一项历史性的 500 万美元集体诉讼和解协议。" }
        ],
        points: [
          "常见介词：`of / in / on / at / with / for / by / to / from / on behalf of`。",
          "遇到连续好几个介词短语（A of B in C for D），先抓住最前面那个核心名词 A，后面的全当补充细节！"
        ],
        vocab: [
          { w: "settlement", p: "/ˈsetlmənt/", m: "n. 和解协议，解决" },
          { w: "on behalf of", p: "", m: "prep. 代表……" },
          { w: "criteria", p: "/kraɪˈtɪəriə/", m: "n. 标准（criterion 复数）" },
          { w: "constraint", p: "/kənˈstreɪnt/", m: "n. 限制，约束" },
          { w: "practicality", p: "/ˌpræktɪˈkæləti/", m: "n. 实用性" },
          { w: "literacy", p: "/ˈlɪtərəsi/", m: "n. 识字，读写能力" }
        ],
        labs: [
          {
            source: "热身短句 · of 连环修饰",
            segments: [
              { t: "The solution", zh: "解决办法", k: "subj" },
              { t: "to this dilemma", zh: "（针对这个困境的）", k: "mod", tag: "to介短定语" },
              { t: "is", zh: "是", k: "verb" },
              { t: "combining data and instincts.", zh: "把数据和直觉结合起来。", k: "obj" }
            ],
            zh: "解决这个困境的办法是把数据和直觉结合起来。",
            tip: "solution to...（……的解决办法），不要把 dilemma 当主语，主语是 The solution。"
          },
          {
            source: "热身短句 · 介短作地点/时间",
            segments: [
              { t: "The first thing", zh: "第一件事", k: "subj" },
              { t: "[that] you notice", zh: "（你注意到的）", k: "mod", tag: "省that定从" },
              { t: "in the staircase to the studio on Canal Street", zh: "在通往运河街工作室的楼梯上", k: "mod", tag: "三层介词短语" },
              { t: "is", zh: "是", k: "verb" },
              { t: "the measured thumping.", zh: "有节奏的嘭嘭声。", k: "obj" }
            ],
            zh: "在通往运河街工作室的楼梯上，你首先注意到的就是那有节奏的嘭嘭声。",
            tip: "in... to... on... 连叠三个地点介词短语，全剥掉后骨架就是：The first thing is the thumping。"
          },
          {
            source: "2023.12 四级套2 · Section B",
            segments: [
              { t: "In May,", zh: "五月，", k: "mod", tag: "时间状语" },
              { t: "the ACLU and Outten & Golden LLP", zh: "美国公民自由联盟与 O&G 律所", k: "subj" },
              { t: "announced", zh: "宣布了", k: "verb" },
              { t: "a historic class-action $5m settlement", zh: "一项历史性的500万美元集体诉讼和解协议", k: "obj" },
              { t: "with JPMorgan Chase", zh: "（与摩根大通达成的）", k: "mod", tag: "with介短" },
              { t: "on behalf of male employees", zh: "代表男性员工", k: "mod", tag: "on behalf of介短" },
              { t: "who claim they were illegally denied access to paid parental leave.", zh: "（他们声称被非法剥夺了带薪育儿假）。", k: "mod", tag: "who定从" }
            ],
            zh: "五月，美国公民自由联盟与 Outten & Golden 律所代表声称被非法剥夺带薪育儿假的男性员工，宣布与摩根大通达成一项历史性的 500 万美元集体诉讼和解协议。",
            tip: "先看主干「两机构宣布了500万和解协议」，再挂上「和谁达成」「代表谁」。"
          },
          {
            source: "2023.12 四级套3 · 仔细阅读 Passage 2",
            segments: [
              { t: "Absence of definitive criteria,", zh: "缺乏明确标准，", k: "subj" },
              { t: "and time and resource constraints,", zh: "以及时间和资源的限制，", k: "subj" },
              { t: "and novel situations", zh: "还有新奇情况", k: "subj" },
              { t: "are", zh: "都是", k: "verb" },
              { t: "instances", zh: "实例", k: "obj" },
              { t: "which limit the practicality of data.", zh: "（限制数据实用性的）。", k: "mod", tag: "which定从" }
            ],
            zh: "缺乏明确标准、时间和资源受限以及新奇的情况，都是限制数据实用性的实例。",
            tip: "of definitive criteria 修饰 Absence，真正主语是 Absence, constraints, and situations。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「on behalf of male employees」中，on behalf of 的意思是：", options: ["反对……", "代表……", "除了……", "因为……"], answer: 1, explain: "on behalf of 是四级高频介词短语，意为“代表”。" },
          { type: "核心词锁定", q: "在「The first thing you notice in the staircase to the studio on Canal Street is the thumping.」中，动词 is 的主语核心词是：", options: ["staircase", "studio", "Canal Street", "The first thing"], answer: 3, explain: "in... / to... / on... 全是地点介词短语，主语核心词是 The first thing。" },
          { type: "主干抓取", q: "在 ACLU 那句真题长句中，和解协议是跟哪家公司达成的？", options: ["ACLU", "Outten & Golden LLP", "JPMorgan Chase", "Canal Street"], answer: 2, explain: "settlement with JPMorgan Chase 表示“与摩根大通达成的和解协议”。" },
          { type: "短语搭配", q: "「Absence of definitive criteria」的意思是：", options: ["明确标准的增加", "缺乏明确的标准", "标准过多", "拒绝所有标准"], answer: 1, explain: "absence of... 意为“缺乏……、没有……”。" },
          { type: "真题理解", q: "根据 2023.12 套3 真题，下列哪项不会限制数据的实用性？", options: ["缺乏明确标准", "时间与资源受限", "全新未知的局面", "拥有充足的历史经验与充裕时间"], answer: 3, explain: "原文列举的三项限制因素正是缺乏明确标准、时间资源限制和新情况。" }
        ]
      },
      {
        id: "2-2",
        title: "第6章 · 破折号与双逗号插入语（跳读法）",
        summary: "主语说完刚要接动词，突然插进一对破折号 `— ... —` 或双逗号 `, ... ,`！零基础最容易在这里读断片。学会「跳读法」：先跨过去把主谓连上，再回头看括号里的解释！",
        evolution: [
          { label: "① 主干骨架", en: "The concept explains these differences.", zh: "这个概念解释了这些差异。" },
          { label: "② 加上破折号解释", en: "The concept — negative reciprocity — explains these differences.", zh: "这个概念——负互惠——解释了这些差异。" },
          { label: "③ 变成四级真题", en: "We found that only the concept of “negative reciprocity” — in which an employee who feels unfairly treated engages in negative behaviors, such as spending their company’s money less carefully — explains these differences.", zh: "我们发现，只有“负互惠”这一概念——即感到受到不公平对待的员工会做出消极行为（如花公司钱不那么小心）——能够解释这些差异。" }
        ],
        points: [
          "遇到成对破折号 `— ... —`：它就是高级版的小括号，里面是在解释前面那个生僻词（比如 negative reciprocity），先跳过去找 explains！",
          "遇到句中双逗号插入语（如 `, however,` / `, for example,` / `, aged 24,`）：直接忽略或放句首翻译。"
        ],
        vocab: [
          { w: "reciprocity", p: "/ˌresɪˈprɒsəti/", m: "n. 互惠，相互回报" },
          { w: "unfairly", p: "/ˌʌnˈfeəli/", m: "adv. 不公平地" },
          { w: "engage in", p: "", m: "参与，从事" },
          { w: "homogeneity", p: "/ˌhɒmədʒəˈniːəti/", m: "n. 同质性，单一性" },
          { w: "vulnerable", p: "/ˈvʌlnərəbl/", m: "adj. 脆弱的，易受伤害的" },
          { w: "drought", p: "/draʊt/", m: "n. 干旱" }
        ],
        labs: [
          {
            source: "热身短句 · 双逗号插入语",
            segments: [
              { t: "Alvin Chau,", zh: "周奥文，", k: "subj" },
              { t: "aged 26,", zh: "今年26岁，", k: "mod", tag: "年龄插入语" },
              { t: "is", zh: "是", k: "verb" },
              { t: "an environmental consultant by day.", zh: "白天是一名环境顾问。", k: "obj" }
            ],
            zh: "今年 26 岁的周奥文，白天是一名环境顾问。",
            tip: "跳过 , aged 26, 直接连读 Alvin Chau is an environmental consultant。"
          },
          {
            source: "热身短句 · 单破折号解释术语",
            segments: [
              { t: "Even turning your voice into text", zh: "甚至把你的声音转成文字", k: "subj" },
              { t: "— automatic speech recognition —", zh: "——也就是自动语音识别——", k: "mod", tag: "破折号解释" },
              { t: "is", zh: "是", k: "verb" },
              { t: "one of the hardest problems to solve.", zh: "最难解决的问题之一。", k: "obj" }
            ],
            zh: "甚至把你的声音转换成文字——也就是自动语音识别——都是最难解决的问题之一。",
            tip: "破折号中间就是前面 turning your voice into text 的专业叫法。"
          },
          {
            source: "2023.12 四级套1 · 仔细阅读 Passage 2",
            segments: [
              { t: "We", zh: "我们", k: "subj" },
              { t: "found", zh: "发现", k: "verb" },
              { t: "that only the concept of “negative reciprocity”", zh: "只有“负互惠”这个概念", k: "subj" },
              { t: "— in which an employee who feels unfairly treated engages in negative behaviors, such as spending their company’s money less carefully —", zh: "——在这个概念里，觉得受了不公对待的员工会做出消极行为，比如不太省着花公司的钱——", k: "mod", tag: "超长破折号插入" },
              { t: "explains", zh: "能够解释", k: "verb" },
              { t: "these differences.", zh: "这些差异。", k: "obj" }
            ],
            zh: "我们发现，只有“负互惠”这一概念——即感到受到不公平对待的员工会做出诸如花公司钱不那么小心的消极行为——能够解释这些差异。",
            tip: "破折号长达 21 词，跳过破折号就能瞬间看到主语 concept 对应的谓语 explains！"
          },
          {
            source: "2023.12 四级套1 · Section B",
            segments: [
              { t: "Homogeneity and overdependence on a handful of staples", zh: "饮食同质化以及对少数主食的过度依赖", k: "subj" },
              { t: "leaves", zh: "使得", k: "verb" },
              { t: "us", zh: "我们", k: "obj" },
              { t: "vulnerable to threats such as drought, disease and pests", zh: "容易受到干旱、疾病和虫害等威胁的伤害", k: "obj" },
              { t: "— all of which are predicted to worsen.", zh: "——所有这些威胁预计都将恶化。", k: "mod", tag: "句尾破折号补充" }
            ],
            zh: "饮食同质化和对少数主食的过度依赖使我们容易受到干旱、疾病和虫害等威胁的打击——所有这些威胁预计都将恶化。",
            tip: "句尾破折号用来引出补充定从 all of which...。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「vulnerable to threats」中，vulnerable 的意思是：", options: ["免疫的", "强壮的", "脆弱的、易受攻击的", "高兴的"], answer: 2, explain: "be vulnerable to... 是四级必考高频搭配，意为“易受……伤害/影响的”。" },
          { type: "跳读抓谓语", q: "「Even turning your voice into text — automatic speech recognition — is one of the hardest problems.」的主句谓语动词是：", options: ["turning", "recognition", "is", "solve"], answer: 2, explain: "跳过破折号后，主语 turning your voice into text 后面紧跟谓语 is。" },
          { type: "核心词义", q: "根据破折号里的解释，什么是「negative reciprocity（负互惠）」？", options: ["员工免费加班回报公司", "觉得受委屈的员工以消极行为（如乱花公司钱）来报复", "公司给员工发双倍奖金", "男女员工同工同酬"], answer: 1, explain: "破折号直接下定义：feel unfairly treated -> engages in negative behaviors。" },
          { type: "指代识别", q: "「threats such as drought, disease and pests — all of which are predicted to worsen」中，all of which 指代的是：", options: ["主食", "同质化", "干旱、疾病和虫害这些威胁", "农民"], answer: 2, explain: "all of which 指代前面刚列举的三项 threats。" },
          { type: "真题理解", q: "剥离破折号后，“negative reciprocity”那句话的核心结论是：", options: ["员工经常花公司很多钱", "只有“负互惠”概念能解释差旅订票上的差异", "没有员工受到公平对待", "所有员工都会做出消极行为"], answer: 1, explain: "主干即 only the concept of 'negative reciprocity' explains these differences。" }
        ]
      },
      {
        id: "2-3",
        title: "第7章 · -ing 与 -ed 作定语（被……的 / 正在……的）",
        summary: "英文名词后面直接跟着一个 `-ed` 或 `-ing` 短语时，它是在当定语修饰前面那个名词！记住：`-ed` 表被动（“被……的”），`-ing` 表主动（“正在/……的”）。",
        evolution: [
          { label: "① 简单名词", en: "The book warned us.", zh: "这本书警告了我们。" },
          { label: "② 加上 -ed 后置定语", en: "The book, published in 1957, warned us.", zh: "1957年出版的那本书警告了我们。" },
          { label: "③ 变成四级真题", en: "The book The Hidden Persuaders, published in 1957, warned that supermarkets were putting women in a “hypnoidal trance.”", zh: "1957年出版的《隐蔽的说服者》一书警告称，超市正在让女性陷入一种“催眠恍惚状态”。" }
        ],
        points: [
          "别把名词后面的 `-ed` 误认成谓语动词！检验方法：看名词和这个词是不是被动关系（书是被出版的），以及后面还有没有真正的主句谓语（warned）。",
          "`-ing` 在名词后表示这个名词「主动发出」该动作（例如 `people living on the streets` = 住在街上的人）。"
        ],
        vocab: [
          { w: "publish", p: "/ˈpʌblɪʃ/", m: "v. 出版，发表" },
          { w: "proportion", p: "/prəˈpɔːʃn/", m: "n. 比例，份额" },
          { w: "deprivation", p: "/ˌdeprɪˈveɪʃn/", m: "n. 匮乏，剥夺" },
          { w: "associated with", p: "", m: "与……相关的" },
          { w: "predict", p: "/prɪˈdɪkt/", m: "v. 预测，预言" },
          { w: "enforce", p: "/ɪnˈfɔːs/", m: "v. 实施，强制执行" }
        ],
        labs: [
          {
            source: "热身短句 · -ing 后置定语",
            segments: [
              { t: "People", zh: "人们", k: "subj" },
              { t: "living on the streets", zh: "（露宿街头的）", k: "mod", tag: "-ing后置定语" },
              { t: "lost", zh: "失去了", k: "verb" },
              { t: "their jobs.", zh: "工作。", k: "obj" }
            ],
            zh: "露宿街头的人们失去了工作。",
            tip: "People 主动 live on the streets，用 -ing 放名词后作定语。"
          },
          {
            source: "热身短句 · -ed 后置定语",
            segments: [
              { t: "Data", zh: "数据", k: "subj" },
              { t: "collected from surveys", zh: "（从问卷中收集来的）", k: "mod", tag: "-ed后置定语" },
              { t: "showed", zh: "显示出", k: "verb" },
              { t: "clear differences.", zh: "明显的差异。", k: "obj" }
            ],
            zh: "从问卷中收集来的数据显示出了明显的差异。",
            tip: "Data 是被收集的，所以用 collected，真正谓语是后面的 showed。"
          },
          {
            source: "2023.06 四级套2 · 仔细阅读 Passage 1",
            segments: [
              { t: "The book The Hidden Persuaders,", zh: "《隐蔽的说服者》这本书，", k: "subj" },
              { t: "published in 1957,", zh: "（于1957年出版的），", k: "mod", tag: "-ed后置定语" },
              { t: "warned", zh: "警告称", k: "verb" },
              { t: "that supermarkets were putting women in a “hypnoidal trance.”", zh: "超市正在让女性陷入“催眠恍惚状态”。", k: "obj" }
            ],
            zh: "1957年出版的《隐蔽的说服者》一书警告称，超市正在让女性陷入一种“催眠恍惚状态”。",
            tip: "published 是被动定语修饰书，warned 才是谓语。"
          },
          {
            source: "2023.06 四级套3 · 仔细阅读 Passage 2",
            segments: [
              { t: "It", zh: "（形式主语）", k: "subj" },
              { t: "is", zh: "是", k: "verb" },
              { t: "neither desirable nor morally acceptable", zh: "既不可取、道德上也不可接受的", k: "obj" },
              { t: "to tolerate the signs of deprivation", zh: "去容忍匮乏的迹象", k: "subj" },
              { t: "more commonly associated with the slums of Rio de Janeiro.", zh: "（那些通常更常与里约热内卢贫民窟联系在一起的）。", k: "mod", tag: "-ed短语后置定语" }
            ],
            zh: "容忍那些通常更常出现在里约热内卢贫民窟的匮乏迹象，既不可取，在道德上也不可接受。",
            tip: "signs 是“被与贫民窟联系在一起”，用 associated with 放名词后面修饰 signs。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「signs of deprivation」中，deprivation 的意思是：", options: ["繁荣", "匮乏，贫困", "装饰", "庆祝"], answer: 1, explain: "deprivation 指基本生活条件的“匮乏、被剥夺”。" },
          { type: "辨别真谓语", q: "「Data collected from surveys showed clear differences.」中，哪个词是主句谓语？", options: ["collected", "surveys", "showed", "differences"], answer: 2, explain: "collected 是被动分词作定语，showed 才是发出动作的谓语动词。" },
          { type: "主被动判断", q: "「people _____ on the streets」修饰“露宿街头的人”，括号内应该用：", options: ["lived", "living", "to living", "live"], answer: 1, explain: "people 主动“居住”在街头，主动关系用现在分词 living。" },
          { type: "修饰对象", q: "「the signs of deprivation more commonly associated with the slums...」中，associated with 修饰的是：", options: ["Rio de Janeiro", "it", "the signs of deprivation", "morally acceptable"], answer: 2, explain: "意为“通常与贫民窟联系在一起的匮乏迹象”。" },
          { type: "真题理解", q: "根据 2023.06 套3 真题，作者对洛杉矶出现类似贫民窟的匮乏迹象持什么态度？", options: ["认为可以理解并容忍", "坚决认为不可取且不道德", "认为这是里约热内卢的问题", "表示毫无办法"], answer: 1, explain: "neither desirable nor morally acceptable（既不可取也不道德）。" }
        ]
      },
      {
        id: "2-4",
        title: "第8章 · 分词作结果状语 & 不定式 to do",
        summary: "四级长句末尾的 `, leading to... / causing... / leaving...` 表示“从而导致……”；而 `to do` 则常表示“为了……（目的）”或放在句首当主语！",
        evolution: [
          { label: "① 基本结果", en: "Public spaces became privatized.", zh: "公共空间变得私有化了。" },
          { label: "② 加上结果状语", en: "Public spaces became privatized, leading to a reduction in facilities.", zh: "公共空间私有化，导致了设施减少。" },
          { label: "③ 变成四级真题", en: "Second, once-public spaces, where people from diverse backgrounds used to come together, have increasingly become privatized, leading to a reduction in the number of public facilities available to all, and a reduced quality of life for many.", zh: "其次，曾经供不同背景人群聚集的公共空间日益私有化，这导致可供全民使用的公共设施数量减少，并降低了许多人的生活质量。" }
        ],
        points: [
          "逗号 + `leading to / causing / revealing / leaving...`：表示前面整句话的动作「造成的结果或揭示的道理」。",
          "句首看到 `To + 动词原形`：如果后面有逗号接另一句话，表「为了……（目的）」；如果直接跟 `is / requires`，整个 `to do` 就是主语！"
        ],
        vocab: [
          { w: "privatize", p: "/ˈpraɪvətaɪz/", m: "v. 使私有化" },
          { w: "reduction", p: "/rɪˈdʌkʃn/", m: "n. 减少，降低" },
          { w: "facility", p: "/fəˈsɪləti/", m: "n. 设施，设备" },
          { w: "municipal", p: "/mjuːˈnɪsɪpl/", m: "adj. 市政的，城市的" },
          { w: "reveal", p: "/rɪˈviːl/", m: "v. 揭示，展现" },
          { w: "domain", p: "/dəˈmeɪn/", m: "n. 领域，范围" }
        ],
        labs: [
          {
            source: "热身短句 · to do 表目的",
            segments: [
              { t: "To keep your bones strong,", zh: "为了保持你的骨骼强壮，", k: "mod", tag: "to do目的状语" },
              { t: "you", zh: "你", k: "subj" },
              { t: "have to keep exercising.", zh: "必须坚持锻炼。", k: "verb" }
            ],
            zh: "为了保持骨骼强壮，你必须坚持锻炼。",
            tip: "来自 2023.06 套3 Section A 原句！句首 To keep... 有逗号隔开，表“为了……”。"
          },
          {
            source: "热身短句 · leaving 结果状语",
            segments: [
              { t: "Public municipal pools", zh: "市政公共泳池", k: "subj" },
              { t: "were often closed,", zh: "经常关闭，", k: "verb" },
              { t: "leaving low-income people nowhere to swim.", zh: "使得低收入人群无处游泳。", k: "mod", tag: "-ing结果状语" }
            ],
            zh: "市政公共泳池经常关闭，导致低收入人群无处游泳。",
            tip: "leaving + 人 + nowhere to do = 让某人没地方去做某事。"
          },
          {
            source: "2023.06 四级套1 · 仔细阅读 Passage 1",
            segments: [
              { t: "Second,", zh: "其次，", k: "mod", tag: "过渡" },
              { t: "once-public spaces,", zh: "曾经公共的空间，", k: "subj" },
              { t: "where people from diverse backgrounds used to come together,", zh: "（不同背景的人们曾在此相聚），", k: "mod", tag: "where定从" },
              { t: "have increasingly become privatized,", zh: "已经日益变得私有化，", k: "verb" },
              { t: "leading to a reduction in the number of public facilities available to all,", zh: "导致可供所有人使用的公共设施数量减少，", k: "mod", tag: "-ing结果状语" },
              { t: "and a reduced quality of life for many.", zh: "以及许多人生活质量的下降。", k: "mod", tag: "并列结果" }
            ],
            zh: "其次，曾经供不同背景人群聚集的公共空间日益私有化，导致可供所有人使用的公共设施数量减少，并降低了许多人的生活质量。",
            tip: "遇到 `, leading to...` 立刻抓住它后面的结果，这是四级因果题的出题靶心！"
          },
          {
            source: "2023.06 四级套1 · Section B",
            segments: [
              { t: "To cover multiple domains and to be able to have a conversation with users on every single topic", zh: "要覆盖多个领域并且能和用户聊遍每一个话题", k: "subj" },
              { t: "is", zh: "（这件事）是", k: "verb" },
              { t: "still a long way off.", zh: "仍然还有很长的路要走。", k: "obj" }
            ],
            zh: "要涵盖多个领域并能够与用户就每一个话题展开对话，还有很长的路要走。",
            tip: "两个并列的不定式短语直接作主语，后面跟单数系动词 is。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「a reduction in the number of public facilities」中，reduction 的意思是：", options: ["增加", "减少", "翻新", "浪费"], answer: 1, explain: "reduce 的名词形式，意为“减少、降低”。" },
          { type: "目的vs主语", q: "在「To keep your bones strong, you have to keep exercising.」中，To keep... 作什么成分？", options: ["主语", "表语", "目的状语（为了……）", "宾语"], answer: 2, explain: "后面有逗号接完整主句 you have to keep exercising，表目的。" },
          { type: "结构识别", q: "在「To cover multiple domains... is still a long way off.」中，To cover... 作什么成分？", options: ["目的状语", "句子的主语", "宾语补足语", "定语"], answer: 1, explain: "直接放在系动词 is 前面且没有逗号分隔，作主语。" },
          { type: "因果定位", q: "在 2023.06 套1 Passage 1 中，公共空间私有化直接导致了什么？", options: ["人们更愿意去公共泳池", "公共设施减少及许多人生活质量降低", "不同背景的人交流变多", "房屋价格大幅下跌"], answer: 1, explain: "leading to a reduction in the number of public facilities... and a reduced quality of life。" },
          { type: "真题理解", q: "「leaving low-income people nowhere to swim」表达的结果是：", options: ["低收入者搬去了别处", "低收入者失去了游泳的场所", "低收入者自己修建了泳池", "游泳池专门对低收入者开放"], answer: 1, explain: "nowhere to swim 字面意为“没有地方可以游泳”。" }
        ]
      }
    ]
  }
);
