import type { Metadata } from "next";
import { t, type Lang, type TranslationKey } from "./i18n";
import { getSiteUrl } from "./site";

export type SeoPage = "home" | "contact" | "legal";

const pathByPage: Record<SeoPage, string> = {
  home: "",
  contact: "/contact",
  legal: "/legal",
};

const titleKey: Record<SeoPage, TranslationKey> = {
  home: "meta.home.title",
  contact: "meta.contact.title",
  legal: "meta.legal.title",
};

const descriptionKey: Record<SeoPage, TranslationKey> = {
  home: "meta.home.description",
  contact: "meta.contact.description",
  legal: "meta.legal.description",
};

export function pageMetadata(lang: Lang, page: SeoPage): Metadata {
  const siteUrl = getSiteUrl();
  const path = pathByPage[page];
  const pageTitle = t(lang, titleKey[page]);
  const title =
    page === "home" ? pageTitle : `EVERWILD Snow Adventure | ${pageTitle}`;
  const description = t(lang, descriptionKey[page]);
  const canonical = `${siteUrl}/${lang}${path}`;
  const en = `${siteUrl}/en${path}`;
  const zh = `${siteUrl}/zh${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        en,
        "zh-CN": zh,
        "x-default": en,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "EVERWILD Snow Adventure",
      locale: lang === "zh" ? "zh_CN" : "en_US",
      alternateLocale: lang === "zh" ? ["en_US"] : ["zh_CN"],
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
