import Reveal from "../Reveal";
import Orbit from "../Orbit";
import InteractiveNebulaShader from "../ui/InteractiveNebulaShader";
import { siteContent } from "../../content/site";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

export default function Hero() {
  const hero = siteContent.hero;
  const { contact } = siteContent;
  const whatsappUrl = buildWhatsAppUrl(contact.whatsappNumber, contact.whatsappGeneralMessage);

  return (
    <section id="inicio" className="hero shell section-line">
      <InteractiveNebulaShader className="hero-nebula" />
      <div className="hero-nebula-overlay" />
      <Reveal className="hero-copy">
        <p className="eyebrow"><span /> {hero.eyebrow}</p>
        <h1>{hero.titleLines.map((line) => <span key={line}>{line}<br/></span>)}<em>{hero.accent}</em></h1>
        <p className="lead">{hero.description}</p>
        <div className="hero-actions">
          <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">
            {hero.primaryCta.label} <b>→</b>
          </a>
        </div>
      </Reveal>
      <Reveal className="hero-visual" delay={120}><Orbit /><div className="data-wave" /></Reveal>
    </section>
  );
}
