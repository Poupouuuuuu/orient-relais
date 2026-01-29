import { notFound } from "next/navigation";
import { ProductFilters } from "@/components/shop/ProductFilters";
import { ProductCard, ProductProps } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SAVONS, HUILES_ESSENTIELLES, ALL_PRODUCTS, CATEGORIES, COMPLEMENTS } from "@/data/products";
import Image from "next/image";

// Helper to convert Product to ProductProps
function toProductProps(p: typeof SAVONS[0]): ProductProps {
    return {
        id: p.id,
        title: p.title,
        price: p.price,
        image: p.image,
        rating: p.rating,
        reviews: p.reviews,
        badges: p.badges,
        slug: p.slug,
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    let products: ProductProps[] = [];
    let title = "";
    let description = "";
    let bannerImage = "";

    switch (slug) {
        case "savons":
            products = SAVONS.map(toProductProps);
            title = "Nos Savons d'Alep Bio";
            description = "Découvrez l'authentique savon d'Alep, ancêtre de tous les savons durs. Saponifié au chaudron selon la méthode traditionnelle depuis des siècles.";
            bannerImage = "/bento-soap.png";
            break;
        case "huiles":
        case "huiles-essentielles":
            products = HUILES_ESSENTIELLES.map(toProductProps);
            title = "Huiles Essentielles Bio";
            description = "Des huiles essentielles 100% pures et naturelles Terra Etica pour votre bien-être au quotidien.";
            bannerImage = "/blog-winter.png"; // Placeholder
            break;
        case "ayurveda":
        case "complements-alimentaires":
            products = COMPLEMENTS.map(toProductProps);
            title = "Compléments Alimentaires";
            description = "Plantes ayurvédiques et produits de la ruche pour renforcer naturellement votre vitalité.";
            bannerImage = "/bento-spices.png";
            break;
        case "coffrets":
            const coffrets = ALL_PRODUCTS.filter(p => p.category === "coffrets").map(toProductProps);
            products = coffrets;
            title = "Coffrets Cadeaux";
            description = "Offrez le meilleur de l'Orient avec nos coffrets soigneusement composés.";
            bannerImage = "/blog-ayurveda.png";
            break;
        default:
            const category = CATEGORIES.find(c => c.slug === slug);
            if (category) {
                products = ALL_PRODUCTS.filter(p => p.category === slug).map(toProductProps);
                title = category.title;
                description = category.description;
                bannerImage = "/hero.png";
            } else {
                notFound();
            }
    }

    if (products.length === 0) {
        notFound();
    }

    return (
        <div className="flex flex-col">
            {/* Immersive Hero Banner */}
            <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden flex items-center justify-center">
                <Image
                    src={bannerImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <span className="inline-block px-3 py-1 mb-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest">
                        Collection Exclusive
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
                        {title}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-100 font-light leading-relaxed drop-shadow-sm">
                        {description}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Desktop Sidebar */}
                    <aside className="hidden lg:block w-72 flex-shrink-0 space-y-8">
                        <div>
                            <h3 className="font-serif text-lg font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200">
                                Filtres
                            </h3>
                            <ProductFilters />
                        </div>

                        {/* Featured Category Promo (Sidebar) */}
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 text-center">
                            <h4 className="font-serif font-bold text-stone-900 mb-2">Besoin de conseils ?</h4>
                            <p className="text-sm text-stone-600 mb-4">Notre équipe vous guide dans le choix de votre savon d'Alep.</p>
                            <Button variant="outline" className="w-full text-xs" asChild>
                                <a href="/contact">Contactez-nous</a>
                            </Button>
                        </div>
                    </aside>

                    {/* Mobile Filter Trigger */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="lg:hidden w-full flex gap-2 mb-6">
                                <SlidersHorizontal className="h-4 w-4" /> Filtrer les produits
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
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-sm text-stone-500">
                                <span className="font-bold text-stone-900">{products.length}</span> produits trouvés
                            </p>
                            {/* Sort Dropdown could go here */}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
