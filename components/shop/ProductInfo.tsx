"use client";

import { useState } from "react";
import { Star, ShieldCheck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export function ProductInfo() {
    const [selectedVariant, setSelectedVariant] = useState("40%");
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem({
            id: "1", // Hardcoded for demo/PDP
            title: "Savon d'Alep Excellence",
            price: 12.90,
            image: "/aleppo-soap-product.png",
            variant: `${selectedVariant} Laurier`
        });
    };

    return (
        <div className="flex flex-col gap-6">
            {/* Header Info */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-stone-500">
                    <span className="flex items-center gap-1">
                        <span className="text-lg">🇸🇾</span> Syrie (Alep)
                    </span>
                    <span>•</span>
                    <span className="text-green-700 font-medium">En stock France</span>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
                    Savon d&apos;Alep Excellence <br /> 40% Laurier
                </h1>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                    </div>
                    <a href="#avis" className="text-sm text-stone-500 underline hover:text-stone-800">
                        42 avis vérifiés
                    </a>
                </div>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-primary">
                12,90 €
            </div>

            {/* Description Short */}
            <p className="text-stone-600 leading-relaxed">
                L&apos;authentique savon d&apos;Alep, gorgé de 40% d&apos;huile de baies de laurier.
                Un soin d&apos;exception pour les peaux sensibles, atopiques ou à problèmes.
                Purifie, apaise et rétablit l&apos;équilibre naturel de l&apos;épiderme.
            </p>

            {/* Variants */}
            <div className="space-y-3">
                <span className="text-sm font-semibold text-stone-900">Concentration en Laurier :</span>
                <div className="flex gap-3">
                    {["20%", "40%"].map((variant) => (
                        <button
                            key={variant}
                            onClick={() => setSelectedVariant(variant)}
                            className={cn(
                                "px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                                selectedVariant === variant
                                    ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                                    : "border-stone-200 text-stone-600 hover:border-stone-300 bg-white"
                            )}
                        >
                            {variant}
                        </button>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 pt-4 border-t border-stone-100">
                <Button
                    size="lg"
                    onClick={handleAddToCart}
                    className="w-full h-14 text-lg font-bold bg-primary hover:bg-orange-600 text-white rounded-xl shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-transform"
                >
                    Ajouter au panier
                </Button>

                <div className="flex items-center justify-center gap-6 text-xs text-stone-500 pt-2">
                    <div className="flex items-center gap-1.5">
                        <Leaf className="h-4 w-4 text-green-600" />
                        <span>100% Naturel & Vegan</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="h-4 w-4 text-stone-400" />
                        <span>Sans huile de palme</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
