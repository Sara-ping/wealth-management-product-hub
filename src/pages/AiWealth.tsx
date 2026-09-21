import { Link } from 'react-router-dom'
import { PageHero, Section } from '@/components/layout/PageShell'
import { Badge, Reveal, SectionHeading } from '@/components/ui/primitives'
import { ConceptGrid, DataTable } from '@/components/ui/diagrams'
import { Accordion } from '@/components/ui/interactive'
import { ExploreNext } from '@/components/blocks/BlockRenderer'
import { useContent, useI18n } from '@/i18n/LanguageContext'

export default function AiWealth() {
  const c = useContent()
  const t = useI18n().ui
  const copy = c.pages.ai

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

      {/* ---------------- principle ---------------- */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-[4px] border border-navy-900/15 bg-navy-900">
            <div className="grid-field absolute inset-0" aria-hidden />
            <div className="relative px-6 py-10 sm:px-10 sm:py-12">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-gold-400">
                {copy.principleKicker}
              </p>
              <h2 className="mt-4 max-w-3xl text-balance text-2xl leading-snug text-white sm:text-[2rem]">
                {copy.principle}
              </h2>
              {/* the governing principle is the headline above — only the
                  supporting principles are listed here */}
              <div className="mt-8 grid gap-6 border-t border-white/12 pt-8 sm:grid-cols-2">
                <ul className="space-y-2.5">
                  {c.aiPrinciples.slice(0, 2).map((p) => (
                    <li
                      key={p}
                      className="flex gap-2.5 text-sm leading-relaxed text-white/65"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2.5">
                  {c.aiPrinciples.slice(2).map((p) => (
                    <li
                      key={p}
                      className="flex gap-2.5 text-sm leading-relaxed text-white/65"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- architecture ---------------- */}
      <Section className="border-y border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.architecture.eyebrow}
            title={copy.architecture.title}
            description={copy.architecture.description}
          />
        </Reveal>

        <div className="mt-10 flex flex-col items-center">
          {c.aiArchitecture.layers.map((layer, i) => (
            <Reveal key={layer.title} delay={i * 60} className="w-full">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-3xl rounded-[4px] border border-line bg-white px-6 py-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-gold-600">
                        {layer.label}
                      </p>
                      <h3 className="mt-1.5 text-base text-navy-900">
                        {layer.title}
                      </h3>
                    </div>
                    <span className="num text-[0.62rem] text-faint">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {layer.detail}
                  </p>
                </div>
                {i < c.aiArchitecture.layers.length - 1 ? (
                  <span className="py-2 text-gold-500" aria-hidden>
                    ↓
                  </span>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted">
            {copy.architecture.note}
          </p>
        </Reveal>
      </Section>

      {/* ---------------- use cases ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.usecases.eyebrow}
            title={copy.usecases.title}
            description={copy.usecases.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <Accordion
              allowMultiple
              defaultOpen={0}
              items={c.aiUseCases.map((u) => ({
                title: u.title,
                subtitle: u.problem,
                tag: u.audience,
                content: (
                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-gold-600">
                        {copy.usecases.labels.approach}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        {u.approach}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-gold-600">
                        {copy.usecases.labels.value}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                        {u.value}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-gold-600">
                        {copy.usecases.labels.controls}
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {u.controls.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 text-sm text-ink-soft"
                          >
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ),
              }))}
            />
          </div>
        </Reveal>
      </Section>

      {/* ---------------- delivery ---------------- */}
      <Section className="border-y border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.delivery.eyebrow}
            title={copy.delivery.title}
            description={copy.delivery.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8">
            <DataTable
              columns={[
                copy.delivery.decisionLabel,
                copy.delivery.buy,
                copy.delivery.build,
                copy.delivery.poViewLabel,
              ]}
              rows={c.buildVsBuy.map((b) => [b.decision, b.buy, b.build, b.poView])}
              caption={copy.delivery.sourcingCaption}
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8">
            <p className="mb-3 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
              {copy.delivery.phases}
            </p>
            <DataTable
              columns={copy.delivery.phaseColumns}
              rows={c.rolloutPhases.map((p) => [p.phase, p.scope, p.control, p.exit])}
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8">
            <p className="mb-3 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
              {copy.delivery.evaluation}
            </p>
            <DataTable
              columns={copy.delivery.evaluationColumns}
              rows={c.evaluationHarness.map((e) => [e.dimension, e.method, e.threshold])}
              caption={copy.delivery.evaluationCaption}
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8">
            <p className="mb-3 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
              {copy.delivery.kpisLabel}
            </p>
            <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
              {c.aiKpis.map((k) => (
                <div key={k.metric} className="bg-white px-5 py-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-medium text-navy-900">{k.metric}</p>
                    <span className="num text-[0.72rem] text-navy-900">
                      {k.target}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {k.why}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/product-owner"
              className="rounded-[3px] bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
            >
              {copy.delivery.buttons.toolkit}
            </Link>
            <Link
              to="/case-studies#ai-wealth-advisor"
              className="rounded-[3px] border border-line-strong px-5 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
            >
              {copy.delivery.buttons.caseStudy}
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- concepts ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.concepts.eyebrow}
            title={copy.concepts.title}
            description={copy.concepts.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <ConceptGrid items={c.aiConcepts} columns={2} />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.aiControlCards.map((item) => (
              <div
                key={item.label}
                className="rounded-[3px] border border-line bg-white px-5 py-4"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                  <p className="text-sm font-medium text-navy-900">{item.label}</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14">
          <ExploreNext
            items={[
              {
                label: c.caseStudies[3].title,
                to: '/case-studies#ai-wealth-advisor',
                hint: 'Full requirements and metrics',
              },
              { label: c.navItems[4].label, to: '/digital-wealth', hint: 'Where AI plugs in' },
              { label: t.common.poLens, to: '/product-owner', hint: 'Stories, KPIs, risk register' },
              { label: c.navItems[2].label, to: '/product-logic', hint: 'Rules AI must respect' },
            ]}
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/case-studies#ai-wealth-advisor"
            className="rounded-[3px] bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
          >
            {copy.concepts.buttons.caseStudy}
          </Link>
          <Badge tone="neutral">{copy.concepts.badge}</Badge>
        </div>
      </Section>
    </>
  )
}
