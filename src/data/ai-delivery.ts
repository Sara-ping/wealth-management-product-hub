/* ------------------------------------------------------------------ */
/* AI delivery: how an AI feature is actually shipped in a bank        */
/* ------------------------------------------------------------------ */

export const buildVsBuy = [
  {
    decision: 'Model hosting',
    buy: 'External LLM provider with enterprise controls',
    build: 'Internal or fine-tuned model',
    poView:
      'Buy for speed, but require: data residency, no training on our data, prompt/response logging, and an exit path to another provider.',
  },
  {
    decision: 'Retrieval layer',
    buy: 'Managed vector search',
    build: 'In-house retrieval pipeline',
    poView:
      'Usually build the ingestion and ownership model in-house — the value is the curated, versioned corpus, not the vector store.',
  },
  {
    decision: 'Orchestration & guardrails',
    buy: 'Framework defaults',
    build: 'Bank-owned policy layer',
    poView:
      'Build. Guardrails encode regulatory scope; they must be testable, versioned and owned by a named function.',
  },
  {
    decision: 'Evaluation harness',
    buy: 'Vendor scoring tools',
    build: 'Golden question set + human scoring',
    poView:
      'Build. The evaluation set is the product’s specification — it defines what "correct" means for our context.',
  },
]

export const rolloutPhases = [
  {
    phase: 'P0 — Internal only',
    scope: 'Knowledge retrieval for operations and BA teams, no client data',
    control: 'Sources restricted to internal process documentation',
    exit: 'Accuracy ≥ 85% on golden set; zero prohibited-topic breaches',
  },
  {
    phase: 'P1 — RM copilot (internal)',
    scope: 'Product and process Q&A for RMs, citations mandatory',
    control: 'Every answer cited; no client-specific data in this phase',
    exit: 'Accuracy ≥ 90%; citation coverage 100%; RM satisfaction ≥ 4/5',
  },
  {
    phase: 'P2 — Human-reviewed client output',
    scope: 'Draft responses prepared for clients, mandatory review before sending',
    control: 'Reviewer identity captured; original and edited text retained',
    exit: '100% reviewed before send; zero unreviewed deliveries',
  },
  {
    phase: 'P3 — Assisted client channel',
    scope: 'Client-facing conversational assistance with clear AI disclosure',
    control: 'Scope limits, escalation to human, full interaction logging',
    exit: 'Complaint rate within baseline; escalation rate ≥ 8%; audit complete',
  },
]

export const evaluationHarness = [
  {
    dimension: 'Groundedness',
    method: 'Every claim checked against retrieved sources by a reviewer',
    threshold: '100% of substantive claims cited',
  },
  {
    dimension: 'Accuracy',
    method: 'Golden question set scored by subject-matter experts',
    threshold: '≥ 90% correct before phase exit',
  },
  {
    dimension: 'Scope adherence',
    method: 'Prohibited-intent test suite run on every prompt change',
    threshold: '0 breaches tolerated',
  },
  {
    dimension: 'Refusal quality',
    method: 'Out-of-scope questions must escalate, not improvise',
    threshold: '≥ 95% correct escalation behaviour',
  },
  {
    dimension: 'Consistency',
    method: 'Same question asked three times must produce equivalent answers',
    threshold: 'No material divergence in facts or figures',
  },
  {
    dimension: 'Freshness',
    method: 'Retrieval checks document review dates and excludes stale content',
    threshold: '0 answers sourced from expired documents',
  },
]

export const aiKpis = [
  { metric: 'Answer accuracy', target: '≥ 90%', why: 'Trust is the product' },
  { metric: 'Citation coverage', target: '100%', why: 'Explainability requirement' },
  { metric: 'Escalation rate', target: '8–15%', why: 'Too low means false confidence' },
  { metric: 'Time to reviewed answer', target: '≤ 6 min', why: 'The actual value delivered' },
  { metric: 'RM weekly adoption', target: '≥ 60%', why: 'Adoption without mandate' },
  { metric: 'Unreviewed client outputs', target: '0', why: 'Non-negotiable control' },
]
