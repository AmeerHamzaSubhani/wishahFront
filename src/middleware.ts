import { NextResponse, NextRequest } from 'next/server';
// import { getUserInfo } from './lib/authToken';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Public paths that don't require authentication
    const publicPaths = [
        '/',
        '/auth/login',
        '/auth/signup',
        '/ourcourses',
        '/about',
    ];

    // Admin paths
    const adminPaths = ['/admin'];
    const userPaths = ['/dashboard'];

    // Get user info from cookie
    const token = request.cookies.get('access-token')?.value;
    const isAdmin = request.cookies.get('is-admin')?.value === 'true';

    const isAuthenticated = !!token;

    // Case 1: Authenticated users trying to access public routes
    if (publicPaths.includes(pathname) && isAuthenticated) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    // Case 2: Unauthenticated users trying to access private routes
    if (!publicPaths.includes(pathname) && !isAuthenticated) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    // Case 3: Non-admin users trying to access admin routes
    if (adminPaths.some(path => pathname.startsWith(path)) && !isAdmin) {
        return NextResponse.redirect(
            new URL('/dashboard/my-courses', request.nextUrl),
        );
    }
    // Case 4: Admin users trying to access user routes
    if (userPaths.some(path => pathname.startsWith(path)) && !!isAdmin) {
        return NextResponse.redirect(
            new URL('/admin/dashboard', request.nextUrl),
        );
    }
    // Allow the request to proceed for valid cases
    return NextResponse.next();
}

// Config for matching the paths that will trigger this middleware
export const config = {
    matcher: [
        '/',
        '/profile',
        '/auth/login',
        '/auth/signup',
        '/ourcourses',
        '/about',
        '/admin/:path*',
        '/dashboard/:path*',
    ],
};
