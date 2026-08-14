import Reveal from "../Reveal";
import { siteContent } from "../../content/site";

export default function About() {
  const about = siteContent.about;
  return (
    <section id="nosotros" className="about shell section-line numbered">
      <div className="section-number">06<span /></div>
      <Reveal className="about-kicker"><p>{about.kicker}</p></Reveal>
      <Reveal className="about-title" delay={60}><h2>Un estudio tecnológico para<br/>hacer crecer <em>tu negocio.</em></h2></Reveal>
      <Reveal className="about-copy" delay={120}><p>{about.description}</p></Reveal>
    </section>
  );
}
