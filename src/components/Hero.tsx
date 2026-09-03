import Image from "next/image";
import T from "./T";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <Image
          src="/images/hero.jpg"
          alt="EVERWILD Snow Adventure in Nagano"
          fill
          priority
          sizes="100vw"
          className="hero__image"
        />
        <div className="hero__overlay" />
      </div>
      <div className="hero__text-mask" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__label">
          <T k="hero.label" />
        </p>
        <h1 className="hero__title">
          <T k="hero.title" />
        </h1>
        <p className="hero__desc">
          <T k="hero.desc" />
        </p>
        <div className="hero__actions">
          <a href="#services" className="btn btn--primary">
            <T k="hero.cta1" />
          </a>
          <a href="/contact" className="btn btn--outline">
            <T k="hero.cta2" />
          </a>
        </div>
      </div>
    </section>
  );
}
