import LocaleLink from "./LocaleLink";
import T from "./T";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">ESA</span>
          <span className="footer__name">EVERWILD Snow Adventure</span>
        </div>
        <div className="footer__meta">
          <p className="footer__copy">
            &copy; 2026 EVERWILD. <T k="footer.rights" />
          </p>
          <LocaleLink href="/legal" className="footer__legal">
            <T k="footer.legal" />
          </LocaleLink>
        </div>
      </div>
    </footer>
  );
}
