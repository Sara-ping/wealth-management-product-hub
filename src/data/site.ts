/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

/* The single source of navigation truth, used by BOTH the header and the
   footer so the two can never drift apart.

   Five top-level destinations, rendered flat — no dropdowns. The domain pages
   that used to sit at the top level (Product Logic, Wealth Management, Digital
   Wealth, AI in Wealth Management) are still reachable from the Products page,
   the PO Lens page and the cross-links at the foot of each page.

   Exported as `headerNavItems` for historical reasons; the footer imports the
   same array, so any change here applies to both. */
export const headerNavItems: {
  label: string
  to: string
  end?: boolean
  /** Section heading shown at the top of a dropdown, when a menu is present. */
  menuLabel?: string
  menu?: { label: string; to: string }[]
}[] = [
  { label: 'Home', to: '/', end: true },
  { label: 'Products', to: '/products' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'PO Lens', to: '/product-owner' },
  { label: 'About', to: '/about' },
]

export const ctaRoute = { label: 'View My Product Thinking', to: '/case-studies' }

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const home = {
  hero: {
    eyebrow: 'Wealth Management Product Portfolio',
    title: 'Banking Business Analyst / Product Owner',
    lede:
      'I explore how investment products work, how clients interact with them, and how product knowledge becomes a digital banking journey — rules, requirements, controls and delivery decisions.',
    actions: [
      { label: 'Explore Products', to: '/products', primary: true },
      { label: 'View Case Studies', to: '/case-studies', primary: false },
      { label: 'How I Work', to: '/product-owner', primary: false },
    ],
    facts: [
      { label: 'Domain', value: 'Wealth Management · Investment Products' },
      { label: 'Role lens', value: 'Business Analysis · Product Ownership' },
      { label: 'Focus', value: 'Digital banking journeys & controls' },
    ],
  },

  /* Three capability cards — what I understand, what I translate, what I own. */
  capabilities: {
    eyebrow: 'What this portfolio shows',
    title: 'Product knowledge, translated into delivery',
    items: [
      {
        kicker: 'Investment Products',
        title: 'I understand the product',
        points: [
          'Product mechanics and how the investor makes money',
          'The risks actually being taken, not just the label',
          'Customer use cases each product genuinely fits',
          'The product rules that constrain a transaction',
        ],
      },
      {
        kicker: 'Digital Product Thinking',
        title: 'I translate it into a journey',
        points: [
          'Customer need mapped to a digital journey',
          'Product rules expressed as system behaviour',
          'Business and functional requirements',
          'Exceptions designed rather than discovered',
        ],
      },
      {
        kicker: 'Product Ownership',
        title: 'I own the delivery decision',
        points: [
          'Prioritisation with an explicit trade-off',
          'Acceptance criteria a tester can execute',
          'Risk, control and the evidence that proves it',
          'KPIs with a target and a guardrail',
        ],
      },
    ],
  },

  /* Two flagship cases surfaced on the home page. */
  featured: {
    eyebrow: 'Portfolio Evidence',
    title: 'Two cases worked end to end',
    items: [
      {
        to: '/case-studies#digital-mutual-fund-purchase',
        kicker: 'Case 01 · Digital Wealth',
        title: 'Digital Mutual Fund Purchase',
        body:
          'A retail client subscribes to a fund inside the app — with suitability, disclosure and audit intact.',
        meta: 'Business rules · Requirements · API · Exceptions · Controls · KPIs',
      },
      {
        to: '/case-studies#ai-wealth-advisor',
        kicker: 'Case 02 · AI in Wealth Management',
        title: 'AI Wealth Advisor',
        body:
          'An AI assistant grounded in approved content, with human review, evaluation and a phased rollout.',
        meta: 'RAG · Human-in-the-loop · Evaluation · Governance',
      },
    ],
  },

  /* Compact value chain — replaces the standalone Wealth Management page. */
  chain: {
    eyebrow: 'Wealth Management Value Chain',
    title: 'Where product knowledge meets the client',
    description:
      'Every product on this site sits inside the same chain. Each step is where a requirement, a rule or a control has to be defined.',
    steps: [
      { label: 'Client Need', detail: 'Objective, horizon, constraints' },
      { label: 'RM / Digital Channel', detail: 'Advised or execution-only' },
      { label: 'KYC · AML · Suitability', detail: 'Eligibility and profile match' },
      { label: 'Product Selection', detail: 'Shelf, target market, disclosure' },
      { label: 'Order', detail: 'Capture, validation, pre-trade checks' },
      { label: 'Execution · Settlement', detail: 'Dealing, allocation, cash' },
      { label: 'Portfolio', detail: 'Position, cost basis, reporting' },
      { label: 'Monitoring · Servicing', detail: 'Review, events, audit trail' },
    ],
    valueKicker: 'Where a BA / PO adds value',
    valuePoints: [
      'Clarify the business requirement behind each step',
      'Define the business rules and their exceptions',
      'Identify dependencies across systems and teams',
      'Translate client needs into a digital journey',
      'Define controls and the evidence they leave behind',
      'Prioritise what ships first, and what is deferred',
    ],
  },
}

