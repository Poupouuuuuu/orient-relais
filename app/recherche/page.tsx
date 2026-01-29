"use client";

import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { ALL_PRODUCTS } from "@/data/products";

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q")?.toLowerCase() || "";

    const results = query
        ? ALL_PRODUCTS.filter(p =>
            p.title.toLowerCase().includes(query) ||
            p.category.includes(query) ||
            p.shortDescription.toLowerCase().includes(query) ||
            (p.benefits && p.benefits.some(b => b.toLowerCase().includes(query)))
        ).map(p => ({
            id: p.id,
            title: p.title,
            price: p.price,
            image: p.image,
            rating: p.rating,
            reviews: p.reviews,
            badges: p.badges,
            slug: p.slug,
        }))
        : [];

    return (
        <div className="container mx-auto px-4 py-8 md:py-16">
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-stone-500 hover:text-primary mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l&apos;accueil
                </Link>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mb-2">
                    {query ? `Résultats pour "${query}"` : "Recherche"}
                </h1>
                <p className="text-stone-500">
                    {results.length} produit(s) trouvé(s)
                </p>
            </div>

            {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {results.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 bg-stone-50 rounded-xl border border-stone-100">
                    <div className="h-16 w-16 bg-stone-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <Search className="h-8 w-8 text-stone-400" />
                    </div>
                    <p className="text-xl font-serif text-stone-900 mb-2">
                        {query ? "Aucun résultat trouvé." : "Entrez un terme de recherche"}
                    </p>
                    <p className="text-stone-500 mb-6 max-w-md mx-auto">
                        {query
                            ? "Essayez avec un autre terme comme \"savon\", \"nigelle\", \"moringa\" ou \"coffret\"."
                            : "Recherchez parmi nos 33 produits bio: savons, huiles essentielles, compléments alimentaires..."
                        }
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                        <Link href="/recherche?q=savon">
                            <Button variant="outline" size="sm">Savon</Button>
                        </Link>
                        <Link href="/recherche?q=huile">
                            <Button variant="outline" size="sm">Huile</Button>
                        </Link>
                        <Link href="/recherche?q=bio">
                            <Button variant="outline" size="sm">Bio</Button>
                        </Link>
                        <Link href="/recherche?q=miel">
                            <Button variant="outline" size="sm">Miel</Button>
                        </Link>
                    </div>
                    <Button asChild>
                        <Link href="/boutique">Voir toute la boutique</Link>
                    </Button>
                </div>
            )}

            {/* Popular categories */}
            {results.length > 0 && (
                <div className="mt-16 pt-8 border-t border-stone-200">
                    <h2 className="font-serif text-xl font-bold text-stone-900 mb-4">Explorer par catégorie</h2>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/categorie/savons">
                            <Button variant="outline">Savons d'Alep</Button>
                        </Link>
                        <Link href="/categorie/complements-alimentaires">
                            <Button variant="outline">Compléments</Button>
                        </Link>
                        <Link href="/categorie/huiles-essentielles">
                            <Button variant="outline">Huiles Essentielles</Button>
                        </Link>
                        <Link href="/categorie/coffrets">
                            <Button variant="outline">Coffrets</Button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="container mx-auto py-20 text-center">Chargement...</div>}>
            <SearchResults />
        </Suspense>
    );
}
