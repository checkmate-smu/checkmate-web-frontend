# CheckMate Frontend — PR 리뷰 기준

> 이 파일은 Claude AI PR 리뷰어가 참고하는 평가 기준입니다.
> 팀 컨벤션이 바뀌면 이 파일만 수정하면 됩니다.

---

## 기술 스택
- Next.js 15 (App Router)
- TypeScript
- Feature-Sliced Design (FSD) 커스텀 번호 체계
- Supabase (PostgreSQL + Auth)

---

## FSD 아키텍처 규칙 (최우선)

### 레이어 구조
```
app → 03-pages → 04-widgets → 05-features → 06-entities → 07-shared
←←←←←←←←←←← import 허용 방향 ←←←←←←←←←←←
```

### Import 방향 규칙
- **높은 번호에서만 낮은 번호로 import** 가능
- 예: `05-features`는 `06-entities`, `07-shared`에서만 import 가능
- `07-shared`에서 `05-features` import — 절대 금지

```ts
// ✅ 허용
import { AppError } from '@/07-shared/errors';         // 05-features → 07-shared
import { useAuth } from '@/05-features/auth';           // 03-pages → 05-features

// ❌ 금지
import { useAuth } from '@/05-features/auth';           // 07-shared 내부에서 사용 금지
```

### 슬라이스 내부 구조
```
05-features/auth/
├── index.ts      ← barrel export (외부에 노출할 것만)
├── model/        ← 비즈니스 로직, 커스텀 훅
└── ui/           ← UI 컴포넌트
```

---

## 디자인 토큰 규칙

### 하드코딩 금지
```css
/* ❌ 금지 */
color: #285c9f;
padding: 12px;
font-size: 14px;

/* ✅ 올바름 */
color: var(--color-brand-secondary);
padding: var(--spacing-10);
font-size: var(--text-body-sm-size);
```

### 허용 spacing 값
`6 | 8 | 10 | 16 | 20 | 24 | 32 | 48` (px) — 이 외 임의 값 사용 금지

### 폰트 규칙
- `Recipekorea` — Display, Heading LG 전용. 본문 사용 금지
- `Pretendard` — 그 외 모든 텍스트

---

## API 호출 패턴

### Spring Boot 백엔드
```ts
import { apiFetch } from '@/07-shared/api';
const result = await apiFetch<AnalysisSession>('/analysis', {
  method: 'POST',
  body: JSON.stringify({ url }),
});
```

### Supabase Client Component
```ts
'use client';
import { getSupabaseBrowserClient } from '@/07-shared/api/supabase/client';
```

### 환경변수
- `process.env` 직접 접근 금지
- 반드시 `import { config } from '@/07-shared/config/config'` 사용

---

## TypeScript 규칙
- `any` 타입 사용 금지 — `unknown` 또는 명시적 타입 사용
- 컴포넌트 Props는 `interface` 또는 `type`으로 명시
- 파일명: `kebab-case.tsx` / 컴포넌트명: `PascalCase`

---

## Next.js App Router 규칙
- 상태/이벤트/브라우저 API 사용 시 `'use client'` 파일 최상단 선언 필수
- Server Component에서 `getSupabaseBrowserClient` 사용 금지 (서버용 함수 사용)

---

## 에러 처리
```ts
import { AppError } from '@/07-shared/errors';
throw new AppError('분석 실패', 400);  // 직접 new Error() 사용 금지
```

---

## 커밋 / PR 규칙
- 브랜치: `feat/{이슈번호}-{기능명}`, base: `dev`
- 커밋: `{gitmoji}{type}({scope}): {설명}`
- 태스크 1개 = 커밋 1개
