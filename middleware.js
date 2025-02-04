// import { updateSession } from "@/libs/supabase/middleware";

// export async function middleware(request) {
//   return await updateSession(request);
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * Feel free to modify this pattern to include more paths.
//      */
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };
// middleware.js
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import { updateSession } from "@/libs/supabase/middleware";

export async function middleware(request) {
  // Get the response from updateSession first
  const response = await updateSession(request);

  // For protected routes, check authentication
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    try {
      const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
          cookies: {
            get(name) {
              return request.cookies.get(name)?.value;
            },
          },
        }
      );

      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        // Redirect to signin if there's no session
        const redirectUrl = new URL('/signin', request.url);
        // Add the original URL as a query parameter to redirect back after login
        redirectUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
        return NextResponse.redirect(redirectUrl);
      }
    } catch (error) {
      console.error('Auth error:', error);
      // Redirect to signin on error
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};  