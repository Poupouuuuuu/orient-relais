"use client";

import { HeaderCentered } from "@/components/layout/HeaderCentered";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { CartProvider } from "@/context/CartContext";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <ScrollToTop />
            <HeaderCentered />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <CookieConsent />
        </CartProvider>
    );
}
