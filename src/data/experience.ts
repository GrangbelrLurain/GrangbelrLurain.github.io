import type { Company } from './types'

const badge = {
  nextgen: { kr: '차세대', en: 'Next-Gen', variant: 'nextgen' as const },
  ops: { kr: '운영', en: 'Ops', variant: 'ops' as const },
  arch: { kr: '아키텍처', en: 'Arch', variant: 'arch' as const },
  refac: { kr: '리팩토링', en: 'Refactor', variant: 'refac' as const },
  ui: { kr: 'UI 시스템', en: 'UI System', variant: 'ui' as const },
  infra: { kr: '인프라', en: 'Infra', variant: 'infra' as const },
}

/**
 * Experience bullets — 규모는 테넌트·사이트·도메인·버전 등 방어 가능한 단위로.
 * 서술 주체는 FE PL / 담당 FE 역할·오너십으로 통일. 팀 커밋 수치는 쓰지 않음.
 */
export const companies: Company[] = [
  {
    id: 'yrism',
    name: { kr: '주식회사 와이리즘 (YRISM)', en: 'YRISM Inc.' },
    badge: { kr: 'Frontend PL · 팀원 3~5명', en: 'Frontend Lead · Team of 3–5' },
    date: '2024.11 – Present',
    subtitle: {
      kr: '모두투어 차세대 웹 플랫폼 파견 · B2C / Best Partner / Online Best Partner',
      en: 'Modetour Next-Gen Platform · B2C / Best Partner / Online Best Partner',
    },
    impacts: [
      {
        kr: 'B2C 단일 구조를 core / web-b2c / web-onbp로 재편하고, yarn Berry → pnpm·Turborepo 모노레포로 다중 채널 확장을 리딩',
        en: 'Restructured single-B2C into core / web-b2c / web-onbp and led yarn Berry → pnpm·Turborepo for multi-channel expansion',
      },
      {
        kr: 'Next.js 12→15 · React 19 · Ant Design v4→v5 마이그레이션을 주도하고 Less 빌드 체인을 제거',
        en: 'Led Next.js 12→15, React 19, and Ant Design v4→v5 migrations, removing the Less build chain',
      },
      {
        kr: 'Hono BFF(@b2c/server·@onbp/server)와 Zod/스키마 파이프라인으로 FE–BE 경계를 타입 안전하게 정리',
        en: 'Hardened FE–BE boundaries with Hono BFFs (@b2c/server · @onbp/server) and Zod/schema pipelines',
      },
      {
        kr: 'proxy-tool로 Dev/Stage/Prod·항공·호텔·제휴 엔드포인트를 전환하는 로컬 DX를 구축 · ONBP ~300 사이트 원소스 운영',
        en: 'Built proxy-tool DX for Dev/Stage/Prod and airline/hotel/partner endpoints · single-source ops for ~300 ONBP sites',
      },
    ],
    groups: [
      {
        heading: {
          kr: '핵심 도메인 & 서비스 차세대 개편',
          en: 'Core Domain Services',
        },
        tasks: [
          {
            category: 'nextgen',
            badge: badge.nextgen,
            title: {
              kr: '모두투어 프론트엔드 서비스 차세대 개발',
              en: 'Modetour Platform Reconstruction',
            },
            description: {
              kr: 'B2C·B2B PC/MO 웹 서비스 전면 재구축을 FE PL로 리딩',
              en: 'Led B2C & B2B PC/MO platform rebuild as FE PL',
            },
          },
          {
            category: 'nextgen',
            badge: badge.nextgen,
            title: {
              kr: '매출 직결 핵심 도메인 차세대 이관',
              en: 'Revenue-Critical Domain Migration',
            },
            description: {
              kr: '호텔·검색·항공·예약·인증·프로모션·투어패스 등 매출 직결 플로우를 차세대 스택으로 이관·구조화',
              en: 'Migrated revenue-critical flows (hotel, search, flight, booking, auth, promo, tourpass) into the next-gen stack',
            },
          },
          {
            category: 'ops',
            badge: badge.ops,
            title: {
              kr: 'as-is B2C PC/MO 병행 운영',
              en: 'Legacy B2C PC/MO Parallel Ops',
            },
            description: {
              kr: '차세대 전환 기간에도 as-is / to-be 병행 운영 — 빌드/파이프라인·장애 핫픽스·상품 리스트 캐싱 등 라이브 안정 유지',
              en: 'Ran as-is / to-be in parallel during migration — build/pipeline hotfixes, product-list caching, and live stability',
            },
          },
        ],
      },
      {
        heading: {
          kr: '멀티테넌트 & 모노레포 아키텍처',
          en: 'Monorepo & Multi-tenant Architecture',
        },
        tasks: [
          {
            category: 'arch',
            badge: badge.arch,
            title: {
              kr: '원소스 멀티 사이트 구조',
              en: 'Single-source Multi-site Architecture',
            },
            description: {
              kr: '도메인별 init 시 사이트 컨텍스트 로드, API 헤더 주입으로 B2C·다수 BP/ONBP를 단일 코드베이스에서 운영',
              en: 'Load site context at init and inject API headers so B2C and many BP/ONBP sites share one codebase',
            },
          },
          {
            category: 'arch',
            badge: badge.arch,
            title: {
              kr: 'ONBP 모노레포 전환',
              en: 'ONBP Monorepo Migration',
            },
            description: {
              kr: 'web-b2c / web-onbp / core 패키지 분리, 사이트별 빌드·배포 파이프라인, yarn → pnpm 마이그레이션으로 파트너 사이트 구축 속도를 높임',
              en: 'Split web-b2c / web-onbp / core, per-site build/deploy pipelines, and yarn→pnpm to speed partner site builds',
            },
          },
          {
            category: 'arch',
            badge: badge.arch,
            title: {
              kr: 'Turborepo 기반 대규모 FE 모노레포',
              en: 'Large-scale Turborepo FE Monorepo',
            },
            description: {
              kr: '약 300개 BP/ONBP 프론트를 통합 관리하고 Docker pipeline에 turborepo/Next 캐시를 적용해 빌드 부담을 줄임',
              en: 'Unified ~300 BP/ONBP frontends and cut build burden with turborepo/Next caches in Docker pipelines',
            },
          },
          {
            category: 'arch',
            badge: badge.arch,
            title: {
              kr: 'Next.js 메이저 버전업 & React 19 대응',
              en: 'Next.js Major Upgrade & React 19',
            },
            description: {
              kr: 'Next.js 12(Pages) → 15 · React 19 · TypeScript 5로 스택을 상향하고 공통 패키지 마이그레이션을 점진 적용',
              en: 'Upgraded Next.js 12 (Pages) → 15, React 19, and TypeScript 5, migrating shared packages progressively',
            },
          },
          {
            category: 'ui',
            badge: badge.ui,
            title: {
              kr: 'Ant Design v4 → v5 · Less 제거',
              en: 'Ant Design v4 → v5 · Drop Less',
            },
            description: {
              kr: 'antd v4 + next-plugin-antd-less 의존을 제거하고 v5 CSS-in-JS·Design Token 체계로 전환해 빌드 마찰을 줄임',
              en: 'Removed antd v4 + next-plugin-antd-less and moved to v5 CSS-in-JS / Design Tokens to cut build friction',
            },
          },
          {
            category: 'arch',
            badge: badge.arch,
            title: {
              kr: 'Hono BFF · API 스키마 파이프라인',
              en: 'Hono BFF · API Schema Pipeline',
            },
            description: {
              kr: '@b2c/server · @onbp/server(Hono) BFF와 Zod/TypeBox 기반 스키마 검증·타입 추출 파이프라인을 구축',
              en: 'Built Hono BFFs (@b2c/server · @onbp/server) with Zod/TypeBox schema validation and type-generation pipelines',
            },
          },
        ],
      },
      {
        heading: {
          kr: '코드베이스 모듈화 & 리팩토링',
          en: 'Codebase Quality & Refactoring',
        },
        tasks: [
          {
            category: 'refac',
            badge: badge.refac,
            title: {
              kr: 'FSD·도메인 레이어 정리',
              en: 'FSD & Domain Layer Cleanup',
            },
            description: {
              kr: 'Feature-Sliced Design 도입, 패키지 카드·공통 컴포넌트 구조 재편, 사이드이펙트·가독성 문제 해소',
              en: 'Adopted Feature-Sliced Design, restructured package cards/shared components, and reduced side effects',
            },
          },
          {
            category: 'refac',
            badge: badge.refac,
            title: {
              kr: 'FE Model / Mapper · 데이터 레이어 전환',
              en: 'FE Model / Mapper · Data-layer Shift',
            },
            description: {
              kr: 'Triphub 직접 호출 → BE(b2cClient) 경유, 도메인 타입·매퍼 분리로 API 변경 영향도를 줄임',
              en: 'Moved Triphub calls behind BE (b2cClient) and split domain types/mappers to isolate API churn',
            },
          },
          {
            category: 'refac',
            badge: badge.refac,
            title: {
              kr: '상태관리 점진 전환',
              en: 'State Management Migration',
            },
            description: {
              kr: 'RTK Query → TanStack Query, Redux → Zustand를 서비스 무중단으로 병행 전환 (core 우선, 앱 잔존 Redux 공존)',
              en: 'Migrated RTK Query→TanStack Query and Redux→Zustand without downtime (core-first, residual Redux coexistence)',
            },
          },
          {
            category: 'refac',
            badge: badge.refac,
            title: {
              kr: 'L0 CoreProvider & 공통 컨텍스트',
              en: 'L0 CoreProvider & Shared Context',
            },
            description: {
              kr: 'withCoreProvider HOC로 앱 공통 초기화 계층을 표준화하고 패키지 간 컨텍스트 의존을 정리',
              en: 'Standardized app bootstrap via withCoreProvider HOC and cleaned cross-package context dependencies',
            },
          },
        ],
      },
      {
        heading: {
          kr: 'UI 시스템 · DX · 인프라',
          en: 'UI System · DX · Infra',
        },
        tasks: [
          {
            category: 'ui',
            badge: badge.ui,
            title: {
              kr: '모두투어 UI 라이브러리 · playground',
              en: 'Modetour UI Library · Playground',
            },
            description: {
              kr: 'antd 의존 축소, @repo/tokens·theme·playground(스캔 자동화·Monaco)로 컴포넌트 검증 환경을 구축',
              en: 'Reduced antd coupling and built component verification with @repo/tokens, theme, and playground (scan automation + Monaco)',
            },
          },
          {
            category: 'infra',
            badge: badge.infra,
            title: {
              kr: 'proxy-tool · 환경 프로필 DX',
              en: 'proxy-tool · Env Profile DX',
            },
            description: {
              kr: 'Dev/Stage/Prod 및 항공·호텔·제휴 샌드박스 엔드포인트를 프로필로 전환하는 proxy-tool을 구축',
              en: 'Built proxy-tool to switch Dev/Stage/Prod and airline/hotel/partner sandbox endpoints via profiles',
            },
          },
          {
            category: 'ui',
            badge: badge.ui,
            title: {
              kr: '인쇄·날짜·공통 UX 컴포넌트 교체',
              en: 'Print, Date & Shared UX Component Replacements',
            },
            description: {
              kr: 'react-print 제거·iframe 인쇄, react-day-picker 전환, Collapse/RangePicker 등 공통 컴포넌트 안정화',
              en: 'Replaced react-print with iframe printing, migrated to react-day-picker, and stabilized Collapse/RangePicker shared components',
            },
          },
          {
            category: 'infra',
            badge: { ...badge.infra, kr: '인프라·품질', en: 'Infra · Quality' },
            title: {
              kr: 'Azure DevOps · Docker · husky 파이프라인',
              en: 'Azure DevOps · Docker · husky Pipelines',
            },
            description: {
              kr: 'STG/PROD 환경변수, onbp/b2c deploy 연결, husky pre-commit/post-merge, 빌드 큐·캐시 운영 · Biome·Vitest 품질 기반 정리',
              en: 'Operated STG/PROD env, onbp/b2c deploy, husky hooks, build cache · settled Biome and Vitest quality baselines',
            },
          },
          {
            category: 'infra',
            badge: { ...badge.infra, kr: '인프라·품질', en: 'Infra · Quality' },
            title: {
              kr: 'FE 컨벤션 · Agent 가이드',
              en: 'FE Conventions · Agent Guides',
            },
            description: {
              kr: 'Cursor Agent 규칙과 Claude Code·Gemini CLI 가이드를 도입해 팀 공통 작업 방식·온보딩을 문서화',
              en: 'Introduced Cursor Agent rules and Claude/Gemini guides to document shared workflow and onboarding',
            },
          },
        ],
      },
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'Turborepo',
      'pnpm',
      'Hono',
      'Zod',
      'FSD',
      'TanStack Query',
      'Zustand',
      'React 19',
      'Ant Design',
      'Biome',
      'Vitest',
      'Azure DevOps',
      'Git',
    ],
    links: [
      { label: 'Modetour.com ↗', href: 'https://www.modetour.com' },
      { label: 'ONBP Demo 1 ↗', href: 'https://go.modetour.co.kr/' },
      { label: 'ONBP Demo 2 ↗', href: 'https://gentlemonster.modetour.com/' },
    ],
  },

  {
    id: 'gsiko',
    name: { kr: '주식회사 지에스아이코 (GSIKO)', en: 'GSIKO Inc.' },
    badge: { kr: 'Frontend Developer', en: 'Frontend Developer' },
    date: '2024.01 – 2024.10',
    subtitle: {
      kr: 'YesCMS · B2B 자금관리·운영 웹 & KFTC 오픈뱅킹',
      en: 'YesCMS · B2B ops web & KFTC Open Banking',
    },
    impacts: [
      {
        kr: 'Windows C/S 자금관리 클라이언트를 React 웹 어드민으로 전면 재설계·구축',
        en: 'Fully re-architected a Windows C/S cash-management client into a React web admin',
      },
      {
        kr: 'KFTC 오픈뱅킹 연동 — 출금·수납·원장 화면의 상태·검증·에러 플로우를 FE에서 담당',
        en: 'Owned FE state, validation, and error flows for KFTC-linked withdrawal, collection, and ledger screens',
      },
      {
        kr: '회원·세금계산서(팝빌)·일괄수정 등 운영 핵심 워크플로우로 기업 고객 온보딩을 지원',
        en: 'Supported enterprise onboarding with member, Popbill tax-invoice, and batch-edit operational workflows',
      },
      {
        kr: '대용량 금융 그리드 가상화로 운영 화면 성능·메모리 부하를 안정화',
        en: 'Stabilized ops-screen performance and memory load with financial grid virtualization',
      },
    ],
    tasks: [
      {
        category: 'arch',
        badge: badge.arch,
        title: {
          kr: 'C/S 설치형 클라이언트 → React 웹 전면 마이그레이션',
          en: 'Full Legacy C/S → React Web Migration',
        },
        description: {
          kr: '수년간 운영된 Windows 설치형 자금관리 클라이언트를 React 웹으로 재설계·구축 — 대형 어드민 화면 다수, 신규 기업 고객 온보딩에 기여',
          en: 'Re-architected a long-running Windows C/S cash-management client into React web — many large admin screens; contributed to enterprise onboarding',
        },
      },
      {
        category: 'nextgen',
        badge: badge.nextgen,
        title: {
          kr: '출금·수납 원장/내역 도메인',
          en: 'Withdrawal & Collection Ledger Domains',
        },
        description: {
          kr: '기간별·회원별 출금/수납 내역, 청구·수납·미납 합산·세로 병합, 출금 보류 제외, 일괄 수정 모달까지 운영 핵심 화면 구현',
          en: 'Implemented period/member withdrawal & collection views with aggregation, row merging, hold exclusion, and batch-edit modals',
        },
      },
      {
        category: 'nextgen',
        badge: badge.nextgen,
        title: {
          kr: '회원 등록·관리',
          en: 'Member Registration & Admin',
        },
        description: {
          kr: '회원 등록/대기목록/정기출금일, 선택·일괄 수정, 증빙 파일, validation·이벤트 바인딩까지 회원 라이프사이클 UI 구축',
          en: 'Built member lifecycle UI: registration, waitlist, recurring debit dates, batch edit, evidence files, and validation/event binding',
        },
      },
      {
        category: 'nextgen',
        badge: badge.nextgen,
        title: {
          kr: '세금계산서(팝빌) · 과금 증빙 워크플로우',
          en: 'Tax Invoice (Popbill) & Billing Evidence',
        },
        description: {
          kr: '세금계산서 일괄 수정·자동발급·자동저장, 팝빌 인증서 조회, 품목 설정 일괄 변경, 내보내기/암호화 대응',
          en: 'Delivered tax-invoice batch edit, auto-issue/save, Popbill certificate lookup, item settings, and export/encryption flows',
        },
      },
      {
        category: 'infra',
        badge: badge.infra,
        title: {
          kr: 'KFTC 연동 FE 범위',
          en: 'KFTC Integration — FE Scope',
        },
        description: {
          kr: '출금·수납·원장·송수신 내역 화면에서 연동 상태 표시, 재처리·예외 UX, 운영자 확인 플로우를 구현',
          en: 'Implemented integration status, retry/exception UX, and operator confirmation flows on withdrawal, collection, ledger, and tx-history screens',
        },
      },
      {
        category: 'ui',
        badge: badge.ui,
        title: {
          kr: '어드민 UX · 인라인 필터 · 송수신 그리드',
          en: 'Admin UX, Inline Filters & Tx Grids',
        },
        description: {
          kr: '인라인 필터·검색 옵션, 사이드 탭/레이아웃, 송수신 Record 그리드 전환으로 운영자 클릭 뎁스를 줄임',
          en: 'Shortened operator click-depth with inline filters, search options, side-tab layout, and send/receive Record grids',
        },
      },
      {
        category: 'refac',
        badge: badge.refac,
        title: {
          kr: '대용량 금융 그리드 가상화',
          en: 'Large Financial Grid Virtualization',
        },
        description: {
          kr: '자금 관리 테이블에 Virtualization을 적용해 브라우저 메모리 부하를 낮추고 스크롤 성능을 안정화',
          en: 'Applied virtualization to heavy financial tables to cut memory pressure and stabilize scroll performance',
        },
      },
    ],
    tech: [
      'React',
      'TypeScript',
      'Zustand',
      'TanStack Query',
      'Tailwind CSS',
      'KFTC Open Banking',
      'Git',
    ],
  },

  {
    id: 'shopfanpick',
    name: { kr: '주식회사 샵팬픽 (ShopFanPick)', en: 'ShopFanPick Inc.' },
    badge: { kr: 'Frontend Developer', en: 'Frontend Developer' },
    date: '2022.04 – 2023.12',
    subtitle: {
      kr: 'Creator Commerce Platform & Admin Ecosystem',
      en: 'Creator Commerce Platform & Admin Ecosystem',
    },
    impacts: [
      {
        kr: 'CRA 한계를 판단해 메인·어드민을 Next.js 모노레포로 전환하고 SSR/SSG 기반을 마련',
        en: 'Migrated main & admin from CRA to a Next.js monorepo and established SSR/SSG foundations',
      },
      {
        kr: 'Next.js BFF + Prisma 타입 공유로 FE가 Feature를 끝까지 소유하는 구조로 전환',
        en: 'Enabled end-to-end FE feature ownership via Next.js BFF + shared Prisma types',
      },
      {
        kr: '메인 CMS 콘텐츠 타입 시스템과 상품·태그·파트너스 등 커머스 어드민을 구축·운영',
        en: 'Built and operated homepage CMS content types and commerce admin for products, tags, and partners',
      },
      {
        kr: '엑셀 I/O·서버리스 암호화, 커뮤니티 무한 스크롤 등 운영·성장 기능을 직접 구현·출시',
        en: 'Implemented and shipped ops/growth features including Excel I/O with serverless encryption and community infinite scroll',
      },
    ],
    tasks: [
      {
        category: 'arch',
        badge: badge.arch,
        title: {
          kr: 'CRA → Next.js 메인/어드민 모노레포 전환',
          en: 'CRA → Next.js Main/Admin Monorepo Migration',
        },
        description: {
          kr: 'SSR 불가 CRA 한계를 판단해 shopfanpick-front·admin-next(Studio 포함) 등 커머스·어드민·Studio를 Next.js 모노레포로 전환',
          en: 'Migrated commerce, admin, and Studio (shopfanpick-front · admin-next) from CRA to a Next.js monorepo',
        },
      },
      {
        category: 'arch',
        badge: badge.arch,
        title: {
          kr: 'Next.js BFF & Prisma 타입 공유',
          en: 'Next.js BFF & Prisma Type Sharing',
        },
        description: {
          kr: 'API Routes BFF + Prisma 스키마/모델을 FE 전역에 공유해 BE 대기 없이 Feature를 끝까지 소유',
          en: 'Shared Prisma models via Next.js BFF so FE owned features end-to-end without waiting on BE',
        },
      },
      {
        category: 'nextgen',
        badge: badge.nextgen,
        title: {
          kr: '메인 페이지 CMS · 콘텐츠 타입 시스템',
          en: 'Homepage CMS · Content-Type System',
        },
        description: {
          kr: '콘텐츠 기본/특별 옵션 테이블 분리, 상품·크리에이터·게시물·배너·혼합 타입 확장과 어드민 콘텐츠 관리/상세 화면 구축',
          en: 'Normalized base/special content options and extended product, creator, post, banner, hybrid types with admin list/detail screens',
        },
      },
      {
        category: 'nextgen',
        badge: badge.nextgen,
        title: {
          kr: '커머스 어드민 도메인 풀스택 구축',
          en: 'Full Commerce Admin Domain Build-out',
        },
        description: {
          kr: '상품·태그·파트너스·쿠폰 바인딩·마일리지·회원 성별 라벨 등 백오피스 CRUD/검색/조회 옵션을 FE+BFF로 구현·운영',
          en: 'Built and operated back-office CRUD/search for products, tags, partners, coupon binding, mileage, and member labels via FE+BFF',
        },
      },
      {
        category: 'infra',
        badge: badge.infra,
        title: {
          kr: '엑셀 다운로드/업로드 & 서버리스 암호화',
          en: 'Excel Import/Export & Serverless Encryption',
        },
        description: {
          kr: '컬럼 매핑·중첩 JSON 재귀 처리 기반 엑셀 I/O와 Next 서버리스에서 동작하는 zip 암호화 다운로드 파이프라인 구현',
          en: 'Implemented Excel I/O with column mapping / nested JSON recursion and zip-encrypted downloads for Next serverless',
        },
      },
      {
        category: 'ops',
        badge: badge.ops,
        title: {
          kr: 'SEO · SSR/SSG · 커뮤니티 무한스크롤',
          en: 'SEO · SSR/SSG · Community Infinite Scroll',
        },
        description: {
          kr: 'SSR/SSG로 검색 수집·초기 로딩을 개선하고, 커뮤니티에 SWR Infinite 기반 페이지 캐시 무한스크롤을 적용',
          en: 'Improved crawlability/initial load via SSR/SSG and shipped community infinite scroll with SWR Infinite page caching',
        },
      },
      {
        category: 'ui',
        badge: badge.ui,
        title: {
          kr: '디자인 시스템 · Storybook · Tailwind',
          en: 'Design System · Storybook · Tailwind',
        },
        description: {
          kr: 'Atomic Design·Storybook 도입 시도 후 Tailwind로 통합, 크리에이터 프로필/팔로우/푸터 반응형과 UI 컴포넌트 기반 정비',
          en: 'Tried Atomic Design/Storybook then consolidated on Tailwind; stabilized creator profile/follow/footer responsive UI foundations',
        },
      },
      {
        category: 'arch',
        badge: badge.arch,
        title: {
          kr: '파트너스·조회 옵션 API 구조 개편',
          en: 'Partners & Query-option API Restructuring',
        },
        description: {
          kr: '파트너스 리스트 컴포넌트/API 구조 변경, 검색 폼 토글·엑셀 다운로드 쿼리 연동 등 운영 도구 고도화',
          en: 'Restructured partners list component/API and upgraded ops tooling (search-form toggles, excel download query wiring)',
        },
      },
    ],
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Prisma',
      'Redux',
      'Next BFF',
      'Tailwind CSS',
      'SWR',
      'Git',
    ],
  },
]
