/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Financial Products', to: '/products' },
  { label: 'Product Logic', to: '/product-logic' },
  { label: 'Wealth Management', to: '/wealth-management' },
  { label: 'Digital Wealth', to: '/digital-wealth' },
  { label: 'AI in Wealth Management', to: '/ai-wealth' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
]

export const ctaRoute = { label: 'View My Product Thinking', to: '/case-studies' }

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const productMap = [
  {
    title: 'Investment Products',
    items: ['Equity', 'Fixed Income', 'Mutual Funds', 'ETFs', 'Structured Products', 'OTC Derivatives'],
  },
  {
    title: 'Protection & Wealth Planning',
    items: ['Insurance', 'Retirement', 'Estate Planning'],
  },
  {
    title: 'Banking Services',
    items: ['FX', 'Cash Management', 'Lending'],
  },
]

export const fromProductToExperience = [
  { label: 'Client Need', detail: 'Objective, horizon, constraints' },
  { label: 'Product', detail: 'Instrument that fits the need' },
  { label: 'Risk & Return', detail: 'What is taken, what compensates it' },
  { label: 'Suitability', detail: 'Match to client profile' },
  { label: 'Recommendation', detail: 'Documented rationale' },
  { label: 'Pre-Trade Check', detail: 'Eligibility, limits, documents' },
  { label: 'Order', detail: 'Captured instruction' },
  { label: 'Execution', detail: 'Routed and filled' },
  { label: 'Settlement', detail: 'Cash and securities exchanged' },
  { label: 'Portfolio', detail: 'Position and reporting' },
]

export const layers = [
  {
    index: 'Layer 01',
    title: 'I understand financial products.',
    body:
      'Equity, fixed income, funds, ETFs, structured products, OTC derivatives, insurance and FX — explained through mechanics, risks and client use cases rather than marketing language.',
    to: '/products',
    linkLabel: 'Explore financial products',
  },
  {
    index: 'Layer 02',
    title: 'I understand Wealth Management business processes.',
    body:
      'Client segmentation, KYC and AML, risk profiling, suitability, advisory, portfolio management, order management and post-sale service — mapped end to end.',
    to: '/wealth-management',
    linkLabel: 'View the business map',
  },
  {
    index: 'Layer 03',
    title: 'I translate business and finance into digital products.',
    body:
      'Journeys, business rules, data, APIs, validation, exception handling and audit requirements — turned into product scope, prioritisation and measurable outcomes.',
    to: '/digital-wealth',
    linkLabel: 'See the digital journey',
  },
]

export const home = {
  hero: {
    eyebrow: 'Wealth Management Product Hub',
    title: 'Understanding Wealth Management from Product to Platform',
    subtitle:
      'A practical knowledge hub connecting financial products, client needs, banking processes and digital product design.',
    tagline: 'From Financial Products to Digital Wealth Management',
    primaryCta: 'Explore Financial Products',
    secondaryCta: 'View Product Cases',
  },
  metrics: [
    {
      value: '08',
      label: 'Product families',
      hint: 'From equity and bonds to structured products and OTC derivatives',
    },
    {
      value: '13',
      label: 'Digital journey stages',
      hint: 'Each with rules, data, APIs, validation and audit needs',
    },
    {
      value: '04',
      label: 'Case studies',
      hint: 'Business problem → requirements → integration → metrics',
    },
  ],
  map: {
    eyebrow: 'Wealth Management Product Map',
    title: 'What sits inside a Wealth Management offering',
    description:
      'Wealth management is not a single product. It is a set of product families connected to client needs — investments, protection and banking services — delivered through advisory, discretionary and digital channels.',
    panelTitle: 'Product families and how they connect to client needs',
    footerNote:
      'Every item maps to a product page with mechanics, risks and distribution context.',
    cta: 'Open product explorer',
  },
  flow: {
    eyebrow: 'Process View',
    title: 'From Product to Digital Experience',
    description:
      'The same flow a client experiences in a well-designed digital wealth platform — from the first statement of need to the position appearing in a portfolio.',
    paragraph:
      'A wealth management product is more than a financial instrument. It combines product economics, client needs, business rules, risk controls, data and technology — and the digital experience has to carry all of them without making the client feel the weight.',
    poTitle: 'Where a Product Owner adds value',
    poItems: [
      'Turning each step into testable requirements',
      'Defining rules, validation and exception paths',
      'Deciding what to build now and what to defer',
      'Measuring completion, errors and adoption',
    ],
  },
  layersHeading: {
    eyebrow: 'What this project demonstrates',
    title: 'Three layers of understanding',
    description:
      'Financial product knowledge, banking process knowledge, and the ability to translate both into digital products.',
  },
  poBand: {
    eyebrow: 'Product Owner Lens',
    title: 'Not just what the products are — how they get built',
    description:
      'The artefacts a Product Owner is judged on: decision frameworks, client journey maps, user stories with acceptance criteria, KPIs with guardrails, prioritisation, a risk and compliance register, and the system and API touchpoints behind the journey.',
    cta: 'Open the Product Owner Lens',
    cards: [
      {
        title: 'Decision frameworks',
        body: 'Eligibility, suitability, complexity, build-vs-buy and MVP scope gates — each ending in a concrete artefact.',
      },
      {
        title: 'Journey maps',
        body: 'Client actions, questions, systems, rules, pain points and the backlog each one generates.',
      },
      {
        title: 'Stories & acceptance criteria',
        body: 'Given/When/Then criteria that include control behaviour, not only the happy path.',
      },
      {
        title: 'KPIs & guardrails',
        body: 'Baseline, target and the metric that must not degrade while the primary metric improves.',
      },
    ],
  },
  explore: {
    eyebrow: 'Navigate',
    title: 'Explore the hub',
    description:
      'Each section is written for a different question: what the product is, how the bank runs it, and how it becomes a digital journey.',
  },
  catalogue: {
    kicker: 'Product catalogue',
    title: 'Start with the product, or start with the journey',
    body: (count: number) =>
      `${count} product families are documented with mechanics, risk drivers, client use cases and the bank’s distribution model — filterable by asset class, risk, liquidity, horizon and complexity.`,
    primary: 'Product explorer',
    secondary: 'Digital journey',
  },
}

