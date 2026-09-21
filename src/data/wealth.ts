import type { Segment } from './types'

/* ------------------------------------------------------------------ */
/* Ecosystem                                                           */
/* ------------------------------------------------------------------ */

export const ecosystem = {
  spine: [
    { title: 'Client', detail: 'Objectives, constraints, liabilities and risk capacity.' },
    { title: 'RM / Advisor', detail: 'Translates needs into solutions within a governed framework.' },
    {
      title: 'Solutions',
      detail: 'Investment Products · Insurance · FX · Lending · Cash Management',
    },
    { title: 'Portfolio Management', detail: 'Allocation, monitoring, rebalancing and reporting.' },
  ],
}

/* ------------------------------------------------------------------ */
/* Client segmentation                                                 */
/* ------------------------------------------------------------------ */

export const segments: Segment[] = [
  {
    name: 'Retail',
    profile: 'Everyday banking clients with straightforward needs and smaller investable amounts.',
    needs: 'Savings, basic investments, protection, payments and credit.',
    serviceModel: 'Digital self-service with branch and contact-centre support.',
    advisoryModel: 'Guided or execution-only; standardised recommendations.',
    productComplexity: 'Simple, standardised products with clear disclosure.',
    digitalExperience: 'Mobile-first journeys designed for clarity and low friction.',
  },
  {
    name: 'Affluent',
    profile: 'Clients with meaningful investable assets and growing planning needs.',
    needs: 'Portfolio construction, regular investing, protection and retirement planning.',
    serviceModel: 'Digital channels supported by remote advisory teams.',
    advisoryModel: 'Advisory with documented suitability and curated product shelves.',
    productComplexity: 'Funds, ETFs, bonds and simple protection products.',
    digitalExperience: 'Full digital investing journeys with advisory escalation paths.',
  },
  {
    name: 'HNW',
    profile: 'High-net-worth clients with multi-asset portfolios and cross-border considerations.',
    needs: 'Diversification, bespoke mandates, lending, and succession or tax-aware structuring.',
    serviceModel: 'Dedicated RM supported by specialists (investments, credit, trust, FX).',
    advisoryModel: 'Relationship-led advisory, discretionary mandates and periodic portfolio reviews.',
    productComplexity: 'Broader shelf including structured products and derivatives, subject to eligibility.',
    digitalExperience: 'Digital as a transparency and reporting layer; relationships remain primary.',
  },
  {
    name: 'UHNW',
    profile: 'Ultra-high-net-worth clients and family offices with complex structures.',
    needs: 'Wealth structuring, succession, philanthropy, liquidity solutions and bespoke exposure.',
    serviceModel: 'Team-based coverage: private banker, investment specialist, trust and legal coordination.',
    advisoryModel: 'Highly bespoke; solutions designed around structures rather than products.',
    productComplexity: 'Bespoke mandates, private markets, structured solutions and treasury instruments.',
    digitalExperience: 'Consolidated reporting and secure collaboration; most interaction remains human-led.',
  },
]

/* ------------------------------------------------------------------ */
/* Core processes                                                      */
/* ------------------------------------------------------------------ */

