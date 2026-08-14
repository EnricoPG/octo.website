import Reveal from "../Reveal";
import { plans } from "../../content/plans";
import { siteContent } from "../../content/site";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

export default function Plans() {
  const number = siteContent.contact.whatsappNumber;

  return (
    <section id="planes" className="plans shell section-line numbered">
      <div className="plans-head">
        <div className="section-heading"><div className="section-number">07<span /></div><p>EMPIEZA CON OCTO</p></div>
      </div>

      <div className="plan-grid">
        {plans.map((plan, i) => {
          const whatsappUrl = buildWhatsAppUrl(number, plan.whatsappMessage);

          return (
            <Reveal key={plan.name} delay={i * 100}>
              <article className={`plan ${plan.recommended ? "recommended" : ""}`}>
                {plan.recommended && <div className="recommend">RECOMENDADO</div>}
                <div className="plan-title">
                  <span className="plan-icon">{plan.plus ? "∞" : plan.name === "BÁSICO" ? "↗" : "▥"}</span>
                  <div>
                    <h3>{plan.name}{plan.plus && <b className="plus">+</b>}</h3>
                    <p>{plan.description}</p>
                  </div>
                </div>

                <ul>{plan.items.map(item => <li key={item}>✓ <span>{item}</span></li>)}</ul>

                <div className="price">
                  <small>DESDE</small>
                  <strong>{plan.price}</strong>
                  <span>{plan.note}</span>
                </div>

                <a
                  className={`button plan-button ${plan.recommended ? "solid" : ""}`}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
