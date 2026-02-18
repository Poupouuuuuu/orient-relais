"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { CartProvider } from "@/context/CartContext";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <ScrollToTop />
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <CookieConsent />
        </CartProvider>
    );
}
