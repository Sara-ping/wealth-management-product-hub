import type { Product } from './types'

/* ================================================================== */
/* EQUITY                                                              */
/* ================================================================== */

export const equity: Product = {
  slug: 'equity',
  name: 'Equity',
  tagline: 'Ownership of a company — the residual claim on its assets and earnings.',
  category: 'Investment Product',
  assetClass: 'Equity',
  riskLevel: 'High',
  liquidity: 'High',
  horizon: 'Long',
  complexity: 'Simple',
  what:
    'A share of equity represents a unit of ownership in a company. The holder participates in the company’s economic performance and typically carries voting rights on certain corporate matters.',
  why:
    'Companies issue equity to raise permanent capital without committing to fixed repayments. Investors buy equity because it offers participation in long-term economic growth that fixed-income instruments do not provide.',
  howReturn:
    'Two components: capital gain when the share price rises above the purchase price, and dividends when the company distributes part of its profit. Total return combines both, net of costs and taxes.',
  risks: [
    'Market risk — broad price movements unrelated to the company',
    'Company-specific risk — earnings, governance or competitive setbacks',
    'Liquidity risk — thinly traded shares are harder to exit at fair value',
    'Currency risk — foreign-listed shares introduce FX exposure',
    'Dividend risk — distributions are discretionary and can be cut',
  ],
  useCase:
    'Long-term capital growth, inflation-aware investing, dividend income strategies and the growth sleeve of a diversified portfolio.',
  clientTypes: [
    'Mass affluent clients building long-term wealth',
    'HNW clients with diversified multi-asset portfolios',
    'Clients with growth objectives and higher risk tolerance',
  ],
  regulations: [
    'Prospectus / listing rules for primary offerings',
    'Market conduct and best-execution obligations',
    'Suitability and appropriateness assessment before execution',
    'Disclosure of costs, charges and conflicts of interest',
  ],
  related: [
    { label: 'Mutual Funds', to: '/products/funds' },
    { label: 'ETFs', to: '/products/etfs' },
    { label: 'Risk & Return', to: '/product-logic' },
    { label: 'Portfolio Management', to: '/wealth-management' },
  ],
  blocks: [
    {
      kind: 'prose',
      paragraphs: [
        'Equity is the starting point for most wealth management conversations because it is the clearest expression of the risk-return trade-off: the investor accepts price volatility in exchange for participation in corporate growth.',
        'From a product perspective, equity is simple to explain but demanding to distribute well. The instrument is standardised; the complexity sits in suitability, execution quality, custody, corporate actions and client communication.',
      ],
    },
    {
      kind: 'concepts',
      title: 'Core equity concepts',
      items: [
        {
          term: 'Common Stock',
          definition:
            'Ordinary shares carrying voting rights and a residual claim on earnings. Dividends, if declared, rank after bondholders and preferred shareholders.',
          tag: 'Instrument',
        },
        {
          term: 'Preferred Stock',
          definition:
            'Shares with priority over common stock for dividends and liquidation proceeds, usually without voting rights. Economically they sit between bonds and common equity.',
          tag: 'Instrument',
        },
        {
          term: 'Listed vs Unlisted',
          definition:
            'Listed shares trade on an exchange with continuous pricing and public disclosure. Unlisted shares rely on private valuation, negotiated transfers and restricted liquidity.',
          tag: 'Market',
        },
        {
          term: 'Primary vs Secondary Market',
          definition:
            'The primary market is where new securities are issued and capital reaches the company. The secondary market is where existing securities change hands between investors.',
          tag: 'Market',
        },
        {
          term: 'Capital Gain',
          definition:
            'The difference between sale proceeds and purchase cost. It is only realised when the position is sold — until then it is an unrealised mark-to-market movement.',
          tag: 'Return',
        },
        {
          term: 'Dividend',
          definition:
            'A distribution of company profit to shareholders, set by the board. It can be cash or stock, and it is never guaranteed.',
          tag: 'Return',
        },
        {
          term: 'Total Return',
          definition:
            'Price appreciation plus income (dividends), measured over a defined period and net of transaction costs — the only honest way to compare investments.',
          tag: 'Return',
        },
      ],
    },
    {
      kind: 'table',
      title: 'Primary vs secondary market',
      columns: ['Dimension', 'Primary market', 'Secondary market'],
      rows: [
        [
          'Purpose',
          'Raise new capital for the issuer',
          'Transfer existing securities between investors',
        ],
        [
          'Counterparty',
          'Investor subscribes directly from the issuer or underwriter',
          'Investor trades with another market participant',
        ],
        ['Price formation', 'Set by the offer / bookbuilding process', 'Continuous order-book pricing'],
        [
          'Bank role',
          'Underwriting, allocation, bookbuilding, settlement of subscription monies',
          'Execution, custody, corporate actions, reporting',
        ],
        [
          'Client experience',
          'Subscription form, allocation result, refund of unallocated funds',
          'Order ticket, execution confirmation, position update',
        ],
      ],
      caption:
        'In wealth management, most client flow is secondary market; primary market participation is usually reserved for IPOs, placements and structured subscriptions.',
    },
    {
      kind: 'stack',
      title: 'What drives a share price',
      inputs: [
        { title: 'Company Fundamentals', detail: 'Earnings, cash flow, balance sheet strength, governance.' },
        { title: 'Market Expectations', detail: 'Consensus forecasts and how results compare with them.' },
        { title: 'Interest Rates', detail: 'Discount rates applied to future cash flows.' },
        { title: 'Industry Conditions', detail: 'Competitive structure, regulation, input costs.' },
        { title: 'Investor Sentiment', detail: 'Risk appetite, flows, positioning and narrative.' },
      ],
      output: 'Stock Price',
      outputLabel: 'Market clearing price',
    },
    {
      kind: 'perspective',
      title: 'Wealth Management Perspective',
      items: [
        {
          question: 'Who typically invests?',
          answer:
            'Clients with a long investment horizon and capacity to absorb volatility — commonly mass affluent accumulators, HNW portfolios and growth-oriented mandates. Allocation size is governed by risk profile, not by conviction alone.',
        },
        {
          question: 'What client objectives does it support?',
          answer:
            'Long-term capital appreciation, inflation-aware growth, dividend income and diversification away from fixed income and cash.',
        },
        {
          question: 'What are the major risks?',
          answer:
            'Price volatility, permanent capital loss, concentration risk, currency exposure on foreign listings, and behavioural risk — clients selling at the wrong moment.',
        },
        {
          question: 'How does a bank distribute the product?',
          answer:
            'Through advisory and execution-only channels: RM-led advisory for HNW, digital brokerage for self-directed clients, and model portfolios or funds for discretionary mandates. Each channel carries a different suitability and disclosure burden.',
        },
      ],
    },
    {
      kind: 'flow',
      title: 'Equity trade lifecycle in a bank',
      steps: [
        { label: 'Client Need', detail: 'Growth, income or diversification' },
        { label: 'Risk Profile', detail: 'Capacity and tolerance for loss' },
        { label: 'Suitability', detail: 'Product matches client profile' },
        { label: 'Order Capture', detail: 'Instrument, side, quantity, order type' },
        { label: 'Pre-Trade Check', detail: 'Restricted lists, limits, availability' },
        { label: 'Execution', detail: 'Routing and best execution' },
        { label: 'Settlement', detail: 'Delivery versus payment, typically T+1/T+2' },
        { label: 'Portfolio', detail: 'Position, cost basis and performance reporting' },
      ],
    },
    {
      kind: 'callout',
      tone: 'note',
      title: 'Educational note',
      body:
        'This page describes how equity instruments work and how banks distribute them. It is not a recommendation to buy or sell any security, and no view is expressed on the valuation of any individual company.',
    },
  ],
}

