import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) =>
                        request.cookies.set(name, value)
                    );
                    supabaseResponse = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // Refresh session if expired
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const pathname = request.nextUrl.pathname;

    // Public routes that don't require authentication
    const publicRoutes = [
        '/',
        '/patenti',
        '/corsi',
        '/sedi',
        '/contatti',
        '/privacy',
        '/cookie',
        '/termini',
        '/login',
        '/registrazione',
        '/reset-password',
        '/iscrizione',
    ];

    // Check if current path starts with any public route
    const isPublicRoute = publicRoutes.some(
        route => pathname === route || pathname.startsWith(`${route}/`)
    );

    // API routes are handled separately
    const isApiRoute = pathname.startsWith('/api');

    // If not public route and not authenticated, redirect to login
    if (!isPublicRoute && !isApiRoute && !user) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        url.searchParams.set('redirect', pathname);
        return NextResponse.redirect(url);
    }

    // Role-based access control
    if (user && (pathname.startsWith('/admin') || pathname.startsWith('/istruttore'))) {
        // Get user profile with role
        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('user_id', user.id)
            .single();

        const role = profile?.role || 'student';

        // Admin routes require admin role
        if (pathname.startsWith('/admin') && role !== 'admin') {
            const url = request.nextUrl.clone();
            url.pathname = '/dashboard';
            return NextResponse.redirect(url);
        }

        // Instructor routes require instructor or admin role
        if (pathname.startsWith('/istruttore') && !['instructor', 'admin'].includes(role)) {
            const url = request.nextUrl.clone();
            url.pathname = '/dashboard';
            return NextResponse.redirect(url);
        }
    }

    // Redirect authenticated users away from auth pages
    if (user && (pathname === '/login' || pathname === '/registrazione')) {
        const url = request.nextUrl.clone();
        url.pathname = '/dashboard';
        return NextResponse.redirect(url);
    }

    return supabaseResponse;
}
