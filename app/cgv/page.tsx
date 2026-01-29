import { Separator } from "@/components/ui/separator";

export const metadata = {
    title: "Conditions Générales de Vente | Orient Relais",
};

export default function CGVPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-stone-900 mb-8">Conditions Générales de Vente</h1>

            <div className="prose prose-stone max-w-none">
                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Article 1 - Objet</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Les présentes conditions générales de vente régissent les ventes de produits effectuées
                        par Orient Relais via son site internet orientrelais.com.
                    </p>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Article 2 - Prix</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Les prix de nos produits sont indiqués en euros toutes taxes comprises (TTC), hors frais de livraison.
                        Orient Relais se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix figurant
                        au catalogue le jour de la commande sera le seul applicable à l'acheteur.
                    </p>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Article 3 - Commande</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Toute commande passée sur le site constitue la formation d'un contrat conclu à distance.
                        La validation de la commande par le client vaut acceptation des prix et descriptions des produits
                        disponibles à la vente ainsi que des présentes CGV.
                    </p>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Article 4 - Livraison</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Les produits sont livrés à l'adresse de livraison indiquée au cours du processus de commande.
                        Les délais de livraison sont de 2 à 5 jours ouvrés pour la France métropolitaine.
                        La livraison est offerte à partir de 39€ d'achat.
                    </p>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Article 5 - Droit de rétractation</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Conformément à la loi, vous disposez d'un délai de 14 jours à compter de la réception de votre
                        commande pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.
                    </p>
                </section>

                <Separator className="my-8" />

                <section>
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Article 6 - Contact</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Pour toute question relative à votre commande :<br />
                        Email : contact@orientrelais.com<br />
                        Téléphone : 01 23 45 67 89 (Lun-Ven, 9h-18h)
                    </p>
                </section>
            </div>
        </div>
    );
}
