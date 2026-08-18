import Reveal from "../Reveal";
import { siteContent } from "../../content/site";

const bubbles = [
  "WEBSITES",
  "WHATSAPP",
  "E-COMMERCE",
  "RESERVACIONES",
  "AUTOMATIZACIÓN",
  "AGENTES IA",
  "GOOGLE",
  "INTEGRACIONES",
];

export default function Manifesto() {
  const copy = siteContent.manifesto;

  return (
    <section id="manifiesto" className="manifesto manifesto-visual shell section-line numbered">
      <div className="section-number">02<span /></div>

      <Reveal className="manifesto-title" delay={40}>
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
      </Reveal>

      <Reveal className="service-bubbles" delay={100}>
        {bubbles.map((bubble, index) => (
          <span className={`service-bubble bubble-${index + 1}`} key={bubble}>
            {bubble}
          </span>
        ))}
      </Reveal>

      <div className="ambient-orb" />
    </section>
  );
}
