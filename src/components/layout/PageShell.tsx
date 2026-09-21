import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useUI } from '@/i18n/LanguageContext'

/* ------------------------------------------------------------------ */
/* Breadcrumbs                                                         */
/* ------------------------------------------------------------------ */

export interface Crumb {
  label: string
  to?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const t = useUI()
  return (
    <nav aria-label={t.common.breadcrumb} className="flex flex-wrap items-center gap-2">
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="flex items-center gap-2">
          {i > 0 ? (
            <span aria-hidden className="text-[0.7rem] text-faint">
              /
            </span>
          ) : null}
          {item.to && i < items.length - 1 ? (
            <Link
              to={item.to}
              className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-navy-900"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-navy-900">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/* Page hero                                                           */
/* ------------------------------------------------------------------ */

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  meta,
  children,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  crumbs?: Crumb[]
  meta?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="grid-field-light absolute inset-0 opacity-70" aria-hidden />
      <div className="shell relative py-12 sm:py-16">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        <p className="eyebrow mt-6">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-balance text-3xl leading-[1.12] sm:text-4xl lg:text-[3rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-3xl text-[0.95rem] leading-relaxed text-muted sm:text-base">
            {subtitle}
          </p>
        ) : null}
        {meta ? <div className="mt-7">{meta}</div> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Generic section                                                     */
/* ------------------------------------------------------------------ */

export function Section({
  children,
  className = '',
  dark = false,
}: {
  children: ReactNode
  className?: string
  dark?: boolean
}) {
  return (
    <section
      className={`py-14 sm:py-20 ${dark ? 'bg-navy-900 text-white' : ''} ${className}`}
    >
      <div className="shell">{children}</div>
    </section>
  )
}
