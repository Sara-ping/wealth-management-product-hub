import type { CasePoArtifacts } from '../case-po'

export const casePo: Record<string, CasePoArtifacts> = {
  /* ---------------------------------------------------------------- */
  'digital-mutual-fund-purchase': {
    stories: [
      {
        id: 'US-MF-01',
        asA: '一位通过手机银行投资的富裕客户',
        iWant: '在一次会话内完成基金认购',
        soThat: '我能在仍然确信自己决定的时候就采取行动',
        acceptance: [
          'Given 我的档案完整且在有效期内，when 我选择一只在我风险承受能力内的基金，then 我无需离开 App 就能走到订单确认',
          'Given 订单已提交，then 我在 5 秒内收到参考编号与预计成交日',
          'Given 基金已成交，then 持仓出现在我的组合中，含成本基础与获配份额',
          'Given 任一交易前检查失败，then 我看到具体原因与下一步动作，而不是一个笼统的错误',
        ],
      },
      {
        id: 'US-MF-02',
        asA: '一位正在比较两只基金的客户',
        iWant: '并排看到成本、风险与持仓',
        soThat: '权衡是明确的，而不是隐含的',
        acceptance: [
          'Given 我选择两只及以上基金进行比较，then 持续收费、风险指标、币种与前十大持仓在同一视图中展示',
          'Given 某只基金对我不合格，then 它被排除在比较之外，并给出简短说明',
          'Given 展示了业绩，then 必须标注期间，并声明过往业绩不代表未来表现',
        ],
      },
    ],
    kpis: [
      {
        metric: '完成率（浏览 → 已成交）',
        baseline: '61%',
        target: '≥ 80%',
        guardrail: '适当性拦截率在 3% 至 9% 之间',
      },
      {
        metric: '完成时长',
        baseline: '9 分 40 秒',
        target: '≤ 5 分钟',
        guardrail: '披露确认率 ≥ 99%',
      },
      {
        metric: '数字化采纳率（客户/季度）',
        baseline: '22%',
        target: '≥ 40%',
        guardrail: '每千笔订单投诉量不增加',
      },
      {
        metric: '直通处理率',
        baseline: '74%',
        target: '≥ 92%',
        guardrail: '异常队列滞留 ≤ 1 个工作日',
      },
    ],
    contract: {
      title: '适当性评估',
      endpoint: 'POST /suitability/assess',
      request: `{
  "clientId": "C-100238",
  "productId": "LU0292096186",
  "productType": "FUND",
  "riskProfileVersion": "v4-2026-03",
  "portfolioSnapshotId": "PS-88213",
  "channel": "MOBILE_ADVISORY",
  "requestedAmount": { "value": 5000, "currency": "EUR" }
}`,
      response: `{
  "assessmentId": "SA-77213",
  "outcome": "PASS_WITH_WARNING",
  "productRiskRating": 4,
  "clientRiskCapacity": 4,
  "clientRiskTolerance": 5,
  "appliedConstraint": "CAPACITY",
  "concentrationAfterTrade": { "fund": 0.18, "limit": 0.25 },
  "ruleVersion": "SUIT-RULES-2.6",
  "evaluatedAt": "2026-09-20T09:41:12Z",
  "warnings": ["FUND_CURRENCY_MISMATCH"],
  "requiresAcknowledgement": true
}`,
      notes: [
        '结论在服务端计算；前端只负责渲染，无法覆盖',
        '规则版本随决策一起存储，保证历史可重建',
        '当结论不是干净的“通过”时，需要客户确认',
      ],
    },
    risks: [
      {
        id: 'RC-MF-01',
        risk: '客户购买了超出其风险承受能力的基金',
        control: '订单捕获前的适当性闸口',
        requirement: '阻断性决策，给出原因并提供合适的替代品',
        evidence: '含输入、规则版本与结论的决策记录',
      },
      {
        id: 'RC-MF-02',
        risk: '客户在阅读关键文件之前就下单',
        control: '金额录入前的文件确认闸口',
        requirement: '按客户记录文档 ID、版本与时间戳',
        evidence: '与订单编号关联的确认记录',
      },
      {
        id: 'RC-MF-03',
        risk: '客户因超时后状态不可见而放弃',
        control: '带主动通知的订单状态生命周期',
        requirement: '确认页展示预计成交日；状态变更要通知',
        evidence: '状态历史与通知送达日志',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  'bond-investment-journey': {
    stories: [
      {
        id: 'US-BD-01',
        asA: '一位正在评估某只债券的客户',
        iWant: '看到净价、应计利息以及我实际要支付的金额',
        soThat: '确认书上的数字与我的预期一致',
        acceptance: [
          'Given 展示了示意价，then 必须标注为示意，并带时间戳与有效期',
          'Given 存在应计利息，then 作为单独一行展示，而不是折进价格里',
          'Given 我继续下单，then 结算金额等于净价 + 应计利息 + 已披露费用',
          'Given 最终价格与示意价的差异超过容忍度，then 记账前必须重新向我报价',
        ],
      },
      {
        id: 'US-BD-02',
        asA: '一位持有债券到期的客户',
        iWant: '看到我未来的票息与到期现金流',
        soThat: '我可以做规划，而不是手工跟踪',
        acceptance: [
          'Given 一笔已结算的债券持仓，then 以日历形式展示预计票息日、金额与到期',
          'Given 该债券可赎回，then 标记该特征并展示首个赎回日，且需要复杂度确认',
          'Given 发生评级或公司行为事件，then 在受影响的持仓上呈现该事件',
        ],
      },
    ],
    kpis: [
      {
        metric: '转化率（详情 → 订单）',
        baseline: '34%',
        target: '≥ 55%',
        guardrail: '可赎回债券的复杂度确认率 = 100%',
      },
      {
        metric: '重新报价率',
        baseline: '11%',
        target: '≤ 4%',
        guardrail: '未经客户确认最终价格不得记账',
      },
      {
        metric: '客户经理人工处理报价询问',
        baseline: '100%',
        target: '≤ 25%',
        guardrail: '客户理解度抽查通过率 ≥ 85%',
      },
    ],
    contract: {
      title: '债券示意报价',
      endpoint: 'POST /bonds/pricing',
      request: `{
  "isin": "US912828ZL36",
  "side": "BUY",
  "nominal": 100000,
  "currency": "USD",
  "settlementDate": "2026-09-24",
  "clientCategory": "PROFESSIONAL"
}`,
      response: `{
  "isin": "US912828ZL36",
  "cleanPrice": 98.42,
  "accruedInterest": 1.37,
  "dirtyPrice": 99.79,
  "settlementAmount": 99790.00,
  "yieldToMaturity": 4.31,
  "runningYield": 4.01,
  "modifiedDuration": 6.4,
  "spreadOverBenchmark": 0.32,
  "indicative": true,
  "validUntil": "2026-09-20T09:46:00Z",
  "priceSource": "INDEPENDENT_MARK",
  "asOf": "2026-09-20T09:41:12Z"
}`,
      notes: [
        '示意标记与有效期是强制字段；界面绝不能把它呈现为可执行价',
        '应计利息是独立字段，因此无法被隐藏在价格里',
        '价格来源与“截至”时间戳支撑最佳执行与透明度义务',
      ],
    },
    risks: [
      {
        id: 'RC-BD-01',
        risk: '客户把示意价当作保证价',
        control: '示意标注、有效期、重新报价容忍度',
        requirement: '超出容忍度需客户明确确认重新报价',
        evidence: '含时间戳、容忍度与确认事件的报价记录',
      },
      {
        id: 'RC-BD-02',
        risk: '未理解可赎回或永续特征',
        control: '复杂度警告与强制确认',
        requirement: '未确认该特征则阻断旅程',
        evidence: '含客户与工具引用的确认记录',
      },
      {
        id: 'RC-BD-03',
        risk: '库存显示为可用但无法执行',
        control: '下单时的库存检查',
        requirement: '数量不足则拒绝订单并立即告知客户',
        evidence: '与该订单关联的库存检查结果',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  'structured-product-subscription': {
    stories: [
      {
        id: 'US-SP-01',
        asA: '一位位于已批准目标市场内的客户',
        iWant: '在认购前看到不利条件下的损益',
        soThat: '我明白究竟是什么条件让我的本金处于风险中',
        acceptance: [
          'Given 我打开该产品，then 展示有利、中性、不利与压力情景并说明假设',
          'Given 存在障碍与观察惯例，then 两者在同一视图中说明',
          'Given 我尚未打开情景视图，then 金额步骤被禁用',
          'Given 我完成认购，then 我所看到的情景集合与版本随认购一起存储',
        ],
      },
      {
        id: 'US-SP-02',
        asA: '一位产品治理负责人',
        iWant: '配售被一致地执行并可审计',
        soThat: '缩减决策可以向客户与监管解释清楚',
        acceptance: [
          'Given 认购超过额度，then 配售政策对每一笔认购完全一致地执行',
          'Given 完成一笔配售，then 按认购存储所应用的政策、版本与结果',
          'Given 客户对其配售提出疑问，then 可依据存储的输入复现该计算',
        ],
      },
    ],
    kpis: [
      {
        metric: '认购前完成情景查看的比例',
        baseline: '48%',
        target: '≥ 95%',
        guardrail: '撤销率 ≤ 2%',
      },
      {
        metric: '意向客户的资格通过率',
        baseline: '不适用',
        target: '只做跟踪，不做最大化',
        guardrail: '目标市场之外的认购为零',
      },
      {
        metric: '配售争议率',
        baseline: '每次发行 6 起',
        target: '≤ 每次 1 起',
        guardrail: '100% 配售可依据存储输入复现',
      },
      {
        metric: '发行配置工作量',
        baseline: '3 天人工',
        target: '≤ 2 小时配置',
        guardrail: '零发行在缺少治理签字的情况下上线',
      },
    ],
    contract: {
      title: '认购捕获',
      endpoint: 'POST /subscriptions',
      request: `{
  "offerId": "SP-2026-014",
  "clientId": "C-100238",
  "amount": { "value": 250000, "currency": "EUR" },
  "eligibilityRef": "EL-90211",
  "knowledgeAssessmentRef": "KE-3321",
  "acknowledgements": [
    { "documentId": "KID-SP-2026-014", "version": "1.2" },
    { "documentId": "TS-SP-2026-014", "version": "2.0" }
  ],
  "scenarioSetRef": "SC-8871"
}`,
      response: `{
  "subscriptionId": "SUB-5401",
  "status": "RECEIVED",
  "offerId": "SP-2026-014",
  "requestedAmount": { "value": 250000, "currency": "EUR" },
  "capacityRemaining": 1750000,
  "scalingPossible": true,
  "allocationPolicyVersion": "ALLOC-3.1",
  "submittedAt": "2026-09-20T09:41:12Z",
  "coolingOffEndsAt": "2026-09-27T23:59:00Z"
}`,
      notes: [
        '资格与知识评估的引用必须存在且为最新，请求才会被接受',
        '文件版本在认购时点捕获，而不是展示时点',
        '提前预览缩减比例，避免客户对部分配售感到意外',
      ],
    },
    risks: [
      {
        id: 'RC-SP-01',
        risk: '产品销售到已批准目标市场之外',
        control: '目录、详情与认购时点的资格闸口',
        requirement: '失败关闭；不合格客户根本看不到该发行',
        evidence: '含目标市场版本的合格性评估日志',
      },
      {
        id: 'RC-SP-02',
        risk: '因复杂度误解导致不当销售投诉',
        control: '含不利与压力情景的强制情景披露',
        requirement: '情景集合引用随每笔认购存储',
        evidence: '情景查看事件与存储的情景集合版本',
      },
      {
        id: 'RC-SP-03',
        risk: '配售不一致或无法解释',
        control: '带版本化政策与完整审计的配售引擎',
        requirement: '每笔配售都能依据存储输入复现',
        evidence: '每笔认购的配售记录与政策版本',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  'ai-wealth-advisor': {
    stories: [
      {
        id: 'US-AI-01',
        asA: '一位正在准备见客的客户经理',
        iWant: '从已批准的内部知识中获得带出处的答案',
        soThat: '我能更快准备，同时避免未经核实的说法',
        acceptance: [
          'Given 我提出一个问题，then 答案引用其使用的已批准来源，含版本与生效日期',
          'Given 未找到已批准来源，then 助手明示这一点，而不是生成答案',
          'Given 检索到的内容按政策已过期，then 将其排除在检索之外',
          'Given 置信度低于阈值，then 回答自动进入人工复核流程',
        ],
      },
      {
        id: 'US-AI-02',
        asA: '一位面向客户的复核人',
        iWant: '批准、修改或驳回 AI 草稿，并留下决策记录',
        soThat: '客户沟通的责任仍归人所有',
        acceptance: [
          'Given 一份草稿被提交复核，then 可进行批准 / 修改 / 驳回并捕获复核人身份',
          'Given 做了修改，then 同时保留原文与修改后文本',
          'Given 提出禁止类请求，then 在生成之前拦截并记录',
          'Given 回答已发送，then 可从审计日志完整重建该次交互',
        ],
      },
    ],
    kpis: [
      {
        metric: '答案准确率（标准集）',
        baseline: '不适用',
        target: '≥ 90%',
        guardrail: '实质性断言的引用覆盖率 = 100%',
      },
      {
        metric: '升级到人工专家的比例',
        baseline: '不适用',
        target: '8–15%',
        guardrail: '绝不低于 5% —— 过低意味着置信度识别失效',
      },
      {
        metric: '复核后答案的中位耗时',
        baseline: '18 分钟（人工检索）',
        target: '≤ 6 分钟',
        guardrail: '面向客户的答案 100% 经过复核',
      },
      {
        metric: '客户经理周活跃采纳率',
        baseline: '0%',
        target: '≥ 60%',
        guardrail: '零条未经复核的面向客户输出',
      },
    ],
    contract: {
      title: '带复核的落地生成',
      endpoint: 'POST /assistant/generate',
      request: `{
  "conversationId": "CV-9921",
  "question": "Which funds on our shelf match a moderate risk profile?",
  "scope": "PRODUCT_KNOWLEDGE",
  "entitlements": ["RETAIL_SHELF_EU"],
  "maxSources": 5,
  "requireCitations": true
}`,
      response: `{
  "answerId": "AN-4471",
  "status": "PENDING_REVIEW",
  "scope": "PRODUCT_KNOWLEDGE",
  "confidence": 0.82,
  "citations": [
    { "documentId": "FUND-SHELF-2026", "version": "3.4", "chunk": "c-118" },
    { "documentId": "SUIT-POLICY", "version": "2.6", "chunk": "c-42" }
  ],
  "guardrailDecisions": [
    { "check": "PERSONALISED_ADVICE", "result": "BLOCKED" },
    { "check": "ENTITLEMENT", "result": "PASS" }
  ],
  "reviewTaskId": "RV-1180",
  "draft": "…"
}`,
      notes: [
        'PENDING_REVIEW 状态意味着：在人工批准之前，任何内容都不会交付给客户',
        '护栏决策在生成之前记录，而不是之后',
        '引用指向文档版本，因此知识库本身也可以被审计',
      ],
    },
    risks: [
      {
        id: 'RC-AI-01',
        risk: '出现无依据或幻觉内容',
        control: '带引用与“未找到”行为的检索增强生成',
        requirement: '没有至少一个已批准来源就不出答案',
        evidence: '含引用列表与检索快照的回答记录',
      },
      {
        id: 'RC-AI-02',
        risk: '输出被理解为个性化建议',
        control: '范围分类与生成前护栏',
        requirement: '禁止意图在生成前被拦截并记录',
        evidence: '每次交互的护栏决策日志',
      },
      {
        id: 'RC-AI-03',
        risk: '客户数据超出权限暴露',
        control: '检索阶段的权限过滤与数据最小化',
        requirement: '检索范围限定在用户有权访问的来源',
        evidence: '每次检索调用的权限决策记录',
      },
    ],
  },
}
