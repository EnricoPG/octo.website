import Reveal from "../Reveal";
import { processSteps } from "../../content/services";

export default function Process() {
  return (
    <section id="proceso" className="process shell section-line numbered">
      <div className="section-heading"><div className="section-number">05<span /></div><p>NUESTRO PROCESO</p></div>
      <div className="steps">
        {processSteps.map(([n,t,d], i) => (
          <Reveal key={n} delay={i * 100}>
            <article className="step"><div className="step-top"><span>{n}</span><i /></div><h3>{t}</h3><p>{d}</p></article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
