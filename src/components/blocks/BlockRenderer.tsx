import { Link } from 'react-router-dom'
import type { Block } from '@/data/types'
import {
  Accordion,
  RateLab,
  Tabs,
} from '@/components/ui/interactive'
import {
  ConceptGrid,
  DataTable,
  KeyValueList,
  PayoffChart,
  ProcessFlow,
  StackedDiagram,
  Timeline,
} from '@/components/ui/diagrams'
import { Badge, Callout, Panel, Reveal } from '@/components/ui/primitives'
import { useUI } from '@/i18n/LanguageContext'

/* ------------------------------------------------------------------ */
/* Chain block: client problem → exposure → derivative → objective     */
/* ------------------------------------------------------------------ */

function ChainBlock({
  title,
  items,
}: {
  title?: string
  items: { label: string; title: string; body: string }[]
}) {
  return (
    <div className="overflow-hidden rounded-[4px] border border-line bg-white">
      {title ? (
        <div className="border-b border-line bg-paper px-5 py-4">
          <h3 className="text-[0.95rem] text-navy-900">{title}</h3>
        </div>
      ) : null}
      <ol className="divide-y divide-line">
        {items.map((item, i) => (
          <li
            key={item.label}
            className="grid gap-3 px-5 py-5 sm:grid-cols-[190px_1fr] sm:gap-6 sm:px-6"
          >
            <div>
              <p className="num text-[0.65rem] text-gold-500">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
                {item.label}
              </p>
            </div>
            <div>
              <h4 className="text-[0.95rem] text-navy-900">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </div>
            {i < items.length - 1 ? (
              <div className="sm:col-start-2">
                <span className="text-gold-500">↓</span>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Perspective block (Wealth Management Perspective)                   */
/* ------------------------------------------------------------------ */

function PerspectiveBlock({
  title,
  items,
}: {
  title?: string
  items: { question: string; answer: string }[]
}) {
  const t = useUI()
  return (
    <div className="overflow-hidden rounded-[4px] border border-navy-900/15">
      <div className="border-b border-navy-900/15 bg-navy-900 px-5 py-4">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-400">
          {t.blocks.perspectiveKicker}
        </p>
        <h3 className="mt-1.5 text-[0.95rem] text-white">
          {title ?? t.blocks.perspective}
        </h3>
      </div>
      <dl className="divide-y divide-line bg-white">
        {items.map((item) => (
          <div
            key={item.question}
            className="grid gap-2 px-5 py-5 sm:grid-cols-[240px_1fr] sm:gap-6 sm:px-6"
          >
            <dt className="text-sm font-medium text-navy-900">{item.question}</dt>
            <dd className="text-sm leading-relaxed text-ink-soft">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* FAQ block                                                           */
/* ------------------------------------------------------------------ */

function FaqBlock({
  title,
  items,
}: {
  title?: string
  items: { title: string; subtitle?: string; paragraphs: string[] }[]
}) {
  return (
    <div>
      {title ? <h3 className="mb-4 text-lg text-navy-900">{title}</h3> : null}
      <Accordion
        items={items.map((i) => ({
          title: i.title,
          subtitle: i.subtitle,
          content: (
            <div className="space-y-3">
              {i.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          ),
        }))}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Block renderer                                                      */
/* ------------------------------------------------------------------ */

export function BlockRenderer({ block }: { block: Block }) {
  const t = useUI()

  switch (block.kind) {
    case 'prose':
      return (
        <div className="max-w-3xl">
          {block.title ? (
            <h3 className="mb-4 text-lg text-navy-900">{block.title}</h3>
          ) : null}
          <div className="space-y-4">
            {block.paragraphs.map((p) => (
              <p key={p} className="text-[0.95rem] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </div>
      )

    case 'bullets':
      return (
        <div>
          {block.title ? (
            <h3 className="mb-4 text-lg text-navy-900">{block.title}</h3>
          ) : null}
          <ul className="grid gap-3 sm:grid-cols-2">
            {block.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-[3px] border border-line bg-white px-4 py-3.5 text-sm leading-relaxed text-ink-soft"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'concepts':
      return (
        <div>
          {block.title ? (
            <h3 className="mb-4 text-lg text-navy-900">{block.title}</h3>
          ) : null}
          <ConceptGrid items={block.items} columns={block.columns ?? 2} />
        </div>
      )

    case 'flow':
      return (
        <div>
          {block.title ? (
            <h3 className="mb-4 text-lg text-navy-900">{block.title}</h3>
          ) : null}
          <ProcessFlow steps={block.steps} />
        </div>
      )

    case 'timeline':
      return (
        <div>
          {block.title ? (
            <h3 className="mb-6 text-lg text-navy-900">{block.title}</h3>
          ) : null}
          <Timeline items={block.items} />
        </div>
      )

    case 'table':
      return (
        <div>
          {block.title ? (
            <h3 className="mb-4 text-lg text-navy-900">{block.title}</h3>
          ) : null}
          <DataTable
            columns={block.columns}
            rows={block.rows}
            caption={block.caption}
          />
        </div>
      )

    case 'callout':
      return (
        <Callout tone={block.tone ?? 'note'} title={block.title}>
          {block.body}
        </Callout>
      )

    case 'perspective':
      return <PerspectiveBlock title={block.title} items={block.items} />


    case 'accordion':
      return (
        <div>
          {block.title ? (
            <h3 className="mb-4 text-lg text-navy-900">{block.title}</h3>
          ) : null}
          <Accordion
            allowMultiple
            items={block.items.map((i) => ({
              title: i.title,
              subtitle: i.subtitle,
              tag: i.tag,
              content: (
                <ul className="space-y-2">
                  {i.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ),
            }))}
          />
        </div>
      )

    case 'stack':
      return (
        <div>
          {block.title ? (
            <h3 className="mb-4 text-lg text-navy-900">{block.title}</h3>
          ) : null}
          <StackedDiagram
            inputs={block.inputs}
            output={block.output}
            outputLabel={block.outputLabel}
          />
        </div>
      )

    case 'chain':
      return <ChainBlock title={block.title} items={block.items} />

    case 'payoff':
      return (
        <div>
          {block.title ? (
            <h3 className="mb-5 text-lg text-navy-900">{block.title}</h3>
          ) : null}
          <div className="space-y-6">
            {block.charts.map((chart) => (
              <PayoffChart
                key={chart.title}
                title={chart.title}
                subtitle={chart.subtitle}
                series={chart.series}
                xLabel={chart.xLabel ?? t.payoff.xLabel}
                yLabel={chart.yLabel ?? t.payoff.yLabel}
                annotations={chart.annotations}
                note={chart.note}
              />
            ))}
          </div>
        </div>
      )

    case 'rate-lab':
      return <RateLab />

    case 'faq':
      return <FaqBlock title={block.title} items={block.items} />

    default:
      return null
  }
}

/* ------------------------------------------------------------------ */
/* Product framework panel (reusable)                                  */
/* ------------------------------------------------------------------ */

export function FrameworkPanel({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  const t = useUI()
  return (
    <Panel className="overflow-hidden p-0">
      <div className="border-b border-line bg-paper px-5 py-4">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
          {t.blocks.reusableFramework}
        </p>
        <h3 className="mt-1.5 text-[0.95rem] text-navy-900">
          {t.blocks.frameworkQuestions}
        </h3>
      </div>
      <Tabs
        tabs={items.map((item, i) => ({
          id: `q${i}`,
          label: item.question.replace('?', ''),
          content: (
            <div className="px-5 pb-6">
              <p className="text-sm leading-relaxed text-ink-soft">
                {item.answer}
              </p>
            </div>
          ),
        }))}
      />
      <div className="border-t border-line px-5 py-4">
        <p className="text-xs leading-relaxed text-muted">{t.blocks.frameworkNote}</p>
      </div>
    </Panel>
  )
}

/* ------------------------------------------------------------------ */
/* Related concepts / explore next                                     */
/* ------------------------------------------------------------------ */

export function ExploreNext({
  items,
  title,
}: {
  items: { label: string; to: string; hint?: string }[]
  title?: string
}) {
  const t = useUI()
  return (
    <Reveal>
      <div className="border-t border-line pt-8">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
          {title ?? t.common.exploreNext}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.to + item.label}
              to={item.to}
              className="group flex items-start justify-between gap-3 rounded-[3px] border border-line bg-white px-4 py-3.5 transition-colors hover:border-gold-500/50 hover:bg-paper"
            >
              <span>
                <span className="block text-sm text-navy-900">{item.label}</span>
                {item.hint ? (
                  <span className="mt-1 block text-xs text-muted">{item.hint}</span>
                ) : null}
              </span>
              <span className="mt-0.5 text-gold-500 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/* Quick facts sidebar                                                 */
/* ------------------------------------------------------------------ */

export function QuickFacts({
  items,
}: {
  items: { label: string; value: string; tone?: 'navy' | 'gold' | 'teal' }[]
}) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-1">
      {items.map((item) => (
        <div key={item.label} className="bg-white px-5 py-4">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
            {item.label}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-navy-900">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  )
}

export function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} tone="neutral">
          {item}
        </Badge>
      ))}
    </div>
  )
}

export { KeyValueList }
