# CheckMate Frontend — 코딩 규칙

> 상세 가이드: `CONVENTIONS.md` 참조
> 커밋 메시지: Gitmoji 사용 (팀 규칙)

---

## 기술 스택
- Next.js 15 (App Router)
- TypeScript
- Feature-Sliced Design (FSD) 커스텀 번호 체계
- Supabase (PostgreSQL + Auth)

## FSD 아키텍처 (최우선)

### Import 방향 규칙
```
app → 03-pages → 04-widgets → 05-features → 06-entities → 07-shared
←←←←←←←←←←← import 허용 방향 ←←←←←←←←←←←
```
- 높은 번호에서만 낮은 번호로 import 가능
- `07-shared`에서 `05-features` import — 절대 금지

### Barrel Export (index.ts)
- 각 슬라이스는 `index.ts`로 외부 API 노출
- 슬라이스 외부에서 내부 경로 직접 접근 비권장

### 슬라이스 내부 구조
```
05-features/auth/
├── index.ts      ← barrel export
├── model/        ← 비즈니스 로직, 커스텀 훅
└── ui/           ← UI 컴포넌트
```

## 파일/폴더 네이밍

| 대상 | 규칙 | 예시 |
|------|------|------|
| 폴더 | kebab-case | `auth-modal/` |
| 파일 | kebab-case | `auth-modal.tsx`, `use-auth.ts` |
| 컴포넌트 | PascalCase | `AuthModal` |
| 변수/함수 | camelCase | `getSupabaseBrowserClient` |
| 타입 | PascalCase | `Article`, `AnalysisSession` |

## Path Alias

| Alias | 경로 |
|-------|------|
| `@/*` | `./src/*` |
| `@04-widgets/*` | `./src/04-widgets/*` |
| `@05-features/*` | `./src/05-features/*` |
| `@06-entities/*` | `./src/06-entities/*` |
| `@07-shared/*` | `./src/07-shared/*` |

## 디자인 토큰

- 하드코딩 금지 — `var(--color-*)`, `var(--spacing-*)` 사용
- 허용 spacing: `6 | 8 | 10 | 16 | 20 | 24 | 32 | 48` (px)
- `Recipekorea` — Display, Heading LG 전용. 본문 금지
- `Pretendard` — 그 외 모든 텍스트

## API 호출

- Spring Boot API: `apiFetch` (`@/07-shared/api`)
- Supabase Client: `getSupabaseBrowserClient` (`@/07-shared/api/supabase/client`)
- Supabase Server: `getSupabaseServerClient` (`@/07-shared/api/supabase/server`)
- 환경변수: `process.env` 직접 접근 금지 → `config` (`@/07-shared/config/config`)

## TypeScript

- `any` 타입 사용 금지 — `unknown` 또는 명시적 타입
- Props는 `interface` 또는 `type`으로 명시

## Next.js App Router

- 상태/이벤트/브라우저 API 사용 시 `'use client'` 최상단 선언 필수
- Server Component에서 `getSupabaseBrowserClient` 사용 금지

## 에러 처리

- `AppError` 사용 (`@/07-shared/errors`) — 직접 `new Error()` 금지
- 에러 UI는 Next.js 자동 처리: `error.tsx`, `not-found.tsx`
