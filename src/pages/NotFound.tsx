import { Link } from 'react-router-dom'
import { Section } from '@/components/layout/PageShell'
import { useI18n } from '@/i18n/LanguageContext'

export default function NotFound() {
  const t = useI18n().ui

  return (
    <Section className="pt-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold-600">
          {t.notFound.kicker}
        </p>
        <h1 className="mt-4 text-3xl text-navy-900">{t.notFound.title}</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">{t.notFound.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-[3px] bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
          >
            {t.notFound.home}
          </Link>
          <Link
            to="/products"
            className="rounded-[3px] border border-line-strong px-5 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
          >
            {t.notFound.products}
          </Link>
        </div>
      </div>
    </Section>
  )
}