/* ================================================================== */
/* FIXED INCOME                                                        */
/* ================================================================== */

export const fixedIncome: Product = {
  slug: 'fixed-income',
  name: 'Fixed Income',
  tagline: 'Lending money to an issuer in exchange for contractual cash flows.',
  category: 'Investment Product',
  assetClass: 'Fixed Income',
  riskLevel: 'Moderate',
  liquidity: 'Moderate',
  horizon: 'Medium',
  complexity: 'Moderate',
  what:
    'A bond is a debt instrument: the investor lends capital to an issuer who commits to pay interest (coupon) and repay principal at maturity under defined terms.',
  why:
    'Governments and companies need funding with predictable servicing costs. Investors need contractual cash flows, capital preservation potential and diversification against equity risk.',
  howReturn:
    'Coupon income paid on a defined schedule, plus any capital gain or loss if the bond is sold before maturity or held to a redemption price different from the purchase price.',
  risks: [
    'Interest rate risk — prices fall when market yields rise',
    'Credit risk — the issuer may fail to pay or default',
    'Liquidity risk — some bonds trade rarely and price opaquely',
    'Reinvestment risk — coupons may be reinvested at lower rates',
    'Inflation risk — fixed coupons lose purchasing power',
  ],
  useCase:
    'Income generation, capital stability, laddering to meet known future liabilities, and balancing the volatility of an equity allocation.',
  clientTypes: [
    'Clients seeking predictable income',
    'Capital-preservation oriented and near-retirement clients',
    'HNW portfolios using bond ladders as a stability anchor',
  ],
  regulations: [
    'Prospectus and offering documentation requirements',
    'Suitability assessment including complexity and liquidity',
    'Client categorisation (retail vs professional) affects access',
    'Cost and yield disclosure, including indicative versus final pricing',
  ],
  related: [
    { label: 'Structured Products', to: '/products/structured-products' },
    { label: 'Interest Rate Swap', to: '/products/otc-derivatives' },
    { label: 'Pricing & Yield', to: '/product-logic' },
    { label: 'Bond Journey Case', to: '/case-studies#bond-investment-journey' },
  ],
  blocks: [
    {
      kind: 'prose',
      paragraphs: [
        'Fixed income is the part of a portfolio where product mechanics matter most. Two bonds with the same coupon can behave completely differently because they carry different sensitivity to interest rates and different credit exposure.',
        'For a Product Owner, bonds are also where digital journeys become difficult: indicative pricing, minimum denominations, settlement conventions, accrued interest and call features all have to be presented in a way a retail client can understand.',
      ],
    },
    {
      kind: 'concepts',
      title: 'Bond types',
      columns: 2,
      items: [
        {
          term: 'Government Bonds',
          definition:
            'Issued by sovereigns or their agencies. Typically the benchmark for a currency’s yield curve and generally the lowest credit risk in that currency.',
          tag: 'Issuer',
        },
        {
          term: 'Corporate Bonds',
          definition:
            'Issued by companies to fund operations, acquisitions or refinancing. Priced at a spread over the government curve reflecting credit and liquidity.',
          tag: 'Issuer',
        },
        {
          term: 'Investment Grade',
          definition:
            'Credit ratings in the higher bands (e.g. AAA to BBB-). Lower expected default risk, tighter spreads, and wider eligibility for conservative mandates.',
          tag: 'Credit',
        },
        {
          term: 'High Yield',
          definition:
            'Sub-investment-grade credit. Higher coupon compensates for higher default risk; behaviour correlates more closely with equities in stress periods.',
          tag: 'Credit',
        },
        {
          term: 'Fixed Rate Bonds',
          definition:
            'The coupon is set at issuance and does not change. Price sensitivity to interest rates is highest for long maturities and low coupons.',
          tag: 'Coupon',
        },
        {
          term: 'Floating Rate Notes',
          definition:
            'Coupon resets periodically against a reference rate plus a spread. Reduces interest rate risk while retaining credit risk.',
          tag: 'Coupon',
        },
        {
          term: 'Zero Coupon Bonds',
          definition:
            'No periodic interest. Issued at a discount and redeemed at par, so the return is the difference between purchase price and redemption value.',
          tag: 'Coupon',
        },
        {
          term: 'Convertible Bonds',
          definition:
            'Bonds that can be converted into equity under defined conditions. They blend bond downside protection with equity participation, and their pricing depends on volatility.',
          tag: 'Hybrid',
        },
      ],
    },
    { kind: 'rate-lab' },
    {
      kind: 'concepts',
      title: 'The vocabulary that drives bond behaviour',
      columns: 2,
      items: [
        {
          term: 'Coupon',
          definition:
            'The contractual interest rate applied to the bond’s face value, paid on scheduled dates. Fixed at issuance for a fixed-rate bond.',
          tag: 'Cash flow',
        },
        {
          term: 'Yield',
          definition:
            'The return an investor earns given the price paid. Yield moves inversely to price: when a bond gets cheaper, its yield rises.',
          tag: 'Return',
        },
        {
          term: 'Duration',
          definition:
            'A measure of price sensitivity to changes in yield, expressed in years. Higher duration means a larger price move for the same yield change.',
          tag: 'Risk',
        },
        {
          term: 'Credit Spread',
          definition:
            'The extra yield over a risk-free benchmark demanded for bearing the issuer’s credit risk. Widening spreads mean the market prices higher default risk.',
          tag: 'Risk',
        },
        {
          term: 'Credit Risk',
          definition:
            'The risk that the issuer cannot meet coupon or principal obligations. Managed through analysis, limits, diversification and covenants.',
          tag: 'Risk',
        },
        {
          term: 'Liquidity Risk',
          definition:
            'The risk of not being able to exit at a fair price. Corporate bonds generally trade less frequently than equities, especially after market stress.',
          tag: 'Risk',
        },
        {
          term: 'Interest Rate Risk',
          definition:
            'The risk that changes in market rates change the value of the bond before maturity. It is the dominant risk for high-quality, long-duration bonds.',
          tag: 'Risk',
        },
      ],
    },
    {
      kind: 'table',
      title: 'How bond features change client outcomes',
      columns: ['Feature', 'Effect on price sensitivity', 'Typical client fit'],
      rows: [
        ['Short maturity, high coupon', 'Lower duration — smaller price swings', 'Capital stability, near-term liabilities'],
        ['Long maturity, low coupon', 'Higher duration — larger price swings', 'Long-horizon mandates, liability matching'],
        ['Floating coupon', 'Low sensitivity to rate changes', 'Clients concerned about rising rates'],
        ['High yield credit', 'Behaviour driven more by credit than rates', 'Higher risk tolerance, income seeking'],
        ['Callable bond', 'Issuer can redeem early — reinvestment risk', 'Clients who understand conditional cash flows'],
      ],
      caption:
        'Same asset class, very different risk profile. Suitability must be assessed at instrument level, not only at asset-class level.',
    },
    {
      kind: 'table',
      title: 'How the product family classifies into tradable bonds',
      columns: ['Classification dimension', 'Bond types produced', 'Who it typically suits and why'],
      rows: [
        [
          'Payment profile',
          'Bullet, amortising, sinker, step-up, inflation-linked',
          'Bullet is the simplest. Amortising and sinker reduce principal gradually — useful when a liability falls due in stages.',
        ],
        [
          'Structure',
          'Plain vanilla, callable, putable, convertible, subordinated',
          'Callable and subordinated carry extra conditions, so they are reserved for clients who understand the trade-off.',
        ],
        [
          'Embedded option',
          'Straight, callable, putable, convertible, exchangeable',
          'The embedded option changes the payoff. It is a complexity flag in product governance, not a marketing feature.',
        ],
        [
          'Seniority',
          'Senior secured, senior unsecured, subordinated, hybrid',
          'Higher seniority ranks earlier in a default. This drives both the rating and the recovery expectation.',
        ],
        [
          'Nominal',
          'Fixed rate, floating rate, zero coupon',
          'Floating rate removes interest-rate exposure; zero coupon defers all income to maturity.',
        ],
        [
          'Issuer and rating',
          'Government, agency, supranational, corporate, financial, emerging market',
          'Issuer type and credit rating set the credit risk. This is the primary eligibility filter in suitability.',
        ],
        [
          'Market',
          'Domestic, international, Eurobond, global, foreign bond (Yankee / Samurai)',
          'The market determines registration, withholding tax, settlement location and the client’s tax treatment.',
        ],
        [
          'Maturity',
          'Ultra-short (≤1y), short (1–3y), medium (3–7y), long (7–15y), ultra-long (>15y), perpetual',
          'Maturity drives the interest-rate sensitivity. It must be matched to the client’s horizon, not chosen on yield alone.',
        ],
        [
          'Credit quality',
          'Investment grade, crossover, high yield, unrated, distressed',
          'Credit quality sets the spread and the default risk. This is where conservative mandates and discretionary limits intervene.',
        ],
        [
          'Coupon mechanics',
          'Fixed, floating, variable, deferred, pay-in-kind, original issue discount',
          'Coupon mechanics determine when and how the client is actually paid, which matters for income planning.',
        ],
        [
          'Repayment currency',
          'Single currency, dual currency, multi-currency, currency-linked',
          'Currency adds a second risk on top of credit. It should match the currency of the client’s spending or liability.',
        ],
        [
          'Regulatory / tax status',
          'Government, government-guaranteed, tax-exempt municipal, covered, green / sustainability-linked',
          'Status affects capital treatment, withholding tax and eligibility for specific mandates or label-driven funds.',
        ],
      ],
      caption:
        'The same bond is described by several dimensions at once — for example a 7-year senior unsecured fixed-rate Eurobond from an investment-grade issuer. Product governance applies these dimensions to define the target market and the eligibility rules for each client segment.',
    },
    {
      kind: 'callout',
      tone: 'note',
      title: 'Educational note',
      body:
        'Yield figures on this page are illustrative mechanics, not offers. Actual bond pricing depends on issuer, maturity, currency, credit spread, liquidity and market conditions at the time of execution.',
    },
  ],
}

