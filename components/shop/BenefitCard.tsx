"use client";

interface BenefitCardProps {
    category: string;
    items: string[];
    icon?: any; // Kept for compatibility but unused
    color?: string; // Kept for compatibility but unused
}

export function BenefitCard({ category, items }: BenefitCardProps) {
    return (
        <div className="group h-full bg-gradient-to-br from-white to-stone-50/50 border border-stone-200/80 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:border-primary/30 relative overflow-hidden border-l-4 border-l-primary/60">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full -mr-2 -mt-2 group-hover:scale-125 transition-transform duration-500" />

            <div className="relative z-10">
                <div className="mb-5 pb-3">
                    <h4 className="font-serif font-bold text-lg text-stone-800 tracking-tight">{category}</h4>
                    <div className="w-12 h-0.5 bg-primary/40 mt-2 group-hover:w-20 transition-all duration-500" />
                </div>

                <ul className="space-y-3">
                    {items.map((item, i) => (
                        <li key={i} className="text-stone-600 text-sm leading-relaxed flex items-start gap-3 group-hover:text-stone-800 transition-colors">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0 group-hover:bg-primary group-hover:scale-125 transition-all" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
