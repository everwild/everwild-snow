import Image from "next/image";
import T from "./T";
import type { TranslationKey } from "@/lib/i18n";

const guides: {
  id: string;
  image?: string;
  alt: string;
}[] = [
  {
    id: "g1",
    image: "/images/guide-1.jpg",
    alt: "Snowboard instructor",
  },
  {
    id: "g2",
    image: "/images/guide-2.jpg",
    alt: "Ski and snowboard instructor",
  },
  {
    id: "g3",
    image: "/images/guide-3.jpg",
    alt: "Hiking and backcountry guide",
  },
  {
    id: "g4",
    alt: "Mountain guide",
  },
];

function guideKey(id: string, field: "title" | "text" | "tag") {
  return `guides.${id}.${field}` as TranslationKey;
}

export default function Guides() {
  return (
    <section className="section section--dark" id="guides">
      <div className="container">
        <p className="section__label">
          <T k="guides.label" />
        </p>
        <h2 className="section__title">
          <T k="guides.title" />
        </h2>
        <p className="section__lead">
          <T k="guides.lead" />
        </p>

        <div className="cards cards--4">
          {guides.map(({ id, image, alt }) => (
            <article key={id} className="card card--guide">
              {image ? (
                <Image
                  src={image}
                  alt={alt}
                  width={600}
                  height={600}
                  className="card__img card__img--square"
                />
              ) : (
                <div className="card__img card__img--placeholder card__img--square">
                  <T k="common.placeholder" />
                </div>
              )}
              <div className="card__body">
                <h3 className="card__title">
                  <T k={guideKey(id, "title")} />
                </h3>
                <p className="card__text">
                  <T k={guideKey(id, "text")} />
                </p>
                <span className="card__tag">
                  <T k={guideKey(id, "tag")} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
