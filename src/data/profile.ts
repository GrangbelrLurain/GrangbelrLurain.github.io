import type { LocaleText, Metric, Project, SkillRow } from './types'

/** 총 경력 시작 (facts.md: 2022.04~, 공백 없음) */
const CAREER_START = { year: 2022, month: 4 }

/** 잡코리아식: 입사 월과 현재 월 모두 포함. 2026-10 → "4년 7개월" */
export function careerLengthKr(now: Date = new Date()): string {
  const months =
    (now.getFullYear() - CAREER_START.year) * 12 +
    (now.getMonth() + 1 - CAREER_START.month) +
    1
  const y = Math.floor(months / 12)
  const m = months % 12
  return m === 0 ? `${y}년` : `${y}년 ${m}개월`
}

const CAREER_KR = careerLengthKr()

export const profile = {
  name: { kr: '김규연', en: 'Kyuyeon Kim' } satisfies LocaleText,
  title: {
    kr: '파트너 사이트 570여 개를 원소스 멀티테넌트로 운영하는 프론트엔드 PL',
    en: 'Frontend Lead running 570+ partner sites from one Next.js codebase',
  } satisfies LocaleText,
  tagline: {
    kr: '"도메인이 복잡할수록 구조를 먼저 잡고, 공통 모듈과 빌드·배포 체계로 반복 비용을 줄입니다."',
    en: '"When domains get complex, I start with structure — cutting repeat cost through shared modules and build/release systems."',
  } satisfies LocaleText,
  brandRole: {
    kr: 'Frontend Lead · FE PL',
    en: 'Frontend Lead',
  } satisfies LocaleText,
  email: 'lurain003@gmail.com',
  github: 'https://github.com/GrangbelrLurain',
  site: 'https://delete-horizon.com',
  location: { kr: '수원 / 서울, 대한민국', en: 'Suwon / Seoul, South Korea' },
  photo: '/images/profile.jpg',
  photoAlt: { kr: '김규연 프로필 사진', en: 'Portrait of Kyuyeon Kim' },
  resumes: [
    {
      href: '/resumes/kyuyeon-kim-ko.html',
      download: 'kyuyeon-kim-resume-ko.html',
      label: { kr: '이력서 FE PL', en: 'Resume Frontend Lead' },
    },
    {
      href: '/resumes/kyuyeon-kim-fullstack-ko.html',
      download: 'kyuyeon-kim-resume-fullstack-ko.html',
      label: { kr: '이력서 Product', en: 'Resume Product' },
    },
    {
      href: '/resumes/kyuyeon-kim-agentic-ko.html',
      download: 'kyuyeon-kim-resume-agentic-ko.html',
      label: { kr: '이력서 Agentic', en: 'Resume Agentic' },
    },
    {
      href: '/resumes/kyuyeon-kim-en.html',
      download: 'kyuyeon-kim-resume-en.html',
      label: { kr: '이력서 EN', en: 'Resume EN' },
    },
  ],
  metaDescription: {
    kr: '프론트엔드 리드 · FE PL 김규연 포트폴리오. 모두투어 차세대 웹에서 B2C·BP·ONBP 3채널과 파트너 사이트 570여 개를 한 저장소로 운영하는 Next.js 멀티테넌트 모노레포를 리딩합니다.',
    en: 'Portfolio of Kyuyeon Kim, Frontend Lead at Modetour next-gen web: one Next.js multi-tenant monorepo for 3 channels and 570+ partner sites.',
  },
}

export const metrics: Metric[] = [
  {
    value: '570+',
    label: {
      kr: '원소스로 운영하는 ONBP 파트너 사이트',
      en: 'ONBP partner sites on one codebase',
    },
  },
  {
    value: '3 × 2',
    label: {
      kr: 'B2C·BP·ONBP × PC·MO, 한 저장소에서 빌드·배포',
      en: 'B2C, BP, ONBP × PC/MO, built and shipped from one repo',
    },
  },
  {
    value: '12→15',
    label: {
      kr: 'Next.js 메이저 업그레이드 (React 19 · Ant Design 5 동반)',
      en: 'Next.js major upgrade (with React 19 and Ant Design 5)',
    },
  },
  {
    value: '6명',
    label: {
      kr: 'FE 팀 리드 (FE PL)',
      en: 'FE team led as Frontend Lead',
    },
  },
]

