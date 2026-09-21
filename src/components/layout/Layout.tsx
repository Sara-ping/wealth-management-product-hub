import { useEffect, useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ErrorBoundary } from './ErrorBoundary'
import type { SearchEntry } from '@/components/ui/interactive'
import { useContent } from '@/i18n/LanguageContext'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        try {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } catch {
          window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        }
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])
  return null
}

export function Layout() {
  const c = useContent()

  const searchIndex = useMemo<SearchEntry[]>(() => {
    const entries: SearchEntry[] = []

    c.navItems.forEach((n) =>
      entries.push({ title: n.label, type: 'Page', to: n.to, keywords: '' }),
    )
    entries.push({
      title: 'Product Owner Lens',
      type: 'Page',
      to: '/product-owner',
      keywords: '',
    })

    c.products.forEach((p) => {
      entries.push({
        title: p.name,
        type: 'Product',
        to: `/products/${p.slug}`,
        keywords: `${p.tagline} ${p.category}`,
      })
      p.blocks.forEach((b) => {
        if (b.kind === 'concepts') {
          b.items.forEach((item) =>
            entries.push({
              title: item.term,
              type: 'Concept',
              to: `/products/${p.slug}`,
              keywords: `${p.name} ${item.definition}`,
            }),
          )
        }
      })
    })

    c.caseStudies.forEach((study) =>
      entries.push({
        title: study.title,
        type: 'Case Study',
        to: `/case-studies#${study.slug}`,
        keywords: `${study.domain} ${study.summary}`,
      }),
    )

    c.aiUseCases.forEach((u) =>
      entries.push({
        title: u.title,
        type: 'AI Use Case',
        to: '/ai-wealth',
        keywords: `${u.audience} ${u.problem}`,
      }),
    )

    c.digitalJourney.forEach((s) =>
      entries.push({
        title: s.title,
        type: 'Journey Stage',
        to: '/digital-wealth',
        keywords: s.summary,
      }),
    )

    c.coreProcesses.forEach((p) =>
      entries.push({
        title: p.term,
        type: 'Process',
        to: '/wealth-management',
        keywords: p.definition,
      }),
    )

    c.personas.forEach((p) =>
      entries.push({
        title: p.name,
        type: 'Persona',
        to: '/wealth-management#personas',
        keywords: p.profile,
      }),
    )

    return entries
  }, [c])

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <ScrollToTop />
      <Navbar searchIndex={searchIndex} />
      <main className="flex-1">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}
