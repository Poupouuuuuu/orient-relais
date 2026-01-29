"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ProductFilters() {
    const [priceRange, setPriceRange] = useState([0, 50]);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-stone-900">Filtres</h3>
                <button className="text-sm text-stone-500 underline hover:text-primary">Réinitialiser</button>
            </div>

            <Accordion type="multiple" defaultValue={["provenance", "besoin", "type", "prix"]} className="w-full">

                {/* Provenance */}
                <AccordionItem value="provenance" className="border-stone-200">
                    <AccordionTrigger className="text-base font-semibold text-stone-800 hover:no-underline hover:text-primary">
                        Provenance
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-3 pt-2">
                            <FilterCheckbox id="syrie" label="Syrie (Alep)" />
                            <FilterCheckbox id="inde" label="Inde (Ayurvéda)" />
                            <FilterCheckbox id="france" label="France" />
                            <FilterCheckbox id="maroc" label="Maroc" />
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Besoin */}
                <AccordionItem value="besoin" className="border-stone-200">
                    <AccordionTrigger className="text-base font-semibold text-stone-800 hover:no-underline hover:text-primary">
                        Maux / Besoins
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-3 pt-2">
                            <FilterCheckbox id="peau-seche" label="Peau sèche" />
                            <FilterCheckbox id="acne" label="Acné & Imperfections" />
                            <FilterCheckbox id="anti-age" label="Anti-âge" />
                            <FilterCheckbox id="hydratation" label="Hydratation intense" />
                            <FilterCheckbox id="detente" label="Détente & Stress" />
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Type */}
                <AccordionItem value="type" className="border-stone-100 last:border-0">
                    <AccordionTrigger className="text-base font-serif font-bold text-stone-900 hover:no-underline hover:text-primary py-4">
                        Type de produit
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-3 pt-1 pb-4">
                            <FilterCheckbox id="solide" label="Solide (Savon, Shampoing)" />
                            <FilterCheckbox id="liquide" label="Liquide (Huile, Gel)" />
                            <FilterCheckbox id="accessoire" label="Accessoire" />
                            <FilterCheckbox id="coffret" label="Coffret Cadeau" />
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* Prix */}
                <AccordionItem value="prix" className="border-none">
                    <AccordionTrigger className="text-base font-semibold text-stone-800 hover:no-underline hover:text-primary">
                        Prix
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="pt-4 px-2 space-y-4">
                            <Slider
                                defaultValue={[0, 50]}
                                max={100}
                                step={1}
                                value={priceRange}
                                onValueChange={setPriceRange}
                                className="py-4"
                            />
                            <div className="flex items-center justify-between text-sm text-stone-600 font-medium">
                                <span>{priceRange[0]}€</span>
                                <span>{priceRange[1]}€</span>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

function FilterCheckbox({ id, label }: { id: string, label: string }) {
    return (
        <div className="flex items-center space-x-3">
            <Checkbox id={id} className="border-stone-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
            <Label htmlFor={id} className="text-sm font-normal text-stone-600 cursor-pointer hover:text-stone-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {label}
            </Label>
        </div>
    );
}
