"use client";

import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from "motion/react";

export default function CourseCard({ formation }) {
  const { id, nom, diplomes, objectif } = formation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -6, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="group relative bg-white rounded-sm p-6 shadow-sm border border-[var(--border-light)] flex flex-col h-full overflow-hidden"
    >
      {/* Élément décoratif d'arrière-plan */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-[var(--accent)]/10 transition-colors duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            {diplomes.map((d, index) => (
              <span 
                key={index}
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border border-[var(--border-light)] text-[var(--text-muted)] group-hover:border-[var(--accent)]/30 transition-colors"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors line-clamp-2 min-h-[3.5rem]">
          {nom}
        </h3>
        
        <p className="text-sm text-[var(--text-muted)] line-clamp-3 mb-6 flex-grow italic">
          "{objectif}"
        </p>

        <div className="mt-auto pt-6 border-t border-[var(--border-light)]/50 group-hover:border-[var(--accent)]/20 transition-colors">
          <Link 
            href={`/courses/${id}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] group/link"
          >
            En savoir plus
            <ArrowForwardIcon 
              sx={{ fontSize: 18 }} 
              className="group-hover/link:translate-x-1 transition-transform" 
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
