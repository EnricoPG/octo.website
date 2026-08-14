import Reveal from "../Reveal";
import { plans } from "../../content/plans";
import { siteContent } from "../../content/site";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

function CrownIcon() {
  return (
    <svg className="plan-crown" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M5 24h22l-2-14-6 6-3-9-3 9-6-6-2 14Z" />
      <path d="M7 27h18" />
    </svg>
  );
}

export default function Plans() {
  const number = siteContent.contact.whatsappNumber;

  return (
    <section id="planes" className="plans shell section-line numbered">
      <div className="plans-head">
        <div className="section-heading">
          <div className="section-number">07<span /></div>
          <p>EMPIEZA CON OCTO</p>
        </div>
      </div>

      <div className="plan-grid">
        {plans.map((plan, i) => {
          const whatsappUrl = buildWhatsAppUrl(number, plan.whatsappMessage);
          const monthlyPrice = "monthlyPrice" in plan ? plan.monthlyPrice : null;
          const monthlyNote = "monthlyNote" in plan ? plan.monthlyNote : null;

          return (
            <Reveal key={plan.name} delay={i * 100}>
              <article className={`plan ${plan.recommended ? "recommended" : ""}`}>
                {plan.recommended && <div className="recommend">RECOMENDADO</div>}

                <div className="plan-title">
                  <span className={`plan-icon ${plan.plus ? "plan-icon-crown" : ""}`}>
                    {plan.plus ? <CrownIcon /> : plan.name === "BÁSICO" ? "↗" : "▥"}
                  </span>
                  <div>
                    <h3>{plan.name}{plan.plus && <b className="plus">+</b>}</h3>
                    <p>{plan.description}</p>
                  </div>
                </div>

                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>✓ <span>{item}</span></li>
                  ))}
                </ul>

                <div className={`price ${monthlyPrice ? "price-subscription" : ""}`}>
                  <small>{monthlyPrice ? "CONFIGURACIÓN INICIAL" : "DESDE"}</small>
                  <div className="price-line">
                    <strong>{plan.price}</strong>
                    <b>{plan.currency}</b>
                  </div>
                  <span>{plan.note}</span>

                  {monthlyPrice && (
                    <div className="monthly-price">
                      <span className="monthly-plus">+</span>
                      <strong>{monthlyPrice}</strong>
                      <b>{monthlyNote}</b>
                    </div>
                  )}
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