/* ================================================================== */
/* MUTUAL FUNDS                                                        */
/* ================================================================== */

export const funds: Product = {
  slug: 'funds',
  name: 'Mutual Funds',
  tagline: 'Pooled capital, professionally managed, priced once per dealing cycle.',
  category: 'Investment Product',
  assetClass: 'Funds',
  riskLevel: 'Medium',
  liquidity: 'Moderate',
  horizon: 'Medium',
  complexity: 'Simple',
  what:
    'A mutual fund pools money from many investors into a single portfolio managed by a fund manager according to a documented investment objective and policy.',
  why:
    'It gives investors access to diversification, professional management and asset classes that would be impractical to replicate directly with a small ticket size.',
  howReturn:
    'Through the change in the fund’s net asset value (NAV) plus any income distributions, net of management fees and operating expenses.',
  risks: [
    'Market risk of the underlying holdings',
    'Manager risk — decisions may underperform the benchmark',
    'Fee drag — ongoing charges reduce net return',
    'Liquidity risk at fund level for certain strategies',
    'Currency risk for funds holding foreign assets',
  ],
  useCase:
    'Core portfolio building blocks, regular savings plans, diversification for smaller portfolios and access to specialist markets.',
  clientTypes: [
    'Mass affluent clients starting with smaller amounts',
    'Clients who prefer delegation to a manager',
    'Mandates using funds as building blocks within model portfolios',
  ],
  regulations: [
    'Fund prospectus, KIID / KID and periodic disclosure',
    'Suitability assessment and target market definition',
    'Distribution fee and inducement transparency',
    ' valuation, depositary and custody requirements',
  ],
  related: [
    { label: 'ETFs', to: '/products/etfs' },
    { label: 'Digital Fund Purchase Case', to: '/case-studies#digital-mutual-fund-purchase' },
    { label: 'Product Lifecycle', to: '/product-logic' },
    { label: 'Suitability', to: '/wealth-management' },
  ],
  blocks: [
    {
      kind: 'prose',
      paragraphs: [
        'Mutual funds are the workhorse of wealth management distribution. They turn an investment strategy into a single, purchasable unit with a documented objective, a fee structure and a defined dealing process.',
        'Digitally, funds are where product data quality matters most: NAV timing, cut-off times, settlement cycles, share classes and fee disclosures must all be accurate before a client can place a confident order.',
      ],
    },
    {
      kind: 'concepts',
      title: 'Fund mechanics',
      items: [
        {
          term: 'NAV (Net Asset Value)',
          definition:
            'The value of the fund’s assets minus liabilities, divided by units outstanding. Most mutual funds deal at a single NAV struck once per dealing cycle.',
          tag: 'Pricing',
        },
        {
          term: 'Open-ended vs Closed-ended',
          definition:
            'Open-ended funds create and cancel units to meet demand. Closed-ended funds have a fixed number of units that trade on an exchange.',
          tag: 'Structure',
        },
        {
          term: 'Active vs Passive Management',
          definition:
            'Active managers aim to outperform a benchmark through selection and timing. Passive funds track an index, accepting market return in exchange for lower costs.',
          tag: 'Strategy',
        },
        {
          term: 'Share Classes',
          definition:
            'Different classes of the same fund vary by currency, fee structure, distribution policy (accumulating vs distributing) and eligible investor type.',
          tag: 'Structure',
        },
        {
          term: 'Ongoing Charges Figure',
          definition:
            'The annual cost of owning the fund, including management fee and operating expenses. It is deducted from the fund assets and reduces performance.',
          tag: 'Cost',
        },
        {
          term: 'Cut-off Time',
          definition:
            'The deadline for receiving an order to be processed at a given dealing cycle. Orders received after cut-off are dealt on the next cycle.',
          tag: 'Process',
        },
        {
          term: 'Diversification',
          definition:
            'Holding many securities so that the poor performance of one holding has a limited effect on the whole — the core economic reason funds exist.',
          tag: 'Benefit',
        },
        {
          term: 'Look-through',
          definition:
            'Assessing the underlying holdings rather than only the fund wrapper, needed for risk, concentration and regulatory reporting.',
          tag: 'Risk',
        },
      ],
    },
    {
      kind: 'table',
      title: 'Mutual funds vs ETFs',
      columns: ['Dimension', 'Mutual fund', 'ETF'],
      rows: [
        ['Pricing', 'Single NAV per dealing cycle', 'Continuous intra-day market price'],
        ['Trading', 'Subscription and redemption with the fund', 'Bought and sold on exchange'],
        ['Minimum ticket', 'Often low; suitable for regular savings', 'At least one share, plus brokerage costs'],
        ['Transparency', 'Periodic holdings disclosure', 'Frequent, often daily, portfolio disclosure'],
        ['Cost profile', 'Ongoing charges, possible subscription/redemption fees', 'Expense ratio plus brokerage and spread'],
        ['Suitability in advice', 'Natural fit for regular savings and model portfolios', 'Common in advisory, discretionary and self-directed channels'],
      ],
      caption:
        'The instruments overlap economically; the difference is in dealing mechanics, transparency and the operational model behind them.',
    },
    {
      kind: 'flow',
      title: 'Digital fund subscription flow',
      steps: [
        { label: 'Fund Discovery', detail: 'Search, filter, compare' },
        { label: 'Fund Details', detail: 'Objective, charges, risk' },
        { label: 'Risk Profile', detail: 'Client capacity for loss' },
        { label: 'Suitability', detail: 'Match fund risk rating to profile' },
        { label: 'Amount', detail: 'Minimum, increments, cash available' },
        { label: 'Pre-Trade Check', detail: 'Restrictions, documents, eligibility' },
        { label: 'Order Confirmation', detail: 'Cut-off and indicative units' },
        { label: 'Dealing', detail: 'NAV struck, units allocated' },
        { label: 'Portfolio Update', detail: 'Holding and cost basis' },
      ],
    },
    {
      kind: 'perspective',
      title: 'Wealth Management Perspective',
      items: [
        {
          question: 'Who typically invests?',
          answer:
            'Clients across the full spectrum, from first-time investors using regular savings plans to HNW clients using funds as building blocks inside a mandate.',
        },
        {
          question: 'What client objectives does it support?',
          answer:
            'Diversification, professional management, access to asset classes, regular investing and — for distributing classes — income.',
        },
        {
          question: 'What are the major risks?',
          answer:
            'Market risk of the underlying assets, manager and style risk, fee drag, liquidity terms of the specific fund, and currency exposure for unhedged share classes.',
        },
        {
          question: 'How does a bank distribute the product?',
          answer:
            'Through advisory, discretionary and execution-only channels, with fund lists curated by investment committees and shelf governance that decides what may be distributed to which client segment.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'note',
      title: 'Educational note',
      body:
        'Fund risk ratings are standardised labels for comparison, not guarantees. Past performance does not indicate future results and no fund on this site is being recommended.',
    },
  ],
}

/* ================================================================== */
/* ETFs                                                                */
/* ================================================================== */

export const etfs: Product = {
  slug: 'etfs',
  name: 'ETFs',
  tagline: 'Index exposure in a single exchange-traded instrument.',
  category: 'Investment Product',
  assetClass: 'ETF',
  riskLevel: 'Medium',
  liquidity: 'High',
  horizon: 'Medium',
  complexity: 'Simple',
  what:
    'An exchange-traded fund is a fund whose units trade on an exchange throughout the day at market prices, usually tracking an index.',
  why:
    'It combines the diversification of a fund with the intraday tradability and price transparency of a listed security.',
  howReturn:
    'Through changes in the market price of the ETF, which tracks the performance of the underlying index, plus any distributions — net of the expense ratio.',
  risks: [
    'Market risk of the underlying index',
    'Tracking error — performance may deviate from the index',
    'Trading spread and premium/discount to NAV',
    'Liquidity depends on both the ETF and its underlying market',
    'Currency risk for unhedged foreign exposure',
  ],
  useCase:
    'Low-cost core exposure, tactical allocation, portfolio rebalancing and building blocks in model portfolios.',
  clientTypes: [
    'Self-directed digital clients',
    'Advisory clients using ETFs within model portfolios',
    'Institutional and discretionary allocations',
  ],
  regulations: [
    'Exchange listing and prospectus / KID requirements',
    'Appropriateness assessment for execution-only ETF sales',
    'Product governance and target market definitions',
    'Cost and tracking-error disclosure',
  ],
  related: [
    { label: 'Mutual Funds', to: '/products/funds' },
    { label: 'Equity', to: '/products/equity' },
    { label: 'Portfolio Management', to: '/wealth-management' },
    { label: 'Digital Wealth Journey', to: '/digital-wealth' },
  ],
  blocks: [
    {
      kind: 'prose',
      paragraphs: [
        'ETFs changed distribution economics: they made index exposure cheap, transparent and easy to trade. For digital wealth platforms, they are particularly attractive because pricing is continuous and holdings are published frequently.',
        'The product risk is not complexity — it is misalignment. An ETF that tracks a narrow or leveraged index can be far riskier than the word “fund” suggests, so the look-through matters.',
      ],
    },
    {
      kind: 'concepts',
      title: 'ETF mechanics',
      items: [
        {
          term: 'Index Tracking',
          definition:
            'The ETF aims to replicate the return of a benchmark index, either by holding the constituents (physical) or via derivatives (synthetic).',
          tag: 'Structure',
        },
        {
          term: 'Creation & Redemption',
          definition:
            'Authorised participants create and redeem units in large blocks, which helps keep the market price close to the value of the underlying assets.',
          tag: 'Mechanism',
        },
        {
          term: 'NAV vs Market Price',
          definition:
            'NAV is the value of the underlying holdings per unit; the market price is what buyers and sellers agree on exchange. Small differences are normal.',
          tag: 'Pricing',
        },
        {
          term: 'Tracking Error',
          definition:
            'The difference between ETF return and index return, caused by fees, sampling, taxes, dividend treatment and replication method.',
          tag: 'Risk',
        },
        {
          term: 'Expense Ratio',
          definition:
            'The annual management cost of the ETF, deducted from fund assets. A key comparison point between similar products.',
          tag: 'Cost',
        },
        {
          term: 'Bid / Ask Spread',
          definition:
            'The gap between buying and selling prices on exchange. It is a real transaction cost, especially for smaller or thinly traded ETFs.',
          tag: 'Cost',
        },
        {
          term: 'Distributing vs Accumulating',
          definition:
            'Distributing ETFs pay out income; accumulating ETFs reinvest it. This changes taxation and cash-flow expectations for clients.',
          tag: 'Structure',
        },
        {
          term: 'Look-through Liquidity',
          definition:
            'ETF tradability depends on the liquidity of the underlying market as well as the ETF itself — relevant in stressed conditions.',
          tag: 'Risk',
        },
      ],
    },
    {
      kind: 'table',
      title: 'What to check before an ETF reaches a client shelf',
      columns: ['Check', 'Why it matters'],
      rows: [
        ['Index methodology', 'Defines exposure, concentration and the risk the client actually takes'],
        ['Replication method', 'Physical vs synthetic changes counterparty exposure'],
        ['Tracking difference & error', 'Shows whether the product delivers what it promises'],
        ['Assets under management & spreads', 'Proxy for tradability and closure risk'],
        ['Domicile & tax treatment', 'Affects withholding tax and client net return'],
        ['Currency & hedging', 'Determines the FX exposure embedded in the product'],
      ],
      caption:
        'A curated ETF shelf is a product decision, not just a data feed: each check maps to a governance rule in the bank’s product approval process.',
    },
    {
      kind: 'perspective',
      title: 'Wealth Management Perspective',
      items: [
        {
          question: 'Who typically invests?',
          answer:
            'Cost-sensitive long-term investors, self-directed digital clients, and advisory or discretionary mandates that use ETFs as allocation building blocks.',
        },
        {
          question: 'What client objectives does it support?',
          answer:
            'Low-cost market exposure, diversification, transparent holdings and efficient portfolio rebalancing.',
        },
        {
          question: 'What are the major risks?',
          answer:
            'Market risk of the index, tracking error, trading spreads, temporary premium/discount to NAV, and hidden concentration when an index is less diversified than it appears.',
        },
        {
          question: 'How does a bank distribute the product?',
          answer:
            'Through digital self-directed platforms, advisory shelves with curated lists, and discretionary mandates. Execution-only channels rely on appropriateness tests and clear cost disclosure rather than personalised advice.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'note',
      title: 'Educational note',
      body:
        'ETF examples are used to explain mechanics only. No index, issuer or product is recommended, and “low cost” does not mean “low risk”.',
    },
  ],
}
