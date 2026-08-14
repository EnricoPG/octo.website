import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Manifesto from "../components/sections/Manifesto";
import Capabilities from "../components/sections/Capabilities";
import Ecosystem from "../components/sections/Ecosystem";
import Process from "../components/sections/Process";
import About from "../components/sections/About";
import Plans from "../components/sections/Plans";
import CtaFooter from "../components/sections/CtaFooter";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Manifesto />
      <Capabilities />
      <Ecosystem />
      <Process />
      <About />
      <Plans />
      <CtaFooter />
      <WhatsAppFloat />
    </main>
  );
}
