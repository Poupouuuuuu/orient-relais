import { WooProduct } from "@/lib/woocommerce-types";

export interface FilterOption {
    value: string;
    label: string;
    count?: number;
}

export interface FilterConfig {
    key: string;
    label: string;
    type: "checkbox" | "range";
    options?: FilterOption[];
    min?: number;
    max?: number;
}

export interface ActiveFilters {
    [key: string]: string[] | [number, number];
}

// Extracts unique values from attributes
export function extractAttributeValues(products: WooProduct[], attributeName: string): FilterOption[] {
    const counts = new Map<string, number>();

    products.forEach(p => {
        const attr = p.attributes.find(a => a.name === attributeName);
        if (attr) {
            attr.options.forEach(opt => {
                counts.set(opt, (counts.get(opt) || 0) + 1);
            });
        }
    });

    return Array.from(counts.entries())
        .map(([value, count]) => ({ value, label: value, count }))
        .sort((a, b) => b.count - a.count);
}

// Extracts tags (used for badges/certs)
export function extractTags(products: WooProduct[], allowedTags?: string[]): FilterOption[] {
    const counts = new Map<string, number>();

    products.forEach(p => {
        p.tags.forEach(tag => {
            if (!allowedTags || allowedTags.includes(tag.name)) {
                counts.set(tag.name, (counts.get(tag.name) || 0) + 1);
            }
        });
    });

    return Array.from(counts.entries())
        .map(([value, count]) => ({ value, label: value, count }))
        .sort((a, b) => b.count - a.count);
}

// Gets price range
export function getPriceRange(products: WooProduct[]): { min: number; max: number } {
    if (products.length === 0) return { min: 0, max: 100 };
    const prices = products.map(p => parseFloat(p.price)).filter(p => !isNaN(p) && p > 0);
    if (prices.length === 0) return { min: 0, max: 100 };
    return {
        min: Math.floor(Math.min(...prices)),
        max: Math.ceil(Math.max(...prices))
    };
}

// Category-specific filter configurations
export function getFiltersForCategory(categorySlug: string, products: WooProduct[]): FilterConfig[] {
    const priceRange = getPriceRange(products);
    const benefits = extractAttributeValues(products, "Bienfaits");

    // Define which tags represent certifications/labels
    const certTags = data.certifications || ["Bio", "Vegan", "Ecocert", "Naturel"];
    const certifications = extractTags(products, certTags);

    const baseFilters: FilterConfig[] = [
        {
            key: "price",
            label: "Prix",
            type: "range",
            min: priceRange.min,
            max: priceRange.max
        }
    ];

    // Generic filters based on category
    // We can customize this further based on real attributes in WooCommerce
    const filters: FilterConfig[] = [];

    // 1. Subcategory filter (Simulated via tags or specific attributes)
    // In Mock data, subcategories are not explicitly defined fields, but we can infer them if needed.
    // For now, let's skip subcategory unless we have a specific attribute for it.

    // 2. Benefits
    if (benefits.length > 0) {
        filters.push({
            key: "benefits",
            label: "Bienfaits",
            type: "checkbox",
            options: benefits.slice(0, 8)
        });
    }

    // 3. Certifications
    if (certifications.length > 0) {
        filters.push({
            key: "tags",
            label: "Labels",
            type: "checkbox",
            options: certifications
        });
    }

    return [...filters, ...baseFilters];
}

// Data for allowed tags to be considered as certifications
const data = {
    certifications: ["Bio", "Vegan", "Ecocert", "Cosmos Organic", "Fabriqué en France", "Agriculture Bio", "Gélules végétales", "Eco", "Naturel"]
};

export function filterProducts(products: WooProduct[], filters: ActiveFilters): WooProduct[] {
    return products.filter(product => {
        for (const [key, value] of Object.entries(filters)) {
            if (!value || (Array.isArray(value) && value.length === 0)) continue;

            switch (key) {
                case "price":
                    if (Array.isArray(value) && value.length === 2) {
                        const [min, max] = value as [number, number];
                        const price = parseFloat(product.price);
                        if (price < min || price > max) return false;
                    }
                    break;

                case "benefits":
                    if (Array.isArray(value)) {
                        const required = value as string[];
                        const productBenefits = product.attributes.find(a => a.name === "Bienfaits")?.options || [];
                        if (!required.some(r => productBenefits.includes(r))) return false;
                    }
                    break;

                case "tags": // Certifications are tags
                    if (Array.isArray(value)) {
                        const required = value as string[];
                        const productTags = product.tags.map(t => t.name);
                        if (!required.some(r => productTags.includes(r))) return false;
                    }
                    break;

                // Add specific logic for other keys if needed
            }
        }
        return true;
    });
}
