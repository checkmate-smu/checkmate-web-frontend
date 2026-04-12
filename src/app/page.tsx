export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-8 py-16">
      {/* Hero Section */}
      <section className="mb-32 flex flex-col items-center gap-16 lg:flex-row">
        <div className="flex-1 space-y-8">
          <div className="bg-secondary-container/30 text-on-secondary-container inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            AI-Powered Fact Checking
          </div>
          <h1 className="text-primary font-recipe text-5xl font-black leading-[1.1] tracking-tighter md:text-7xl">
            뉴스 신뢰도,
            <br />
            CheckMate로
            <br />
            확인하세요
          </h1>
          <p className="text-on-surface-variant max-w-lg text-lg leading-relaxed">
            복잡한 정보의 시대, 데이터와 인공지능이 뉴스 배후의 진실을
            분석합니다. 투명한 검증 프로세스로 신뢰할 수 있는 정보를 선별하세요.
          </p>
          {/* URL Input Area */}
          <div className="relative max-w-2xl group">
            <div className="bg-surface-container-highest focus-within:ring-secondary flex flex-col gap-4 rounded-xl p-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-offset-4 md:flex-row">
              <div className="flex flex-1 items-center gap-3 px-4">
                <span className="material-symbols-outlined text-outline">
                  link
                </span>
                <input
                  className="text-on-surface placeholder:text-outline-variant w-full border-none bg-transparent py-3 font-medium focus:ring-0"
                  placeholder="분석할 기사 URL을 입력하세요"
                  type="text"
                />
              </div>
              <button className="bg-primary text-on-primary hover:bg-primary-container flex items-center justify-center gap-2 rounded-xl px-8 py-3 font-bold transition-all active:scale-95">
                <span className="material-symbols-outlined text-[20px]">
                  analytics
                </span>
                분석하기
              </button>
            </div>
            {/* Error State Hidden by Default */}
            <div className="text-error absolute -bottom-8 left-4 hidden items-center gap-2 text-sm font-medium">
              <span className="material-symbols-outlined text-sm">error</span>
              올바른 URL 형식이 아닙니다. 다시 확인해주세요.
            </div>
          </div>
        </div>
        <div className="w-full flex-1 max-w-md">
          <div className="relative">
            <div className="bg-secondary-container/20 absolute -inset-4 rounded-full blur-3xl"></div>
            <div className="bg-surface-container-lowest border-outline-variant/10 relative flex aspect-square flex-col items-center justify-center rounded-full border p-8 text-center shadow-2xl">
              {/* Trust Score Gauge */}
              <div className="relative mb-6 h-24 w-48">
                <svg
                  className="h-full w-full overflow-visible"
                  viewBox="0 0 100 50"
                >
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#e8eff7"
                    strokeLinecap="round"
                    strokeWidth="12"
                  ></path>
                  <path
                    d="M 10 50 A 40 40 0 0 1 70 15"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeLinecap="round"
                    strokeWidth="12"
                  ></path>
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      x2="100%"
                      y1="0%"
                      y2="0%"
                    >
                      <stop offset="0%" style={{ stopColor: '#001835' }}></stop>
                      <stop
                        offset="100%"
                        style={{ stopColor: '#2b5fa2' }}
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                  <span className="text-primary text-4xl font-black">84</span>
                  <span className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase">
                    Score
                  </span>
                </div>
              </div>
              <h3 className="text-primary mb-2 text-xl font-bold">
                높은 신뢰도
              </h3>
              <p className="text-on-surface-variant text-sm">
                다수의 공신력 있는 매체에서
                <br />
                동일한 사실관계가 확인되었습니다.
              </p>
              <div className="mt-6 flex gap-2">
                <span className="bg-secondary h-2 w-2 rounded-full"></span>
                <span className="bg-surface-container-high h-2 w-2 rounded-full"></span>
                <span className="bg-surface-container-high h-2 w-2 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bento Grid: Recent Analysis */}
      <section className="space-y-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-primary text-3xl font-bold tracking-tight">
              실시간 분석 리포트
            </h2>
            <p className="text-on-surface-variant mt-2 font-medium">
              체크메이트가 실시간으로 검증 중인 최신 이슈입니다.
            </p>
          </div>
          <button className="text-secondary flex items-center gap-1 font-bold transition-all hover:gap-2">
            전체 보기{' '}
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {/* Tier 1: Verified (Large Card) */}
          <div className="bg-surface-container-lowest border-outline-variant/10 ambient-shadow group relative flex cursor-pointer flex-col justify-between rounded-full border p-8 md:col-span-2 lg:col-span-2">
            <div className="mb-10 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 text-secondary flex h-10 w-10 items-center justify-center rounded-xl">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified_user
                  </span>
                </div>
                <span className="text-secondary text-sm font-bold">
                  VERIFIED
                </span>
              </div>
              <span className="text-outline text-xs font-medium">방금 전</span>
            </div>
            <div>
              <h3 className="text-primary group-hover:text-secondary text-2xl font-bold leading-snug transition-colors">
                중앙은행 디지털 화폐(CBDC) 도입 가속화설의 실체
              </h3>
              <p className="text-on-surface-variant mt-4 line-clamp-2 leading-relaxed">
                한국은행 보도자료 및 관련 법안 검토 결과, 현재 논의 중인 단계는
                맞으나 강제 도입은 사실무근으로 확인되었습니다.
              </p>
            </div>
            <div className="border-surface-container mt-8 flex items-center justify-between border-t pt-8">
              <div className="flex items-center gap-2">
                <div className="bg-surface-container-highest h-6 w-6 rounded-full"></div>
                <span className="text-on-surface text-xs font-semibold">
                  Fact Analyst: AI-Theta
                </span>
              </div>
              <div className="bg-surface-container text-primary rounded-lg px-3 py-1 text-[10px] font-bold tracking-tighter uppercase">
                98% Match
              </div>
            </div>
          </div>
          {/* Tier 2: Mixed */}
          <div className="bg-surface-container-low flex flex-col rounded-full p-8">
            <div className="mb-8">
              <span className="bg-surface-container-highest text-on-surface-variant mb-4 inline-block rounded-lg px-3 py-1 text-[10px] font-bold">
                MIXED
              </span>
              <h4 className="text-primary text-lg font-bold leading-tight">
                신규 에너지 정책에 따른 요금 인상폭 논란
              </h4>
            </div>
            <div className="mt-auto">
              <div className="flex items-baseline gap-1">
                <span className="text-primary text-2xl font-black">54</span>
                <span className="text-on-surface-variant text-xs font-bold">
                  /100
                </span>
              </div>
              <div className="bg-surface-container-highest mt-2 w-full h-1.5 overflow-hidden rounded-full">
                <div className="bg-primary/40 h-full w-[54%] rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Tier 3: False (Direct) */}
          <div className="bg-error-container/30 flex flex-col rounded-full p-8">
            <div className="mb-8">
              <span className="bg-error text-on-error mb-4 inline-block rounded-lg px-3 py-1 text-[10px] font-bold">
                FALSE
              </span>
              <h4 className="text-on-error-container text-lg font-bold leading-tight">
                수도권 지하철 무료 운행 중단 루머 분석
              </h4>
            </div>
            <div className="mt-auto">
              <div className="text-error flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  warning
                </span>
                <span className="text-xs font-bold">허위 정보 주의</span>
              </div>
              <p className="text-on-error-container/70 mt-2 text-[10px]">
                공식 브리핑에서 부인된 사안입니다.
              </p>
            </div>
          </div>
          {/* Summary Feature */}
          <div className="bg-primary text-on-primary flex flex-col rounded-full p-8 md:col-span-1 lg:col-span-1">
            <span className="material-symbols-outlined text-on-primary-container mb-4 text-4xl">
              psychology
            </span>
            <h4 className="mb-3 text-xl font-bold">AI 인사이트</h4>
            <p className="text-on-primary-container mb-6 text-sm leading-relaxed">
              최근 가짜 뉴스의 68%가 자극적인 썸네일을 사용하고 있습니다. 주의가
              필요합니다.
            </p>
            <button className="bg-primary-container hover:bg-on-primary-fixed-variant mt-auto w-full rounded-xl py-3 text-xs font-bold transition-colors">
              분석 패턴 확인
            </button>
          </div>
          {/* Extension Feature */}
          <div className="bg-surface-container-highest/50 rounded-full p-1 md:col-span-2 lg:col-span-3">
            <div className="bg-surface-container-lowest border-outline-variant/10 flex h-full flex-col items-center gap-8 rounded-full border p-8 md:flex-row">
              <div className="flex-1">
                <h4 className="text-primary mb-2 text-xl font-bold">
                  브라우저 확장 프로그램
                </h4>
                <p className="text-on-surface-variant text-sm">
                  어떤 웹사이트에서든 마우스 우클릭 한 번으로 즉시 뉴스 진위
                  여부를 파악하세요.
                </p>
              </div>
              <button className="bg-secondary text-on-secondary shadow-secondary/10 whitespace-nowrap rounded-xl px-8 py-4 font-bold shadow-xl transition-all hover:opacity-90 active:scale-95">
                Chrome에 추가하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
