/**
 * 애플리케이션 전역 에러 클래스
 * 상태코드 기반 에러 분류: 4xx → fail, 5xx → error
 */
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly status: 'fail' | 'error';
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
    this.isOperational = true;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
