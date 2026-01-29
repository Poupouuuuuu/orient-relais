import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ARTICLES } from "@/data/articles";

export const metadata = {
    title: "Blog | Le Journal du Bien-être",
    description: "Découvrez nos articles sur le savon d'Alep, les huiles essentielles, les compléments alimentaires naturels et les rituels bien-être.",
};

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">Orient Relais</span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4 mt-2">Le Journal du Bien-être</h1>
                <p className="text-stone-600 text-lg">
                    Conseils, astuces et savoir-faire autour du savon d'Alep, des huiles essentielles et des produits naturels.
                </p>
            </div>

            {/* Featured Article */}
            <div className="mb-16">
                <Link href={`/blog/${ARTICLES[0].slug}`} className="group block bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-stone-100">
                            <Image
                                src={ARTICLES[0].image}
                                alt={ARTICLES[0].title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <Badge className="w-fit mb-4 bg-primary/10 text-primary border-none">
                                {ARTICLES[0].category}
                            </Badge>
                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-4 group-hover:text-primary transition-colors">
                                {ARTICLES[0].title}
                            </h2>
                            <p className="text-stone-600 leading-relaxed mb-6">
                                {ARTICLES[0].excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-stone-500">
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {ARTICLES[0].date}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {ARTICLES[0].readTime} lecture
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ARTICLES.slice(1).map((article) => (
                    <article key={article.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-all">
                        <Link href={`/blog/${article.slug}`} className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <Badge className="absolute top-4 left-4 bg-white/90 text-stone-900 border-none hover:bg-white backdrop-blur-sm">
                                {article.category}
                            </Badge>
                        </Link>

                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-4 text-xs text-stone-500 mb-3">
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {article.date}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {article.readTime} lect.
                                </div>
                            </div>

                            <h3 className="font-serif text-xl font-bold text-stone-900 mb-3 group-hover:text-primary transition-colors">
                                <Link href={`/blog/${article.slug}`}>
                                    {article.title}
                                </Link>
                            </h3>

                            <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-1">
                                {article.excerpt}
                            </p>

                            <Link href={`/blog/${article.slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                                Lire l'article <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-20 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 text-center border border-orange-100">
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">Restez informé(e)</h3>
                <p className="text-stone-600 mb-6 max-w-md mx-auto">
                    Recevez nos conseils bien-être et nos offres exclusives directement dans votre boîte mail.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Votre email"
                        className="flex-1 px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    );
}
