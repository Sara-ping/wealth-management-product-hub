import type { Product } from './types'

/* ================================================================== */
/* STRUCTURED PRODUCTS                                                 */
/* ================================================================== */

export const structuredProducts: Product = {
  slug: 'structured-products',
  name: 'Structured Products',
  tagline: 'A packaged exposure: underlying asset, derivative and payoff rules combined.',
  category: 'Investment Product',
  assetClass: 'Structured',
  riskLevel: 'High',
  liquidity: 'Low',
  horizon: 'Medium',
  complexity: 'Complex',
  what:
    'A structured product packages an underlying asset with a derivative component and a defined payoff structure, so the investor receives a pre-agreed economic outcome under specified conditions.',
  why:
    'It allows a specific market view or risk-return profile to be expressed in a single instrument — for example income in a flat market, or partial downside protection with capped upside.',
  howReturn:
    'According to the payoff formula: coupons, participation in the underlying, barrier outcomes and redemption terms all determine what the investor receives at maturity or early redemption.',
  risks: [
    'Market risk of the underlying asset',
    'Capital loss if protection conditions are not met',
    'Issuer / counterparty credit risk',
    'Liquidity risk — secondary exit may be limited or priced wide',
    'Complexity risk — payoff conditions can be misunderstood',
  ],
  useCase:
    'Yield enhancement in range-bound markets, defined-outcome exposure, and diversification of return sources — for clients who understand the payoff conditions.',
  clientTypes: [
    'Clients with experience of structured instruments',
    'HNW clients using defined-outcome allocations',
    'Clients whose risk profile permits conditional capital exposure',
  ],
  regulations: [
    'Manufacturing and product governance obligations',
    'Complex product assessment and target market definition',
    'KID / PRIIPs cost and scenario disclosure where applicable',
    'Enhanced suitability assessment and cooling-off considerations',
  ],
  related: [
    { label: 'OTC Derivatives', to: '/products/otc-derivatives' },
    { label: 'Fixed Income', to: '/products/fixed-income' },
    { label: 'Payoff & Pricing', to: '/product-logic' },
    { label: 'Structured Subscription Case', to: '/case-studies#structured-product-subscription' },
  ],
  blocks: [
    {
      kind: 'prose',
      paragraphs: [
        'A structured product is best understood as an engineered outcome rather than an asset. The bank combines a funding component (usually a bond) with a derivative that delivers the payoff the client is looking for.',
        'This is why structured products sit at the intersection of product design, risk management, legal documentation and distribution governance — and why they are the clearest demonstration of product thinking in wealth management.',
      ],
    },
    {
      kind: 'stack',
      title: 'Anatomy of a structured product',
      inputs: [
        { title: 'Underlying Asset', detail: 'Equity index, single stock, rate, FX or basket.' },
        { title: 'Derivative', detail: 'Option or swap that shapes the payoff.' },
        { title: 'Payoff Structure', detail: 'Barriers, participation, caps and coupon conditions.' },
        { title: 'Investor Objective', detail: 'Income, growth, protection or defined exposure.' },
      ],
      output: 'Structured Product',
      outputLabel: 'Engineered outcome',
    },
    {
      kind: 'accordion',
      title: 'Common product families',
      items: [
        {
          title: 'Equity-linked Notes (ELN)',
          subtitle: 'Return linked to the performance of an equity or index',
          tag: 'Growth / Income',
          bullets: [
            'Payoff is a function of the underlying performance over an observation period',
            'Can include participation rate, cap, or buffer levels',
            'Capital treatment depends on whether protection is built into the structure',
          ],
        },
        {
          title: 'Principal Protected Products',
          subtitle: 'Designed to return a defined portion of capital at maturity',
          tag: 'Protection',
          bullets: [
            'Most of the capital funds a zero-coupon style component; the remainder buys upside participation',
            'Protection is typically conditional on holding to maturity and on issuer creditworthiness',
            'The trade-off is lower participation and opportunity cost in strongly rising markets',
          ],
        },
        {
          title: 'Barrier Products',
          subtitle: 'Payoff depends on whether a barrier level is touched',
          tag: 'Conditional',
          bullets: [
            'Knock-in activates a risk; knock-out deactivates a benefit',
            'Barrier observation can be continuous or on defined dates',
            'Small documentation differences change the economics materially — a key BA review point',
          ],
        },
        {
          title: 'Autocallables',
          subtitle: 'Redeem early if predefined conditions are met',
          tag: 'Income',
          bullets: [
            'On each observation date, if the underlying is at or above the call level, the product redeems with coupon',
            'Investors face reinvestment risk when early redemption occurs',
            'Downside protection depends on the barrier and whether a knock-in event occurred',
          ],
        },
      ],
    },
    {
      kind: 'concepts',
      title: 'Payoff vocabulary',
      columns: 2,
      items: [
        {
          term: 'Strike',
          definition: 'The reference level of the underlying used to calculate payoff — set at inception.',
          tag: 'Level',
        },
        {
          term: 'Barrier',
          definition:
            'A predefined level that, when touched, changes the payoff: it can activate risk (knock-in) or end a benefit (knock-out).',
          tag: 'Level',
        },
        {
          term: 'Coupon',
          definition: 'A scheduled payment that may be fixed, conditional on observation, or memory-linked.',
          tag: 'Cash flow',
        },
        {
          term: 'Knock-in',
          definition:
            'An event that activates a predefined risk — for example, physical delivery of a fallen underlying instead of cash repayment.',
          tag: 'Event',
        },
        {
          term: 'Knock-out',
          definition: 'An event that extinguishes a benefit — for example, ending a coupon or a protection feature.',
          tag: 'Event',
        },
        {
          term: 'Participation',
          definition: 'The proportion of underlying upside passed to the investor. Below 100% when upside is capped or funded.',
          tag: 'Rate',
        },
        {
          term: 'Maturity',
          definition: 'The scheduled end date at which the final redemption value is determined.',
          tag: 'Term',
        },
        {
          term: 'Early Redemption',
          definition: 'Redemption before scheduled maturity, triggered by an autocall condition, issuer call or investor request (where allowed).',
          tag: 'Term',
        },
      ],
    },
    {
      kind: 'payoff',
      title: 'Illustrative payoff diagrams',
      charts: [
        {
          title: 'Capital-protected participation note (illustrative)',
          subtitle:
            'Return floors at zero while participation in upside is partial. Protection is conditional on holding to maturity and on issuer credit.',
          series: [
            {
              name: 'Note payoff (60% participation, protected)',
              points: [
                [-40, 0],
                [-20, 0],
                [0, 0],
                [20, 12],
                [40, 24],
              ],
            },
            {
              name: 'Direct investment in underlying',
              points: [
                [-40, -40],
                [0, 0],
                [40, 40],
              ],
              color: '#c9a877',
              dashed: true,
            },
          ],
          annotations: [
            { x: 0, y: 0, text: 'Protection floor' },
          ],
          note: 'Diagram illustrates the shape of the payoff only. Levels, participation and protection are examples chosen for explanation.',
        },
        {
          title: 'Barrier product with knock-in (illustrative)',
          subtitle:
            'If the barrier at −30% is never touched, the investor keeps capital plus coupon. If it is touched, downside is passed through.',
          series: [
            {
              name: 'No knock-in (capital returned + 8% coupon)',
              points: [
                [-50, 8],
                [-30, 8],
                [0, 8],
                [40, 8],
              ],
              color: '#0f6e6b',
            },
            {
              name: 'Knock-in occurred (coupon + underlying performance)',
              points: [
                [-50, -42],
                [-30, -22],
                [-10, -2],
                [0, 8],
                [40, 8],
              ],
              color: '#9d3b3b',
            },
          ],
          annotations: [{ x: -30, y: 8, text: 'Barrier −30%' }],
          note: 'Whether a barrier event occurred is determined by the observation convention stated in the term sheet.',
        },
        {
          title: 'Autocallable at first observation date (illustrative)',
          subtitle:
            'At or above the call level the product redeems early with coupon; below it, the investor remains exposed to downside.',
          series: [
            {
              name: 'Payoff at observation (6% coupon if called)',
              points: [
                [-60, -60],
                [-40, -40],
                [-20, -20],
                [0, 0],
                [0, 6],
                [20, 6],
                [40, 6],
              ],
            },
          ],
          annotations: [
            { x: 0, y: 6, text: 'Autocall level 100%' },
          ],
          note: 'Real autocallables are path-dependent: several observation dates, memory coupons and a separate knock-in barrier for downside.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warning',
      title: 'Educational purpose only',
      body:
        'All diagrams and examples on this page are simplified, educational illustrations. They are not investment recommendations, do not represent any actual product offered by any bank, and do not describe a view on any underlying asset.',
    },
    {
      kind: 'perspective',
      title: 'Wealth Management Perspective',
      items: [
        {
          question: 'Who typically invests?',
          answer:
            'Clients with documented experience of structured instruments and a risk profile that permits conditional capital exposure. Distribution is normally restricted and subject to enhanced suitability assessment.',
        },
        {
          question: 'What client objectives does it support?',
          answer:
            'Yield enhancement in flat or moderately rising markets, defined-outcome exposure, partial downside buffers and diversification of return sources.',
        },
        {
          question: 'What are the major risks?',
          answer:
            'Conditional capital loss, issuer credit risk, limited secondary liquidity, reinvestment risk on early redemption, and complexity risk — the payoff conditions are frequently misunderstood.',
        },
        {
          question: 'How does a bank distribute the product?',
          answer:
            'Through a governed shelf: product governance defines the target market, the investment committee approves the shelf, RMs distribute with documented suitability, and subscriptions run through defined offer periods with allocation rules.',
        },
      ],
    },
  ],
}

/* ================================================================== */
/* OTC DERIVATIVES                                                     */
/* ================================================================== */

export const otcDerivatives: Product = {
  slug: 'otc-derivatives',
  name: 'OTC Derivatives',
  tagline: 'Bilaterally negotiated contracts used to transfer or reshape financial risk.',
  category: 'Risk Management',
  assetClass: 'Derivatives',
  riskLevel: 'Very High',
  liquidity: 'Low',
  horizon: 'Medium',
  complexity: 'Highly Complex',
  what:
    'An over-the-counter derivative is a private contract between two parties whose value derives from an underlying rate, price, currency or index, with terms negotiated bilaterally.',
  why:
    'Corporates, institutions and wealthy clients need to manage exposures that standardised exchange products cannot match precisely — specific amounts, dates, currencies or cash-flow profiles.',
  howReturn:
    'Derivatives are not investments for return; they create value by changing a risk profile. The economic result is the difference between the contracted terms and prevailing market terms, net of collateral and funding costs.',
  risks: [
    'Counterparty credit risk — the other side may default',
    'Market risk — the underlying moves against the position',
    'Liquidity risk — unwinding may be costly or impossible at fair value',
    'Operational and documentation risk — confirmations, valuations, collateral',
    'Model and valuation risk for exotic structures',
  ],
  useCase:
    'Hedging FX receipts and payments, fixing borrowing costs, hedging equity exposure, and expressing defined views with limited upfront capital.',
  clientTypes: [
    'Corporate and institutional clients with real exposures',
    'HNW and UHNW clients with concentrated or cross-currency positions',
    'Professional clients within treasury and hedging mandates',
  ],
  regulations: [
    'ISDA documentation and collateral (CSA) frameworks',
    'Mandatory clearing and reporting for standardised OTC classes',
    'Client categorisation — retail access is heavily restricted',
    'Margin, valuation and counterparty risk governance',
  ],
  related: [
    { label: 'Structured Products', to: '/products/structured-products' },
    { label: 'Foreign Exchange', to: '/products/fx' },
    { label: 'Risk & Return', to: '/product-logic' },
    { label: 'Treasury & Lending', to: '/wealth-management' },
  ],
  blocks: [
    {
      kind: 'prose',
      paragraphs: [
        'OTC derivatives are the toolkit behind risk transfer. Where an exchange-traded product offers standardisation, an OTC contract offers precision: the notional, the dates and the payoff can be shaped around a real exposure.',
        'That precision has a price. OTC contracts carry counterparty risk, require documentation and collateral, and demand valuation discipline — which is why they are governed much more tightly than listed products.',
      ],
    },
    {
      kind: 'concepts',
      title: 'Building blocks',
      items: [
        {
          term: 'Forward',
          definition:
            'An obligation to buy or sell an asset or currency at a price agreed today on a future date. Linear payoff; no upfront premium.',
          tag: 'Linear',
        },
        {
          term: 'Option',
          definition:
            'A right, not an obligation, to transact at agreed terms. The buyer pays a premium for asymmetry: defined maximum loss, open upside or protection.',
          tag: 'Non-linear',
        },
        {
          term: 'Swap',
          definition:
            'An agreement to exchange cash-flow streams — for example fixed against floating interest, or interest and principal in one currency against another.',
          tag: 'Cash flow',
        },
        {
          term: 'Exotic Derivatives',
          definition:
            'Structures with path-dependent or conditional features (barriers, range accruals, digitals). Pricing and risk management require models and careful governance.',
          tag: 'Complex',
        },
      ],
    },
    {
      kind: 'table',
      title: 'OTC vs exchange-traded',
      columns: ['Dimension', 'OTC', 'Exchange-traded'],
      rows: [
        [
          'Trading mechanism',
          'Bilateral negotiation, usually dealer-to-client with quotes and confirmations',
          'Order book or auction on a regulated venue, matched centrally',
        ],
        [
          'Customization',
          'High — notional, dates, currencies and payoff can be tailored',
          'Low — standardised contract specifications',
        ],
        [
          'Counterparty Risk',
          'Present and managed through documentation, collateral and limits',
          'Largely mitigated by central counterparty clearing and margining',
        ],
        [
          'Liquidity',
          'Variable; depends on dealer appetite, tenor and structure',
          'Generally higher in standard contracts; visible order book',
        ],
        [
          'Transparency',
          'Prices are private; valuations depend on models and dealer marks',
          'Prices and volumes are published; independent marks available',
        ],
        [
          'Clearing',
          'Standardised classes may be mandatorily cleared; others remain bilateral',
          'Cleared by a central counterparty, with daily margin',
        ],
      ],
      caption:
        'The comparison is a spectrum, not a binary. Many markets now sit in between: OTC contracts that are standardised enough to be cleared.',
    },
    {
      kind: 'chain',
      title: 'From client problem to risk management objective',
      items: [
        {
          label: 'Client Problem',
          title: 'Exporter will receive USD in 6 months and pays costs in EUR',
          body:
            'A European manufacturer has a contracted USD receivable. The commercial margin is known, but the EUR value of the receipt is not.',
        },
        {
          label: 'Financial Exposure',
          title: 'EUR/USD foreign exchange risk on a known future cash flow',
          body:
            'If USD weakens against EUR before receipt, the company’s margin shrinks. The exposure is a defined amount on a defined date.',
        },
        {
          label: 'Derivative',
          title: 'FX Forward — sell USD, buy EUR at a forward rate',
          body:
            'The bank quotes a forward rate for the exact amount and date. The company locks the EUR proceeds, retaining no FX upside or downside on the hedged amount.',
        },
        {
          label: 'Risk Management Objective',
          title: 'Protect budgeted margin and stabilise cash-flow forecasting',
          body:
            'The objective is not profit but predictability: the treasury policy defines hedge ratio, tenor and counterparty limits.',
        },
      ],
    },
    {
      kind: 'accordion',
      title: 'Representative examples',
      items: [
        {
          title: 'FX Forward',
          subtitle: 'Lock today the rate for a future currency exchange',
          tag: 'FX',
          bullets: [
            'Client problem: known future foreign-currency receipt or payment',
            'Exposure: currency risk on a defined amount and date',
            'Derivative: forward contract at an agreed rate',
            'Objective: cash-flow certainty and margin protection',
          ],
        },
        {
          title: 'Interest Rate Swap',
          subtitle: 'Exchange floating interest payments for fixed payments',
          tag: 'Rates',
          bullets: [
            'Client problem: floating-rate loan exposes the budget to rising rates',
            'Exposure: interest cost variability over the life of the loan',
            'Derivative: pay-fixed, receive-floating swap matched to the loan',
            'Objective: convert variable cost into a predictable fixed cost',
          ],
        },
        {
          title: 'FX Option',
          subtitle: 'Protection against adverse moves while keeping upside',
          tag: 'FX',
          bullets: [
            'Client problem: uncertain or contingent foreign-currency exposure, such as a tender',
            'Exposure: asymmetric — loss if the currency moves adversely, no obligation if the deal is lost',
            'Derivative: option with a strike, paying an upfront premium',
            'Objective: cap the worst case while retaining favourable movement',
          ],
        },
        {
          title: 'Cross Currency Swap',
          subtitle: 'Exchange interest and principal between two currencies',
          tag: 'Rates + FX',
          bullets: [
            'Client problem: funding raised in one currency but revenue earned in another',
            'Exposure: combined interest rate and currency mismatch over many years',
            'Derivative: swap exchanging coupons and principal at agreed rates',
            'Objective: align debt service with the currency of cash generation',
          ],
        },
        {
          title: 'Equity Derivatives',
          subtitle: 'Manage risk on concentrated or strategic equity positions',
          tag: 'Equity',
          bullets: [
            'Client problem: concentrated single-stock position that cannot be sold yet',
            'Exposure: price risk on a position with restrictions or tax consequences',
            'Derivative: options, collars or forwards on the same underlying',
            'Objective: define a floor, monetise exposure, or stage a disposal over time',
          ],
        },
      ],
    },
    {
      kind: 'perspective',
      title: 'Wealth Management Perspective',
      items: [
        {
          question: 'Who typically uses them?',
          answer:
            'Corporate treasuries, institutional clients and professional or UHNW clients with real, identifiable exposures. Access for retail clients is restricted or prohibited in most regimes.',
        },
        {
          question: 'What objectives do they support?',
          answer:
            'Hedging, cash-flow stability, cost fixing, structured exposure and — for sophisticated users — expressing defined market views with limited capital outlay.',
        },
        {
          question: 'What are the major risks?',
          answer:
            'Counterparty default, mark-to-market losses, collateral calls, valuation disputes, documentation gaps and — for exotics — model risk.',
        },
        {
          question: 'How does a bank distribute them?',
          answer:
            'Through specialist coverage: treasury and markets teams document the facility, credit sets limits, legal puts ISDA/CSA in place, and operations handles confirmations, collateral and lifecycle events.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warning',
      title: 'Educational purpose only',
      body:
        'Derivatives can create losses greater than the amount invested in some structures. Examples here describe mechanics and business logic only — they are not recommendations and not offers.',
    },
  ],
}

/* ================================================================== */
/* INSURANCE                                                           */
/* ================================================================== */

export const insurance: Product = {
  slug: 'insurance',
  name: 'Insurance & Protection',
  tagline: 'Transferring personal and financial risk as part of a wealth plan.',
  category: 'Protection & Planning',
  assetClass: 'Insurance',
  riskLevel: 'Low',
  liquidity: 'Low',
  horizon: 'Long',
  complexity: 'Moderate',
  what:
    'An insurance policy transfers a defined risk — death, illness, disability or longevity — from the individual to the insurer in exchange for premiums.',
  why:
    'A wealth plan can be destroyed by a single health or mortality event. Insurance converts an uncertain, potentially catastrophic loss into a known, manageable cost.',
  howReturn:
    'For protection products, the return is the benefit paid on an insured event. For savings and investment-linked policies, value accumulates through credited interest, bonuses or unit performance.',
  risks: [
    'Coverage risk — the policy may not cover the event that occurs',
    'Inflation risk — a fixed benefit may lose real value over decades',
    'Surrender and liquidity risk — early exit can be costly',
    'Investment risk for investment-linked policies',
    'Insurer credit risk over long policy terms',
  ],
  useCase:
    'Family protection, income replacement, critical illness cover, retirement income planning, and estate or succession structuring.',
  clientTypes: [
    'Clients with dependants and income-replacement needs',
    'Mass affluent and HNW clients planning retirement income',
    'UHNW clients using insurance within succession structures',
  ],
  regulations: [
    'Insurance distribution directives and product oversight',
    'Demand-and-needs assessment and disclosure obligations',
    'Policy documentation, cooling-off and claims handling standards',
    'Capital and solvency requirements applied to insurers',
  ],
  related: [
    { label: 'Wealth Planning', to: '/wealth-management' },
    { label: 'Client Segmentation', to: '/wealth-management#segmentation' },
    { label: 'Product Lifecycle', to: '/product-logic' },
    { label: 'Retirement & Estate Planning', to: '/wealth-management' },
  ],
  blocks: [
    {
      kind: 'prose',
      paragraphs: [
        'Insurance is often treated as a separate industry from investing. In wealth management it is the foundation of the plan: it protects the human capital and the balance sheet that fund everything else.',
        'The product logic is unusual because the value is contingent. The client pays for certainty, and good distribution depends on a documented needs assessment rather than a product-led sale.',
      ],
    },
    {
      kind: 'table',
      title: 'Protection vs wealth-oriented cover',
      columns: ['Category', 'Products', 'Core purpose'],
      rows: [
        [
          'Protection',
          'Life, Health, Critical Illness, Disability',
          'Replace income or cover a specific adverse event for a defined term or whole of life',
        ],
        [
          'Wealth / Long-term planning',
          'Savings plans, Annuities, Investment-linked insurance',
          'Accumulate value or convert capital into a predictable income stream, often with tax or estate considerations',
        ],
      ],
    },
    {
      kind: 'concepts',
      title: 'Policy vocabulary',
      columns: 2,
      items: [
        {
          term: 'Premium',
          definition: 'The amount paid to keep the policy in force — single, regular or flexible depending on the product.',
          tag: 'Cost',
        },
        {
          term: 'Coverage',
          definition: 'The scope of insured events and the conditions under which the insurer pays.',
          tag: 'Scope',
        },
        {
          term: 'Benefit',
          definition: 'The amount payable on a valid claim, which may be a lump sum, an income stream or a waiver of premiums.',
          tag: 'Payout',
        },
        {
          term: 'Policy Term',
          definition: 'The period the policy runs for — a fixed number of years or whole of life.',
          tag: 'Term',
        },
        {
          term: 'Cash Value',
          definition: 'The accumulated value inside a savings or whole-life policy, available on surrender subject to charges.',
          tag: 'Value',
        },
        {
          term: 'Surrender',
          definition: 'Ending the policy early in exchange for its surrender value, which may be lower than premiums paid, especially in early years.',
          tag: 'Exit',
        },
        {
          term: 'Investment Risk',
          definition:
            'For investment-linked policies, the policyholder bears the performance of the underlying funds rather than the insurer guaranteeing a return.',
          tag: 'Risk',
        },
      ],
    },
    {
      kind: 'prose',
      title: 'Why insurance is part of wealth management',
      paragraphs: [
        'Wealth management plans are built on future income and future liabilities. Insurance addresses the events that would break the assumptions behind the plan: premature death, serious illness, disability or outliving one’s assets.',
        'It also supports objectives that investments cannot. Annuities convert accumulated capital into contractual income; whole-of-life policies can fund estate and liquidity planning; protection cover keeps a family’s plan intact when the unexpected happens.',
        'From a product perspective, the discipline is needs-based assessment: coverage amount, term and beneficiary structure should follow from the client’s liabilities and dependants, not from the product’s commission structure.',
      ],
    },
    {
      kind: 'bullets',
      title: 'What a good needs assessment answers',
      items: [
        'Who depends on the client’s income, and for how long?',
        'What liabilities — mortgage, education, business commitments — would survive them?',
        'How much capital would be needed to replace income, and for how many years?',
        'Is the need temporary (term cover) or permanent (whole of life / estate liquidity)?',
        'Is the objective protection, accumulation, or guaranteed retirement income?',
        'How does the policy interact with existing estate and succession arrangements?',
      ],
    },
    {
      kind: 'perspective',
      title: 'Wealth Management Perspective',
      items: [
        {
          question: 'Who typically buys it?',
          answer:
            'Clients with dependants, mortgage or business liabilities, or a retirement income gap. Penetration normally rises with affluence as estate and succession planning become relevant.',
        },
        {
          question: 'What client objectives does it support?',
          answer:
            'Income replacement, family protection, critical illness cover, retirement income certainty and estate liquidity.',
        },
        {
          question: 'What are the major risks?',
          answer:
            'Under-insurance, exclusions that are not understood, inflation eroding real benefit value, surrender penalties, and investment risk for unit-linked contracts.',
        },
        {
          question: 'How does a bank distribute it?',
          answer:
            'Bancassurance: through RMs and licensed specialists, with a documented demand-and-needs assessment, insurer product governance, and post-sale servicing handled by the insurer with bank oversight.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'note',
      title: 'Educational note',
      body:
        'This page explains how insurance products fit into a wealth plan. Coverage, exclusions and taxation are jurisdiction-specific and depend on the individual policy wording.',
    },
  ],
}

/* ================================================================== */
/* FOREIGN EXCHANGE                                                    */
/* ================================================================== */

export const fx: Product = {
  slug: 'fx',
  name: 'Foreign Exchange',
  tagline: 'Converting and managing currency exposure across a global portfolio.',
  category: 'Banking Service',
  assetClass: 'FX',
  riskLevel: 'Medium',
  liquidity: 'High',
  horizon: 'Short',
  complexity: 'Simple',
  what:
    'FX is the exchange of one currency for another at an agreed rate. In wealth management it appears both as a transaction service and as a portfolio exposure to manage.',
  why:
    'Clients earn, spend, borrow and invest in different currencies. Every cross-border cash flow or foreign asset carries an implicit currency position that has to be converted or hedged intentionally.',
  howReturn:
    'FX itself does not generate investment return. Value comes from executing at a competitive rate, and from deciding deliberately whether an unhedged position is an intended exposure or an unintended risk.',
  risks: [
    'Currency risk on unhedged foreign positions',
    'Execution and spread cost — conversion is not free',
    'Settlement risk in cross-border payments',
    'Timing risk for future or contingent cash flows',
    'Liquidity and pricing variation outside market hours',
  ],
  useCase:
    'Travel and lifestyle payments, funding foreign investments, hedging foreign-currency liabilities, and managing currency exposure inside a portfolio.',
  clientTypes: [
    'Internationally mobile and expatriate clients',
    'Clients holding multi-currency assets and liabilities',
    'Corporate treasury clients within banking relationships',
  ],
  regulations: [
    'FX code of conduct and best-execution expectations',
    'Transparency of rates, spreads and total cost',
    'Payment transparency, sanctions and AML screening',
    'Reporting obligations for cross-border transactions',
  ],
  related: [
    { label: 'FX Forward & FX Option', to: '/products/otc-derivatives' },
    { label: 'Cash Management', to: '/wealth-management' },
    { label: 'Order Management', to: '/digital-wealth' },
    { label: 'Pricing', to: '/product-logic' },
  ],
  blocks: [
    {
      kind: 'prose',
      paragraphs: [
        'FX is the connective tissue of an international bank. It appears in payments, in investment settlement, in lending and in hedging — which is why it is both a client service and a product with its own pricing logic.',
        'Digitally, FX is where transparency has improved most: clients expect to see the rate, the margin and the total amount before they confirm, and they expect the quoted rate to be honoured.',
      ],
    },
    {
      kind: 'concepts',
      title: 'FX mechanics',
      items: [
        {
          term: 'Spot',
          definition: 'An exchange of currencies at the prevailing market rate, settling on the standard value date for the pair.',
          tag: 'Transaction',
        },
        {
          term: 'Forward',
          definition: 'An agreed rate for an exchange on a future date, used to remove uncertainty from known future cash flows.',
          tag: 'Hedging',
        },
        {
          term: 'FX Swap',
          definition: 'A simultaneous spot and forward transaction, used to roll funding or manage short-term currency liquidity.',
          tag: 'Treasury',
        },
        {
          term: 'NDF (Non-Deliverable Forward)',
          definition:
            'A forward settled in a convertible currency against the difference from the fixing rate, used where the local currency cannot be freely delivered offshore.',
          tag: 'Restricted markets',
        },
        {
          term: 'Base & Quote Currency',
          definition:
            'A rate expresses how much of the quote currency one unit of the base currency buys. Conventions matter and are a frequent source of operational error.',
          tag: 'Convention',
        },
        {
          term: 'Pip',
          definition: 'The standard smallest price increment in a currency pair — the unit in which spreads and rate moves are measured.',
          tag: 'Pricing',
        },
        {
          term: 'Bid / Ask & Margin',
          definition:
            'The difference between buying and selling rates is where execution cost sits; the bank’s margin is the amount added to the interbank rate.',
          tag: 'Cost',
        },
        {
          term: 'Value Date & Settlement',
          definition:
            'The date on which currencies are actually exchanged. Cut-offs, holidays and time zones drive both pricing and operational risk.',
          tag: 'Operations',
        },
      ],
    },
    {
      kind: 'table',
      title: 'FX as service vs FX as exposure',
      columns: ['Perspective', 'Client question', 'Bank response'],
      rows: [
        ['Service', 'I need to move money into another currency', 'Rate quote, execution, payment, confirmation and settlement'],
        ['Investment', 'My portfolio holds assets in another currency', 'Explain and, where appropriate, hedge the resulting currency exposure'],
        ['Liability', 'My mortgage or loan is in another currency', 'Assess mismatch against income currency and consider hedging'],
        ['Planning', 'I will receive or pay a large amount later', 'Forward or option structures aligned to the cash-flow date'],
      ],
    },
    {
      kind: 'flow',
      title: 'Digital FX conversion journey',
      steps: [
        { label: 'Select Accounts', detail: 'Debit and credit currency' },
        { label: 'Rate Quote', detail: 'Rate, margin, expiry' },
        { label: 'Amount', detail: 'Sell or buy amount' },
        { label: 'Purpose Check', detail: 'Compliance screening' },
        { label: 'Confirm', detail: 'Total cost transparency' },
        { label: 'Execute', detail: 'Deal capture and booking' },
        { label: 'Settle', detail: 'Value date and payment' },
        { label: 'Record', detail: 'Statement and portfolio view' },
      ],
    },
    {
      kind: 'perspective',
      title: 'Wealth Management Perspective',
      items: [
        {
          question: 'Who typically uses it?',
          answer:
            'Internationally mobile clients, clients with multi-currency income or liabilities, and any client investing across borders — either as a transaction or as exposure to be managed.',
        },
        {
          question: 'What objectives does it support?',
          answer:
            'Payments and lifestyle needs, funding of foreign investments, deliberate currency exposure, and hedging where stability of value matters more than upside.',
        },
        {
          question: 'What are the major risks?',
          answer:
            'Adverse currency movement on unhedged positions, execution cost, settlement and cut-off risk, and concentration when assets and liabilities sit in different currencies.',
        },
        {
          question: 'How does a bank distribute it?',
          answer:
            'Through digital self-service for simple conversions, RM-assisted dealing for larger or less liquid amounts, and treasury desks for forwards, swaps and structured FX solutions.',
        },
      ],
    },
  ],
}
