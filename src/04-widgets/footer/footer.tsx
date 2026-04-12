import Link from 'next/link';

function Footer() {
  return (
    <footer className="flex flex-col items-center py-6 border-t gap-2 text-[var(--color-text-primary)] font-pretendard">
      <p>CheckMate — AI 뉴스 신뢰도 분석</p>

      <p>© 2026 CheckMate Team. All rights reserved.</p>

      <Link
        href="https://github.com/checkmate-smu"
        className="underline text-[var(--color-text-accent)]"
      >
        GitHub
      </Link>
    </footer>
  );
}

export { Footer };
