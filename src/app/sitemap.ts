import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const paths = ["", "/contact", "/legal"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return (["en", "zh"] as const).flatMap((lang) =>
    paths.map((path) => {
      const en = `${siteUrl}/en${path}`;
      const zh = `${siteUrl}/zh${path}`;
      return {
        url: `${siteUrl}/${lang}${path}`,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.6,
        alternates: {
          languages: {
            en,
            "zh-CN": zh,
            "x-default": en,
          },
        },
      };
    }),
  );
}
