import { ProductFilters } from "@/components/shop/ProductFilters";
import { ProductCard } from "@/components/shop/ProductCard";
import { COFFRETS, CATEGORIES } from "@/data/products";

export const metadata = {
    title: "Coffrets Cadeaux | Orient Relais",
    description: "Coffrets cadeaux bien-être à offrir ou se faire plaisir. Najel, Mer Morte et plus.",
};

export default function CoffretsPage() {
    const category = CATEGORIES.find(c => c.slug === "coffrets");

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
                        {COFFRETS.map((product) => (
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
