import type { LocaleText, Metric, Project, SkillRow } from './types'

export const profile = {
  name: { kr: '김규연', en: 'Kyuyeon Kim' } satisfies LocaleText,
  title: {
    kr: '프론트엔드 리드 · 프로덕트 엔지니어 (4년 5개월 차)',
    en: 'Frontend Lead · Product Engineer (4+ Years Exp)',
  } satisfies LocaleText,
  tagline: {
    kr: '"도메인이 복잡할수록 구조를 먼저 잡고, 공통 모듈과 빌드·배포 체계로 반복 비용을 줄입니다."',
    en: '"When domains get complex, I start with structure — cutting repeat cost through shared modules and build/release systems."',
  } satisfies LocaleText,
  brandRole: {
    kr: 'FE PL · Product Eng',
    en: 'FE Lead · Product Eng',
  } satisfies LocaleText,
  email: 'lurain003@gmail.com',
  github: 'https://github.com/GrangbelrLurain',
  site: 'https://delete-horizon.com',
  location: { kr: '수원 / 서울, 대한민국', en: 'Suwon / Seoul, South Korea' },
  photo: '/images/profile.jpg',
  photoAlt: { kr: '김규연 프로필 사진', en: 'Portrait of Kyuyeon Kim' },
  metaDescription: {
    kr: '프론트엔드 리드 & 프로덕트 엔지니어 김규연의 실측 기트 포트폴리오입니다. 모두투어 차세대 웹 파견 FE PL, pnpm/Turborepo 멀티테넌트 모노레포, Rust/Tauri 2 DX 도구, PWA 메쉬 아키텍처.',
    en: 'Portfolio of Kyuyeon Kim — Frontend Lead & Product Engineer. Modetour next-gen FE PL, pnpm/Turborepo multi-tenant monorepo, Rust/Tauri 2 DX tooling, PWA mesh architecture.',
  },
}

export const metrics: Metric[] = [
  {
    value: '27k+',
    label: {
      kr: 'PlatformWeb 팀 레포 규모',
      en: 'PlatformWeb Team Repo Scale',
    },
  },
  {
    value: '300+',
    label: {
      kr: '멀티테넌트 파트너(ONBP) 사이트',
      en: 'Multi-tenant Partner (ONBP) Sites',
    },
  },
  {
    value: '3~5',
    label: {
      kr: 'FE 팀 규모 · PL로 리딩',
      en: 'FE Team Size · Led as PL',
    },
  },
  {
    value: '3 Domains',
    label: {
      kr: '커머스 → 금융 → 여행 플랫폼',
      en: 'Commerce → Fintech → Travel Platform',
    },
  },
]

export const aboutParagraphs: LocaleText[] = [
  {
    kr: '안녕하세요. <strong>프론트엔드 리드 & 프로덕트 엔지니어 김규연</strong>입니다.',
    en: 'I am <strong>Kyuyeon Kim</strong>, a <strong>Frontend Lead & Product Engineer with 4+ years of experience</strong> based in South Korea.',
  },
  {
    kr: '크리에이터 커머스(샵팬픽)로 시작해 B2B 자금관리(지에스아이코 · KFTC 오픈뱅킹)를 거쳐, 현재는 <strong>와이리즘에서 모두투어 차세대 웹 FE PL</strong>로서 B2C 및 약 300여 개 파트너사(ONBP)를 아우르는 <strong>Next.js 멀티테넌트 모노레포</strong>를 설계·리딩합니다.',
    en: 'Starting in creator commerce (ShopFanPick) and B2B cash management (GSIKO · KFTC), I now lead Modetour next-gen web as FE PL at YRISM — designing a <strong>Next.js multi-tenant monorepo</strong> for B2C and ~300 partner (ONBP) sites.',
  },
  {
    kr: '호텔·항공·검색·예약·인증·프로모션 등 핵심 도메인 차세대 개편을 리딩하고, <code>web-b2c</code>/<code>web-onbp</code>/<code>core</code> 패키지 경계, pnpm·Turborepo 빌드, React 19 공통 패키지, UI playground까지 <strong>기능 개발과 플랫폼 기반을 함께</strong> 책임집니다.',
    en: 'I lead next-gen work across hotel, flight, search, booking, auth, and promotions — while also owning platform foundations: package boundaries (<code>web-b2c</code>/<code>web-onbp</code>/<code>core</code>), pnpm·Turborepo builds, React 19 shared packages, and the UI playground.',
  },
  {
    kr: '사이드로는 <strong>horizon-gateway</strong>(Rust/Tauri 2 DX)와 <strong>horizon-mesh</strong>(PWA 메쉬)를 설계·운영합니다.',
    en: 'On the side I design and run <strong>horizon-gateway</strong> (Rust/Tauri 2 DX) and <strong>horizon-mesh</strong> (PWA mesh).',
  },
]

