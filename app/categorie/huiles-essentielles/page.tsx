import { ProductFilters } from "@/components/shop/ProductFilters";
import { ProductCard } from "@/components/shop/ProductCard";
import { HUILES_ESSENTIELLES, CATEGORIES } from "@/data/products";

export const metadata = {
    title: "Huiles Essentielles Bio | Orient Relais",
    description: "Huiles essentielles 100% pures et naturelles Terra Etica. Ravintsara, Eucalyptus, Niaouli et plus.",
};

export default function HuilesEssentiellesPage() {
    const category = CATEGORIES.find(c => c.slug === "huiles-essentielles");

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="font-serif text-4xl font-bold text-stone-900 mb-2">{category?.title}</h1>
                <p className="text-stone-500">{category?.description}</p>
            </div>

            <div className="flex gap-8">
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <ProductFilters />
                </aside>

                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {HUILES_ESSENTIELLES.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={{
                                    id: product.id,
                                    title: product.title,
                                    price: product.price,
                                    image: product.image,
                                    rating: product.rating,
                                    reviews: product.reviews,
                                    badges: product.badges,
                                    slug: product.slug,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
