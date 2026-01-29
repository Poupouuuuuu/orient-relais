import { ProductFilters } from "@/components/shop/ProductFilters";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SAVONS, CATEGORIES } from "@/data/products";

export const metadata = {
    title: "Savons d'Alep Bio | Orient Relais",
    description: "Découvrez notre gamme de savons d'Alep authentiques: Rose de Damas, Encens, Ambre et Oud, Mer Morte, Traditionnel 40% laurier et plus.",
};

export default function SavonsPage() {
    const category = CATEGORIES.find(c => c.slug === "savons");
    const products = SAVONS.map(p => ({
        id: p.id,
        title: p.title,
        price: p.price,
        image: p.image,
        rating: p.rating,
        reviews: p.reviews,
        badges: p.badges,
        slug: p.slug,
    }));

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 md:mb-12">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Boutique</span>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">{category?.title}</h1>
                <p className="text-stone-600 max-w-2xl text-lg leading-relaxed">
                    Découvrez l'authentique savon d'Alep, ancêtre de tous les savons durs.
                    Saponifié au chaudron selon la méthode traditionnelle depuis des siècles,
                    séché 9 mois à l'air libre pour des propriétés incomparables.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <ProductFilters />
                </aside>

                {/* Mobile Filter Trigger */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="lg:hidden w-full flex gap-2 mb-4">
                            <SlidersHorizontal className="h-4 w-4" /> Filtres
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] overflow-y-auto">
                        <div className="mt-6">
                            <ProductFilters />
                        </div>
                    </SheetContent>
                </Sheet>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* SEO Content */}
                    <div className="mt-16 pt-8 border-t border-stone-200">
                        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
                            Les bienfaits du savon d'Alep
                        </h2>
                        <div className="prose prose-stone max-w-none text-stone-600">
                            <p>
                                Le savon d'Alep est reconnu pour ses propriétés dermatologiques exceptionnelles.
                                Riche en huile de baie de laurier aux vertus antiseptiques, il est idéal pour les peaux
                                sensibles, l'eczéma, le psoriasis, l'acné et les mycoses.
                            </p>
                            <p>
                                Sans colorant, sans parfum de synthèse et sans graisse animale, nos savons sont
                                100% naturels, biodégradables et respectueux de l'environnement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
