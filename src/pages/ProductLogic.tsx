import { Link } from 'react-router-dom'
import { PageHero, Section } from '@/components/layout/PageShell'
import { Badge, Panel, Reveal, SectionHeading } from '@/components/ui/primitives'
import { DataTable, ProcessFlow } from '@/components/ui/diagrams'
import { ExploreNext, FrameworkPanel } from '@/components/blocks/BlockRenderer'
import { useContent, useI18n } from '@/i18n/LanguageContext'

export default function ProductLogic() {
  const c = useContent()
  const t = useI18n().ui
  const copy = c.pages.productLogic

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        crumbs={[{ label: t.common.breadcrumbHome, to: '/' }, { label: copy.hero.eyebrow }]}
      />

      {/* ---------------- six concepts ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.concepts.eyebrow}
            title={copy.concepts.title}
            description={copy.concepts.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {c.logicConcepts.map((concept, i) => (
            <Reveal key={concept.id} delay={i * 60} className="h-full">
              <Panel hover className="h-full p-0" padding="">
                <div className="flex h-full flex-col">
                  <div className="border-b border-line px-6 py-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="num text-[0.62rem] text-gold-500">
                          {String(i + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-2 text-lg text-navy-900">
                          {concept.title}
                        </h3>
                      </div>
                      <Badge tone="navy">{t.common.concept}</Badge>
                    </div>
                    <p className="mt-3 text-sm font-medium text-navy-800">
                      {concept.question}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {concept.explanation}
                    </p>
                  </div>
                  <div className="flex-1 px-6 py-5">
                    <ul className="space-y-2">
                      {concept.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
                        >
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-line bg-paper px-6 py-4">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                      {t.common.poLens}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {concept.poNote}
                    </p>
                  </div>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- lifecycle ---------------- */}
      <Section className="border-y border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.lifecycle.eyebrow}
            title={copy.lifecycle.title}
            description={copy.lifecycle.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <ProcessFlow steps={c.lifecycleSteps} />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 text-xs leading-relaxed text-faint">
            {copy.lifecycle.note}
          </p>
        </Reveal>
      </Section>

      {/* ---------------- concepts to requirements ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.bridge.eyebrow}
            title={copy.bridge.title}
            description={copy.bridge.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8">
            <DataTable
              columns={copy.bridge.columns}
              rows={c.conceptToRequirement}
              caption={copy.bridge.caption}
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/product-owner"
              className="rounded-[3px] bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
            >
              {copy.bridge.buttons.toolkit}
            </Link>
            <Link
              to="/digital-wealth"
              className="rounded-[3px] border border-line-strong px-5 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
            >
              {copy.bridge.buttons.journey}
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- framework ---------------- */}
      <Section className="border-t border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.framework.eyebrow}
            title={copy.framework.title}
            description={copy.framework.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <FrameworkPanel items={c.frameworkQuestions} />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.frameworkQuestions.map((q) => (
              <div
                key={q.question}
                className="rounded-[3px] border border-line bg-white px-5 py-4"
              >
                <p className="text-sm font-medium text-navy-900">{q.question}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {q.answer}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14">
          <ExploreNext
            items={[
              { label: t.nav.products, to: '/products', hint: 'See the framework applied' },
              { label: c.navItems[4].label, to: '/digital-wealth', hint: 'Requirements per stage' },
              { label: c.navItems[6].label, to: '/case-studies', hint: 'Business problem to metrics' },
              { label: t.common.poLens, to: '/product-owner', hint: 'Stories, KPIs, risk register' },
            ]}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/products/structured-products"
            className="rounded-[3px] bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
          >
            {copy.buttons.structured}
          </Link>
          <Link
            to="/case-studies"
            className="rounded-[3px] border border-line-strong px-5 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
          >
            {copy.buttons.cases}
          </Link>
        </div>
      </Section>
    </>
  )
}
