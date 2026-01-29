"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, CreditCard, Lock, MapPin, Truck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const { items, subtotal, cartCount, clearCart } = useCart();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    // Mock form state
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        zip: "",
        city: "",
        phone: ""
    });

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(step + 1);
        window.scrollTo(0, 0);
    };

    const handlePayment = async () => {
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        clearCart();
        router.push("/checkout/success");
    };

    if (items.length === 0 && !isLoading) {
        return (
            <div className="container mx-auto py-24 text-center">
                <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">Votre panier est vide</h1>
                <Button asChild>
                    <Link href="/boutique">Retourner à la boutique</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-stone-50">
            <div className="container mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                    {/* Left Column: Form Steps */}
                    <div className="flex-1 space-y-8">
                        {/* Breadcrumb / Steps Visual */}
                        <div className="flex items-center text-sm font-medium text-stone-500 mb-8">
                            <span className={step >= 1 ? "text-primary" : ""}>Panier</span>
                            <ChevronRight className="h-4 w-4 mx-2" />
                            <span className={step >= 2 ? "text-primary" : ""}>Information</span>
                            <ChevronRight className="h-4 w-4 mx-2" />
                            <span className={step >= 3 ? "text-primary" : ""}>Livraison</span>
                            <ChevronRight className="h-4 w-4 mx-2" />
                            <span className={step >= 4 ? "text-primary" : ""}>Paiement</span>
                        </div>

                        {/* Step 1 & 2: Information & Shipping */}
                        {step <= 2 && (
                            <form onSubmit={handleNext} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {/* Identification */}
                                <section className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm">
                                    <h2 className="text-xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
                                        <User className="h-5 w-5 text-primary" />
                                        Coordonnées
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input required type="email" id="email" placeholder="votre@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Téléphone</Label>
                                                <Input type="tel" id="phone" placeholder="06 12 34 56 78" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Shipping Address */}
                                <section className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm">
                                    <h2 className="text-xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-primary" />
                                        Adresse de livraison
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstname">Prénom</Label>
                                                <Input required id="firstname" placeholder="Jean" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastname">Nom</Label>
                                                <Input required id="lastname" placeholder="Dupont" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="address">Adresse</Label>
                                            <Input required id="address" placeholder="123 rue de la Paix" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="zip">Code Postal</Label>
                                                <Input required id="zip" placeholder="75000" value={formData.zip} onChange={e => setFormData({ ...formData, zip: e.target.value })} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="city">Ville</Label>
                                                <Input required id="city" placeholder="Paris" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="flex justify-end">
                                    <Button type="submit" size="lg" className="w-full md:w-auto bg-primary text-white hover:bg-orange-600 font-bold">
                                        Vers la livraison <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </form>
                        )}

                        {/* Step 3: Delivery Method */}
                        {step === 3 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <section className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm">
                                    <h2 className="text-xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
                                        <Truck className="h-5 w-5 text-primary" />
                                        Mode de livraison
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4 border border-stone-200 rounded-lg p-4 cursor-pointer hover:border-primary bg-stone-50">
                                            <Checkbox id="standard" checked={true} />
                                            <div className="flex-1">
                                                <Label htmlFor="standard" className="text-base font-medium cursor-pointer">Colissimo Domicile</Label>
                                                <p className="text-sm text-stone-500">Livraison en 2-3 jours ouvrés</p>
                                            </div>
                                            <span className="font-bold text-stone-900">4,90 €</span>
                                        </div>
                                    </div>
                                </section>

                                <div className="flex justify-between">
                                    <Button variant="outline" onClick={() => setStep(2)}>Retour</Button>
                                    <Button onClick={() => setStep(4)} size="lg" className="bg-primary text-white hover:bg-orange-600 font-bold">
                                        Vers le paiement <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Payment */}
                        {step === 4 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <section className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm">
                                    <h2 className="text-xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
                                        <CreditCard className="h-5 w-5 text-primary" />
                                        Paiement sécurisé
                                    </h2>

                                    <div className="bg-stone-50 p-6 rounded-lg text-center border border-dashed border-stone-300">
                                        <Lock className="h-8 w-8 text-stone-400 mx-auto mb-2" />
                                        <p className="text-stone-600 font-medium mb-1">Paiement simulé</p>
                                        <p className="text-sm text-stone-500">Aucun débit ne sera effectué.</p>
                                    </div>
                                </section>

                                <div className="flex justify-between">
                                    <Button variant="outline" onClick={() => setStep(3)}>Retour</Button>
                                    <Button
                                        onClick={handlePayment}
                                        disabled={isLoading}
                                        size="lg"
                                        className="bg-primary text-white hover:bg-orange-600 font-bold w-full md:w-auto min-w-[200px]"
                                    >
                                        {isLoading ? "Traitement..." : `Payer ${(subtotal + 4.90).toFixed(2)} €`}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Order Summary (Sticky) */}
                    <div className="w-full lg:w-[380px] flex-shrink-0">
                        <div className="sticky top-24 bg-white p-6 rounded-xl border border-stone-200 shadow-xl shadow-stone-200/50">
                            <h3 className="font-serif text-lg font-bold text-stone-900 mb-4">Récapitulatif</h3>
                            <div className="space-y-4 mb-6">
                                {items.map((item) => (
                                    <div key={`${item.id}-${item.variant}`} className="flex gap-3">
                                        <div className="relative h-12 w-12 rounded bg-stone-100 flex-shrink-0 overflow-hidden">
                                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                                            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-stone-500 text-white text-[10px] flex items-center justify-center font-bold border-2 border-white">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-stone-900 truncate">{item.title}</p>
                                            <p className="text-xs text-stone-500">{item.variant}</p>
                                        </div>
                                        <div className="text-sm font-medium text-stone-700">
                                            {(item.price * item.quantity).toFixed(2)}€
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Separator className="my-4" />

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between text-stone-600">
                                    <span>Sous-total</span>
                                    <span>{subtotal.toFixed(2)} €</span>
                                </div>
                                <div className="flex justify-between text-stone-600">
                                    <span>Livraison</span>
                                    <span>4,90 €</span>
                                </div>
                            </div>

                            <Separator className="my-4" />

                            <div className="flex justify-between items-end">
                                <span className="font-bold text-lg text-stone-900">Total</span>
                                <div className="text-right">
                                    <span className="text-xs text-stone-500 block mb-0.5">TVA incluse</span>
                                    <span className="font-bold text-2xl text-primary">{(subtotal + 4.90).toFixed(2)} €</span>
                                </div>
                            </div>

                            <div className="mt-6 bg-stone-50 p-3 rounded text-xs text-stone-500 flex gap-2">
                                <Lock className="h-4 w-4 flex-shrink-0" />
                                <p>Transactions sécurisées et cryptées SSL. Vos données sont protégées.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
