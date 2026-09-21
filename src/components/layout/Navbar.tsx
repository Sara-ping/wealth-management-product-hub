import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { SearchPalette, type SearchEntry } from '@/components/ui/interactive'
import { useContent, useI18n, useLang } from '@/i18n/LanguageContext'
import type { Lang } from '@/i18n/ui'

function LanguageToggle() {
  const [lang, setLang] = useLang()
  const t = useI18n().ui

  return (
    <div
      className="hidden items-center rounded-[3px] border border-line bg-paper p-0.5 sm:flex"
      role="group"
      aria-label={t.lang.label}
    >
      {(['en', 'zh'] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] transition-colors ${
            lang === l
              ? 'bg-navy-900 text-white'
              : 'text-muted hover:text-navy-900'
          }`}
        >
          {l === 'en' ? t.lang.en : t.lang.zh}
        </button>
      ))}
    </div>
  )
}

export function Navbar({ searchIndex }: { searchIndex: SearchEntry[] }) {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const c = useContent()
  const t = useI18n().ui
  const [lang, setLang] = useLang()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-colors ${
          scrolled
            ? 'border-line bg-white/92 backdrop-blur-md'
            : 'border-line/70 bg-white'
        }`}
      >
        <div className="shell flex h-16 items-center gap-3 sm:gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-navy-900 bg-navy-900 text-[0.8rem] font-semibold tracking-tight text-gold-400">
              W
            </span>
            <span className="hidden min-w-0 flex-col leading-tight 2xl:flex">
              <span className="truncate font-serif text-[0.9rem] text-navy-900">
                {lang === 'zh' ? '财富管理产品中心' : 'Wealth Management Product Hub'}
              </span>
              <span className="truncate font-mono text-[0.55rem] uppercase tracking-[0.16em] text-faint">
                {lang === 'zh' ? '产品 · 流程 · 数字化' : 'Products · Processes · Digital'}
              </span>
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex">
            {c.navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative whitespace-nowrap px-2 py-2 text-[0.78rem] transition-colors ${
                    isActive ? 'text-navy-900' : 'text-muted hover:text-navy-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive ? (
                      <span className="absolute inset-x-2 -bottom-[1px] h-[2px] bg-gold-500" />
                    ) : null}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label={t.common.search}
              onClick={() => setSearchOpen(true)}
              className="flex h-9 w-9 items-center justify-center border border-line font-mono text-sm text-muted transition-colors hover:border-line-strong hover:text-navy-900 md:flex"
            >
              ⌕
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden items-center gap-2 rounded-[3px] border border-line bg-paper px-3 py-2 text-xs text-muted transition-colors hover:border-line-strong hover:text-navy-900 2xl:flex"
            >
              <span className="font-mono">⌕</span>
              <span>{t.common.search}</span>
              <kbd className="font-mono text-[0.6rem] text-faint">⌘K</kbd>
            </button>
            <LanguageToggle />
            <Link
              to={c.ctaRoute.to}
              className="hidden whitespace-nowrap rounded-[3px] bg-navy-900 px-3.5 py-2.5 text-[0.72rem] font-medium text-white transition-colors hover:bg-navy-800 lg:block"
            >
              {c.ctaRoute.label}
            </Link>
            <button
              type="button"
              aria-label={t.common.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-line xl:hidden"
            >
              <span
                className={`h-[1.5px] w-4 bg-navy-900 transition-transform ${
                  open ? 'translate-y-[3.25px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-[1.5px] w-4 bg-navy-900 transition-transform ${
                  open ? '-translate-y-[3.25px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-line bg-white xl:hidden">
            <nav className="shell flex flex-col py-2">
              {c.navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `border-b border-line px-1 py-3 text-sm last:border-0 ${
                      isActive ? 'text-navy-900' : 'text-muted'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/product-owner"
                className="border-b border-line px-1 py-3 text-sm text-muted"
              >
                {t.common.poLens}
              </Link>
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 border-b border-line px-1 py-3 text-left text-sm text-muted"
              >
                <span className="font-mono">⌕</span> {t.common.search}
              </button>
              <div className="flex items-center justify-between gap-3 border-b border-line px-1 py-3">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint">
                  {t.lang.label}
                </span>
                <div className="flex items-center gap-1">
                  {(['en', 'zh'] as Lang[]).map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setLang(l)}
                      className={`rounded-[3px] border px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] ${
                        lang === l
                          ? 'border-navy-900 bg-navy-900 text-white'
                          : 'border-line text-muted'
                      }`}
                    >
                      {l === 'en' ? t.lang.en : t.lang.zh}
                    </button>
                  ))}
                </div>
              </div>
              <Link
                to={c.ctaRoute.to}
                className="mt-3 mb-2 rounded-[3px] bg-navy-900 px-4 py-3 text-center text-sm font-medium text-white"
              >
                {c.ctaRoute.label}
              </Link>
            </nav>
          </div>
        ) : null}
      </header>

      {searchOpen ? (
        <SearchPalette
          entries={searchIndex}
          onClose={() => setSearchOpen(false)}
          onNavigate={(to) => {
            setSearchOpen(false)
            navigate(to)
          }}
        />
      ) : null}
    </>
  )
}
