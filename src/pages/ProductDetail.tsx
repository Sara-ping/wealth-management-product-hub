import { Link, useParams } from 'react-router-dom'
import { PageHero, Section } from '@/components/layout/PageShell'
import { Badge, Panel, Reveal } from '@/components/ui/primitives'
import { RiskIndicator } from '@/components/ui/diagrams'
import {
  BlockRenderer,
  ExploreNext,
  QuickFacts,
  TagList,
} from '@/components/blocks/BlockRenderer'
import { useContent, useI18n } from '@/i18n/LanguageContext'
import NotFound from './NotFound'

export default function ProductDetail() {
  const { slug } = useParams()
  const c = useContent()
  const t = useI18n().ui
  const product = c.products.find((p) => p.slug === slug)

  if (!product) return <NotFound />

  const index = c.products.findIndex((p) => p.slug === product.slug)
  const next = c.products[(index + 1) % c.products.length]
  const prev = c.products[(index - 1 + c.products.length) % c.products.length]
  const label = (v: string) => c.valueLabels[v] ?? v

  return (
    <>
      <PageHero
        eyebrow={`${product.category} · ${label(product.assetClass)}`}
        title={product.name}
        subtitle={product.tagline}
        crumbs={[
          { label: t.common.breadcrumbHome, to: '/' },
          { label: t.nav.products, to: '/products' },
          { label: product.name },
        ]}
        meta={
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="flex items-center gap-3">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
                {t.productCard.risk}
              </span>
              <RiskIndicator level={product.riskLevel} />
            </span>
            <Badge tone="teal">
              {t.productDetail.liquidity} · {label(product.liquidity)}
            </Badge>
            <Badge tone="navy">
              {t.productDetail.horizon} · {label(product.horizon)}
            </Badge>
            <Badge tone="gold">{label(product.complexity)}</Badge>
          </div>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
          {/* ---------------- main column ---------------- */}
          <div className="min-w-0 space-y-14">
            <Reveal>
              <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3">
                <div className="bg-white p-6">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                    {t.productDetail.what}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {product.what}
                  </p>
                </div>
                <div className="bg-white p-6">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                    {t.productDetail.why}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {product.why}
                  </p>
                </div>
                <div className="bg-white p-6">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                    {t.productDetail.howReturn}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {product.howReturn}
                  </p>
                </div>
              </div>
            </Reveal>

            {product.blocks.map((block, i) => (
              <Reveal key={`${block.kind}-${i}`}>
                <BlockRenderer block={block} />
              </Reveal>
            ))}
          </div>

          {/* ---------------- sidebar ---------------- */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
                  {t.productDetail.keyRisks}
                </p>
                <ul className="mt-3 space-y-2.5">
                  {product.risks.map((risk) => (
                    <li
                      key={risk}
                      className="flex gap-2.5 border-b border-line pb-2.5 text-sm leading-relaxed text-ink-soft last:border-0"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-negative/70" />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <QuickFacts
                items={[
                  { label: t.productDetail.liquidity, value: label(product.liquidity) },
                  {
                    label: t.productDetail.horizon,
                    value: label(product.horizon),
                  },
                  {
                    label: t.productDetail.assetClass,
                    value: label(product.assetClass),
                  },
                  {
                    label: t.productDetail.complexity,
                    value: label(product.complexity),
                  },
                ]}
              />

              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
                  {t.productDetail.useCaseTitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {product.useCase}
                </p>
              </div>

              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
                  {t.productDetail.clientTypes}
                </p>
                <ul className="mt-3 space-y-2">
                  {product.clientTypes.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted">
                      · {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
                  {t.productDetail.regulations}
                </p>
                <div className="mt-3">
                  <TagList items={product.regulations} />
                </div>
              </div>

              <Panel className="bg-navy-900 text-white">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-400">
                  {t.productDetail.analyseKicker}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t.productDetail.analyseBody}
                </p>
                <Link
                  to="/product-logic"
                  className="mt-4 inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-gold-400 hover:text-white"
                >
                  {t.productDetail.analyseLink} <span aria-hidden>→</span>
                </Link>
              </Panel>
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <ExploreNext
            items={product.related.map((r) => ({ ...r }))}
            title={t.common.relatedConcepts}
          />
          <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to={`/products/${prev.slug}`}
              className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-navy-900"
            >
              <span className="text-gold-500 transition-transform group-hover:-translate-x-0.5">
                ←
              </span>
              <span>
                <span className="block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint">
                  {t.common.previous}
                </span>
                {prev.name}
              </span>
            </Link>
            <Link
              to={`/products/${next.slug}`}
              className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-navy-900 sm:text-right"
            >
              <span>
                <span className="block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint">
                  {t.common.next}
                </span>
                {next.name}
              </span>
              <span className="text-gold-500 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
