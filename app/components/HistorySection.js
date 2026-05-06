"use client";

import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SchoolIcon from '@mui/icons-material/School';

export default function HistorySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Motifs d'arrière-plan */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--bg-soft)] -skew-x-12 translate-x-1/2 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Côté gauche : Contenu */}
          <div className="">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] font-bold mb-4">
              Qui sommes-nous ?
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-8 leading-tight">
              L'Excellence Académique <br />
              <span className="text-[var(--primary)]">
                Au service du Gabon
              </span>
            </h3>
            
            <div className="space-y-6 text-lg text-[var(--text-muted)] leading-relaxed">
              <p>
                L'<strong>Institut de Management et des Sciences Appliquées (IMSA)</strong> est 
                un établissement privé d'enseignement supérieur fondé en Octobre 2017 
                par le <strong>Dr Romuald AKENDENGUE</strong>.
              </p>
              <p>
                Reconnu par l'État gabonais via les décrets <strong>N°0071/PR/MESRSIT</strong> et 
                <strong> N°0072/PR/MESRSIT</strong> du 14 février 2024, 
                l'IMSA s'est imposé comme un acteur majeur de la formation professionnelle.
              </p>
              <p>
                Nous formons les leaders de demain dans les domaines des <strong>Sciences de 
                Gestion et Juridiques</strong>, du <strong>Génie Biologique et Environnement
                </strong>, et du <strong>Génie Informatique et Industriel</strong>.
              </p>
            </div>
          </div>

          {/* Côté droit : Carte décorative (masquée sur mobile) */}
          <div className="hidden lg:block md:block relative">
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl relative group ">
              {/* Utilisation d'un dégradé si aucune image n'est disponible */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center p-12 text-white text-center">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto border border-white/30">
                    <HistoryEduIcon sx={{ fontSize: 40 }} />
                  </div>
                  <h4 className="text-2xl font-bold">Innovation & Engagement</h4>
                  <p className="opacity-80 font-light italic">
                    En partenariat avec l'Agence Nationale des Bourses du Gabon (ANBG), 
                    nous accueillons les boursiers gabonais vers la réussite.
                  </p>
                  
                </div>
              </div>
              
              {/* Superposition décorative (Glassmorphism) */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white/40 backdrop-blur-xl rounded-sm border border-white/20 shadow-xl p-6 flex flex-col justify-center">
                <div className="text-[var(--primary)] font-bold text-lg leading-tight mb-2">Cycle Universitaire</div>
                <div className="text-xs text-white">DUT/BTS • LICENCE • MASTER</div>
              </div>
            </div>
            
            {/* Effets de flou en arrière-plan */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--accent)]/20 rounded-full blur-[100px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
