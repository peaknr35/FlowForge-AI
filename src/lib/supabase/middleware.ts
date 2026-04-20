import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

const AUTH_RATE_LIMITS = new Map<string, { count: number; resetAt: number }>();
const AUTH_MAX_ATTEMPTS = 5;
const AUTH_WINDOW_MS = 15 * 60 * 1000;

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0]?.trim() || 'unknown';
}

function isAuthRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = AUTH_RATE_LIMITS.get(ip);

  if (!entry || now > entry.resetAt) {
    AUTH_RATE_LIMITS.set(ip, { count: 1, resetAt: now + AUTH_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > AUTH_MAX_ATTEMPTS;
}

export async function updateSession(request: NextRequest) {
  const ip = getClientIp(request);
  const isLoginPath = request.nextUrl.pathname === '/login';

  if (isLoginPath && isAuthRateLimited(ip)) {
    return new NextResponse('Too many login attempts. Please try again later.', {
      status: 429,
      headers: { 'Retry-After': '900' },
    });
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !request.nextUrl.pathname.startsWith('/login') && !request.nextUrl.pathname.startsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Security headers
  supabaseResponse.headers.set('X-Content-Type-Options', 'nosniff');
  supabaseResponse.headers.set('X-Frame-Options', 'DENY');
  supabaseResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  supabaseResponse.headers.set('X-XSS-Protection', '1; mode=block');

  return supabaseResponse;
}