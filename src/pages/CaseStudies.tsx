import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { PageHero, Section } from '@/components/layout/PageShell'
import { Badge, Reveal, SectionHeading } from '@/components/ui/primitives'
import { DataTable, ProcessFlow } from '@/components/ui/diagrams'
import { ExploreNext } from '@/components/blocks/BlockRenderer'
import {
  ApiContractBlock,
  CaseRiskTable,
  KpiTable,
  UserStoryCard,
} from '@/components/po/Deliverables'
import { useContent, useI18n } from '@/i18n/LanguageContext'
import type { CaseStudy } from '@/data/types'

/* ------------------------------------------------------------------ */
/* Chain block                                                         */
/* ------------------------------------------------------------------ */

function CaseBlock({
  label,
  children,
  last = false,
}: {
  label: string
  children: ReactNode
  last?: boolean
}) {
  return (
    <div className="relative pl-0">
      <div className="grid gap-3 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6">
        <div>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
            {label}
          </p>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
      {!last ? (
        <div className="ml-[6px] h-6 border-l border-dashed border-line-strong sm:ml-[94px]" />
      ) : null}
    </div>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
        >
          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ------------------------------------------------------------------ */
/* Product Owner lens                                                  */
/* ------------------------------------------------------------------ */

function PoLens({ po }: { po: CaseStudy['po'] }) {
  const t = useI18n().ui
  const L = t.cases.poLabels

  return (
    <div className="mt-12 overflow-hidden rounded-[4px] border border-navy-900/15">
      <div className="border-b border-navy-900/15 bg-navy-900 px-6 py-5">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-400">
          {t.cases.poLensKicker}
        </p>
        <h3 className="mt-2 text-lg text-white">{t.cases.poLensTitle}</h3>
      </div>

      <div className="grid gap-px bg-line sm:grid-cols-2">
        <div className="bg-white p-6">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
            {L.customerProblem}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {po.customerProblem}
          </p>
        </div>
        <div className="bg-white p-6">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
            {L.businessValue}
          </p>
          <div className="mt-2">
            <List items={po.businessValue} />
          </div>
        </div>
        <div className="bg-white p-6">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
            {L.scope}
          </p>
          <div className="mt-2">
            <List items={po.scope} />
          </div>
        </div>
        <div className="bg-white p-6">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
            {L.userJourney}
          </p>
          <div className="mt-2">
            <List items={po.userJourney} />
          </div>
        </div>
        <div className="bg-white p-6">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
            {L.rules}
          </p>
          <div className="mt-2">
            <List items={po.rules} />
          </div>
        </div>
        <div className="bg-white p-6">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
            {L.dependencies}
          </p>
          <div className="mt-2">
            <List items={po.dependencies} />
          </div>
        </div>
      </div>

      <div className="border-t border-line bg-white px-6 py-6">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
          {L.risks}
        </p>
        <div className="mt-3">
          <List items={po.risks} />
        </div>
      </div>

      <div className="border-t border-line bg-paper px-6 py-6">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
          {L.prioritisation}
        </p>
        <div className="mt-4">
          <DataTable
            columns={t.cases.prioritisationColumns}
            rows={po.prioritization.map((p) => [p.priority, p.item, p.rationale])}
          />
        </div>
      </div>

      <div className="border-t border-line bg-white px-6 py-6">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
          {L.metrics}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {po.metrics.map((m) => (
            <Badge key={m} tone="navy">
              {m}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Single case study                                                   */
/* ------------------------------------------------------------------ */

function CaseStudySection({ study }: { study: CaseStudy }) {
  const c = useContent()
  const t = useI18n().ui
  const L = t.cases.labels
  const artifacts = c.casePo[study.slug]

  return (
    <div id={study.slug} className="scroll-mt-24">
      <Reveal>
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-6">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold-600">
              {study.kicker} · {study.domain}
            </p>
            <h2 className="mt-3 text-2xl text-navy-900 sm:text-[1.75rem]">
              {study.title}
            </h2>
          </div>
          <Badge tone="teal">{t.common.caseStudy}</Badge>
        </div>
        <p className="mt-5 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft">
          {study.summary}
        </p>
      </Reveal>

      <div className="mt-10">
        <CaseBlock label={L.businessProblem}>
          <p className="text-sm leading-relaxed text-ink-soft">
            {study.businessProblem}
          </p>
        </CaseBlock>

        <CaseBlock label={L.clientNeed}>
          <p className="text-sm leading-relaxed text-ink-soft">
            {study.clientNeed}
          </p>
        </CaseBlock>

        <CaseBlock label={L.product}>
          <p className="text-sm leading-relaxed text-ink-soft">{study.product}</p>
        </CaseBlock>

        <CaseBlock label={L.businessRules}>
          <List items={study.businessRules} />
        </CaseBlock>

        <CaseBlock label={L.userJourney}>
          <ProcessFlow steps={study.journey} size="sm" />
          <p className="mt-3 text-xs leading-relaxed text-faint">
            {t.cases.journeyNote}
          </p>
        </CaseBlock>

        <CaseBlock label={L.functionalRequirements}>
          <List items={study.functionalRequirements} />
        </CaseBlock>

        <CaseBlock label={L.data}>
          <List items={study.data} />
        </CaseBlock>

        <CaseBlock label={L.api}>
          <div className="overflow-hidden rounded-[3px] border border-line bg-navy-950">
            <ul className="divide-y divide-white/10">
              {study.api.map((a) => (
                <li
                  key={a}
                  className="px-4 py-2.5 font-mono text-[0.72rem] leading-relaxed text-white/75"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </CaseBlock>

        <CaseBlock label={L.riskCompliance}>
          <List items={study.riskCompliance} />
        </CaseBlock>

        <CaseBlock label={L.successMetrics} last>
          <DataTable
            columns={t.cases.metricsColumns}
            rows={study.successMetrics.map((m) => [m.metric, m.description])}
          />
        </CaseBlock>
      </div>

      <PoLens po={study.po} />

      {artifacts ? (
        <div className="mt-12">
          <Reveal>
            <div className="border-b border-line pb-4">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                {t.cases.artefactsKicker}
              </p>
              <h3 className="mt-2 text-lg text-navy-900">
                {t.cases.artefactsTitle}
              </h3>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {artifacts.stories.map((story) => (
              <Reveal key={story.id}>
                <UserStoryCard
                  id={story.id}
                  asA={story.asA}
                  iWant={story.iWant}
                  soThat={story.soThat}
                  acceptance={story.acceptance}
                />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8">
              <p className="mb-3 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
                {t.cases.kpiNote}
              </p>
              <KpiTable
                columns={t.common.kpiColumns}
                rows={artifacts.kpis.map((k) => [
                  k.metric,
                  k.baseline,
                  k.target,
                  k.guardrail,
                ])}
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8">
              <ApiContractBlock
                title={artifacts.contract.title}
                endpoint={artifacts.contract.endpoint}
                request={artifacts.contract.request}
                response={artifacts.contract.response}
                notes={artifacts.contract.notes}
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8">
              <p className="mb-3 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
                {t.cases.riskNote}
              </p>
              <CaseRiskTable rows={artifacts.risks} />
            </div>
          </Reveal>
        </div>
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CaseStudies() {
  const c = useContent()
  const t = useI18n().ui
  const copy = c.pages.cases

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        crumbs={[
          { label: t.common.breadcrumbHome, to: '/' },
          { label: copy.hero.eyebrow },
        ]}
      />

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.overview.eyebrow}
            title={copy.overview.title}
            description={copy.overview.description}
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {c.caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 60} className="h-full">
              <Link
                to={`/case-studies#${study.slug}`}
                className="group flex h-full flex-col rounded-[4px] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/45 hover:shadow-[0_18px_40px_-28px_rgba(10,30,60,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                    {study.kicker}
                  </p>
                  <span className="text-gold-500 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
                <h3 className="mt-3 text-lg text-navy-900">{study.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {study.summary}
                </p>
                <p className="mt-5 border-t border-line pt-4 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-faint">
                  {study.domain}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {c.caseStudies.map((study, i) => (
        <Section
          key={study.slug}
          className={i % 2 === 1 ? 'border-y border-line bg-paper-2' : ''}
        >
          <CaseStudySection study={study} />
        </Section>
      ))}

      <Section>
        <Reveal>
          <div className="rounded-[4px] border border-line bg-white p-6 sm:p-8">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
              {copy.note.kicker}
            </p>
            <h3 className="mt-2 text-xl text-navy-900">{copy.note.title}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              {copy.note.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-10">
          <ExploreNext
            items={[
              { label: c.navItems[4].label, to: '/digital-wealth', hint: 'Stage-level detail' },
              { label: t.common.poLens, to: '/product-owner', hint: 'Frameworks & artefacts' },
              { label: t.nav.products, to: '/products', hint: 'Product context' },
              { label: c.navItems[7].label, to: '/about', hint: 'How I work' },
            ]}
          />
        </div>
      </Section>
    </>
  )
}
