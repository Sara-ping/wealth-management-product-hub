/* ------------------------------------------------------------------ */
/* Product Owner artefacts attached to each case study                 */
/* ------------------------------------------------------------------ */

export interface CaseStory {
  id: string
  asA: string
  iWant: string
  soThat: string
  acceptance: string[]
}

export interface CaseKpi {
  metric: string
  baseline: string
  target: string
  guardrail: string
}

export interface ApiContract {
  title: string
  endpoint: string
  request: string
  response: string
  notes: string[]
}

export interface CaseRisk {
  id: string
  risk: string
  control: string
  requirement: string
  evidence: string
}

export interface CasePoArtifacts {
  stories: CaseStory[]
  kpis: CaseKpi[]
  contract: ApiContract
  risks: CaseRisk[]
}

export const casePo: Record<string, CasePoArtifacts> = {
  /* ---------------------------------------------------------------- */
  'digital-mutual-fund-purchase': {
    stories: [
      {
        id: 'US-MF-01',
        asA: 'an affluent client investing through the mobile app',
        iWant: 'to complete a fund subscription in one session',
        soThat: 'I can act on my decision while I am still confident about it',
        acceptance: [
          'Given my profile is complete and in date, when I choose a fund within my risk capacity, then I can reach order confirmation without leaving the app',
          'Given the order is submitted, then I receive a reference number and the expected dealing date within 5 seconds',
          'Given the fund is dealt, then the holding appears in my portfolio with cost basis and units allocated',
          'Given any pre-trade check fails, then I see a specific reason and a next action rather than a generic error',
        ],
      },
      {
        id: 'US-MF-02',
        asA: 'a client comparing two funds',
        iWant: 'to see costs, risk and holdings side by side',
        soThat: 'the trade-off is explicit instead of implied',
        acceptance: [
          'Given I select two or more funds to compare, then ongoing charges, risk indicator, currency and top holdings are shown in one view',
          'Given a fund is ineligible for me, then it is excluded from comparison with a short explanation',
          'Given performance is shown, then it carries a period label and a statement that past performance is not a guide to future results',
        ],
      },
    ],
    kpis: [
      {
        metric: 'Completion rate (view → dealt)',
        baseline: '61%',
        target: '≥ 80%',
        guardrail: 'Suitability block rate between 3% and 9%',
      },
      {
        metric: 'Time to complete',
        baseline: '9m 40s',
        target: '≤ 5m',
        guardrail: 'Disclosure acknowledgement ≥ 99%',
      },
      {
        metric: 'Digital adoption (clients/quarter)',
        baseline: '22%',
        target: '≥ 40%',
        guardrail: 'Complaints per 1,000 orders does not increase',
      },
      {
        metric: 'Straight-through processing',
        baseline: '74%',
        target: '≥ 92%',
        guardrail: 'Exception queue age ≤ 1 business day',
      },
    ],
    contract: {
      title: 'Suitability assessment',
      endpoint: 'POST /suitability/assess',
      request: `{
  "clientId": "C-100238",
  "productId": "LU0292096186",
  "productType": "FUND",
  "riskProfileVersion": "v4-2026-03",
  "portfolioSnapshotId": "PS-88213",
  "channel": "MOBILE_ADVISORY",
  "requestedAmount": { "value": 5000, "currency": "EUR" }
}`,
      response: `{
  "assessmentId": "SA-77213",
  "outcome": "PASS_WITH_WARNING",
  "productRiskRating": 4,
  "clientRiskCapacity": 4,
  "clientRiskTolerance": 5,
  "appliedConstraint": "CAPACITY",
  "concentrationAfterTrade": { "fund": 0.18, "limit": 0.25 },
  "ruleVersion": "SUIT-RULES-2.6",
  "evaluatedAt": "2026-09-20T09:41:12Z",
  "warnings": ["FUND_CURRENCY_MISMATCH"],
  "requiresAcknowledgement": true
}`,
      notes: [
        'Outcome is computed server-side; the front end renders it and cannot override it',
        'Rule version is stored with the decision so history stays reconstructable',
        'Acknowledgement is required when the outcome is not a clean pass',
      ],
    },
    risks: [
      {
        id: 'RC-MF-01',
        risk: 'Client buys a fund above their risk capacity',
        control: 'Suitability gate before order capture',
        requirement: 'Blocking decision with reason and suitable alternatives',
        evidence: 'Decision record with inputs, rule version and outcome',
      },
      {
        id: 'RC-MF-02',
        risk: 'Order placed before key documents are read',
        control: 'Document acknowledgement gate before amount entry',
        requirement: 'Document ID, version and timestamp captured per client',
        evidence: 'Acknowledgement record linked to the order reference',
      },
      {
        id: 'RC-MF-03',
        risk: 'Client abandons because status is invisible after cut-off',
        control: 'Order status lifecycle with proactive notification',
        requirement: 'Expected dealing date shown on confirmation; status changes notified',
        evidence: 'Status history and notification delivery log',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  'bond-investment-journey': {
    stories: [
      {
        id: 'US-BD-01',
        asA: 'a client evaluating a bond',
        iWant: 'to see clean price, accrued interest and the amount I actually pay',
        soThat: 'the number on the confirmation matches my expectation',
        acceptance: [
          'Given an indicative price is displayed, then it is labelled indicative with a timestamp and validity window',
          'Given accrued interest applies, then it is shown as a separate line, not folded into the price',
          'Given I proceed, then the settlement amount equals clean price plus accrued interest plus disclosed fees',
          'Given the final price differs from indicative by more than tolerance, then I am re-quoted before booking',
        ],
      },
      {
        id: 'US-BD-02',
        asA: 'a client holding bonds to maturity',
        iWant: 'to see my future coupon and maturity cash flows',
        soThat: 'I can plan income rather than track it manually',
        acceptance: [
          'Given a settled bond position, then expected coupon dates, amounts and maturity are shown in a calendar',
          'Given a bond is callable, then this is flagged with the first call date and a complexity acknowledgement',
          'Given a rating or corporate action event occurs, then it is surfaced against the affected holding',
        ],
      },
    ],
    kpis: [
      {
        metric: 'Conversion rate (detail → order)',
        baseline: '34%',
        target: '≥ 55%',
        guardrail: 'Complexity acknowledgement rate = 100% for callable bonds',
      },
      {
        metric: 'Price re-quote rate',
        baseline: '11%',
        target: '≤ 4%',
        guardrail: 'No booking without client confirmation of the final price',
      },
      {
        metric: 'RM pricing requests handled manually',
        baseline: '100%',
        target: '≤ 25%',
        guardrail: 'Client comprehension spot-check pass rate ≥ 85%',
      },
    ],
    contract: {
      title: 'Indicative bond pricing',
      endpoint: 'POST /bonds/pricing',
      request: `{
  "isin": "US912828ZL36",
  "side": "BUY",
  "nominal": 100000,
  "currency": "USD",
  "settlementDate": "2026-09-24",
  "clientCategory": "PROFESSIONAL"
}`,
      response: `{
  "isin": "US912828ZL36",
  "cleanPrice": 98.42,
  "accruedInterest": 1.37,
  "dirtyPrice": 99.79,
  "settlementAmount": 99790.00,
  "yieldToMaturity": 4.31,
  "runningYield": 4.01,
  "modifiedDuration": 6.4,
  "spreadOverBenchmark": 0.32,
  "indicative": true,
  "validUntil": "2026-09-20T09:46:00Z",
  "priceSource": "INDEPENDENT_MARK",
  "asOf": "2026-09-20T09:41:12Z"
}`,
      notes: [
        'Indicative flag and validity are mandatory; the UI must never present this as executable',
        'Accrued interest is a separate field so it cannot be hidden inside the price',
        'Price source and as-of timestamp support best-execution and transparency obligations',
      ],
    },
    risks: [
      {
        id: 'RC-BD-01',
        risk: 'Client treats an indicative price as guaranteed',
        control: 'Indicative labelling, validity window, re-quote tolerance',
        requirement: 'Re-quote outside tolerance requires explicit client confirmation',
        evidence: 'Quote record with timestamp, tolerance and confirmation event',
      },
      {
        id: 'RC-BD-02',
        risk: 'Callable or perpetual features not understood',
        control: 'Complexity warning and mandatory acknowledgement',
        requirement: 'Journey blocked until the feature is acknowledged',
        evidence: 'Acknowledgement record with client and instrument reference',
      },
      {
        id: 'RC-BD-03',
        risk: 'Inventory shown as available but not executable',
        control: 'Inventory check at order time',
        requirement: 'Order rejected if quantity unavailable; client informed immediately',
        evidence: 'Inventory check result stored against the order',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  'structured-product-subscription': {
    stories: [
      {
        id: 'US-SP-01',
        asA: 'a client within the approved target market',
        iWant: 'to see the payoff under unfavourable conditions before subscribing',
        soThat: 'I understand the conditions that put my capital at risk',
        acceptance: [
          'Given I open the product, then favourable, moderate, unfavourable and stress scenarios are shown with assumptions',
          'Given the barrier and observation convention exist, then both are stated in the same view',
          'Given I have not opened the scenario view, then the amount step is disabled',
          'Given I subscribe, then the scenario set and version I saw are stored with the subscription',
        ],
      },
      {
        id: 'US-SP-02',
        asA: 'a product governance owner',
        iWant: 'allocation applied consistently and auditable',
        soThat: 'scaling decisions can be defended to clients and supervisors',
        acceptance: [
          'Given subscriptions exceed capacity, then the allocation policy is applied to every subscription identically',
          'Given an allocation is made, then the applied policy, version and result are stored per subscription',
          'Given a client queries their allocation, then the calculation can be reproduced from stored inputs',
        ],
      },
    ],
    kpis: [
      {
        metric: 'Scenario view completion before subscription',
        baseline: '48%',
        target: '≥ 95%',
        guardrail: 'Cancellation rate ≤ 2%',
      },
      {
        metric: 'Eligibility pass rate of interested clients',
        baseline: 'n/a',
        target: 'Tracked, not maximised',
        guardrail: 'Zero subscriptions outside target market',
      },
      {
        metric: 'Allocation dispute rate',
        baseline: '6 per offer',
        target: '≤ 1 per offer',
        guardrail: '100% of allocations reproducible from stored inputs',
      },
      {
        metric: 'Offer setup effort',
        baseline: '3 days manual',
        target: '≤ 2 hours configured',
        guardrail: 'Zero offers launched without governance sign-off recorded',
      },
    ],
    contract: {
      title: 'Subscription capture',
      endpoint: 'POST /subscriptions',
      request: `{
  "offerId": "SP-2026-014",
  "clientId": "C-100238",
  "amount": { "value": 250000, "currency": "EUR" },
  "eligibilityRef": "EL-90211",
  "knowledgeAssessmentRef": "KE-3321",
  "acknowledgements": [
    { "documentId": "KID-SP-2026-014", "version": "1.2" },
    { "documentId": "TS-SP-2026-014", "version": "2.0" }
  ],
  "scenarioSetRef": "SC-8871"
}`,
      response: `{
  "subscriptionId": "SUB-5401",
  "status": "RECEIVED",
  "offerId": "SP-2026-014",
  "requestedAmount": { "value": 250000, "currency": "EUR" },
  "capacityRemaining": 1750000,
  "scalingPossible": true,
  "allocationPolicyVersion": "ALLOC-3.1",
  "submittedAt": "2026-09-20T09:41:12Z",
  "coolingOffEndsAt": "2026-09-27T23:59:00Z"
}`,
      notes: [
        'Eligibility and knowledge references must exist and be current before the call is accepted',
        'Document versions are captured at subscription time, not at display time',
        'Scaling is previewed so the client is not surprised by a partial allocation',
      ],
    },
    risks: [
      {
        id: 'RC-SP-01',
        risk: 'Product sold outside approved target market',
        control: 'Eligibility gate at catalogue, detail and subscription time',
        requirement: 'Fail closed; ineligible clients never see the offer',
        evidence: 'Eligibility evaluation log with target market version',
      },
      {
        id: 'RC-SP-02',
        risk: 'Complexity misunderstanding leads to mis-selling complaint',
        control: 'Mandatory scenario disclosure with unfavourable and stress cases',
        requirement: 'Scenario set reference stored with every subscription',
        evidence: 'Scenario view event and stored scenario set version',
      },
      {
        id: 'RC-SP-03',
        risk: 'Inconsistent or unexplainable allocation',
        control: 'Allocation engine with versioned policy and full audit',
        requirement: 'Every allocation reproducible from stored inputs',
        evidence: 'Allocation record per subscription with policy version',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  'ai-wealth-advisor': {
    stories: [
      {
        id: 'US-AI-01',
        asA: 'a relationship manager preparing for a client meeting',
        iWant: 'sourced answers from approved internal knowledge',
        soThat: 'I can prepare faster without risking an unverified statement',
        acceptance: [
          'Given I ask a question, then the answer cites the approved sources it used with version and effective date',
          'Given no approved source is found, then the assistant states this rather than generating an answer',
          'Given retrieved content is out of date by policy, then it is excluded from retrieval',
          'Given confidence is below threshold, then the response is routed for human review automatically',
        ],
      },
      {
        id: 'US-AI-02',
        asA: 'a client-facing reviewer',
        iWant: 'to approve, edit or reject AI drafts with my decision recorded',
        soThat: 'accountability for client communication remains human',
        acceptance: [
          'Given a draft is submitted, then approve / edit / reject are available and the reviewer identity is captured',
          'Given an edit is made, then original and edited text are both retained',
          'Given a prohibited topic is requested, then the request is blocked before generation and logged',
          'Given a response was sent, then the full interaction can be reconstructed from the audit log',
        ],
      },
    ],
    kpis: [
      {
        metric: 'Answer accuracy (golden set)',
        baseline: 'n/a',
        target: '≥ 90%',
        guardrail: 'Citation coverage = 100% on substantive claims',
      },
      {
        metric: 'Escalation rate to human specialist',
        baseline: 'n/a',
        target: '8–15%',
        guardrail: 'Never below 5% — low escalation means low confidence detection',
      },
      {
        metric: 'Median time to reviewed answer',
        baseline: '18 min (manual search)',
        target: '≤ 6 min',
        guardrail: '100% of client-facing answers reviewed',
      },
      {
        metric: 'RM weekly adoption',
        baseline: '0%',
        target: '≥ 60%',
        guardrail: 'Zero unreviewed client-facing outputs',
      },
    ],
    contract: {
      title: 'Grounded generation with review',
      endpoint: 'POST /assistant/generate',
      request: `{
  "conversationId": "CV-9921",
  "question": "Which funds on our shelf match a moderate risk profile?",
  "scope": "PRODUCT_KNOWLEDGE",
  "entitlements": ["RETAIL_SHELF_EU"],
  "maxSources": 5,
  "requireCitations": true
}`,
      response: `{
  "answerId": "AN-4471",
  "status": "PENDING_REVIEW",
  "scope": "PRODUCT_KNOWLEDGE",
  "confidence": 0.82,
  "citations": [
    { "documentId": "FUND-SHELF-2026", "version": "3.4", "chunk": "c-118" },
    { "documentId": "SUIT-POLICY", "version": "2.6", "chunk": "c-42" }
  ],
  "guardrailDecisions": [
    { "check": "PERSONALISED_ADVICE", "result": "BLOCKED" },
    { "check": "ENTITLEMENT", "result": "PASS" }
  ],
  "reviewTaskId": "RV-1180",
  "draft": "…"
}`,
      notes: [
        'Status PENDING_REVIEW means nothing is delivered to a client until a human approves',
        'Guardrail decisions are logged before generation, not after',
        'Citations reference a document version so the knowledge base can be audited',
      ],
    },
    risks: [
      {
        id: 'RC-AI-01',
        risk: 'Ungrounded or hallucinated content',
        control: 'Retrieval-augmented generation with citations and "not found" behaviour',
        requirement: 'No answer without at least one approved source',
        evidence: 'Answer record with citation list and retrieval snapshot',
      },
      {
        id: 'RC-AI-02',
        risk: 'Output interpreted as personalised advice',
        control: 'Scope classification and pre-generation guardrails',
        requirement: 'Prohibited intents blocked and logged before generation',
        evidence: 'Guardrail decision log per interaction',
      },
      {
        id: 'RC-AI-03',
        risk: 'Client data exposed beyond entitlement',
        control: 'Entitlement filtering at retrieval, data minimisation',
        requirement: 'Retrieval limited to sources the user is entitled to',
        evidence: 'Entitlement decision stored per retrieval call',
      },
    ],
  },
}
