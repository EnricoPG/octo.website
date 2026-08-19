import Reveal from "../Reveal";

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
  return (
    <section id="manifiesto" className="manifesto manifesto-visual shell section-line numbered">
      <div className="section-number">02<span /></div>

      <Reveal className="manifesto-title" delay={40}>
        <h2>
          Todo lo que tu negocio necesita, <em>conectado.</em>
        </h2>
      </Reveal>

      <Reveal className="service-bubbles" delay={100}>
        <svg className="bubble-connectors" viewBox="0 0 760 290" aria-hidden="true" preserveAspectRatio="none">
          <path d="M380 145 L110 58" />
          <path d="M380 145 L325 34" />
          <path d="M380 145 L640 72" />
          <path d="M380 145 L180 145" />
          <path d="M380 145 L535 140" />
          <path d="M380 145 L650 225" />
          <path d="M380 145 L95 242" />
          <path d="M380 145 L390 255" />
        </svg>

        <div className="bubble-hub" aria-hidden="true">
          <span />
        </div>

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
