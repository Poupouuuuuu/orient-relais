"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, Heart, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AddToCartButton } from "@/components/shop/AddToCartButton";

export interface ProductProps {
    id: string;
    title: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
    badges?: { text: string; color: "green" | "orange" | "stone" | "blue" | "pink" }[];
    slug: string;
    category?: string;
}

export function ProductCard({ product }: { product: ProductProps }) {
    return (
        <div className="group relative flex flex-col bg-gradient-to-br from-amber-50/80 to-stone-100/90 rounded-3xl p-3 pb-4 shadow-sm hover:shadow-xl transition-all duration-500 h-full border border-stone-200/50">
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-stone-50 to-stone-100/50 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/10 border border-stone-100 group-hover:border-primary/40">
                {/* Subtle pattern background */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, hsl(43 50% 55%) 1px, transparent 0)`,
                    backgroundSize: '20px 20px',
                }} />

                {/* Gold glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <Link href={`/produit/${product.slug}`} className="block w-full h-full relative">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                </Link>

                {/* Badges */}
                <div className="absolute left-3 top-3 flex flex-col gap-1.5 z-10">
                    {product.badges?.map((badge, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className={`
                                ${badge.color === "green" ? "bg-emerald-600/90 text-white border-transparent backdrop-blur-sm shadow-lg shadow-emerald-500/20" : ""}
                                ${badge.color === "orange" ? "bg-primary/90 text-primary-foreground border-transparent backdrop-blur-sm shadow-lg shadow-primary/30" : ""}
                                ${badge.color === "stone" ? "bg-stone-800/90 text-white backdrop-blur-sm shadow-lg" : ""}
                                ${badge.color === "blue" ? "bg-blue-600/90 text-white border-transparent backdrop-blur-sm shadow-lg shadow-blue-500/20" : ""}
                                ${badge.color === "pink" ? "bg-pink-500/90 text-white border-transparent backdrop-blur-sm shadow-lg shadow-pink-500/20" : ""}
                                border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg
                            `}
                        >
                            {badge.text}
                        </Badge>
                    ))}
                </div>

                {/* Wishlist Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 h-9 w-9 rounded-xl bg-white/90 backdrop-blur-sm text-stone-400 hover:bg-white hover:text-red-500 hover:shadow-lg hover:shadow-red-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-10 border border-stone-100"
                >
                    <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Add Button (Floating) */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-10">
                    <AddToCartButton product={product} />
                </div>

                {/* Corner accents */}
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/30 rounded-br-lg transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 px-1 pt-3 flex-grow">
                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? "fill-current" : "text-stone-200"}`} />
                        ))}
                    </div>
                    <span className="text-stone-400 text-xs">({product.reviews})</span>
                </div>

                {/* Title - fixed height for consistency */}
                <Link href={`/produit/${product.slug}`} className="font-serif text-lg leading-snug font-semibold text-stone-900 group-hover:text-primary transition-colors duration-300 line-clamp-2 min-h-[2.75rem] flex-grow">
                    {product.title}
                </Link>

                {/* Price - pushed to bottom */}
                <div className="flex items-center gap-2 mt-auto">
                    <span className="font-bold text-stone-900 text-xl group-hover:text-primary transition-colors">
                        {product.price.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                    </span>
                </div>
            </div>
        </div>
    );
}
