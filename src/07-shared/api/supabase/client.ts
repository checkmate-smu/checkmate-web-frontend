'use client';

import { createBrowserClient } from '@supabase/ssr';
import { config } from '@/07-shared/config/config';

/**
 * 브라우저용 Supabase 클라이언트 (싱글톤)
 * Client Component에서 사용
 */
let client: ReturnType<typeof createBrowserClient> | undefined;

export function getSupabaseBrowserClient() {
  if (client) return client;

  client = createBrowserClient(config.supabase.url, config.supabase.anonKey);

  return client;
}
