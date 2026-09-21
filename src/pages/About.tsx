import { Link } from 'react-router-dom'
import { PageHero, Section } from '@/components/layout/PageShell'
import { Callout, Reveal, SectionHeading } from '@/components/ui/primitives'
import { ExploreNext } from '@/components/blocks/BlockRenderer'
import { useContent, useI18n } from '@/i18n/LanguageContext'

type Group = { title: string; meta?: string; bullets: string[] }

function GroupSection({
  eyebrow,
  title,
  description,
  tone,
  groups,
}: {
  eyebrow: string
  title: string
  description: string
  tone: 'navy' | 'gold' | 'teal'
  groups: Group[]
}) {
  const accent =
    tone === 'navy' ? 'text-navy-900' : tone === 'gold' ? 'text-gold-600' : 'text-teal-700'
  const border =
    tone === 'navy'
      ? 'border-navy-900/25'
      : tone === 'gold'
        ? 'border-gold-500/40'
        : 'border-teal-600/35'

  return (
    <div className="mt-12">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
          <div>
            <p className={`font-mono text-[0.62rem] uppercase tracking-[0.16em] ${accent}`}>
              {eyebrow}
            </p>
            <h2 className="mt-2 text-xl text-navy-900 sm:text-2xl">{title}</h2>
          </div>
          <span className="rounded-[3px] border border-line px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
            {eyebrow}
          </span>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          {description}
        </p>
      </Reveal>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70} className="h-full">
            <div className={`h-full rounded-[4px] border ${border} bg-white p-6`}>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base text-navy-900">{group.title}</h3>
                {group.meta ? (
                  <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
                    {group.meta}
                  </span>
                ) : null}
              </div>
              <ul className="mt-4 space-y-2.5">
                {group.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const c = useContent()
  const t = useI18n().ui
  const copy = c.pages.about
  const about = c.about

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        subtitle={about.positioning}
        crumbs={[{ label: t.common.breadcrumbHome, to: '/' }, { label: copy.hero.eyebrow }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
          <div className="min-w-0">
            <Reveal>
              <SectionHeading eyebrow={copy.profile.eyebrow} title={copy.profile.title} />
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-6 space-y-4">
                {about.intro.map((p) => (
                  <p
                    key={p}
                    className="max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
                  {copy.skillsLabel}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {about.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-[3px] border border-line bg-white px-3 py-1.5 text-xs text-ink-soft transition-colors hover:border-gold-500/50 hover:text-navy-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <aside>
            <Reveal>
              <div className="rounded-[4px] border border-navy-900/20 bg-navy-900 p-6">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-400">
                  {t.about.atAGlance}
                </p>
                <dl className="mt-5 space-y-4">
                  {[
                    [t.about.sidebar.labels.focus, t.about.sidebar.values.focus],
                    [t.about.sidebar.labels.roleLens, t.about.sidebar.values.roleLens],
                    [t.about.sidebar.labels.method, t.about.sidebar.values.method],
                    [t.about.sidebar.labels.delivery, t.about.sidebar.values.delivery],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/45">
                        {k}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-white/85">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link
                  to={c.ctaRoute.to}
                  className="mt-6 inline-flex items-center gap-2 rounded-[3px] bg-gold-500 px-4 py-2.5 text-xs font-medium text-navy-950 transition-colors hover:bg-gold-400"
                >
                  {c.ctaRoute.label} <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>

        <GroupSection
          eyebrow={copy.groups.experience.eyebrow}
          title={copy.groups.experience.title}
          description={copy.groups.experience.description}
          tone="navy"
          groups={about.professionalExperience}
        />

        <GroupSection
          eyebrow={copy.groups.learning.eyebrow}
          title={copy.groups.learning.title}
          description={copy.groups.learning.description}
          tone="gold"
          groups={about.selfDirectedLearning}
        />

        <GroupSection
          eyebrow={copy.groups.projects.eyebrow}
          title={copy.groups.projects.title}
          description={copy.groups.projects.description}
          tone="teal"
          groups={about.personalProjects}
        />

        <Reveal>
          <div className="mt-12">
            <Callout tone="note" title={copy.transparencyTitle}>
              {about.disclaimer}
            </Callout>
          </div>
        </Reveal>

        <div className="mt-12">
          <ExploreNext
            items={[
              { label: c.navItems[6].label, to: '/case-studies', hint: 'Product thinking applied' },
              { label: c.navItems[4].label, to: '/digital-wealth', hint: 'Journey & requirements' },
              { label: t.nav.products, to: '/products', hint: 'Product knowledge' },
              { label: c.navItems[5].label, to: '/ai-wealth', hint: 'AI & RAG concepts' },
            ]}
          />
        </div>
      </Section>
    </>
  )
}
