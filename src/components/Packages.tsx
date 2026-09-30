import LocaleLink from "./LocaleLink";
import T from "./T";

export default function Packages() {
  return (
    <section className="section" id="packages">
      <div className="container">
        <p className="section__label">
          <T k="packages.label" />
        </p>
        <h2 className="section__title">
          <T k="packages.title" />
        </h2>
        <p className="section__lead">
          <T k="packages.lead" />
        </p>

        <div className="cards cards--2">
          <article className="card card--package">
            <div className="card__body">
              <h3 className="card__title">
                <T k="packages.p1.title" />
              </h3>
              <p className="card__text">
                <T k="packages.p1.text" />
              </p>
              <span className="card__tag">
                <T k="packages.p1.tag" />
              </span>
            </div>
          </article>
          <article className="card card--package">
            <div className="card__body">
              <h3 className="card__title">
                <T k="packages.p2.title" />
              </h3>
              <p className="card__text">
                <T k="packages.p2.text" />
              </p>
              <span className="card__tag">
                <T k="packages.p2.tag" />
              </span>
            </div>
          </article>
        </div>

        <div className="callout">
          <h3 className="callout__title">
            <T k="packages.callout.title" />
          </h3>
          <p className="callout__text">
            <T k="packages.callout.text" />
          </p>
          <LocaleLink href="/contact" className="btn btn--primary">
            <T k="packages.callout.cta" />
          </LocaleLink>
        </div>
      </div>
    </section>
  );
}
