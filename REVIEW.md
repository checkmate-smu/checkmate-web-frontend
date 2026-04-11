# CheckMate Frontend — PR 리뷰 규칙

> Claude AI 리뷰어 전용. 한국어로 리뷰한다.

## Always check

### FSD Import 방향 위반
- 낮은 번호에서 높은 번호로 import 여부 (예: `07-shared`에서 `05-features` import)
- 슬라이스 외부에서 내부 경로 직접 접근 여부 (barrel export 우회)

### 디자인 토큰
- 하드코딩된 색상값 (`#xxx`, `rgb()`, `hsl()`)
- 토큰에 없는 spacing 값 (허용: 6, 8, 10, 16, 20, 24, 32, 48 px)
- `Recipekorea` 폰트를 본문에 사용한 경우

### TypeScript
- `any` 타입 사용 여부 → `unknown` 또는 명시적 타입 필수
- Props 타입 미정의 여부

### 환경변수
- `process.env` 직접 접근 여부 → `config` (`@/07-shared/config/config`) 사용 필수

### 에러 처리
- `new Error()` 직접 사용 여부 → `AppError` (`@/07-shared/errors`) 사용 필수

### Next.js App Router
- 상태/이벤트 사용 컴포넌트에 `'use client'` 누락 여부
- Server Component에서 `getSupabaseBrowserClient` 사용 여부

### 파일 네이밍
- 컴포넌트 파일이 kebab-case가 아닌 경우
- 폴더명이 PascalCase인 경우

## Style

- barrel export(`index.ts`)를 통한 import 권장
- `apiFetch` 래퍼를 통한 API 호출 권장
- Path alias (`@/*`) 사용 권장 (상대 경로 `../../` 비권장)

## Skip

- ESLint/Prettier 포맷 관련 이슈 (CI에서 자동 검사)
- `next-env.d.ts` 변경 (Next.js 자동 생성)
- `package-lock.json` 변경
- 테스트 코드의 사소한 네이밍
