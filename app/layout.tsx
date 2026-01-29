import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: {
    default: "Orient Relais - Boutique Bio | Savons d'Alep & Produits Naturels",
    template: "%s | Orient Relais"
  },
  description: "Boutique en ligne de produits bio : savons d'Alep authentiques, huiles essentielles Terra Etica, compléments alimentaires naturels. Livraison offerte dès 39€.",
  keywords: ["savon d'Alep", "bio", "huiles essentielles", "compléments alimentaires", "naturel", "MAUREPAS", "Orient Relais"],
  authors: [{ name: "Orient Relais" }],
  creator: "Orient Relais",
  metadataBase: new URL("https://orient-relais.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Orient Relais",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${lato.variable} antialiased flex flex-col min-h-screen`}>
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
