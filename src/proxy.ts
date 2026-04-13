import { type NextRequest } from 'next/server';
import { updateSession } from '@/07-shared/api/supabase/middleware';

/**
 * Next.js 16 Proxy -- Supabase 세션 리프레시
 */
export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
