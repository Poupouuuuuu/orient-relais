import { getFeaturedWooProducts, getPromoWooProducts } from "@/lib/woocommerce";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeContent } from "@/components/home/HomeContent";
import { TrustBadges } from "@/components/home/TrustBadges";
import { StorySection } from "@/components/home/StorySection";

export default async function Home() {
  const featuredProducts = (await getFeaturedWooProducts()).slice(0, 4);
  const promoProducts = await getPromoWooProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Badges - Reassurance */}
      <TrustBadges />

      {/* Storytelling Section */}
      <StorySection />

      {/* Animated Content Sections */}
      <HomeContent
        featuredProducts={featuredProducts}
        promoProducts={promoProducts}
      />
    </div>
  );
}
