'use client';

import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <Link
        href="/"
        style={{ fontFamily: 'Recipekorea', color: 'var(--foreground)' }}
      >
        CheckMate
      </Link>

      <div className="hidden md:block" style={{ color: 'var(--foreground)' }}>
        로그인
      </div>

      <button className="md:hidden flex flex-col gap-1">
        <span
          style={{ background: 'var(--foreground)' }}
          className="block w-6 h-0.5"
        ></span>
        <span
          style={{ background: 'var(--foreground)' }}
          className="block w-6 h-0.5"
        ></span>
        <span
          style={{ background: 'var(--foreground)' }}
          className="block w-6 h-0.5"
        ></span>
      </button>
    </nav>
  );
}

export { Navbar };
