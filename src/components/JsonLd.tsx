import type { Lang } from "@/lib/i18n";
import { organizationJsonLd } from "@/lib/jsonld";

export default function JsonLd({ lang }: { lang: Lang }) {
  const json = JSON.stringify(organizationJsonLd(lang)).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
