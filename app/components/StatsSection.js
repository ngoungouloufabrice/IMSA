"use client";

import Image from "next/image";
import StatCard from "./StatCard";

const stats = [
  { value: 2, label: "Campus", suffix: "" },
  { value: 16, label: "Filières", suffix: "" },
  { value: 51, label: "Possibilités de parcours", suffix: "" },
  { value: 2000, label: "Étudiants en capacité", suffix: "+" },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--bg-soft)" }}
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--primary-rgb), 0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/imsa-logo-officiel.png"
            alt="Logo IMSA"
            width={100}
            height={100}
            className="h-16 sm:h-20 md:h-24 w-auto"
          />
        </div>

        {/* Description */}
        <p
          className="text-center text-lg sm:text-2xl md:text-[1.7rem] leading-relaxed max-w-3xl mx-auto mb-16"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--foreground)",
          }}
        >
          À l'IMSA, nous ne formons pas de simples diplômés — 
          nous forgeons des catalyseurs de changement, 
          porteurs de valeurs, prêts à façonner l'avenir du Gabon 
          et à laisser une empreinte durable sur le monde.
        </p>

        {/* Grille de statistiques - adaptative */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="w-full md:w-[160px]">
              <StatCard stat={stat} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
