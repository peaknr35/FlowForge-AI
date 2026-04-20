type RateLimitEntry = { count: number; resetAt: number };

const limits = new Map<string, RateLimitEntry>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_AUTH_ATTEMPTS = 5;
const MAX_API_ATTEMPTS = 30;

function getClientKey(request: Request, prefix: string): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || 'unknown';
  return `${prefix}:${ip}`;
}

function isRateLimited(key: string, maxAttempts: number): boolean {
  const now = Date.now();
  const entry = limits.get(key);

  if (!entry || now > entry.resetAt) {
    limits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  if (entry.count > maxAttempts) {
    return true;
  }

  return false;
}

export function authRateLimit(request: Request): boolean {
  return isRateLimited(getClientKey(request, 'auth'), MAX_AUTH_ATTEMPTS);
}

export function apiRateLimit(request: Request): boolean {
  return isRateLimited(getClientKey(request, 'api'), MAX_API_ATTEMPTS);
}

export function getRateLimitHeaders(request: Request, maxAttempts: number): {
  'X-RateLimit-Limit': string;
  'X-RateLimit-Remaining': string;
  'Retry-After'?: string;
} {
  const key = getClientKey(request, 'api');
  const entry = limits.get(key);
  const remaining = entry
    ? Math.max(0, maxAttempts - entry.count)
    : maxAttempts;
  const headers: Record<string, string> = {
    'X-RateLimit-Limit': String(maxAttempts),
    'X-RateLimit-Remaining': String(remaining),
  };

  if (entry && entry.count >= maxAttempts) {
    headers['Retry-After'] = String(Math.ceil((entry.resetAt - Date.now()) / 1000));
  }

  return headers as ReturnType<typeof getRateLimitHeaders>;
}

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of limits.entries()) {
    if (now > entry.resetAt) {
      limits.delete(key);
    }
  }
}, 5 * 60 * 1000);