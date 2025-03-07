import withAuth from "next-auth/middleware";
import { NextResponse, NextRequest } from "next/server";

export default withAuth(
  function middleware(req: NextRequest) {
    console.log(req.nextUrl.pathname);
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        if (
          pathname.startsWith("/api/auth") ||
          pathname.startsWith("/login") ||
          pathname.startsWith("/register")
        ) {
          return true;
        }

        // public paths

        if (pathname.startsWith("/") || pathname.startsWith("/api/videos")) {
          return true;
        }

        return !!token;
      },
    },
  }
);

export const confiq = {
  matcher: [
    "/api/auth/:path*",
    "/login",
    "/register",
    "/api/videos/:path*",
    "/",
    "/video/:path*",
  ],
};
