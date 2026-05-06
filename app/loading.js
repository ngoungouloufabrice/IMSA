"use client"; // Obligatoire pour utiliser motion

import Image from "next/image";
import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <Image 
          src="/imsa-logo-officiel.png" 
          alt="Chargement..." 
          width={150} 
          height={60} 
          className="h-20 w-auto opacity-70"
          priority
        />
        
        <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden relative">
          {/* Version avec motion : beaucoup plus simple à lire */}
          <motion.div 
            className="absolute inset-0 bg-[var(--primary)]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </div>
    </div>
  );
}
