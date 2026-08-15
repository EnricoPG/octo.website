import Reveal from "../Reveal";
import { Icon } from "../Icons";
import { capabilities } from "../../content/services";

export default function Capabilities() {
  return (
    <section id="capacidades" className="capabilities shell section-line numbered">
      <div className="section-heading capabilities-heading">
        <div className="section-number">04<span /></div>
        <h2 className="capabilities-heading-title">CAPACIDADES</h2>
        <a href="#ecosistema">VER TODAS LAS SOLUCIONES →</a>
      </div>
      <div className="cap-grid">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.n} delay={i * 90}>
            <article className="cap">
              <div className="icon"><Icon type={cap.icon} /></div>
              <span className="num">{cap.n}</span>
              <h3>{cap.title}</h3>
              <ul>{cap.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
