import Image from "next/image";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function RectorSection() {
  return (
    <section id="rector" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Colonne gauche - Image & titre */}
          <div className="">
            {/* Libellé de section */}
            <div className="mb-6">
              <span
                className="text-sm font-semibold uppercase tracking-[3px] underline underline-offset-4"
                style={{
                  color: "var(--primary)",
                  textDecorationColor: "var(--primary)",
                }}
              >
                Le mot du president fondateur
              </span>
            </div>

            {/* Photo */}
            <div className="relative group">
              <div className="relative rounded-sm overflow-hidden shadow-xl lg:h-[550px]">
                <Image
                  src="/pf.jpeg"
                  alt="Dr. Romuald AKENDENGUE – Président Fondateur de l'IMSA"
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p
                    className="text-white text-lg font-bold"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Dr. Romuald AKENDENGUE
                  </p>
                  <p className="text-white/70 text-sm">
                    Président Fondateur de l'IMSA
                  </p>
                </div>
              </div>

              {/* Accents décoratifs */}
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-sm -z-10"
                style={{ background: "var(--primary)", opacity: 0.1 }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-sm -z-10"
                style={{ background: "var(--accent)", opacity: 0.08 }}
              />
            </div>
          </div>

          {/* Colonne droite - Message */}
          <div className="">
            {/* Icône de citation */}
            <div className="mb-6">
              <FormatQuoteIcon 
                sx={{ 
                  fontSize: 64, 
                  opacity: 0.15, 
                  color: "var(--primary)",
                  transform: "rotate(180deg)"
                }} 
              />
            </div>

            <div
              className="text-base leading-relaxed space-y-5"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Chers bâtisseurs de demain, chers étudiants et chers collaborateurs,
              </p>
              <p>
                Au cœur de l'effervescence gabonaise, l'Institut de Management
                 et des Sciences Appliquées (IMSA) se dresse comme un phare de 
                 l'innovation et de l'excellence académique. Notre devise, 
                 "Apprendre Autrement", est une promesse : celle de transcender 
                 les méthodes traditionnelles pour vous offrir une immersion totale 
                 dans les réalités professionnelles contemporaines
              </p>
              <p>
                Nous cultivons l'esprit critique, la créativité et l'éthique, 
                des piliers fondamentaux pour naviguer dans un monde en constante 
                mutation. À l'IMSA, vous ne vous contenterez pas d'acquérir des connaissances ; 
                vous développerez des compétences transférables, des aptitudes au leadership 
                et une vision stratégique qui feront de vous des catalyseurs de changement, 
                capables de relever les défis de notre nation et de laisser une empreinte durable.
              </p>
              <p>
                Rejoignez une communauté où l'ambition rencontre l'opportunité, 
                où chaque défi est une marche vers le succès. Votre voyage à l'IMSA 
                est une invitation à façonner non seulement votre destin, mais aussi 
                celui du Gabon. Soyez les pionniers de l'excellence. L'avenir vous attend, 
                il est temps de le construire ensemble.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p
                className="text-2xl italic"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--primary)",
                  textAlign: "right",
                }}
              >
                Dr. Romuald AKENDENGUE
              </p>
              <p
                className="text-lg italic"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--primary)",
                  textAlign: "right",
                }}
              >
                Président Fondateur de l'IMSA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
