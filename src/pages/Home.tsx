import { Link } from 'react-router-dom'
import { Section } from '@/components/layout/PageShell'
import { Reveal, SectionHeading } from '@/components/ui/primitives'
import { ProcessFlow } from '@/components/ui/diagrams'
import { useContent, useI18n } from '@/i18n/LanguageContext'

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const c = useContent()
  const h = c.home.hero

  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="grid-field-light absolute inset-0 opacity-70" aria-hidden />
      <div className="shell relative py-14 sm:py-20">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold-600">
          {h.eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-balance text-3xl leading-[1.12] sm:text-4xl lg:text-[3.25rem]">
          {h.title}
        </h1>
        <p className="mt-6 max-w-3xl text-[0.98rem] leading-relaxed text-ink-soft sm:text-base">
          {h.lede}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {h.actions.map((action) => (
            <Link
              key={action.to}
              to={action.to}
              className={
                action.primary
                  ? 'inline-flex items-center gap-2 rounded-[3px] bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800'
                  : 'inline-flex items-center gap-2 rounded-[3px] border border-line bg-white px-5 py-3 text-sm text-navy-900 transition-colors hover:border-gold-500/60 hover:text-gold-600'
              }
            >
              {action.label} <span aria-hidden>→</span>
            </Link>
          ))}
        </div>

        <dl className="mt-12 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
          {h.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Capabilities                                                        */
/* ------------------------------------------------------------------ */

function Capabilities() {
  const c = useContent()
  const t = useI18n().ui
  const section = c.home.capabilities

  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {section.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 60} className="h-full">
            <div className="flex h-full flex-col rounded-[4px] border border-line bg-white p-6">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                {item.kicker}
              </p>
              <h3 className="mt-2.5 text-lg leading-snug text-navy-900">
                {item.title}
              </h3>
              <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={140}>
        <div className="mt-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-gold-600 transition-colors hover:text-gold-700"
          >
            {t.common.allProducts} <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/* Featured case studies                                               */
/* ------------------------------------------------------------------ */

function Featured() {
  const c = useContent()
  const t = useI18n().ui
  const section = c.home.featured

  return (
    <Section className="border-y border-line bg-paper-2">
      <Reveal>
        <SectionHeading eyebrow={section.eyebrow} title={section.title} />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {section.items.map((item, i) => (
          <Reveal key={item.to} delay={i * 70} className="h-full">
            <Link
              to={item.to}
              className="group flex h-full flex-col rounded-[4px] border border-navy-900/25 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/50 hover:shadow-[0_18px_40px_-28px_rgba(10,30,60,0.45)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                  {item.kicker}
                </p>
                <span className="text-gold-500 transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </div>
              <h3 className="mt-3 text-xl leading-snug text-navy-900">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
              <p className="mt-6 border-t border-line pt-4 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-faint">
                {item.meta}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={140}>
        <div className="mt-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-gold-600 transition-colors hover:text-gold-700"
          >
            {t.common.allCases} <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/* Value chain — the compressed Wealth Management content              */
/* ------------------------------------------------------------------ */

function ValueChain() {
  const c = useContent()
  const section = c.home.chain

  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10">
          <ProcessFlow steps={section.steps} size="sm" />
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 rounded-[4px] border border-line bg-white p-6">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
            {section.valueKicker}
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {section.valuePoints.map((point) => (
              <li
                key={point}
                className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}

/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Featured />
      <ValueChain />
    </>
  )
}
