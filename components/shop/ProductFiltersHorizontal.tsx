import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { FilterConfig, getFiltersForCategory, ActiveFilters, filterProducts } from "@/lib/filters";
import { WooProduct } from "@/lib/woocommerce-types";
import { Badge } from "@/components/ui/badge";
import { X, RotateCcw, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductFiltersHorizontalProps {
    category: string;
    products: WooProduct[];
    onFilterChange: (filteredProducts: WooProduct[]) => void;
}

export function ProductFiltersHorizontal({ category, products, onFilterChange }: ProductFiltersHorizontalProps) {
    const [activeFilters, setActiveFilters] = useState<ActiveFilters>({});
    const [openFilter, setOpenFilter] = useState<string | null>(null);
    const filterRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setOpenFilter(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Generate dynamic filter configuration based on category and products
    const filterConfigs = useMemo(() => {
        return getFiltersForCategory(category, products);
    }, [category, products]);

    // Initialize price range from products
    const priceConfig = filterConfigs.find(f => f.key === "price");
    const [priceRange, setPriceRange] = useState<[number, number]>([
        priceConfig?.min || 0,
        priceConfig?.max || 100
    ]);

    // Update price range when config changes
    useEffect(() => {
        if (priceConfig) {
            setPriceRange([priceConfig.min || 0, priceConfig.max || 100]);
        }
    }, [priceConfig]);

    // Apply filters when they change
    useEffect(() => {
        const filtersWithPrice = {
            ...activeFilters,
            price: priceRange
        };
        const filtered = filterProducts(products, filtersWithPrice);
        onFilterChange(filtered);
    }, [activeFilters, priceRange, products, onFilterChange]);

    // Toggle a checkbox filter
    const toggleFilter = useCallback((key: string, value: string) => {
        setActiveFilters(prev => {
            const current = (prev[key] as string[]) || [];
            const newValues = current.includes(value)
                ? current.filter(v => v !== value)
                : [...current, value];
            return {
                ...prev,
                [key]: newValues
            };
        });
    }, []);

    // Reset all filters
    const resetFilters = useCallback(() => {
        setActiveFilters({});
        if (priceConfig) {
            setPriceRange([priceConfig.min || 0, priceConfig.max || 100]);
        }
        setOpenFilter(null);
    }, [priceConfig]);

    // Count active filters
    const activeFilterCount = useMemo(() => {
        let count = 0;
        Object.values(activeFilters).forEach(value => {
            if (Array.isArray(value)) count += value.length;
        });
        // Check if price range is modified
        if (priceConfig && (priceRange[0] > (priceConfig.min || 0) || priceRange[1] < (priceConfig.max || 100))) {
            count++;
        }
        return count;
    }, [activeFilters, priceRange, priceConfig]);

    return (
        <div className="w-full relative z-30" ref={filterRef}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide no-scrollbar">
                    <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-stone-900 mr-2 whitespace-nowrap">
                        <SlidersHorizontal className="h-4 w-4" />
                        Filtres
                    </span>

                    {filterConfigs.map(config => {
                        const isActive = (activeFilters[config.key] as string[])?.length > 0 ||
                            (config.key === 'price' && priceConfig && (priceRange[0] > (priceConfig.min || 0) || priceRange[1] < (priceConfig.max || 100)));

                        return (
                            <div key={config.key} className="relative flex-shrink-0">
                                <button
                                    onClick={() => setOpenFilter(openFilter === config.key ? null : config.key)}
                                    className={cn(
                                        "flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wide transition-all duration-300",
                                        isActive || openFilter === config.key
                                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                            : "bg-white text-stone-600 border-stone-200 hover:border-primary/50 hover:text-primary"
                                    )}
                                >
                                    {config.label}
                                    <ChevronDown className={cn("h-3 w-3 transition-transform", openFilter === config.key && "rotate-180")} />
                                </button>

                                {/* Dropdown Panel */}
                                {openFilter === config.key && (
                                    <div className="absolute top-full left-0 mt-2 w-64 md:w-72 bg-white rounded-xl shadow-xl border border-stone-100 p-5 z-50 animate-in fade-in zoom-in-95 duration-200">
                                        <div className="mb-3 flex justify-between items-center">
                                            <span className="font-serif font-bold text-stone-900">{config.label}</span>
                                            {isActive && config.type !== 'range' && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setActiveFilters(prev => ({ ...prev, [config.key]: [] }));
                                                    }}
                                                    className="text-[10px] uppercase font-bold text-stone-400 hover:text-red-500"
                                                >
                                                    Effacer
                                                </button>
                                            )}
                                        </div>

                                        {config.type === "checkbox" && config.options && (
                                            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                                {config.options.map(option => (
                                                    <div key={option.value} className="flex items-center justify-between group">
                                                        <div className="flex items-center space-x-3">
                                                            <Checkbox
                                                                id={`desktop-${config.key}-${option.value}`}
                                                                checked={((activeFilters[config.key] as string[]) || []).includes(option.value)}
                                                                onCheckedChange={() => toggleFilter(config.key, option.value)}
                                                                className="border-stone-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                                            />
                                                            <Label
                                                                htmlFor={`desktop-${config.key}-${option.value}`}
                                                                className="text-sm cursor-pointer text-stone-600 group-hover:text-primary transition-colors"
                                                            >
                                                                {option.label}
                                                            </Label>
                                                        </div>
                                                        <span className="text-xs text-stone-300 font-medium">{option.count}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {config.type === "range" && (
                                            <div className="pt-4 px-2 space-y-6">
                                                <Slider
                                                    min={config.min || 0}
                                                    max={config.max || 100}
                                                    step={1}
                                                    value={priceRange}
                                                    onValueChange={(value) => setPriceRange(value as [number, number])}
                                                    className="py-2"
                                                />
                                                <div className="flex items-center justify-between text-sm font-bold text-stone-700">
                                                    <span className="bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-100">{priceRange[0]}€</span>
                                                    <span className="text-stone-300">à</span>
                                                    <span className="bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-100">{priceRange[1]}€</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Reset Button & Count */}
                {activeFilterCount > 0 && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={resetFilters}
                        className="text-xs font-bold uppercase tracking-wider text-stone-400 hover:text-primary hover:bg-transparent"
                    >
                        <RotateCcw className="h-3 w-3 mr-1.5" />
                        Réinitialiser ({activeFilterCount})
                    </Button>
                )}
            </div>

            {/* Selected Tags Row (Optional, if we want to show them outside) */}
            {/* We could add logic here to show pills of selected filters if desired */}
        </div>
    );
}
