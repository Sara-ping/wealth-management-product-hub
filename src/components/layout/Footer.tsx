import { Link } from 'react-router-dom'
import { useContent, useI18n } from '@/i18n/LanguageContext'

export function Footer() {
  const c = useContent()
  const t = useI18n().ui

  return (
    <footer className="mt-24 border-t border-line bg-navy-950 text-white/70">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-white/25 text-[0.8rem] font-semibold text-gold-400">
                W
              </span>
              <span className="font-serif text-[0.95rem] text-white">
                Wealth Management Product Hub
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
              {t.footer.description}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-white/40">
              {t.footer.disclaimer}
            </p>
          </div>

          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-400">
              {t.footer.explore}
            </p>
            <ul className="mt-4 space-y-2.5">
              {c.navItems.slice(1).map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/product-owner"
                  className="text-sm text-gold-400 transition-colors hover:text-white"
                >
                  {t.common.poLens}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-400">
              {t.footer.products}
            </p>
            <ul className="mt-4 space-y-2.5">
              {c.productNavItems.slice(0, 6).map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright(new Date().getFullYear())}</p>
          <p className="font-mono uppercase tracking-[0.14em]">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
