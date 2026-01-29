import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AddToCartButton } from "@/components/shop/AddToCartButton";

export interface ProductProps {
    id: string;
    title: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
    badges?: { text: string; color: "green" | "orange" | "stone" }[];
    slug: string;
    category?: string;
}

export function ProductCard({ product }: { product: ProductProps }) {
    return (
        <div className="group relative flex flex-col gap-3">
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-stone-100 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <Link href={`/produit/${product.slug}`}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </Link>

                {/* Badges */}
                <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                    {product.badges?.map((badge, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className={`
                                ${badge.color === "green" ? "bg-secondary text-white border-transparent" : ""}
                                ${badge.color === "orange" ? "bg-amber-400 text-amber-950 border-transparent" : ""}
                                ${badge.color === "stone" ? "bg-white/90 text-stone-800 backdrop-blur-sm" : ""}
                                border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest shadow-sm rounded-sm
                            `}
                        >
                            {badge.text}
                        </Badge>
                    ))}
                </div>

                {/* Quick Add Button (Floating) */}
                <div className="absolute bottom-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-10">
                    <AddToCartButton product={product} />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
                {/* Rating */}
                <div className="flex items-center gap-1 text-xs mb-1">
                    <div className="flex text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-current" : "text-stone-200"}`} />
                        ))}
                    </div>
                    <span className="text-stone-400 font-light text-[10px]">({product.reviews})</span>
                </div>

                {/* Title */}
                <Link href={`/produit/${product.slug}`} className="font-serif text-lg leading-tight font-medium text-stone-900 group-hover:text-primary transition-colors line-clamp-2">
                    {product.title}
                </Link>

                {/* Price */}
                <div className="font-bold text-stone-900 mt-1">
                    {product.price.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                </div>
            </div>
        </div>
    );
}
