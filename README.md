# checkmate-web-frontend

## 1. 프로젝트 개요 (Project Overview)

**CheckMate Web**은 AI 기반 뉴스 신뢰도 분석 웹앱의 **React 프론트엔드**입니다.  
사용자가 뉴스 기사를 입력하면 **Gemini API**를 통해 신뢰도를 분석하고 결과를 시각화합니다.  
8주 팀 프로젝트로, 실제 협업 경험과 배포 파이프라인 운영을 핵심 목표로 합니다.

---

## 2. Tech Stack

| 구분 | 기술 |
| :--- | :--- |
| **Front-end** | `React`, `TypeScript` |
| **External API** | `Google Gemini API` |
| **DevOps** | `Vercel` |

---

## 3. 프로젝트 클론 및 각종 명령어

### 저장소 복제

```bash
git clone https://github.com/checkmate-smu/checkmate-web-frontend.git
```

### 의존성 설치

```bash
npm install
```

### 환경 변수 설정

`.env.example`을 복사하여 `.env.local` 파일을 생성합니다.

```bash
cp .env.example .env.local
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 린트 검사

```bash
npm run lint
```

### 코드 포맷

```bash
npm run format
```

---

## 4. 환경 변수 (Environment Variables)

`.env.local` 파일을 루트에 생성하고 아래 변수를 설정합니다.

| 변수명 | 설명 |
| :--- | :--- |
| `GEMINI_API_KEY` | Google Gemini API 키 |

`.env.example` 파일을 참고하세요.

---

## 5. 프로젝트 구조 (Project Structure)

> 현재 프로젝트 초기 세팅 단계입니다. 구조는 추후 업데이트 예정입니다.

```
checkmate-web-frontend/
├── src/                    # 소스 코드 (추후 업데이트)
├── public/                 # 정적 파일
├── .env.example            # 환경 변수 템플릿 (Git 추적)
├── .env.local              # 로컬 환경 변수 (Git 추적 제외)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 6. 협업 가이드라인 (Contribution Guidelines)

### Git Workflow

- `master` (Production): 최종 배포 브랜치
- `dev` (Staging): 개발 통합 브랜치 — PR은 이 브랜치로
- `feat/{N}-{name}`: 기능 단위 브랜치 (예: `feat/1-news-input`)

### 작업 흐름

1. `dev` 브랜치에서 `feat/{N}-{name}` 브랜치를 생성하여 작업합니다.
2. 기능 완료 후 **Pull Request(PR)** 를 `dev`로 생성합니다.
3. 1명 이상의 팀원에게 **Approve(리뷰 승인)** 를 받습니다.
4. Merge 전, `dev` 최신 변경 사항을 `pull`하여 충돌을 최소화합니다.

### 프로젝트 규칙

- **PR은 작은 단위로.** 하나의 PR은 하나의 기능에만 집중합니다.
- 세부 작업은 체크리스트로 관리합니다.
- 작업 충돌을 방지하기 위해 역할을 명확히 나눕니다.

### 개발 가이드라인

- 코딩 스타일: **ESLint + Prettier** 기준
- 변수 네이밍: **camelCase / PascalCase**
- 폴더 네이밍: **kebab-case**
- TypeScript strict mode 사용

---

## 7. 커밋 컨벤션 (Commit Convention)

**Conventional Commits** 규칙 준수

| 타입 | 설명 |
| :--- | :--- |
| `feat` | 새 기능 |
| `fix` | 버그 수정 |
| `docs` | 문서 변경 |
| `style` | 코드 포매팅, 공백/정렬 등 로직 변경 없는 스타일 수정 |
| `refactor` | 코드 리팩토링 |
| `perf` | 성능 개선 |
| `test` | 테스트 관련 |
| `chore` | 빌드·배포·패키지 설정, 잡무성 정리 |
| `ci` | CI 설정 |
| `revert` | 이전 커밋 되돌리기 |

**메시지 형식**

```
feat(news): 뉴스 URL 입력 컴포넌트 추가
fix(api): Gemini API 응답 파싱 오류 수정
docs(readme): 환경 변수 설명 추가
```

---

## 8. 브랜치 네이밍 컨벤션

- **feature/** — 새로운 기능  
  예) `feature/1-news-input`, `feature/2-result-chart`

- **fix/** — 버그 수정  
  예) `fix/api-timeout-error`

- **hotfix/** — 긴급 수정  
  예) `hotfix/env-key-missing`

- **refactor/** — 코드 구조 개선  
  예) `refactor/api-client-cleanup`

- **docs/** — 문서 작업  
  예) `docs/update-readme`

---
