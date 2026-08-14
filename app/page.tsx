import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Manifesto from "../components/sections/Manifesto";
import Capabilities from "../components/sections/Capabilities";
import Ecosystem from "../components/sections/Ecosystem";
import ClientStrip from "../components/sections/ClientStrip";
import Process from "../components/sections/Process";
import About from "../components/sections/About";
import Plans from "../components/sections/Plans";
import CtaFooter from "../components/sections/CtaFooter";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Manifesto />
      <Capabilities />
      <Ecosystem />
      <ClientStrip />
      <Process />
      <About />
      <Plans />
      <CtaFooter />
    </main>
  );
}
