window.CET4_PARTS = window.CET4_PARTS || [];

window.CET4_PARTS.push(
  {
    id: "p5",
    name: "阶段五 · 四级真题满级实战（第 18–20 章）",
    subtitle: "用前 17 章全部武器，一次拿下 35～50 词全真四级阅读长难句",
    stages: [
      {
        id: "5-1",
        title: "第18章 · 社会生活类真题长难句实战",
        summary: "社会文化类文章在四级阅读中占比最高，高频出现「观点对比、原因列举、让步评价」三类超长复合句。",
        evolution: [
          { label: "① 极简新闻事实", en: "People are on the streets because of bad luck.", zh: "人们流落街头是因为运气不好。" },
          { label: "② 补充具体原因", en: "People living on the streets are there because of bad luck or because they lost a job.", zh: "露宿街头的人流落至此，是因为运气不好或失去了工作。" },
          { label: "③ 变成四级真题 (45词)", en: "Today, a greater and greater proportion of people living on the streets are there because of bad luck or a series of mistakes, or because the economy forgot them—they lost a job or were evicted just as the housing market was growing increasingly unforgiving.", zh: "如今，越来越多露宿街头的人流落至此，是因为运气不好或一连串失误，或者是因为被经济抛弃——就在住房市场变得越来越无情时，他们丢了工作或被赶出了家门。" }
        ],
        points: [
          "看到多个 `because of... or because...`，说明作者在连续列举并列原因，一个一个括号看清即可。",
          "`as opposed to doing` 意为「而不是……」，做对比题直接用它秒杀！"
        ],
        vocab: [
          { w: "as opposed to", p: "", m: "与……截然相反，而不是" },
          { w: "make the most of", p: "", m: "充分利用" },
          { w: "evict", p: "/ɪˈvɪkt/", m: "v. 驱逐，逐出" },
          { w: "unforgiving", p: "/ˌʌnfəˈɡɪvɪŋ/", m: "adj. 无情的，严酷的" },
          { w: "resignation", p: "/ˌrezɪɡˈneɪʃn/", m: "n. 顺从，听任；辞职" },
          { w: "compassion", p: "/kəmˈpæʃn/", m: "n. 同情心" }
        ],
        labs: [
          {
            source: "热身中长句 · 2023.06 套3 Passage 2",
            segments: [
              { t: "Compassion", zh: "同情心", k: "subj" },
              { t: "is being replaced", zh: "正在被……取代", k: "verb" },
              { t: "by resignation.", zh: "（被麻木与听任取代）。", k: "obj" }
            ],
            zh: "同情心正在被麻木和听之任之所取代。",
            tip: "现在进行时被动语态 is being replaced！resignation 在这指“逆来顺受/无可奈何的麻木”。"
          },
          {
            source: "2023.12 四级套1 · 仔细阅读 Passage 1",
            segments: [
              { t: "Phrases like “I have limited access to email” and “I’ll respond as soon as I get back”", zh: "像“我查邮件不太方便”和“我一回来就回复”这样的话", k: "subj" },
              { t: "sound like", zh: "听起来好像", k: "verb" },
              { t: "you’re being held against your will from working", zh: "你违背自己意愿被迫停止了工作，", k: "obj" },
              { t: "as opposed to making the most of your time off.", zh: "而不是在充分享受你的休假。", k: "mod", tag: "对比介短" }
            ],
            zh: "像“我查看邮件不太方便”和“我一回来就回复”这样的话，听起来就好像你是违背自己意愿被迫停止工作，而不是在充分享受你的休假时光。",
            tip: "对应第 49 题原句！against your will（违背意愿）和 as opposed to（而不是）是关键得分词块。"
          },
          {
            source: "2023.06 四级套3 · 仔细阅读 Passage 2",
            segments: [
              { t: "Today,", zh: "如今，", k: "mod", tag: "时间" },
              { t: "a greater and greater proportion of people living on the streets", zh: "越来越大比例的露宿街头者", k: "subj" },
              { t: "are", zh: "落到这步田地", k: "verb" },
              { t: "there", zh: "处于（露宿街头）的境地", k: "obj" },
              { t: "because of bad luck or a series of mistakes,", zh: "是因为运气不好或一连串失误，", k: "mod", tag: "原因1" },
              { t: "or because the economy forgot them", zh: "或者是因为经济抛弃了他们", k: "mod", tag: "原因2" },
              { t: "—they lost a job or were evicted just as the housing market was growing increasingly unforgiving.", zh: "——就在住房市场越来越无情的时候，他们失业或被逐出了家门。", k: "mod", tag: "破折号具体解释" }
            ],
            zh: "如今，越来越多露宿街头的人流落至此，是因为坏运气或一连串失误，或者是因为经济抛弃了他们——就在住房市场变得越来越无情时，他们丢了工作或被赶出了家门。",
            tip: "破折号后面具体解释什么叫“被经济抛弃”（失业/被驱逐+高房价）。"
          },
          {
            source: "2023.06 四级套3 · 仔细阅读 Passage 2",
            segments: [
              { t: "That reality", zh: "那个现实", k: "subj" },
              { t: "was driven home", zh: "被深刻印证了", k: "verb" },
              { t: "this month", zh: "本月", k: "mod", tag: "时间" },
              { t: "by a new Los Angeles Homeless Services Authority report", zh: "（通过洛杉矶无家可归者服务局的新报告），", k: "mod", tag: "by被动施动者" },
              { t: "showing that the county's homeless population is growing faster than the supply of new housing.", zh: "该报告显示该县无家可归人口的增长速度超过了新住房的供应速度。", k: "mod", tag: "-ing后置定语" }
            ],
            zh: "洛杉矶无家可归者服务局本月发布的一份新报告令人清醒地印证了这一现实：该县无家可归人口的增长速度超过了新住房的供应速度。",
            tip: "drive sth. home 意为“把某事彻底讲透 / 使人深刻认识到”。"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「as opposed to making the most of your time off」中，as opposed to 的意思是：", options: ["非常支持", "而不是 / 与……截然相反", "除了……还有", "因为"], answer: 1, explain: "as opposed to = rather than，表示鲜明对比。" },
          { type: "真题第49题", q: "作者认为说“I have limited access to email”听起来像：", options: ["你因为太忙而不看邮件", "你被迫因客观条件中断工作，而不是在享受假期", "你喜欢在假期加班", "你的手机坏了"], answer: 1, explain: "held against your will from working（被迫停止工作）对应 forced by circumstances。" },
          { type: "原因列举", q: "根据 2023.06 套3 洛杉矶无家可归者这句，越来越多人流落街头的原因不包括：", options: ["坏运气或一连串失误", "失业或被房东驱逐", "住房市场越来越难以负担（unforgiving）", "他们全部患有严重精神疾病"], answer: 3, explain: "原文明确驳斥了大多数流浪者患精神疾病或吸毒的刻板印象。" },
          { type: "词义猜测", q: "「the housing market was growing increasingly unforgiving」中，unforgiving 形容住房市场，意为：", options: ["房价低廉的", "严酷无情、让人负担不起的", "宽容友好的", "空房很多的"], answer: 1, explain: "对应当年第 53 题答案 difficult to afford a place to live。" },
          { type: "真题第54题", q: "那份新报告显示了什么现实问题？", options: ["新住房供应过剩", "新住房供应增长跟不上无家可归人口的增长速度", "无家可归人数正在快速减少", "大家都在朝同一个方向努力"], answer: 1, explain: "homeless population is growing faster than the supply of new housing。" }
        ]
      },
      {
        id: "5-2",
        title: "第19章 · 科技与职场类真题长难句实战",
        summary: "职场与科技类阅读常考「建议措施（by doing）」「批判反思（too heavy-handed）」与「多重修饰定义」。",
        evolution: [
          { label: "① 核心结论", en: "Team-building exercises were considered intrusive.", zh: "团建活动被认为是侵犯隐私的。" },
          { label: "② 加上限定范围", en: "Exercises which focused on personal attitudes were considered intrusive.", zh: "那些聚焦个人态度的活动被认为是侵犯隐私的。" },
          { label: "③ 变成四级真题 (43词)", en: "The study found that team-building exercises which focused on the sharing of and intervening into personal attitudes and relationships between team members were considered too heavy-handed and intrusive, although the researchers say some degree of openness and vulnerability is often necessary.", zh: "研究发现，那些聚焦于分享并干预团队成员个人态度与人际关系的团建活动被认为过于生硬且侵犯隐私，尽管研究人员表示一定程度的坦诚与示弱往往是必要的。" }
        ],
        points: [
          "注意共用介词结构：`the sharing of and intervening into personal attitudes`（分享[态度]和干预[态度]），两个动作共用后面的宾语！",
          "看到 `by making a habit of...` 立刻画线，这就是「如何避免犯错」的解题金钥匙。"
        ],
        vocab: [
          { w: "heavy-handed", p: "/ˌhevi ˈhændɪd/", m: "adj. 生硬粗暴的，高压的" },
          { w: "intervene", p: "/ˌɪntəˈviːn/", m: "v. 干预，介入" },
          { w: "vulnerability", p: "/ˌvʌlnərəˈbɪləti/", m: "n. 脆弱，坦露弱点" },
          { w: "critical thinking", p: "", m: "批判性思维" },
          { w: "cost-benefit analysis", p: "", m: "成本效益分析" },
          { w: "demonstrate", p: "/ˈdemənstreɪt/", m: "v. 证明，展示" }
        ],
        labs: [
          {
            source: "热身中长句 · 2023.06 套3 Passage 1",
            segments: [
              { t: "With caution,", zh: "如果谨慎使用，", k: "mod", tag: "条件介短" },
              { t: "many relational methods", zh: "许多改善人际关系的方法", k: "subj" },
              { t: "to improve teams and organisations", zh: "（用于改善团队和组织的）", k: "mod", tag: "不定式定语" },
              { t: "can be borrowed", zh: "是可以借鉴过来的", k: "verb" },
              { t: "from other fields.", zh: "从其他领域。", k: "mod", tag: "来源状语" }
            ],
            zh: "只要谨慎行事，许多用于改善团队和组织的人际关系方法都可以从其他领域借鉴过来。",
            tip: "当年第 50 题原句！With caution 相当于“前提是要谨慎（cautiously）”。"
          },
          {
            source: "2023.06 四级套3 · 仔细阅读 Passage 1",
            segments: [
              { t: "The study", zh: "这项研究", k: "subj" },
              { t: "found", zh: "发现", k: "verb" },
              { t: "that team-building exercises", zh: "团建活动", k: "subj" },
              { t: "[which focused on the sharing of and intervening into personal attitudes and relationships between team members]", zh: "（聚焦于分享和干预团队成员个人态度及人际关系的）", k: "mod", tag: "which长定从" },
              { t: "were considered", zh: "被认为", k: "verb" },
              { t: "too heavy-handed and intrusive,", zh: "过于生硬且侵犯隐私，", k: "obj" },
              { t: "although the researchers say some degree of openness and vulnerability is often necessary.", zh: "尽管研究人员表示一定程度的开放和示弱往往是必要的。", k: "mod", tag: "although让步" }
            ],
            zh: "该研究发现，那些侧重于分享和干预团队成员个人态度及人际关系的团建活动被认为过于生硬且侵犯隐私，尽管研究人员表示一定程度的坦诚和示弱往往很有必要。",
            tip: "exercises 到 were considered 中间隔了一个 15 词的 which 定语从句，紧盯主语 exercises 就能接上 were considered！"
          },
          {
            source: "2023.12 四级套2 · 仔细阅读 Passage 1",
            segments: [
              { t: "But it's possible", zh: "但这是有可能的：", k: "verb" },
              { t: "to avoid such costly mistakes", zh: "避免如此代价高昂的错误", k: "subj" },
              { t: "by making a habit of engaging in critical thinking,", zh: "（通过养成进行批判性思维的习惯），", k: "mod", tag: "by方式状语" },
              { t: "such as considering opposing viewpoints and conducting cost-benefit analyses,", zh: "比如考虑相反观点和进行成本效益分析，", k: "mod", tag: "such as举例" },
              { t: "especially for those decisions [that are complex and can determine the future of your venture].", zh: "尤其是针对那些复杂且能决定创业未来的决策。", k: "mod", tag: "特指状语+定从" }
            ],
            zh: "但通过养成批判性思考的习惯——比如考虑相反观点和进行成本效益分析——是有可能避免这种昂贵错误的，尤其是对于那些复杂且决定创业未来的决策而言。",
            tip: "对应第 49 题原句！结构层层递进：怎么避免错 → 靠批判性思维 → 具体哪两种做法 → 尤其适用哪类决策。"
          },
          {
            source: "2023.12 四级套2 · Section B",
            segments: [
              { t: "Despite progress,", zh: "尽管取得了进步，", k: "mod", tag: "让步" },
              { t: "the struggle for women to reach the highest positions of power", zh: "女性攀登最高权力职位的艰难过程", k: "subj" },
              { t: "is demonstrated", zh: "得到了体现", k: "verb" },
              { t: "in this year's Fortune 500 list,", zh: "在今年《财富》500强榜单中，", k: "mod", tag: "地点状语" },
              { t: "which featured a record 33 female CEOs,", zh: "（该榜单创纪录地出现了33位女性CEO），", k: "mod", tag: "which非限定定从" },
              { t: "but this still represents a tiny fraction of the total.", zh: "但这依然只占总数极小的一部分。", k: "plain" }
            ],
            zh: "尽管有所进步，但今年《财富》500强榜单依然印证了女性登上最高权力宝座的艰难——榜单虽创纪录地出现33位女性CEO，但这仍只占总数的极小比例。",
            tip: "对应 Section B 第 43 题！"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「considered too heavy-handed and intrusive」中，intrusive 的意思是：", options: ["有趣的", "侵犯隐私、唐突打扰的", "省钱的", "高效的"], answer: 1, explain: "intrusive 来自 intrude（闯入），在职场中指“侵犯私人生活的”。" },
          { type: "主谓连线", q: "在「team-building exercises which focused on... were considered too heavy-handed」中，主语 team-building exercises 的谓语动词是：", options: ["focused", "sharing", "were considered", "intervening"], answer: 2, explain: "focused 在 which 定语从句里，跳过定从后主句谓语是 were considered。" },
          { type: "真题第50题", q: "根据「With caution, many relational methods to improve teams can be borrowed from other fields」，作者对借鉴其他领域心理方法的态度是：", options: ["必须毫无保留全部照搬", "必须谨慎使用才能有效", "完全不能从其他领域借鉴", "只适合用在家庭关系中"], answer: 1, explain: "With caution 对应选项 cautiously（谨慎地）。" },
          { type: "真题第49题", q: "创业者如何避免做出冲动而昂贵的错误决策？", options: ["只看成本忽略对手观点", "养成批判性思考的习惯（如考虑反对观点和成本效益分析）", "不做复杂决策", "拒绝任何竞争"], answer: 1, explain: "by making a habit of engaging in critical thinking。" },
          { type: "真题理解", q: "在《财富》500强榜单那句话中，33 位女性 CEO 说明了什么？", options: ["男女高管已经彻底平等", "女性担任顶级高管的比例依然极其微小", "男性高管数量正在急剧下降", "今年榜单没有记录女性 CEO"], answer: 1, explain: "but this still represents a tiny fraction of the total。" }
        ]
      },
      {
        id: "5-3",
        title: "第20章 · 科普经济终极压轴（45+ 词大Boss）",
        summary: "最后一章！迎战 2023 年四级阅读里结构最密集、嵌套最深的两类压轴长难句，全对过关即完成四级长难句全阶通关！",
        evolution: [
          { label: "① 极简句干", en: "Another study indicates the scale means something.", zh: "另一项研究指出这种规模意味着某件事。" },
          { label: "② 加上第一层从句", en: "Another study indicates that the sheer scale of the changes means technologies may be needed.", zh: "另一项研究指出，变化的巨大规模意味着可能需要技术。" },
          { label: "③ 变成四级真题 (45词)", en: "However, another study indicates that the sheer scale of the changes that are predicted to hit food-producing regions around the world means that even existing farm technologies (such as irrigation and storage facilities) may need to be combined with genetic engineering to soften the coming blow to the global food supply.", zh: "然而，另一项研究表明，预计将冲击全球产粮区的变化规模之大，意味着即使是现有的农业技术（如灌溉和储存设施）也可能需要与基因工程相结合，以减轻即将到来的对全球粮食供应的冲击。" }
        ],
        points: [
          "四步破长句终极口诀：① 找标点/连词切块 → ② 括起定从/括弧/介短 → ③ 抓住每层主谓宾 → ④ 按中文习惯串联。",
          "恭喜你从第 1 章一路打到这里！以后做四级阅读，遇到 3 行以上的长句不要怕，按这四步 10 秒看透！"
        ],
        vocab: [
          { w: "sheer", p: "/ʃɪə(r)/", m: "adj. 纯粹的，十足的（强调程度大）" },
          { w: "irrigation", p: "/ˌɪrɪˈɡeɪʃn/", m: "n. 灌溉" },
          { w: "soften the blow", p: "", m: "减轻打击/缓冲冲击" },
          { w: "commodity", p: "/kəˈmɒdəti/", m: "n. 大宗商品，日用品" },
          { w: "given", p: "/ˈɡɪvn/", m: "prep. 考虑到，鉴于" },
          { w: "endeavour", p: "/ɪnˈdevə(r)/", m: "n./v. 努力，尝试" }
        ],
        labs: [
          {
            source: "热身中长句 · 2023.06 套1 Section A",
            segments: [
              { t: "Given how large the textile and cotton industries are,", zh: "鉴于纺织和棉花产业规模如此庞大，", k: "mod", tag: "Given原因状语" },
              { t: "they", zh: "它们", k: "subj" },
              { t: "take up", zh: "消耗/占用了", k: "verb" },
              { t: "a lot of our fresh water demands across the world,", zh: "全球大量的淡水需求，", k: "obj" },
              { t: "according to The Huffington Post.", zh: "据《赫芬顿邮报》报道。", k: "mod", tag: "消息来源" }
            ],
            zh: "据《赫芬顿邮报》报道，鉴于纺织和棉花产业规模如此庞大，它们消耗了全球大量的淡水资源。",
            tip: "句首 Given + 从句表示“考虑到 / 鉴于……”。"
          },
          {
            source: "2023.06 四级套1 · Section B",
            segments: [
              { t: "Even turning your voice into text", zh: "就连把你的声音转换成文字", k: "subj" },
              { t: "— automatic speech recognition —", zh: "——即自动语音识别——", k: "mod", tag: "破折号解释" },
              { t: "is", zh: "是", k: "verb" },
              { t: "one of the hardest problems to solve,", zh: "最难解决的问题之一，", k: "obj" },
              { t: "as there are as many ways to pronounce things as there are people on the planet.", zh: "因为地球上有多少人，就有多少种发音方式。", k: "mod", tag: "as原因+as...as比较" }
            ],
            zh: "就连把声音转换成文字——即自动语音识别——也是最难解决的问题之一，因为地球上有多少人，就有多少种发音方式。",
            tip: "动名词短语主语 + 破折号插入 + as 原因状从 + as many... as... 同级比较。"
          },
          {
            source: "2023.12 四级套1 · Section B",
            segments: [
              { t: "Another potential climate change-induced problem", zh: "另一个可能由气候变化引发的问题", k: "subj" },
              { t: "is", zh: "是", k: "verb" },
              { t: "our dependence on commodity crops", zh: "我们对大宗农作物的依赖", k: "obj" },
              { t: "— wheat, soybeans, corn and rice —", zh: "——小麦、大豆、玉米和水稻——", k: "mod", tag: "破折号列举" },
              { t: "which currently provide humanity with 75% of its calories,", zh: "它们目前为人类提供了75%的热量，", k: "mod", tag: "which非限定定从" },
              { t: "either directly or indirectly through the animals [we raise on those crops].", zh: "（直接提供，或通过我们用这些作物饲养的动物间接提供）。", k: "mod", tag: "方式状语+省that定从" }
            ],
            zh: "另一个可能由气候变化引发的问题，是我们对大宗农作物（小麦、大豆、玉米和水稻）的依赖——它们目前直接或通过我们用这些作物饲养的动物间接地为人类提供了 75% 的热量。",
            tip: "主干只有 8 词：Another problem is our dependence on commodity crops。"
          },
          {
            source: "2023.12 四级套1 · Section B（终极Boss）",
            segments: [
              { t: "However,", zh: "然而，", k: "mod", tag: "转折" },
              { t: "another study", zh: "另一项研究", k: "subj" },
              { t: "indicates", zh: "表明", k: "verb" },
              { t: "that the sheer scale of the changes", zh: "变化的巨大规模", k: "subj" },
              { t: "[that are predicted to hit food-producing regions around the world]", zh: "（预计将冲击全球产粮区的）", k: "mod", tag: "that定从" },
              { t: "means", zh: "意味着", k: "verb" },
              { t: "that even existing farm technologies", zh: "即使是现有的农业技术", k: "subj" },
              { t: "(such as irrigation and storage facilities)", zh: "（例如灌溉和储存设施）", k: "mod", tag: "括号举例" },
              { t: "may need to be combined with genetic engineering", zh: "可能需要与基因工程结合起来", k: "verb" },
              { t: "to soften the coming blow to the global food supply.", zh: "以减轻即将对全球粮食供应造成的打击。", k: "mod", tag: "目的状语" }
            ],
            zh: "然而，另一项研究表明，预计将冲击全球产粮区的变化规模之大，意味着即使是现有的农业技术（如灌溉和储存设施）也可能需要与基因工程相结合，以减轻即将到来的对全球粮食供应的冲击。",
            tip: "两层宾语从句 + 1个定语从句 + 1个括号举例 + 1个目的状语，全站最高难度终极句！"
          }
        ],
        quiz: [
          { type: "词汇热身", q: "「to soften the coming blow to the global food supply」中，blow 的意思是：", options: ["吹风", "打击 / 冲击", "增长", "计划"], answer: 1, explain: "soften the blow 是高频固定搭配，意为“减轻打击、缓冲冲击”。" },
          { type: "介词辨析", q: "「Given how large the textile and cotton industries are, they take up...」中，Given 表示：", options: ["被赠予", "考虑到 / 鉴于", "虽然", "假设"], answer: 1, explain: "Given + 名词/从句放句首，意为“考虑到、鉴于”。" },
          { type: "终极主语锁定", q: "在终极 Boss 句中，动词「means」的主语核心词是：", options: ["another study", "food-producing regions", "the sheer scale of the changes", "existing farm technologies"], answer: 2, explain: "that are predicted to hit... 是定从修饰 changes，真正发出 means（意味着）的是 the sheer scale of the changes。" },
          { type: "真题理解", q: "根据「which currently provide humanity with 75% of its calories, either directly or indirectly through the animals we raise on those crops」，人类 75% 的热量来源是：", options: ["全部来自野生动物", "直接来自小麦/大豆/玉米/水稻，或通过食用吃这些作物的动物间接获得", "仅来自水稻一种作物", "完全不依赖农作物"], answer: 1, explain: "directly（直接吃作物）or indirectly through the animals we raise on those crops（间接吃以作物饲养的动物）。" },
          { type: "终极推理", q: "根据终极 Boss 句，面对即将到来的粮食冲击，研究人员认为需要怎么做？", options: ["彻底淘汰所有传统农具", "可能需要将现有农业技术与基因工程结合起来", "完全依靠自然降雨，不再灌溉", "只依赖基因工程，不需要储粮设施"], answer: 1, explain: "existing farm technologies... may need to be combined with genetic engineering。" }
        ]
      }
    ]
  }
);
