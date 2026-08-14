import Reveal from "../Reveal";
import Orbit from "../Orbit";
import { siteContent } from "../../content/site";

export default function Hero() {
  const hero = siteContent.hero;
  return (
    <section id="inicio" className="hero shell section-line">
      <Reveal className="hero-copy">
        <p className="eyebrow"><span /> {hero.eyebrow}</p>
        <h1>{hero.titleLines.map((line) => <span key={line}>{line}<br/></span>)}<em>{hero.accent}</em></h1>
        <p className="lead">{hero.description}</p>
        <div className="hero-actions">
          <a className="button" href={hero.primaryCta.href}>{hero.primaryCta.label} <b>→</b></a>
          <a className="text-link" href={hero.secondaryCta.href}>{hero.secondaryCta.label} <span>↓</span></a>
        </div>
      </Reveal>
      <Reveal className="hero-visual" delay={120}><Orbit /><div className="data-wave" /></Reveal>
    </section>
  );
}
