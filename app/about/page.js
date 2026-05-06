import HeroAbout from "../components/HeroAbout";
import HistorySection from "../components/HistorySection";
import ReasonsSection from "../components/ReasonsSection";
import AdmissionSection from "../components/AdmissionSection";
import ScrollReveal from "../components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section with Campus Carousel */}
      <HeroAbout />

      {/* Qui sommes-nous ? */}
      <ScrollReveal>
        <HistorySection />
      </ScrollReveal>

      {/* 9 Raisons de choisir IMSA */}
      <ScrollReveal>
        <ReasonsSection />
      </ScrollReveal>

      {/* Comment intégrer IMSA ? (Admission) */}
      <ScrollReveal>
        <AdmissionSection />
      </ScrollReveal>
    </main>
  );
}
