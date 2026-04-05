import Link from 'next/link';

/**
 * 404 Not Found 페이지
 */
export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">페이지를 찾을 수 없습니다</h2>
      <p className="text-zinc-600">요청하신 페이지가 존재하지 않습니다.</p>
      <Link
        href="/"
        className="rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-700"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
