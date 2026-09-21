/* ------------------------------------------------------------------ */
/* Client journey map — digital mutual fund purchase                   */
/* ------------------------------------------------------------------ */

export const journeyMap = {
  persona: 'Accumulator — first-time digital investor (Affluent segment)',
  scenario:
    'Invests a monthly surplus into a diversified fund through the mobile app, with no branch visit and no prior advisory relationship.',
  stages: [
    'Aware',
    'Evaluate',
    'Choose',
    'Transact',
    'Own',
    'Review',
  ],
  lanes: [
    {
      lane: 'Client actions',
      cells: [
        'Notices surplus cash in the account view',
        'Browses the fund catalogue and compares two funds',
        'Reads costs, risk indicator and documents',
        'Completes risk profile, enters amount, confirms',
        'Waits for dealing, checks status',
        'Sees the holding in the portfolio and performance',
      ],
    },
    {
      lane: 'Questions in the client’s head',
      cells: [
        '“Should I be doing something with this money?”',
        '“How is this different from the other one?”',
        '“Is this suitable for me, and what does it cost?”',
        '“Did it actually go through?”',
        '“When will I see it, and is something wrong?”',
        '“Am I up or down, and should I add more?”',
      ],
    },
    {
      lane: 'Channel / touchpoint',
      cells: [
        'App dashboard, in-app insight',
        'Fund catalogue, filters, comparison',
        'Fund detail page, document viewer',
        'Risk profile, order capture, confirmation',
        'Order status, push notification',
        'Portfolio view, statement',
      ],
    },
    {
      lane: 'Systems & data',
      cells: [
        'Core banking balances, portfolio valuation',
        'Product catalogue, fund static and NAV data',
        'Document management, costs and risk rating',
        'Suitability engine, order management, core banking',
        'Transfer agent, settlement, notification service',
        'Portfolio engine, reporting service',
      ],
    },
    {
      lane: 'Business rules & controls',
      cells: [
        'Segment entitlement, cash availability',
        'Eligibility and target market filtering',
        'Disclosure acknowledgement, risk indicator display',
        'Suitability gate, minimums, pre-trade checks',
        'Cut-off and dealing cycle, status transparency',
        'Cost basis, performance methodology, statement SLA',
      ],
    },
    {
      lane: 'Pain points',
      cells: [
        'No prompt or next best action',
        'Comparison requires reading two separate pages',
        'Documents are long and not mobile-readable',
        'Suitability questions feel like an interrogation',
        'Status is invisible between order and dealing',
        'Performance shown without context or methodology',
      ],
    },
    {
      lane: 'Product opportunities',
      cells: [
        'Contextual insight: “you have surplus cash” with a clear next step',
        'Side-by-side comparison on costs, risk and holdings',
        'Layered disclosure: summary first, full document behind',
        'Explain why each question is asked; allow save and resume',
        'Proactive status with expected dealing date',
        'Explain drivers of performance in client language',
      ],
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Advisory journey map —HNW structured solution (condensed)           */
/* ------------------------------------------------------------------ */

export const advisoryJourneyMap = {
  persona: 'Business owner with concentrated risk (HNW segment)',
  scenario:
    'Discusses a defined-outcome structure with a relationship manager after receiving a foreign-currency payment.',
  stages: ['Trigger', 'Discover', 'Design', 'Assess', 'Subscribe', 'Live'],
  lanes: [
    {
      lane: 'Client actions',
      cells: [
        'Receives a large foreign-currency receipt',
        'Raises it with the RM during a review',
        'Explores scenarios and trade-offs',
        'Completes knowledge & experience assessment',
        'Subscribes during the offer period',
        'Monitors observation dates and coupons',
      ],
    },
    {
      lane: 'RM / bank actions',
      cells: [
        'Flags concentration and currency exposure',
        'Prepares options with product governance constraints',
        'Simulates payoff and explains downside first',
        'Runs enhanced suitability and captures rationale',
        'Submits subscription, receives allocation result',
        'Monitors lifecycle events and communicates them',
      ],
    },
    {
      lane: 'Systems & data',
      cells: [
        'Payments, portfolio concentration view',
        'Product shelf, structuring tools',
        'Scenario generator, term sheet data',
        'Eligibility and suitability engine',
        'Offer management, allocation engine',
        'Lifecycle monitoring, notification service',
      ],
    },
    {
      lane: 'Controls',
      cells: [
        'Entitlement and categorisation check',
        'Target market validation before showing an option',
        'Complexity acknowledgement, worst-case scenario shown',
        'Enhanced assessment; mismatch is a hard block',
        'Capacity check, scaling policy, audit of allocation',
        'Event monitoring with evidence of client communication',
      ],
    },
  ],
}
