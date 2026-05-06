"use client";

import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BiotechIcon from '@mui/icons-material/Biotech';
import SavingsIcon from '@mui/icons-material/Savings';
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';
import ComputerIcon from '@mui/icons-material/Computer';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PaidIcon from '@mui/icons-material/Paid';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const reasons = [
  {
    title: "Sorties académiques",
    desc: "Excursions et sorties de terrain sont au programme pour une immersion réelle.",
    icon: <TravelExploreIcon />
  },
  {
    title: "Formations pratiques",
    desc: "Nous disposons du matériel de pointe nécessaire à l'expérimentation concrète.",
    icon: <BiotechIcon />
  },
  {
    title: "Rapport qualité-prix",
    desc: "Labos, plateaux sportifs, salles info : des infrastructures premium accessibles.",
    icon: <SavingsIcon />
  },
  {
    title: "3 ans = 2 diplômes",
    desc: "À la fin de votre 3ème année, vous obtiendrez votre DUT/BTS + votre Licence.",
    icon: <SchoolIcon />
  },
  {
    title: "Formation à l'anglais",
    desc: "De la 1ère à la 5ème année, plus un club d'anglais dynamique ouvert à tous.",
    icon: <TranslateIcon />
  },
  {
    title: "1 étudiant - 1 ordinateur",
    desc: "Nous facilitons l'obtention d'ordinateurs via nos partenariats stratégiques.",
    icon: <ComputerIcon />
  },
  {
    title: "Support de stage",
    desc: "Un accompagnement personnalisé pour trouver vos stages chez nos partenaires.",
    icon: <BusinessCenterIcon />
  },
  {
    title: "Financement de projets",
    desc: "Prix du Président Fondateur : jusqu'à 5 millions F CFA pour vos projets innovants.",
    icon: <PaidIcon />
  },
  {
    title: "Évènements d'exception",
    desc: "Séminaires, conférences, masterclass et webinaires avec des experts mondiaux.",
    icon: <EventAvailableIcon />
  }
];

export default function ReasonsSection() {
  return (
    <section className="py-24 bg-[var(--bg-soft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            9 raisons de choisir <span className="text-[var(--primary)]">l'IMSA</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-[var(--accent)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
            <span className="h-px w-12 bg-[var(--accent)]" />
          </div>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
            Choisir l'IMSA, c'est opter pour une formation d'avenir dans un cadre 
            qui place l'étudiant au centre du dispositif pédagogique.
          </p>
        </div>

        {/* Grille des raisons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group p-8 rounded-sm bg-white border border-[var(--border-light)] hover:border-[var(--primary)] hover:shadow-2xl hover:shadow-[var(--primary)]/5 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-sm bg-[var(--bg-soft)] flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                {reason.title}
              </h4>
              <p className="text-[var(--text-muted)] leading-relaxed font-light">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
