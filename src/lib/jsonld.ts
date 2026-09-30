import { t, type Lang, type TranslationKey } from "./i18n";
import { getSiteUrl } from "./site";

const serviceKeys: [TranslationKey, TranslationKey][] = [
  ["services.s1.title", "services.s1.text"],
  ["services.s2.title", "services.s2.text"],
  ["services.s3.title", "services.s3.text"],
  ["services.s4.title", "services.s4.text"],
  ["services.s5.title", "services.s5.text"],
  ["services.s6.title", "services.s6.text"],
];

function plain(value: string): string {
  return value.replace(/<br\s*\/?>/gi, " ").replace(/\s+/g, " ").trim();
}

export function organizationJsonLd(lang: Lang) {
  const siteUrl = getSiteUrl();
  const country = lang === "zh" ? "日本" : "Japan";
  const areas =
    lang === "zh"
      ? ["长野县", "白马谷", "野泽温泉", "志贺高原", "二世古", "安比高原", "妙高"]
      : [
          "Nagano Prefecture",
          "Hakuba Valley",
          "Nozawa Onsen",
          "Shiga Kogen",
          "Niseko",
          "Appi Kogen",
          "Myoko",
        ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "EVERWILD Snow Adventure",
        alternateName: ["ESA", "EVERWILD"],
        url: `${siteUrl}/${lang}`,
        description: plain(t(lang, "meta.home.description")),
        knowsLanguage: ["en", "zh-CN"],
        areaServed: [
          { "@type": "Country", name: country },
          ...areas.map((name) => ({ "@type": "Place", name })),
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: `${siteUrl}/${lang}/contact`,
          availableLanguage: ["English", "Chinese"],
        },
        makesOffer: serviceKeys.map(([titleKey, textKey]) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: plain(t(lang, titleKey)),
            description: plain(t(lang, textKey)),
            provider: { "@id": `${siteUrl}/#organization` },
            areaServed: { "@type": "Country", name: country },
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "EVERWILD Snow Adventure",
        url: `${siteUrl}/${lang}`,
        inLanguage: lang === "zh" ? "zh-CN" : "en",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
}
