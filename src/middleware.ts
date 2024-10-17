import { NextResponse, NextRequest } from 'next/server';
// import { getUserInfo } from './lib/authToken';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Public paths that don't require authentication
    const publicPaths = [
        '/',
        '/login',
        '/signup',
    ];

    // Admin paths
    const adminPaths = ['/admin'];
    const userPaths = ['/dashboard'];

    // Get user info from cookie
    const token = request.cookies.get('access_token')?.value;
    const isAdmin = request.cookies.get('is-admin')?.value === 'true';

    // Case 1: Authenticated users trying to access public routes
    if (publicPaths.includes(pathname) && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    // Case 2: Unauthenticated users trying to access private routes
    if (!publicPaths.includes(pathname) && !token) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    // Case 3: Non-admin users trying to access admin routes
    if (adminPaths.some(path => pathname.startsWith(path)) && !isAdmin) {
        return NextResponse.redirect(
            new URL('/dashboard', request.nextUrl),
        );
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/:path*',
    ],
};
