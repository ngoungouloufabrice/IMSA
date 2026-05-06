"use client";

import { useState } from "react";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const steps = [
  {
    id: "l1",
    label: "Licence 1",
    icon: <PersonAddIcon />,
    content: (
      <div className="space-y-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          {[
            "Copie de l'acte de naissance",
            "Copie de l'Attestation d'admission au Bac",
            "Copie du relevé de notes au Bac",
            "Copie d'une pièce d'identité en cours de validité",
            "Lettre de motivation au Président Fondateur",
            "2 photos d'identité récentes en couleur"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircleIcon className="text-[var(--accent)] mt-0.5" sx={{ fontSize: 16 }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 p-4 rounded-sm bg-[var(--primary)]/5 border border-[var(--primary)]/10 text-sm">
          <p className="font-bold text-[var(--primary)] mb-1">Frais de dossier</p>
          <p>20.000 F CFA (applicable pour les Bacs obtenus il y a plus de 2 ans).</p>
        </div>
      </div>
    )
  },
  {
    id: "l2",
    label: "Licence 2 & Plus",
    icon: <SchoolIcon />,
    content: (
      <div className="space-y-4">
        <p className="text-sm font-semibold mb-2">En plus des documents de Licence 1, ajoutez :</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          {[
            "Attestation de scolarité de l'année antérieure",
            "Relevés de notes universitaires récents",
            "Attestation de diplôme (DUT/BTS/Licence) ou Diplôme original (copie certifiée)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircleIcon className="text-[var(--primary)] mt-0.5" sx={{ fontSize: 16 }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 p-4 rounded-sm bg-[var(--primary)]/5 border border-[var(--primary)]/10 text-sm">
          <p className="font-bold text-[var(--primary)] mb-1">Frais de dossier</p>
          <p>20.000 F CFA pour toute admission parallèle.</p>
        </div>
      </div>
    )
  },
  {
    id: "vae",
    label: "Parcours VAE",
    icon: <WorkHistoryIcon />,
    content: (
      <div className="space-y-4 text-sm">
        <p className="font-medium text-[var(--primary)] mb-4">
          La Validation des Acquis par l'Expérience est réservée aux professionnels justifiant d'au moins 3 ans d'expérience.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3 p-4 rounded-sm bg-orange-50 border border-orange-100 italic">
            <span className="text-orange-600 font-bold">!</span>
            <p>Un formulaire spécifique est à retirer auprès de l'Administration pour entamer cette démarche.</p>
          </div>
          <div className="p-4 rounded-sm bg-[var(--primary)]/5 border border-[var(--primary)]/10">
            <p className="font-bold text-[var(--primary)] mb-1">Frais d'étude de Dossier VAE</p>
            <p className="text-2xl font-bold">100.000 F CFA</p>
          </div>
        </div>
      </div>
    )
  }
];

export default function AdmissionSection() {
  const [activeTab, setActiveTab] = useState("l1");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Côté gauche : Infos statiques */}
          <div className="lg:w-1/3">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] font-bold mb-4">
              ADMISSION
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-8 leading-tight">
              Comment intégrer <br />
              <span className="text-[var(--primary)]">l'IMSA ?</span>
            </h3>

            <div className="mt-41 p-8 rounded-sm bg-white text-black border border-[var(--border-light)] shadow-xl shadow-[var(--primary)]/5 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4">Besoin d'aide ?</h4>
                <p className="text-black/70 text-sm mb-6">
                  Nos conseillers d'orientation sont disponibles pour vous accompagner dans vos démarches d'inscription.
                </p>
                <a href="/contact" className="text-[var(--accent)] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Contactez-nous <span>&rarr;</span>
                </a>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--primary)]/30 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Côté droit : Onglets interactifs */}
          <div className="lg:w-2/3">
            <div className="bg-[var(--bg-soft)] p-2 rounded-sm flex flex-wrap sm:flex-nowrap gap-1 mb-8">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={`flex-1 min-w-[100px] flex items-center justify-center gap-2 py-3 px-2 rounded-sm text-xs sm:text-sm font-bold transition-all ${
                    activeTab === step.id 
                      ? "bg-white text-[var(--primary)] shadow-sm" 
                      : "text-[var(--text-muted)] hover:text-[var(--primary)]"
                  }`}
                >
                  <span className="hidden xs:inline">{step.icon}</span>
                  {step.label}
                </button>
              ))}
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-sm border border-[var(--border-light)] shadow-xl shadow-[var(--primary)]/5 min-h-[400px] overflow-hidden">
              <div className="">
                <h4 className="text-2xl font-bold mb-6 text-[var(--foreground)] flex items-center gap-3">
                  <span className="w-10 h-10 rounded-sm bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
                    {steps.find(s => s.id === activeTab).icon}
                  </span>
                  Dossier {steps.find(s => s.id === activeTab).label}
                </h4>
                {steps.find(s => s.id === activeTab).content}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
