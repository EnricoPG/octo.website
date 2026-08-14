import Logo from "../Logo";
import { siteContent } from "../../content/site";

export default function Header() {
  return (
    <header className="site-header shell">
      <a href="#inicio" className="header-logo"><Logo /></a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {siteContent.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="button button-small" href={siteContent.hero.primaryCta.href}>{siteContent.hero.primaryCta.label} <b>→</b></a>
    </header>
  );
}
