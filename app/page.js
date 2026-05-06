import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import Establishments from "./components/Establishments";
import FilièresSection from "./components/FilièresSection";
import RectorSection from "./components/RectorSection";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ScrollReveal>
          <StatsSection />
        </ScrollReveal>
        <ScrollReveal>
          <Establishments />
        </ScrollReveal>
        <ScrollReveal>
          <FilièresSection />
        </ScrollReveal>
        <ScrollReveal>
          <RectorSection />
        </ScrollReveal>
      </main>
    </>
  );
}
