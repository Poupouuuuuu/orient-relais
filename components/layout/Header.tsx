"use client";

import Link from "next/link";
import { Search, ShoppingBag, Menu, User, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { cn } from "@/lib/utils";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const productCategories = [
        { href: "/categorie/savons", label: "Savons d'Alep", desc: "L'authentique soin millénaire" },
        { href: "/categorie/huiles-essentielles", label: "Huiles Essentielles", desc: "Pureté Terra Etica" },
        { href: "/categorie/complements-alimentaires", label: "Compléments", desc: "Bien-être au naturel" },
        { href: "/categorie/coffrets", label: "Coffrets Cadeaux", desc: "Pour faire plaisir" },
    ];

    return (
        <div className="flex flex-col">
            {/* Top Bar - More subtle */}
            <div className="bg-secondary text-white py-2 text-center text-xs font-medium tracking-wider uppercase">
                Livraison offerte dès 39€ en France
            </div>

            <header
                className={cn(
                    "sticky top-0 z-50 w-full border-b transition-all duration-300",
                    isScrolled
                        ? "border-stone-200/50 bg-white/95 backdrop-blur-md shadow-sm"
                        : "border-transparent bg-white/80 backdrop-blur-sm"
                )}
                onMouseLeave={() => setIsProductsMenuOpen(false)}
            >
                <div className="container mx-auto flex h-20 items-center justify-between px-4 gap-8">
                    {/* Logo - Left */}
                    <Link href="/" className="flex-shrink-0 group relative z-50">
                        <span className="font-serif text-2xl md:text-3xl font-bold text-stone-900 tracking-tight leading-none group-hover:text-primary transition-colors">
                            Orient Relais
                        </span>
                    </Link>

                    {/* Desktop Nav - Centered */}
                    <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-stone-600">
                        <div
                            className="relative group h-20 flex items-center"
                            onMouseEnter={() => setIsProductsMenuOpen(true)}
                        >
                            <button className={cn(
                                "flex items-center gap-1 hover:text-primary transition-colors focus:outline-none",
                                isProductsMenuOpen && "text-primary"
                            )}>
                                Boutique <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isProductsMenuOpen && "rotate-180")} />
                            </button>
                        </div>

                        <Link href="/a-propos" className="hover:text-primary transition-colors">Notre Histoire</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors">Le Journal</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </nav>

                    {/* Actions - Right */}
                    <div className="flex items-center gap-2 flex-shrink-0 z-50">
                        {/* Desktop Search */}
                        <div className="hidden md:flex relative w-48 lg:w-64 group mr-2">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 group-focus-within:text-primary transition-colors" />
                            <Input
                                type="search"
                                placeholder="Rechercher..."
                                className="pl-9 bg-transparent border-stone-200 focus-visible:ring-primary focus-visible:bg-white rounded-full h-9 text-sm transition-all focus:w-full"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        window.location.href = `/recherche?q=${(e.target as HTMLInputElement).value}`;
                                    }
                                }}
                            />
                        </div>

                        <CartDrawer />

                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mega Menu Dropdown */}
                <div className={cn(
                    "absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out origin-top z-40",
                    isProductsMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
                )}
                    onMouseEnter={() => setIsProductsMenuOpen(true)}
                    onMouseLeave={() => setIsProductsMenuOpen(false)}
                >
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-4 gap-8">
                            {productCategories.map((cat) => (
                                <Link
                                    key={cat.href}
                                    href={cat.href}
                                    className="group block p-4 rounded-xl hover:bg-stone-50 transition-colors"
                                    onClick={() => setIsProductsMenuOpen(false)}
                                >
                                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-primary mb-1">
                                        {cat.label}
                                    </h3>
                                    <p className="text-sm text-stone-500">{cat.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-stone-100 bg-white h-[calc(100vh-80px)] overflow-y-auto">
                        <div className="p-4 space-y-6">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                                <Input
                                    type="search"
                                    placeholder="Rechercher..."
                                    className="pl-10 bg-stone-50"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            window.location.href = `/recherche?q=${(e.target as HTMLInputElement).value}`;
                                        }
                                    }}
                                />
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-3 px-2">Boutique</h3>
                                <nav className="flex flex-col space-y-1">
                                    {productCategories.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-900 font-medium"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            <div className="border-t border-stone-100 pt-6">
                                <nav className="flex flex-col space-y-1">
                                    <Link href="/a-propos" className="px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-600" onClick={() => setIsMenuOpen(false)}>Notre Histoire</Link>
                                    <Link href="/blog" className="px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-600" onClick={() => setIsMenuOpen(false)}>Le Journal</Link>
                                    <Link href="/contact" className="px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-600" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                                    <Link href="/faq" className="px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-600" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}
