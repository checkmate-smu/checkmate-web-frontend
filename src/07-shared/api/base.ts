'use client';

import { AppError } from '@/07-shared/errors';
import { config } from '@/07-shared/config/config';

/**
 * 백엔드 API 호출 래퍼 (Spring Boot 엔드포인트)
 * 응답 에러를 AppError로 변환하여 일관된 에러 처리 보장
 */
export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = `${config.api.baseUrl}${path}`;

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message =
      (body as { message?: string }).message || `요청 실패 (${res.status})`;
    throw new AppError(message, res.status);
  }

  return res.json() as Promise<T>;
}
