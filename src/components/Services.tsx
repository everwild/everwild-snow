import Image from "next/image";
import T from "./T";
import type { TranslationKey } from "@/lib/i18n";

const services: { prefix: string; image: string; alt: string }[] = [
  {
    prefix: "s1",
    image: "/images/service-lessons.jpg",
    alt: "Ski and snowboard lessons",
  },
  {
    prefix: "s2",
    image: "/images/service-guiding.jpg",
    alt: "Guided skiing",
  },
  {
    prefix: "s3",
    image: "/images/service-hiking.jpg",
    alt: "Winter hiking",
  },
  {
    prefix: "s4",
    image: "/images/service-mountaineering.jpg",
    alt: "Mountaineering",
  },
  {
    prefix: "s5",
    image: "/images/service-accommodation.jpg",
    alt: "Accommodation",
  },
  {
    prefix: "s6",
    image: "/images/service-transport.jpg",
    alt: "Transport",
  },
];

function serviceKey(prefix: string, field: "title" | "text" | "tag") {
  return `services.${prefix}.${field}` as TranslationKey;
}

export default function Services() {
  return (
    <section className="section section--dark" id="services">
      <div className="container">
        <p className="section__label">
          <T k="services.label" />
        </p>
        <h2 className="section__title">
          <T k="services.title" />
        </h2>
        <p className="section__lead">
          <T k="services.lead" />
        </p>

        <div className="cards cards--3">
          {services.map(({ prefix, image, alt }) => (
            <article key={prefix} className="card">
              <Image
                src={image}
                alt={alt}
                width={800}
                height={500}
                className="card__img card__img--contain"
              />
              <div className="card__body">
                <h3 className="card__title">
                  <T k={serviceKey(prefix, "title")} />
                </h3>
                <p className="card__text">
                  <T k={serviceKey(prefix, "text")} />
                </p>
                <span className="card__tag">
                  <T k={serviceKey(prefix, "tag")} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
