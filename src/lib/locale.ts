import type { Lang } from '../data/types'

export const LOCALE_PATH: Record<Lang, '/ko/' | '/en/'> = {
  kr: '/ko/',
  en: '/en/',
}

export function langFromPathname(pathname: string): Lang | null {
  const p = pathname.replace(/\/+$/, '') || '/'
  if (p === '/ko' || p === '/ko/index.html') return 'kr'
  if (p === '/en' || p === '/en/index.html') return 'en'
  return null
}

export function langFromQuery(value: string | null | undefined): Lang | null {
  if (!value) return null
  const q = value.toLowerCase()
  if (q === 'en') return 'en'
  if (q === 'ko' || q === 'kr') return 'kr'
  return null
}

export function langFromStored(value: string | null | undefined): Lang | null {
  if (value === 'en' || value === 'kr') return value
  if (value === 'ko') return 'kr'
  return null
}

/** Primary language only — Korean browsers, not “ko as a fallback”. */
export function isKoreanPrimaryLanguage(languages: readonly string[]): boolean {
  const primary = (languages[0] || '').toLowerCase()
  return primary === 'ko' || primary.startsWith('ko-')
}

/**
 * Resolve UI language.
 * Precedence: `?lang=` → `/en`|`/ko` path → saved toggle → primary language → English.
 */
export function resolveLang(input: {
  pathname: string
  queryLang?: string | null
  storedLang?: string | null
  languages?: readonly string[]
}): Lang {
  return (
    langFromQuery(input.queryLang) ??
    langFromPathname(input.pathname) ??
    langFromStored(input.storedLang) ??
    (isKoreanPrimaryLanguage(input.languages ?? []) ? 'kr' : 'en')
  )
}

export function localePath(lang: Lang, hash = '', search = ''): string {
  const raw = search.startsWith('?') ? search.slice(1) : search
  const params = new URLSearchParams(raw)
  params.delete('lang')
  const q = params.toString()
  return `${LOCALE_PATH[lang]}${q ? `?${q}` : ''}${hash}`
}

export function readBrowserLanguages(): string[] {
  if (typeof navigator === 'undefined') return []
  if (navigator.languages?.length) return [...navigator.languages]
  return navigator.language ? [navigator.language] : []
}
