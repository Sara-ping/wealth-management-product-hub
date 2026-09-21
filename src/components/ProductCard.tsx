import { Link } from 'react-router-dom'
import type { Product } from '@/data/types'
import { Badge } from '@/components/ui/primitives'
import { RiskIndicator } from '@/components/ui/diagrams'
import { useContent, useUI } from '@/i18n/LanguageContext'

export function ProductCard({ product }: { product: Product }) {
  const { valueLabels } = useContent()
  const t = useUI()

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex h-full flex-col rounded-[4px] border border-line bg-white p-5 shadow-[0_1px_2px_rgba(10,30,60,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/45 hover:shadow-[0_18px_40px_-28px_rgba(10,30,60,0.45)] sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
            {product.category}
          </p>
          <h3 className="mt-2 text-lg leading-snug text-navy-900">
            {product.name}
          </h3>
        </div>
        <span className="mt-1 text-gold-500 transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">{product.tagline}</p>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-4">
        <span className="flex items-center gap-2.5">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-faint">
            {t.productCard.risk}
          </span>
          <RiskIndicator level={product.riskLevel} showLabel />
        </span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-faint">
          {t.filters.liquidityPrefix.replace(' · ', '')} ·{' '}
          {valueLabels[product.liquidity] ?? product.liquidity}
        </span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-faint">
          {t.filters.horizonPrefix.replace(' · ', '')} ·{' '}
          {valueLabels[product.horizon] ?? product.horizon}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge tone="navy">
          {valueLabels[product.assetClass] ?? product.assetClass}
        </Badge>
        <Badge tone="neutral">
          {valueLabels[product.complexity] ?? product.complexity}
        </Badge>
      </div>

      <p className="mt-5 line-clamp-3 text-xs leading-relaxed text-faint">
        {product.what}
      </p>
    </Link>
  )
}
