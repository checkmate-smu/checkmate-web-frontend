import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { config } from '@/07-shared/config/config';

/**
 * 서버용 Supabase 클라이언트 (Server Component, Route Handler)
 * 호출할 때마다 새 인스턴스 생성 (요청별 격리)
 */
export async function getSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(config.supabase.url, config.supabase.anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Server Component에서 호출 시 무시 (미들웨어에서 리프레시)
        }
      },
    },
  });
}
