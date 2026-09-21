/* ------------------------------------------------------------------ */
/* Page-level copy (headings, hero text, section descriptions)         */
/* ------------------------------------------------------------------ */

export const pages = {
  products: {
    hero: {
      eyebrow: 'Financial Products',
      title: 'Product Explorer',
      subtitle:
        'Eight product families documented through the questions that matter in a bank: what the product is, why it exists, how the investor makes money, what can go wrong, who it suits and how it is distributed.',
    },
    browse: {
      eyebrow: 'Product catalogue',
      title: 'All product families',
      description:
        'Eight product families documented through the questions that matter in a bank — what the product is, why it exists, how the investor makes money, what can go wrong, who it suits and how it is distributed.',
    },
    glance: {
      eyebrow: 'At a glance',
      title: 'Product comparison',
      description:
        'The same catalogue sorted by the classification dimensions used in suitability and product governance.',
    },
    caption:
      'Indicative classification for educational comparison. Actual classification depends on the specific instrument, jurisdiction and client categorisation.',
  },

  productLogic: {
    hero: {
      eyebrow: 'Product Logic',
      title: 'How Financial Products Work',
      subtitle:
        'Six concepts explain almost every product decision in a bank: the client objective, the risk being taken, the price, the payoff, the ability to exit, and the lifecycle that governs the product from idea to retirement.',
    },
    concepts: {
      eyebrow: 'Six core concepts',
      title: 'The logic layer underneath every product',
      description:
        'Products differ in mechanics, but they are all assessed through the same lens. Understanding the lens is what makes a product conversation transferable.',
    },
    lifecycle: {
      eyebrow: 'Product Lifecycle',
      title: 'From idea to retirement',
      description:
        'A financial product is a governed object. It is designed against a target market, approved through risk and compliance, distributed through defined channels, monitored against client outcomes — and eventually retired with existing holders still to serve.',
      note: 'The artefact each stage must produce, and the decision that stage is asking for, are listed on the Product Owner Lens page.',
    },
    bridge: {
      eyebrow: 'From Concept to Requirement',
      title: 'How each concept becomes a buildable, testable artefact',
      description:
        'Concept knowledge is only useful to a delivery team once it is translated into a requirement, a system behaviour and an evidence artefact.',
      columns: ['Concept', 'Requirement artefact', 'System behaviour', 'Evidence / control'],
      caption:
        'This table is the bridge between the knowledge sections and the delivery artefacts on the Product Owner Lens page.',
      buttons: { toolkit: 'Open the Product Owner Lens', journey: 'See the digital journey' },
    },
    framework: {
      eyebrow: 'Reusable framework',
      title: 'Questions every product must answer',
      description:
        'A single framework used across the product pages and case studies on this site — useful both for assessing a product and for writing the requirements that distribute it.',
    },
    buttons: {
      structured: 'See it applied: Structured Products',
      cases: 'See it applied: Case Studies',
    },
  },

  wealth: {
    hero: {
      eyebrow: 'Wealth Management',
      title: 'The Wealth Management Ecosystem',
      subtitle:
        'How a bank turns client needs into solutions: the people, the products, the processes and the controls that sit between a client objective and a position in a portfolio.',
    },
    ecosystem: {
      eyebrow: 'Ecosystem',
      title: 'Client → Advisor → Solutions → Portfolio',
      description:
        'Wealth management is a system, not a product. Each layer changes what the next layer is allowed to do.',
      solutionsKicker: 'Solution families',
      solutionsTitle: 'What the advisor can draw on',
    },
    segmentation: {
      eyebrow: 'Client Segmentation',
      title: 'Retail · Affluent · HNW · UHNW',
      description:
        'The same bank serves very different clients. Segmentation determines service model, advisory model, product complexity and the role digital plays.',
      caption:
        'Segmentation thresholds and naming conventions vary between institutions; the structural differences are consistent.',
      labels: [
        'Client needs',
        'Service model',
        'Advisory model',
        'Product complexity',
        'Digital experience',
      ],
      segmentColumn: 'Segment',
    },
    personas: {
      eyebrow: 'Client Needs',
      title: 'From segments to personas',
      description:
        'Segments are a commercial construct; personas are what make product decisions concrete. These three drive the journeys, rules and metrics on this site.',
      whyTitle: 'Why personas matter here',
    },
    processes: {
      eyebrow: 'Core Processes',
      title: 'KYC · AML · Suitability · Advisory · Portfolio · Order · Servicing',
      description:
        'Eight processes carry almost all of the regulatory and operational weight in wealth management — and each one is where business analysis creates value.',
      noteLabel: 'Where a BA / PO adds value',
    },
    valueChain: {
      eyebrow: 'Value Chain',
      title: 'The end-to-end relationship, not just the transaction',
      description:
        'Onboarding and review are what make the middle of the chain possible. Digital products often fail because they optimise the transaction and neglect everything around it.',
    },
    buttons: {
      digital: 'Continue to the digital journey',
      digitalHint: 'Each stage in detail',
      poHint: 'Journey maps & artefacts',
      casesHint: 'Applied end to end',
      aiHint: 'Where AI assists',
    },
  },

  digital: {
    hero: {
      eyebrow: 'Digital Wealth',
      title: 'Digital Wealth Management Journey',
      subtitle:
        'Thirteen stages from opening the app to seeing a position in a portfolio — with the business objective, rules, data, systems, APIs, validation, exception handling and audit requirement defined at each one.',
    },
    intro: {
      eyebrow: 'Product Owner View',
      title: 'A journey is a chain of decisions, not a set of screens',
      description:
        'Each stage below can be read as a requirement block: what the bank is trying to achieve, what must be true for the stage to complete, what data it consumes, and what evidence it must leave behind.',
    },
    interactive: {
      eyebrow: 'Interactive',
      title: 'Click any stage to inspect it',
      description:
        'Every stage is decomposed into the eight dimensions used when specifying a digital wealth journey.',
    },
    cjm: {
      eyebrow: 'Client Journey Map',
      title: 'The same journey, mapped from the client’s point of view',
      description:
        'Stages are useful for systems; journey maps are useful for decisions. This is the digital fund purchase journey with the client’s questions, the systems answering them, the rules applying, the pain points and the backlog each one creates.',
      note:
        'Pain points and opportunities are read as a pair: every item in the increment plan traces back to one cell in the bottom two lanes.',
    },
    systems: {
      eyebrow: 'System & API Touchpoints',
      title: 'Which system owns each stage',
      description:
        'A journey is only as good as the interfaces behind it. This is the touchpoint map I would hand to an architect on day one.',
      columns: ['Journey stage', 'Primary system', 'API', 'Key data', 'Design decision'],
    },
    principles: {
      eyebrow: 'Design Principles',
      title: 'What makes a digital wealth journey work',
      description:
        'Four principles that recur across every stage of the journey above — and that separate a usable platform from a compliant-looking one.',
      items: [
        {
          title: 'Show the money',
          body: 'Rate, margin, fees and total amount are displayed before commitment. Transparency is a product feature, not a legal footnote.',
        },
        {
          title: 'Status is part of the product',
          body: 'Clients tolerate waiting; they do not tolerate not knowing. Order and settlement status should be visible at every step.',
        },
        {
          title: 'Exceptions are designed, not discovered',
          body: 'Each stage needs a defined failure path with an owner, an SLA and a client message written in advance.',
        },
        {
          title: 'Explain before asking',
          body: 'A client who understands why a question is asked answers it accurately. Every data request in the journey should carry its reason.',
        },
      ],
    },
    metrics: {
      kicker: 'How to measure the journey',
      title: 'Metrics a Product Owner should own',
      poNote:
        'Baselines, targets and the guardrails that must not degrade are defined on the Product Owner Lens page.',
      items: [
        { metric: 'Completion rate', note: 'Started journeys that reach a completed outcome' },
        { metric: 'Time to complete', note: 'Median duration from entry to confirmation' },
        { metric: 'Error rate', note: 'Submissions rejected by validation or downstream checks' },
        { metric: 'Drop-off by stage', note: 'Where clients abandon, and why' },
        { metric: 'Exception volume', note: 'Operational exceptions raised per thousand orders' },
        { metric: 'Digital adoption', note: 'Clients completing the journey without assistance' },
        { metric: 'Straight-through rate', note: 'Orders processed with no manual intervention' },
        { metric: 'Audit completeness', note: 'Journeys with a fully reconstructable evidence trail' },
      ],
    },
    buttons: {
      po: 'See the Product Owner artefacts',
      cases: 'See them applied in case studies',
      casesHint: 'Journeys with full requirements',
      aiHint: 'Assistance inside the journey',
      logicHint: 'Rules behind each stage',
      poHint: 'Stories, KPIs, risk register',
    },
  },

  ai: {
    hero: {
      eyebrow: 'Emerging Practice',
      title: 'AI in Wealth Management',
      subtitle:
        'Where AI genuinely helps in a bank: retrieving knowledge, summarising research, supporting advisors and automating operational work — with grounding, human review and auditability designed in from the start.',
    },
    principleKicker: 'Governing principle',
    principle:
      'AI assists decision-making; it does not replace regulated financial advice or human oversight.',
    architecture: {
      eyebrow: 'Conceptual Architecture',
      title: 'From question to reviewed answer',
      description:
        'A layered view of an AI assistant in a bank: where the request enters, what grounds it, which data it may use, and which controls sit before delivery.',
      note:
        'The architecture is deliberately boring: identity and entitlement first, guardrails before generation, retrieval over approved content only, and a human in the loop before anything reaches a client.',
    },
    usecases: {
      eyebrow: 'Use Cases',
      title: 'Eight places AI adds value in wealth management',
      description:
        'Each use case is described through the lens a Product Owner needs: the problem, the approach, the value and the controls that make it acceptable in a regulated environment.',
      labels: { approach: 'Approach', value: 'Value', controls: 'Controls' },
    },
    delivery: {
      eyebrow: 'Product Owner View',
      title: 'How I would actually ship this',
      description:
        'AI features fail in banks for boring reasons: unclear sourcing decisions, no evaluation harness, and rollout phases that skip the human. This is the delivery plan.',
      sourcingCaption: 'Sourcing is a control decision as much as a cost decision.',
      buy: 'Buy',
      build: 'Build',
      poViewLabel: 'Product Owner view',
      decisionLabel: 'Decision',
      phases: 'Phased rollout with exit criteria',
      phaseColumns: ['Phase', 'Scope', 'Control', 'Exit criteria'],
      evaluationColumns: ['Dimension', 'Method', 'Threshold'],
      evaluation: 'Evaluation harness — what “good enough” means',
      evaluationCaption:
        'The evaluation set is the specification: it defines what correct means in our context.',
      kpisLabel: 'KPIs',
      buttons: { toolkit: 'See the full Product Owner toolkit', caseStudy: 'AI case study with user stories' },
    },
    concepts: {
      eyebrow: 'Foundations',
      title: 'The vocabulary behind responsible AI in banking',
      description:
        'Seven concepts that determine whether an AI feature is deployable in a regulated environment.',
      buttons: { caseStudy: 'Read the AI case study' },
      badge: 'Educational · conceptual architecture',
    },
  },

  cases: {
    hero: {
      eyebrow: 'Case Studies',
      title: 'From Business Problem to Digital Product',
      subtitle:
        'Four wealth management journeys worked end to end: the business problem, the client need, the product, the rules, the journey, the requirements, the data, the integration, the controls and the metrics — then the same case viewed through a Product Owner lens.',
    },
    overview: {
      eyebrow: 'Overview',
      title: 'Four cases, one method',
      description:
        'Each case follows the same structure so that the thinking is comparable — and so a reader can see the method rather than only the content.',
    },
    note: {
      kicker: 'Note on method',
      title: 'These are illustrative cases, written to show the method',
      body:
        'The journeys, rules, APIs and metrics are representative examples built for this portfolio project. They are not descriptions of systems belonging to any specific institution, and the figures used are illustrative rather than measured results.',
    },
  },

  po: {
    hero: {
      eyebrow: 'Product Owner Lens',
      title: 'How I turn financial products into digital banking products',
      subtitle:
        'The delivery artefacts behind the journeys on this site: decision frameworks, client journey maps, user stories with acceptance criteria, KPIs with guardrails, prioritisation, a risk and compliance register, and the system and API touchpoints that make it real.',
      badges: [
        'Decision frameworks',
        'Journey maps',
        'User stories & AC',
        'KPIs & guardrails',
        'Prioritisation',
        'Risk register',
        'API touchpoints',
      ],
    },
    s1: {
      eyebrow: '01 · Decision Frameworks',
      title: 'Decisions I make before writing a single requirement',
      description:
        'Frameworks are only useful if they force an answer. Each one below ends in a concrete artefact — not in a discussion.',
    },
    s2: {
      eyebrow: '02 · Client Journey Maps',
      title: 'The same journey from the client’s side and the bank’s side',
      description:
        'A journey map is where product decisions become visible: what the client does, what they wonder, which system answers, which rule applies, where it hurts — and what I would build next.',
      note:
        'Read the “Pain points” and “Product opportunities” lanes together: every backlog item on this site traces back to one of those cells.',
    },
    s3: {
      eyebrow: '03 · User Stories & Acceptance Criteria',
      title: 'Requirements written so that compliance, testing and development read the same thing',
      description:
        'Three epics taken from the case studies. Acceptance criteria are written as Given/When/Then and include the control behaviour — not only the happy path.',
    },
    s4: {
      eyebrow: '04 · KPIs',
      title: 'Targets without guardrails are how products break',
      note:
        'Figures are illustrative targets for this portfolio project, not measured results from any institution.',
    },
    s5: {
      eyebrow: '05 · Prioritisation',
      title: 'A worked prioritisation example',
      columns: ['Backlog item', 'Reach', 'Impact', 'Confidence', 'Effort', 'RICE', 'Decision'],
      caption:
        'Compliance-driven items are not scored — they are preconditions. The score is used to argue about everything else.',
      mos: [
        {
          key: 'Must',
          body: 'Regulatory preconditions and the core end-to-end path. Never sliced away.',
        },
        {
          key: 'Should',
          body: 'Decision-quality and retention features. Land after the core journey is stable.',
        },
        {
          key: 'Could',
          body: 'Analytics and enrichment. Deferred until adoption data justifies them.',
        },
      ],
    },
    s6: {
      eyebrow: '06 · Risk & Compliance',
      title: 'Risk register: risk → control → requirement → evidence',
      description:
        'Every control on this site is written as a testable requirement with an evidence artefact, because a control without evidence is an assumption.',
    },
    s7: {
      eyebrow: '07 · System & API Touchpoints',
      title: 'Where the journey meets the bank’s systems',
      description:
        'The journey stage, the system that owns it, the interface it exposes, the data it moves and the design decision that matters.',
      columns: ['Journey stage', 'Primary system', 'API', 'Key data', 'Design decision'],
    },
    s8: {
      eyebrow: '08 · Release Plan',
      title: 'Increments, outcomes and exit criteria',
      description:
        'Sequenced so that controls land before transactions, and transactions land before analytics.',
      columns: ['Increment', 'Scope', 'Outcome', 'Dependencies', 'Exit criteria'],
      hygieneKicker: 'Delivery hygiene',
    },
    s9: {
      eyebrow: '09 · Lifecycle & Stakeholders',
      title: 'What a Product Owner produces at each lifecycle stage',
      description:
        'The lifecycle view from the product logic page, translated into the artefacts and decisions I own.',
      lifecycleColumns: ['Lifecycle stage', 'Product Owner artefact', 'Decision to make'],
      stakeholderColumns: ['Role', 'Accountable for', 'Consults', 'Artefact'],
      stakeholderCaption:
        'A stakeholder map is not an org chart — it exists so that decision rights are explicit before a disagreement happens.',
      calloutTitle: 'How to read this site as a hiring manager',
      calloutBody:
        'Financial product pages show what I know. This page, the digital journey and the case studies show how I work: problem framing, rules, journeys, requirements, integration, controls and measurement.',
      buttons: {
        cases: 'See the artefacts applied to cases',
        digital: 'Digital wealth journey',
      },
    },
  },

  about: {
    hero: { eyebrow: 'About', title: 'Business Analyst / Product Owner in Banking & Wealth Management' },
    profile: { eyebrow: 'Profile', title: 'Working in the translation layer' },
    skillsLabel: 'Skills & Focus Areas',
    groups: {
      experience: {
        eyebrow: 'Professional Experience',
        title: 'What I have done in a professional context',
        description:
          'Described at a level I can substantiate in an interview: the type of work, the type of problems and the type of stakeholders — without claiming seniority or scope I do not have.',
      },
      learning: {
        eyebrow: 'Self-directed Learning',
        title: 'What I have taught myself',
        description:
          'Topics I studied independently to deepen my product and technology understanding. Listed separately from professional experience so the distinction is explicit.',
      },
      projects: {
        eyebrow: 'Personal Projects',
        title: 'What I have built',
        description:
          'Portfolio and learning artefacts built outside of work. This site is the main one; it is a knowledge project as much as a portfolio piece.',
      },
    },
    sidebar: {
      labels: { focus: 'Focus', roleLens: 'Role lens', method: 'Method', delivery: 'Delivery' },
      values: {
        focus: 'Wealth Management · Digital Banking · AI',
        roleLens: 'Business Analyst / Product Owner',
        method: 'Journey → rules → data → API → metrics',
        delivery: 'Agile, cross-functional teams',
      },
    },
    transparencyTitle: 'Transparency note',
  },
}
