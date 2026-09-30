import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { I18nProvider } from "@/lib/i18n-provider";
import { isLang } from "@/lib/site";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export const dynamicParams = false;

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <I18nProvider initialLang={lang}>
      {children}
      <JsonLd lang={lang} />
    </I18nProvider>
  );
}
