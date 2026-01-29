import { ProductCard } from "@/components/shop/ProductCard";
import { ProductFilters } from "@/components/shop/ProductFilters";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { ALL_PRODUCTS } from "@/data/products";

export const metadata = {
    title: "Boutique | Orient Relais - Produits Bio",
    description: "Découvrez tous nos produits bio : savons d'Alep, compléments alimentaires, huiles essentielles, coffrets cadeaux et accessoires.",
};

export default function BoutiquePage() {
    const products = ALL_PRODUCTS.map(p => ({
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
            <div className="flex flex-col md:flex-row gap-8">

                {/* Desktop Sidebar (Filters) */}
                <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 h-fit">
                    <ProductFilters />
                </aside>

                {/* Mobile Filters Drawer */}
                <div className="lg:hidden mb-6 flex justify-between items-center">
                    <h1 className="font-serif text-3xl font-bold text-stone-900">Notre Boutique</h1>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2">
                                <SlidersHorizontal className="h-4 w-4" />
                                Filtres
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                            <div className="py-6">
                                <ProductFilters />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="hidden lg:flex items-center justify-between mb-8">
                        <h1 className="font-serif text-3xl font-bold text-stone-900">Notre Boutique</h1>
                        <span className="text-stone-500 text-sm">{products.length} produits trouvés</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* SEO Block */}
                    <div className="mt-24 border-t border-stone-200 pt-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <h2 className="font-serif text-2xl font-bold text-stone-900">
                                Orient Relais - Votre Boutique Bio en Ligne
                            </h2>
                            <div className="text-stone-600 text-sm leading-relaxed space-y-4 text-justify md:text-center">
                                <p>
                                    Basé dans les Yvelines (78), Orient Relais vous propose une gamme de produits bio pour votre bien-être.
                                    Savons d'Alep authentiques fabriqués selon la méthode traditionnelle ancestrale,
                                    huiles essentielles 100% pures Terra Etica, compléments alimentaires naturels et coffrets cadeaux soigneusement composés.
                                </p>
                                <p>
                                    Tous nos produits sont sélectionnés avec soin auprès de marques de confiance comme DP Nature et Najel.
                                    Certifiés bio, sans ingrédients chimiques, respectueux des animaux et de l'environnement.
                                    Livraison offerte dès 39€ en France métropolitaine avec Mondial Relay.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
