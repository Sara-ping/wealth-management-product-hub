import { Fragment, type ReactNode } from 'react'
import { Badge, type Tone } from './primitives'
import { useContent, useUI } from '@/i18n/LanguageContext'

/* ------------------------------------------------------------------ */
/* Horizontal process flow: A → B → C                                  */
/* ------------------------------------------------------------------ */

export interface FlowStep {
  label: string
  detail?: string
}

export function ProcessFlow({
  steps,
  dark = false,
  size = 'md',
}: {
  steps: (FlowStep | string)[]
  dark?: boolean
  size?: 'sm' | 'md'
}) {
  const items: FlowStep[] = steps.map((s) =>
    typeof s === 'string' ? { label: s } : s,
  )

  return (
    <ol className="flex flex-col md:flex-row md:flex-nowrap md:overflow-x-auto no-scrollbar md:pb-1">
      {items.map((step, i) => (
        <Fragment key={`${step.label}-${i}`}>
          <li className="min-w-0 flex-1 md:min-w-[8.5rem]">
            <div
              className={`h-full rounded-[4px] border px-3.5 ${
                size === 'sm' ? 'py-2.5' : 'py-4'
              } ${
                dark
                  ? 'border-white/15 bg-white/[0.04]'
                  : 'border-line bg-white shadow-[0_1px_2px_rgba(10,30,60,0.04)]'
              }`}
            >
              <p className="num text-[0.65rem] tracking-[0.14em] text-gold-500">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p
                className={`mt-1.5 ${
                  size === 'sm' ? 'text-[0.8rem]' : 'text-sm'
                } font-medium leading-snug ${
                  dark ? 'text-white' : 'text-navy-900'
                }`}
              >
                {step.label}
              </p>
              {step.detail ? (
                <p
                  className={`mt-1.5 text-xs leading-relaxed ${
                    dark ? 'text-white/55' : 'text-muted'
                  }`}
                >
                  {step.detail}
                </p>
              ) : null}
            </div>
          </li>
          {i < items.length - 1 ? (
            <li
              aria-hidden
              className="flex shrink-0 items-center justify-center py-1.5 text-gold-500 md:px-2 md:py-0"
            >
              <span className="text-sm leading-none md:hidden">↓</span>
              <span className="hidden text-sm leading-none md:inline">→</span>
            </li>
          ) : null}
        </Fragment>
      ))}
    </ol>
  )
}

/* ------------------------------------------------------------------ */
/* Vertical timeline                                                   */
/* ------------------------------------------------------------------ */

