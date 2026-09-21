/* ------------------------------------------------------------------ */
/* Product catalogue types                                             */
/* ------------------------------------------------------------------ */

export type AssetClass =
  | 'Equity'
  | 'Fixed Income'
  | 'Funds'
  | 'ETF'
  | 'Structured'
  | 'Derivatives'
  | 'Insurance'
  | 'FX'

export type RiskLevel = 'Low' | 'Moderate' | 'Medium' | 'High' | 'Very High'
export type Liquidity = 'High' | 'Moderate' | 'Low'
export type Horizon = 'Short' | 'Medium' | 'Long'
export type Complexity = 'Simple' | 'Moderate' | 'Complex' | 'Highly Complex'

export type Block =
  | { kind: 'prose'; title?: string; paragraphs: string[] }
  | { kind: 'bullets'; title?: string; items: string[] }
  | {
      kind: 'concepts'
      title?: string
      columns?: 2 | 3
      items: { term: string; definition: string; tag?: string }[]
    }
  | {
      kind: 'flow'
      title?: string
      steps: ({ label: string; detail?: string } | string)[]
    }
  | {
      kind: 'timeline'
      title?: string
      items: { title: string; body?: string; bullets?: string[]; meta?: string }[]
    }
  | {
      kind: 'table'
      title?: string
      columns: string[]
      rows: string[][]
      caption?: string
    }
  | { kind: 'callout'; tone?: 'note' | 'warning' | 'insight'; title: string; body: string }
  | {
      kind: 'perspective'
      title?: string
      items: { question: string; answer: string }[]
    }
  | {
      kind: 'accordion'
      title?: string
      items: { title: string; subtitle?: string; bullets: string[]; tag?: string }[]
    }
  | {
      kind: 'stack'
      title?: string
      inputs: { title: string; detail?: string }[]
      output: string
      outputLabel?: string
    }
  | {
      kind: 'chain'
      title?: string
      items: { label: string; title: string; body: string }[]
    }
  | {
      kind: 'payoff'
      title?: string
      charts: PayoffSpec[]
    }
  | { kind: 'rate-lab' }
  | {
      kind: 'faq'
      title?: string
      items: { title: string; subtitle?: string; paragraphs: string[] }[]
    }

export interface PayoffSpec {
  title: string
  subtitle?: string
  series: {
    name: string
    points: [number, number][]
    color?: string
    dashed?: boolean
  }[]
  xLabel?: string
  yLabel?: string
  annotations?: { x: number; y: number; text: string }[]
  note?: string
}

export interface Product {
  slug: string
  name: string
  tagline: string
  category: string
  assetClass: AssetClass
  riskLevel: RiskLevel
  liquidity: Liquidity
  horizon: Horizon
  complexity: Complexity
  what: string
  why: string
  howReturn: string
  risks: string[]
  useCase: string
  clientTypes: string[]
  regulations: string[]
  related: { label: string; to: string }[]
  blocks: Block[]
}

/* ------------------------------------------------------------------ */
/* Case study types                                                    */
/* ------------------------------------------------------------------ */

export interface CaseStudy {
  slug: string
  title: string
  kicker: string
  domain: string
  summary: string
  businessProblem: string
  clientNeed: string
  product: string
  businessRules: string[]
  journey: string[]
  functionalRequirements: string[]
  data: string[]
  api: string[]
  riskCompliance: string[]
  successMetrics: { metric: string; description: string }[]
  po: {
    customerProblem: string
    businessValue: string[]
    scope: string[]
    userJourney: string[]
    rules: string[]
    dependencies: string[]
    risks: string[]
    prioritization: { item: string; rationale: string; priority: 'Must' | 'Should' | 'Could' }[]
    metrics: string[]
  }
}

/* ------------------------------------------------------------------ */
/* Wealth management types                                             */
/* ------------------------------------------------------------------ */

export interface Segment {
  name: string
  profile: string
  needs: string
  serviceModel: string
  advisoryModel: string
  productComplexity: string
  digitalExperience: string
}
