import T from "./T";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section__label">
          <T k="about.label" />
        </p>
        <h2 className="section__title">
          <T k="about.title" />
        </h2>
        <p className="section__lead">
          <T k="about.lead" />
        </p>

        <div className="features">
          <div className="feature">
            <h3 className="feature__title">
              <T k="about.f1.title" />
            </h3>
            <p className="feature__text">
              <T k="about.f1.text" />
            </p>
          </div>
          <div className="feature">
            <h3 className="feature__title">
              <T k="about.f2.title" />
            </h3>
            <p className="feature__text">
              <T k="about.f2.text" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
