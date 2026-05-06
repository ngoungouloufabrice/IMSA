import { sourceSans, playfair } from "./fonts";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "IMSA – Institut de Management et des Sciences Appliquées | Ici, on apprend autrement",
  description:
    "L'Institut de Management et des Sciences Appliquées (IMSA) au Gabon forme les leaders de demain dans les domaines du numérique, de la santé, de l'agronomie et de la logistique.",
  keywords: "université, IMSA, Libreville, Gabon, management, sciences appliquées, formation, licence, master, informatique, santé, agronomie",
  openGraph: {
    title: "IMSA – Institut de Management et des Sciences Appliquées",
    description: "Ici, on apprend autrement pour réussir durablement.",
    siteName: "IMSA",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/imsa-logo-officiel.png?v=2", type: "image/png" },
    ],
    shortcut: "/imsa-logo-officiel.png?v=2",
    apple: "/imsa-logo-officiel.png?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${sourceSans.variable} ${playfair.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <div className="print:hidden">
          <Header />
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <div className="print:hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}
