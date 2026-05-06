"use client";

import { useState, useEffect } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { motion } from "motion/react";

const campusImages = [
  {
    url: "/imsa-damas.jpg",
    title: "Campus de Damas",
    subtitle: "Innovation & Technologie"
  },
  {
    url: "/imsa-charbonnage.png",
    title: "Campus du Charbonnage",
    subtitle: "Management & Excellence"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function HeroAbout() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % campusImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const title = "À propos de l'IMSA";

  return (
    <section
      className="relative h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Carrousel d'images d'arrière-plan */}
      {campusImages.map((item, index) => (
        <div
          key={item.url}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1500 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url('${item.url}')`,
            backgroundAttachment: "fixed"
          }}
        />
      ))}

      {/* Superpositions (Overlays) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[var(--foreground)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/30 to-transparent" />

      {/* Contenu */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={itemVariants}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word === "l'IMSA" ? (
                <span className="text-[var(--accent)]">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-white/50" />
          <div className="flex gap-2">
            {campusImages.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full border border-white/50 transition-all duration-500 ${i === currentIndex ? "bg-white scale-125" : "bg-transparent"
                  }`}
              />
            ))}
          </div>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-white/50" />
        </motion.div>
        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed italic"
        >
          "{campusImages[currentIndex].subtitle}"
        </motion.p>
      </motion.div>

      {/* Indicateur de défilement */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5, 
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 32, color: "white", opacity: 0.5 }} />
      </motion.div>

      {/* Flou décoratif */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--primary)]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