export const exploreCards = [
  {
    to: '/products',
    kicker: 'Knowledge Base',
    title: 'Financial Products',
    body: 'Eight product families explained by mechanics, risks, client use case and distribution model.',
    meta: 'Equity · Fixed Income · Funds · ETFs · Structured · OTC · Insurance · FX',
  },
  {
    to: '/product-logic',
    kicker: 'Product Thinking',
    title: 'Product Logic',
    body: 'Objective, risk & return, pricing, payoff, liquidity and lifecycle — the six concepts behind every product.',
    meta: 'Includes a reusable product framework',
  },
  {
    to: '/wealth-management',
    kicker: 'Business Map',
    title: 'Wealth Management',
    body: 'Segmentation, KYC/AML, suitability, advisory, portfolio and order management end to end.',
    meta: 'Retail → Affluent → HNW → UHNW',
  },
  {
    to: '/digital-wealth',
    kicker: 'Product Owner View',
    title: 'Digital Wealth',
    body: 'A thirteen-stage journey with business rules, data, APIs, validation, exceptions and audit at each step.',
    meta: 'Click any stage to inspect it',
  },
  {
    to: '/ai-wealth',
    kicker: 'Emerging Practice',
    title: 'AI in Wealth Management',
    body: 'Use cases, a conceptual RAG architecture and the controls that make AI usable in a regulated bank.',
    meta: 'Human-in-the-loop · Explainability · Auditability',
  },
  {
    to: '/case-studies',
    kicker: 'Portfolio Evidence',
    title: 'Case Studies',
    body: 'Four journeys taken from business problem to functional requirements, integration and success metrics.',
    meta: 'With a dedicated Product Owner lens',
  },
  {
    to: '/product-owner',
    kicker: 'How I Work',
    title: 'Product Owner Lens',
    body: 'Decision frameworks, journey maps, user stories with acceptance criteria, KPIs, prioritisation and risk register.',
    meta: 'The deliverables behind this site',
  },
]

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
  selfDirectedLearning: [
    {
      title: 'Financial Product Knowledge',
      bullets: [
        'Structured study of fixed income mechanics, structured product payoffs and OTC derivative structures',
        'Reading product documentation and regulatory disclosure frameworks to understand how products are governed',
        'Building the product explanations and diagrams used on this site as a way of testing my own understanding',
      ],
    },
    {
      title: 'AI, RAG and Product Management Practice',
      bullets: [
        'Studying retrieval-augmented generation, guardrails, human-in-the-loop design and model risk management concepts',
        'Applying product management frameworks — problem framing, scope, prioritisation and success metrics — to wealth management cases',
        'Practising prompt and knowledge-base design patterns for regulated environments',
      ],
    },
  ],
  personalProjects: [
    {
      title: 'Wealth Management Product Hub — this site',
      bullets: [
        'A React + TypeScript application modelling a wealth management product knowledge base and digital journeys',
        'Product catalogue with filtering, interactive diagrams, journey exploration and case studies with Product Owner analysis',
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
