"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n-provider";
import T from "./T";

const navLinks = [
  { href: "/#about", key: "nav.about" as const },
  { href: "/#services", key: "nav.services" as const },
  { href: "/#packages", key: "nav.packages" as const },
  { href: "/#resorts", key: "nav.resorts" as const },
  { href: "/#guides", key: "nav.guides" as const },
  { href: "/#contact", key: "nav.contact" as const },
];

export default function Header() {
  const { lang, setLang } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${solid ? " header--scrolled" : ""}`}>
      <div className="header__inner">
        <a href="/" className="header__logo">
          <span className="header__logo-mark">ESA</span>
          <span className="header__logo-text">
            EVERWILD
            <br />
            Snow Adventure
          </span>
        </a>

        <nav className={`header__nav${menuOpen ? " open" : ""}`}>
          {navLinks.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="nav-link"
              onClick={closeMenu}
            >
              <T k={key} />
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="/contact" className="btn btn--primary btn--sm">
            <T k="nav.cta" />
          </a>
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              className={`lang-btn${lang === "en" ? " active" : ""}`}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span className="lang-divider" aria-hidden="true" />
            <button
              type="button"
              className={`lang-btn${lang === "zh" ? " active" : ""}`}
              aria-pressed={lang === "zh"}
              onClick={() => setLang("zh")}
            >
              中文
            </button>
          </div>
          <button
            type="button"
            className={`menu-toggle${menuOpen ? " active" : ""}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
