// Filter system configuration for Orient Relais
// Each category has its own set of relevant filters

import { Product } from "@/data/products";

export interface FilterOption {
    value: string;
    label: string;
    count?: number; // Number of products matching this filter
}

export interface FilterConfig {
    key: string;
    label: string;
    type: "checkbox" | "range";
    options?: FilterOption[];
    min?: number;
    max?: number;
}

export interface CategoryFilterConfig {
    categorySlug: string;
    filters: FilterConfig[];
}

// Extracts unique values from products for a given key
export function extractUniqueValues(products: Product[], key: keyof Product): string[] {
    const values = new Set<string>();
    products.forEach(p => {
        const value = p[key];
        if (Array.isArray(value)) {
            value.forEach(v => values.add(String(v)));
        } else if (value) {
            values.add(String(value));
        }
    });
    return Array.from(values).sort();
}

// Extracts unique benefits from products
export function extractBenefits(products: Product[]): FilterOption[] {
    const benefitCounts = new Map<string, number>();
    products.forEach(p => {
        p.benefits?.forEach(benefit => {
            // Extract just the keyword from benefits like "🛡️ Immunité : Renforce..."
            const cleanBenefit = benefit.split(":")[0].replace(/[^\w\sàâäéèêëïîôùûüç'-]/gi, "").trim();
            if (cleanBenefit) {
                benefitCounts.set(cleanBenefit, (benefitCounts.get(cleanBenefit) || 0) + 1);
            }
        });
    });
    return Array.from(benefitCounts.entries())
        .map(([value, count]) => ({ value, label: value, count }))
        .sort((a, b) => b.count! - a.count!);
}

// Extracts certifications from products
export function extractCertifications(products: Product[]): FilterOption[] {
    const certMap: Record<string, string> = {
        bio: "Bio",
        vegan: "Vegan",
        ecocert: "Ecocert",
        cosmos: "Cosmos Organic",
        france: "Fabriqué en France",
        ab: "Agriculture Bio",
        gelules: "Gélules végétales"
    };

    const certCounts = new Map<string, number>();
    products.forEach(p => {
        p.certifications?.forEach(cert => {
            certCounts.set(cert, (certCounts.get(cert) || 0) + 1);
        });
    });

    return Array.from(certCounts.entries())
        .map(([value, count]) => ({
            value,
            label: certMap[value] || value,
            count
        }))
        .filter(opt => opt.count! > 0)
        .sort((a, b) => b.count! - a.count!);
}

// Gets price range from products
export function getPriceRange(products: Product[]): { min: number; max: number } {
    if (products.length === 0) return { min: 0, max: 100 };
    const prices = products.map(p => p.price).filter(p => p > 0);
    return {
        min: Math.floor(Math.min(...prices)),
        max: Math.ceil(Math.max(...prices))
    };
}

// Category-specific filter configurations
export function getFiltersForCategory(category: string, products: Product[]): FilterConfig[] {
    const priceRange = getPriceRange(products);
    const benefits = extractBenefits(products);
    const certifications = extractCertifications(products);

    const baseFilters: FilterConfig[] = [
        {
            key: "price",
            label: "Prix",
            type: "range",
            min: priceRange.min,
            max: priceRange.max
        }
    ];

    switch (category) {
        case "savons":
            return [
                {
                    key: "subcategory",
                    label: "Type de savon",
                    type: "checkbox",
                    options: [
                        { value: "solide", label: "Savon solide", count: products.filter(p => !p.subcategory || p.subcategory !== "savon-liquide").length },
                        { value: "savon-liquide", label: "Savon liquide / Gel", count: products.filter(p => p.subcategory === "savon-liquide").length }
                    ]
                },
                {
                    key: "benefits",
                    label: "Bienfaits",
                    type: "checkbox",
                    options: benefits.slice(0, 6)
                },
                ...baseFilters
            ];

        case "complements-alimentaires":
            return [
                {
                    key: "form",
                    label: "Forme",
                    type: "checkbox",
                    options: [
                        { value: "gelules", label: "Gélules", count: products.filter(p => p.title.toLowerCase().includes("gélule")).length },
                        { value: "poudre", label: "Poudre", count: products.filter(p => p.title.toLowerCase().includes("poudre")).length },
                        { value: "miel", label: "Miel / Liquide", count: products.filter(p => p.title.toLowerCase().includes("miel") || p.subcategory === "miels").length }
                    ].filter(opt => opt.count > 0)
                },
                {
                    key: "certifications",
                    label: "Certifications",
                    type: "checkbox",
                    options: certifications
                },
                {
                    key: "benefits",
                    label: "Bienfaits santé",
                    type: "checkbox",
                    options: benefits.slice(0, 8)
                },
                ...baseFilters
            ];

        case "huiles-essentielles":
            return [
                {
                    key: "usage",
                    label: "Usage",
                    type: "checkbox",
                    options: [
                        { value: "diffusion", label: "Diffusion atmosphérique" },
                        { value: "massage", label: "Massage / Application cutanée" },
                        { value: "inhalation", label: "Inhalation" }
                    ]
                },
                {
                    key: "benefits",
                    label: "Propriétés",
                    type: "checkbox",
                    options: benefits.slice(0, 6)
                },
                {
                    key: "certifications",
                    label: "Labels",
                    type: "checkbox",
                    options: certifications
                },
                ...baseFilters
            ];

        case "soins":
            return [
                {
                    key: "zone",
                    label: "Zone du corps",
                    type: "checkbox",
                    options: [
                        { value: "visage", label: "Visage", count: products.filter(p => p.title.toLowerCase().includes("visage") || p.benefits?.some(b => b.toLowerCase().includes("visage"))).length },
                        { value: "corps", label: "Corps", count: products.filter(p => p.title.toLowerCase().includes("corps") || p.title.toLowerCase().includes("baume")).length },
                        { value: "cheveux", label: "Cheveux", count: products.filter(p => p.title.toLowerCase().includes("cheveux") || p.benefits?.some(b => b.toLowerCase().includes("cheveux"))).length }
                    ].filter(opt => opt.count! > 0)
                },
                {
                    key: "benefits",
                    label: "Bienfaits",
                    type: "checkbox",
                    options: benefits.slice(0, 6)
                },
                {
                    key: "certifications",
                    label: "Certifications",
                    type: "checkbox",
                    options: certifications
                },
                ...baseFilters
            ];

        case "coffrets":
            return [
                {
                    key: "occasion",
                    label: "Occasion",
                    type: "checkbox",
                    options: [
                        { value: "offrir", label: "Idée cadeau" },
                        { value: "decouverte", label: "Découverte" },
                        { value: "soin", label: "Rituel soin" }
                    ]
                },
                ...baseFilters
            ];

        default:
            // Page Boutique globale ou catégorie inconnue
            return [
                {
                    key: "category",
                    label: "Catégorie",
                    type: "checkbox",
                    options: [
                        { value: "savons", label: "Savons d'Alep" },
                        { value: "complements-alimentaires", label: "Compléments" },
                        { value: "huiles-essentielles", label: "Huiles Essentielles" },
                        { value: "soins", label: "Soins & Cosmétiques" },
                        { value: "coffrets", label: "Coffrets" }
                    ]
                },
                {
                    key: "certifications",
                    label: "Labels",
                    type: "checkbox",
                    options: certifications
                },
                {
                    key: "promo",
                    label: "Promotions",
                    type: "checkbox",
                    options: [
                        { value: "promo", label: "En promotion", count: products.filter(p => p.originalPrice && p.originalPrice > p.price).length }
                    ]
                },
                ...baseFilters
            ];
    }
}

// Filter products based on active filters
export interface ActiveFilters {
    [key: string]: string[] | [number, number];
}

export function filterProducts(products: Product[], filters: ActiveFilters): Product[] {
    return products.filter(product => {
        for (const [key, value] of Object.entries(filters)) {
            if (!value || (Array.isArray(value) && value.length === 0)) continue;

            switch (key) {
                case "price":
                    if (Array.isArray(value) && value.length === 2) {
                        const [min, max] = value as [number, number];
                        if (product.price < min || product.price > max) return false;
                    }
                    break;

                case "subcategory":
                    if (Array.isArray(value) && value.length > 0) {
                        const values = value as string[];
                        if (values.includes("solide") && product.subcategory === "savon-liquide") return false;
                        if (values.includes("savon-liquide") && product.subcategory !== "savon-liquide") return false;
                    }
                    break;

                case "certifications":
                    if (Array.isArray(value) && value.length > 0) {
                        const requiredCerts = value as string[];
                        if (!requiredCerts.some(cert => product.certifications?.includes(cert))) return false;
                    }
                    break;

                case "benefits":
                    if (Array.isArray(value) && value.length > 0) {
                        const requiredBenefits = value as string[];
                        if (!requiredBenefits.some(benefit =>
                            product.benefits?.some(b => b.toLowerCase().includes(benefit.toLowerCase()))
                        )) return false;
                    }
                    break;

                case "category":
                    if (Array.isArray(value) && value.length > 0) {
                        const categories = value as string[];
                        if (!categories.includes(product.category)) return false;
                    }
                    break;

                case "promo":
                    if (Array.isArray(value) && value.length > 0) {
                        // Check if promo filter is active
                        if ((value as string[]).indexOf("promo") !== -1) {
                            if (!product.originalPrice || product.originalPrice <= product.price) return false;
                        }
                    }
                    break;

                case "form":
                    if (Array.isArray(value) && value.length > 0) {
                        const forms = value as string[];
                        const title = product.title.toLowerCase();
                        const matchesForm = forms.some(form => {
                            if (form === "gelules") return title.includes("gélule");
                            if (form === "poudre") return title.includes("poudre");
                            if (form === "miel") return title.includes("miel") || product.subcategory === "miels";
                            return false;
                        });
                        if (!matchesForm) return false;
                    }
                    break;
            }
        }
        return true;
    });
}
