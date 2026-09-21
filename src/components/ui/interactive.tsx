import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { Badge } from './primitives'
import { useI18n, useUI } from '@/i18n/LanguageContext'

/* ------------------------------------------------------------------ */
/* Accordion                                                           */
/* ------------------------------------------------------------------ */

export function Accordion({
  items,
  defaultOpen = 0,
  allowMultiple = false,
}: {
  items: { title: string; subtitle?: string; content: ReactNode; tag?: string }[]
  defaultOpen?: number | null
  allowMultiple?: boolean
}) {
  const [open, setOpen] = useState<number[]>(
    defaultOpen === null ? [] : [defaultOpen],
  )

  const toggle = (i: number) => {
    setOpen((prev) => {
      if (prev.includes(i)) return prev.filter((x) => x !== i)
      return allowMultiple ? [...prev, i] : [i]
    })
  }

  return (
    <div className="overflow-hidden rounded-[4px] border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = open.includes(i)
        return (
          <div key={item.title} className="border-b border-line last:border-0">
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 px-5 py-4 text-left transition-colors hover:bg-paper sm:px-6"
            >
              <span
                className={`mt-0.5 font-mono text-sm text-gold-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-90' : ''
                }`}
                aria-hidden
              >
                ›
              </span>
              <span className="flex-1">
                <span className="block text-[0.95rem] font-medium text-navy-900">
                  {item.title}
                </span>
                {item.subtitle ? (
                  <span className="mt-1 block text-xs leading-relaxed text-muted">
                    {item.subtitle}
                  </span>
                ) : null}
              </span>
              {item.tag ? <Badge tone="navy">{item.tag}</Badge> : null}
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-6 pl-11 text-sm leading-relaxed text-ink-soft sm:px-6 sm:pl-12">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Tabs                                                                */
/* ------------------------------------------------------------------ */

export function Tabs({
  tabs,
  dark = false,
}: {
  tabs: { id: string; label: string; content: ReactNode }[]
  dark?: boolean
}) {
  const [active, setActive] = useState(tabs[0]?.id)

  return (
    <div>
      <div
        className={`flex gap-1 overflow-x-auto no-scrollbar border-b ${
          dark ? 'border-white/15' : 'border-line'
        }`}
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`relative shrink-0 px-4 py-3 text-sm transition-colors ${
              active === tab.id
                ? dark
                  ? 'text-white'
                  : 'text-navy-900'
                : dark
                  ? 'text-white/50 hover:text-white/80'
                  : 'text-muted hover:text-navy-900'
            }`}
          >
            {tab.label}
            {active === tab.id ? (
              <span className="absolute inset-x-2 -bottom-px h-[2px] bg-gold-500" />
            ) : null}
          </button>
        ))}
      </div>
      <div className="pt-6">
        {tabs.find((t) => t.id === active)?.content}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Filter select                                                       */
/* ------------------------------------------------------------------ */



/* ------------------------------------------------------------------ */
/* Search palette                                                      */
/* ------------------------------------------------------------------ */

export interface SearchEntry {
  title: string
  type: string
  to: string
  keywords?: string
}

export function SearchPalette({
  entries,
  onClose,
  onNavigate,
}: {
  entries: SearchEntry[]
  onClose: () => void
  onNavigate: (to: string) => void
}) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const t = useUI()

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return entries.slice(0, 8)
    return entries
      .filter((e) =>
        `${e.title} ${e.type} ${e.keywords ?? ''}`.toLowerCase().includes(q),
      )
      .slice(0, 10)
  }, [query, entries])

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[10vh]">
      <div
        className="absolute inset-0 bg-navy-950/45 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[5px] border border-line-strong bg-white shadow-[0_30px_80px_-30px_rgba(5,15,34,0.6)]">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <span className="font-mono text-xs text-faint">/</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.common.searchPlaceholder}
            className="w-full bg-transparent py-4 text-sm text-ink outline-none placeholder:text-faint"
          />
          <kbd className="hidden rounded-[3px] border border-line px-2 py-1 font-mono text-[0.6rem] text-faint sm:block">
            {t.common.esc}
          </kbd>
        </div>
        <div className="max-h-[52vh] overflow-y-auto">
          {results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-muted">
              {t.common.searchNoResults(query)}
            </p>
          ) : (
            <ul>
              {results.map((r) => (
                <li key={`${r.type}-${r.title}`}>
                  <button
                    type="button"
                    onClick={() => onNavigate(r.to)}
                    className="flex w-full items-center gap-4 border-b border-line px-4 py-3 text-left last:border-0 hover:bg-paper"
                  >
                    <span className="w-24 shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-gold-600">
                      {r.type}
                    </span>
                    <span className="flex-1 text-sm text-navy-900">
                      {r.title}
                    </span>
                    <span className="font-mono text-[0.65rem] text-faint">
                      {r.to}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Journey explorer (stage rail + detail panel)                        */
/* ------------------------------------------------------------------ */

export interface JourneyStage {
  id: string
  title: string
  summary: string
  businessObjective: string[]
  businessRules: string[]
  data: string[]
  system: string[]
  api: string[]
  validation: string[]
  exceptionHandling: string[]
  audit: string[]
}

export function JourneyExplorer({ stages }: { stages: JourneyStage[] }) {
  const [activeId, setActiveId] = useState(stages[0]?.id)
  const active = stages.find((s) => s.id === activeId) ?? stages[0]
  const t = useUI()

  const fields: { key: keyof JourneyStage; label: string; note: string }[] = [
    {
      key: 'businessObjective',
      label: t.journey.fields.businessObjective,
      note: t.journey.fields.businessObjectiveNote,
    },
    {
      key: 'businessRules',
      label: t.journey.fields.businessRules,
      note: t.journey.fields.businessRulesNote,
    },
    { key: 'data', label: t.journey.fields.data, note: t.journey.fields.dataNote },
    { key: 'system', label: t.journey.fields.system, note: t.journey.fields.systemNote },
    { key: 'api', label: t.journey.fields.api, note: t.journey.fields.apiNote },
    {
      key: 'validation',
      label: t.journey.fields.validation,
      note: t.journey.fields.validationNote,
    },
    {
      key: 'exceptionHandling',
      label: t.journey.fields.exceptionHandling,
      note: t.journey.fields.exceptionHandlingNote,
    },
    {
      key: 'audit',
      label: t.journey.fields.audit,
      note: t.journey.fields.auditNote,
    },
  ]

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-[4px] border border-line bg-white">
          <p className="border-b border-line bg-paper px-4 py-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
            {t.journey.stagesTitle}
          </p>
          <ul className="max-h-[70vh] overflow-y-auto">
            {stages.map((s, i) => {
              const isActive = s.id === active.id
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(s.id)}
                    className={`flex w-full items-start gap-3 border-b border-line px-4 py-3 text-left transition-colors last:border-0 ${
                      isActive ? 'bg-navy-900/[0.04]' : 'hover:bg-paper'
                    }`}
                  >
                    <span
                      className={`num mt-0.5 text-[0.65rem] ${
                        isActive ? 'text-gold-600' : 'text-faint'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-sm leading-snug ${
                        isActive ? 'font-medium text-navy-900' : 'text-ink-soft'
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="overflow-hidden rounded-[4px] border border-line bg-white">
        <div className="border-b border-line px-5 py-5 sm:px-6">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
            {t.journey.stageDetail}
          </p>
          <h3 className="mt-2 text-xl text-navy-900">{active.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {active.summary}
          </p>
        </div>
        <div className="divide-y divide-line">
          {fields.map((f) => {
            const value = active[f.key] as string[]
            return (
              <div
                key={f.label}
                className="grid gap-2 px-5 py-5 sm:grid-cols-[210px_1fr] sm:gap-6 sm:px-6"
              >
                <div>
                  <p className="text-sm font-medium text-navy-900">{f.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-faint">
                    {f.note}
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {value.map((v) => (
                    <li
                      key={v}
                      className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-500/70" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Interest-rate explainer (plain-language, fixed income)              */
/* ------------------------------------------------------------------ */

/** Illustrative bond parameters — a bond that pays a fixed 4 per 100. */
const COUPON_PER_100 = 4
const RATE_MAX = 5

/** Simplified illustration, not a pricing model.
 *
 *  sensitivity = how many currency units of price each 1pp rate move is worth
 *  on a 100 unit holding. The multipliers step up with maturity because longer
 *  bonds are affected more by rate changes.
 *
 *  The relationship is directional and illustrative. It is bounded so the
 *  numbers stay plausible and are never presented as market quotes.
 */
export function RateLab() {
  const [rate, setRate] = useState(COUPON_PER_100)
  const [maturity, setMaturity] = useState(5)
  const { lang, ui: t } = useI18n()

  const sensitivity = maturity / 5
  const rateGap = rate - COUPON_PER_100
  const rawPrice = 100 - rateGap * sensitivity

  /* Keep the illustration in a believable band rather than producing extreme
     numbers: the point is the direction, not the precision. */
  const price = Math.max(88, Math.min(112, rawPrice))
  const priceMove = price - 100
  const bounded = Math.abs(rawPrice - price) > 0.005

  const direction =
    rateGap === 0 ? 'flat' : rateGap > 0 ? 'up' : 'down'

  const boxClass =
    direction === 'flat'
      ? { border: 'border-line', bar: 'bg-line-strong', text: 'text-muted' }
      : direction === 'up'
        ? { border: 'border-negative/30', bar: 'bg-negative', text: 'text-negative' }
        : { border: 'border-positive/30', bar: 'bg-positive', text: 'text-positive' }

  return (
    <div className="overflow-hidden rounded-[4px] border border-line bg-white">
      {/* ---------- header ---------- */}
      <div className="border-b border-line px-5 py-5 sm:px-6">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-gold-600">
          {t.rateLab.kicker}
        </p>
        <h3 className="mt-2 text-lg text-navy-900">{t.rateLab.title}</h3>
        <p className="mt-3 rounded-[3px] border-l-2 border-gold-500 bg-paper px-4 py-3 text-sm font-medium leading-relaxed text-navy-900">
          {t.rateLab.direction}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {t.rateLab.directionReverse}
        </p>
      </div>

      <div className="grid gap-8 px-5 py-6 sm:px-6 lg:grid-cols-[1fr_320px]">
        {/* ---------- left column ---------- */}
        <div className="space-y-7">
          {/* the bond in plain words */}
          <div className="rounded-[3px] border border-line bg-paper px-4 py-4">
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
              {t.rateLab.setupKicker}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {t.rateLab.setup}
            </p>
          </div>

          {/* control 1 — market rate */}
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <label
                htmlFor="rate-shift"
                className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-faint"
              >
                {t.rateLab.rateLabel}
              </label>
              <span className="num text-sm text-navy-900">
                {rate.toFixed(1)}%
              </span>
            </div>
            <input
              id="rate-shift"
              type="range"
              min={2}
              max={8}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="mt-3 w-full accent-navy-800"
            />
            <div className="mt-1 flex justify-between font-mono text-[0.6rem] text-faint">
              <span>2.0%</span>
              <span>{t.rateLab.rateAxisLow}</span>
              <span>{RATE_MAX > 0 ? '8.0%' : ''}</span>
            </div>
          </div>

          {/* control 2 — maturity */}
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <label
                htmlFor="duration"
                className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-faint"
              >
                {t.rateLab.maturityLabel}
              </label>
              <span className="num text-sm text-navy-900">
                {maturity} {t.rateLab.years}
              </span>
            </div>
            <input
              id="duration"
              type="range"
              min={1}
              max={10}
              step={1}
              value={maturity}
              onChange={(e) => setMaturity(Number(e.target.value))}
              className="mt-3 w-full accent-navy-800"
            />
            <p className="mt-2 text-xs leading-relaxed text-faint">
              {t.rateLab.maturityNote}
            </p>
          </div>

          {/* live plain-language result */}
          <div>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-faint">
              {t.rateLab.resultKicker}
            </p>

            <div className="mt-3 space-y-2.5">
              {[
                { n: 1, text: t.rateLab.steps.first(rate.toFixed(1)) },
                { n: 2, text: t.rateLab.steps.second },
                { n: 3, text: t.rateLab.steps.third },
              ].map((step) => (
                <div key={step.n} className="flex gap-3">
                  <span className="num mt-[2px] shrink-0 text-[0.62rem] text-gold-500">
                    {String(step.n).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              className={`mt-4 rounded-[3px] border ${boxClass.border} bg-paper px-4 py-4`}
            >
              <p className="text-sm font-medium leading-relaxed text-navy-900">
                {t.rateLab.conclusion}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {direction === 'flat'
                  ? t.rateLab.plainFlat
                  : direction === 'up'
                    ? t.rateLab.plainUp
                    : t.rateLab.plainDown}
              </p>
            </div>

            {bounded ? (
              <p className="mt-3 text-xs leading-relaxed text-caution">
                {t.rateLab.illustrative}
              </p>
            ) : null}
          </div>

          {/* the concrete every-day example */}
          <div className="rounded-[3px] border border-line bg-white px-4 py-4">
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-gold-600">
              {t.rateLab.exampleKicker}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {t.rateLab.example}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-faint">
              {t.rateLab.exampleNote}
            </p>
          </div>
        </div>

        {/* ---------- right column: illustration ---------- */}
        <div className="space-y-4">
          <div className="rounded-[3px] border border-line px-4 py-4">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint">
              {t.rateLab.coupon}
            </p>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="num text-xl text-navy-900">
                {COUPON_PER_100}
              </span>
              <span className="text-xs text-muted">{t.rateLab.perYear}</span>
            </div>
          </div>

          <div className="rounded-[3px] border border-line px-4 py-4">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint">
              {t.rateLab.newBond}
            </p>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="num text-xl text-navy-900">
                {rate.toFixed(1)}%
              </span>
              <span className="text-xs text-muted">{t.rateLab.perYear}</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-faint">
              {t.rateLab.newBondNote}
            </p>
          </div>

          <div className="rounded-[3px] border border-line px-4 py-4">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint">
              {t.rateLab.priceDirection}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <span
                className={`text-lg ${direction === 'flat' ? 'text-muted' : boxClass.text}`}
                aria-hidden
              >
                {direction === 'flat' ? '—' : direction === 'up' ? '↓' : '↑'}
              </span>
              <span className={`text-sm font-medium ${boxClass.text}`}>
                {direction === 'flat'
                  ? t.rateLab.priceFlat
                  : direction === 'up'
                    ? t.rateLab.priceDown
                    : t.rateLab.priceUp}
              </span>
            </div>
            <div
              className="mt-3 h-[3px] w-full overflow-hidden rounded-[2px] bg-line"
              aria-hidden
            >
              <span
                className={`block h-full ${boxClass.bar} transition-all duration-300`}
                style={{ width: `${Math.min(100, Math.abs(priceMove) * 6)}%` }}
              />
            </div>
            <p className="num mt-2 text-xs text-muted">
              {priceMove === 0
                ? `${t.rateLab.illustrativeLabel} ${t.rateLab.priceAtPar}`
                : `${t.rateLab.illustrativeLabel} ${Math.abs(priceMove).toFixed(1)}${
                    lang === 'zh' ? t.rateLab.illustrativeUnit : ''
                  }`}
            </p>
          </div>

          <p className="text-xs leading-relaxed text-faint">{t.rateLab.note}</p>
        </div>
      </div>

      {/* ---------- the one line to remember ---------- */}
      <div className="border-t border-line bg-navy-900 px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span className="text-gold-400" aria-hidden>
            ↔
          </span>
          <div>
            <p className="font-serif text-[1.02rem] leading-snug text-white">
              {t.rateLab.takeaway}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/65">
              {t.rateLab.takeawaySecond}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
