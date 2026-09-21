import type { ReactNode } from 'react'
import { Badge, Panel } from '@/components/ui/primitives'
import { DataTable } from '@/components/ui/diagrams'
import { useI18n } from '@/i18n/LanguageContext'

/* ------------------------------------------------------------------ */
/* User story + acceptance criteria                                    */
/* ------------------------------------------------------------------ */

export function UserStoryCard({
  id,
  asA,
  iWant,
  soThat,
  acceptance,
}: {
  id: string
  asA: string
  iWant: string
  soThat: string
  acceptance: string[]
}) {
  const { lang, ui: t } = useI18n()
  return (
    <div className="overflow-hidden rounded-[4px] border border-line bg-white">
      <div className="flex items-start justify-between gap-4 border-b border-line bg-paper px-5 py-3.5">
        <p className="num text-[0.62rem] uppercase tracking-[0.14em] text-gold-600">
          {id}
        </p>
        <Badge tone="navy">{t.common.userStory}</Badge>
      </div>
      <div className="px-5 py-5">
        <p className="text-sm leading-relaxed text-ink-soft">
          <span className="font-medium text-navy-900">{t.common.storyParts.as}</span>{' '}
          {asA}
          {lang === 'zh' ? '，' : ', '}
          <span className="font-medium text-navy-900">
            {t.common.storyParts.want}
          </span>{' '}
          {iWant}
          {lang === 'zh' ? '，' : ', '}
          <span className="font-medium text-navy-900">
            {t.common.storyParts.soThat}
          </span>{' '}
          {soThat}
          {lang === 'zh' ? '。' : '.'}
        </p>
        <div className="mt-5">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
            {t.common.acceptanceCriteria}
          </p>
          <ul className="mt-3 space-y-2">
            {acceptance.map((a) => (
              <li
                key={a}
                className="flex gap-2.5 rounded-[3px] border-l-2 border-gold-500/60 bg-paper/60 px-3 py-2 text-sm leading-relaxed text-ink-soft"
              >
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* KPI table with baseline / target / guardrail                        */
/* ------------------------------------------------------------------ */

export function KpiTable({
  rows,
  columns,
}: {
  rows: string[][]
  columns: string[]
}) {
  return (
    <div className="overflow-hidden rounded-[4px] border border-line bg-white">
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line bg-paper-2/70">
              {columns.map((c) => (
                <th
                  key={c}
                  scope="col"
                  className="px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-faint"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.join('|')}
                className={`border-b border-line last:border-0 ${
                  i % 2 === 1 ? 'bg-paper/60' : ''
                }`}
              >
                {row.map((cell, j) => (
                  <td
                    key={`${i}-${j}`}
                    className={`px-4 py-3.5 align-top text-sm leading-relaxed ${
                      j === 0
                        ? 'font-medium text-navy-900'
                        : j === 2
                          ? 'num text-navy-900'
                          : j === 1
                            ? 'num text-muted'
                            : 'text-ink-soft'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* API contract block                                                  */
/* ------------------------------------------------------------------ */

export function ApiContractBlock({
  title,
  endpoint,
  request,
  response,
  notes,
}: {
  title: string
  endpoint: string
  request: string
  response: string
  notes: string[]
}) {
  const t = useI18n().ui
  return (
    <div className="overflow-hidden rounded-[4px] border border-line bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
        <div>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
            {title}
          </p>
          <p className="num mt-1 text-[0.78rem] text-navy-900">{endpoint}</p>
        </div>
        <Badge tone="teal">{t.cases.apiContract}</Badge>
      </div>

      <div className="grid gap-px bg-line lg:grid-cols-2">
        <div className="bg-navy-950 p-4">
          <p className="mb-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-gold-400">
            {t.cases.request}
          </p>
          <pre className="overflow-x-auto no-scrollbar text-[0.72rem] leading-relaxed text-white/75">
            <code>{request}</code>
          </pre>
        </div>
        <div className="bg-navy-950 p-4">
          <p className="mb-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-gold-400">
            {t.cases.response}
          </p>
          <pre className="overflow-x-auto no-scrollbar text-[0.72rem] leading-relaxed text-white/75">
            <code>{response}</code>
          </pre>
        </div>
      </div>

      <div className="border-t border-line bg-paper px-5 py-4">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
          {t.cases.contractWhy}
        </p>
        <ul className="mt-2.5 space-y-1.5">
          {notes.map((n) => (
            <li key={n} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Risk & compliance register                                          */
/* ------------------------------------------------------------------ */

export function RiskRegisterTable({
  rows,
}: {
  rows: { id: string; risk: string; control: string; requirement: string; evidence: string }[]
}) {
  const t = useI18n().ui
  return (
    <DataTable
      columns={t.common.riskColumns}
      rows={rows.map((r) => [r.id, r.risk, r.control, r.requirement, r.evidence])}
    />
  )
}

export function CaseRiskTable({
  rows,
}: {
  rows: { id: string; risk: string; control: string; requirement: string; evidence: string }[]
}) {
  return (
    <div className="space-y-3">
      {rows.map((r) => (
        <div key={r.id} className="rounded-[3px] border border-line bg-white p-5">
          <div className="flex items-center gap-3">
            <span className="num text-[0.62rem] text-gold-600">{r.id}</span>
            <p className="text-sm font-medium text-navy-900">{r.risk}</p>
          </div>
          <dl className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              ['Control', r.control],
              ['Requirement', r.requirement],
              ['Evidence', r.evidence],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-faint">
                  {k}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Client journey map (lanes × stages)                                 */
/* ------------------------------------------------------------------ */

export function JourneyMapTable({
  stages,
  lanes,
  persona,
  scenario,
}: {
  stages: string[]
  lanes: { lane: string; cells: string[] }[]
  persona: string
  scenario: string
}) {
  const t = useI18n().ui
  return (
    <div className="overflow-hidden rounded-[4px] border border-line bg-white">
      <div className="border-b border-line bg-navy-900 px-5 py-5 sm:px-6">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-gold-400">
          {t.common.persona}
        </p>
        <p className="mt-1.5 text-[0.95rem] text-white">{persona}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{scenario}</p>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line">
              <th
                scope="col"
                className="w-[180px] px-4 py-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint"
              >
                Lane
              </th>
              {stages.map((s, i) => (
                <th key={s} scope="col" className="px-4 py-3">
                  <span className="num block text-[0.6rem] text-gold-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-1 block text-[0.82rem] text-navy-900">{s}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lanes.map((lane, i) => (
              <tr
                key={lane.lane}
                className={`border-b border-line last:border-0 ${
                  i % 2 === 1 ? 'bg-paper/60' : ''
                }`}
              >
                <th
                  scope="row"
                  className="w-[180px] bg-paper-2/50 px-4 py-4 align-top text-left font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted"
                >
                  {lane.lane}
                </th>
                {lane.cells.map((cell, j) => (
                  <td
                    key={`${lane.lane}-${j}`}
                    className="px-4 py-4 align-top text-[0.82rem] leading-relaxed text-ink-soft"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Decision framework card                                             */
/* ------------------------------------------------------------------ */

export function DecisionFrameworkCard({
  title,
  question,
  whenUsed,
  criteria,
  output,
}: {
  title: string
  question: string
  whenUsed: string
  criteria: string[]
  output: string
}) {
  const t = useI18n().ui
  return (
    <div className="flex h-full flex-col rounded-[4px] border border-line bg-white">
      <div className="border-b border-line px-5 py-4">
        <h3 className="text-[0.95rem] text-navy-900">{title}</h3>
        <p className="mt-1.5 text-sm font-medium text-navy-800">{question}</p>
      </div>
      <div className="flex-1 px-5 py-4">
        <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-faint">
          {t.common.framework.usedWhen}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{whenUsed}</p>

        <p className="mt-4 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-faint">
          {t.common.framework.criteria}
        </p>
        <ul className="mt-2 space-y-1.5">
          {criteria.map((c) => (
            <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-line bg-paper px-5 py-4">
        <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-gold-600">
          {t.common.framework.output}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{output}</p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Persona card                                                        */
/* ------------------------------------------------------------------ */

export function PersonaCard({
  name,
  segment,
  profile,
  jobsToBeDone,
  needs,
  painPoints,
  productFit,
  digitalExpectation,
  successSignal,
}: {
  name: string
  segment: string
  profile: string
  jobsToBeDone: string[]
  needs: string[]
  painPoints: string[]
  productFit: string
  digitalExpectation: string
  successSignal: string
}) {
  const t = useI18n().ui
  const L = t.common.personaLabels
  return (
    <div className="flex h-full flex-col rounded-[4px] border border-line bg-white">
      <div className="border-b border-line px-6 py-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-gold-600">
              {segment}
            </p>
            <h3 className="mt-2 text-lg leading-snug text-navy-900">{name}</h3>
          </div>
          <Badge tone="navy">{t.common.persona}</Badge>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{profile}</p>
      </div>

      <div className="flex-1 space-y-5 px-6 py-5">
        <Block label={L.jtbd}>
          <ul className="mt-2 space-y-1.5">
            {jobsToBeDone.map((j) => (
              <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
                <span>{j}</span>
              </li>
            ))}
          </ul>
        </Block>
        <Block label={L.needs}>
          <ul className="mt-2 space-y-1.5">
            {needs.map((n) => (
              <li key={n} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-teal-600/70" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </Block>
        <Block label={L.painPoints}>
          <ul className="mt-2 space-y-1.5">
            {painPoints.map((p) => (
              <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-negative/70" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <div className="grid gap-px border-t border-line bg-line sm:grid-cols-1">
        {[
          [L.productFit, productFit],
          [L.digitalExpectation, digitalExpectation],
          [L.successSignal, successSignal],
        ].map(([k, v]) => (
          <div key={k} className="bg-paper px-6 py-3.5">
            <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-faint">
              {k}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{v}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-faint">
        {label}
      </p>
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Labelled panel helper                                               */
/* ------------------------------------------------------------------ */

export function DeliveryPanel({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <Panel className="p-0" padding="">
      <div className="border-b border-line bg-paper px-5 py-4">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-gold-600">
          {label}
        </p>
        <h3 className="mt-1.5 text-[0.95rem] text-navy-900">{title}</h3>
      </div>
      <div className="px-5 py-5">{children}</div>
    </Panel>
  )
}
