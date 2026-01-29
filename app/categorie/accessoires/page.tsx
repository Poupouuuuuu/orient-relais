import { ProductFilters } from "@/components/shop/ProductFilters";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ACCESSOIRES, CATEGORIES } from "@/data/products";

export const metadata = {
    title: "Accessoires | Orient Relais",
    description: "Sacs à savon, sprays d'ambiance et accessoires naturels pour votre rituel bien-être.",
};

export default function AccessoiresPage() {
    const category = CATEGORIES.find(c => c.slug === "accessoires");
    const products = ACCESSOIRES.map(p => ({
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
            <div className="mb-8">
                <h1 className="font-serif text-4xl font-bold text-stone-900 mb-2">{category?.title}</h1>
                <p className="text-stone-500">{category?.description}</p>
            </div>

            <div className="flex gap-8">
                {/* Sidebar Filters - Desktop */}
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <ProductFilters />
                </aside>

                {/* Mobile Filters */}
                <div className="lg:hidden mb-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="w-full">
                                <SlidersHorizontal className="h-4 w-4 mr-2" />
                                Filtres
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-80">
                            <ProductFilters />
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Products Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
