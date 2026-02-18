import { getFeaturedProducts, getPromoProducts } from "@/data/products";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeContent } from "@/components/home/HomeContent";

export default function Home() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const promoProducts = getPromoProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Animated Content Sections */}
      <HomeContent
        featuredProducts={featuredProducts}
        promoProducts={promoProducts}
      />
    </div>
  );
}
