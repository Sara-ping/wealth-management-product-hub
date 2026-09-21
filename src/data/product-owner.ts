/* ------------------------------------------------------------------ */
/* Product decision frameworks                                         */
/* ------------------------------------------------------------------ */

export interface DecisionFramework {
  id: string
  title: string
  question: string
  whenUsed: string
  criteria: string[]
  output: string
}

export const decisionFrameworks: DecisionFramework[] = [
  {
    id: 'problem-framing',
    title: 'Problem framing before solutioning',
    question: 'Whose problem is this, and how do we know it is real?',
    whenUsed: 'Before any scope discussion — at intake of an idea or stakeholder request.',
    criteria: [
      'Name the client or internal user and the moment the problem occurs',
      'Quantify it: volume, frequency, cost, drop-off, complaint or risk event',
      'State the current workaround and why it is unacceptable',
      'Write the hypothesis: if we do X, metric Y will move by Z',
      'Name what we will NOT do in this iteration',
    ],
    output: 'A one-page product brief with hypothesis, scope boundary and success metric.',
  },
  {
    id: 'eligibility-gate',
    title: 'Eligibility & target market gate',
    question: 'May this client see and buy this product at all?',
    whenUsed: 'When defining catalogue visibility, product shelves and distribution rules.',
    criteria: [
      'Client categorisation (retail / professional / eligible counterparty)',
      'Jurisdiction, residency and tax domicile',
      'Target market definition from product governance',
      'Segment and mandate restrictions',
      'Restriction and watch lists applied at request time',
    ],
    output: 'Server-side eligibility service; ineligible products never rendered.',
  },
  {
    id: 'suitability-gate',
    title: 'Suitability & appropriateness gate',
    question: 'Is this product appropriate for this specific client?',
    whenUsed: 'On every advisory purchase; appropriateness test for execution-only.',
    criteria: [
      'Product risk rating versus client risk capacity — the lower constraint wins',
      'Complexity and liquidity assessed alongside risk rating',
      'Concentration limits measured against the live portfolio',
      'Knowledge and experience assessment for complex products',
      'Mismatch is blocking, with documented rationale and alternatives',
    ],
    output: 'Decision record: inputs, rule version, outcome, acknowledgement, override trail.',
  },
  {
    id: 'complexity-gate',
    title: 'Complexity & disclosure gate',
    question: 'Can a client realistically understand what they are buying?',
    whenUsed: 'Structured products, derivatives, leveraged or conditional-payoff instruments.',
    criteria: [
      'Payoff explained in plain language with the unfavourable scenario shown',
      'Scenario disclosure presented before amount entry',
      'Document acknowledgement captured with version and timestamp',
      'Cooling-off / cancellation rights operable in the channel',
      'Escalation path to a human specialist available at any point',
    ],
    output: 'Mandatory explanation steps in the journey; progress blocked until completed.',
  },
  {
    id: 'build-vs-buy',
    title: 'Build, buy or configure',
    question: 'Is this capability a differentiator or a commodity?',
    whenUsed: 'When a new capability is requested (pricing, KYC, document, AI, reporting).',
    criteria: [
      'Does it differentiate the client experience or is it table stakes?',
      'Do we already own a platform component that covers 80% of it?',
      'Regulatory accountability: can we evidence control if we outsource it?',
      'Time-to-market versus long-term cost of ownership',
      'Exit cost and data portability if we replace the vendor later',
    ],
    output: 'A sourcing recommendation with the control and data-ownership implications stated.',
  },
  {
    id: 'mvp-scope',
    title: 'MVP scope & release slicing',
    question: 'What is the smallest release that is safe, legal and useful?',
    whenUsed: 'At the start of every increment.',
    criteria: [
      'Never slice away a control — compliance is not a stretch item',
      'Slice by client outcome, not by system convenience',
      'Keep one end-to-end path complete rather than five partial ones',
      'Define the manual fallback for everything not yet automated',
      'Write the exit criteria before development starts',
    ],
    output: 'An increment plan with scope, exit criteria and an explicit out-of-scope list.',
  },
]

