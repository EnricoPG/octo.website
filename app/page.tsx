import Logo from "../components/Logo";
import Orbit from "../components/Orbit";
import Reveal from "../components/Reveal";
import { Icon } from "../components/Icons";

const capabilities = [
  { n: "01", title: "DESARROLLO WEB", icon: "web" as const, items: ["Sitios web", "Landing page", "e-commerce"] },
  { n: "02", title: "AUTOMATIZACIÓN", icon: "automation" as const, items: ["WhatsApp", "CRM", "Gestión de leads", "Flujos de trabajo"] },
  { n: "03", title: "INTELIGENCIA ARTIFICIAL", icon: "ai" as const, items: ["Agentes de IA", "Integraciones de IA", "Análisis inteligente"] },
  { n: "04", title: "DESARROLLO A MEDIDA", icon: "build" as const, items: ["Sistemas personalizados", "Paneles de control", "Integraciones"] },
];

const solutions = ["SITIOS WEB", "E-COMMERCE", "SISTEMAS", "AUTOMATIZACIÓN", "WHATSAPP", "CRM", "INTELIGENCIA ARTIFICIAL", "SOPORTE Y MANTENIMIENTO"];
const steps = [
  ["01", "ENTENDEMOS", "Analizamos tu negocio, procesos y objetivos para identificar oportunidades reales."],
  ["02", "DISEÑAMOS", "Creamos la estrategia y el diseño del sistema ideal para alcanzar resultados medibles."],
  ["03", "CONSTRUIMOS", "Desarrollamos, integramos y automatizamos con tecnología de forma ágil y segura."],
  ["04", "EVOLUCIONAMOS", "Medimos, optimizamos y escalamos tu sistema para seguir generando crecimiento."],
];

const plans = [
  {
    name: "ESENCIAL",
    description: "Para empezar tu presencia digital.",
    items: ["Landing page profesional", "WhatsApp integrado", "Formulario de contacto", "Analítica básica"],
    price: "$X",
    note: "Pago único",
    cta: "COTIZAR",
  },
  {
    name: "CRECIMIENTO",
    description: "Para empresas que quieren generar más clientes.",
    items: ["Sitio web completo", "WhatsApp integrado", "SEO inicial", "Analítica avanzada", "Integraciones básicas", "Soporte por 60 días"],
    price: "$X",
    note: "Pago único",
    cta: "COTIZAR",
    recommended: true,
  },
  {
    name: "OCTO",
    plus: true,
    description: "Para empresas que quieren evolucionar continuamente.",
    items: ["Sitio web completo", "Automatizaciones", "Integraciones avanzadas", "Soporte continuo", "Mejoras continuas", "Reportes y optimización"],
    price: "$X / mes",
    note: "Suscripción mensual",
    cta: "CONOCER OCTO+",
  },
];

