# Kyuyeon Kim — Resume / Portfolio

Vite + React 이력서 사이트. GitHub Pages (`https://grangbelrlurain.github.io`) 루트에 배포합니다.

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Deploy

`main` 푸시 시 GitHub Actions가 Pages로 배포합니다.

저장소 Settings → Pages → **Source: GitHub Actions** 로 설정해 주세요.
(기존 `gh-pages` 브랜치 블로그는 소스에서 제거되었습니다.)

## Content

경력/불릿 데이터는 `src/data/` 에 있습니다.

- `experience.ts` — 회사별 업무 불릿
- `profile.ts` — 히어로, About, 프로젝트, 스킬
