import { PageHero, Section } from '@/components/layout/PageShell'
import { Callout, Reveal, SectionHeading } from '@/components/ui/primitives'
import { DataTable, ProcessFlow } from '@/components/ui/diagrams'
import { ExploreNext } from '@/components/blocks/BlockRenderer'
import { ProductCard } from '@/components/ProductCard'
import { useContent, useI18n } from '@/i18n/LanguageContext'

export default function Products() {
  const c = useContent()
  const t = useI18n().ui
  const copy = c.pages.products

  const label = (v: string) => c.valueLabels[v] ?? v

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        crumbs={[{ label: t.nav.products }]}
      />

      {/* ---------------- catalogue ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.browse.eyebrow}
            title={copy.browse.title}
            description={copy.browse.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 50} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {/* One illustrative-content statement for the whole section, rather
            than repeating it inside every product page. */}
        <Reveal delay={120}>
          <div className="mt-10">
            <Callout tone="note" title={copy.illustrativeTitle}>
              {copy.illustrativeBody}
            </Callout>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- comparison ---------------- */}
      <Section className="border-y border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.compare.eyebrow}
            title={copy.compare.title}
            description={copy.compare.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8">
            <DataTable
              columns={copy.compare.columns}
              rows={c.products.map((p) => [
                p.name,
                p.howReturn,
                `${label(p.riskLevel)} · ${p.risks[0] ?? ''}`,
                p.useCase,
                p.regulations[0] ?? '',
              ])}
              caption={copy.compare.caption}
            />
          </div>
        </Reveal>
      </Section>

      {/* ---------------- product thinking framework ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.framework.eyebrow}
            title={copy.framework.title}
            description={copy.framework.description}
          />
        </Reveal>

        <Reveal delay={60}>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {copy.framework.questions.map((q) => (
              <li key={q.key} className="bg-white px-5 py-5">
                <p className="num text-[0.62rem] text-gold-500">{q.key}</p>
                <h3 className="mt-1.5 text-base text-navy-900">{q.label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {q.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
              {copy.framework.pathLabel}
            </p>
            <div className="mt-4">
              <ProcessFlow steps={copy.framework.path} size="sm" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10">
            <ExploreNext
              items={[
                {
                  label: t.nav.logic,
                  to: '/product-logic',
                  hint: copy.framework.exploreLabel,
                },
                {
                  label: t.nav.wealth,
                  to: '/wealth-management',
                  hint: copy.framework.wealthHint,
                },
                {
                  label: t.nav.digital,
                  to: '/digital-wealth',
                  hint: copy.framework.digitalHint,
                },
                {
                  label: t.nav.ai,
                  to: '/ai-wealth',
                  hint: copy.framework.aiHint,
                },
              ]}
            />
          </div>
        </Reveal>
      </Section>
    </>
  )
}