const logoSlots = ["TU LOGO", "TU LOGO", "TU LOGO", "TU LOGO", "TU LOGO", "TU LOGO"];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a href="#inicio" className="header-logo"><Logo /></a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#capacidades">SERVICIOS <span>⌄</span></a>
          <a href="#ecosistema">SOLUCIONES</a>
          <a href="#nosotros">NOSOTROS</a>
        </nav>
        <a className="button button-small" href="#planes">COTIZAR UN PROYECTO <b>→</b></a>
      </header>

      <section id="inicio" className="hero shell section-line">
        <Reveal className="hero-copy">
          <p className="eyebrow"><span /> OCTO / ESTUDIO TECNOLÓGICO</p>
          <h1>Ecosistemas<br/>digitales<br/>que impulsan<br/><em>negocios.</em></h1>
          <p className="lead">Estrategia, diseño, tecnología e inteligencia artificial para convertir procesos y oportunidades en ecosistemas que generan resultados reales.</p>
          <div className="hero-actions">
            <a className="button" href="#planes">COTIZAR UN PROYECTO <b>→</b></a>
            <a className="text-link" href="#manifiesto">CONOCER OCTO <span>↓</span></a>
          </div>
        </Reveal>
        <Reveal className="hero-visual" delay={120}><Orbit /><div className="data-wave" /></Reveal>
      </section>

      <section id="manifiesto" className="manifesto shell section-line numbered">
        <div className="section-number">02<span /></div>
        <Reveal className="manifesto-title" delay={40}><h2>Construimos <em>ecosistemas</em><br/>digitales que hacen<br/>crecer tu negocio.</h2></Reveal>
        <Reveal className="manifesto-copy" delay={130}><p>Conectamos estrategia, diseño, desarrollo, automatización e inteligencia artificial para crear ecosistemas digitales que optimizan procesos, generan oportunidades y aceleran el crecimiento de tu empresa.</p></Reveal>
        <div className="ambient-orb" />
      </section>

      <section id="capacidades" className="capabilities shell section-line numbered">
        <div className="section-heading"><div className="section-number">03<span /></div><p>CAPACIDADES</p><a href="#ecosistema">VER TODAS LAS SOLUCIONES →</a></div>
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

      <section id="ecosistema" className="ecosystem shell section-line numbered">
        <div className="section-number">04<span /></div>
        <Reveal><div className="ecosystem-title"><h2>8 SOLUCIONES.<br/><em>1 ECOSISTEMA.</em></h2></div></Reveal>
        <Reveal delay={100}>
          <div className="solution-grid">
            {solutions.map((item, i) => <div className="solution" key={item}><span>{item}</span><i>{["◎","▱","⌘","✦","◉","♙","✧","◌"][i]}</i></div>)}
          </div>
        </Reveal>
      </section>

      <section className="client-strip section-line" aria-label="Clientes OCTO">
        <div className="client-track">
          {[...logoSlots, ...logoSlots].map((label, i) => (
            <div className="client-slot" key={`${label}-${i}`}><span>{label}</span></div>
          ))}
        </div>
      </section>

      <section id="proceso" className="process shell section-line numbered">
        <div className="section-heading"><div className="section-number">05<span /></div><p>NUESTRO PROCESO</p></div>
        <div className="steps">
          {steps.map(([n,t,d], i) => (
            <Reveal key={n} delay={i * 100}>
              <article className="step"><div className="step-top"><span>{n}</span><i /></div><h3>{t}</h3><p>{d}</p></article>
            </Reveal>
          ))}
        </div>
      </section>


      <section id="nosotros" className="about shell section-line numbered">
        <div className="section-number">06<span /></div>
        <Reveal className="about-kicker"><p>NOSOTROS</p></Reveal>
        <Reveal className="about-title" delay={60}><h2>Un estudio tecnológico para<br/>hacer crecer <em>tu negocio.</em></h2></Reveal>
        <Reveal className="about-copy" delay={120}><p>En OCTO conectamos estrategia, diseño y tecnología para crear soluciones digitales útiles, medibles y preparadas para evolucionar contigo.</p></Reveal>
      </section>

      <section id="planes" className="plans shell section-line numbered">
        <div className="plans-head">
          <div className="section-heading"><div className="section-number">07<span /></div><p>EMPIEZA CON OCTO</p></div>
        </div>
        <div className="plan-grid">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <article className={`plan ${plan.recommended ? "recommended" : ""}`}>
                {plan.recommended && <div className="recommend">RECOMENDADO</div>}
                <div className="plan-title"><span className="plan-icon">{plan.plus ? "∞" : plan.name === "ESENCIAL" ? "↗" : "▥"}</span><div><h3>{plan.name}{plan.plus && <b className="plus">+</b>}</h3><p>{plan.description}</p></div></div>
                <ul>{plan.items.map(item => <li key={item}>✓ <span>{item}</span></li>)}</ul>
                <div className="price"><small>DESDE</small><strong>{plan.price}</strong><span>{plan.note}</span></div>
                <a className={`button plan-button ${plan.recommended ? "solid" : ""}`} href="#contacto">{plan.cta}</a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <footer id="contacto" className="footer shell section-line">
        <Logo />
        <div><h4>SERVICIOS</h4><a>Desarrollo web</a><a>Automatización</a><a>Inteligencia artificial</a></div>
        <div><h4>SOLUCIONES</h4><a>WhatsApp</a><a>CRM</a><a>e-commerce</a></div>
        <div><h4>EMPRESA</h4><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></div>
        <div><h4>SÍGUENOS</h4><a className="instagram" href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a></div>
        <div><h4>HABLEMOS</h4><a href="mailto:hola@octo.studio">hola@octo.studio</a></div>
        <p className="copyright">© 2026 OCTO. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
