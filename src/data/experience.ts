import type { Company } from './types'

const badge = {
  nextgen: { kr: '도메인', en: 'Domain', variant: 'nextgen' as const },
  ops: { kr: '운영', en: 'Ops', variant: 'ops' as const },
  arch: { kr: '아키텍처', en: 'Arch', variant: 'arch' as const },
  refac: { kr: '리팩토링', en: 'Refactor', variant: 'refac' as const },
  ui: { kr: 'UI 시스템', en: 'UI System', variant: 'ui' as const },
  infra: { kr: '인프라', en: 'Infra', variant: 'infra' as const },
}

const lead = { ...badge.ops, kr: '리드', en: 'Lead' }

/**
 * Experience bullets.
 * - 결과가 보이게: "무엇을 했다"보다 "그래서 어떤 구조/상태가 됐다"까지 쓴다.
 * - 외부인이 모르는 사내 식별자(HOC 이름, 내부 API명 등)는 쓰지 않는다.
 * - 마일스톤 날짜는 Modetour_PlatformWeb git 이력 기준.
 */
export const companies: Company[] = [
  {
    id: 'yrism',
    name: { kr: '주식회사 와이리즘 (YRISM)', en: 'YRISM Inc.' },
    badge: { kr: 'Frontend PL · 팀 6명', en: 'Frontend Lead · Team of 6' },
    date: '2024.11 – Present',
    subtitle: {
      kr: '모두투어 차세대 웹 플랫폼 파견 · B2C / Best Partner / Online Best Partner (PC·MO)',
      en: 'Modetour next-gen web platform · B2C / Best Partner / Online Best Partner (PC·MO)',
    },
    impacts: [
      {
        kr: '레거시 단일 B2C 앱을 <code>core</code> / <code>web-b2c</code> / <code>web-onbp</code> 워크스페이스로 재편해, <strong>B2C·BP·ONBP 3채널 × PC·MO를 한 저장소에서 빌드·배포</strong>하는 구조로 전환',
        en: 'Rebuilt a legacy single B2C app into <code>core</code> / <code>web-b2c</code> / <code>web-onbp</code> workspaces so <strong>3 channels (B2C, BP, ONBP) × PC/MO build and ship from one repo</strong>',
      },
      {
        kr: 'pnpm 전환(2025.11) → Turborepo·빌드 캐시(2026.01) → <strong>Next.js 12 → 15 · React 19 · Ant Design 5</strong>(2026.06)를 as-is 서비스 병행 운영 중에 단계적으로 리딩',
        en: 'Led a staged upgrade path — pnpm (Nov 2025) → Turborepo + build cache (Jan 2026) → <strong>Next.js 12 → 15, React 19, Ant Design 5</strong> (Jun 2026) — while the legacy site stayed live',
      },
      {
        kr: '타입·패키지 참조·주요 기능 테스트를 통과해야만 머지되는 <strong>CI 게이트</strong>를 설계하고, 배포 파이프라인을 Build/Deploy로 분리',
        en: 'Designed a <strong>CI merge gate</strong> (types, package references, key feature tests) and split the release pipeline into Build and Deploy stages',
      },
      {
        kr: 'ISMS 대응으로 <strong>클라이언트 암복호를 제거하고 개인정보 처리를 BFF로 이전</strong>',
        en: 'For ISMS compliance, <strong>removed client-side crypto and moved personal-data handling into the BFF</strong>',
      },
    ],
    groups: [
      {
        heading: { kr: '플랫폼 구조', en: 'Platform architecture' },
        tasks: [
          {
            category: 'arch',
            badge: badge.arch,
            title: { kr: '원소스 멀티테넌트', en: 'Single-source multi-tenancy' },
            description: {
              kr: '접속 도메인으로 사이트 설정을 불러와 API 요청에 실어 보내는 구조로, B2C와 570여 개 ONBP 파트너 사이트를 하나의 코드베이스로 운영',
              en: 'Site config is resolved from the incoming domain and sent with every API call, so B2C and 570+ ONBP partner sites run on one codebase',
            },
          },
          {
            category: 'arch',
            badge: badge.arch,
            title: { kr: '패키지 경계와 의존 방향', en: 'Package boundaries' },
            description: {
              kr: '앱은 얇게 두고 채널 패키지 → 공통 도메인 → API 계약·SDK·UI 순으로 의존 방향을 고정. 채널 간 직접 참조를 막고, 공용 코드는 <code>core</code>로만 올리도록 패키지별 AGENTS.md로 규칙화',
              en: 'Thin apps; dependencies flow one way from channel packages to shared domain to API contracts, SDK, and UI. Cross-channel imports are banned and shared code goes only through <code>core</code>, written down as per-package AGENTS.md rules',
            },
          },
          {
            category: 'arch',
            badge: badge.arch,
            title: { kr: 'BFF와 데이터 계층', en: 'BFF and data layer' },
            description: {
              kr: 'Hono BFF(<code>@b2c/server</code> · <code>@onbp/server</code>)에서 Zod·TypeBox로 응답을 검증하고, 화면은 FE Model / Mapper만 보게 해 외부 여행 API 변경이 UI까지 번지지 않도록 분리',
              en: 'Hono BFFs (<code>@b2c/server</code>, <code>@onbp/server</code>) validate responses with Zod and TypeBox; screens only see FE models and mappers, so upstream travel API changes stop at the boundary',
            },
          },
          {
            category: 'refac',
            badge: badge.refac,
            title: { kr: '상태 관리 전환', en: 'State management migration' },
            description: {
              kr: 'RTK Query → TanStack Query, Redux → Zustand를 공통 패키지부터 점진 적용해 서비스 중단 없이 전환',
              en: 'Moved RTK Query → TanStack Query and Redux → Zustand incrementally, shared packages first, with no downtime',
            },
          },
        ],
      },
      {
        heading: { kr: '마이그레이션 · 릴리스', en: 'Migration and release' },
        tasks: [
          {
            category: 'arch',
            badge: badge.arch,
            title: { kr: 'Next.js 12 → 15', en: 'Next.js 12 → 15' },
            description: {
              kr: 'Pages Router 기반 Next 12를 15 · React 19 · TypeScript 5로 상향. 공통 패키지 호환성을 먼저 맞춘 뒤 채널 앱에 반영',
              en: 'Upgraded Pages Router Next 12 to 15 with React 19 and TypeScript 5, fixing shared packages first and then rolling out to channel apps',
            },
          },
          {
            category: 'ui',
            badge: badge.ui,
            title: { kr: 'Ant Design 4 → 5', en: 'Ant Design 4 → 5' },
            description: {
              kr: 'Less 빌드 체인을 걷어내고 v5 Design Token으로 테마를 옮김. 토큰·테마 패키지와 컴포넌트 playground로 UI 검증 환경 구축',
              en: 'Removed the Less build chain and moved theming to v5 design tokens, with token/theme packages and a component playground for UI checks',
            },
          },
          {
            category: 'infra',
            badge: badge.infra,
            title: { kr: '빌드 · 배포 파이프라인', en: 'Build and release pipeline' },
            description: {
              kr: 'Azure Pipelines에 Turborepo·Next 빌드 캐시를 적용하고 Build/Deploy 분리, 배포 대기 큐를 도입. eslint → Biome, husky 훅으로 로컬 품질 기준 통일',
              en: 'Added Turborepo and Next build caches to Azure Pipelines, split Build/Deploy, and introduced a deploy queue; unified local checks with Biome (from eslint) and husky hooks',
            },
          },
        ],
      },
      {
        heading: { kr: '도메인 · 팀', en: 'Domains and team' },
        tasks: [
          {
            category: 'nextgen',
            badge: badge.nextgen,
            title: { kr: '핵심 도메인 이관', en: 'Core domain migration' },
            description: {
              kr: '호텔·항공·검색·예약·인증·프로모션 등 매출에 직결되는 흐름을 신규 구조로 옮기면서 as-is PC/MO는 병행 운영(장애 대응, 상품 목록 캐싱)',
              en: 'Moved revenue-critical flows (hotel, flight, search, booking, auth, promotions) to the new structure while keeping the legacy PC/MO site running (incident fixes, product-list caching)',
            },
          },
          {
            category: 'ops',
            badge: lead,
            title: { kr: 'FE 팀 리드', en: 'Leading the FE team' },
            description: {
              kr: '6명 팀의 작업 분배·코드 리뷰·머지 기준 운영. Cursor·Claude Code·Gemini CLI용 공통 에이전트 가이드로 작업 방식과 온보딩을 문서화',
              en: 'Task split, code review, and merge standards for a team of 6; documented shared workflow and onboarding as agent guides for Cursor, Claude Code, and Gemini CLI',
            },
          },
          {
            category: 'infra',
            badge: badge.infra,
            title: { kr: '로컬 환경 전환 도구', en: 'Local environment switcher' },
            description: {
              kr: 'Dev/Stage/Prod와 항공·호텔·제휴 샌드박스 엔드포인트를 프로필로 바꿔 끼우는 로컬 proxy-tool 제작',
              en: 'Built a local proxy tool that swaps Dev/Stage/Prod and airline, hotel, and partner sandbox endpoints by profile',
            },
          },
        ],
      },
    ],
    tech: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'pnpm',
      'Turborepo',
      'Hono',
      'Zod',
      'TanStack Query',
      'Zustand',
      'Ant Design 5',
      'Biome',
      'Vitest',
      'Azure Pipelines',
    ],
    links: [
      { label: 'Modetour.com ↗', href: 'https://www.modetour.com' },
      { label: { kr: 'ONBP 파트너 사이트 예시 ↗', en: 'ONBP partner site example ↗' }, href: 'https://go.modetour.co.kr/' },
    ],
  },

  {
    id: 'gsiko',
    name: { kr: '주식회사 지에스아이코 (GSIKO)', en: 'GSIKO Inc.' },
    badge: { kr: 'Frontend Developer', en: 'Frontend Developer' },
    date: '2024.01 – 2024.10',
    subtitle: {
      kr: 'YesCMS B2B 자금관리 웹 · 금융결제원 CMS 출금이체 연계',
      en: 'YesCMS B2B cash-management web · KFTC CMS direct debit',
    },
    impacts: [
      {
        kr: 'Windows 설치형 자금관리 클라이언트의 <strong>주요 화면 약 30개를 React 웹 어드민으로 전환</strong>하는 작업을 주도',
        en: 'Led the move of <strong>about 30 core screens</strong> from a Windows desktop cash-management client to a React web admin',
      },
      {
        kr: '금융결제원 CMS 출금이체와 연동된 출금·수납·원장 화면의 상태 관리, 검증, 재처리 흐름을 FE에서 담당',
        en: 'Owned state, validation, and retry flows on withdrawal, collection, and ledger screens wired to KFTC CMS direct debit',
      },
      {
        kr: '대용량 금융 그리드에 가상화를 적용해 운영 화면의 스크롤 성능과 메모리 부하를 안정화',
        en: 'Virtualized heavy financial grids to keep scrolling smooth and memory use stable',
      },
    ],
    tasks: [
      {
        category: 'nextgen',
        badge: badge.nextgen,
        title: { kr: '출금 · 수납 · 원장', en: 'Withdrawals, collections, ledger' },
        description: {
          kr: '기간별·회원별 출금/수납 내역, 청구·수납·미납 합산, 출금 보류 제외, 일괄 수정 등 운영 핵심 화면 구현',
          en: 'Period and member views for withdrawals and collections, with billed/collected/unpaid totals, hold exclusion, and batch edits',
        },
      },
      {
        category: 'infra',
        badge: badge.infra,
        title: { kr: '금융결제원 연동 화면', en: 'KFTC integration screens' },
        description: {
          kr: '연동 상태 표시, 재처리·예외 처리, 운영자 확인 흐름 구현',
          en: 'Integration status, retry and exception handling, and operator confirmation flows',
        },
      },
      {
        category: 'nextgen',
        badge: badge.nextgen,
        title: { kr: '회원 · 세금계산서', en: 'Members and tax invoices' },
        description: {
          kr: '회원 등록·정기출금일·일괄 수정, 팝빌 세금계산서 일괄 수정·자동 발급 워크플로우 구현',
          en: 'Member registration, recurring debit dates, batch edits, and Popbill tax-invoice batch edit and auto-issue',
        },
      },
      {
        category: 'refac',
        badge: badge.refac,
        title: { kr: '금융 그리드 가상화', en: 'Grid virtualization' },
        description: {
          kr: '대용량 자금 관리 테이블에 가상화를 적용해 브라우저 메모리 부하를 낮춤',
          en: 'Virtualized large cash-management tables to cut browser memory pressure',
        },
      },
    ],
    tech: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'Tailwind CSS', 'KFTC CMS'],
  },

  {
    id: 'shopfanpick',
    name: { kr: '주식회사 샵팬픽 (ShopFanPick)', en: 'ShopFanPick Inc.' },
    badge: { kr: 'Frontend Developer', en: 'Frontend Developer' },
    date: '2022.04 – 2023.12',
    subtitle: {
      kr: '크리에이터 커머스 플랫폼 · 어드민 · Studio',
      en: 'Creator commerce platform, admin, and Studio',
    },
    impacts: [
      {
        kr: 'SSR이 불가능한 CRA 앱 3개(커머스·어드민·Studio)를 <strong>Next.js 모노레포로 전환</strong>하고 SSR/SSG 적용',
        en: '<strong>Moved 3 CRA apps</strong> (commerce, admin, Studio) <strong>to a Next.js monorepo</strong> with SSR/SSG',
      },
      {
        kr: 'Next.js API Routes를 BFF로 두고 Prisma 타입을 모노레포 전체에 공유해, BE 대기 없이 FE가 기능을 끝까지 소유',
        en: 'Used Next.js API Routes as a BFF with Prisma types shared across the monorepo, so FE could own features end to end',
      },
      {
        kr: '메인 CMS 콘텐츠 타입, 커머스 어드민, 엑셀 입출력과 서버리스 암호화 다운로드를 직접 구현·운영',
        en: 'Built and ran the homepage CMS content types, commerce admin, Excel import/export, and serverless encrypted downloads',
      },
    ],
    tasks: [
      {
        category: 'nextgen',
        badge: badge.nextgen,
        title: { kr: '메인 CMS 콘텐츠 타입', en: 'Homepage CMS content types' },
        description: {
          kr: '기본/특별 옵션을 분리한 콘텐츠 모델에 상품·크리에이터·게시물·배너·혼합 타입을 얹고 어드민 관리 화면 구축',
          en: 'A content model with base and special options, extended to product, creator, post, banner, and mixed types, plus admin screens',
        },
      },
      {
        category: 'nextgen',
        badge: badge.nextgen,
        title: { kr: '커머스 어드민', en: 'Commerce admin' },
        description: {
          kr: '상품·태그·파트너스·쿠폰·마일리지 등 백오피스 CRUD와 검색을 FE + BFF로 구현',
          en: 'Back-office CRUD and search for products, tags, partners, coupons, and mileage, across FE and BFF',
        },
      },
      {
        category: 'infra',
        badge: badge.infra,
        title: { kr: '엑셀 입출력 · 암호화 다운로드', en: 'Excel I/O and encrypted export' },
        description: {
          kr: '중첩 JSON을 재귀로 펼치는 엑셀 입출력과 Next 서버리스 환경에서 동작하는 zip 암호화 다운로드 구현',
          en: 'Excel import/export that recursively flattens nested JSON, and zip-encrypted downloads that run on Next serverless',
        },
      },
      {
        category: 'ui',
        badge: badge.ui,
        title: { kr: 'SSR/SSG · UI 기반', en: 'SSR/SSG and UI foundation' },
        description: {
          kr: 'SSR/SSG로 검색 수집과 초기 로딩을 개선하고, SWR Infinite 무한 스크롤과 Tailwind 기반 컴포넌트로 UI 정비',
          en: 'SSR/SSG for crawlability and first load; SWR Infinite scrolling and Tailwind-based components',
        },
      },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Redux', 'SWR', 'Tailwind CSS'],
  },
]
