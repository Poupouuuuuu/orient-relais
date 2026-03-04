import { WooProduct } from "@/lib/woocommerce-types";
import { MOCK_PRODUCTS } from "@/data/products-woo";

/**
 * Mock Client for WooCommerce
 * This mimics the signature of the real @woocommerce/woocommerce-rest-api client
 * but uses local static data.
 */

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchWooProducts(page = 1, perPage = 20): Promise<WooProduct[]> {
    await delay(500); // Simulate API latency
    return MOCK_PRODUCTS.slice((page - 1) * perPage, page * perPage);
}

export async function fetchWooProductBySlug(slug: string): Promise<WooProduct | null> {
    await delay(300);
    const product = MOCK_PRODUCTS.find((p) => p.slug === slug);
    return product || null;
}

export async function fetchWooProductsByCategory(categorySlug: string): Promise<WooProduct[]> {
    await delay(300);
    
    // Normalize and remove accents for comparison
    const removeAccents = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const normalizedCategory = removeAccents(categorySlug.toLowerCase());

    // Handle aliases
    let searchSlug = normalizedCategory;
    if (normalizedCategory === "huiles") searchSlug = "huiles-essentielles";
    if (normalizedCategory === "ayurveda") searchSlug = "complements-alimentaires";

    return MOCK_PRODUCTS.filter(p =>
        p.categories.some(c => 
            removeAccents(c.slug) === searchSlug || 
            removeAccents(c.name.toLowerCase()).replace(/ /g, "-") === searchSlug
        )
    );
}

export async function getFeaturedWooProducts(): Promise<WooProduct[]> {
    await delay(300);
    // In mock data, look for "Best-seller" tag effectively acting as featured
    return MOCK_PRODUCTS.filter(p => p.tags.some(t => t.name === "Best-seller"));
}

export async function getPromoWooProducts(): Promise<WooProduct[]> {
    await delay(300);
    return MOCK_PRODUCTS.filter(p => p.on_sale || p.tags.some(t => t.name.toLowerCase().includes("promo")));
}

export async function searchWooProducts(query: string): Promise<WooProduct[]> {
    await delay(400);
    const lowerQuery = query.toLowerCase();
    if (!lowerQuery) return [];

    return MOCK_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.short_description.toLowerCase().includes(lowerQuery) ||
        p.categories.some(c => c.name.toLowerCase().includes(lowerQuery)) ||
        p.tags.some(t => t.name.toLowerCase().includes(lowerQuery))
    );
}

// Default export mimicking the class instance
const mockClient = {
    get: async (endpoint: string, params?: any) => {
        await delay(500);

        if (endpoint === "products") {
            if (params?.slug) {
                const product = MOCK_PRODUCTS.find(p => p.slug === params.slug);
                return { data: product ? [product] : [] };
            }
            if (params?.category) {
                return {
                    data: MOCK_PRODUCTS.filter(p =>
                        p.categories.some(c => c.id.toString() === params.category || c.slug === params.category)
                    )
                };
            }
            if (params?.search) {
                return { data: await searchWooProducts(params.search) };
            }
            return { data: MOCK_PRODUCTS };
        }

        return { data: [] };
    }
};

export default mockClient;
