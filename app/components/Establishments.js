"use client";

import CampusCard from "./CampusCard";
import { motion } from "motion/react";

const campuses = [
  {
  title: "Campus de damas",
  image: "/imsa-damas.jpg",
  location: "Damas, Libreville — Gabon",
  description: "Un cadre d'apprentissage moderne pensé pour les filières technologiques et de gestion. À l'IMSA de Damas, chaque espace est conçu pour vous immerger dans les réalités professionnelles contemporaines et faire de vous un catalyseur de changement.",
},
{
  title: "Campus du charbonnage",
  image: "/imsa-charbonnage.png",
  location: "Charbonnage, Libreville — Gabon",
  description: "Le site historique de l'IMSA, berceau de l'excellence académique gabonaise. Ici se forgent les compétences en management, en droit, en finance et en sciences de la santé — pour des professionnels prêts à façonner l'avenir du Gabon.",
},
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Establishments() {
  return (
    <section id="campuses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "var(--foreground)" }}
          >
            Nos campus
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-[var(--accent)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
            <span className="h-px w-12 bg-[var(--accent)]" />
          </div>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            L'IMSA, c'est 2 campus d'excellence au cœur du Gabon
            — chacun conçu pour vous offrir un environnement
            d'apprentissage à la hauteur de vos ambitions.
          </p>
        </motion.div>

        {/* Grille des campus */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {campuses.map((campus, index) => (
            <CampusCard key={campus.title} {...campus} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
