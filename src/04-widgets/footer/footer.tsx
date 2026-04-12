'use client';

import Link from 'next/link';

function Footer() {
  return (
    <footer
      className="flex flex-col items-center py-6 border-t gap-2"
      style={{ color: 'var(--foreground)' }}
    >
      <p>CheckMate — AI 뉴스 신뢰도 분석</p>

      <p>© 2026 CheckMate Team. All rights reserved.</p>

      <Link
        href="https://github.com/checkmate-smu"
        style={{ color: 'var(--foreground)' }}
        className="underline"
      >
        GitHub
      </Link>
    </footer>
  );
}

export { Footer };
