import { equity, etfs, fixedIncome, funds } from './products-core'
import {
  fx,
  insurance,
  otcDerivatives,
  structuredProducts,
} from './products-advanced'
import type { Product } from '../types'

export const products: Product[] = [
  equity,
  fixedIncome,
  funds,
  etfs,
  structuredProducts,
  otcDerivatives,
  insurance,
  fx,
]

/* Value → display label for badges and tables */
export const valueLabels: Record<string, string> = {
  All: '全部',
  Equity: '股票',
  'Fixed Income': '固定收益',
  Funds: '基金',
  ETF: 'ETF',
  Structured: '结构化',
  Derivatives: '衍生品',
  Insurance: '保险',
  FX: '外汇',
  Low: '低',
  Moderate: '中低',
  Medium: '中等',
  High: '高',
  'Very High': '很高',
  Short: '短期',
  Long: '长期',
  Simple: '简单',
  Complex: '复杂',
  'Highly Complex': '高度复杂',
}

export function getProduct(slug: string | undefined): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export const productNavItems = products.map((p) => ({
  label: p.name,
  to: `/products/${p.slug}`,
  slug: p.slug,
}))
