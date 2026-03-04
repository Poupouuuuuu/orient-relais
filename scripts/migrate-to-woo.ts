import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { ALL_PRODUCTS } from "../data/products.backup";

// Assuming NEXT_PUBLIC_WOOCOMMERCE_URL, WC_CONSUMER_KEY, WC_CONSUMER_SECRET are in .env.local
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const client = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WOOCOMMERCE_URL || "https://orient-relais.com",
    consumerKey: process.env.WC_CONSUMER_KEY || "",
    consumerSecret: process.env.WC_CONSUMER_SECRET || "",
    version: "wc/v3",
});

const categoryMap: Record<string, string> = {
    "savons": "savons-dalep",
    "huiles-essentielles": "huiles-essentielles",
    "complements-alimentaires": "complements",
    "coffrets": "coffrets",
    "soins": "soins-et-beaute",
    "accessoires": "soins-et-beaute", // Mapping accessoires to soins et beauté
};

async function migrate() {
    console.log("Fetching categories from WooCommerce...");
    const { data: categories } = await client.get("products/categories", { per_page: 100 });
    const catSlugToId: Record<string, number> = {};
    for (const cat of categories) {
        catSlugToId[cat.slug] = cat.id;
    }

    console.log("Found categories:", Object.keys(catSlugToId));

    for (const p of ALL_PRODUCTS) {
        console.log(`\nProcessing ${p.title} (${p.slug})...`);
        const targetCatSlug = categoryMap[p.category] || p.category;
        const catId = catSlugToId[targetCatSlug];

        if (!catId) {
            console.warn(`  ⚠️ Category not found for ${targetCatSlug} (Product: ${p.title})`);
        } else {
            console.log(`  ✓ Matched category: ${targetCatSlug} (ID: ${catId})`);
        }

        const productData = {
            name: p.title,
            type: "simple",
            regular_price: String(p.originalPrice || p.price),
            sale_price: p.originalPrice ? String(p.price) : "",
            description: p.description,
            short_description: p.shortDescription || "",
            status: "publish",
            categories: catId ? [{ id: catId }] : [],
            // No images sent, as requested by the user
        };

        try {
            // Check if product exists already
            const { data: existing } = await client.get("products", { slug: p.slug });
            if (existing && existing.length > 0) {
                console.log(`  Updating existing product (ID: ${existing[0].id})...`);
                await client.put(`products/${existing[0].id}`, productData);
                console.log(`  ✓ Updated!`);
            } else {
                console.log(`  Creating new product...`);
                await client.post("products", productData);
                console.log(`  ✓ Created!`);
            }
        } catch (e: any) {
            console.error(`  ❌ Error processing ${p.slug}:`, e.response?.data || e.message);
        }
    }
    console.log("\nMigration completed!");
}

migrate();
