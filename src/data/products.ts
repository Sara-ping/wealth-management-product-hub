import { equity, etfs, fixedIncome, funds } from './products-core'
import {
  fx,
  insurance,
  otcDerivatives,
  structuredProducts,
} from './products-advanced'
import type { Product } from './types'

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

/* Value → display label (identity map in English) */
export const valueLabels: Record<string, string> = {
  All: 'All',
  Equity: 'Equity',
  'Fixed Income': 'Fixed Income',
  Funds: 'Funds',
  ETF: 'ETF',
  Structured: 'Structured',
  Derivatives: 'Derivatives',
  Insurance: 'Insurance',
  FX: 'FX',
  Low: 'Low',
  Moderate: 'Moderate',
  Medium: 'Medium',
  High: 'High',
  'Very High': 'Very High',
  Short: 'Short',
  Long: 'Long',
  Simple: 'Simple',
  Complex: 'Complex',
  'Highly Complex': 'Highly Complex',
}

export function getProduct(slug: string | undefined): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export const productNavItems = products.map((p) => ({
  label: p.name,
  to: `/products/${p.slug}`,
  slug: p.slug,
}))
