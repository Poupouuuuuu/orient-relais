import { notFound } from "next/navigation";
import { ALL_PRODUCTS, CATEGORIES, Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { CategoryProductGrid } from "@/components/shop/CategoryProductGrid";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug;
    const category = CATEGORIES.find(c => c.slug === slug);

    if (!category) {
        return { title: "Catégorie introuvable | Orient Relais" };
    }

    return {
        title: `${category.title} | Orient Relais - Boutique Bio`,
        description: category.description || `Découvrez notre sélection de ${category.title.toLowerCase()} bio et naturels. Livraison offerte dès 39€.`,
    };
}

interface CategoryConfig {
    title: string;
    description: string;
    bannerImage: string;
    products: Product[];
}

function getCategoryConfig(slug: string): CategoryConfig | null {
    const configs: Record<string, Omit<CategoryConfig, 'products'>> = {
        savons: {
            title: "Nos Savons d'Alep Bio",
            description: "Découvrez l'authentique savon d'Alep, ancêtre de tous les savons durs. Saponifié au chaudron selon la méthode traditionnelle depuis des siècles.",
            bannerImage: "/bento-soap.png"
        },
        "huiles-essentielles": {
            title: "Huiles Essentielles Bio",
            description: "Des huiles essentielles 100% pures et naturelles Terra Etica pour votre bien-être au quotidien.",
            bannerImage: "/images/categories/Huiles essentiels.webp"
        },
        huiles: { // Alias
            title: "Huiles Essentielles Bio",
            description: "Des huiles essentielles 100% pures et naturelles Terra Etica pour votre bien-être au quotidien.",
            bannerImage: "/images/categories/Huiles essentiels.webp"
        },
        "complements-alimentaires": {
            title: "Compléments Alimentaires",
            description: "Plantes ayurvédiques et produits de la ruche pour renforcer naturellement votre vitalité.",
            bannerImage: "/images/categories/Compléments alimentaires.webp"
        },
        ayurveda: { // Alias
            title: "Compléments Alimentaires",
            description: "Plantes ayurvédiques et produits de la ruche pour renforcer naturellement votre vitalité.",
            bannerImage: "/images/categories/Compléments alimentaires.webp"
        },
        coffrets: {
            title: "Coffrets Cadeaux",
            description: "Offrez le meilleur de l'Orient avec nos coffrets soigneusement composés.",
            bannerImage: "/images/categories/Coffrets.webp"
        },
        soins: {
            title: "Soins & Cosmétiques",
            description: "Baumes, crèmes et soins naturels pour le corps.",
            bannerImage: "/products/baume-soin-coco.png"
        },
        accessoires: {
            title: "Accessoires",
            description: "Accessoires naturels pour vos rituels beauté.",
            bannerImage: "/products/sac-savon.jpg"
        }
    };

    // Direct match
    if (configs[slug]) {
        const categorySlug = slug === "huiles" ? "huiles-essentielles" :
            slug === "ayurveda" ? "complements-alimentaires" : slug;
        const products = ALL_PRODUCTS.filter(p => p.category === categorySlug);
        return { ...configs[slug], products };
    }

    // Try to find in CATEGORIES
    const category = CATEGORIES.find(c => c.slug === slug);
    if (category) {
        const products = ALL_PRODUCTS.filter(p => p.category === slug);
        return {
            title: category.title,
            description: category.description,
            bannerImage: category.image || "/hero.png",
            products
        };
    }

    return null;
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const config = getCategoryConfig(slug);

    if (!config || config.products.length === 0) {
        notFound();
    }

    const { title, description, bannerImage, products } = config;
    const normalizedSlug = slug === "huiles" ? "huiles-essentielles" :
        slug === "ayurveda" ? "complements-alimentaires" : slug;

    return (
        <div className="flex flex-col">
            {/* Immersive Hero Banner */}
            <div className="relative h-[45vh] min-h-[350px] w-full overflow-hidden flex items-center justify-center">
                <Image
                    src={bannerImage}
                    alt={title}
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/40 to-stone-900/20" />
                {/* Animated Gold Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-radial from-primary/15 via-primary/5 to-transparent blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <span className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primary/40 bg-primary/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/20">
                        Collection Exclusive
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        {title}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-100 font-light leading-relaxed drop-shadow-sm">
                        {description}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Main Content - CategoryProductGrid handles both filters and grid */}
                    <div className="flex-1 order-2 lg:order-1">
                        <CategoryProductGrid
                            category={normalizedSlug}
                            products={products}
                            productCount={products.length}
                        />
                    </div>

                    {/* Sidebar Promos - Only visible on desktop */}
                    <aside className="hidden lg:block w-72 flex-shrink-0 order-1 lg:order-2 space-y-6">
                        {/* Contact Promo */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-stone-900 to-stone-800 p-6 rounded-2xl text-center shadow-lg group sticky top-24">
                            <div className="absolute inset-0 opacity-5" style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
                                backgroundSize: '16px 16px',
                            }} />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-primary/30 blur-3xl" />
                            <div className="relative z-10">
                                <div className="h-14 w-14 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-primary/30">
                                    <MessageCircle className="h-6 w-6" />
                                </div>
                                <h4 className="font-serif font-bold text-white mb-2">Besoin de conseils ?</h4>
                                <p className="text-sm text-stone-300 mb-4">Notre équipe vous guide dans le choix de vos produits.</p>
                                <Button variant="outline" className="w-full text-xs border-primary/50 text-primary hover:bg-primary hover:text-white transition-all" asChild>
                                    <Link href="/contact">Contactez-nous <ArrowRight className="h-3 w-3 ml-1" /></Link>
                                </Button>
                            </div>
                        </div>

                        {/* Best-seller callout */}
                        <div className="bg-gradient-to-br from-amber-50/50 to-stone-50 p-5 rounded-2xl border border-primary/10 shadow-sm">
                            <div className="flex items-center gap-2 text-primary mb-3">
                                <Sparkles className="h-4 w-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Best-Sellers</span>
                            </div>
                            <p className="text-sm text-stone-600 mb-3">Découvrez nos produits les plus populaires.</p>
                            <Link href="/boutique" className="text-sm font-medium text-primary hover:text-amber-600 flex items-center gap-1 transition-colors">
                                Voir tout <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
