"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart, Truck, ShieldCheck, Leaf, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

interface ProductInfoDynamicProps {
    product: Product;
}

export function ProductInfoDynamic({ product }: ProductInfoDynamicProps) {
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
                            className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${badge.color === "green" ? "bg-green-100 text-green-700" :
                                badge.color === "orange" ? "bg-orange-100 text-orange-700" :
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
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-stone-100">
                <div className="flex items-center border border-stone-200 rounded-lg">
                    <button
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="p-3 hover:bg-stone-50 transition-colors"
                    >
                        <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 font-medium text-lg">{quantity}</span>
                    <button
                        onClick={() => setQuantity(q => q + 1)}
                        className="p-3 hover:bg-stone-50 transition-colors"
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                </div>
                <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="flex-1 bg-primary hover:bg-orange-600 text-white h-14 text-lg font-semibold gap-2"
                >
                    <ShoppingCart className="h-5 w-5" />
                    Ajouter au panier
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 shrink-0">
                    <Heart className="h-5 w-5" />
                </Button>
            </div>

            {/* Reassurance */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-100 text-center">
                <div className="flex flex-col items-center gap-2">
                    <Truck className="h-6 w-6 text-primary" />
                    <span className="text-xs text-stone-600">Livraison<br />offerte dès 39€</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                    <span className="text-xs text-stone-600">Paiement<br />sécurisé</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Leaf className="h-6 w-6 text-primary" />
                    <span className="text-xs text-stone-600">100%<br />Naturel</span>
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
