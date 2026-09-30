import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function preferredLang(request: NextRequest): "en" | "zh" {
  const saved = request.cookies.get("esa-lang")?.value;
  if (saved === "en" || saved === "zh") return saved;

  const accept = (request.headers.get("accept-language") || "").toLowerCase();
  const zh = accept.indexOf("zh");
  const en = accept.indexOf("en");
  if (zh !== -1 && (en === -1 || zh < en)) return "zh";
  return "en";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname.match(/^\/(en|zh)(?=\/|$)/)?.[1];

  if (locale === "en" || locale === "zh") {
    const headers = new Headers(request.headers);
    headers.set("x-locale", locale);
    return NextResponse.next({ request: { headers } });
  }

  if (pathname === "/" || pathname === "/contact" || pathname === "/legal") {
    const lang = preferredLang(request);
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? `/${lang}` : `/${lang}${pathname}`;
    return NextResponse.redirect(url, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
