import HeroContact from "../components/HeroContact";
import ContactCards from "../components/ContactCards";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="flex-grow">
      {/* Section Hero */}
      <HeroContact />

      {/* Section Cartes de Contact */}
      <ScrollReveal>
        <ContactCards />
      </ScrollReveal>
      
      {/* Map Section (Optional placeholder if needed) */}
      <ScrollReveal delay={0.2}>
        <section className="h-[400px] w-full grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.771032338165!2d9.4425958!3d0.4429432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3dea56065eaf%3A0x17ec7f4b811e3469!2sIMSA!5e0!3m2!1sfr!2sga!4v1713800000000!5m2!1sfr!2sga"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </ScrollReveal>
    </main>
  );
}
