import Image from "next/image";
import T from "./T";

export default function Resorts() {
  return (
    <section className="section section--dark" id="resorts">
      <div className="container">
        <p className="section__label">
          <T k="resorts.label" />
        </p>
        <h2 className="section__title">
          <T k="resorts.title" />
        </h2>
        <p className="section__lead">
          <T k="resorts.lead" />
        </p>

        <div className="routes">
          <article className="route-feature">
            <div className="route-feature__media">
              <Image
                src="/images/resort-nagano.jpg"
                alt="Nagano ski resorts"
                width={960}
                height={720}
                className="route-feature__img"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
            <div className="route-feature__body">
              <span className="route-feature__num">01</span>
              <h3 className="route-feature__title">
                <T k="resorts.r1.title" />
              </h3>
              <p className="route-feature__text">
                <T k="resorts.r1.text" />
              </p>
              <span className="route__tag">
                <T k="resorts.r1.tag" />
              </span>
            </div>
          </article>

          <article className="route-secondary">
            <span className="route-secondary__num">02</span>
            <div className="route-secondary__body">
              <h3 className="route-secondary__title">
                <T k="resorts.r2.title" />
              </h3>
              <p className="route-secondary__text">
                <T k="resorts.r2.text" />
              </p>
              <span className="route__tag">
                <T k="resorts.r2.tag" />
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
