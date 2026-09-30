import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import T from "@/components/T";
import { pageMetadata } from "@/lib/seo";
import { isLang } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return pageMetadata(lang, "contact");
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section section--page" id="inquiry">
          <div className="container">
            <p className="section__label">
              <T k="contact.label" />
            </p>
            <h1 className="section__title">
              <T k="form.title" />
            </h1>
            <p className="section__lead">
              <T k="form.lead" />
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
