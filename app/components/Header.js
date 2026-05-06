"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from "motion/react";
import MagneticButton from "./MagneticButton";
import Image from "next/image";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Formation", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquer le défilement du corps quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >

        {/* Navigation principale */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div
                className={`flex items-center gap-2 transition-all duration-300 ${
                  scrolled ? "scale-90" : "scale-100"
                }`}
              >
                <Image
                  src="/imsa-logo-officiel.png"
                  alt="Logo IMSA"
                  width={100}
                  height={56}
                  className="h-14 w-auto"
                  priority
                />
                <div className="hidden sm:block">
                  <div
                    className={`font-bold text-xs leading-tight transition-colors ${
                      scrolled ? "text-gray-900" : "text-white"
                    }`}
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    INSTITUT DE MANAGEMENT 
                  </div>
                  <div
                    className={`text-xs tracking-wide transition-colors ${
                      scrolled ? "text-gray-500" : "text-white/70"
                    }`}
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    ET DES SCIENCES APPLIQUÉES
                  </div>
                </div>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-sm text-sm font-medium transition-all duration-300 ${
                      scrolled
                        ? "text-gray-700 hover:text-[var(--primary)]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          scrolled ? "bg-[var(--primary)]" : "bg-white"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        initial={false}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Toggle Mobile */}
            <div className="flex items-center gap-3">
              <MagneticButton>
                <Link
                  href="/pre-registration"
                  className={`!hidden md:!inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-bold transition-all duration-300 ${
                    scrolled
                      ? "btn-primary"
                      : "bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white hover:text-[var(--primary)]"
                  }`}
                >
                  Préinscription
                  <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </Link>
              </MagneticButton>

              {/* Bouton menu mobile */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-sm transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <CloseIcon sx={{ fontSize: 28 }} />
                ) : (
                  <MenuIcon sx={{ fontSize: 28 }} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay du Menu Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b">
                <span
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-sm hover:bg-gray-100 text-gray-500"
                  aria-label="Fermer"
                >
                  <CloseIcon sx={{ fontSize: 20 }} />
                </button>
              </div>
              <nav className="p-5 space-y-1 overflow-y-auto flex-grow">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-4 py-4 rounded-sm font-bold transition-all ${
                          isActive 
                            ? "bg-[var(--primary)]/5 text-[var(--primary)]" 
                            : "text-gray-700 hover:bg-[var(--bg-soft)] hover:text-[var(--primary)]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-6 mt-6 border-t border-gray-100"
                >
                  <Link
                    href="/pre-registration"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary w-full justify-center py-4"
                  >
                    Préinscription
                  </Link>
                </motion.div>
              </nav>

              {/* Footer du Menu Mobile : Infos de Contact */}
              <div className="p-8 bg-gray-50 border-t mt-auto">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Contactez-nous</h4>
                <div className="space-y-5">
                  <a href="tel:+24166223328" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-sm bg-white shadow-sm flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                      <PhoneIcon sx={{ fontSize: 18 }} />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase">Téléphone</div>
                      <div className="text-sm font-bold text-gray-700">(+241) 66 22 33 28</div>
                    </div>
                  </a>
                  <a href="mailto:info@imsa-school.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-sm bg-white shadow-sm flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                      <EmailIcon sx={{ fontSize: 18 }} />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase">Email</div>
                      <div className="text-sm font-bold text-gray-700">info@imsa-school.com</div>
                    </div>
                  </a>
                </div>

                {/* Liens réseaux sociaux */}
                <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200/50">
                  <a href="#" className="w-10 h-10 rounded-sm bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#1877F2] transition-colors">
                    <FacebookIcon sx={{ fontSize: 20 }} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-sm bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#0A66C2] transition-colors">
                    <LinkedInIcon sx={{ fontSize: 20 }} />
                  </a>
                </div>

                {/* Liens réseaux sociaux */}
                <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200/50">
                  <a href="https://www.facebook.com/share/1FYzszqGEw/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#1877F2] transition-colors">
                    <FacebookIcon sx={{ fontSize: 20 }} />
                  </a>
                  <a href="https://www.linkedin.com/company/institut-de-management-et-des-sciences-appliqu%C3%A9es-imsa-gabon/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-[#0A66C2] transition-colors">
                    <LinkedInIcon sx={{ fontSize: 20 }} />
                  </a>
                  <a href="https://www.tiktok.com/@imsagabon?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-black transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18.5c0 1.51-.54 3.12-1.62 4.18-1.12 1.11-2.8 1.63-4.36 1.34-2.12-.3-3.86-2.11-4.1-4.23-.27-2.22 1.18-4.5 3.32-5.18.39-.12.8-.2 1.21-.24v3.91c-.13.01-.26.03-.39.06-1.1.25-1.83 1.4-1.54 2.48.24 1.01 1.26 1.63 2.25 1.4 1.05-.24 1.71-1.34 1.56-2.39V0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
