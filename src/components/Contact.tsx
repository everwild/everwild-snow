import T from "./T";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact">
        <p className="section__label">
          <T k="contact.label" />
        </p>
        <h2 className="section__title">
          <T k="contact.title" />
        </h2>
        <p className="section__lead contact__lead">
          <T k="contact.lead" />
        </p>
        <p className="section__lead contact__note">
          <T k="contact.note" />
        </p>
        <div className="contact__cta">
          <a href="/contact" className="btn btn--primary">
            <T k="contact.cta" />
          </a>
        </div>
      </div>
    </section>
  );
}
