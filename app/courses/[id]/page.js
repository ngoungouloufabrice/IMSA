import StarsIcon from '@mui/icons-material/Stars';
import { businessFormations } from "@/data/business";
import { scienceFormations } from "@/data/science";
import { notFound } from "next/navigation";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PaymentsIcon from '@mui/icons-material/Payments';
import InfoIcon from '@mui/icons-material/Info';
import CourseCard from "../../components/CourseCard";
import ScrollReveal from "../../components/ScrollReveal";

// Combiner les données pour un accès plus facile
const allFormations = [...businessFormations, ...scienceFormations];

export async function generateMetadata({ params }) {
  const { id } = await params;
  const formation = allFormations.find((f) => f.id.toString() === id);

  if (!formation) {
    return {
      title: "Formation non trouvée | IMSA",
    };
  }

  return {
    title: `${formation.nom} | IMSA Gabon`,
    description: `Formation en ${formation.nom} à l'IMSA. ${formation.objectif.substring(0, 150)}...`,
  };
}

export default async function CourseDetailPage({ params }) {
  const { id } = await params;
  const formation = allFormations.find((f) => f.id.toString() === id);

  if (!formation) {
    notFound();
  }

  return (
    <main className="bg-[var(--bg-soft)] min-h-screen pb-20">
      {/* En-tête / Fil d'Ariane (Breadcrumbs) */}
      <div className="bg-gradient-to-tr from-[#000a20] via-[var(--primary)] to-[var(--secondary)] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[var(--accent)] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                {formation.nom}
              </h1>
            </div>

            <div className="flex gap-3">
              {formation.diplomes.map((d, i) => (
                <span key={i} className="px-4 py-2 rounded-sm border border-white/30 text-sm font-semibold backdrop-blur-sm">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">

            {/* Section Objectif */}
            <ScrollReveal>
              <div className="bg-white p-8 md:p-10 shadow-xl border border-[var(--border-light)]">
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                    <CheckCircleIcon sx={{ fontSize: 20 }} />
                  </div>
                  Objectif de la formation
                </h2>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed font-light italic">
                  "{formation.objectif}"
                </p>
              </div>
            </ScrollReveal>

            {/* Section Spécialisations */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-sm p-8 md:p-10 shadow-xl border border-[var(--border-light)]">
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8 flex items-center gap-3">
                  Spécialisations disponibles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formation.specialisations.map((spec, i) => (
                    <div key={i} className="group p-5 rounded-sm border border-[var(--border-light)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/5 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-sm bg-[var(--bg-soft)] flex items-center justify-center text-[var(--primary)] font-bold text-xs group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                          {spec.sigle}
                        </div>
                        <div>
                          <h4 className="font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                            {spec.nom}
                          </h4>
                          {spec.note && (
                            <span className="text-[10px] text-red-500 font-bold uppercase block mt-1">
                              {spec.note}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Logique d'affichage de la note si elle existe */}
            {formation.notes && (
              <ScrollReveal delay={0.2}>
                <div className="bg-blue-50 border-l-4 border-[var(--primary)] p-6 rounded-sm">
                  <div className="flex gap-4">
                    <InfoIcon className="text-[var(--primary)]" />
                    <div>
                      <h4 className="font-bold text-[var(--primary)] mb-1">À noter</h4>
                      <p className="text-sm text-[var(--primary)]/80">{formation.notes}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Barre latérale (Sidebar) */}
          <div className="space-y-8">

            {/* Barre latérale : Frais de scolarité */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="bg-white p-8 shadow-xl border border-[var(--border-light)] sticky top-24">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-3">
                  Frais de scolarité
                </h3>

                <div className="space-y-4">
                  {Object.entries(formation.scolarite).map(([level, price]) => (
                    <div key={level} className="flex items-center justify-between p-3 rounded-sm hover:bg-[var(--bg-soft)] transition-colors border-b border-[var(--border-light)]/50 last:border-0">
                      <span className="font-bold text-[var(--foreground)]">{level}</span>
                      <span className="text-[var(--primary)] font-bold">
                        {new Intl.NumberFormat('fr-FR').format(price)} FCFA
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-10 border-t border-[var(--border-light)]">
                  <Link href="/contact" className="w-full btn-primary justify-center py-4 text-center">
                    S'inscrire à cette formation
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
