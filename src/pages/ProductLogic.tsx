import { Link } from 'react-router-dom'
import { PageHero, Section } from '@/components/layout/PageShell'
import { Reveal, SectionHeading } from '@/components/ui/primitives'
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

        <div className="mt-10 space-y-px overflow-hidden rounded-[4px] border border-line bg-line">
          {c.logicConcepts.map((concept, i) => (
            <Reveal key={concept.id}>
              <div className="bg-white px-5 py-5 sm:px-6">
                <div className="grid gap-3 lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
                  <div>
                    <p className="num text-[0.62rem] text-gold-500">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1.5 text-base text-navy-900">
                      {concept.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted lg:hidden">
                      {concept.explanation}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {concept.question}
                    </p>
                    <p className="mt-3 hidden text-xs leading-relaxed text-muted lg:block">
                      {concept.explanation}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-gold-600">
                      {t.common.poLens}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {concept.poNote}
                    </p>
                  </div>
                </div>
              </div>
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

        <div className="mt-14">
          <ExploreNext
            items={[
              { label: t.nav.products, to: '/', hint: t.hints.seeFrameworkApplied },
              { label: t.nav.digital, to: '/digital-wealth', hint: t.hints.requirementsPerStage },
              { label: t.nav.cases, to: '/case-studies', hint: t.hints.businessProblemToMetrics },
              { label: t.common.poLens, to: '/product-owner', hint: t.hints.storiesKpisRisks },
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
