import Reveal from "../Reveal";
import { siteContent } from "../../content/site";

export default function Manifesto() {
  const copy = siteContent.manifesto;
  const parts = copy.title.split("ecosistemas");
  return (
    <section id="manifiesto" className="manifesto shell section-line numbered">
      <div className="section-number">02<span /></div>
      <Reveal className="manifesto-title" delay={40}>
        <h2>{parts[0]}<em>ecosistemas</em><br/>digitales que hacen<br/>crecer tu negocio.</h2>
      </Reveal>
      <Reveal className="manifesto-copy" delay={130}><p>{copy.description}</p></Reveal>
      <div className="ambient-orb" />
    </section>
  );
}
