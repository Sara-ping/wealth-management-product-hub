/* ------------------------------------------------------------------ */
/* AI in Wealth Management                                             */
/* ------------------------------------------------------------------ */

export interface AiUseCase {
  id: string
  title: string
  audience: string
  problem: string
  approach: string
  value: string
  controls: string[]
}

export const aiUseCases: AiUseCase[] = [
  {
    id: 'rm-copilot',
    title: 'RM Copilot',
    audience: 'Relationship Manager',
    problem:
      'RMs lose time searching product documentation, policies and process guidance before and during client meetings.',
    approach:
      'A retrieval-augmented assistant grounded on approved internal knowledge, with citations and a mandatory review step for client-facing content.',
    value:
      'Faster preparation, more consistent explanations, and a reusable knowledge layer across the organisation.',
    controls: [
      'Retrieval restricted to approved, versioned sources',
      'Mandatory human review before client delivery',
      'Full interaction logging',
    ],
  },
  {
    id: 'investment-research',
    title: 'Investment Research',
    audience: 'Research & Advisory',
    problem:
      'Research output is long and dispersed; extracting the relevant part for a specific client conversation is manual work.',
    approach:
      'Summarisation and extraction over research documents with source links, scoped to what the client’s mandate actually covers.',
    value:
      'Shorter preparation cycles and more focused, evidence-linked conversations.',
    controls: [
      'Summaries linked to source paragraphs',
      'No generation of new investment opinions',
      'Analyst review before external use',
    ],
  },
  {
    id: 'market-news',
    title: 'Market News Summarization',
    audience: 'RM, Client',
    problem:
      'Clients are exposed to an overwhelming volume of market news, much of it irrelevant to their portfolio.',
    approach:
      'Tagging and summarisation of news against portfolio holdings and asset classes, with recency and source attribution.',
    value:
      'Relevant context instead of noise, delivered with clear provenance.',
    controls: [
      'Source and timestamp always displayed',
      'No forward-looking claims or forecasts generated',
      'Editorial oversight for client-facing digests',
    ],
  },
  {
    id: 'product-discovery',
    title: 'Product Discovery',
    audience: 'Client, RM',
    problem:
      'Clients cannot easily find products that match their objective, and keyword search does not understand intent.',
    approach:
      'Semantic search over the product catalogue combined with eligibility and target-market filtering applied server-side.',
    value:
      'Better discovery while governance rules remain enforced by the system, not by the interface.',
    controls: [
      'Target market and eligibility enforced before results are returned',
      'Results explain why a product is or is not shown',
      'No ranking optimised for commercial bias without disclosure',
    ],
  },
  {
    id: 'portfolio-insights',
    title: 'Portfolio Insights',
    audience: 'Client, RM',
    problem:
      'Portfolio data is available but rarely explained: clients see numbers without understanding drivers or concentrations.',
    approach:
      'Generated narratives over structured portfolio data — allocation, concentration, currency exposure — constrained to computed figures.',
    value:
      'More productive review conversations and better client understanding of their own portfolio.',
    controls: [
      'Narratives derived from computed data only',
      'No recommendation or action suggestion without human review',
      'Figures traceable to the portfolio snapshot used',
    ],
  },
  {
    id: 'client-communication',
    title: 'Client Communication',
    audience: 'RM',
    problem:
      'Drafting consistent, compliant client communications is repetitive and varies in quality between RMs.',
    approach:
      'Draft generation from approved templates and client context, reviewed and approved by the RM before sending.',
    value:
      'Consistent tone and disclosure quality, with less time spent on drafting.',
    controls: [
      'Templates sourced from approved content library',
      'Human approval required before sending',
      'Versioned record of what was sent',
    ],
  },
  {
    id: 'knowledge-retrieval',
    title: 'Knowledge Retrieval',
    audience: 'Operations, BA, Product',
    problem:
      'Process knowledge lives in documents that are hard to query; onboarding and change impact analysis are slow.',
    approach:
      'A single retrieval layer over process documentation, requirements and product rules, with freshness monitoring.',
    value:
      'Faster onboarding, faster impact analysis, and one authoritative source for process knowledge.',
    controls: [
      'Document ownership and review dates enforced',
      'Stale content excluded from retrieval',
      'Access governed by entitlement',
    ],
  },
  {
    id: 'operational-automation',
    title: 'Operational Automation',
    audience: 'Operations',
    problem:
      'Reconciliation breaks, exception queues and document checks consume manual effort and slow down client outcomes.',
    approach:
      'Extraction, classification and triage of operational exceptions with confidence thresholds and human decision points.',
    value:
      'Faster exception resolution and better management information on recurring issues.',
    controls: [
      'Confidence thresholds trigger human review',
      'Actions never executed without defined approval',
      'Every automated decision logged',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Conceptual architecture                                             */
/* ------------------------------------------------------------------ */

export const aiArchitecture = {
  layers: [
    {
      label: 'Input layer',
      title: 'Client / RM',
      detail:
        'The question or task enters from the client channel or from an RM workspace, with identity and entitlement established first.',
    },
    {
      label: 'Assistant layer',
      title: 'AI Assistant',
      detail:
        'Intent classification, guardrails, prompt construction and orchestration. This layer decides what the model is allowed to do.',
    },
    {
      label: 'Grounding layer',
      title: 'RAG / Knowledge Base',
      detail:
        'Retrieval over approved, versioned content. Retrieval is what turns a language model into a bank-controlled system.',
    },
    {
      label: 'Data layer',
      title: 'Financial Product Knowledge · Client Profile · Portfolio Data · Market Information',
      detail:
        'Each source has an owner, a version and an entitlement rule. Data quality here determines output quality downstream.',
    },
    {
      label: 'Output layer',
      title: 'Recommendation / Insight',
      detail:
        'A grounded response with citations, confidence signalling and explicit scope limits.',
    },
    {
      label: 'Control layer',
      title: 'Human Review',
      detail:
        'A qualified human approves, edits or rejects anything client-facing. This is the control that makes the system usable in a regulated context.',
    },
    {
      label: 'Delivery layer',
      title: 'Client',
      detail:
        'The reviewed output is delivered with disclosure that AI assistance was involved.',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Foundational concepts                                               */
/* ------------------------------------------------------------------ */

export const aiConcepts: { term: string; definition: string; tag?: string }[] = [
  {
    term: 'LLM (Large Language Model)',
    definition:
      'A model trained to predict and generate language. It is strong at summarising, structuring and rephrasing — and unreliable as a source of fact on its own.',
    tag: 'Model',
  },
  {
    term: 'RAG (Retrieval-Augmented Generation)',
    definition:
      'Retrieving approved content first, then generating an answer constrained to what was retrieved. This is how a bank keeps an LLM inside its own knowledge boundary.',
    tag: 'Architecture',
  },
  {
    term: 'Human-in-the-loop',
    definition:
      'A qualified person reviews, corrects or rejects output before it reaches a client. In regulated advice, this is a control, not a nice-to-have.',
    tag: 'Control',
  },
  {
    term: 'Explainability',
    definition:
      'Making it visible which sources and rules produced an output. Without it, a reviewer cannot exercise meaningful oversight.',
    tag: 'Control',
  },
  {
    term: 'Guardrails',
    definition:
      'Enforced boundaries: which topics are in scope, what must be escalated, and what must never be generated — applied before and after generation.',
    tag: 'Control',
  },
  {
    term: 'Data Quality',
    definition:
      'Retrieval quality is bounded by source quality. Ownership, versioning, review dates and freshness monitoring are part of the product, not an afterthought.',
    tag: 'Foundation',
  },
  {
    term: 'Auditability',
    definition:
      'The ability to reconstruct any interaction: the prompt, the retrieved sources, the response, the reviewer and the decision. Required by model risk management.',
    tag: 'Governance',
  },
]

export const aiControlCards = [
  { label: 'Guardrails', note: 'Applied before and after generation' },
  { label: 'Human-in-the-loop', note: 'Mandatory for client-facing output' },
  { label: 'Explainability', note: 'Sources visible to the reviewer' },
  { label: 'Auditability', note: 'Every interaction reconstructable' },
]

/** Supporting principles only — the governing principle ("AI assists
    decision-making…") is the headline of the pillar on the AI page and is
    intentionally not repeated here. */
export const aiPrinciples = [
  'Every output is grounded in approved sources and shows where it came from.',
  'Out-of-scope or low-confidence requests escalate to a human instead of guessing.',
  'Client data is only accessible within entitlement and data-protection rules.',
  'Interactions are logged so that any answer can be reconstructed later.',
]