export interface TimelineItem {
  title: string
  body?: string
  bullets?: string[]
  meta?: string
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  const t = useUI()
  return (
    <ol className="relative border-l border-line pl-0">
      {items.map((item, i) => (
        <li key={item.title} className="relative pb-8 pl-8 last:pb-0">
          <span className="absolute -left-[7px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-gold-500 bg-paper">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
          </span>
          <p className="num text-[0.65rem] uppercase tracking-[0.16em] text-faint">
            {t.common.diagram.step} {String(i + 1).padStart(2, '0')}
            {item.meta ? ` · ${item.meta}` : ''}
          </p>
          <h3 className="mt-1.5 text-base text-navy-900">{item.title}</h3>
          {item.body ? (
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {item.body}
            </p>
          ) : null}
          {item.bullets?.length ? (
            <ul className="mt-3 space-y-1.5">
              {item.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

/* ------------------------------------------------------------------ */
/* Concept grid (term + definition)                                    */
/* ------------------------------------------------------------------ */

export function ConceptGrid({
  items,
  columns = 2,
  dark = false,
}: {
  items: { term: string; definition: string; tag?: string }[]
  columns?: 2 | 3
  dark?: boolean
}) {
  return (
    <div
      className={`grid gap-px overflow-hidden rounded-[4px] border ${
        dark ? 'border-white/12 bg-white/10' : 'border-line bg-line'
      } sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}
    >
      {items.map((item) => (
        <div
          key={item.term}
          className={`p-5 ${dark ? 'bg-navy-900' : 'bg-white'}`}
        >
          <div className="flex items-start justify-between gap-3">
            <h3
              className={`text-[0.95rem] ${dark ? 'text-white' : 'text-navy-900'}`}
            >
              {item.term}
            </h3>
            {item.tag ? (
              <span
                className={`font-mono text-[0.6rem] uppercase tracking-[0.12em] ${
                  dark ? 'text-gold-400' : 'text-gold-600'
                }`}
              >
                {item.tag}
              </span>
            ) : null}
          </div>
          <p
            className={`mt-2 text-sm leading-relaxed ${
              dark ? 'text-white/60' : 'text-muted'
            }`}
          >
            {item.definition}
          </p>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Comparison table                                                    */
/* ------------------------------------------------------------------ */

export function DataTable({
  columns,
  rows,
  caption,
  firstColBold = true,
}: {
  columns: string[]
  rows: (string[])[]
  caption?: string
  firstColBold?: boolean
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
                  className="px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-faint"
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
                      j === 0 && firstColBold
                        ? 'font-medium text-navy-900'
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
      {caption ? (
        <p className="border-t border-line bg-paper px-4 py-3 text-xs text-muted">
          {caption}
        </p>
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Risk indicator                                                      */
/* ------------------------------------------------------------------ */

const riskTone: Record<string, Tone> = {
  Low: 'positive',
  Moderate: 'teal',
  Medium: 'gold',
  High: 'caution',
  'Very High': 'negative',
  'Very high': 'negative',
}

export function riskToneFor(level: string): Tone {
  return riskTone[level] ?? 'neutral'
}

export function RiskIndicator({
  level,
  showLabel = true,
}: {
  level: string
  showLabel?: boolean
}) {
  const { valueLabels } = useContent()
  const filled: Record<string, number> = {
    Low: 1,
    Moderate: 2,
    Medium: 3,
    High: 4,
    'Very High': 5,
  }
  const n = filled[level] ?? 3
  const color =
    n <= 1
      ? 'bg-positive'
      : n === 2
        ? 'bg-teal-600'
        : n === 3
          ? 'bg-gold-500'
          : n === 4
            ? 'bg-caution'
            : 'bg-negative'

  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="flex items-center gap-[3px]" aria-hidden>
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`h-[14px] w-[3px] rounded-[1px] ${
              i <= n ? color : 'bg-line-strong/60'
            }`}
          />
        ))}
      </span>
      {showLabel ? (
        <Badge tone={riskToneFor(level)}>{valueLabels[level] ?? level}</Badge>
      ) : null}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Payoff chart (educational)                                          */
/* ------------------------------------------------------------------ */

export interface PayoffPoint {
  x: number
  y: number
}

export interface PayoffSeries {
  name: string
  points: [number, number][]
  color?: string
  dashed?: boolean
}

export function PayoffChart({
  title,
  subtitle,
  series,
  xLabel = 'Underlying performance',
  yLabel = 'Payoff',
  annotations,
  note,
}: {
  title: string
  subtitle?: string
  series: PayoffSeries[]
  xLabel?: string
  yLabel?: string
  annotations?: { x: number; y: number; text: string }[]
  note?: string
}) {
  const W = 640
  const H = 300
  const padL = 56
  const padR = 24
  const padT = 24
  const padB = 52

  const allX = series.flatMap((s) => s.points.map((p) => p[0]))
  const allY = series.flatMap((s) => s.points.map((p) => p[1]))
  const minX = Math.min(-20, ...allX)
  const maxX = Math.max(20, ...allX)
  const minY = Math.min(-10, ...allY)
  const maxY = Math.max(20, ...allY)

  const sx = (x: number) =>
    padL + ((x - minX) / (maxX - minX || 1)) * (W - padL - padR)
  const sy = (y: number) =>
    H - padB - ((y - minY) / (maxY - minY || 1)) * (H - padT - padB)

  const yTicks = [minY, 0, Math.round(maxY / 2), maxY].filter(
    (v, i, arr) => arr.indexOf(v) === i,
  )
  const xTicks = [minX, Math.round(minX / 2), 0, Math.round(maxX / 2), maxX]

  const defaultColors = ['#14335f', '#b08d57', '#0f6e6b']

  return (
    <figure className="overflow-hidden rounded-[4px] border border-line bg-white">
      <figcaption className="border-b border-line px-5 py-4">
        <h4 className="text-[0.95rem] text-navy-900">{title}</h4>
        {subtitle ? (
          <p className="mt-1 text-xs leading-relaxed text-muted">{subtitle}</p>
        ) : null}
      </figcaption>
      <div className="px-3 py-2 sm:px-5">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`${title} payoff diagram`}
        >
          {/* grid */}
          {yTicks.map((t) => (
            <g key={`y${t}`}>
              <line
                x1={padL}
                x2={W - padR}
                y1={sy(t)}
                y2={sy(t)}
                stroke={t === 0 ? '#cfcabd' : '#eae7e0'}
                strokeWidth={1}
              />
              <text
                x={padL - 10}
                y={sy(t) + 4}
                textAnchor="end"
                fontSize={11}
                fontFamily="IBM Plex Mono, monospace"
                fill="#8b93a3"
              >
                {t}%
              </text>
            </g>
          ))}
          {xTicks.map((t) => (
            <g key={`x${t}`}>
              <line
                x1={sx(t)}
                x2={sx(t)}
                y1={padT}
                y2={H - padB}
                stroke={t === 0 ? '#cfcabd' : '#f0eee9'}
                strokeWidth={1}
              />
              <text
                x={sx(t)}
                y={H - padB + 20}
                textAnchor="middle"
                fontSize={11}
                fontFamily="IBM Plex Mono, monospace"
                fill="#8b93a3"
              >
                {t}%
              </text>
            </g>
          ))}

          {/* axis labels */}
          <text
            x={(W + padL - padR) / 2}
            y={H - 8}
            textAnchor="middle"
            fontSize={11}
            fontFamily="IBM Plex Mono, monospace"
            fill="#5f6b7f"
          >
            {xLabel}
          </text>
          <text
            x={14}
            y={(H - padB + padT) / 2}
            textAnchor="middle"
            fontSize={11}
            fontFamily="IBM Plex Mono, monospace"
            fill="#5f6b7f"
            transform={`rotate(-90 14 ${(H - padB + padT) / 2})`}
          >
            {yLabel}
          </text>

          {/* series */}
          {series.map((s, i) => (
            <polyline
              key={s.name}
              fill="none"
              stroke={s.color ?? defaultColors[i % defaultColors.length]}
              strokeWidth={2}
              strokeDasharray={s.dashed ? '6 4' : undefined}
              strokeLinejoin="round"
              points={s.points
                .map(([x, y]) => `${sx(x).toFixed(1)},${sy(y).toFixed(1)}`)
                .join(' ')}
            />
          ))}

          {/* annotations */}
          {annotations?.map((a) => (
            <g key={a.text}>
              <circle
                cx={sx(a.x)}
                cy={sy(a.y)}
                r={3.5}
                fill="#ffffff"
                stroke="#b08d57"
                strokeWidth={1.5}
              />
              <text
                x={sx(a.x) + 8}
                y={sy(a.y) - 8}
                fontSize={11}
                fontFamily="IBM Plex Sans, sans-serif"
                fill="#33405a"
              >
                {a.text}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-line px-5 py-3.5">
        {series.map((s, i) => (
          <span key={s.name} className="flex items-center gap-2 text-xs text-muted">
            <span
              className="h-[2px] w-6"
              style={{
                backgroundColor: s.color ?? defaultColors[i % defaultColors.length],
              }}
            />
            {s.name}
          </span>
        ))}
      </div>
      {note ? (
        <p className="border-t border-line bg-paper px-5 py-3 text-xs leading-relaxed text-muted">
          {note}
        </p>
      ) : null}
    </figure>
  )
}

/* ------------------------------------------------------------------ */
/* Stacked "input → output" diagram                                    */
/* ------------------------------------------------------------------ */

export function StackedDiagram({
  inputs,
  output,
  operator = '+',
  outputLabel,
}: {
  inputs: { title: string; detail?: string }[]
  output: string
  operator?: string
  outputLabel?: string
}) {
  const t = useUI()
  return (
    <div className="rounded-[4px] border border-line bg-white p-5 sm:p-7">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {inputs.map((input, i) => (
          <div
            key={input.title}
            className="rounded-[3px] border border-line bg-paper px-4 py-4"
          >
            <p className="num text-[0.6rem] uppercase tracking-[0.16em] text-faint">
              {t.common.diagram.input} {String(i + 1).padStart(2, '0')}
            </p>
            <p className="mt-1.5 text-sm font-medium text-navy-900">
              {input.title}
            </p>
            {input.detail ? (
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {input.detail}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="my-5 flex items-center justify-center gap-3">
        <span className="h-px flex-1 bg-line" />
        <span className="num text-lg text-gold-500">{operator}</span>
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="flex flex-col items-center">
        <span className="text-lg text-gold-500">↓</span>
        <div className="mt-2 w-full max-w-md rounded-[3px] border border-navy-900/20 bg-navy-900 px-5 py-4 text-center">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-400">
            {outputLabel ?? t.common.diagram.result}
          </p>
          <p className="mt-1.5 font-serif text-lg text-white">{output}</p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Simple labelled list                                                */
/* ------------------------------------------------------------------ */

export function KeyValueList({
  items,
}: {
  items: { key: string; value: ReactNode }[]
}) {
  return (
    <dl className="divide-y divide-line overflow-hidden rounded-[4px] border border-line bg-white">
      {items.map((item) => (
        <div
          key={item.key}
          className="grid gap-1 px-5 py-4 sm:grid-cols-[200px_1fr] sm:gap-6"
        >
          <dt className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-faint sm:pt-0.5">
            {item.key}
          </dt>
          <dd className="text-sm leading-relaxed text-ink-soft">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