/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  positioning:
    'Business Analyst / Product Owner with experience in banking and financial services, with a focus on Wealth Management, digital transformation and AI-enabled products.',
  intro: [
    'I work at the intersection of financial products, banking processes and digital delivery. My interest is in the translation layer: taking a product that exists in a term sheet, a process that exists in a policy document, and turning both into a digital journey that a client can actually complete.',
    'This site is a personal knowledge and portfolio project. It documents how I think about financial products, how I map banking processes end to end, and how I convert them into requirements, workflows, data contracts and product decisions.',
  ],
  /* Skills grouped by the three areas a hiring manager screens for, rather
     than one flat list of ten. */
  skillGroups: [
    {
      title: 'Banking & Product',
      items: [
        'Wealth Management',
        'Investment Products',
        'Digital Banking',
        'Product Lifecycle',
        'Customer Journey',
      ],
    },
    {
      title: 'Business Analysis & Product Ownership',
      items: [
        'Requirements Analysis',
        'User Stories & Acceptance Criteria',
        'Business Rules',
        'Customer Journey Mapping',
        'Prioritisation',
        'Stakeholder Management',
      ],
    },
    {
      title: 'Digital & Technology',
      items: [
        'API / Integration',
        'Data & System Thinking',
        'Digital Product Design',
        'AI / RAG',
      ],
    },
  ],
  skills: [
    'Wealth Management',
    'Investment Products',
    'Business Analysis',
    'Product Ownership',
    'Digital Banking',
    'API / Integration',
    'Agile',
    'AI / RAG',
    'Requirements Analysis',
    'Stakeholder Management',
  ],
  professionalExperience: [
    {
      title: 'Banking & Financial Services — Business Analysis / Product Ownership',
      meta: 'Professional context',
      bullets: [
        'Working with wealth management and investment product processes across advisory, order management and servicing',
        'Writing business and functional requirements for digital banking and investment journeys',
        'Defining business rules, validation logic, exception handling and audit requirements with risk and compliance stakeholders',
        'Coordinating across business, operations, technology and compliance functions in an Agile delivery setup',
      ],
    },
    {
      title: 'Process & Requirements Analysis',
      meta: 'Professional context',
      bullets: [
        'Mapping end-to-end client and operational journeys, including onboarding, suitability, order capture and post-trade servicing',
        'Translating policy and control requirements into system behaviour and testable acceptance criteria',
        'Structuring data and integration requirements between channels, core systems and downstream platforms',
      ],
    },
  ],
  /* Self-directed study and portfolio work are kept as one section, separate
     from professional experience so the distinction stays explicit. */
  learningAndProjects: [
    {
      title: 'Financial Product & AI Knowledge',
      bullets: [
        'Structured study of fixed income mechanics, structured product payoffs, OTC derivative structures and fund mechanics',
        'Studying retrieval-augmented generation, guardrails, human-in-the-loop design and model risk management concepts',
        'Reading product documentation and disclosure frameworks to understand how products are governed',
      ],
    },
    {
      title: 'Wealth Management Product Hub — this site',
      bullets: [
        'A React + TypeScript application modelling a wealth management product knowledge base and digital journeys',
        'Product catalogue, interactive diagrams, journey exploration and case studies with Product Owner analysis',
        'Built as a learning and portfolio artefact; all content is educational and uses illustrative data only',
      ],
    },
    {
      title: 'Concept & Journey Modelling Exercises',
      bullets: [
        'Documenting banking journeys as structured data: stages, business rules, systems, APIs, validation and audit requirements',
        'Modelling product lifecycles and suitability logic as reusable frameworks rather than narrative descriptions',
      ],
    },
  ],
  disclaimer:
    'This site is a personal portfolio and educational project. It is not affiliated with any employer or financial institution, contains no personalised advice, and uses illustrative examples only. Professional experience is described at a level I can substantiate; learning and project work are labelled separately.',
}
