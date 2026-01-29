import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Lock, Truck, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/shop/ProductCard";
import { getFeaturedProducts, getPromoProducts } from "@/data/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const promoProducts = getPromoProducts().slice(0, 3);

  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-stone-100 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Savons d'Alep bio et ingrédients naturels authentiques"
            fill
            className="object-cover opacity-90 brightness-90 animate-in fade-in zoom-in duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-0 flex flex-col items-start gap-6 max-w-5xl mr-auto ml-4 md:ml-12 pt-12">
          <span className="inline-block rounded-full bg-primary/90 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md shadow-lg shadow-orange-900/20 border border-white/20 animate-in slide-in-from-bottom-4 duration-700 delay-100">
            Livraison OFFERTE dès 39€
          </span>
          <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl drop-shadow-lg animate-in slide-in-from-bottom-6 duration-700 delay-200">
            L'Authenticité du <br />
            <span className="text-primary italic">Soin Ancestral.</span>
          </h1>
          <p className="max-w-xl text-lg text-stone-100 md:text-2xl font-light leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-300">
            Découvrez nos savons d'Alep véritables, huiles essentielles bio
            et compléments alimentaires naturels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-in slide-in-from-bottom-10 duration-700 delay-400">
            <Link href="/boutique">
              <Button size="lg" className="rounded-full bg-primary text-white hover:bg-orange-500 font-semibold px-8 h-14 text-lg shadow-lg shadow-orange-500/20 hover:scale-105 transition-all">
                Découvrir la Boutique
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid - Nos Univers */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Collections</span>
          <h2 className="mt-2 font-serif text-4xl font-bold text-stone-900">Nos Univers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px]">
          {/* Grande Carte - Savon */}
          <Link href="/categorie/savons" className="group md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl bg-white border border-stone-200 min-h-[300px]">
            <Image
              src="/bento-soap.png"
              alt="Texture Savon d'Alep"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-serif font-bold text-white mb-2">Savons d'Alep Bio</h3>
              <p className="text-stone-200 text-sm">L'or vert de l'Orient, purifiant et apaisant.</p>
            </div>
          </Link>

          {/* Carte Moyenne - Compléments */}
          <Link href="/categorie/complements-alimentaires" className="group md:col-span-2 md:row-span-1 relative overflow-hidden rounded-2xl bg-white border border-stone-200 min-h-[200px]">
            <Image
              src="/bento-spices.png"
              alt="Compléments Alimentaires Bio"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Compléments Alimentaires</h3>
              <p className="text-stone-200 text-sm">Moringa, Nigelle, Gingembre... Naturellement efficaces.</p>
            </div>
          </Link>

          {/* Petite Carte - Huiles Essentielles */}
          <Link href="/categorie/huiles-essentielles" className="group md:col-span-1 md:row-span-1 relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-stone-200 hover:shadow-lg transition-all min-h-[150px]">
            <div className="h-full w-full flex flex-col p-6 items-center justify-center text-center z-10 relative">
              <div className="h-16 w-16 mb-4 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-800">Huiles Essentielles</h3>
              <p className="text-stone-500 text-xs mt-1">Terra Etica</p>
            </div>
          </Link>

          {/* Petite Carte - Coffrets */}
          <Link href="/categorie/coffrets" className="group md:col-span-1 md:row-span-1 relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 border border-stone-700 hover:shadow-lg transition-all min-h-[150px]">
            <div className="h-full w-full flex flex-col p-6 items-center justify-center text-center z-10 relative">
              <div className="h-16 w-16 mb-4 rounded-full bg-stone-700 flex items-center justify-center text-orange-400">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Coffrets Cadeaux</h3>
              <p className="text-stone-400 text-xs mt-1">Najel & Mer Morte</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Best-Sellers Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Incontournables</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-stone-900">Nos Best-Sellers</h2>
          </div>
          <Link href="/boutique" className="hidden md:flex items-center gap-2 text-primary hover:underline font-medium">
            Voir tout <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
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
      </section>

      {/* Promo Section */}
      {promoProducts.length > 0 && (
        <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-12 border-y border-orange-100">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-orange-600">Offres Spéciales</span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-stone-900">Promotions en Cours</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {promoProducts.map((product) => (
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
        </section>
      )}

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Avis Clients</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-stone-900">Ce qu'ils en pensent</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            name="Marie L."
            location="Paris"
            rating={5}
            text="Le savon d'Alep a transformé ma peau ! Après des années d'eczéma, j'ai enfin trouvé un produit qui me convient. Livraison rapide et produit de qualité."
          />
          <TestimonialCard
            name="Thomas B."
            location="Lyon"
            rating={5}
            text="Excellent rapport qualité-prix. Les huiles essentielles Terra Etica sont pures et efficaces. Je recommande les yeux fermés."
          />
          <TestimonialCard
            name="Sophie M."
            location="Nantes"
            rating={5}
            text="Le coffret Najel était parfait pour offrir à ma mère. Emballage soigné, produits authentiques. Merci Orient Relais !"
          />
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="bg-stone-50 py-16 border-y border-stone-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ReassuranceItem icon={Leaf} title="Certifié Bio" text="Ingrédients 100% naturels" />
            <ReassuranceItem icon={ShieldCheck} title="Fabrication Artisanale" text="Savoir-faire ancestral" />
            <ReassuranceItem icon={Lock} title="Paiement Sécurisé" text="CB, Google Pay, Stripe" />
            <ReassuranceItem icon={Truck} title="Livraison Rapide" text="Offerte dès 39€" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ReassuranceItem({ icon: Icon, title, text }: { icon: React.ElementType, title: string, text: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="font-serif font-bold text-stone-900 text-lg">{title}</h4>
      <p className="text-sm text-stone-500">{text}</p>
    </div>
  );
}

function TestimonialCard({ name, location, rating, text }: { name: string, location: string, rating: number, text: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-amber-400">★</span>
        ))}
      </div>
      <p className="text-stone-600 leading-relaxed mb-4 italic">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center text-primary font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-stone-900">{name}</p>
          <p className="text-xs text-stone-500">{location}</p>
        </div>
      </div>
    </div>
  );
}
