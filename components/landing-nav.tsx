import Image from "next/image";
import { siteContent } from "@/content/site-content";

export function LandingNav() {
  return (
    <header className="site-nav">
      <div className="nav-shell js-nav-shell">
        <a href="#hero" className="nav-logo-link" aria-label="Moxera ana sayfa">
          <Image
            src="/brand/moxera-light.svg"
            alt="Moxera"
            width={248}
            height={54}
            priority
            className="nav-logo"
            style={{ width: "100%", height: "auto" }}
          />
        </a>
        <nav className="nav-links js-nav-menu" aria-label="Bolumler">
          <span className="nav-active-pill js-nav-active-pill" aria-hidden />
          {siteContent.nav.links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link js-nav-link">
              <span className="nav-link-track-wrap">
                <span className="nav-link-track js-nav-link-track">
                  <span className="nav-link-text">{link.label}</span>
                  <span className="nav-link-text nav-link-text-alt" aria-hidden="true">
                    {link.label}
                  </span>
                </span>
              </span>
            </a>
          ))}
        </nav>
        <a className="nav-cta js-nav-cta" href={siteContent.nav.cta.href}>
          {siteContent.nav.cta.label}
        </a>
      </div>
    </header>
  );
}
