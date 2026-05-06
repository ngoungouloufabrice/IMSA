"use client";

import Link from "next/link";
import Image from "next/image";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useEffect, useState } from "react";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Formation", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

const formations = [
  { label: "Logistique et transport international", href: "/courses/3" },
  { label: "Génie informatique et numérique", href: "/courses/11" },
  { label: "Sciences de la santé et sociale", href: "/courses/7" },
  { label: "Qualité hygiène sécurité environnement", href: "/courses/9" },
  { label: "Science agronomique appliquée", href: "/courses/6" },
];

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Utiliser requestAnimationFrame pour éviter le rendu en cascade synchrone
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--primary)" }}>
      {/* Barre décorative supérieure */}
      <div className="h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Identité de marque */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/imsa-logo-officiel.png"
                alt="Logo IMSA"
                width={64}
                height={64}
                className="h-16 w-auto"
              />
              <div>
                <div className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-serif)" }}>
                  IMSA
                </div>
                <div className="text-white/50 text-xs tracking-wide uppercase">
                  Institut de Management et des Sciences Appliquées
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Ici, on apprend autrement pour réussir durablement. L'IMSA
              forge des professionnels compétents, éthiques et créatifs,
              prêts à relever les défis du Gabon et à bâtir l'avenir.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/share/1FYzszqGEw/?mibextid=wwXIfr",
                  icon: <FacebookIcon className="w-5 h-5" />,
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/institut-de-management-et-des-sciences-appliqu%C3%A9es-imsa-gabon/",
                  icon: <LinkedInIcon className="w-5 h-5" />,
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/imsa241?igsh=MTZndTB6bDhzNG82Ng==",
                  icon: <InstagramIcon className="w-5 h-5" />,
                },
                {
                  label: "TikTok",
                  href: "https://www.tiktok.com/@imsagabon?is_from_webapp=1&sender_device=pc",
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18.5c0 1.51-.54 3.12-1.62 4.18-1.12 1.11-2.8 1.63-4.36 1.34-2.12-.3-3.86-2.11-4.1-4.23-.27-2.22 1.18-4.5 3.32-5.18.39-.12.8-.2 1.21-.24v3.91c-.13.01-.26.03-.39.06-1.1.25-1.83 1.4-1.54 2.48.24 1.01 1.26 1.63 2.25 1.4 1.05-.24 1.71-1.34 1.56-2.39V0z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-white/60 hover:bg-[var(--primary)] hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne Liens rapides */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Liens rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={`quick-${link.label}`}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne Formations */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Nos formations
            </h4>
            <ul className="space-y-3">
              {formations.map((link) => (
                <li key={`form-${link.label}`}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-white/60 text-sm">
                {mounted && <PlaceIcon className="w-5 h-5 text-white/60 shrink-0" />}
                <span>Libreville, Gabon</span>
              </li>
              <li>
                <a href="tel:+24166223328" className="flex items-center gap-4 text-white/60 text-sm hover:text-white transition-colors group">
                  {mounted && <CallIcon className="w-5 h-5 text-white/60 shrink-0 group-hover:scale-110 transition-transform" />}
                  <span>(+241) 66 22 33 28</span>
                </a>
              </li>
              <li>
                <a href="tel:+24174993328" className="flex items-center gap-4 text-white/60 text-sm hover:text-white transition-colors group">
                  {mounted && <CallIcon className="w-5 h-5 text-white/60 shrink-0 group-hover:scale-110 transition-transform" />}
                  <span>(+241) 74 99 33 28</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@imsa-school.com" className="flex items-center gap-4 text-white/60 text-sm hover:text-white transition-colors group">
                  {mounted && <EmailIcon className="w-5 h-5 text-white/60 shrink-0 group-hover:scale-110 transition-transform" />}
                  <span>info@imsa-school.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de pied de page */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} IMSA – Institut de Management et des Sciences Appliquées. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
