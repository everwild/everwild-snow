"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n-provider";
import { localizeHref, swapLocale } from "@/lib/site";
import type { Lang } from "@/lib/i18n";
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
  const { lang } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = scrolled || (pathname !== "/en" && pathname !== "/zh");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  function languageHref(next: Lang) {
    return swapLocale(pathname, next);
  }

  return (
    <header className={`header${solid ? " header--scrolled" : ""}`}>
      <div className="header__inner">
        <a href={localizeHref(lang, "/")} className="header__logo">
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
              href={localizeHref(lang, href)}
              className="nav-link"
              onClick={closeMenu}
            >
              <T k={key} />
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href={localizeHref(lang, "/contact")} className="btn btn--primary btn--sm">
            <T k="nav.cta" />
          </a>
          <div className="lang-toggle" role="group" aria-label="Language">
            <a
              href={languageHref("en")}
              className={`lang-btn${lang === "en" ? " active" : ""}`}
              hrefLang="en"
              aria-pressed={lang === "en"}
              onClick={(event) => {
                closeMenu();
                const hash = window.location.hash;
                if (!hash) return;
                event.preventDefault();
                window.location.assign(`${languageHref("en")}${hash}`);
              }}
            >
              EN
            </a>
            <span className="lang-divider" aria-hidden="true" />
            <a
              href={languageHref("zh")}
              className={`lang-btn${lang === "zh" ? " active" : ""}`}
              hrefLang="zh-CN"
              aria-pressed={lang === "zh"}
              onClick={(event) => {
                closeMenu();
                const hash = window.location.hash;
                if (!hash) return;
                event.preventDefault();
                window.location.assign(`${languageHref("zh")}${hash}`);
              }}
            >
              中文
            </a>
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
