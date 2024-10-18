import { NextResponse, NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('access_token')?.value;  
    const publicPaths = ['/', '/login'];
    if (pathname.startsWith('/_next/') || pathname.startsWith('/public/')) {
        return NextResponse.next(); 
    }

    if (token && publicPaths.includes(pathname)) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
    }

    if (!token && !publicPaths.includes(pathname)) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/', 
        '/dashboard', 
        '/login',
    ],
};
