"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-md">
            <div className="space-y-6 text-center mb-8">
                <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A3C34]">Connexion</h1>
                <p className="text-stone-600 font-manrope">
                    Accédez à votre compte pour suivre vos commandes et gérer vos préférences.
                </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl border border-stone-100 shadow-lg shadow-stone-200/50">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <Label htmlFor="email">Adresse Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="votre@email.com"
                            className="bg-stone-50 border-stone-200 focus:border-[#4A5D5A] focus:ring-1 focus:ring-[#4A5D5A]"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Link
                                href="/mot-de-passe-oublie"
                                className="text-xs text-[#4A5D5A] hover:underline hover:text-[#1A3C34]"
                            >
                                Mot de passe oublié ?
                            </Link>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            className="bg-stone-50 border-stone-200 focus:border-[#4A5D5A] focus:ring-1 focus:ring-[#4A5D5A]"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label
                            htmlFor="remember"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-stone-600"
                        >
                            Se souvenir de moi
                        </label>
                    </div>

                    <Button className="w-full bg-[#1A3C34] hover:bg-[#0F2822] text-white py-6 text-lg font-playfair tracking-wide">
                        Se connecter
                    </Button>
                </form>

                <div className="mt-8">
                    <Separator className="my-6 bg-stone-100" />
                    <div className="text-center text-sm text-stone-600">
                        Vous n'avez pas de compte ?{" "}
                        <Link href="/inscription" className="font-bold text-[#1A3C34] hover:underline">
                            Créer un compte
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
