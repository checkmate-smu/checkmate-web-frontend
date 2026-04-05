'use client';

/**
 * 런타임 에러 바운더리
 * 라우트 세그먼트 내부에서 발생한 에러를 캐치하여 폴백 UI 표시
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">문제가 발생했습니다</h2>
      <p className="text-zinc-600">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-700"
      >
        다시 시도
      </button>
    </div>
  );
}
