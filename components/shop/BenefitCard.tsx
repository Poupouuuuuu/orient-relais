"use client";

interface BenefitCardProps {
    category: string;
    items: string[];
    icon?: any; // Kept for compatibility but unused
    color?: string; // Kept for compatibility but unused
}

export function BenefitCard({ category, items }: BenefitCardProps) {
    return (
        <div className="group h-full bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg transition-all duration-500 hover:border-primary/20 relative overflow-hidden">
            {/* Very subtle background accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-stone-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500" />

            <div className="relative z-10">
                <div className="mb-5 border-b border-stone-100 pb-3">
                    <h4 className="font-serif font-bold text-lg text-stone-900 tracking-tight">{category}</h4>
                </div>

                <ul className="space-y-3">
                    {items.map((item, i) => (
                        <li key={i} className="text-stone-600 text-sm leading-relaxed flex items-start gap-3 group-hover:text-stone-900 transition-colors">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0 group-hover:bg-primary transition-colors" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
