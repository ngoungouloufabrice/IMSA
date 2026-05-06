"use client";

import { useEffect, useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const contactData = [
  {
    title: "Téléphones",
    icon: <CallIcon />,
    items: [
      { label: "Standard", value: "(+241) 66 22 33 28", href: "tel:+24166223328" },
      { label: "Scolarité", value: "(+241) 74 99 33 28", href: "tel:+24174993328" },
    ],
    color: "bg-blue-50"
  },
  {
    title: "E-mails",
    icon: <EmailIcon />,
    items: [
      { label: "Informations", value: "info@imsa-school.com", href: "mailto:info@imsa-school.com" },
    ],
    color: "bg-sky-50"
  },
  {
    title: "Nos Campus",
    icon: <PlaceIcon />,
    items: [
      { label: "Damas", value: "Libreville, Gabon", href: "#" },
      { label: "Charbonnages", value: "Libreville, Gabon", href: "#" },
    ],
    color: "bg-indigo-50"
  }
];

const socialLinks = [
  { label: "Facebook", icon: <FacebookIcon />, href: "https://www.facebook.com/share/1FYzszqGEw/?mibextid=wwXIfr" },
  { label: "LinkedIn", icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/institut-de-management-et-des-sciences-appliqu%C3%A9es-imsa-gabon/" },
  { label: "Instagram", icon: <InstagramIcon />, href: "https://www.instagram.com/imsa241?igsh=MTZndTB6bDhzNG82Ng==" },
  { 
    label: "TikTok", 
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18.5c0 1.51-.54 3.12-1.62 4.18-1.12 1.11-2.8 1.63-4.36 1.34-2.12-.3-3.86-2.11-4.1-4.23-.27-2.22 1.18-4.5 3.32-5.18.39-.12.8-.2 1.21-.24v3.91c-.13.01-.26.03-.39.06-1.1.25-1.83 1.4-1.54 2.48.24 1.01 1.26 1.63 2.25 1.4 1.05-.24 1.71-1.34 1.56-2.39V0z" />
      </svg>
    ), 
    href: "https://www.tiktok.com/@imsagabon?is_from_webapp=1&sender_device=pc" 
  },
];

export default function ContactCards() {

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactData.map((card, index) => (
            <div 
              key={index} 
              className="group p-8 border border-gray-100 rounded-sm hover:border-[var(--primary)]/30 transition-all duration-300 bg-white shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 bg-[var(--bg-soft)] text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-6 font-serif">
                {card.title}
              </h3>
              <div className="space-y-4">
                {card.items.map((item, i) => (
                  <div key={i}>
                    <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1 font-semibold">
                      {item.label}
                    </p>
                    <a 
                      href={item.href}
                      className="text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="relative overflow-hidden p-12 rounded-sm bg-[var(--primary)] text-white text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent)]" />
          <h2 className="text-3xl font-bold mb-8 font-serif">Suivez-nous sur les réseaux</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white hover:text-[var(--primary)] rounded-sm transition-all duration-300 border border-white/20"
              >
                {social.icon}
                <span className="font-bold text-sm tracking-wide">{social.label}</span>
              </a>
            ))}
          </div>
          
          {/* Éléments décoratifs */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--accent)]/10 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
}
