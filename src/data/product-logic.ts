/* ------------------------------------------------------------------ */
/* Product Logic — six concepts                                        */
/* ------------------------------------------------------------------ */

export interface LogicConcept {
  id: string
  title: string
  question: string
  explanation: string
  points: string[]
  poNote: string
}

export const logicConcepts: LogicConcept[] = [
  {
    id: 'client-objective',
    title: 'Client Objective',
    question: 'What is the product meant to achieve for the client?',
    explanation:
      'Every product starts with an objective: growth, income, protection, stability, liquidity or transfer of wealth. Objectives determine horizon and risk capacity before any instrument is discussed.',
    points: [
      'Growth — accept volatility for long-term appreciation',
      'Income — prioritise predictable cash flows',
      'Protection — transfer a defined risk away from the balance sheet',
      'Stability — preserve capital and reduce portfolio volatility',
      'Liquidity — keep access to cash without material loss of value',
      'Transfer — structure wealth for succession or estate purposes',
    ],
    poNote:
      'In a digital journey, the objective is the first branching input: it drives which products are surfaced and which suitability rules apply.',
  },
  {
    id: 'risk-return',
    title: 'Risk & Return',
    question: 'What risk is being taken, and what compensates the investor for taking it?',
    explanation:
      'Return is compensation for bearing risk. The relationship is not a promise — it is an expectation priced by the market. Understanding which risks are being paid for is the core of product literacy.',
    points: [
      'Market risk — broad price movements',
      'Credit risk — the issuer may not pay',
      'Interest rate risk — value changes as rates move',
      'Liquidity risk — exit may be difficult or costly',
      'Currency risk — value depends on exchange rates',
      'Complexity risk — payoff conditions are misunderstood',
    ],
    poNote:
      'Risk is where product design meets regulation: risk rating, target market and suitability are all downstream of this concept.',
  },
  {
    id: 'pricing',
    title: 'Pricing',
    question: 'How is the price determined, and what does the client actually pay?',
    explanation:
      'Pricing translates future cash flows and risk into a number today. In banking, the visible price is only part of the story — spreads, fees, accrued interest and funding costs all matter.',
    points: [
      'Present value of expected cash flows discounted at an appropriate rate',
      'Credit spread for the risk of the issuer',
      'Liquidity premium for how easily the instrument trades',
      'Explicit costs: commission, management fees, spreads, custody',
      'Implicit costs: bid-ask spread, market impact, funding',
      'Indicative versus executable pricing is a control issue, not a detail',
    ],
    poNote:
      'Product Owner focus: transparency. Clients need to see the rate, the margin and the total amount before they commit.',
  },
  {
    id: 'payoff',
    title: 'Payoff',
    question: 'What does the client receive under different outcomes?',
    explanation:
      'A payoff describes the economic result across scenarios. Linear instruments move one-for-one with the underlying; non-linear and conditional instruments do not.',
    points: [
      'Linear payoff — value moves proportionally with the underlying',
      'Asymmetric payoff — options cap loss while keeping upside open',
      'Conditional payoff — barriers and triggers change the outcome',
      'Path dependency — what matters may be the route, not the destination',
      'Scenario disclosure: favourable, moderate, unfavourable and stress',
    ],
    poNote:
      'For complex products, the payoff is the product. It must be explained in plain language and visualised before subscription.',
  },
  {
    id: 'liquidity',
    title: 'Liquidity',
    question: 'How quickly and how cheaply can the client exit?',
    explanation:
      'Liquidity is the ability to convert an asset into cash at a fair price. It is often the risk clients underestimate, because it only becomes visible when they need to exit.',
    points: [
      'Exchange-traded instruments generally offer continuous liquidity',
      'Funds depend on dealing cycles and may have notice periods',
      'Bonds vary widely by issuer, size and market conditions',
      'Structured products often have limited secondary markets',
      'Lock-ups, notice periods and redemption gates change the real liquidity',
    ],
    poNote:
      'Liquidity must be tested in suitability, not only described in documents. It interacts directly with the client’s horizon.',
  },
  {
    id: 'product-lifecycle',
    title: 'Product Lifecycle',
    question: 'How does a product come to exist, and how does it end?',
    explanation:
      'Products are governed objects with a lifecycle. They are designed, approved, distributed, monitored and eventually retired — with decision rights and evidence at every stage.',
    points: [
      'Design is constrained by target market and regulatory expectations',
      'Approval involves risk, legal, compliance and often an investment committee',
      'Distribution is limited to approved channels and client segments',
      'Monitoring reviews sales patterns, complaints and client outcomes',
      'Retirement must handle existing holders, not just stop new sales',
    ],
    poNote:
      'This is the strongest evidence of product thinking: treating a financial product as a governed lifecycle rather than a static item in a catalogue.',
  },
]

