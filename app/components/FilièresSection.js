"use client";

import Link from "next/link";
import { motion } from "motion/react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CourseCard from "./CourseCard";
import { scienceFormations } from "@/data/science";
import { businessFormations } from "@/data/business";

export default function FilièresSection() {
  // Sélection des filières demandées par l'utilisateur
  const selectedFormations = [
    businessFormations.find(f => f.id === 3), // Logistique et transport international
    scienceFormations.find(f => f.id === 11), // Génie informatique et numérique
    scienceFormations.find(f => f.id === 7),  // Sciences de la santé et sociale
    scienceFormations.find(f => f.id === 9),  // Qualité hygiène sécurité environnement
    scienceFormations.find(f => f.id === 6),  // Science agronomique appliquée
  ].filter(Boolean);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-24 bg-[var(--bg-soft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section avec titre et lien à droite */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-serif)", color: "var(--foreground)" }}
              >
                Nos filières
              </h2>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-[var(--accent)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                <p className="text-lg text-[var(--text-muted)] ">
                  Découvrez nos pôles d'excellence académique
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Grille des filières */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {selectedFormations.map((formation) => (
            <CourseCard key={formation.id} formation={formation} />
          ))}
        </motion.div>

        <Link
          href={`/courses`}
          className="flex items-center gap-2 text-base font-semibold text-[var(--primary)] group/link justify-end"
        >
          Voir toutes les filières
          <ArrowForwardIcon
            sx={{ fontSize: 20 }}
            className="group-hover/link:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
}
