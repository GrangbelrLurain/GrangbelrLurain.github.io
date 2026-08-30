import { profile } from '../data/profile'
import type { Lang } from '../data/types'

const SITE = 'https://grangbelrlurain.github.io'

export const localeMeta = {
  kr: {
    htmlLang: 'ko',
    title: '김규연 | Frontend Lead · FE PL',
    description: profile.metaDescription.kr,
    ogTitle: '김규연 | Frontend Lead · FE PL',
    ogDescription:
      'Next.js 멀티테넌트 모노레포, Rust/Tauri 2 DX, PWA 메쉬를 설계하는 프론트엔드 리드 김규연입니다.',
    ogUrl: `${SITE}/ko/`,
    ogLocale: 'ko_KR',
  },
  en: {
    htmlLang: 'en',
    title: 'Kyuyeon Kim | Frontend Lead · FE PL',
    description: profile.metaDescription.en,
    ogTitle: 'Kyuyeon Kim | Frontend Lead · FE PL',
    ogDescription:
      'Frontend Lead Kyuyeon Kim — Next.js multi-tenant monorepo, Rust/Tauri 2 DX, and PWA mesh.',
    ogUrl: `${SITE}/en/`,
    ogLocale: 'en_US',
  },
} as const satisfies Record<
  Lang,
  {
    htmlLang: 'ko' | 'en'
    title: string
    description: string
    ogTitle: string
    ogDescription: string
    ogUrl: string
    ogLocale: string
  }
>

function setNamedMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setOg(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function applyDocumentMeta(lang: Lang) {
  const meta = localeMeta[lang]
  document.documentElement.lang = meta.htmlLang
  document.title = meta.title
  setNamedMeta('description', meta.description)
  setOg('og:title', meta.ogTitle)
  setOg('og:description', meta.ogDescription)
  setOg('og:url', meta.ogUrl)
  setOg('og:locale', meta.ogLocale)
}
