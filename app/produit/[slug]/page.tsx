import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductInfo } from "@/components/shop/ProductInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/shop/ProductCard";
import { ProductReviews } from "@/components/shop/ProductReviews";
import { BenefitCard } from "@/components/shop/BenefitCard";
import { parseBenefits } from "@/lib/benefits";
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
            <nav className="flex items-center gap-2 text-sm text-stone-500 mb-8 overflow-x-auto whitespace-nowrap px-4 py-3 bg-stone-50/50 rounded-xl border border-stone-100">
                <Link href="/" className="hover:text-primary transition-colors font-medium">Accueil</Link>
                <ChevronRight className="h-4 w-4 text-primary/40 flex-shrink-0" />
                <Link href="/boutique" className="hover:text-primary transition-colors">Boutique</Link>
                <ChevronRight className="h-4 w-4 text-primary/40 flex-shrink-0" />
                <Link href={`/categorie/${product.category}`} className="hover:text-primary transition-colors">{category?.title || product.category}</Link>
                <ChevronRight className="h-4 w-4 text-primary/40 flex-shrink-0" />
                <span className="text-primary font-semibold truncate max-w-[200px]">{product.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                {/* Gallery */}
                <ProductGallery images={images} />

                {/* Info & Conversion */}
                <ProductInfo product={product} />
            </div>

            {/* Content Tabs */}
            <div className="mb-20">
                <Tabs defaultValue="description" className="w-full">
                    <TabsList className="w-full justify-start border-b-2 border-stone-100 rounded-none bg-transparent p-0 h-auto gap-8 overflow-x-auto">
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
                        {product.characteristics && (
                            <TabsTrigger value="caracteristiques" className="rounded-none border-b-2 border-transparent px-0 py-3 font-serif text-lg text-stone-500 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-stone-800 transition-colors">
                                Caractéristiques
                            </TabsTrigger>
                        )}
                        <TabsTrigger value="avis" className="rounded-none border-b-2 border-transparent px-0 py-3 font-serif text-lg text-stone-500 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-stone-800 transition-colors">
                            Avis ({product.reviews})
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="description" className="pt-8">
                        <div className="prose prose-stone max-w-none prose-p:leading-relaxed prose-lg prose-headings:font-serif prose-h3:text-2xl prose-h4:text-lg prose-h4:text-primary">
                            <div dangerouslySetInnerHTML={{ __html: product.description }} />

                            <h4 className="text-sm font-serif font-bold text-stone-900 uppercase tracking-widest mb-6">
                                Certifications
                            </h4>
                            <div className="flex flex-wrap gap-8 items-center opacity-90">
                                {product.certifications?.map((cert) => {
                                    const certMap: Record<string, { src: string; alt: string; height: string }> = {
                                        "bio": { src: "/images/certifications/label-bio.png", alt: "Cosmétique Bio", height: "h-12" },
                                        "cosmos": { src: "/images/certifications/label-cosmos.png", alt: "Cosmos Organic", height: "h-10" },
                                        "ecocert": { src: "/images/certifications/label-ecocert.png", alt: "Ecocert", height: "h-10" },
                                        "france": { src: "/images/certifications/label-france.png", alt: "Fabriqué en France", height: "h-14" },
                                        "ab": { src: "/images/certifications/label-ab.png", alt: "AB Agriculture Biologique", height: "h-10" },
                                        "gelules": { src: "/images/certifications/label-gelules.png", alt: "Gélules Végétales", height: "h-12" },
                                        "vegan": { src: "/images/certifications/label-vegan.png", alt: "Vegan & Ayurvédique", height: "h-12" },
                                    };
                                    const c = certMap[cert];
                                    return c ? (
                                        <div key={cert} className="transition-all duration-300 hover:scale-110 ease-out cursor-help" title={c.alt}>
                                            <Image src={c.src} alt={c.alt} width={80} height={60} className={`w-auto ${c.height} object-contain`} />
                                        </div>
                                    ) : null;
                                })}
                            </div>

                            {product.details && (
                                <div className="mt-10 mb-8 border-t border-stone-100 pt-8">
                                    <h4 className="text-sm font-serif font-bold text-stone-900 uppercase tracking-widest mb-6">
                                        Plus d'informations
                                    </h4>
                                    <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-100">
                                        <table className="w-full text-sm text-left">
                                            <tbody>
                                                {Object.entries(product.details).map(([key, value], i) => (
                                                    <tr key={key} className={`border-b border-stone-100 last:border-0 ${i % 2 === 0 ? "bg-stone-50/50" : "bg-white"}`}>
                                                        <th className="py-3 px-6 font-medium text-stone-900 w-1/3">{key}</th>
                                                        <td className="py-3 px-6 text-stone-600">{value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {product.ingredients && (
                                <div className="mt-8 p-6 bg-stone-50 rounded-2xl border border-stone-200">
                                    <h4 className="flex items-center gap-2 !mt-0">
                                        <span>🧪</span> Composition
                                    </h4>
                                    <ul className="!mb-0">
                                        {product.ingredients.map((ing, i) => (
                                            <li key={i}>{ing}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="bienfaits" className="pt-8">
                        {product.benefits && product.benefits.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {parseBenefits(product.benefits).map((benefit, i) => (
                                    <BenefitCard
                                        key={i}
                                        category={benefit.category}
                                        items={benefit.items}
                                        icon={benefit.icon}
                                        color={benefit.color}
                                    />
                                ))}
                            </div>
                        )}

                        {product.detailedBenefits && (
                            <div className={`prose prose-stone max-w-none prose-headings:font-serif prose-h4:text-lg prose-h4:text-primary prose-li:marker:text-primary ${product.benefits && product.benefits.length > 0 ? "mt-12 pt-8 border-t border-stone-100" : ""}`}>
                                <div dangerouslySetInnerHTML={{ __html: product.detailedBenefits }} />
                            </div>
                        )}

                        {(!product.benefits || product.benefits.length === 0) && !product.detailedBenefits && (
                            <p className="text-stone-500">Information non disponible pour ce produit.</p>
                        )}
                    </TabsContent>

                    {product.usage && (
                        <TabsContent value="conseils" className="pt-8">
                            <div className="prose prose-stone max-w-none prose-headings:font-serif prose-h4:text-lg prose-h4:text-primary prose-ol:space-y-2 prose-li:marker:text-primary">
                                <div dangerouslySetInnerHTML={{ __html: product.usage }} />
                            </div>
                        </TabsContent>
                    )}

                    {product.characteristics && (
                        <TabsContent value="caracteristiques" className="pt-8">
                            <div className="prose prose-stone max-w-none prose-headings:font-serif prose-h4:text-lg prose-h4:text-primary prose-ul:space-y-2 prose-li:marker:text-primary">
                                <div dangerouslySetInnerHTML={{ __html: product.characteristics }} />
                            </div>
                        </TabsContent>
                    )}

                    <TabsContent value="avis" className="pt-8">
                        <ProductReviews rating={product.rating} count={product.reviews} />
                    </TabsContent>
                </Tabs>
            </div>

            {/* Cross-Selling */}
            {relatedProducts.length > 0 && (
                <div className="relative py-16">
                    {/* Decorative top line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                            Vous pourriez aussi aimer
                        </span>
                        <h2 className="font-serif text-3xl font-bold text-stone-900 mt-4">Complétez votre rituel</h2>
                        <p className="text-stone-500 mt-2 max-w-md mx-auto">Nos experts ont sélectionné ces produits pour accompagner votre achat.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                        <Link href="/boutique" className="flex flex-col items-center justify-center bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl border border-stone-700 text-stone-300 text-sm p-8 text-center hover:border-primary/50 transition-all group">
                            {/* Gold glow */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform border border-primary/30">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                            </div>
                            <span className="font-serif font-bold text-white">Voir plus</span>
                            <span className="text-xs text-stone-400 mt-1">Découvrir la boutique</span>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
