import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Lang, LocaleText, TaskCategory } from '../data/types'
import { applyDocumentMeta } from '../lib/documentMeta'
import {
  langFromPathname,
  localePath,
  readBrowserLanguages,
  resolveLang,
} from '../lib/locale'

type Theme = 'dark' | 'light'
type FilterId = 'all' | TaskCategory

type UiPrefsContextValue = {
  lang: Lang
  theme: Theme
  filter: FilterId
  setLang: (lang: Lang) => void
  toggleTheme: () => void
  setFilter: (filter: FilterId) => void
  t: (text: LocaleText) => string
}

const UiPrefsContext = createContext<UiPrefsContextValue | null>(null)

function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  return resolveLang({
    pathname: window.location.pathname,
    queryLang: new URLSearchParams(window.location.search).get('lang'),
    storedLang: readStored('lang'),
    languages: readBrowserLanguages(),
  })
}

export function UiPrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)
  const [theme, setTheme] = useState<Theme>(() => (readStored('theme') === 'dark' ? 'dark' : 'light'))
  const [filter, setFilter] = useState<FilterId>('all')

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(theme)
    applyDocumentMeta(lang)
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* private mode */
    }
  }, [theme, lang])

  const setLang = useCallback((next: Lang) => {
    try {
      localStorage.setItem('lang', next)
    } catch {
      /* private mode */
    }
    if (langFromPathname(window.location.pathname) === next) {
      setLangState(next)
      return
    }
    window.location.assign(localePath(next, window.location.hash, window.location.search))
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', next)
      return next
    })
  }, [])

  const t = useCallback((text: LocaleText) => text[lang], [lang])

  const value = useMemo(
    () => ({ lang, theme, filter, setLang, toggleTheme, setFilter, t }),
    [lang, theme, filter, setLang, toggleTheme, t],
  )

  return <UiPrefsContext.Provider value={value}>{children}</UiPrefsContext.Provider>
}

export function useUiPrefs() {
  const ctx = useContext(UiPrefsContext)
  if (!ctx) throw new Error('useUiPrefs must be used within UiPrefsProvider')
  return ctx
}
