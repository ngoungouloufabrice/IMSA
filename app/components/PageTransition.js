"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function PageTransition() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // On déclenche le chargement avec un micro-délai pour éviter l'erreur de "cascading renders"
    const startTimer = setTimeout(() => {
      setIsLoading(true);
    }, 0);

    // On laisse le loading au moins 800ms pour qu'il soit bien visible (effet Premium)
    const endTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [pathname, searchParams]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/imsa-logo-officiel.png"
              alt="Chargement..."
              width={150}
              height={60}
              className="h-20 w-auto"
              priority
            />

            <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden relative mt-2">
              <motion.div
                className="absolute inset-0 bg-[var(--primary)]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
