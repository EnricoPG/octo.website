import Reveal from "../Reveal";
import { solutions } from "../../content/services";

const icons = ["◎","▱","⌘","✦","◉","♙","✧","◌"];

export default function Ecosystem() {
  return (
    <section id="ecosistema" className="ecosystem shell section-line numbered">
      <div className="section-number">04<span /></div>
      <Reveal><div className="ecosystem-title"><h2>8 SOLUCIONES.<br/><em>1 ECOSISTEMA.</em></h2></div></Reveal>
      <Reveal delay={100}>
        <div className="solution-grid">
          {solutions.map((item, i) => <div className="solution" key={item}><span>{item}</span><i>{icons[i]}</i></div>)}
        </div>
      </Reveal>
    </section>
  );
}
