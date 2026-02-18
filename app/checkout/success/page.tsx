"use client";

import { CheckCircle2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

// We can just add a simple useEffect for confetti if needed later, but clean UI is good enough.

export default function CheckoutSuccessPage() {

    // Confetti effect removed for performance/stability

    return (
        <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-lg text-center animate-in zoom-in-95 duration-500">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>

                <h1 className="font-serif text-3xl font-bold text-stone-900 mb-2">Commande Confirmée !</h1>
                <p className="text-stone-500 mb-8">
                    Merci pour votre achat. Vous recevrez un email de confirmation dans quelques instants.
                </p>

                <div className="bg-stone-50 rounded-xl p-6 mb-8 text-left border border-stone-100">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-200">
                            <Package className="h-5 w-5 text-stone-600" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-stone-900">Commande #OR-{Math.floor(Math.random() * 100000)}</p>
                            <p className="text-xs text-stone-500">Préparation en cours</p>
                        </div>
                    </div>
                    <p className="text-sm text-stone-600">
                        Votre commande sera expédiée sous 24h. Nous prenons le plus grand soin à emballer vos produits.
                    </p>
                </div>

                <Button asChild className="w-full h-12 text-lg font-bold">
                    <Link href="/">
                        Retour à la boutique
                    </Link>
                </Button>
            </div>
        </div>
    );
}
