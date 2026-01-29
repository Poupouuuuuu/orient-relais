import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, ShoppingBag } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center max-w-lg">
                {/* Decorative Element */}
                <div className="relative mb-8">
                    <span className="text-[180px] font-serif font-bold text-stone-100 select-none">404</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                            <span className="text-5xl">🧼</span>
                        </div>
                    </div>
                </div>

                <h1 className="font-serif text-3xl font-bold text-stone-900 mb-4">
                    Oups ! Page introuvable
                </h1>
                <p className="text-stone-600 mb-8 leading-relaxed">
                    Cette page semble avoir disparu comme une bulle de savon...
                    Pas de panique, notre boutique regorge de trésors à découvrir !
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/">
                        <Button className="bg-primary hover:bg-orange-600 text-white gap-2">
                            <Home className="h-4 w-4" /> Retour à l'accueil
                        </Button>
                    </Link>
                    <Link href="/boutique">
                        <Button variant="outline" className="gap-2">
                            <ShoppingBag className="h-4 w-4" /> Voir la boutique
                        </Button>
                    </Link>
                    <Link href="/recherche">
                        <Button variant="outline" className="gap-2">
                            <Search className="h-4 w-4" /> Rechercher
                        </Button>
                    </Link>
                </div>

                {/* Popular Categories */}
                <div className="mt-12 pt-8 border-t border-stone-200">
                    <p className="text-sm text-stone-500 mb-4">Catégories populaires</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <Link href="/categorie/savons" className="px-4 py-2 bg-stone-100 rounded-full text-sm text-stone-700 hover:bg-stone-200 transition-colors">
                            Savons d'Alep
                        </Link>
                        <Link href="/categorie/complements-alimentaires" className="px-4 py-2 bg-stone-100 rounded-full text-sm text-stone-700 hover:bg-stone-200 transition-colors">
                            Compléments
                        </Link>
                        <Link href="/categorie/huiles-essentielles" className="px-4 py-2 bg-stone-100 rounded-full text-sm text-stone-700 hover:bg-stone-200 transition-colors">
                            Huiles Essentielles
                        </Link>
                        <Link href="/categorie/coffrets" className="px-4 py-2 bg-stone-100 rounded-full text-sm text-stone-700 hover:bg-stone-200 transition-colors">
                            Coffrets
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