/* ------------------------------------------------------------------ */
/* Prioritisation — worked example                                     */
/* ------------------------------------------------------------------ */

export const riceExample = {
  note:
    'RICE = (Reach × Impact × Confidence) ÷ Effort. Reach is clients affected per quarter, Impact is 0.25–3, Confidence is a percentage, Effort is person-months. The score does not decide — it structures the argument.',
  items: [
    {
      item: 'Suitability engine + audit trail',
      reach: 12000,
      impact: 3,
      confidence: 100,
      effort: 6,
      score: 600,
      decision: 'Must — regulatory precondition, no score needed',
    },
    {
      item: 'Fund detail page with cost & risk disclosure',
      reach: 12000,
      impact: 2,
      confidence: 90,
      effort: 3,
      score: 720,
      decision: 'Must — highest score, primary conversion driver',
    },
    {
      item: 'Fund comparison (side-by-side)',
      reach: 4500,
      impact: 1.5,
      confidence: 80,
      effort: 2,
      score: 270,
      decision: 'Should — strong decision-quality benefit',
    },
    {
      item: 'Regular savings plan setup',
      reach: 3000,
      impact: 2,
      confidence: 70,
      effort: 4,
      score: 105,
      decision: 'Should — recurring behaviour, lands after core journey',
    },
    {
      item: 'Performance attribution analytics',
      reach: 2000,
      impact: 1,
      confidence: 60,
      effort: 5,
      score: 24,
      decision: 'Could — deferred; revisit after adoption data exists',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* User stories & acceptance criteria                                  */
/* ------------------------------------------------------------------ */

export interface UserStory {
  id: string
  asA: string
  iWant: string
  soThat: string
  acceptance: string[]
}

export interface Epic {
  id: string
  epic: string
  context: string
  stories: UserStory[]
}

export const epics: Epic[] = [
  {
    id: 'EPIC-SUIT-01',
    epic: 'Suitability assessment for digital fund purchase',
    context:
      'Sliced from the Digital Mutual Fund Purchase case. Stories are written so that a developer, a tester and a compliance reviewer all read the same definition of done.',
    stories: [
      {
        id: 'US-101',
        asA: 'a mass affluent client investing through the mobile app',
        iWant: 'to know whether a fund matches my risk profile before I place an order',
        soThat: 'I do not have to rely on my own interpretation of a risk indicator',
        acceptance: [
          'Given my risk profile is in date, when I open a fund rated above my capacity for loss, then the order action is disabled and I see the specific reason',
          'Given the fund rating exceeds my profile, then at least two suitable alternatives with the same asset class are offered',
          'Given my profile has expired, then I am routed to re-assessment before any amount can be entered',
          'Given an assessment runs, then inputs, rule version, outcome and timestamp are stored and retrievable by reference',
        ],
      },
      {
        id: 'US-102',
        asA: 'a relationship manager reviewing a digital order',
        iWant: 'to see why a client was blocked from buying a fund',
        soThat: 'I can explain the decision instead of escalating it',
        acceptance: [
          'Given a blocked suitability outcome exists, then the RM view shows product rating, client rating and the rule that failed',
          'Given an override is permitted, then it requires a second approver, a reason code and is recorded against the order',
          'Given no override is permitted, then the override action is not rendered at all',
        ],
      },
      {
        id: 'US-103',
        asA: 'a compliance reviewer',
        iWant: 'to reconstruct any suitability decision after the fact',
        soThat: 'supervision can evidence that the control operated as designed',
        acceptance: [
          'Given an order reference, then the full decision snapshot can be retrieved for 5 years',
          'Given a rule version changed, then historical decisions still show the version applied at the time',
          'Given a decision is retrieved, then client answers, product classification and outcome are displayed together',
        ],
      },
    ],
  },
  {
    id: 'EPIC-ELIG-02',
    epic: 'Eligibility and disclosure for a structured product subscription',
    context:
      'Sliced from the Structured Product Subscription case. Here the product risk is misunderstanding, so the acceptance criteria protect comprehension as well as function.',
    stories: [
      {
        id: 'US-201',
        asA: 'a client outside the approved target market',
        iWant: 'not to be shown products that are not intended for me',
        soThat: 'I am not put in a position of asking for something I should not buy',
        acceptance: [
          'Given my segment or categorisation is outside the target market, then the offer does not appear in my catalogue or search results',
          'Given a direct link to the offer is opened, then eligibility is re-checked server-side and access is refused',
          'Given eligibility fails, then no partial product detail is rendered',
        ],
      },
      {
        id: 'US-202',
        asA: 'a client considering a barrier product',
        iWant: 'to see the unfavourable scenario as clearly as the favourable one',
        soThat: 'I understand what actually puts my capital at risk',
        acceptance: [
          'Given I open the product, then favourable, moderate, unfavourable and stress outcomes are shown with assumptions',
          'Given scenarios are displayed, then the barrier level and observation convention are stated in the same view',
          'Given I have not opened the scenario view, then the amount step remains disabled',
        ],
      },
      {
        id: 'US-203',
        asA: 'a product governance owner',
        iWant: 'every subscription traced to the document version the client acknowledged',
        soThat: 'we can prove what was disclosed at the time of sale',
        acceptance: [
          'Given a document is acknowledged, then document ID, version and timestamp are captured against the client',
          'Given a document version is superseded, then existing acknowledgements remain linked to the version seen',
          'Given a subscription is placed, then all mandatory acknowledgements are present or the order is rejected',
        ],
      },
    ],
  },
  {
    id: 'EPIC-AI-03',
    epic: 'Human review workflow for an AI wealth assistant',
    context:
      'Sliced from the AI Wealth Advisor case. The risk here is not downtime — it is a confident, wrong answer reaching a client.',
    stories: [
      {
        id: 'US-301',
        asA: 'a relationship manager using the AI assistant',
        iWant: 'every answer to show the sources it came from',
        soThat: 'I can judge whether to trust it before I use it',
        acceptance: [
          'Given an answer is generated, then each substantive claim links to an approved source with version and effective date',
          'Given retrieved content is stale by policy, then it is excluded and the answer states that no current source was found',
          'Given no approved source exists, then the assistant returns "not found" rather than an ungrounded answer',
        ],
      },
      {
        id: 'US-302',
        asA: 'a reviewer responsible for client-facing output',
        iWant: 'to approve, edit or reject a draft with my decision recorded',
        soThat: 'accountability for what the client receives stays with a human',
        acceptance: [
          'Given a draft is submitted for review, then approve / edit / reject are available with reviewer identity captured',
          'Given an edit is made, then both the original and the edited text are retained',
          'Given confidence is below threshold, then the task is routed for review automatically and cannot be sent directly',
        ],
      },
      {
        id: 'US-303',
        asA: 'a model risk owner',
        iWant: 'to reconstruct any interaction end to end',
        soThat: 'incidents and supervisory questions can be answered with evidence',
        acceptance: [
          'Given an interaction ID, then prompt, retrieved chunks, response, reviewer action and timestamps are retrievable',
          'Given a model or prompt version changes, then historical records still reference the version used',
          'Given a prohibited request is made, then the guardrail decision and the reason are logged before generation',
        ],
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* KPI framework                                                       */
/* ------------------------------------------------------------------ */

export const kpiFramework = {
  intro:
    'A metric without a baseline, a target and a guardrail is a vanity number. Guardrails are the metrics that must not degrade while the primary metric improves.',
  items: [
    {
      metric: 'Journey completion rate',
      type: 'Primary',
      definition: 'Orders started that reach dealt/settled status',
      baseline: '61%',
      target: '≥ 80%',
      guardrail: 'Suitability block rate must stay between 3% and 9%',
    },
    {
      metric: 'Time to complete',
      type: 'Primary',
      definition: 'Median time from product discovery to order confirmation',
      baseline: '9m 40s',
      target: '≤ 5m',
      guardrail: 'Disclosure acknowledgement rate ≥ 99%',
    },
    {
      metric: 'Order error rate',
      type: 'Guardrail',
      definition: 'Orders rejected by validation or downstream checks',
      baseline: '4.8%',
      target: '≤ 1.5%',
      guardrail: 'No increase in manual repair effort per order',
    },
    {
      metric: 'Digital adoption',
      type: 'Primary',
      definition: 'Share of investing clients completing at least one digital order per quarter',
      baseline: '22%',
      target: '≥ 40%',
      guardrail: 'Complaint rate per 1,000 orders does not increase',
    },
    {
      metric: 'Straight-through processing rate',
      type: 'Operational',
      definition: 'Orders settled with no manual intervention',
      baseline: '74%',
      target: '≥ 92%',
      guardrail: 'Exception queue age ≤ 1 business day',
    },
    {
      metric: 'Audit completeness',
      type: 'Control',
      definition: 'Orders with a fully reconstructable decision and consent trail',
      baseline: 'n/a (manual)',
      target: '100%',
      guardrail: 'Zero decisions without a stored rule version',
    },
    {
      metric: 'Client comprehension signal',
      type: 'Quality',
      definition: 'Clients who view scenario disclosure before subscribing to a complex product',
      baseline: '48%',
      target: '≥ 90%',
      guardrail: 'Cancellation rate does not rise above 2%',
    },
    {
      metric: 'RM time saved',
      type: 'Operational',
      definition: 'Reduction in advisor time spent on documentation search per client meeting',
      baseline: '0',
      target: '−25%',
      guardrail: 'Escalation rate to human specialists stays ≥ 8% (no over-automation)',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Risk & compliance register                                          */
/* ------------------------------------------------------------------ */

export const riskRegister = [
  {
    id: 'RC-01',
    area: 'Conduct',
    risk: 'Client buys a product above their assessed risk capacity',
    control: 'Server-side suitability gate before order capture',
    requirement: 'Blocking decision, with reason shown and alternatives offered',
    evidence: 'Decision record with inputs, rule version and outcome',
  },
  {
    id: 'RC-02',
    area: 'Disclosure',
    risk: 'Client commits before reading key information documents',
    control: 'Document acknowledgement gate before the amount step',
    requirement: 'Acknowledgement captured with document ID, version and timestamp',
    evidence: 'Acknowledgement record per client per order',
  },
  {
    id: 'RC-03',
    area: 'Product governance',
    risk: 'Product distributed outside its approved target market',
    control: 'Eligibility service applied at catalogue, detail and order time',
    requirement: 'Fail closed; ineligible products are never rendered',
    evidence: 'Eligibility evaluation log with target market version',
  },
  {
    id: 'RC-04',
    area: 'Complexity',
    risk: 'Client misunderstands a conditional payoff',
    control: 'Mandatory scenario disclosure incl. unfavourable and stress cases',
    requirement: 'Scenario view must be opened before amount entry',
    evidence: 'Scenario view event with timestamp per client',
  },
  {
    id: 'RC-05',
    area: 'Operations',
    risk: 'Order fails downstream and the client is not informed',
    control: 'Order status lifecycle with proactive notification',
    requirement: 'Every status change is surfaced to the client within SLA',
    evidence: 'Status history and notification delivery log',
  },
  {
    id: 'RC-06',
    area: 'Financial crime',
    risk: 'Transaction or client triggers a screening obligation',
    control: 'Sanctions and AML screening within pre-trade checks',
    requirement: 'Screening result required before execution; hits route to compliance',
    evidence: 'Screening result, decision and case reference',
  },
  {
    id: 'RC-07',
    area: 'Data',
    risk: 'Stale product or pricing data shown to a client',
    control: 'Data freshness monitoring and "as of" labelling',
    requirement: 'Indicative prices time-stamped; stale data suppresses the journey step',
    evidence: 'Data quality dashboard with breach history',
  },
  {
    id: 'RC-08',
    area: 'AI',
    risk: 'Ungrounded or out-of-scope AI output reaches a client',
    control: 'Guardrails, grounded retrieval and mandatory human review',
    requirement: 'No client-facing output without reviewer approval; citations required',
    evidence: 'Interaction log with sources, confidence and reviewer decision',
  },
]

/* ------------------------------------------------------------------ */
/* Release / increment plan                                            */
/* ------------------------------------------------------------------ */

export const releasePlan = [
  {
    increment: 'R1 — Safe foundation',
    scope: 'Eligibility service, suitability engine, audit trail, catalogue read-only',
    outcome: 'Clients can see only what they may buy, and decisions are evidenced',
    dependency: 'Product governance data, client categorisation, rules repository',
    exit: '100% of decisions reconstructable; zero eligibility bypass in UAT',
  },
  {
    increment: 'R2 — Transact',
    scope: 'Fund detail, disclosure gate, order capture, pre-trade checks, status',
    outcome: 'A client can complete an order digitally, end to end',
    dependency: 'R1, transfer agent connectivity, core banking balances',
    exit: 'Completion rate ≥ 75% in pilot; error rate ≤ 2%',
  },
  {
    increment: 'R3 — Understand',
    scope: 'Comparison, regular savings plan, portfolio update and performance view',
    outcome: 'Repeat investing behaviour and post-purchase confidence',
    dependency: 'R2, portfolio engine, notification service',
    exit: 'Repeat purchase rate uplift; portfolio view accuracy signed off by operations',
  },
  {
    increment: 'R4 — Assist',
    scope: 'RM Copilot with grounded retrieval and human review workflow',
    outcome: 'Advisors resolve client questions faster with sourced answers',
    dependency: 'Approved knowledge corpus, model hosting, entitlement service',
    exit: 'Answer accuracy ≥ 90% on golden set; 100% reviewed before client delivery',
  },
]

/* ------------------------------------------------------------------ */
/* Delivery hygiene                                                    */
/* ------------------------------------------------------------------ */

export const deliveryHygiene = [
  {
    label: 'Definition of Ready',
    items: [
      'Problem statement, affected segment and hypothesis written',
      'Business rules and regulatory constraints identified with an owner',
      'Data sources and system touchpoints confirmed',
      'Acceptance criteria written and reviewed by compliance where relevant',
      'Dependency owners named and available',
    ],
  },
  {
    label: 'Definition of Done',
    items: [
      'Acceptance criteria demonstrated in a test environment',
      'Audit/evidence requirements implemented, not deferred',
      'Exception paths and client messaging tested, not only the happy path',
      'Operational runbook and support ownership agreed',
      'Metric instrumentation live before release, not after',
    ],
  },
]

export const stakeholderMap = [
  {
    role: 'Product Owner',
    accountable: 'Problem framing, scope, prioritisation, outcome metrics',
    consults: 'Business, compliance, operations, technology',
    artefact: 'Product brief, backlog, release plan, KPI review',
  },
  {
    role: 'Business Analyst',
    accountable: 'Requirements, business rules, data and integration analysis',
    consults: 'Subject-matter experts, operations, technology',
    artefact: 'Requirements, process maps, acceptance criteria, impact analysis',
  },
  {
    role: 'Compliance / Legal',
    accountable: 'Regulatory interpretation and control adequacy',
    consults: 'Product Owner, risk',
    artefact: 'Control requirements, disclosure sign-off, approval records',
  },
  {
    role: 'Risk (Conduct / Model)',
    accountable: 'Risk acceptance, thresholds, monitoring',
    consults: 'Product Owner, compliance',
    artefact: 'Risk assessment, guardrail thresholds, model validation',
  },
  {
    role: 'Operations',
    accountable: 'Exception handling, SLAs, manual fallbacks',
    consults: 'Business Analyst, technology',
    artefact: 'Runbook, exception queue design, SLA definitions',
  },
  {
    role: 'Engineering / Architecture',
    accountable: 'System design, API contracts, non-functional requirements',
    consults: 'Product Owner, BA, security',
    artefact: 'API specification, integration design, test evidence',
  },
]

/* ------------------------------------------------------------------ */
/* Lifecycle artefacts (what a PO produces at each stage)              */
/* ------------------------------------------------------------------ */

export const lifecycleArtefacts = [
  { stage: 'Idea', artefact: 'Problem statement & hypothesis', question: 'Whose problem, how big, what evidence?' },
  { stage: 'Product Design', artefact: 'Target market & product brief', question: 'Who is it for, and who must not buy it?' },
  { stage: 'Risk Assessment', artefact: 'Risk & control mapping', question: 'What can go wrong for client, bank and operations?' },
  { stage: 'Compliance / Legal', artefact: 'Disclosure & documentation set', question: 'What must be shown, acknowledged and retained?' },
  { stage: 'Approval', artefact: 'Governance pack', question: 'What decision is being requested, from whom?' },
  { stage: 'Launch', artefact: 'Channel enablement & training', question: 'Who needs to know before the first client touches it?' },
  { stage: 'Distribution', artefact: 'Journey rules, eligibility, suitability', question: 'How is the control enforced in the channel?' },
  { stage: 'Monitoring', artefact: 'MI dashboard & complaint analysis', question: 'Is the product behaving as intended in the real world?' },
  { stage: 'Review', artefact: 'Periodic product review', question: 'Is the target market still correct?' },
  { stage: 'Retirement', artefact: 'Closure plan for existing holders', question: 'What happens to clients who already own it?' },
]

/* ------------------------------------------------------------------ */
/* System / API touchpoint map                                         */
/* ------------------------------------------------------------------ */

export const systemTouchpoints = [
  {
    stage: 'Authentication',
    system: 'Identity platform',
    api: 'POST /auth/step-up',
    data: 'Authentication factors, risk signals',
    note: 'Step-up is triggered by transaction risk, not by the screen',
  },
  {
    stage: 'Customer Profile',
    system: 'CRM / client master · KYC',
    api: 'GET /clients/{id}/kyc-status',
    data: 'Categorisation, residency, tax domicile',
    note: 'Drives eligibility before anything is displayed',
  },
  {
    stage: 'Risk Profile',
    system: 'Suitability engine',
    api: 'POST /risk-profile/assess',
    data: 'Questionnaire responses, scoring version',
    note: 'Versioned; expiry enforced at transaction time',
  },
  {
    stage: 'Portfolio',
    system: 'Portfolio engine · custody',
    api: 'GET /portfolio/{id}/positions',
    data: 'Positions, cost basis, valuations',
    note: 'Source of concentration and allocation checks',
  },
  {
    stage: 'Product Catalogue',
    system: 'Product catalogue · governance',
    api: 'GET /products?filters · GET /products/{id}/eligibility',
    data: 'Product static data, target market, restrictions',
    note: 'Governance rules enforced server-side',
  },
  {
    stage: 'Product Details',
    system: 'Product service · document management',
    api: 'GET /products/{id}/scenarios · GET /products/{id}/costs',
    data: 'Costs, risk indicator, scenarios, documents',
    note: 'Document version is captured on acknowledgement',
  },
  {
    stage: 'Suitability',
    system: 'Suitability engine',
    api: 'POST /suitability/assess',
    data: 'Risk profile version, product classification, portfolio',
    note: 'Fail closed: engine unavailable means no order',
  },
  {
    stage: 'Order',
    system: 'Order management · core banking',
    api: 'POST /orders/preview · POST /orders',
    data: 'Instrument, amount, account, fees',
    note: 'Idempotency key prevents duplicate submission',
  },
  {
    stage: 'Pre-Trade Checks',
    system: 'Pre-trade control · screening · limits',
    api: 'POST /pretrade/check · POST /screening/check',
    data: 'Restrictions, acknowledgements, limit utilisation',
    note: 'Every check must return a definitive result',
  },
  {
    stage: 'Execution',
    system: 'Execution management · transfer agent',
    api: 'POST /execution/route · Event: order.executed',
    data: 'Routing decision, price, quantity, timestamp',
    note: 'Price tolerance re-quote rules protect the client',
  },
  {
    stage: 'Settlement',
    system: 'Settlement engine · custody',
    api: 'GET /settlement/{ref} · Event: settlement.completed',
    data: 'Instructions, balances, fail records',
    note: 'Fails are client-visible with a revised timeline',
  },
  {
    stage: 'Portfolio Update',
    system: 'Portfolio engine · reporting',
    api: 'GET /portfolio/{id}/allocation · GET /statements/{id}',
    data: 'Updated positions, allocation, confirmations',
    note: 'Closes the loop and triggers the next conversation',
  },
]