export const projects: Project[] = [
  {
    id: 'horizon-gateway',
    name: 'horizon-gateway',
    techLine: 'Rust · Tauri 2 · React · TypeScript · TanStack · Release v2.6.0',
    links: [
      { label: 'Live ↗', href: 'https://gateway.delete-horizon.com' },
      { label: 'GitHub ↗', href: 'https://github.com/GrangbelrLurain/horizon-gateway' },
    ],
    bullets: [
      {
        kr: '<strong>로컬 DX 데스크톱 앱</strong>: 로컬에서 프로덕션에 가까운 네트워크·인프라 환경을 재현하는 데스크톱 툴 (Rust · Tauri 2 단일 바이너리)',
        en: '<strong>Local DX Desktop App</strong>: Desktop tool that reproduces production-like network/infra locally (Rust · Tauri 2 single binary)',
      },
      {
        kr: '<strong>내장 디버그·샌드박스</strong>: HTTPS 로컬 트래픽 디버그 프록시, API 모킹 샌드박스, 도메인 헬스체크, 모바일 터널링',
        en: '<strong>Built-in Debug & Sandbox</strong>: Local HTTPS traffic debug proxy, API mocking sandbox, domain health check, and mobile tunneling',
      },
      {
        kr: '<strong>AI 에이전트 연동</strong>: Cursor, Claude, Gemini 등이 로컬 인프라 상태를 읽고 제어할 수 있는 CLI·Agent Skill 계층',
        en: '<strong>AI Agent Integration</strong>: CLI & Agent Skill layers so agents (Cursor, Claude, Gemini) can observe and control local infra state',
      },
    ],
    footerUrls: [
      { label: 'https://gateway.delete-horizon.com', href: 'https://gateway.delete-horizon.com' },
    ],
  },
  {
    id: 'horizon-mesh',
    name: 'horizon-mesh',
    techLine: 'Turborepo · React · TypeScript · PWA · Cloudflare Pages',
    links: [
      { label: 'Travel ↗', href: 'https://travel.delete-horizon.com/?mode=edit' },
      { label: 'Hotel ↗', href: 'https://hotel.delete-horizon.com/' },
      { label: 'Auth ↗', href: 'https://auth.delete-horizon.com/' },
    ],
    bullets: [
      {
        kr: '<strong>Serverless Multi-Frontend App 메쉬</strong>: 서로 다른 독립 도메인에 배포된 PWA를 공통 embed protocol로 연동하는 정적 아키텍처',
        en: '<strong>Serverless Micro-Frontend App Mesh</strong>: Connected independently-deployed PWAs across separate domains using a shared embed protocol',
      },
      {
        kr: '<strong>모듈화 및 오프라인 지원</strong>: <code>travel</code>, <code>hotel</code>, <code>auth</code> 서비스 모듈화 및 IndexedDB 기반 Local-First 오프라인 작동 처리',
        en: '<strong>Modular Offline Architecture</strong>: Modularized <code>travel</code>, <code>hotel</code>, and <code>auth</code> with Local-First IndexedDB offline support',
      },
    ],
    footerUrls: [
      { label: 'https://travel.delete-horizon.com', href: 'https://travel.delete-horizon.com/?mode=edit' },
      { label: 'https://hotel.delete-horizon.com', href: 'https://hotel.delete-horizon.com/' },
      { label: 'https://auth.delete-horizon.com', href: 'https://auth.delete-horizon.com/' },
    ],
  },
]

export const skillRows: SkillRow[] = [
  { label: 'Languages', tags: ['TypeScript', 'JavaScript', 'Rust'] },
  {
    label: 'Frontend',
    tags: [
      'Next.js (v12~v15)',
      'React',
      'TanStack Query',
      'Zustand',
      'Redux',
      'Tailwind CSS',
      'PWA',
      'Vitest',
    ],
  },
  {
    label: 'Architecture',
    tags: [
      'Turborepo',
      'pnpm workspaces',
      'Multi-tenant Monorepo',
      'Micro-Frontend Mesh',
      'Next.js BFF',
      'FSD',
    ],
  },
  {
    label: 'Systems / DX',
    tags: ['Tauri 2', 'HTTPS Debug Proxy', 'API Mocking', 'Prisma', 'Azure DevOps', 'Git'],
  },
]

export const education = {
  school: { kr: '인제고등학교', en: 'Inje High School' },
  detail: { kr: '이과 졸업 · 2013.02', en: 'Science Track · Graduated Feb 2013' },
}

export const navItems = [
  { href: '#intro', label: { kr: 'Intro', en: 'Intro' } },
  { href: '#about', label: { kr: 'About', en: 'About' } },
  { href: '#experience', label: { kr: 'Work', en: 'Work' } },
  { href: '#projects', label: { kr: 'Products', en: 'Products' } },
  { href: '#skills', label: { kr: 'Skills', en: 'Skills' } },
] as const

export const filterOptions = [
  { id: 'all' as const, label: { kr: '전체', en: 'All' } },
  { id: 'nextgen' as const, label: { kr: '도메인', en: 'Domain' } },
  { id: 'arch' as const, label: { kr: '아키텍처', en: 'Arch' } },
  { id: 'refac' as const, label: { kr: '리팩토링', en: 'Refactor' } },
  { id: 'ui' as const, label: { kr: 'UI', en: 'UI' } },
  { id: 'infra' as const, label: { kr: '인프라', en: 'Infra' } },
]
