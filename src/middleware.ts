import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type UserRole = "user" | "catechist" | "leaders" | "priest";

export function middleware(request: NextRequest) {
  // const token = request.cookies.get("authToken")?.value;
  const token = null; //get token from cookies
  const isAuth = !!token;

  //  const role = (request.cookies.get("role")?.value as UserRole) || "user";
  const role: UserRole = "priest"; // Mocked role for testing

  const url = request.nextUrl;
  const pathname = url.pathname;

  // If user hits root `/`, redirect to their dashboard
  if (pathname === "/") {
    if (isAuth) {
      const roleRedirectMap: Record<UserRole, string> = {
        user: "/user/home",
        catechist: "/catechist/home",
        leaders: "/leaders/home",
        priest: "/priest/home",
      };

      return NextResponse.redirect(new URL(roleRedirectMap[role], request.url));
    } else {
      return NextResponse.next(); // Show landing page
    }
  }

  // Public routes
  const publicRoutes = [
    "/",
    "/login",
    "/sign_up",
    "/verify_otp",
    "/about",
    "/community",
    "/general_announcements",
    "/outstations/[branchId]",
  ];

  // Handle dynamic public route: /outstations/:branchId
  const isPublic =
    publicRoutes.includes(pathname) || pathname.startsWith("/outstations/");

  // Block unauthenticated users from private routes
  if (!isAuth && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Role-based access control for authenticated users
  if (isAuth) {
    const rolePaths: Record<UserRole, string> = {
      user: "/user",
      catechist: "/catechist",
      leaders: "/leaders",
      priest: "/priest",
    };

    const allowedPrefix = rolePaths[role];
    if (
      pathname.startsWith("/user") ||
      pathname.startsWith("/catechist") ||
      pathname.startsWith("/leaders") ||
      pathname.startsWith("/priest")
    ) {
      if (!pathname.startsWith(allowedPrefix)) {
        // redirect them to their correct dashboard
        return NextResponse.redirect(
          new URL(`${allowedPrefix}/home`, request.url)
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
