"use client";

import { Paper, Typography } from '@mui/material';
import { motion, useMotionValue, useSpring, useTransform, useInView } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  // Nettoyer la valeur (enlever les caractères non numériques pour le compteur)
  const numericValue = parseInt(String(value).replace(/[^0-9]/g, '')) || 0;
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue);
    }
  }, [inView, motionValue, numericValue]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        y: -6, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      style={{ height: "100%" }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 2.5,
          borderRadius: "0.1rem", // bordure arrondie légère (rounded-sm)
          textAlign: "center",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          border: "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: 700,
            mb: 0.5,
            fontFamily: "var(--font-serif)",
            color: "var(--primary)",
            fontSize: { xs: "1.5rem", sm: "1.875rem" },
            whiteSpace: "nowrap",
          }}
        >
          <Counter value={stat.value} suffix={stat.suffix} />
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "var(--text-muted)",
            fontSize: "0.875rem",
            lineHeight: 1.25,
            fontWeight: 500,
          }}
        >
          {stat.label}
        </Typography>
      </Paper>
    </motion.div>
  );
}
