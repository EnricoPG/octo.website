import Reveal from "../Reveal";
import { Icon } from "../Icons";
import { capabilities } from "../../content/services";

export default function Capabilities() {
  return (
    <section id="capacidades" className="capabilities shell section-line numbered">
      <div className="section-heading capabilities-heading">
        <div className="section-number">04<span /></div>
        <h2 className="capabilities-heading-title">¿QUÉ QUIERES LOGRAR?</h2>
      </div>

      <div className="cap-grid">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.n} delay={i * 70}>
            <article className="cap">
              <div className="cap-topline">
                <div className="icon"><Icon type={cap.icon} /></div>
                <span className="num">{cap.n}</span>
              </div>
              <h3>{cap.title}</h3>
              <p className="cap-result">{cap.items[0]}</p>
              <span className="cap-arrow">↗</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
