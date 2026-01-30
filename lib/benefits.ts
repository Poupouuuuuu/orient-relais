// Utility function to parse benefit strings
// Format: "🌿 Cheveux : Coloration • Brillance • Anti-chute"

export interface ParsedBenefit {
    category: string;
    items: string[];
    icon: "leaf" | "sparkles" | "droplets" | "heart";
    color: "green" | "orange" | "blue" | "pink";
}

const iconColorMap: Record<string, { icon: "leaf" | "sparkles" | "droplets" | "heart"; color: "green" | "orange" | "blue" | "pink" }> = {
    "Cheveux": { icon: "leaf", color: "green" },
    "Peau": { icon: "sparkles", color: "orange" },
    "Détox": { icon: "droplets", color: "blue" },
    "Ayurvéda": { icon: "heart", color: "pink" },
    "Digestion": { icon: "droplets", color: "blue" },
    "Immunité": { icon: "leaf", color: "green" },
    "Vitalité": { icon: "sparkles", color: "orange" },
    "Bien-être": { icon: "heart", color: "pink" },
};

export function parseBenefits(benefits: string[]): ParsedBenefit[] {
    return benefits.map((benefit) => {
        // Remove emoji at start if present
        const cleanBenefit = benefit.replace(/^[\u{1F300}-\u{1F9FF}]\s*/u, "");

        // Split by " : " to get category and items
        const [categoryPart, itemsPart] = cleanBenefit.split(" : ");
        const category = categoryPart?.trim() || "Bienfait";
        const items = itemsPart ? itemsPart.split(" • ").map(s => s.trim()) : [category];

        // Find matching icon/color
        const mapping = iconColorMap[category] || { icon: "leaf" as const, color: "green" as const };

        return {
            category,
            items,
            icon: mapping.icon,
            color: mapping.color,
        };
    });
}
