import { PageHero, Section } from '@/components/layout/PageShell'
import { Reveal, SectionHeading } from '@/components/ui/primitives'
import { DataTable } from '@/components/ui/diagrams'
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
        subtitle={copy.hero.subtitle}
        crumbs={[
          { label: t.common.breadcrumbHome, to: '/' },
          { label: t.nav.products },
        ]}
      />

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
      </Section>

      <Section className="border-t border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.glance.eyebrow}
            title={copy.glance.title}
            description={copy.glance.description}
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8">
            <DataTable
              columns={[
                t.common.product,
                t.filters.assetClass,
                t.filters.riskLevel,
                t.filters.liquidity,
                t.filters.horizon,
                t.filters.complexity,
              ]}
              rows={c.products.map((p) => [
                p.name,
                label(p.assetClass),
                label(p.riskLevel),
                label(p.liquidity),
                label(p.horizon),
                label(p.complexity),
              ])}
              caption={copy.caption}
            />
          </div>
        </Reveal>
      </Section>
    </>
  )
}