export const coreProcesses: {
  term: string
  definition: string
  tag?: string
  baAngle: string
}[] = [
  {
    term: 'KYC',
    definition:
      'Know Your Customer: establishing and maintaining a verified understanding of who the client is, including identity, source of wealth and ongoing review.',
    tag: 'Onboarding',
    baAngle:
      'Requirements focus on data model, document evidence, review triggers and the state machine between onboarding, periodic review and remediation.',
  },
  {
    term: 'AML',
    definition:
      'Anti-Money-Laundering controls: screening, transaction monitoring and escalation designed to prevent the bank being used for illicit purposes.',
    tag: 'Control',
    baAngle:
      'Requirements focus on screening coverage, alert triage workflow, false-positive handling and the audit trail of every decision.',
  },
  {
    term: 'Risk Profiling',
    definition:
      'Assessing a client’s capacity and tolerance for risk, producing the reference point used by suitability decisions.',
    tag: 'Advisory',
    baAngle:
      'Requirements focus on questionnaire design, scoring logic, versioning, expiry and re-assessment triggers.',
  },
  {
    term: 'Suitability',
    definition:
      'Matching product characteristics to the client’s profile, objectives and circumstances, and evidencing that assessment.',
    tag: 'Advisory',
    baAngle:
      'Requirements focus on rule definition, outcome types (pass / warning / block), overrides with approval, and reconstructable decision records.',
  },
  {
    term: 'Advisory',
    definition:
      'The process through which a client’s needs are translated into a recommended course of action with documented rationale.',
    tag: 'Distribution',
    baAngle:
      'Requirements focus on the advisory workflow, disclosure capture, recommendation records and consistency across channels.',
  },
  {
    term: 'Portfolio Management',
    definition:
      'Constructing, monitoring and adjusting portfolios against a mandate, including allocation, rebalancing and reporting.',
    tag: 'Mandate',
    baAngle:
      'Requirements focus on mandate rules, model portfolios, drift and rebalancing logic, valuation sources and performance methodology.',
  },
  {
    term: 'Order Management',
    definition:
      'Capturing, validating, routing and tracking client orders through pre-trade checks, execution and settlement.',
    tag: 'Execution',
    baAngle:
      'Requirements focus on order state machine, idempotency, cut-offs, partial fills, status transparency and exception handling.',
  },
  {
    term: 'Post-Sale Service',
    definition:
      'Everything that happens after the trade: confirmations, statements, corporate actions, maturity and coupon events, and reviews.',
    tag: 'Servicing',
    baAngle:
      'Requirements focus on event monitoring, client notifications, servicing SLAs and the completeness of the client record over time.',
  },
]

/* ------------------------------------------------------------------ */
/* Solution families shown on the Wealth Management page               */
/* ------------------------------------------------------------------ */

export const solutionFamilies = [
  {
    title: 'Investment Products',
    to: '/products',
    body: 'Equity, fixed income, funds, ETFs, structured products and derivatives — each with its own risk, liquidity and governance profile.',
  },
  {
    title: 'Insurance',
    to: '/products/insurance',
    body: 'Protection against mortality and health events, plus savings and annuity structures for long-term income planning.',
  },
  {
    title: 'FX',
    to: '/products/fx',
    body: 'Conversion and hedging for clients whose assets, income and liabilities sit in different currencies.',
  },
  {
    title: 'Lending',
    to: '/wealth-management',
    body: 'Lombard and mortgage solutions that create liquidity without forcing the sale of investments.',
  },
  {
    title: 'Cash Management',
    to: '/wealth-management',
    body: 'Deposits, sweeps and payment capability — the operating layer that keeps the portfolio funded.',
  },
  {
    title: 'Portfolio Management',
    to: '/wealth-management',
    body: 'Mandates, allocation, monitoring, rebalancing and reporting across everything above.',
  },
]

/* ------------------------------------------------------------------ */
/* Wealth management value chain (process view)                        */
/* ------------------------------------------------------------------ */

export const valueChain = [
  { label: 'Client Onboarding', detail: 'KYC, AML, categorisation, account opening' },
  { label: 'Discovery', detail: 'Objectives, liabilities, horizon, constraints' },
  { label: 'Risk Profiling', detail: 'Capacity and tolerance assessment' },
  { label: 'Proposal', detail: 'Allocation, product selection, disclosure' },
  { label: 'Suitability', detail: 'Assessment and evidence' },
  { label: 'Execution', detail: 'Order, pre-trade checks, settlement' },
  { label: 'Monitoring', detail: 'Portfolio review, drift, events' },
  { label: 'Reporting', detail: 'Valuation, performance, statements' },
  { label: 'Review', detail: 'Change of circumstances, re-assessment' },
]
