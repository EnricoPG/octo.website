import Reveal from "../Reveal";
import { solutions } from "../../content/services";

function SolutionIcon({ index }: { index: number }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  const icons = [
    <svg {...common} key="web"><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.4 2.3 3.6 5 3.6 8S14.4 17.7 12 20M12 4c-2.4 2.3-3.6 5-3.6 8S9.6 17.7 12 20"/></svg>,
    <svg {...common} key="shop"><path d="M5 8h14l-1 11H6L5 8Z"/><path d="M8 8a4 4 0 0 1 8 0"/></svg>,
    <svg {...common} key="systems"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6M9 13h6M9 17h3"/></svg>,
    <svg {...common} key="auto"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="18" cy="17" r="2"/><path d="M8 12h4c3 0 4-2 4-3M8 12h4c3 0 4 2 4 3"/></svg>,
    <svg {...common} key="wa"><path d="M5 19l1-3a7 7 0 1 1 2 2l-3 1Z"/><path d="M9 9.5c.8 2.2 2.3 3.7 4.5 4.5"/></svg>,
    <svg {...common} key="crm"><circle cx="9" cy="9" r="3"/><circle cx="16.5" cy="10" r="2.5"/><path d="M4.5 19c.7-3.3 2.6-5 5.5-5s4.8 1.7 5.5 5M15 15c2.3.2 3.8 1.5 4.5 4"/></svg>,
    <svg {...common} key="ai"><path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>,
    <svg {...common} key="support"><path d="M5 14v-2a7 7 0 0 1 14 0v2"/><path d="M5 14h3v5H6a1 1 0 0 1-1-1v-4ZM19 14h-3v5h2a1 1 0 0 0 1-1v-4Z"/><path d="M16 19c0 1.3-1 2-3 2"/></svg>,
  ];
  return icons[index];
}

export default function Ecosystem() {
  return (
    <section id="ecosistema" className="ecosystem shell section-line numbered">
      <div className="section-number">03<span /></div>
      <Reveal><div className="ecosystem-title"><h2>8 SOLUCIONES.<br/><em>1 ECOSISTEMA.</em></h2></div></Reveal>
      <Reveal delay={100}>
        <div className="solution-grid">
          {solutions.map((item, i) => <div className="solution" key={item}><span>{item}</span><i><SolutionIcon index={i}/></i></div>)}
        </div>
      </Reveal>
    </section>
  );
}
