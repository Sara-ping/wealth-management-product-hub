import { Link } from 'react-router-dom'
import { PageHero, Section } from '@/components/layout/PageShell'
import { Badge, Callout, Reveal, SectionHeading } from '@/components/ui/primitives'
import { DataTable } from '@/components/ui/diagrams'
import { ExploreNext } from '@/components/blocks/BlockRenderer'
import {
  ApiContractBlock,
  DecisionFrameworkCard,
  DeliveryPanel,
  JourneyMapTable,
  KpiTable,
  RiskRegisterTable,
  UserStoryCard,
} from '@/components/po/Deliverables'
import { useContent, useI18n } from '@/i18n/LanguageContext'

export default function ProductOwner() {
  const c = useContent()
  const t = useI18n().ui
  const copy = c.pages.po

  return (
    <>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        crumbs={[{ label: t.common.breadcrumbHome, to: '/' }, { label: t.common.poLens }]}
        meta={
          <div className="flex flex-wrap gap-2">
            {copy.hero.badges.map((item) => (
              <Badge key={item} tone="navy">
                {item}
              </Badge>
            ))}
          </div>
        }
      />

      {/* ---------------- decision frameworks ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.s1.eyebrow}
            title={copy.s1.title}
            description={copy.s1.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {c.decisionFrameworks.map((f, i) => (
            <Reveal key={f.id} delay={i * 50} className="h-full">
              <DecisionFrameworkCard
                title={f.title}
                question={f.question}
                whenUsed={f.whenUsed}
                criteria={f.criteria}
                output={f.output}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- journey maps ---------------- */}
      <Section className="border-y border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.s2.eyebrow}
            title={copy.s2.title}
            description={copy.s2.description}
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
          <div className="mt-8">
            <JourneyMapTable
              stages={c.advisoryJourneyMap.stages}
              lanes={c.advisoryJourneyMap.lanes}
              persona={c.advisoryJourneyMap.persona}
              scenario={c.advisoryJourneyMap.scenario}
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 text-xs leading-relaxed text-faint">{copy.s2.note}</p>
        </Reveal>
      </Section>

      {/* ---------------- user stories & AC ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.s3.eyebrow}
            title={copy.s3.title}
            description={copy.s3.description}
          />
        </Reveal>

        <div className="mt-10 space-y-12">
          {c.epics.map((epic) => (
            <Reveal key={epic.id}>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                  <div>
                    <p className="num text-[0.62rem] uppercase tracking-[0.14em] text-gold-600">
                      {epic.id}
                    </p>
                    <h3 className="mt-2 text-xl text-navy-900">{epic.epic}</h3>
                  </div>
                  <Badge tone="teal">{t.common.epic}</Badge>
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                  {epic.context}
                </p>
                <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                  {epic.stories.map((story) => (
                    <UserStoryCard
                      key={story.id}
                      id={story.id}
                      asA={story.asA}
                      iWant={story.iWant}
                      soThat={story.soThat}
                      acceptance={story.acceptance}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- KPIs ---------------- */}
      <Section className="border-y border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.s4.eyebrow}
            title={copy.s4.title}
            description={c.kpiFramework.intro}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8">
            <KpiTable
              columns={t.common.kpiColumnsFull}
              rows={c.kpiFramework.items.map((k) => [
                k.metric,
                k.type,
                k.definition,
                k.baseline,
                k.target,
                k.guardrail,
              ])}
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 text-xs leading-relaxed text-faint">{copy.s4.note}</p>
        </Reveal>
      </Section>

      {/* ---------------- prioritisation ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.s5.eyebrow}
            title={copy.s5.title}
            description={c.riceExample.note}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8">
            <DataTable
              columns={copy.s5.columns}
              rows={c.riceExample.items.map((i) => [
                i.item,
                i.reach.toLocaleString(),
                String(i.impact),
                `${i.confidence}%`,
                String(i.effort),
                String(i.score),
                i.decision,
              ])}
              caption={copy.s5.caption}
            />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {copy.s5.mos.map((b) => (
            <Reveal key={b.key}>
              <div className="h-full rounded-[4px] border border-line bg-white p-5">
                <Badge tone="gold">{b.key}</Badge>
                <p className="mt-3 text-sm leading-relaxed text-muted">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- risk register ---------------- */}
      <Section className="border-y border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.s6.eyebrow}
            title={copy.s6.title}
            description={copy.s6.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8">
            <RiskRegisterTable rows={c.riskRegister} />
          </div>
        </Reveal>
      </Section>

      {/* ---------------- system / API touchpoints ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.s7.eyebrow}
            title={copy.s7.title}
            description={copy.s7.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8">
            <DataTable
              columns={copy.s7.columns}
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
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ApiContractBlock
              title={c.casePo['digital-mutual-fund-purchase'].contract.title}
              endpoint={c.casePo['digital-mutual-fund-purchase'].contract.endpoint}
              request={c.casePo['digital-mutual-fund-purchase'].contract.request}
              response={c.casePo['digital-mutual-fund-purchase'].contract.response}
              notes={c.casePo['digital-mutual-fund-purchase'].contract.notes}
            />
            <ApiContractBlock
              title={c.casePo['ai-wealth-advisor'].contract.title}
              endpoint={c.casePo['ai-wealth-advisor'].contract.endpoint}
              request={c.casePo['ai-wealth-advisor'].contract.request}
              response={c.casePo['ai-wealth-advisor'].contract.response}
              notes={c.casePo['ai-wealth-advisor'].contract.notes}
            />
          </div>
        </Reveal>
      </Section>

      {/* ---------------- release plan & hygiene ---------------- */}
      <Section className="border-y border-line bg-paper-2">
        <Reveal>
          <SectionHeading
            eyebrow={copy.s8.eyebrow}
            title={copy.s8.title}
            description={copy.s8.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8">
            <DataTable
              columns={copy.s8.columns}
              rows={c.releasePlan.map((r) => [
                r.increment,
                r.scope,
                r.outcome,
                r.dependency,
                r.exit,
              ])}
            />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {c.deliveryHygiene.map((d, i) => (
            <Reveal key={d.label} delay={i * 60}>
              <DeliveryPanel label={copy.s8.hygieneKicker} title={d.label}>
                <ul className="space-y-2">
                  {d.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </DeliveryPanel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- lifecycle artefacts & stakeholders ---------------- */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={copy.s9.eyebrow}
            title={copy.s9.title}
            description={copy.s9.description}
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8">
            <DataTable
              columns={copy.s9.lifecycleColumns}
              rows={c.lifecycleArtefacts.map((l) => [l.stage, l.artefact, l.question])}
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8">
            <DataTable
              columns={copy.s9.stakeholderColumns}
              rows={c.stakeholderMap.map((s) => [
                s.role,
                s.accountable,
                s.consults,
                s.artefact,
              ])}
              caption={copy.s9.stakeholderCaption}
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10">
            <Callout tone="insight" title={copy.s9.calloutTitle}>
              {copy.s9.calloutBody}
            </Callout>
          </div>
        </Reveal>

        <div className="mt-10">
          <ExploreNext
            items={[
              { label: c.navItems[6].label, to: '/case-studies', hint: 'Each with PO lens' },
              { label: c.navItems[4].label, to: '/digital-wealth', hint: 'Stage-level detail' },
              { label: c.navItems[2].label, to: '/product-logic', hint: 'Lifecycle & framework' },
              { label: c.navItems[5].label, to: '/ai-wealth', hint: 'Delivery phases' },
            ]}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/case-studies"
            className="rounded-[3px] bg-navy-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
          >
            {copy.s9.buttons.cases}
          </Link>
          <Link
            to="/digital-wealth"
            className="rounded-[3px] border border-line-strong px-5 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900"
          >
            {copy.s9.buttons.digital}
          </Link>
        </div>
      </Section>
    </>
  )
}
