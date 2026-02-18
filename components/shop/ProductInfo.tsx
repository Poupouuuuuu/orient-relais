"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart, Truck, ShieldCheck, Leaf, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

interface ProductInfoProps {
    product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: quantity,
        });
    };

    return (
        <div className="flex flex-col gap-6">
            {/* Badges */}
            {product.badges && product.badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {product.badges.map((badge, i) => (
                        <span
                            key={i}
                            className={`text-xs font-bold uppercase px-3 py-1.5 rounded-full ${badge.color === "green" ? "bg-emerald-100 text-emerald-700" :
                                badge.color === "orange" ? "bg-primary/15 text-primary" :
                                    badge.color === "blue" ? "bg-blue-100 text-blue-700" :
                                        badge.color === "pink" ? "bg-pink-100 text-pink-700" :
                                            "bg-stone-100 text-stone-700"
                                }`}
                        >
                            {badge.text}
                        </span>
                    ))}
                </div>
            )}

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
                {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-current" : "stroke-current fill-none"}`} />
                    ))}
                </div>
                <span className="text-stone-500 text-sm">({product.reviews} avis)</span>
            </div>

            {/* Description */}
            <p className="text-stone-600 text-lg leading-relaxed">
                {product.shortDescription}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 pt-2">
                <span className="text-4xl font-bold text-primary">{product.price.toFixed(2)} €</span>
                {product.originalPrice && (
                    <span className="text-xl text-stone-400 line-through">{product.originalPrice.toFixed(2)} €</span>
                )}
            </div>

            {/* Weight */}
            {product.weight && (
                <p className="text-sm text-stone-500">Contenance : {product.weight}</p>
            )}

            {/* Quantity & Cart */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-stone-100">
                <div className="flex items-center border-2 border-stone-200 rounded-2xl bg-stone-50/50 overflow-hidden hover:border-primary/30 transition-colors">
                    <button
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="p-4 hover:bg-primary/5 transition-colors text-stone-600 hover:text-primary"
                    >
                        <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 font-bold text-xl text-stone-800 min-w-[3.5rem] text-center">{quantity}</span>
                    <button
                        onClick={() => setQuantity(q => q + 1)}
                        className="p-4 hover:bg-primary/5 transition-colors text-stone-600 hover:text-primary"
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                </div>
                <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="flex-1 h-14 text-lg font-bold gap-3 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                    <ShoppingCart className="h-5 w-5" />
                    Ajouter au panier
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 shrink-0 rounded-2xl border-2 hover:border-primary/50 hover:text-primary transition-colors">
                    <Heart className="h-5 w-5" />
                </Button>
            </div>

            {/* Reassurance */}
            <div className="grid grid-cols-3 gap-3 pt-8 border-t border-stone-100">
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/20 transition-colors group">
                    <div className="p-2.5 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                        <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs text-stone-600 text-center leading-tight font-medium">Livraison<br />offerte dès 39€</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/20 transition-colors group">
                    <div className="p-2.5 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs text-stone-600 text-center leading-tight font-medium">Paiement<br />sécurisé</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/20 transition-colors group">
                    <div className="p-2.5 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                        <Leaf className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs text-stone-600 text-center leading-tight font-medium">100%<br />Naturel</span>
                </div>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 text-sm">
                {product.inStock ? (
                    <>
                        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                        <span className="text-green-600 font-medium">En stock</span>
                    </>
                ) : (
                    <>
                        <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                        <span className="text-red-600 font-medium">Rupture de stock</span>
                    </>
                )}
            </div>
        </div>
    );
}
