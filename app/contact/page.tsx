import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center mb-16">
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Contactez-nous</span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">À votre écoute</h1>
                <p className="text-stone-600 text-lg">
                    Une question sur un produit ? Un conseil personnalisé ? <br />
                    Notre équipe vous répond sous 24h ouvrées.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
                        <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">Nos Coordonnées</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block font-bold text-stone-900">Email</span>
                                    <a href="mailto:Contact@orient-relais.com" className="text-stone-600 hover:text-primary">Contact@orient-relais.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block font-bold text-stone-900">Téléphone</span>
                                    <span className="text-stone-600">06 99 55 69 77</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block font-bold text-stone-900">Adresse</span>
                                    <p className="text-stone-600">
                                        48 avenue de Touraine,<br /> 78310 MAUREPAS, France
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">Questions Fréquentes</h3>
                        <div className="space-y-4">
                            <details className="bg-white border border-stone-200 rounded-lg p-4 cursor-pointer group">
                                <summary className="font-medium text-stone-900 group-hover:text-primary">Quels sont les délais de livraison ?</summary>
                                <p className="text-sm text-stone-600 mt-2 pl-4 border-l-2 border-stone-300">
                                    Nous expédions vos commandes sous 24h. La livraison en France met généralement 48h à 72h ouvrées (Colissimo ou Mondial Relay).
                                </p>
                            </details>
                            <details className="bg-white border border-stone-200 rounded-lg p-4 cursor-pointer group">
                                <summary className="font-medium text-stone-900 group-hover:text-primary">Vos produits sont-ils certifiés Bio ?</summary>
                                <p className="text-sm text-stone-600 mt-2 pl-4 border-l-2 border-stone-300">
                                    Absolument. Nos savons et huiles sont certifiés par Ecocert et proviennent de l'agriculture biologique.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-lg shadow-stone-200/50">
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">Envoyez-nous un message</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-stone-700">Nom</label>
                                <Input id="name" placeholder="Votre nom" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
                                <Input id="email" type="email" placeholder="votre@email.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-stone-700">Sujet</label>
                            <Input id="subject" placeholder="Information produit, Commande..." />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-stone-700">Message</label>
                            <Textarea id="message" placeholder="Comment pouvons-nous vous aider ?" className="min-h-[150px]" />
                        </div>
                        <Button className="w-full h-12 bg-primary hover:bg-orange-600 text-white font-bold rounded-lg mt-2">
                            Envoyer le message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
