import { Link } from 'react-router-dom'
import { PageHero, Section } from '@/components/layout/PageShell'
import { Reveal, SectionHeading } from '@/components/ui/primitives'
import { DataTable, ProcessFlow } from '@/components/ui/diagrams'
import { JourneyExplorer } from '@/components/ui/interactive'
import { ExploreNext } from '@/components/blocks/BlockRenderer'
import { JourneyMapTable } from '@/components/po/Deliverables'
import { useContent, useI18n } from '@/i18n/LanguageContext'

export default function DigitalWealth() {
  const c = useContent()
  const t = useI18n().ui
  const copy = c.pages.digital

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

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.intro.eyebrow}
            title={copy.intro.title}
            description={copy.intro.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <ProcessFlow
              steps={c.digitalJourney.map((s) => ({ label: s.title }))}
              size="sm"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="border-y border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.interactive.eyebrow}
            title={copy.interactive.title}
            description={copy.interactive.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <JourneyExplorer stages={c.digitalJourney} />
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.cjm.eyebrow}
            title={copy.cjm.title}
            description={copy.cjm.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <JourneyMapTable
              stages={c.journeyMap.stages}
              lanes={c.journeyMap.lanes}
              persona={c.journeyMap.persona}
              scenario={c.journeyMap.scenario}
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 text-xs leading-relaxed text-faint">{copy.cjm.note}</p>
        </Reveal>
      </Section>

      <Section className="border-y border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.systems.eyebrow}
            title={copy.systems.title}
            description={copy.systems.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <DataTable
              columns={copy.systems.columns}
              rows={c.systemTouchpoints.map((s) => [
                s.stage,
                s.system,
                s.api,
                s.data,
                s.note,
              ])}
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/product-owner"
              className="rounded-[3px] bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
            >
              {copy.buttons.po}
            </Link>
            <Link
              to="/case-studies"
              className="rounded-[3px] border border-line-strong px-5 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
            >
              {copy.buttons.cases}
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.principles.eyebrow}
            title={copy.principles.title}
            description={copy.principles.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.principles.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 50} className="h-full">
              <div className="h-full rounded-[4px] border border-line bg-white p-6">
                <p className="num text-[0.62rem] text-gold-500">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-base text-navy-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <ExploreNext
            items={[
              {
                label: t.nav.cases,
                to: '/case-studies',
                hint: copy.buttons.casesHint,
              },
              {
                label: t.nav.ai,
                to: '/ai-wealth',
                hint: copy.buttons.aiHint,
              },
              {
                label: t.nav.logic,
                to: '/product-logic',
                hint: copy.buttons.logicHint,
              },
              {
                label: t.common.poLens,
                to: '/product-owner',
                hint: copy.buttons.poHint,
              },
            ]}
          />
        </div>
      </Section>
    </>
  )
}
