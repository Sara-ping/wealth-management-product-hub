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
  const [menuOpen, setMenuOpen] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const c = useContent()
  const t = useI18n().ui
  const [lang, setLang] = useLang()
  const navGroups = c.headerNavItems

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
                {t.common.siteName}
              </span>
              <span className="truncate font-mono text-[0.55rem] uppercase tracking-[0.16em] text-faint">
                {t.common.siteTagline}
              </span>
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex">
            {navGroups.map((group) => {
              // Only groups that declare a menu render a dropdown. The flat
              // five-item navigation leaves this undefined.
              const entries = group.menu ?? []
              const hasMenu = entries.length > 0

              return hasMenu ? (
                <div
                  key={group.label}
                  className="group relative"
                  onMouseEnter={() => setMenuOpen(group.label)}
                  onMouseLeave={() => setMenuOpen(null)}
                >
                  <NavLink
                    to={group.to}
                    end={group.end}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1 whitespace-nowrap px-2 py-2 text-[0.78rem] transition-colors ${
                        isActive || menuOpen === group.label
                          ? 'font-medium text-gold-600'
                          : 'text-muted hover:text-navy-900'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {group.label}
                        <span
                          aria-hidden
                          className={`text-[0.55rem] transition-transform ${
                            menuOpen === group.label ? 'rotate-180' : ''
                          }`}
                        >
                          ▾
                        </span>
                        {isActive ? (
                          <span className="absolute inset-x-2 -bottom-[1px] h-[2px] bg-gold-500" />
                        ) : null}
                      </>
                    )}
                  </NavLink>

                  <div
                    className={`absolute left-0 top-full z-50 w-64 pt-2 transition-opacity ${
                      menuOpen === group.label
                        ? 'visible opacity-100'
                        : 'invisible opacity-0'
                    }`}
                  >
                    <ul className="overflow-hidden rounded-[4px] border border-line bg-white py-1.5 shadow-[0_12px_32px_rgba(10,30,60,0.12)]">
                      {group.menuLabel ? (
                        <li>
                          <p className="px-4 pb-1.5 pt-2 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-faint">
                            {group.menuLabel}
                          </p>
                        </li>
                      ) : null}
                      {entries.map((entry) => (
                        <li key={entry.to}>
                          <NavLink
                            to={entry.to}
                            onClick={() => setMenuOpen(null)}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-[0.78rem] transition-colors ${
                                isActive
                                  ? 'bg-paper text-gold-600'
                                  : 'text-ink-soft hover:bg-paper hover:text-navy-900'
                              }`
                            }
                          >
                            {entry.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={group.label}
                  to={group.to}
                  end={group.end}
                  className={({ isActive }) =>
                    `relative whitespace-nowrap px-2 py-2 text-[0.78rem] transition-colors ${
                      isActive
                        ? 'font-medium text-gold-600'
                        : 'text-muted hover:text-navy-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {group.label}
                      {isActive ? (
                        <span className="absolute inset-x-2 -bottom-[1px] h-[2px] bg-gold-500" />
                      ) : null}
                    </>
                  )}
                </NavLink>
              )
            })}
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
              {navGroups.map((group) => {
                const entries = group.menu ?? []

                if (entries.length === 0) {
                  return (
                    <NavLink
                      key={group.label}
                      to={group.to}
                      end={group.end}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `border-b border-line px-1 py-3 text-sm ${
                          isActive ? 'font-medium text-gold-600' : 'text-muted'
                        }`
                      }
                    >
                      {group.label}
                    </NavLink>
                  )
                }

                return (
                  <div key={group.label} className="border-b border-line">
                    <NavLink
                      to={group.to}
                      end={group.end}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block px-1 py-3 text-sm ${
                          isActive ? 'font-medium text-gold-600' : 'text-muted'
                        }`
                      }
                    >
                      {group.label}
                    </NavLink>
                    {group.menuLabel ? (
                      <p className="ml-3 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-faint">
                        {group.menuLabel}
                      </p>
                    ) : null}
                    <ul className="mb-2 ml-3 border-l border-line pl-3">
                      {entries.map((entry) => (
                        <li key={entry.to}>
                          <NavLink
                            to={entry.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              `block py-2 text-[0.8rem] ${
                                isActive
                                  ? 'text-gold-600'
                                  : 'text-muted hover:text-navy-900'
                              }`
                            }
                          >
                            {entry.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
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