/* ------------------------------------------------------------------ */
/* Product lifecycle                                                   */
/* ------------------------------------------------------------------ */

export const lifecycleSteps = [
  { label: 'Idea', detail: 'Client need, market opportunity or strategic gap' },
  { label: 'Product Design', detail: 'Structure, terms, target market, economics' },
  { label: 'Risk Assessment', detail: 'Market, credit, liquidity, operational and conduct risk' },
  { label: 'Compliance / Legal', detail: 'Documentation, disclosure, regulatory analysis' },
  { label: 'Approval', detail: 'Product governance committee and approval records' },
  { label: 'Launch', detail: 'Shelf setup, channel enablement, training' },
  { label: 'Distribution', detail: 'Advisory, discretionary and digital channels' },
  { label: 'Monitoring', detail: 'Sales patterns, complaints, client outcomes' },
  { label: 'Review', detail: 'Periodic product and target market review' },
  { label: 'Retirement', detail: 'Closure to new business and treatment of existing holders' },
]

/* ------------------------------------------------------------------ */
/* Concept → requirement bridge                                        */
/* ------------------------------------------------------------------ */

export const conceptToRequirement = [
  [
    'Client Objective',
    'Problem statement, segment and hypothesis',
    'Objective captured at journey entry; drives catalogue filtering',
    'Product brief and target market definition',
  ],
  [
    'Risk & Return',
    'Risk rating configuration and suitability rules',
    'Product risk compared with client capacity at order time',
    'Suitability decision record with rule version',
  ],
  [
    'Pricing',
    'Transparency requirements: rate, margin, fees, total',
    'Indicative labelling, validity window, re-quote tolerance',
    'Quote record with timestamp and price source',
  ],
  [
    'Payoff',
    'Scenario set and disclosure ordering',
    'Scenario view must be opened before amount entry',
    'Scenario view event and stored scenario version',
  ],
  [
    'Liquidity',
    'Dealing cycle, exit mechanics and notice period in UX',
    'Liquidity tested in suitability against client horizon',
    'Suitability input and disclosure acknowledgement',
  ],
  [
    'Product Lifecycle',
    'Governance workflow, monitoring and retirement plan',
    'Lifecycle state controls visibility and distribution',
    'Approval records, review logs and closure plan',
  ],
]

/* ------------------------------------------------------------------ */
/* Reusable product framework                                          */
/* ------------------------------------------------------------------ */

export const frameworkQuestions = [
  {
    question: 'What problem does it solve?',
    answer:
      'Define the needs and investment objectives of the target clients, and ensure the product design and value proposition effectively meet those needs.',
  },
  {
    question: 'Who is it for?',
    answer:
      'Define the target market: segment, categorisation, knowledge and experience, horizon and capacity for loss — and who must not buy it.',
  },
  {
    question: 'How does it generate return?',
    answer:
      'Describe the economic engine: cash flows, participation, coupon conditions, or risk transfer value. Be explicit about what drives the outcome.',
  },
  {
    question: 'What are the risks?',
    answer:
      'Market, credit, liquidity, currency, complexity and operational risk — each stated in terms the client can understand.',
  },
  {
    question: 'How is it priced?',
    answer:
      'Show the components: underlying value, spreads, fees, accrued interest and any implicit costs. Separate indicative from executable.',
  },
  {
    question: 'How liquid is it?',
    answer:
      'State exit mechanics honestly: dealing cycles, notice periods, secondary market depth and possible loss on early exit.',
  },
  {
    question: 'What regulations apply?',
    answer:
      'Identify the governing framework: disclosure, product governance, suitability, reporting and any jurisdiction-specific restrictions.',
  },
  {
    question: 'How is it distributed?',
    answer:
      'Define channels, eligibility, controls and the evidence each channel must produce. Digital channels need the same rigour as advisory ones.',
  },
  {
    question: 'What happens after purchase?',
    answer:
      'Cover servicing: confirmations, statements, corporate actions, maturity and coupon events, monitoring and review triggers.',
  },
]
