window.CET4_PARTS = window.CET4_PARTS || [];

window.CET4_PARTS.push(
  {
    id: "p3",
    name: "阶段三 · 从句拆解（第 9–13 章）",
    subtitle: "把「小句子」塞进「大句子」——彻底搞懂 that / which / who / what 为啥满天飞",
    stages: [
      {
        id: "3-1",
        title: "第9章 · 定语从句入门与多层嵌套",
        summary: "定语从句就是把一个句子用 `who / which / that` 粘在名词后面，用来说明「什么样的……」；四级常在定从里再套第二层定从。",
        evolution: [
          { label: "① 基础句", en: "The researchers found no limit.", zh: "研究人员没有发现上限。" },
          { label: "② 加一层定从", en: "Contrary to some research that found an upper limit, the researchers found no limit.", zh: "与一些发现上限的研究相反，研究人员没有发现上限。" },
          { label: "③ 变成四级真题", en: "Contrary to some research that has found an upper limit to the amount of exercise that is healthy, the researchers found that there was seemingly no limit to the longevity benefits of exercise.", zh: "与一些发现健康运动量存在上限的研究相反，研究人员发现运动带来的长寿益处似乎没有上限。" }
        ],
        points: [
          "看到 `名词 + who/which/that + 句子`，括号立刻从引导词打开，一直包到定语从句结束！",
          "修饰人用 `who / that`，修饰物/事用 `which / that`。",
          "出现多层定从（研究 that... 运动量 that...）时，从里往外翻，先看最后一层修饰哪个词。"
        ],
        vocab: [
          { w: "contrary to", p: "", m: "与……相反" },
          { w: "seemingly", p: "/ˈsiːmɪŋli/", m: "adv. 表面上，似乎" },
          { w: "longevity", p: "/lɒnˈdʒevəti/", m: "n. 长寿，寿命" },
          { w: "qualified", p: "/ˈkwɒlɪfaɪd/", m: "adj. 有资格的，胜任的" },
          { w: "notion", p: "/ˈnəʊʃn/", m: "n. 观念，想法" },
          { w: "survey", p: "/ˈsɜːveɪ/", m: "v./n. 调查" }
        ],
        labs: [
          {
            source: "热身短句 · who 修饰人",
            segments: [
              { t: "The agent", zh: "那位代理人", k: "subj" },
              { t: "who made the purchase", zh: "（完成这笔购买的）", k: "mod", tag: "who定从" },
              { t: "was", zh: "是", k: "verb" },
              { t: "the legendary horse trainer.", zh: "传奇驯马师。", k: "obj" }
            ],
            zh: "完成那笔交易的代理人就是如今传奇的驯马师。",
            tip: "来自 2023.12 套3 Passage 1！who 指代前面的 The agent。"
          },
          {
            source: "热身短句 · which 修饰物",
            segments: [
              { t: "This", zh: "这", k: "subj" },
              { t: "was", zh: "是", k: "verb" },
              { t: "just an obstacle to greatness", zh: "通往伟大道路上的一个障碍", k: "obj" },
              { t: "that had to be overcome.", zh: "（必须被克服的）。", k: "mod", tag: "that定从" }
            ],
            zh: "这只是通往伟大道路上必须克服的一个障碍。",
            tip: "that 修饰前面的 an obstacle。"
          },
          {
            source: "2023.12 四级套1 · Section A",
            segments: [
              { t: "Contrary to some research", zh: "与某些研究相反", k: "mod", tag: "对比介短" },
              { t: "that has found an upper limit to the amount of exercise", zh: "（那些研究曾发现一个运动量的上限，", k: "mod", tag: "第1层定从" },
              { t: "that is healthy,", zh: "即健康的运动量），", k: "mod", tag: "第2层嵌套定从" },
              { t: "the researchers", zh: "本次研究人员", k: "subj" },
              { t: "found", zh: "发现", k: "verb" },
              { t: "that there was seemingly no limit to the longevity benefits of exercise.", zh: "运动带来的长寿益处似乎没有上限。", k: "obj" }
            ],
            zh: "与一些发现健康运动量存在上限的研究相反，研究人员发现运动带来的长寿益处似乎没有上限。",
            tip: "两个定语从句层层嵌套，第三个 that 则是 found 的宾语从句。"
          },
          {
            source: "2023.12 四级套2 · Section B",
            segments: [
              { t: "Research by the Boston College Center,", zh: "波士顿学院中心的研究", k: "subj" },
              { t: "which surveyed new parents at four large US companies", zh: "（调查了四家美国大公司的新晋父母，", k: "mod", tag: "which定从" },
              { t: "who were qualified for taking at least six weeks paid leave,", zh: "这些父母有资格休至少六周带薪假），", k: "mod", tag: "who嵌套定从" },
              { t: "found", zh: "发现", k: "verb" },
              { t: "that 81% of employees said the notion has become more acceptable.", zh: "81%的员工表示这一观念已变得更易接受。", k: "obj" }
            ],
            zh: "波士顿学院中心对四家美国大公司中符合至少六周带薪假条件的新晋父母进行了调查，结果发现 81% 的员工表示这一观念已变得更容易被接受。",
            tip: "主干只有 Research found that...，中间插入了双层定语从句。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「Contrary to some research」中，contrary to 的意思是：", options: ["根据……", "与……相反", "多亏了……", "关于……"], answer: 1, explain: "contrary to... 表示“与……相反”。" },
          { type: "引导词匹配", q: "「The agent _____ made the purchase was a trainer.」横线处不能填：", options: ["who", "that", "which", "（不能省略）"], answer: 2, explain: "先行词 The agent 是人，不能用指物的 which。" },
          { type: "嵌套定位", q: "在「research that has found an upper limit to the amount of exercise that is healthy」中，that is healthy 修饰的是：", options: ["research", "upper limit", "exercise", "the researchers"], answer: 2, explain: "就近修饰前面的 exercise（健康的运动）。" },
          { type: "主谓连线", q: "在「Research by the Boston College Center, which surveyed..., who were qualified..., found that...」中，Research 的真正谓语动词是：", options: ["surveyed", "were qualified", "found", "said"], answer: 2, explain: "surveyed 和 were qualified 都在定语从句内部，逗号结束后的 found 才是主句谓语。" },
          { type: "真题理解", q: "2023.12 套1 这句真题想要反驳的旧观点是什么？", options: ["运动会让人短寿", "健康的运动量存在一个上限", "只有高强度运动才有长寿效果", "运动没有任何好处"], answer: 1, explain: "Contrary to some research that has found an upper limit...，旧研究认为存在上限，新研究认为似乎没有上限。" }
        ]
      },
      {
        id: "3-2",
        title: "第10章 · 介词+which、where 与逗号 which",
        summary: "四级定从的三大升级形态：① `above which / in which`；② `where / when / why`；③ 逗号后面的 `, which`（常用来指代前面整件事！）。",
        evolution: [
          { label: "① 拆分两句话", en: "There is a threshold. Yields decline above it.", zh: "存在一个临界点。产量在它之上会下降。" },
          { label: "② 合并成介词+which", en: "There is a threshold above which yields decline.", zh: "存在一个临界点，超过它产量就会下降。" },
          { label: "③ 变成四级真题", en: "Other studies, including studies of wheat in India and corn in Africa, also found that there is a threshold above which yields sharply decline.", zh: "包括印度小麦和非洲玉米研究在内的其他研究也发现，存在一个临界点，超过该临界点产量就会急剧下降。" }
        ],
        points: [
          "遇到 `名词 + 介词 + which`，直接把「介词 + 名词」放到从句尾巴去读！例如 `a system in which we live` = `we live in a system`。",
          "遇到 `逗号 + which + 单三动词`，这 90% 是在总结评论前面整句话，翻成「这一点 / 这件事……」。"
        ],
        vocab: [
          { w: "threshold", p: "/ˈθreʃhəʊld/", m: "n. 临界点，门槛" },
          { w: "yield", p: "/jiːld/", m: "n. 产量 v. 产生，屈服" },
          { w: "sharply", p: "/ˈʃɑːpli/", m: "adv. 急剧地，敏锐地" },
          { w: "circumstance", p: "/ˈsɜːkəmstəns/", m: "n. 环境，情况" },
          { w: "vital", p: "/ˈvaɪtl/", m: "adj. 至关重要的" },
          { w: "hardly", p: "/ˈhɑːdli/", m: "adv. 几乎不" }
        ],
        labs: [
          {
            source: "热身短句 · in which = where",
            segments: [
              { t: "This", zh: "这", k: "subj" },
              { t: "is", zh: "是", k: "verb" },
              { t: "the system", zh: "这样一种制度", k: "obj" },
              { t: "in which the rich enjoy a luxurious life.", zh: "（在这个制度里富人享受奢侈生活）。", k: "mod", tag: "in which定从" }
            ],
            zh: "这就是富人享受奢侈生活的制度。",
            tip: "还原读法：the rich enjoy a luxurious life IN the system。"
          },
          {
            source: "热身短句 · 逗号 which 指代前句",
            segments: [
              { t: "She won the first prize,", zh: "她获得了一等奖，", k: "plain" },
              { t: "which", zh: "这件事", k: "subj" },
              { t: "made", zh: "让", k: "verb" },
              { t: "her parents proud.", zh: "她父母很骄傲。", k: "obj" }
            ],
            zh: "她获得了一等奖，这让她的父母非常自豪。",
            tip: "which 指的是“她获奖”这件事，注意逗号后只能用 which，不能用 that。"
          },
          {
            source: "2023.12 四级套1 · Section B",
            segments: [
              { t: "Other studies,", zh: "其他研究，", k: "subj" },
              { t: "including studies of wheat in India and corn in Africa,", zh: "（包括印度小麦和非洲玉米的研究），", k: "mod", tag: "介短插入" },
              { t: "also found", zh: "也发现", k: "verb" },
              { t: "that there is a threshold", zh: "存在一个临界点", k: "obj" },
              { t: "above which yields sharply decline.", zh: "（超过该临界点产量就会急剧下降）。", k: "mod", tag: "above which定从" }
            ],
            zh: "包括对印度小麦和非洲玉米的研究在内的其他研究也发现，存在一个临界点，超过该临界点产量就会急剧下降。",
            tip: "above which = above the threshold（超过这个温度临界点）。"
          },
          {
            source: "2023.06 四级套2 · 仔细阅读 Passage 2",
            segments: [
              { t: "While some children visit summer camps,", zh: "虽然有些孩子去夏令营，", k: "mod", tag: "对比状从" },
              { t: "most stay at home,", zh: "大多数孩子待在家里，", k: "subj" },
              { t: "watching TV or playing games on electronic devices,", zh: "看电视或在电子设备上玩游戏，", k: "mod", tag: "伴随状语" },
              { t: "which hardly benefits them.", zh: "而这对他们几乎没有任何好处。", k: "mod", tag: "which指代前文整件事" }
            ],
            zh: "虽然有些孩子去参加夏令营，但大多数孩子待在家里看电视或玩电子游戏，而这对他们几乎毫无益处。",
            tip: "hardly 表“几乎不”，which 指待在家里看电视玩游戏这件事。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「yields sharply decline」中，yields 的意思是：", options: ["田野", "农作物产量", "温度", "价格"], answer: 1, explain: "农业文章中 yield 作名词指“产量”。" },
          { type: "介词+which还原", q: "「a threshold above which yields sharply decline」相当于：", options: ["yields decline below the threshold", "yields sharply decline above the threshold", "the threshold declines above yields", "yields reach the threshold"], answer: 1, explain: "把先行词放回介词 above 后：yields sharply decline above the threshold。" },
          { type: "非限定指代", q: "在「most stay at home, watching TV or playing games..., which hardly benefits them」中，which 指代：", options: ["summer camps", "electronic devices", "待在家里看电视玩游戏这件事", "most children"], answer: 2, explain: "benefits 为单三形式，且语义上指整个居家娱乐行为对孩子没好处。" },
          { type: "语法禁区", q: "非限定性定语从句（逗号后面）能用 that 代替 which 吗？", options: ["可以，完全一样", "绝对不能，逗号后只能用 which/who/whose/where 等", "只能指人时用 that", "只有否定句可以用"], answer: 1, explain: "非限定性定语从句禁用 that。" },
          { type: "真题理解", q: "根据 2023.06 套2 真题句，大多数孩子暑假在家的状态对他们有何影响？", options: ["极大促进身心健康", "几乎没有什么好处（hardly benefits them）", "能提升团队协作能力", "有助于准备新学期"], answer: 1, explain: "which hardly benefits them 意为“几乎无益”。" }
        ]
      },
      {
        id: "3-3",
        title: "第11章 · 最隐蔽的“无引导词定从”",
        summary: "零基础读句子突然卡壳的最大元凶：两个名词/代词直接撞在一起（如 `the foods we eat`），中间没有 that/which！这其实是省略了引导词的定语从句。",
        evolution: [
          { label: "① 完整定从", en: "The foods that we eat are similar.", zh: "我们吃的食物很相似。" },
          { label: "② 省掉 that", en: "The foods we eat are similar.", zh: "我们吃的食物很相似。" },
          { label: "③ 变成四级真题", en: "The foods we eat globally today are 36% more similar than they were in 1961.", zh: "如今全球人们吃的食物比 1961 年时相似了 36%。" }
        ],
        points: [
          "触发条件：当关系代词（that/which/who）在定从里作**宾语**时，老外经常把它直接省掉！",
          "识别绝招：一旦看到「名词 + 代词/人名 + 动词」（比如 `the knowledge they acquired`、`the animals we raise`），立刻给后面加上括号当定语！"
        ],
        vocab: [
          { w: "acquire", p: "/əˈkwaɪə(r)/", m: "v. 获得，学到" },
          { w: "phenomenon", p: "/fəˈnɒmɪnən/", m: "n. 现象" },
          { w: "standardisation", p: "/ˌstændədaɪˈzeɪʃn/", m: "n. 标准化" },
          { w: "similar", p: "/ˈsɪmələ(r)/", m: "adj. 相似的" },
          { w: "failure", p: "/ˈfeɪljə(r)/", m: "n. 失败" },
          { w: "survive", p: "/səˈvaɪv/", m: "v. 幸存，熬过" }
        ],
        labs: [
          {
            source: "热身短句 · 名+代碰撞",
            segments: [
              { t: "Every failure", zh: "每一次失败", k: "subj" },
              { t: "[that] you survive", zh: "（你熬过去的）", k: "mod", tag: "省that定从" },
              { t: "is", zh: "都是", k: "verb" },
              { t: "a learning experience.", zh: "一次学习经历。", k: "obj" }
            ],
            zh: "你熬过去的每一次失败，都是一次学习的经历。",
            tip: "来自 2023.06 套1 Passage 2 原句！failure + you survive 碰撞在一起，中间省了 that。"
          },
          {
            source: "热身短句 · 宾语位省 that",
            segments: [
              { t: "The methods", zh: "那些方法", k: "subj" },
              { t: "[that] their forefathers used", zh: "（他们祖先过去使用的）", k: "mod", tag: "省that定从" },
              { t: "don't seem to work", zh: "似乎不太管用了", k: "verb" },
              { t: "these days.", zh: "如今。", k: "mod", tag: "时间状语" }
            ],
            zh: "他们祖先过去用来预测天气的方法，如今似乎不管用了。",
            tip: "来自 2023.06 套1 Section B！methods + their forefathers used + don't seem..."
          },
          {
            source: "2023.12 四级套1 · Section B",
            segments: [
              { t: "The foods", zh: "食物", k: "subj" },
              { t: "[that] we eat globally today", zh: "（我们如今在全球吃的）", k: "mod", tag: "省that定从" },
              { t: "are", zh: "是", k: "verb" },
              { t: "36% more similar than they were in 1961.", zh: "比1961年相似了36%。", k: "obj" }
            ],
            zh: "如今我们在全球吃到的食物比 1961 年时相似了 36%。",
            tip: "foods 后直接跟 we eat...，剥离修饰后主干为 The foods are 36% more similar。"
          },
          {
            source: "2023.06 四级套2 · 仔细阅读 Passage 2",
            segments: [
              { t: "One benefit", zh: "一个好处", k: "subj" },
              { t: "is", zh: "是", k: "verb" },
              { t: "that students will not fall victim to the “summer slide,” or the phenomenon", zh: "学生不会沦为“暑期滑坡”的受害者——即这样一种现象", k: "obj" },
              { t: "where students forget some of the knowledge", zh: "（在这个现象中学生会遗忘一些知识", k: "mod", tag: "where定从" },
              { t: "[that] they have acquired.", zh: "——那些他们已经学到的）。", k: "mod", tag: "省that定从" }
            ],
            zh: "一个好处是学生不会沦为“暑期滑坡”的受害者——即学生会遗忘已学知识的现象。",
            tip: "knowledge they have acquired 中间省略了关系代词 that。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「the knowledge they have acquired」中，acquired 的意思是：", options: ["忘记", "获得/学到", "发明", "怀疑"], answer: 1, explain: "acquire 为四级核心动词，意为“获得、学到（知识/技能）”。" },
          { type: "碰撞识别", q: "「Every failure you survive is a learning experience.」中，哪个词是主句的系动词？", options: ["failure", "survive", "is", "learning"], answer: 2, explain: "you survive 是修饰 failure 的定语从句，后面的 is 才是主句谓语。" },
          { type: "省词判断", q: "以下哪组词之间省略了定语从句引导词 that/which？", options: ["in the past", "the animals we raise", "very important", "have been closed"], answer: 1, explain: "名词 the animals 直接碰上代词主语 we + 动词 raise，省略了作宾语的 that/which。" },
          { type: "词义判断", q: "「The methods their forefathers used don't seem to work」中，work 的意思是：", options: ["工作", "奏效/起作用", "辛苦", "劳动"], answer: 1, explain: "主语是方法（methods）时，work 常译为“起作用、奏效”。" },
          { type: "真题理解", q: "根据 2023.12 真题句，过去几十年全球饮食发生了什么变化？", options: ["各地食物越来越不同", "全球人们吃的食物相似度比 1961 年提高了 36%", "1961 年的食物比现在更好吃", "人类吃得越来越少"], answer: 1, explain: "36% more similar than they were in 1961，说明饮食越来越趋同标准化。" }
        ]
      },
      {
        id: "3-4",
        title: "第12章 · 名词性从句（What 主语与 It 形式主语）",
        summary: "把一整个句子当成一个大名词，放到主语或宾语的位置！四级高频结构：① `What... is...`（……的事情是……）；② `It is... that/to do...`。",
        evolution: [
          { label: "① 简单主表", en: "This is the ability.", zh: "这就是那种能力。" },
          { label: "② 用 What 从句当主语", en: "What we call multitasking is the ability.", zh: "我们称之为多任务处理的东西就是这种能力。" },
          { label: "③ 变成四级真题", en: "What we call multitasking, therefore, is in reality the ability to move more or less quickly from one task to another.", zh: "因此，我们所谓的“多任务处理”，实际上只是在不同任务之间相对快速地切换的能力。" }
        ],
        points: [
          "`What` 放在句首时，不一定是疑问句！如果句尾是句号，且后面紧跟着动词 `is / means / matters`，整个 `What...` 就是句子的主语（意为「……的事情/东西」）。",
          "看到句首 `It is + 形容词 + that... / to do...`，`It` 只是个占位符，真正的主语在后面！"
        ],
        vocab: [
          { w: "multitasking", p: "/ˌmʌltiˈtɑːskɪŋ/", m: "n. 多任务处理" },
          { w: "in reality", p: "", m: "实际上，事实上" },
          { w: "more or less", p: "", m: "或多或少，几乎，大约" },
          { w: "dilemma", p: "/dɪˈlemə/", m: "n. 进退两难的困境" },
          { w: "practical", p: "/ˈpræktɪkl/", m: "adj. 实用的，实际的" },
          { w: "urgent", p: "/ˈɜːdʒənt/", m: "adj. 紧急的，迫切的" }
        ],
        labs: [
          {
            source: "热身短句 · What 主语从句",
            segments: [
              { t: "What makes you a good dancer", zh: "使你成为优秀舞者的东西", k: "subj" },
              { t: "is", zh: "是", k: "verb" },
              { t: "imagination.", zh: "想象力。", k: "obj" }
            ],
            zh: "让你成为一名优秀舞者的关键是想象力。",
            tip: "改编自 2023.06 套3 Section B：What 从句作主语，单数概念配 is。"
          },
          {
            source: "热身短句 · It 形式主语",
            segments: [
              { t: "It", zh: "（形式主语）", k: "subj" },
              { t: "is urgent", zh: "是迫切需要的", k: "verb" },
              { t: "that schools teach kids how to verify online information.", zh: "（学校教孩子如何核实网络信息这件事）。", k: "subj" }
            ],
            zh: "学校迫切需要教导孩子如何核实网络信息。",
            tip: "来自 2023.12 套3 Section B 第 37 题原句！"
          },
          {
            source: "2023.12 四级套2 · 仔细阅读 Passage 2",
            segments: [
              { t: "What we call multitasking,", zh: "我们称之为多任务处理的东西，", k: "subj" },
              { t: "therefore,", zh: "因此，", k: "mod", tag: "插入" },
              { t: "is", zh: "是", k: "verb" },
              { t: "in reality", zh: "实际上", k: "mod", tag: "插入" },
              { t: "the ability to move more or less quickly from one task to another.", zh: "从一项任务相对快速地切换到另一项任务的能力。", k: "obj" }
            ],
            zh: "因此，我们所谓的“多任务处理”，实际上只是在不同任务之间相对快速地切换的能力。",
            tip: "四级定义题模板句！跳过 therefore 和 in reality 两个插入语，主干一目了然。"
          },
          {
            source: "2023.12 四级套1 · Section B",
            segments: [
              { t: "What’s common to all studies", zh: "所有研究共同的地方", k: "subj" },
              { t: "is", zh: "是", k: "verb" },
              { t: "the finding", zh: "这样一个发现", k: "obj" },
              { t: "that extreme heat is damaging to crop growth,", zh: "（即极端高温会损害作物生长），", k: "mod", tag: "同位语从句" },
              { t: "although exact cutoffs vary by crop.", zh: "尽管具体临界温度因作物而异。", k: "mod", tag: "让步状从" }
            ],
            zh: "所有研究的共同之处在于这样一个发现：极端高温对农作物生长有害，尽管具体的临界温度因作物而异。",
            tip: "What 主语从句 + that 同位语从句 + although 让步状语从句完美组合。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「in reality」在句子中的意思是：", options: ["在梦里", "在理论上", "实际上 / 事实上", "在未来"], answer: 2, explain: "in reality = in fact = actually，意为“实际上”。" },
          { type: "主语识别", q: "在「What makes you a good dancer is imagination.」中，句子的主语是：", options: ["you", "a good dancer", "What makes you a good dancer", "imagination"], answer: 2, explain: "What 引导整个名词性主语从句。" },
          { type: "形式主语", q: "在「It is urgent that schools teach kids...」中，It 指代的是：", options: ["schools", "kids", "that schools teach kids how to verify online information 这件事", "information"], answer: 2, explain: "It 是形式主语，真正主语是后面的 that 从句。" },
          { type: "真题理解", q: "根据 2023.12 套2 真题句，“多任务处理”在本质上其实是：", options: ["大脑同时全速处理十件事", "在不同任务之间快速切换的能力", "像电脑一样的硬件功能", "完全不需要注意力的行为"], answer: 1, explain: "the ability to move more or less quickly from one task to another（快速切换任务的能力）。" },
          { type: "真题理解", q: "根据「What’s common to all studies is the finding that extreme heat is damaging to crop growth」，所有研究的共识是：", options: ["所有作物的耐热温度都相同", "极端高温对作物生长有害", "高温能提升小麦产量", "不同研究结论完全矛盾"], answer: 1, explain: "common to all studies is the finding that extreme heat is damaging to crop growth。" }
        ]
      },
      {
        id: "3-5",
        title: "第13章 · 同位语从句（fact / finding / notion that...）",
        summary: "四级真题看到 `the fact that... / the idea that... / the notion that...` 时，后面那串 `that + 完整句子` 不是修饰，而是把「这个事实/观念的具体内容」摊开给你看！",
        evolution: [
          { label: "① 简单句", en: "The mere fact has a positive effect.", zh: "仅仅这个事实就有积极影响。" },
          { label: "② 加上同位语解释", en: "The mere fact that they perceive it as multitasking has a positive effect.", zh: "仅仅他们把它看作多任务处理这一事实就有积极影响。" },
          { label: "③ 变成四级真题", en: "A recent study concluded that regardless of whether people are actually handling several tasks or not, the mere fact that they perceive this activity as multitasking has a positive effect on their performance.", zh: "最近的一项研究得出结论：无论人们实际上是否同时处理多项任务，仅仅是他们将这项活动视为“多任务处理”这一事实，就对他们的表现产生了积极影响。" }
        ],
        points: [
          "常带同位语从句的「抽象名词」清单：`fact / finding / notion / idea / evidence / belief / conclusion`。",
          "核心技巧：读到 `the fact that [很长一串]`，先把 `[很长一串]` 括起来，往后接上它的动词（比如 `has a positive effect`）！"
        ],
        vocab: [
          { w: "conclude", p: "/kənˈkluːd/", m: "v. 得出结论，结束" },
          { w: "regardless of", p: "", m: "prep. 不管，无论" },
          { w: "perceive", p: "/pəˈsiːv/", m: "v. 感知，把……视为" },
          { w: "evidence", p: "/ˈevɪdəns/", m: "n. 证据，证明" },
          { w: "standpoint", p: "/ˈstændpɔɪnt/", m: "n. 立场，观点" },
          { w: "engagement", p: "/ɪnˈɡeɪdʒmənt/", m: "n. 参与，约定" }
        ],
        labs: [
          {
            source: "热身短句 · the idea that...",
            segments: [
              { t: "The idea", zh: "这个观点", k: "subj" },
              { t: "that exercising for 10 minutes may be enough", zh: "（即每周运动10分钟就可能足够的这一观点）", k: "mod", tag: "that同位语从句" },
              { t: "is", zh: "是", k: "verb" },
              { t: "somewhat controversial.", zh: "有点争议的。", k: "obj" }
            ],
            zh: "每周只需运动 10 分钟就可能足够的观点，有点引起争议。",
            tip: "来自 2023.12 套1 Section A！The idea 是主语，that 从句说明这个观点的内容，is 是主句系动词。"
          },
          {
            source: "热身短句 · the evidence that...",
            segments: [
              { t: "Our results", zh: "我们的结果", k: "subj" },
              { t: "add to", zh: "增加了", k: "verb" },
              { t: "evidence", zh: "证据", k: "obj" },
              { t: "that women are less likely to engage in them.", zh: "（证明女性不太可能做出这些消极行为的）。", k: "mod", tag: "that同位语从句" }
            ],
            zh: "我们的结果进一步证明了女性不太可能做出这些消极行为。",
            tip: "来自 2023.12 套1 Passage 2！that 从句内容完整，解释 evidence 具体证明了什么。"
          },
          {
            source: "2023.12 四级套2 · 仔细阅读 Passage 2",
            segments: [
              { t: "A recent study", zh: "最近的一项研究", k: "subj" },
              { t: "concluded", zh: "得出结论", k: "verb" },
              { t: "that regardless of whether people are actually handling several tasks or not,", zh: "无论人们实际上是否同时处理多项任务，", k: "mod", tag: "无论是否(介短)" },
              { t: "the mere fact", zh: "仅仅这样一个事实", k: "subj" },
              { t: "that they perceive this activity as multitasking", zh: "（即他们把这项活动看作多任务处理）", k: "mod", tag: "that同位语从句" },
              { t: "has", zh: "就对……具有", k: "verb" },
              { t: "a positive effect on their performance.", zh: "积极影响（对他们的表现）。", k: "obj" }
            ],
            zh: "最近一项研究得出结论：无论人们实际上是否同时处理多项任务，仅仅是他们将这项活动视为“多任务处理”这一事实，就对他们的表现产生了积极影响。",
            tip: "the mere fact + that 从句作主语，后面跟动词 has。"
          },
          {
            source: "2023.12 四级套1 · 仔细阅读 Passage 2",
            segments: [
              { t: "Further investigation", zh: "进一步的调查", k: "subj" },
              { t: "allowed us to conclude", zh: "让我们得出结论", k: "verb" },
              { t: "that this gap is largely explained by the fact", zh: "这一差距很大程度上可以由这样一个事实来解释：", k: "obj" },
              { t: "that women tended to book earlier than men, 1.8 days on average.", zh: "（即女性往往比男性更早订票这一事实，平均提前1.8天）。", k: "mod", tag: "that同位语从句" }
            ],
            zh: "进一步调查让我们得出结论：这一差距很大程度上可以由女性往往比男性更早订票（平均提前 1.8 天）这一事实来解释。",
            tip: "对应第 51 题答案：attributed to women booking earlier than men。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「regardless of whether people are handling several tasks」中，regardless of 的意思是：", options: ["由于", "不管 / 无论", "非常重视", "替代"], answer: 1, explain: "regardless of 是四级阅读高频介词短语，意为“不管、不顾”。" },
          { type: "主谓定位", q: "「The idea that exercising for 10 minutes may be enough is somewhat controversial.」中，The idea 对应的谓语动词是：", options: ["exercising", "may be", "is", "enough"], answer: 2, explain: "that 从句只是解释 idea 的具体内容，后面单个出来的 is 才是主句谓语。" },
          { type: "区分定从同位", q: "在「evidence that women are less likely to engage in them」中，that 引导的是：", options: ["定语从句（that 充当宾语）", "同位语从句（解释 evidence 的具体内容）", "原因状语从句", "形式主语"], answer: 1, explain: "women are less likely to engage in them 成分完整，不缺主宾，因此是同位语从句。" },
          { type: "真题理解", q: "根据 2023.12 套2 第 53 题原句，真正提升人们表现的原因是：", options: ["必须同时做五件以上的事", "无论实际是否在多任务，只要人们“以为自己在做多任务”", "完全不做多任务", "使用最新型电脑"], answer: 1, explain: "the mere fact that they perceive this activity as multitasking has a positive effect。" },
          { type: "真题理解", q: "根据 2023.12 套1 原句，为什么女性出差机票比男性便宜？", options: ["航空公司给女性打折", "女性往往比男性提前订票（平均早 1.8 天）", "女性只坐经济舱", "男性经常临时改签"], answer: 1, explain: "explained by the fact that women tended to book earlier than men。" }
        ]
      }
    ]
  },
  {
    id: "p4",
    name: "阶段四 · 逻辑连词与四级陷阱（第 14–17 章）",
    subtitle: "单词全认识，选项全做错？往往是看反了让步转折、隐性否定或代词指代！",
    stages: [
      {
        id: "4-1",
        title: "第14章 · 让步与转折（四级阅读出题率最高的考点）",
        summary: "四级出题人最爱考「前半句先退一步承认 A，后半句转折强调 B」。记住：**While / Although / Even though / Despite** 后面那截往往只是铺垫，真正的重点在主句！",
        evolution: [
          { label: "① 并列对比", en: "Ambition brings success, but it means nothing for health.", zh: "野心带来成功，但对健康毫无意义。" },
          { label: "② 升级成让步状语", en: "Even though ambitious people achieve success, such success means nothing for health.", zh: "尽管有野心的人能成功，但这种成功对健康毫无意义。" },
          { label: "③ 变成四级真题", en: "This implies that even though ambitious people are more likely to achieve conventional “success,” such success means nothing for their health and happiness.", zh: "这意味着，尽管有野心的人更有可能获得世俗意义上的“成功”，但这种成功对他们的健康和幸福毫无意义。" }
        ],
        points: [
          "`While` 放句首 80% 意为「虽然 / 尽管」，不要死翻成“当……的时候”。",
          "`Although / Though` 后面绝对不跟 `but`；但是英文经常用 `Although..., ...` 考你作者到底支持哪一方（永远选后半句主句观点！）。",
          "`Despite + 名词` = `Although + 句子`（尽管有……）。"
        ],
        vocab: [
          { w: "despite", p: "/dɪˈspaɪt/", m: "prep. 尽管，不管" },
          { w: "conventional", p: "/kənˈvenʃənl/", m: "adj. 传统的，世俗常规的" },
          { w: "imply", p: "/ɪmˈplaɪ/", m: "v. 暗示，意味" },
          { w: "vulnerable", p: "/ˈvʌlnərəbl/", m: "adj. 脆弱的" },
          { w: "intrusive", p: "/ɪnˈtruːsɪv/", m: "adj. 侵扰的，打扰私生活的" },
          { w: "counterpart", p: "/ˈkaʊntəpɑːt/", m: "n. 对应的人或物" }
        ],
        labs: [
          {
            source: "热身短句 · Although 让步",
            segments: [
              { t: "Although", zh: "虽然", k: "mod", tag: "让步连词" },
              { t: "exact cutoffs vary by crop,", zh: "具体的临界温度因作物而异，", k: "mod", tag: "让步状语从句" },
              { t: "extreme heat", zh: "极端高温", k: "subj" },
              { t: "is damaging", zh: "是有害的", k: "verb" },
              { t: "to crop growth.", zh: "（对作物生长而言）。", k: "obj" }
            ],
            zh: "虽然具体临界点因作物而异，但极端高温对作物生长是有害的。",
            tip: "重点落在主句：extreme heat is damaging to crop growth。"
          },
          {
            source: "热身短句 · Despite 介词让步",
            segments: [
              { t: "Despite progress,", zh: "尽管取得了进步，", k: "mod", tag: "尽管+名词" },
              { t: "this", zh: "这（33位女CEO）", k: "subj" },
              { t: "still represents", zh: "仍然只代表", k: "verb" },
              { t: "a tiny fraction of the total.", zh: "总数中的极小一部分。", k: "obj" }
            ],
            zh: "尽管取得了进步，但这仍然只占总数中极小的一部分。",
            tip: "Despite 是介词，后面直接接名词 progress，不要在 Despite 后加 of。"
          },
          {
            source: "2023.12 四级套1 · Section B",
            segments: [
              { t: "While this can be good news for the world’s poorest people", zh: "尽管这对世界最贫困的人口来说可能是好消息", k: "mod", tag: "While让步从句" },
              { t: "who now consume more calories, protein and fat than in the past,", zh: "（他们现在摄入比过去更多的热量、蛋白质和脂肪），", k: "mod", tag: "who定从" },
              { t: "homogeneity and overdependence on a handful of staples", zh: "食物同质化和对少数主食的过度依赖", k: "subj" },
              { t: "leaves", zh: "使", k: "verb" },
              { t: "us", zh: "我们", k: "obj" },
              { t: "vulnerable to threats such as drought, disease and pests.", zh: "易受干旱、疾病和虫害等威胁的伤害。", k: "obj" }
            ],
            zh: "尽管这对如今比过去摄入更多热量、蛋白质和脂肪的世界最贫困人口来说可能是好消息，但食物同质化和对少数主食的过度依赖使我们容易受到干旱、疾病和虫害等威胁的伤害。",
            tip: "句首 While 引导让步，后半句主句才是作者的警示重点。"
          },
          {
            source: "2023.06 四级套1 · 仔细阅读 Passage 2",
            segments: [
              { t: "This", zh: "这一点", k: "subj" },
              { t: "implies", zh: "意味着", k: "verb" },
              { t: "that even though ambitious people are more likely to achieve conventional “success,”", zh: "尽管有野心的人更有可能获得世俗“成功”，", k: "mod", tag: "even though让步" },
              { t: "such success", zh: "这样的成功", k: "subj" },
              { t: "means", zh: "意味着", k: "verb" },
              { t: "nothing for their health and happiness.", zh: "对他们的健康和幸福毫无意义。", k: "obj" }
            ],
            zh: "这意味着，尽管有野心的人更有可能获得世俗意义上的“成功”，但这种成功对他们的健康和幸福毫无意义。",
            tip: "对应当年第 55 题：作者建议把健康和幸福置于物质成功之上。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「achieve conventional “success”」中，conventional 的意思是：", options: ["意外的", "传统的 / 世俗普遍认为的", "巨大的", "虚假的"], answer: 1, explain: "conventional 指传统观念下、世俗标准的（如财富、地位）。" },
          { type: "语法纠错", q: "表示“尽管下着大雨，他还是按时到了”，以下哪句语法正确？", options: ["Despite of the heavy rain, he arrived on time.", "Although it rained heavily, but he arrived on time.", "Despite the heavy rain, he arrived on time.", "Despite it rained heavily, he arrived on time."], answer: 2, explain: "Despite 后直接接名词短语（不加 of，也不接完整从句）；Although 不与 but 连用。" },
          { type: "词义判断", q: "「While this can be good news..., homogeneity leaves us vulnerable...」中，While 的意思是：", options: ["当……时候", "只要", "虽然 / 尽管", "因为"], answer: 2, explain: "前后语义一正一反，句首 While 引导让步状语从句。" },
          { type: "作者态度", q: "在「even though ambitious people are more likely to achieve conventional 'success,' such success means nothing for their health and happiness」中，作者想强调的核心观点是：", options: ["每个人都应该成为有野心的人", "有野心的人肯定健康又幸福", "世俗的成功对健康和幸福没有意义", "不成功的人一定更快乐"], answer: 2, explain: "作者真正的态度在让步之后的逗号主句：means nothing for their health and happiness。" },
          { type: "真题理解", q: "根据 2023.12 套1 真题，作者认为全球饮食日益标准化有什么隐患？", options: ["贫困人口热量摄入不足", "让我们在干旱、疾病和虫害面前非常脆弱", "人们不再吃主食", "食物价格立刻降为零"], answer: 1, explain: "homogeneity and overdependence... leaves us vulnerable to threats。" }
        ]
      },
      {
        id: "4-2",
        title: "第15章 · 比较结构与条件结果（the more / such...that）",
        summary: "搞定四级两大逻辑句型：① `the more..., the more...`（越……就越……）；② `such / so ... that ...`（如此……以至于……）。",
        evolution: [
          { label: "① 简单因果", en: "We believe in hard work, so we admire busy people.", zh: "我们相信努力工作，所以我们钦佩忙人。" },
          { label: "② 升级成越…越…", en: "The more we believe in hard work, the more we admire busy people.", zh: "我们越相信努力工作，就越钦佩忙碌的人。" },
          { label: "③ 变成四级真题", en: "In other words, the more we believe that one has the opportunity for success based on hard work, the more we tend to think that people who skip leisure and work all the time are of higher standing.", zh: "换句话说，我们越相信一个人有机会靠努力获得成功，就越倾向于认为那些放弃休闲、一直工作的人地位更高。" }
        ],
        points: [
          "`The + 比较级..., the + 比较级...`：前面是“越……（条件）”，后面是“越……（结果）”。",
          "`so + 形容词/副词 + that...` / `such + 名词 + that...`：看到 so/such，赶紧往后找 `that` 引出的结果！",
          "留意 `even if`（即使……）和 `unless`（除非…… = if... not...）。"
        ],
        vocab: [
          { w: "standing", p: "/ˈstændɪŋ/", m: "n. 地位，声望" },
          { w: "leisure", p: "/ˈleʒə(r)/", m: "n. 休闲，闲暇" },
          { w: "tend to", p: "", m: "倾向于……" },
          { w: "marvel", p: "/ˈmɑːvl/", m: "n. 奇迹，令人惊奇的事物" },
          { w: "acute", p: "/əˈkjuːt/", m: "adj. 严重的，敏锐的" },
          { w: "impromptu", p: "/ɪmˈprɒmptjuː/", m: "adj. 即兴的" }
        ],
        labs: [
          {
            source: "热身短句 · the more..., the higher...",
            segments: [
              { t: "The more you reduce,", zh: "你削减得越多，", k: "mod", tag: "越……(条件)" },
              { t: "the shorter the supply,", zh: "供应就越短缺，", k: "plain" },
              { t: "and the higher the price will jump.", zh: "价格就会涨得越高。", k: "obj" }
            ],
            zh: "你削减得越多，供应就越短缺，价格就会涨得越高。",
            tip: "来自 2023.12 套1 Section B！三连 `the + 比较级` 层层推进。"
          },
          {
            source: "热身短句 · so... that... 结果",
            segments: [
              { t: "At last,", zh: "终于，", k: "mod", tag: "时间" },
              { t: "the problem", zh: "这个问题", k: "subj" },
              { t: "became", zh: "变得", k: "verb" },
              { t: "so acute — and so visible —", zh: "如此严峻——而且如此显而易见——", k: "obj" },
              { t: "that Los Angeles took extraordinary action.", zh: "以至于洛杉矶采取了非常举措。", k: "mod", tag: "that结果状从" }
            ],
            zh: "终于，这个问题变得如此严峻且显而易见，以至于洛杉矶采取了非凡的行动。",
            tip: "来自 2023.06 套3 Passage 2！so + adj. + that... 表结果。"
          },
          {
            source: "2023.12 四级套1 · 仔细阅读 Passage 1",
            segments: [
              { t: "In other words,", zh: "换句话说，", k: "mod", tag: "插入语" },
              { t: "the more we believe", zh: "我们越相信", k: "mod", tag: "越……" },
              { t: "that one has the opportunity for success based on hard work,", zh: "（一个人有机会靠努力工作获得成功），", k: "mod", tag: "believe宾从" },
              { t: "the more we tend to think", zh: "我们就越倾向于认为", k: "verb" },
              { t: "that people [who skip leisure and work all the time] are of higher standing.", zh: "那些放弃休闲一直工作的人地位更高。", k: "obj" }
            ],
            zh: "换句话说，我们越相信一个人有机会靠努力获得成功，就越倾向于认为那些放弃休闲、一直工作的人社会地位更高。",
            tip: "注意 `in other words`（换句话说）后面通常是对前文难句的解释，做阅读一定要重点看！"
          },
          {
            source: "2023.06 四级套2 · 仔细阅读 Passage 1",
            segments: [
              { t: "They", zh: "它们（超市）", k: "subj" },
              { t: "were", zh: "是", k: "verb" },
              { t: "such strange marvels", zh: "如此奇特的奇迹", k: "obj" },
              { t: "that, on her first official state visit to the United States in 1957,", zh: "以至于1957年首次正式访美时，", k: "mod", tag: "that结果+时间插入" },
              { t: "Queen Elizabeth II insisted on an impromptu tour of a Giant Food.", zh: "伊丽莎白二世女王坚持要即兴参观一家 Giant Food 超市。", k: "mod", tag: "结果主句" }
            ],
            zh: "超市是如此奇特的新鲜事物，以至于 1957 年英国女王伊丽莎白二世首次正式访美时，坚持要即兴参观一家超市。",
            tip: "such + 名词短语 + that 结果状语从句。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「people who skip leisure」中，skip 的意思是：", options: ["跳跃", "略过 / 放弃", "享受", "延长"], answer: 1, explain: "skip leisure 指“跳过、放弃休闲时间”。" },
          { type: "逻辑方向", q: "「The more you reduce, the shorter the supply, and the higher the price will jump.」说明当供应变短缺时，价格会：", options: ["下降", "保持不变", "大幅上涨", "消失"], answer: 2, explain: "the higher the price will jump（价格跳涨得越高）。" },
          { type: "结构辨析", q: "「so acute — and so visible — that Los Angeles took extraordinary action」属于什么结构？", options: ["定语从句", "so... that... 引导的结果状语从句", "让步状语从句", "同位语从句"], answer: 1, explain: "so + 形容词 + that 表示“如此……以至于……”。" },
          { type: "真题理解", q: "根据 2023.12 套1 Passage 1，为什么我们总觉得大忙人社会地位高？", options: ["因为他们工资确实最高", "因为我们越相信“努力能带来成功”，就越容易把一直工作的人看作高地位", "因为忙碌的人更懂时尚", "因为法律规定忙人地位高"], answer: 1, explain: "the more we believe success is based on hard work, the more we think busy people are of higher standing。" },
          { type: "阅读技巧", q: "在文章中看到「In other words, ...」时，意味着：", options: ["作者要完全推翻前文观点", "作者要用更直白的话解释刚刚说过的内容（常为考题定位句）", "故事已经讲完了", "下面要开始举无关例子"], answer: 1, explain: "In other words 意为“换句话说”，经常把前面晦涩的学术表达翻译成人话，极易出题。" }
        ]
      },
      {
        id: "4-3",
        title: "第16章 · 隐性否定与 be of + 抽象名词",
        summary: "四级喜欢不用 `not` 来表达否定（如 `by no means / hardly / far from / fail to`），而且喜欢把形容词写成高大上的 `be of + 名词`。",
        evolution: [
          { label: "① 大白话否定", en: "His fame did not decrease.", zh: "他的名声没有下降。" },
          { label: "② 换成隐性否定", en: "His fame by no means decreased.", zh: "他的名声绝没有下降。" },
          { label: "③ 变成四级真题", en: "He was retired soon after, but his public life and fame by no means decreased with the end of his career.", zh: "不久之后它就退役了，但它的公众生活和名声绝没有随着职业生涯的结束而减退。" }
        ],
        points: [
          "四级常见「伪装成肯定的否定词」：`by no means`（绝不）、`hardly`（几乎不）、`fail to do`（未能做）、`far from`（远非）、`anything but`（绝不）。",
          "`X, if not impossible` = 「即使不是不可能，至少也是 X」。",
          "`be of + 名词` = `be + 形容词`：比如 `of high status` = 地位高的；`of great importance` = 非常重要的。"
        ],
        vocab: [
          { w: "by no means", p: "", m: "绝不，丝毫不" },
          { w: "perceive", p: "/pəˈsiːv/", m: "v. 认为，感知" },
          { w: "attribution", p: "/ˌætrɪˈbjuːʃn/", m: "n. 归因，属性" },
          { w: "mobility", p: "/məʊˈbɪləti/", m: "n. 流动性" },
          { w: "decrease", p: "/dɪˈkriːs/", m: "v./n. 减少，下降" },
          { w: "indispensable", p: "/ˌɪndɪˈspensəbl/", m: "adj. 不可或缺的" }
        ],
        labs: [
          {
            source: "热身短句 · if not 递进",
            segments: [
              { t: "If you have too much ambition,", zh: "如果你的野心太大，", k: "mod", tag: "条件状从" },
              { t: "you'll find", zh: "你会发现", k: "verb" },
              { t: "this", zh: "这件事（改变方向）", k: "obj" },
              { t: "hard,", zh: "很难，", k: "obj" },
              { t: "if not impossible.", zh: "就算不是完全不可能。", k: "mod", tag: "递进插入" }
            ],
            zh: "如果你的野心太大，你会发现改变方向即便不是完全不可能，也是极难的。",
            tip: "来自 2023.06 套1 Passage 2！if not impossible 强调程度极高。"
          },
          {
            source: "热身短句 · by no means 强否定",
            segments: [
              { t: "Setting up a spoken web", zh: "搭建语音互联网", k: "subj" },
              { t: "is", zh: "是", k: "verb" },
              { t: "by no means", zh: "绝非（绝不）", k: "mod", tag: "强否定" },
              { t: "an easy task.", zh: "一件容易的任务。", k: "obj" }
            ],
            zh: "搭建一个语音互联网绝非易事。",
            tip: "来自 2023.06 套1 Section B 第 43 题！"
          },
          {
            source: "2023.12 四级套3 · 仔细阅读 Passage 1",
            segments: [
              { t: "He was retired soon after,", zh: "不久后它就退役了，", k: "plain" },
              { t: "but", zh: "但", k: "plain" },
              { t: "his public life and fame", zh: "它的公众生活和名声", k: "subj" },
              { t: "by no means", zh: "绝没有", k: "mod", tag: "强否定副词" },
              { t: "decreased", zh: "下降", k: "verb" },
              { t: "with the end of his career.", zh: "（随着职业生涯的结束）。", k: "mod", tag: "伴随状语" }
            ],
            zh: "不久之后它就退役了，但它的公众生活和名声绝没有随着职业生涯的结束而减弱。",
            tip: "by no means 放动词前表示“绝不、丝毫不”。"
          },
          {
            source: "2023.12 四级套1 · 仔细阅读 Passage 1",
            segments: [
              { t: "They", zh: "他们", k: "subj" },
              { t: "found", zh: "发现", k: "verb" },
              { t: "busy people are perceived to be of high status,", zh: "忙碌的人被认为具有高社会地位，", k: "obj" },
              { t: "and interestingly,", zh: "而且有趣的是，", k: "mod", tag: "副词" },
              { t: "these status attributions are heavily influenced by our own beliefs about social mobility.", zh: "这些地位归因很大程度上受我们对社会流动性的看法影响。", k: "obj" }
            ],
            zh: "他们发现忙碌的人会被认为社会地位很高，而且有趣的是，这种地位归因很大程度上受到我们对社会流动性信念的影响。",
            tip: "to be of high status = to have high status / to be high-status。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「by no means」在四级阅读中的唯一正确意思是：", options: ["通过各种方法", "绝不，一点也不", "没有意义", "顺便说一句"], answer: 1, explain: "by no means = not at all（绝不）。" },
          { type: "否定还原", q: "「his fame by no means decreased」对应的正确意思选项是：", options: ["他的名声迅速下滑", "他退役后依然很有名气", "他没有办法保持名声", "大家很快忘了他"], answer: 1, explain: "“名声绝没有下降”即“依然很有名气”（对应当年第 50 题 D 项 remained famous and popular）。" },
          { type: "习惯搭配", q: "「hard, if not impossible」表达的语气是：", options: ["如果不可能，那就不难", "一点也不难", "极其困难，甚至可能做不到", "完全简单"], answer: 2, explain: "A, if not B = “即使不是 B，也至少是 A”。" },
          { type: "正式书面语", q: "「be of high status」相当于：", options: ["在很高的地方", "属于别人", "社会地位很高的", "没有地位的"], answer: 2, explain: "be of + 抽象名词（high status / great value）等价于形容词。" },
          { type: "真题理解", q: "在「busy people are perceived to be of high status」中，perceive 的含义是：", options: ["人们被认为/看作……", "忙人强迫别人……", "忙人获得了实际晋升", "忙碌导致效率降低"], answer: 0, explain: "be perceived to be... 意为“被人们认为/感知为……”。" }
        ]
      },
      {
        id: "4-4",
        title: "第17章 · 长句代词指代追踪（it / this / that / they）",
        summary: "长难句中经常出现 `this / that / it / these / them / such`，不知道它们指前面哪个词，整句话就白读了！记住：代词永远往**前面找最近且单复数匹配**的对象。",
        evolution: [
          { label: "① 两句简单句", en: "Concentrating on many things reduces focus. That leads to mistakes.", zh: "同时关注多件事会降低专注力。那会导致错误。" },
          { label: "② 合并成长句", en: "Paying attention to several things means focus is reduced and that can lead to mistakes.", zh: "同时注意多件事意味着专注力下降，而那会导致错误。" },
          { label: "③ 变成四级真题", en: "But having to pay attention to several things at once means that the powers of concentration are reduced and that can lead to more mistakes.", zh: "但不得不把注意力同时放在几件事上，意味着专注力会下降，而这可能会导致更多的错误。" }
        ],
        points: [
          "单数指代（it / this / that）：如果是 `this + 名词`（如 `these differences / such behavior`），直接往前找同类概念或总结前面整件事。",
          "复数指代（they / them / these / those）：立刻往前锁定**复数名词**（比如 `studies / farmers / behaviors`）！",
          "警惕一句里同时出现连词 `that` 和指示代词 `that`（例如 `means that... and that can lead to...`，第二个 `that` 直接当主语“那件事”）。"
        ],
        vocab: [
          { w: "concentration", p: "/ˌkɒnsnˈtreɪʃn/", m: "n. 专注力，集中" },
          { w: "at once", p: "", m: "同时，立刻" },
          { w: "attachment", p: "/əˈtætʃmənt/", m: "n. 依恋，情感纽带" },
          { w: "pay off", p: "", m: "取得回报，奏效" },
          { w: "detachment", p: "/dɪˈtætʃmənt/", m: "n. 疏离，脱离" },
          { w: "stifle", p: "/ˈstaɪfl/", m: "v. 抑制，扼杀" }
        ],
        labs: [
          {
            source: "热身短句 · 复数代词找前面复数名词",
            segments: [
              { t: "Data and analysis", zh: "数据和分析", k: "subj" },
              { t: "have long been associated with", zh: "长期以来一直与……联系在一起", k: "verb" },
              { t: "informed decisions.", zh: "明智的决策。", k: "obj" },
              { t: "These", zh: "这些（指数据和分析）", k: "subj" },
              { t: "reduce", zh: "减少了", k: "verb" },
              { t: "the likelihood of errors.", zh: "出错的可能性。", k: "obj" }
            ],
            zh: "数据和分析长期以来一直与明智决策联系在一起。它们能减少出错的可能性。",
            tip: "来自 2023.12 套3 Passage 2！These 复数指代前句主语 Data and analysis。"
          },
          {
            source: "热身短句 · 指示代词+总结名词",
            segments: [
              { t: "These closer bonds and greater attachment", zh: "这些更紧密的纽带和更强的归属感", k: "subj" },
              { t: "pay off.", zh: "得到了回报（带来了好结果）。", k: "verb" }
            ],
            zh: "这些更紧密的联系和更强的归属感终会带来回报。",
            tip: "来自 2023.06 套2 Passage 2！pay off 在四级常考意为“获得成功、得到回报”。"
          },
          {
            source: "2023.12 四级套2 · 仔细阅读 Passage 2",
            segments: [
              { t: "But having to pay attention to several things at once", zh: "但不得不把注意力同时放在几件事上", k: "subj" },
              { t: "means", zh: "意味着", k: "verb" },
              { t: "that the powers of concentration are reduced", k: "obj", zh: "专注力会下降" },
              { t: "and that can lead to more mistakes.", zh: "而且“那件事”会导致更多错误。", k: "plain" }
            ],
            zh: "但不得不把注意力同时放在几件事上，意味着专注力会下降，而这可能会导致更多的错误。",
            tip: "第二个 that 是指示代词，指代前面「专注力下降」这件事。"
          },
          {
            source: "2023.06 四级套1 · 仔细阅读 Passage 1",
            segments: [
              { t: "I", zh: "我", k: "subj" },
              { t: "believe", zh: "认为", k: "verb" },
              { t: "neither", zh: "这两者都不", k: "subj" },
              { t: "is", zh: "是", k: "verb" },
              { t: "acceptable.", zh: "可以接受的。", k: "obj" }
            ],
            zh: "我认为这两者都是不可接受的。",
            tip: "neither（两者都不）回指上一段连问的两个伦理问题！阅读时遇到 this / neither / both 一定要抬头看上一句。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「These closer bonds pay off.」中，pay off 的意思是：", options: ["付清欠款", "解雇员工", "取得好结果 / 得到回报", "停止工作"], answer: 2, explain: "pay off 作不及物动词词组指努力或好做法“奏效、带来好回报”。" },
          { type: "指代追踪", q: "在「Data and analysis have long been associated with informed decisions. These reduce the likelihood of errors.」中，These 指代：", options: ["informed decisions", "errors", "Data and analysis", "likelihood"], answer: 2, explain: "逻辑上“减少出错概率”的是数据和分析（Data and analysis），且为复数。" },
          { type: "双that辨析", q: "在「means that the powers of concentration are reduced and that can lead to more mistakes」中，第二个 that 指代：", options: ["several things", "注意力集中能力", "专注力下降这件事", "错误"], answer: 2, explain: "第一个 that 引导宾从；第二个 that 指代前面“专注力下降”整个状况。" },
          { type: "词义推测", q: "「likelihood of errors」中，likelihood 最接近哪个词的意思？", options: ["喜欢", "可能性", "数量", "严重性"], answer: 1, explain: "likelihood = possibility / probability，意为“可能性”。" },
          { type: "真题理解", q: "根据 2023.12 套2 Passage 2 结尾这句，多任务处理的坏处是：", options: ["完成任务的数量变少", "专注力降低并导致更多失误", "让人变得更快更高效", "工作时间被迫延长"], answer: 1, explain: "powers of concentration are reduced and that can lead to more mistakes。" }
        ]
      }
    ]
  }
);
