import type { Lang } from "./i18n";

export const DEFAULT_SITE_URL = "https://everwild-snow.vercel.app";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  return DEFAULT_SITE_URL;
}

export function isLang(value: string): value is Lang {
  return value === "en" || value === "zh";
}

export function localizeHref(lang: Lang, href: string): string {
  if (href.startsWith("#")) return href;
  if (!href.startsWith("/")) return href;

  const hashIndex = href.indexOf("#");
  const path = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const suffix = path === "/" ? "" : path;
  return `/${lang}${suffix}${hash}`;
}

export function swapLocale(pathname: string, lang: Lang): string {
  if (
    pathname === "/en" ||
    pathname === "/zh" ||
    pathname.startsWith("/en/") ||
    pathname.startsWith("/zh/")
  ) {
    return pathname.replace(/^\/(en|zh)/, `/${lang}`);
  }
  return `/${lang}`;
}
