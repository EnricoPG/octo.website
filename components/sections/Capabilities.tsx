import Reveal from "../Reveal";
import { Icon } from "../Icons";
import { capabilities } from "../../content/services";

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="cap-arrow-svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

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

              <div className="cap-copy">
                <h3>{cap.title}</h3>
                <p className="cap-result">{cap.items[0]}</p>
              </div>

              <span className="cap-arrow" aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
