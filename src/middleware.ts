import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const token = request.cookies.get("authToken")?.value;
  const token = 1111; //get token from cookies
  const isAuth = !!token;

  const url = request.nextUrl;

  //   If user hits "/" (root)
  if (url.pathname === "/") {
    if (isAuth) {
      // Redirect to the dashboard "/" (inside dashboard group)
      return NextResponse.redirect(new URL("/home", request.url));
    } else {
      // Show landing Page
      return NextResponse.next();
    }
  }

  //   Block other routes if not authenticated
  if (
    !isAuth &&
    ![
      "/",
      "/login",
      "/sign_up",
      "/verify_otp",
      "/about",
      "/community",
      "/general_announcements",
    ].includes(url.pathname)
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
