import { CategoryProductGrid } from "@/components/shop/CategoryProductGrid";
import { ALL_PRODUCTS } from "@/data/products";
import { Sparkles, ShoppingBag } from "lucide-react";

export const metadata = {
    title: "Boutique | Orient Relais - Produits Bio",
    description: "Découvrez tous nos produits bio : savons d'Alep, compléments alimentaires, huiles essentielles, coffrets cadeaux et accessoires.",
};

export default function BoutiquePage() {
    // Filter out products with price 0 or placeholder category
    const products = ALL_PRODUCTS.filter(p => p.price > 0 && p.category !== "tous");

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-10">
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-3">
                    <ShoppingBag className="h-4 w-4" /> Tous nos produits
                </span>
                <h1 className="font-serif text-4xl font-bold text-stone-900">Notre Boutique</h1>
            </div>

            {/* Product Grid with Filters */}
            <CategoryProductGrid
                category="all"
                products={products}
                productCount={products.length}
            />

            {/* SEO Block */}
            <div className="relative mt-24 pt-12 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="max-w-3xl mx-auto text-center space-y-4 relative">
                    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                        <Sparkles className="h-4 w-4" /> À propos
                    </span>
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
                            <span className="text-primary font-medium"> Livraison offerte dès 39€</span> en France métropolitaine avec Mondial Relay.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
