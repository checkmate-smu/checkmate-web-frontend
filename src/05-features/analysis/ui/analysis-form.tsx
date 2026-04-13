'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * 05-features — Analysis Form
 * 사용자의 기사 URL 입력을 처리하고 유효성 검사 및 분석 요청을 담당합니다.
 */
export function AnalysisForm() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleAnalyze = () => {
    // 간단한 URL 유효성 검증 (정규식)
    const urlPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

    if (!urlPattern.test(url)) {
      setError(true);
      return;
    }

    setError(false);
    // 분석 상세 페이지로 이동 (id는 임시로 url을 인코딩하거나 고정값 사용)
    // 실제로는 API 호출 후 생성된 ID로 이동함
    router.push(`/analysis/pending?url=${encodeURIComponent(url)}`);
  };

  return (
    <div className="relative max-w-2xl group w-full">
      <div className="bg-surface-container-highest focus-within:ring-secondary flex flex-col gap-4 rounded-xl p-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-offset-4 md:flex-row">
        <div className="flex flex-1 items-center gap-3 px-4">
          <span className="material-symbols-outlined text-outline">link</span>
          <input
            className="text-on-surface placeholder:text-outline-variant font-pretendard w-full border-none bg-transparent py-3 font-medium focus:ring-0"
            placeholder="분석할 기사 URL을 입력하세요"
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (error) setError(false);
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
          />
        </div>
        <button
          className="bg-primary text-on-primary hover:bg-primary-container flex items-center justify-center gap-2 rounded-xl px-8 py-3 font-bold transition-all active:scale-95"
          type="button"
          onClick={handleAnalyze}
        >
          <span className="material-symbols-outlined text-[20px]">
            analytics
          </span>
          분석하기
        </button>
      </div>

      {/* Error State */}
      {error && (
        <div className="text-error absolute -bottom-8 left-4 flex items-center gap-2 text-sm font-medium font-pretendard">
          <span className="material-symbols-outlined text-sm">error</span>
          올바른 URL 형식이 아닙니다. 다시 확인해주세요.
        </div>
      )}
    </div>
  );
}
