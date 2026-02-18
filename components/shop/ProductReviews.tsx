"use client";

import { Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ProductReviewsProps {
    rating: number;
    count: number;
}

export function ProductReviews({ rating, count }: ProductReviewsProps) {
    return (
        <div className="space-y-12">
            {/* Summary */}
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center bg-stone-50 p-6 md:p-8 rounded-2xl">
                <div className="text-center md:text-left space-y-2 shrink-0">
                    <div className="text-5xl font-serif font-bold text-stone-900">{rating}</div>
                    <div className="flex gap-1 justify-center md:justify-start">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                                key={s}
                                className={`w-5 h-5 ${s <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-stone-300"}`}
                            />
                        ))}
                    </div>
                    <div className="text-sm text-stone-500">{count} avis</div>
                </div>

                <div className="flex-1 w-full space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-4 text-sm">
                            <span className="w-3 font-medium text-stone-600">{star}</span>
                            <Star className="w-4 h-4 text-stone-300" />
                            <Progress value={star === 5 ? 70 : star === 4 ? 20 : 5} className="h-2" />
                        </div>
                    ))}
                </div>

                <div className="shrink-0 w-full md:w-auto">
                    <Button className="w-full bg-stone-900 hover:bg-primary text-white transition-colors">
                        Écrire un avis
                    </Button>
                </div>
            </div>

            {/* Mock Reviews List */}
            <div className="space-y-8">
                {count > 0 ? (
                    <>
                        <div className="border-b border-stone-200 pb-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-stone-200 flex items-center justify-center">
                                        <User className="w-5 h-5 text-stone-500" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-stone-900">Sophie M.</div>
                                        <div className="text-xs text-stone-500">Il y a 2 semaines</div>
                                    </div>
                                </div>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-stone-600 leading-relaxed">
                                Produit d'excellente qualité ! Je l'utilise depuis quelques semaines et je vois déjà la différence. L'odeur est divine et la texture très agréable. Je recommande vivement pour celles qui cherchent du naturel.
                            </p>
                        </div>
                        <div className="border-b border-stone-200 pb-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-stone-200 flex items-center justify-center">
                                        <User className="w-5 h-5 text-stone-500" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-stone-900">Marie L.</div>
                                        <div className="text-xs text-stone-500">Il y a 1 mois</div>
                                    </div>
                                </div>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-stone-600 leading-relaxed">
                                Très satisfaite de ma commande. Livraison rapide et soignée. Le produit est conforme à la description et très efficace.
                            </p>
                        </div>
                    </>
                ) : (
                    <p className="text-center text-stone-500 py-12">Soyez le premier à donner votre avis !</p>
                )}
            </div>
        </div>
    );
}
