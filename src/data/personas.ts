export interface Persona {
  name: string
  segment: string
  profile: string
  jobsToBeDone: string[]
  needs: string[]
  painPoints: string[]
  productFit: string
  digitalExpectation: string
  successSignal: string
}

export const personas: Persona[] = [
  {
    name: 'Accumulator — first-time digital investor',
    segment: 'Affluent',
    profile:
      'Early-career professional with surplus monthly cash, no adviser relationship, comfortable on mobile and time-poor.',
    jobsToBeDone: [
      'Put my monthly surplus to work without needing a branch appointment',
      'Understand what I am buying well enough to stop worrying about it',
      'See progress without interpreting a statement',
    ],
    needs: [
      'Low minimum ticket and regular investing',
      'Plain-language risk and cost explanation',
      'Immediate confirmation that the order was accepted',
    ],
    painPoints: [
      'Fund documents written for institutions, not clients',
      'Unclear whether the product is suitable for someone like them',
      'No visibility of what happens between order and settlement',
    ],
    productFit: 'Mutual funds and ETFs within a curated, suitability-checked shelf.',
    digitalExpectation:
      'Complete the whole journey on mobile, in one session, with no PDF downloads.',
    successSignal:
      'Sets up a regular plan within the first month and keeps it running for two quarters.',
  },
  {
    name: 'Pre-retirement income planner',
    segment: 'Affluent / HNW',
    profile:
      'Approaching retirement, holds accumulated assets, wants predictable income and is sensitive to capital loss.',
    jobsToBeDone: [
      'Convert part of my portfolio into predictable income',
      'Avoid being forced to sell at the wrong moment',
      'Know what I will receive and when',
    ],
    needs: [
      'Transparent pricing: clean price, accrued interest, settlement amount',
      'Visibility of coupon and maturity dates',
      'Clear view of how much of the portfolio is exposed to equity volatility',
    ],
    painPoints: [
      'Bond pricing conventions that are invisible in digital channels',
      'Callable and perpetual features discovered only after purchase',
      'Income projections that do not match what actually lands in the account',
    ],
    productFit: 'Investment-grade bonds and laddered fixed income, with advisory support.',
    digitalExpectation:
      'A transparency layer that explains the numbers, plus an easy route to a human when needed.',
    successSignal:
      'Builds a maturity ladder and holds to maturity rather than trading reactively.',
  },
  {
    name: 'Business owner with concentrated risk',
    segment: 'HNW',
    profile:
      'Entrepreneur whose wealth is concentrated in their own business, with cross-border income and currency exposure.',
    jobsToBeDone: [
      'Diversify without liquidating the business',
      'Manage currency exposure on foreign income',
      'Protect the family plan against a health or mortality event',
    ],
    needs: [
      'Access to broader and more complex instruments, with proper explanation',
      'Currency solutions matched to real cash flows',
      'Protection structured around dependants and liabilities',
    ],
    painPoints: [
      'Complex products presented through short marketing summaries',
      'FX costs that are not comparable between channels',
      'Protection needs assessed product-first rather than needs-first',
    ],
    productFit:
      'Structured products, FX forwards and protection, distributed with enhanced suitability.',
    digitalExpectation:
      'Digital for reporting, simulation and transparency; human for the decision itself.',
    successSignal:
      'Approved hedging and protection structure with documented rationale and periodic review.',
  },
]
