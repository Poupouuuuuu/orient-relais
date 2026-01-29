import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductInfoDynamic } from "@/components/shop/ProductInfoDynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/shop/ProductCard";
import { getProductBySlug, ALL_PRODUCTS, CATEGORIES } from "@/data/products";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    // Get related products from same category
    const relatedProducts = ALL_PRODUCTS
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3)
        .map(p => ({
            id: p.id,
            title: p.title,
            price: p.price,
            image: p.image,
            rating: p.rating,
            reviews: p.reviews,
            badges: p.badges,
            slug: p.slug,
        }));

    const category = CATEGORIES.find(c => c.slug === product.category);
    const images = product.images || [product.image, product.image, product.image];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-stone-500 mb-8 overflow-x-auto whitespace-nowrap">
                <Link href="/" className="hover:text-primary">Accueil</Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/boutique" className="hover:text-primary">Boutique</Link>
                <ChevronRight className="h-4 w-4" />
                <Link href={`/categorie/${product.category}`} className="hover:text-primary">{category?.title || product.category}</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-stone-900 font-medium">{product.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                {/* Gallery */}
                <ProductGallery images={images} />

                {/* Info & Conversion */}
                <ProductInfoDynamic product={product} />
            </div>

            {/* Content Tabs */}
            <div className="mb-20">
                <Tabs defaultValue="description" className="w-full">
                    <TabsList className="w-full justify-start border-b border-stone-200 rounded-none bg-transparent p-0 h-auto gap-8 overflow-x-auto">
                        <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent px-0 py-3 font-serif text-lg text-stone-500 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-stone-800 transition-colors">
                            Description
                        </TabsTrigger>
                        <TabsTrigger value="bienfaits" className="rounded-none border-b-2 border-transparent px-0 py-3 font-serif text-lg text-stone-500 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-stone-800 transition-colors">
                            Bienfaits
                        </TabsTrigger>
                        {product.usage && (
                            <TabsTrigger value="conseils" className="rounded-none border-b-2 border-transparent px-0 py-3 font-serif text-lg text-stone-500 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-stone-800 transition-colors">
                                Conseils d'utilisation
                            </TabsTrigger>
                        )}
                    </TabsList>

                    <TabsContent value="description" className="pt-8">
                        <div className="prose prose-stone max-w-none prose-p:leading-relaxed prose-lg">
                            <p>{product.description}</p>
                            {product.ingredients && (
                                <div className="mt-6">
                                    <h4>Composition :</h4>
                                    <ul>
                                        {product.ingredients.map((ing, i) => (
                                            <li key={i}>{ing}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="bienfaits" className="pt-8">
                        {product.benefits && product.benefits.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {product.benefits.map((benefit, i) => (
                                    <div key={i} className="bg-stone-50 p-4 rounded-xl text-center">
                                        <span className="text-primary font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-stone-500">Information non disponible pour ce produit.</p>
                        )}
                    </TabsContent>

                    {product.usage && (
                        <TabsContent value="conseils" className="pt-8">
                            <div className="prose prose-stone max-w-none">
                                <p>{product.usage}</p>
                            </div>
                        </TabsContent>
                    )}
                </Tabs>
            </div>

            {/* Cross-Selling */}
            {relatedProducts.length > 0 && (
                <div>
                    <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8">Complétez votre rituel</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                        <div className="flex items-center justify-center bg-stone-50 rounded-lg border border-dashed border-stone-200 text-stone-400 text-sm p-4 text-center">
                            D'autres trésors à venir...
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
