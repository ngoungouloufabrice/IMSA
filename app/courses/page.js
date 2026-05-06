import HeroCourses from "../components/HeroCourses";
import CourseCard from "../components/CourseCard";
import { businessFormations } from "@/data/business";
import { scienceFormations } from "@/data/science";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <main className="flex-grow bg-[var(--bg-soft)] pb-20">
      <HeroCourses />

      {/* Zone de navigation par catégories / En-tête */}
      <ScrollReveal delay={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white shadow-xl p-8 border border-[var(--border-light)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-2">
                  Explorez nos filières
                </h2>
                <p className="text-[var(--text-muted)]">
                  {businessFormations.length + scienceFormations.length} programmes d'excellence conçus pour le marché de l'emploi.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#business" className="btn-outline rounded-sm !text-[var(--primary)] !border-[var(--primary)]/20 hover:!bg-[var(--primary)] hover:!text-white">
                  Management & Business
                </a>
                <a href="#science" className="btn-outline rounded-sm !text-[var(--primary)] !border-[var(--primary)]/20 hover:!bg-[var(--primary)] hover:!text-white">
                  Sciences & Technologies
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Section Management & Business */}
      <section id="business" className="pt-20 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">Management & Business</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessFormations.map((formation, index) => (
              <ScrollReveal key={formation.id} delay={index * 0.1}>
                <CourseCard formation={formation} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <hr className="border-[var(--border-light)]" />
      </div>

      {/* Section Sciences & Technologies */}
      <section id="science" className="pb-20 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">Sciences & Technologies</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {scienceFormations.map((formation, index) => (
              <ScrollReveal key={formation.id} delay={index * 0.1}>
                <CourseCard formation={formation} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA (Appel à l'action) */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-sm p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                Prêt à commencer votre parcours à l'IMSA ?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-light">
                Nos conseillers d'orientation sont là pour vous aider à choisir la formation la plus adaptée à vos ambitions et à votre profil.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary !bg-white !text-[var(--primary)] hover:!bg-[var(--accent)] hover:!text-white px-10">
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}