import { Link } from 'react-router-dom'
import { Reveal, SectionHeading } from '@/components/ui/primitives'
import { ProcessFlow } from '@/components/ui/diagrams'
import { Section } from '@/components/layout/PageShell'
import { useContent } from '@/i18n/LanguageContext'

export default function Home() {
  const c = useContent()
  const h = c.home

  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/* Hero                                                        */}
      {/* ---------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="grid-field absolute inset-0" aria-hidden />
        <div
          className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-teal-600/15 blur-3xl"
          aria-hidden
        />
        <div className="shell relative py-20 sm:py-28 lg:py-32">
          <Reveal>
            <p className="eyebrow-dark">{h.hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl text-balance text-[2.1rem] leading-[1.1] text-white sm:text-[2.75rem] lg:text-[3.5rem]">
              {h.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-white/65 sm:text-lg">
              {h.hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-gold-400">
              {h.hero.tagline}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/products"
                className="rounded-[3px] bg-gold-500 px-6 py-3.5 text-center text-sm font-medium text-navy-950 transition-colors hover:bg-gold-400"
              >
                {h.hero.primaryCta}
              </Link>
              <Link
                to="/case-studies"
                className="rounded-[3px] border border-white/25 px-6 py-3.5 text-center text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                {h.hero.secondaryCta}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-16 grid gap-8 border-t border-white/12 pt-8 sm:grid-cols-3">
              {h.metrics.map((m) => (
                <div key={m.label}>
                  <p className="num text-3xl text-white">{m.value}</p>
                  <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold-400">
                    {m.label}
                  </p>
                  <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/50">
                    {m.hint}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Product map                                                 */}
      {/* ---------------------------------------------------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={h.map.eyebrow}
            title={h.map.title}
            description={h.map.description}
          />
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-[4px] border border-line bg-white">
          <div className="border-b border-line bg-navy-900 px-5 py-5 sm:px-7">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold-400">
              {h.map.eyebrow}
            </p>
            <p className="mt-2 font-serif text-lg text-white">{h.map.panelTitle}</p>
          </div>
          <div className="grid gap-px bg-line md:grid-cols-3">
            {c.productMap.map((group, i) => (
              <Reveal key={group.title} delay={i * 90} className="h-full">
                <div className="h-full bg-white p-6 sm:p-7">
                  <p className="num text-[0.62rem] text-gold-500">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-base text-navy-900">{group.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 border-b border-line pb-2.5 text-sm text-ink-soft last:border-0 last:pb-0"
                      >
                        <span className="h-1 w-1 rounded-full bg-gold-500/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-paper px-5 py-4 sm:px-7">
            <p className="text-xs text-muted">{h.map.footerNote}</p>
            <Link
              to="/products"
              className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-gold-600 hover:text-navy-900"
            >
              {h.map.cta} →
            </Link>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* From product to digital experience                          */}
      {/* ---------------------------------------------------------- */}
      <Section className="border-y border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={h.flow.eyebrow}
            title={h.flow.title}
            description={h.flow.description}
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10">
            <ProcessFlow steps={c.fromProductToExperience} />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <p className="max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
              {h.flow.paragraph}
            </p>
            <div className="rounded-[3px] border border-navy-900/15 bg-white px-5 py-5">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                {h.flow.poTitle}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {h.flow.poItems.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Three layers                                                */}
      {/* ---------------------------------------------------------- */}
      <Section dark>
        <Reveal>
          <SectionHeading
            dark
            eyebrow={h.layersHeading.eyebrow}
            title={h.layersHeading.title}
            description={h.layersHeading.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-px bg-white/12 md:grid-cols-3">
          {c.layers.map((layer, i) => (
            <Reveal key={layer.index} delay={i * 100} className="h-full">
              <div className="h-full bg-navy-900 p-7">
                <p className="num text-[0.62rem] uppercase tracking-[0.16em] text-gold-400">
                  {layer.index}
                </p>
                <h3 className="mt-4 text-lg text-white">{layer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {layer.body}
                </p>
                <Link
                  to={layer.to}
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-gold-400 transition-colors hover:text-white"
                >
                  {layer.linkLabel} <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Product Owner band                                          */}
      {/* ---------------------------------------------------------- */}
      <Section className="border-b border-line bg-paper-2">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">{h.poBand.eyebrow}</p>
              <h2 className="mt-3 text-balance text-2xl leading-tight sm:text-[2rem]">
                {h.poBand.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {h.poBand.description}
              </p>
            </div>
            <Link
              to="/product-owner"
              className="shrink-0 rounded-[3px] bg-navy-900 px-6 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-navy-800"
            >
              {h.poBand.cta}
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {h.poBand.cards.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} className="h-full">
              <div className="h-full bg-white p-6">
                <h3 className="text-[0.95rem] text-navy-900">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Explore grid                                                */}
      {/* ---------------------------------------------------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={h.explore.eyebrow}
            title={h.explore.title}
            description={h.explore.description}
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.exploreCards.map((card, i) => (
            <Reveal key={card.to} delay={i * 60} className="h-full">
              <Link
                to={card.to}
                className="group flex h-full flex-col rounded-[4px] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/45 hover:shadow-[0_18px_40px_-28px_rgba(10,30,60,0.45)]"
              >
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                  {card.kicker}
                </p>
                <h3 className="mt-3 text-lg text-navy-900">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {card.body}
                </p>
                <p className="mt-5 border-t border-line pt-4 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-faint">
                  {card.meta}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 rounded-[4px] border border-line bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                  {h.catalogue.kicker}
                </p>
                <h3 className="mt-2 text-xl text-navy-900">{h.catalogue.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {h.catalogue.body(c.products.length)}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="rounded-[3px] bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
                >
                  {h.catalogue.primary}
                </Link>
                <Link
                  to="/digital-wealth"
                  className="rounded-[3px] border border-line-strong px-5 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
                >
                  {h.catalogue.secondary}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
