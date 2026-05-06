"use client";

import { useState, useEffect, useRef } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { motion, useScroll, useTransform } from "motion/react";

const images = [
  "/img-hero-1.jpg",
  "/img-hero-2.jpeg",
  "/img-hero-3.jpeg",
  "/img-hero-4.jpeg"
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

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const title = "Institut de Management et des Sciences Appliquées";

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Carrousel d'images d'arrière-plan avec effet parallaxe */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          />
        ))}
      </motion.div>

      {/* Superpositions de dégradés */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/40 to-transparent z-[1]" />

      {/* Éléments décoratifs */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl shadow-2xl z-[1]" 
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl z-[1]"
      />

      {/* Contenu principal */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Révélation du titre principal */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
          style={{ fontFamily: "var(--font-serif)", color: "white" }}
        >
          {title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={itemVariants}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Ligne décorative */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-white" />
          <span className="w-3 h-3 rounded-full border-2 border-white" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-white" />
        </motion.div>

        {/* Slogan / Tagline */}
        <motion.p 
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-white font-light max-w-3xl mx-auto mb-12"
        >
          Alio modo formare.
        </motion.p>
      </motion.div>

      {/* Indicateur de défilement (scroll) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 2, 
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <div>
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: 40 }} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
