import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="bg-[#1c1917] text-stone-100 pt-16 pb-8 border-t-4 border-primary/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-white mb-2">Orient Relais</h3>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                L&apos;excellence du Savon d&apos;Alep et la sagesse de l&apos;Ayurvéda.
                                Bio, Éthique & Ancestral.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary transition-colors group">
                                <Instagram className="h-5 w-5 text-stone-300 group-hover:text-white" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary transition-colors group">
                                <span className="font-bold text-stone-300 group-hover:text-white flex items-center justify-center text-xs">Tk</span>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-serif text-lg font-semibold text-white mb-6">Navigation</h4>
                        <ul className="space-y-3 text-sm text-stone-400">
                            <li><Link href="/categorie/savons" className="hover:text-primary transition-colors">Savons d'Alep</Link></li>
                            <li><Link href="/categorie/complements-alimentaires" className="hover:text-primary transition-colors">Compléments Bio</Link></li>
                            <li><Link href="/categorie/huiles-essentielles" className="hover:text-primary transition-colors">Huiles Essentielles</Link></li>
                            <li><Link href="/categorie/coffrets" className="hover:text-primary transition-colors">Coffrets Cadeaux</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Le Journal</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="/a-propos" className="hover:text-primary transition-colors">Notre Démarche</Link></li>
                        </ul>
                    </div>

                    {/* Service Client */}
                    <div>
                        <h4 className="font-serif text-lg font-semibold text-white mb-6">Service Client</h4>
                        <ul className="space-y-4 text-sm text-stone-400">
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="block text-white font-medium">06 99 55 69 77</span>
                                    <span className="text-xs">Lun-Ven, 9h-18h</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:Contact@orient-relais.com" className="hover:text-primary">Contact@orient-relais.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>48 avenue de Touraine,<br />78310 MAUREPAS, France</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif text-lg font-semibold text-white mb-6">Newsletter</h4>
                        <p className="text-sm text-stone-400 mb-4">
                            Recevez nos conseils bien-être et -10% sur votre première commande.
                        </p>
                        <div className="space-y-3">
                            <Input
                                type="email"
                                placeholder="Votre email"
                                className="bg-stone-800 border-stone-700 text-stone-100 placeholder:text-stone-500 focus-visible:ring-primary focus-visible:border-primary"
                            />
                            <Button className="w-full bg-primary hover:bg-orange-600 text-white font-medium">
                                Je m'inscris
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-stone-500">
                        © 2026 Orient Relais. SIRET 123 456 789 00012.
                    </p>
                    <div className="flex gap-6 text-xs text-stone-500">
                        <Link href="/mentions-legales" className="hover:text-stone-300">Mentions Légales</Link>
                        <Link href="/cgv" className="hover:text-stone-300">CGV</Link>
                        <Link href="/confidentialite" className="hover:text-stone-300">Politique de Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
