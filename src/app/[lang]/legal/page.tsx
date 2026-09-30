import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import T from "@/components/T";
import { pageMetadata } from "@/lib/seo";
import { isLang } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return pageMetadata(lang, "legal");
}

const privacyKeys = [
  "legal.privacy.p1",
  "legal.privacy.p2",
  "legal.privacy.p3",
  "legal.privacy.p4",
  "legal.privacy.p5",
] as const;

const disclaimerKeys = [
  "legal.disclaimer.p1",
  "legal.disclaimer.p2",
  "legal.disclaimer.p3",
  "legal.disclaimer.p4",
  "legal.disclaimer.p5",
] as const;

export default function LegalPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section section--page" id="legal">
          <div className="container legal">
            <p className="section__label">
              <T k="legal.label" />
            </p>
            <h1 className="section__title">
              <T k="legal.title" />
            </h1>
            <p className="legal__updated">
              <T k="legal.updated" />
            </p>

            <article className="legal__block">
              <h2 className="legal__heading">
                <T k="legal.privacy.title" />
              </h2>
              {privacyKeys.map((key) => (
                <p key={key} className="legal__text">
                  <T k={key} />
                </p>
              ))}
            </article>

            <article className="legal__block">
              <h2 className="legal__heading">
                <T k="legal.disclaimer.title" />
              </h2>
              {disclaimerKeys.map((key) => (
                <p key={key} className="legal__text">
                  <T k={key} />
                </p>
              ))}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
