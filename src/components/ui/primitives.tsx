import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from 'react'

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/* ------------------------------------------------------------------ */
/* Headings                                                            */
/* ------------------------------------------------------------------ */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  aside,
  className = '',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  aside?: ReactNode
  className?: string
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === 'center' ? 'items-center text-center' : 'items-start'
      } md:flex-row md:items-end md:justify-between ${
        align === 'center' ? 'md:flex-col md:items-center' : ''
      } ${className}`}
    >
      <div className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
        {eyebrow ? (
          <p className={dark ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</p>
        ) : null}
        <h2
          className={`mt-3 text-balance text-2xl leading-tight sm:text-3xl lg:text-[2.1rem] ${
            dark ? 'text-white' : 'text-navy-900'
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-4 text-[0.95rem] leading-relaxed sm:text-base ${
              dark ? 'text-white/65' : 'text-muted'
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Badges / tags                                                       */
/* ------------------------------------------------------------------ */

export type Tone =
  | 'navy'
  | 'gold'
  | 'teal'
  | 'neutral'
  | 'positive'
  | 'caution'
  | 'negative'
  | 'outline-dark'

const toneMap: Record<Tone, string> = {
  navy: 'bg-navy-900/8 text-navy-900 border-navy-900/15',
  gold: 'bg-gold-500/12 text-gold-600 border-gold-500/30',
  teal: 'bg-teal-600/10 text-teal-700 border-teal-600/25',
  neutral: 'bg-paper-2 text-muted border-line',
  positive: 'bg-positive/10 text-positive border-positive/25',
  caution: 'bg-caution/10 text-caution border-caution/25',
  negative: 'bg-negative/10 text-negative border-negative/25',
  'outline-dark': 'bg-white/5 text-white/75 border-white/20',
}

export function Badge({
  children,
  tone = 'neutral',
  className = '',
}: {
  children: ReactNode
  tone?: Tone
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[3px] border px-2 py-[3px] font-mono text-[0.65rem] uppercase tracking-[0.12em] ${toneMap[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[3px] border border-line bg-white px-2.5 py-1 text-xs text-ink-soft">
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Panels                                                              */
/* ------------------------------------------------------------------ */

export function Panel({
  children,
  className = '',
  hover = false,
  padding = 'p-5 sm:p-6',
}: {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: string
}) {
  return (
    <div
      className={`card ${hover ? 'card-hover' : ''} ${padding} ${className}`}
    >
      {children}
    </div>
  )
}

export function PanelLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-faint">
      {children}
    </p>
  )
}

/* ------------------------------------------------------------------ */
/* Callout                                                             */
/* ------------------------------------------------------------------ */

export function Callout({
  tone = 'note',
  title,
  children,
}: {
  tone?: 'note' | 'warning' | 'insight'
  title: string
  children: ReactNode
}) {
  const styles = {
    note: 'border-navy-900/12 bg-white',
    warning: 'border-caution/35 bg-caution/6',
    insight: 'border-teal-600/30 bg-teal-600/6',
  }[tone]

  const accent = {
    note: 'bg-navy-900',
    warning: 'bg-caution',
    insight: 'bg-teal-600',
  }[tone]

  return (
    <div className={`relative border ${styles} rounded-[4px] p-5 sm:p-6`}>
      <span className={`absolute left-0 top-0 h-full w-[3px] ${accent}`} />
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-faint">
        {title}
      </p>
      <div className="mt-2 text-sm leading-relaxed text-ink-soft">{children}</div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Stat / metric                                                       */
/* ------------------------------------------------------------------ */

export function Metric({
  label,
  value,
  hint,
  dark = false,
}: {
  label: string
  value: string
  hint?: string
  dark?: boolean
}) {
  return (
    <div
      className={`border-l pl-4 ${
        dark ? 'border-white/20' : 'border-gold-500/50'
      }`}
    >
      <p
        className={`num text-2xl sm:text-[1.75rem] ${
          dark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] ${
          dark ? 'text-white/55' : 'text-faint'
        }`}
      >
        {label}
      </p>
      {hint ? (
        <p
          className={`mt-2 text-xs leading-relaxed ${
            dark ? 'text-white/60' : 'text-muted'
          }`}
        >
          {hint}
        </p>
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Divider                                                             */
/* ------------------------------------------------------------------ */

export function Divider({ className = '' }: { className?: string }) {
  return <div className={`h-px w-full bg-line ${className}`} />
}
