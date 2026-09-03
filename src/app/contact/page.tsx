import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Contact - ESA EVERWILD Snow Adventure",
  description:
    "Send an inquiry to EVERWILD Snow Adventure. Tell us your dates, group size, and what you're looking for.",
};

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