export const aboutParagraphs: LocaleText[] = [
  {
    kr: `안녕하세요. 경력 ${CAREER_KR} 차 <strong>프론트엔드 리드 김규연</strong>입니다.`,
    en: 'I am <strong>Kyuyeon Kim</strong>, a <strong>Frontend Lead</strong> with 4+ years of experience, based in South Korea.',
  },
  {
    kr: '지금은 와이리즘 소속으로 <strong>모두투어 차세대 웹의 FE PL</strong>(팀 6명)을 맡고 있습니다. 레거시 단일 B2C 앱을 인수해, B2C·BP·ONBP 3채널과 파트너 사이트 570여 개를 <strong>한 저장소에서 빌드·배포하는 Next.js 멀티테넌트 모노레포</strong>로 바꿨고, 기존 서비스를 운영하면서 Next.js 12 → 15까지 올렸습니다.',
    en: 'I lead frontend for <strong>Modetour\'s next-gen web</strong> at YRISM (team of 6). I took over a legacy single B2C app and turned it into <strong>a Next.js multi-tenant monorepo</strong> where 3 channels and 570+ partner sites build and ship from one repo — and upgraded Next.js 12 → 15 while the legacy site stayed live.',
  },
  {
    kr: '구조를 먼저 잡고, 그 구조가 지켜지도록 <strong>CI 머지 기준과 문서로 규칙을 남기는 방식</strong>으로 일합니다. 이전에는 크리에이터 커머스(샵팬픽)에서 CRA → Next.js 모노레포 전환을, B2B 자금관리(지에스아이코)에서 Windows 설치형 클라이언트 → React 웹 전환을 맡았습니다.',
    en: 'I set the structure first, then make it stick with <strong>CI merge gates and written rules</strong>. Before this I moved CRA apps to a Next.js monorepo at ShopFanPick (creator commerce) and a Windows desktop client to a React web admin at GSIKO (B2B cash management).',
  },
  {
    kr: '사이드로는 로컬 프록시·API 모킹을 한 앱으로 묶은 <strong>horizon-gateway</strong>(Rust/Tauri 2)를 만들고 있고, 독립 배포된 PWA를 잇는 <strong>horizon-mesh</strong>를 실험하고 있습니다.',
    en: 'On the side I build <strong>horizon-gateway</strong> (Rust/Tauri 2), a desktop app that combines a local proxy and API mocking, and experiment with <strong>horizon-mesh</strong>, which links independently deployed PWAs.',
  },
]

export const projects: Project[] = [
  {
    id: 'horizon-gateway',
    name: 'horizon-gateway',
    techLine: 'Rust · Tauri 2 · React · TypeScript · TanStack',
    links: [
      { label: 'Live ↗', href: 'https://gateway.delete-horizon.com' },
      { label: 'GitHub ↗', href: 'https://github.com/delete-horizon/horizon-gateway' },
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
      { label: 'Travel ↗', href: 'https://travel.delete-horizon.com/' },
    ],
    bullets: [
      {
        kr: '<strong>실험 프로젝트</strong>: 서로 다른 도메인에 따로 배포한 PWA를 공통 embed 프로토콜로 연결해 보는 정적 아키텍처 실험',
        en: '<strong>Experiment</strong>: linking PWAs deployed on separate domains through a shared embed protocol, fully static',
      },
      {
        kr: '<strong>모듈화 및 오프라인 지원</strong>: <code>travel</code>, <code>hotel</code>, <code>auth</code> 서비스 모듈화 및 IndexedDB 기반 Local-First 오프라인 작동 처리',
        en: '<strong>Modular Offline Architecture</strong>: Modularized <code>travel</code>, <code>hotel</code>, and <code>auth</code> with Local-First IndexedDB offline support',
      },
    ],
    footerUrls: [
      { label: 'https://travel.delete-horizon.com', href: 'https://travel.delete-horizon.com/' },
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
      'Hono BFF',
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
