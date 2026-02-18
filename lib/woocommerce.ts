
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// Initialize the WooCommerce Client
// We will use environment variables for security to prevent exposing keys in the client bundle
// Note: Direct API calls should ideally happen server-side (getStaticProps/getServerSideProps or API routes)
// to verify secrets are not exposed to the browser.

const client = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://votre-site-wordpress.com",
    consumerKey: process.env.WOOCOMMERCE_KEY || "ck_example",
    consumerSecret: process.env.WOOCOMMERCE_SECRET || "cs_example",
    version: "wc/v3",
});

/**
 * Fetch all products from WooCommerce
 */
export async function getWooProducts(perPage = 20) {
    try {
        const response = await client.get("products", {
            per_page: perPage,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching WooCommerce products:", error);
        return [];
    }
}

/**
 * Fetch a single product by ID
 */
export async function getWooProduct(id: number) {
    try {
        const response = await client.get(`products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        return null;
    }
}

export default client;
