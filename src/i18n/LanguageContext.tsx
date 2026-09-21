import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { ui, type Lang, type UI } from './ui'
import { content, type Content } from '@/data'

interface I18nValue {
  lang: Lang
  setLang: (lang: Lang) => void
  ui: UI
  c: Content
}

const I18nContext = createContext<I18nValue | null>(null)

const STORAGE_KEY = 'wmph-lang'

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'zh') return saved
  return navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage may be unavailable — language still switches for the session */
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang === 'zh' ? 'zh-CN' : 'en'
    root.dataset.lang = lang
    document.title =
      lang === 'zh'
        ? '财富管理产品中心 — 从金融产品到数字财富管理'
        : 'Wealth Management Product Hub — From Financial Products to Digital Wealth Management'
  }, [lang])

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, ui: ui[lang] as UI, c: content[lang] }),
    [lang, setLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside LanguageProvider')
  return ctx
}

/* Convenience hooks */
export function useUI(): UI {
  return useI18n().ui
}

export function useContent(): Content {
  return useI18n().c
}

export function useLang(): [Lang, (l: Lang) => void] {
  const { lang, setLang } = useI18n()
  return [lang, setLang]
}
