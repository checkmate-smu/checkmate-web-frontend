import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <Link
        href="/"
        className="font-pretendard text-[var(--color-text-heading)] font-bold"
        style={{ fontFamily: 'Recipekorea' }}
      >
        CheckMate
      </Link>

      <button
        className="hidden md:block text-[var(--color-text-primary)] font-pretendard"
        type="button"
      >
        로그인
      </button>

      <button
        className="md:hidden flex flex-col gap-1"
        type="button"
        aria-label="메뉴 열기"
      >
        <span className="block w-6 h-0.5 bg-[var(--color-text-primary)]"></span>
        <span className="block w-6 h-0.5 bg-[var(--color-text-primary)]"></span>
        <span className="block w-6 h-0.5 bg-[var(--color-text-primary)]"></span>
      </button>
    </nav>
  );
}

export { Navbar };
