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

function readStored<T extends string>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key)
    return (v as T) || fallback
  } catch {
    return fallback
  }
}

export function UiPrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readStored('lang', 'kr'))
  const [theme, setTheme] = useState<Theme>(() => readStored('theme', 'light'))
  const [filter, setFilter] = useState<FilterId>('all')

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(theme)
    root.lang = lang === 'kr' ? 'ko' : 'en'
  }, [theme, lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    localStorage.setItem('lang', next)
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
