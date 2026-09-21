import type { JourneyStage } from '@/components/ui/interactive'

/* ------------------------------------------------------------------ */
/* Digital wealth management journey — 13 stages                       */
/* ------------------------------------------------------------------ */

export const digitalJourney: JourneyStage[] = [
  {
    id: 'mobile-app',
    title: 'Mobile App',
    summary:
      'The entry point of digital wealth: a channel that must be secure, fast and legible for clients who may never visit a branch.',
    businessObjective: [
      'Provide 24/7 access to portfolio, products and transactions',
      'Reduce dependency on branch and call-centre capacity',
      'Create a single, consistent brand experience across devices',
    ],
    businessRules: [
      'Device binding and app integrity checks before sensitive actions',
      'Session timeout and re-authentication rules per risk classification',
      'Feature availability depends on client segment and jurisdiction',
    ],
    data: [
      'Device and app metadata',
      'Session state and consent records',
      'Client entitlements and feature flags',
    ],
    system: ['Mobile front end', 'API gateway', 'Feature flag service', 'Analytics'],
    api: [
      'POST /auth/device-binding',
      'GET /clients/{id}/entitlements',
      'GET /config/features',
    ],
    validation: [
      'App version compatibility check',
      'Jailbreak/root detection where permitted',
      'Entitlement verification before rendering wealth features',
    ],
    exceptionHandling: [
      'Unsupported version → soft prompt to update with read-only fallback',
      'Integrity failure → block sensitive actions, allow informational access',
      'Feature unavailable → clear messaging, no dead ends',
    ],
    audit: [
      'Session and device events retained with timestamps',
      'Consent and disclosure events recorded',
      'Feature access changes traceable for supervision',
    ],
  },
  {
    id: 'authentication',
    title: 'Authentication',
    summary:
      'Proving who the client is, with a level of assurance proportional to the action being performed.',
    businessObjective: [
      'Protect client assets and data against unauthorised access',
      'Meet strong customer authentication expectations',
      'Keep friction proportionate to risk',
    ],
    businessRules: [
      'Step-up authentication required for transactions and profile changes',
      'Locked accounts after defined failed attempts',
      'Biometric login permitted only on enrolled devices',
      'Authentication method availability depends on jurisdiction',
    ],
    data: ['Credentials', 'Authentication factors', 'Risk signals (device, location, velocity)'],
    system: ['Identity platform', 'Risk engine', 'Notification service'],
    api: [
      'POST /auth/login',
      'POST /auth/mfa/challenge',
      'POST /auth/step-up',
      'POST /auth/logout',
    ],
    validation: [
      'Credential format and lockout state checks',
      'OTP expiry and attempt limits',
      'Step-up requirement evaluated per transaction risk',
    ],
    exceptionHandling: [
      'Failed MFA → retry with clear error, no disclosure of which factor failed',
      'Account lock → guided recovery path',
      'Risk signal anomaly → step-up or temporary block with notification',
    ],
    audit: [
      'Authentication attempts, successes and failures logged',
      'Step-up triggers and outcomes retained',
      'Account recovery actions fully reconstructable',
    ],
  },
  {
    id: 'customer-profile',
    title: 'Customer Profile',
    summary:
      'The single view of the client: identity, segment, categorisation, residency and contactability.',
    businessObjective: [
      'Know the client well enough to serve and protect them',
      'Drive segmentation, eligibility and personalisation',
      'Satisfy KYC and ongoing due diligence obligations',
    ],
    businessRules: [
      'Client categorisation determines product access',
      'Residency and tax domicile drive eligibility and reporting',
      'Material changes trigger review of profile and suitability',
      'Contactability must be verified for notifications',
    ],
    data: [
      'Identity and contact data',
      'Segment, categorisation, residency, tax domicile',
      'KYC status and review dates',
    ],
    system: ['CRM / client master', 'KYC platform', 'Consent management'],
    api: [
      'GET /clients/{id}',
      'PATCH /clients/{id}',
      'GET /clients/{id}/kyc-status',
      'POST /consents',
    ],
    validation: [
      'Mandatory field completeness before wealth features unlock',
      'Document expiry checks',
      'Change-of-circumstance detection',
    ],
    exceptionHandling: [
      'Incomplete profile → guided completion with blocking of transactions',
      'Expired KYC → restricted functionality and review workflow',
      'Data conflict → manual review task for operations',
    ],
    audit: [
      'Profile change history with maker-checker evidence',
      'KYC review records and decisions',
      'Consent capture and withdrawal trail',
    ],
  },
  {
    id: 'risk-profile',
    title: 'Risk Profile',
    summary:
      'Assessing capacity and tolerance for risk, producing the reference point used by every suitability decision.',
    businessObjective: [
      'Establish a defensible basis for product recommendations and execution',
      'Separate what the client can afford to lose from what they are willing to lose',
      'Create a versioned, time-stamped assessment record',
    ],
    businessRules: [
      'Assessment required before investment transactions',
      'Capacity for loss constrains product risk rating',
      'Profile expires after a defined period or on material change',
      'Answers must be captured exactly as submitted for reconstruction',
    ],
    data: [
      'Questionnaire responses and scoring',
      'Risk capacity and tolerance results',
      'Version, assessment date and expiry',
    ],
    system: ['Suitability engine', 'Client profile', 'Document store'],
    api: [
      'GET /clients/{id}/risk-profile',
      'POST /risk-profile/assess',
      'GET /risk-profile/{id}/versions',
    ],
    validation: [
      'All mandatory questions answered',
      'Inconsistent answer patterns flagged for review',
      'Expiry checked at transaction time, not only at display time',
    ],
    exceptionHandling: [
      'Inconsistent answers → RM review or guided clarification',
      'Expired profile → re-assessment required before ordering',
      'Capacity lower than tolerance → the lower constraint applies',
    ],
    audit: [
      'Full questionnaire response history per version',
      'Scoring logic version used for each assessment',
      'Re-assessment triggers and outcomes',
    ],
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    summary:
      'The client’s consolidated position: holdings, valuation, performance and allocation across asset classes and currencies.',
    businessObjective: [
      'Give clients an accurate, understandable view of what they own',
      'Enable allocation and concentration discussions',
      'Provide the context for every subsequent product decision',
    ],
    businessRules: [
      'Valuation uses defined price sources and valuation timestamps',
      'Asset allocation follows the bank’s classification taxonomy',
      'Unrealised gain/loss computed against documented cost basis',
      'Pending transactions and corporate actions shown distinctly',
    ],
    data: [
      'Positions, quantities and cost basis',
      'Market prices and FX rates',
      'Pending orders and corporate actions',
    ],
    system: ['Portfolio engine', 'Market data service', 'Custody records'],
    api: [
      'GET /portfolio/{id}/positions',
      'GET /portfolio/{id}/valuation',
      'GET /portfolio/{id}/allocation',
      'GET /portfolio/{id}/performance',
    ],
    validation: [
      'Price freshness validation',
      'Currency conversion rate source and timestamp',
      'Reconciliation between custody and portfolio records',
    ],
    exceptionHandling: [
      'Stale price → display “as of” timestamp rather than a misleading value',
      'Reconciliation break → flag for operations, keep client view stable',
      'Missing FX rate → suppress converted value instead of estimating',
    ],
    audit: [
      'Valuation source and timestamp per snapshot',
      'Performance methodology disclosed and versioned',
      'Reconciliation exceptions logged and resolved',
    ],
  },
  {
    id: 'product-catalogue',
    title: 'Product Catalogue',
    summary:
      'The curated shelf: what the bank is willing to distribute, to which client segment, with which restrictions.',
    businessObjective: [
      'Help clients find relevant products without overwhelming them',
      'Enforce product governance and target market rules',
      'Create a consistent product data foundation across channels',
    ],
    businessRules: [
      'Only approved products on the shelf are visible',
      'Target market and segment filters applied server-side',
      'Restricted products hidden, never merely disabled',
      'Product data freshness monitored and alerted',
    ],
    data: [
      'Product static data and classifications',
      'Target market definitions',
      'Restricted lists and eligibility flags',
    ],
    system: ['Product catalogue service', 'Product governance repository', 'Search index'],
    api: [
      'GET /products?filters',
      'GET /products/{id}/eligibility',
      'GET /products/{id}/documents',
    ],
    validation: [
      'Eligibility re-checked at request time',
      'Data completeness checks before publication',
      'Search index consistency with source of truth',
    ],
    exceptionHandling: [
      'Incomplete product data → suppress product from catalogue',
      'Eligibility failure → no result rather than greyed-out option',
      'Search service unavailable → degrade to category browsing',
    ],
    audit: [
      'Shelf approval and deactivation records',
      'Restriction list versions and application logs',
      'Product data change history',
    ],
  },
  {
    id: 'product-details',
    title: 'Product Details',
    summary:
      'Where understanding happens: objective, mechanics, costs, risk indicators, scenarios and documentation.',
    businessObjective: [
      'Enable an informed decision before commitment',
      'Standardise disclosure across products and channels',
      'Reduce post-sale complaints caused by misunderstanding',
    ],
    businessRules: [
      'Risk indicator and costs displayed in a standardised format',
      'Documents (KID/KIID, prospectus, terms) available before ordering',
      'Scenario disclosure required for complex products',
      'Performance history shown with clear “not a guide to future results” context',
    ],
    data: [
      'Product reference data and documents',
      'Risk indicators and cost figures',
      'Performance series and holdings',
    ],
    system: ['Product service', 'Document management', 'Market data'],
    api: [
      'GET /products/{id}',
      'GET /products/{id}/costs',
      'GET /products/{id}/scenarios',
      'GET /products/{id}/performance',
    ],
    validation: [
      'Document version current and jurisdiction-appropriate',
      'Performance series continuity and currency consistency',
      'Cost figures match the official disclosure document',
    ],
    exceptionHandling: [
      'Missing document → block progression to order',
      'Data gap → label explicitly as unavailable',
      'Cost mismatch → fail closed and raise data issue',
    ],
    audit: [
      'Which document version was shown to which client',
      'Disclosure presentation timestamps',
      'Acknowledgement records',
    ],
  },
  {
    id: 'suitability',
    title: 'Suitability',
    summary:
      'The control point: matching product characteristics to the client’s profile, with an outcome that is recorded and enforceable.',
    businessObjective: [
      'Protect clients from products inconsistent with their profile',
      'Produce evidence that the assessment was performed and how it concluded',
      'Give RMs a clear, explainable outcome rather than a black box',
    ],
    businessRules: [
      'Product risk rating compared against client risk capacity',
      'Complexity and liquidity considered alongside risk rating',
      'Concentration limits applied across the existing portfolio',
      'Mismatch results are blocking, not advisory, in advisory journeys',
    ],
    data: [
      'Client risk profile version',
      'Product classifications and risk rating',
      'Existing portfolio concentrations',
      'Assessment outcome and rationale',
    ],
    system: ['Suitability engine', 'Portfolio engine', 'Product service'],
    api: [
      'POST /suitability/assess',
      'GET /suitability/{id}/outcome',
      'GET /clients/{id}/suitability-history',
    ],
    validation: [
      'Profile version validated as current',
      'Product classification validated against governance repository',
      'Concentration computed on latest portfolio snapshot',
    ],
    exceptionHandling: [
      'Mismatch → block order, explain reason, offer suitable alternatives',
      'Warning outcome → mandatory acknowledgement before continuing',
      'Engine unavailable → do not proceed; queue the request',
    ],
    audit: [
      'Input snapshot, rule version, outcome and timestamp',
      'Acknowledgements and overrides with approver identity',
      'Reconstruction of the decision for supervisory review',
    ],
  },
  {
    id: 'order',
    title: 'Order',
    summary:
      'Capturing intent: instrument, side, amount, account, order type and the client’s explicit confirmation.',
    businessObjective: [
      'Convert a decision into an instruction accurately and completely',
      'Ensure the client sees amount, fees and conditions before commitment',
      'Minimise errors that create downstream operational cost',
    ],
    businessRules: [
      'Amount validated against minimum, increment and available balance',
      'Order type and validity constraints enforced per instrument',
      'Fee and total consideration previewed before submission',
      'Explicit confirmation step required — no implicit submission',
    ],
    data: [
      'Instrument and account identifiers',
      'Amount, currency, order type, validity',
      'Fee calculation inputs and result',
    ],
    system: ['Order management', 'Core banking', 'Pricing service'],
    api: ['POST /orders/preview', 'POST /orders', 'GET /orders/{ref}'],
    validation: [
      'Balance and availability check',
      'Minimum and increment rules per instrument',
      'Cut-off and market-open validation',
    ],
    exceptionHandling: [
      'Insufficient balance → clear shortfall message, no partial guess',
      'Market closed → next session scheduling',
      'Duplicate submission → idempotency key prevents double order',
    ],
    audit: [
      'Order payload as submitted',
      'Fee preview shown to the client',
      'Idempotency and duplicate protection evidence',
    ],
  },
  {
    id: 'pre-trade-checks',
    title: 'Pre-Trade Checks',
    summary:
      'The final gate before the market: restrictions, eligibility, documentation, limits and compliance screening.',
    businessObjective: [
      'Prevent ineligible, restricted or non-compliant orders from reaching execution',
      'Catch data and entitlement issues while they are still cheap to fix',
      'Demonstrate that controls operate before, not after, the trade',
    ],
    businessRules: [
      'Restricted and closed lists checked against client and instrument',
      'Document acknowledgements must exist and be current',
      'Sanctions and AML screening completed',
      'Client limits and concentration caps applied',
    ],
    data: [
      'Restricted list versions',
      'Acknowledgement records',
      'Screening results and limit utilisation',
    ],
    system: ['Pre-trade control service', 'Compliance screening', 'Limits engine'],
    api: [
      'POST /pretrade/check',
      'GET /restrictions/status',
      'POST /screening/check',
    ],
    validation: [
      'All mandatory checks return a definitive result',
      'No check may be skipped by the front end',
      'Results evaluated against the current order payload',
    ],
    exceptionHandling: [
      'Restriction hit → block with reference to policy, escalate if disputed',
      'Screening hit → compliance workflow, order held',
      'Check timeout → fail closed; no silent pass',
    ],
    audit: [
      'Every check result with version and timestamp',
      'Blocked attempts and escalation outcomes',
      'Evidence of fail-closed behaviour on service failure',
    ],
  },
  {
    id: 'execution',
    title: 'Execution',
    summary:
      'Sending the order to market or to the fund’s dealing cycle, under best-execution and transparency obligations.',
    businessObjective: [
      'Achieve the best reasonable outcome for the client under the circumstances',
      'Provide timely confirmation and a reliable order status',
      'Maintain market integrity and conduct standards',
    ],
    businessRules: [
      'Routing determined by instrument, venue and execution policy',
      'Funds dealt according to cut-off and dealing cycle',
      'Bonds and OTC instruments priced and confirmed before booking',
      'Partial fills and allocations handled with defined client communication',
    ],
    data: [
      'Order routing decisions and venue',
      'Execution price, quantity and timestamp',
      'Allocation results for fund or primary deals',
    ],
    system: ['Execution management', 'Market connectivity', 'Fund transfer agent'],
    api: ['POST /execution/route', 'GET /execution/{ref}', 'Event: order.executed'],
    validation: [
      'Price tolerance versus indicative quote',
      'Quantity within order constraints',
      'Venue eligibility per execution policy',
    ],
    exceptionHandling: [
      'Price outside tolerance → re-quote or cancel with client notification',
      'Rejection from venue → reason mapped to client-readable message',
      'Partial fill → status and next steps communicated',
    ],
    audit: [
      'Execution venue, timestamp and price',
      'Best-execution monitoring data',
      'Routing decision rationale',
    ],
  },
  {
    id: 'settlement',
    title: 'Settlement',
    summary:
      'Completing the transaction: cash movement, security delivery, confirmation and reconciliation.',
    businessObjective: [
      'Ensure the client receives what they bought and pays what they owe',
      'Minimise settlement fails and their operational cost',
      'Give clients visibility of status without needing to ask',
    ],
    businessRules: [
      'Settlement cycle derived from instrument and market convention',
      'Cash debited and securities credited per settlement instruction',
      'Fails monitored, escalated and resolved under defined SLAs',
      'Corporate actions applied to settled positions',
    ],
    data: [
      'Settlement instructions and status',
      'Cash and securities balances',
      'Fail and reconciliation records',
    ],
    system: ['Settlement engine', 'Custody', 'Core banking'],
    api: ['GET /settlement/{ref}', 'POST /settlement/instructions', 'Event: settlement.completed'],
    validation: [
      'Instruction completeness before submission',
      'Balance sufficiency at value date',
      'Reconciliation between internal and external records',
    ],
    exceptionHandling: [
      'Settlement fail → client notification with revised timeline',
      'Instruction break → operations queue with priority',
      'Late matching → escalation and monitoring',
    ],
    audit: [
      'Instruction lifecycle and status changes',
      'Fail causes and resolution evidence',
      'Reconciliation results',
    ],
  },
  {
    id: 'portfolio-update',
    title: 'Portfolio Update',
    summary:
      'Closing the loop: the client sees the new position, its cost basis and its effect on allocation and performance.',
    businessObjective: [
      'Make the outcome of the transaction immediately visible and correct',
      'Reinforce trust through accurate, timely reporting',
      'Trigger the next conversation: rebalancing, income or review',
    ],
    businessRules: [
      'Positions updated only after settlement confirmation',
      'Cost basis and fees reflected in performance calculations',
      'Allocation and concentration recalculated after update',
      'Statements and confirmations generated per regulatory timeline',
    ],
    data: ['Updated positions and cost basis', 'Recalculated allocation', 'Confirmations and statements'],
    system: ['Portfolio engine', 'Reporting service', 'Notification service'],
    api: ['GET /portfolio/{id}/positions', 'GET /portfolio/{id}/allocation', 'GET /statements/{id}'],
    validation: [
      'Consistency between custody and portfolio records',
      'Performance recalculated with the same methodology',
      'Notification delivered to verified contact channels',
    ],
    exceptionHandling: [
      'Update delay → status shown rather than stale value',
      'Calculation break → hold reporting and raise incident',
      'Notification failure → retry and fallback channel',
    ],
    audit: [
      'Portfolio snapshot versions',
      'Statement generation and delivery records',
      'Correction history with reason codes',
    ],
  },
]
