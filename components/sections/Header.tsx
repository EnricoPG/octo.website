import Logo from "../Logo";
import { siteContent } from "../../content/site";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

export default function Header() {
  const { contact } = siteContent;
  const whatsappUrl = buildWhatsAppUrl(contact.whatsappNumber, contact.whatsappGeneralMessage);

  return (
    <header className="site-header shell">
      <a href="#inicio" className="header-logo"><Logo /></a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {siteContent.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="button button-small" href={whatsappUrl} target="_blank" rel="noreferrer">
        COTIZAR UN PROYECTO <b>→</b>
      </a>
    </header>
  );
}
