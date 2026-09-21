import { Link } from 'react-router-dom'
import { PageHero, Section } from '@/components/layout/PageShell'
import { Badge, Reveal, SectionHeading } from '@/components/ui/primitives'
import { DataTable, ProcessFlow, Timeline } from '@/components/ui/diagrams'
import { ExploreNext } from '@/components/blocks/BlockRenderer'
import { PersonaCard } from '@/components/po/Deliverables'
import { useContent, useI18n } from '@/i18n/LanguageContext'

export default function WealthManagement() {
  const c = useContent()
  const t = useI18n().ui
  const copy = c.pages.wealth
  const segLabels = copy.segmentation.labels

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        crumbs={[
          { label: t.common.breadcrumbHome, to: '/' },
          { label: copy.hero.eyebrow },
        ]}
      />

      {/* ---------------- ecosystem ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.ecosystem.eyebrow}
            title={copy.ecosystem.title}
            description={copy.ecosystem.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Timeline
              items={c.ecosystem.spine.map((s) => ({
                title: s.title,
                body: s.detail,
              }))}
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[4px] border border-line bg-white p-6 sm:p-7">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                {copy.ecosystem.solutionsKicker}
              </p>
              <h3 className="mt-2 text-lg text-navy-900">
                {copy.ecosystem.solutionsTitle}
              </h3>
              <div className="mt-5 space-y-4">
                {c.solutionFamilies.map((item) => (
                  <Link
                    key={item.title}
                    to={item.to}
                    className="group block border-b border-line pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-[0.95rem] text-navy-900">{item.title}</h4>
                      <span className="text-gold-500 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- segmentation ---------------- */}
      <Section className="border-y border-line bg-paper-2">
        <div id="segmentation" className="scroll-mt-24">
          <Reveal>
            <SectionHeading
              eyebrow={copy.segmentation.eyebrow}
              title={copy.segmentation.title}
              description={copy.segmentation.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {c.segments.map((s, i) => (
              <Reveal key={s.name} delay={i * 70} className="h-full">
                <div className="h-full rounded-[4px] border border-line bg-white p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg text-navy-900">{s.name}</h3>
                    <span className="num text-[0.62rem] text-gold-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.profile}
                  </p>
                  <dl className="mt-5 space-y-3 border-t border-line pt-4">
                    {[
                      [segLabels[0], s.needs],
                      [segLabels[1], s.serviceModel],
                      [segLabels[2], s.advisoryModel],
                      [segLabels[3], s.productComplexity],
                      [segLabels[4], s.digitalExperience],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
                          {label}
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10">
              <DataTable
                columns={[
                  copy.segmentation.segmentColumn,
                  segLabels[0],
                  segLabels[1],
                  segLabels[2],
                  segLabels[3],
                  segLabels[4],
                ]}
                rows={c.segments.map((s) => [
                  s.name,
                  s.needs,
                  s.serviceModel,
                  s.advisoryModel,
                  s.productComplexity,
                  s.digitalExperience,
                ])}
                caption={copy.segmentation.caption}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- personas ---------------- */}
      <Section>
        <div id="personas" className="scroll-mt-24">
          <Reveal>
            <SectionHeading
              eyebrow={copy.personas.eyebrow}
              title={copy.personas.title}
              description={copy.personas.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {c.personas.map((p, i) => (
              <Reveal key={p.name} delay={i * 70} className="h-full">
                <PersonaCard
                  name={p.name}
                  segment={p.segment}
                  profile={p.profile}
                  jobsToBeDone={p.jobsToBeDone}
                  needs={p.needs}
                  painPoints={p.painPoints}
                  productFit={p.productFit}
                  digitalExpectation={p.digitalExpectation}
                  successSignal={p.successSignal}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-8 rounded-[4px] border border-line bg-white p-6">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
                {copy.personas.whyTitle}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
                {t.about.whyPersonas}
              </p>
              <Link
                to="/product-owner"
                className="mt-4 inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-gold-600 hover:text-navy-900"
              >
                {t.about.journeyLink} <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- core processes ---------------- */}
      <Section className="border-y border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.processes.eyebrow}
            title={copy.processes.title}
            description={copy.processes.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {c.coreProcesses.map((p, i) => (
            <Reveal key={p.term} delay={i * 50} className="h-full">
              <div className="h-full rounded-[4px] border border-line bg-white p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg text-navy-900">{p.term}</h3>
                  {p.tag ? <Badge tone="navy">{p.tag}</Badge> : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.definition}
                </p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-gold-600">
                    {copy.processes.noteLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {p.baAngle}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- value chain ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.valueChain.eyebrow}
            title={copy.valueChain.title}
            description={copy.valueChain.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <ProcessFlow steps={c.valueChain} />
          </div>
        </Reveal>

        <div className="mt-14">
          <ExploreNext
            items={[
              {
                label: c.navItems[4].label,
                to: '/digital-wealth',
                hint: copy.buttons.digitalHint,
              },
              {
                label: t.common.poLens,
                to: '/product-owner',
                hint: copy.buttons.poHint,
              },
              {
                label: c.navItems[6].label,
                to: '/case-studies',
                hint: copy.buttons.casesHint,
              },
              {
                label: c.navItems[5].label,
                to: '/ai-wealth',
                hint: copy.buttons.aiHint,
              },
            ]}
          />
        </div>
      </Section>
    </>
  )
}
