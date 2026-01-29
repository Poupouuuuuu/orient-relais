import { Separator } from "@/components/ui/separator";

export const metadata = {
    title: "Politique de Confidentialité | Orient Relais",
};

export default function ConfidentialitePage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-stone-900 mb-8">Politique de Confidentialité</h1>

            <div className="prose prose-stone max-w-none">
                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Collecte des données</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Orient Relais collecte les informations que vous nous fournissez lors de votre commande :
                        nom, prénom, adresse email, adresse de livraison et numéro de téléphone.
                        Ces données sont nécessaires au traitement de votre commande et à la livraison de vos produits.
                    </p>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Utilisation des données</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Vos données personnelles sont utilisées pour :
                    </p>
                    <ul className="list-disc list-inside text-stone-600 mt-4 space-y-2">
                        <li>Traiter et expédier vos commandes</li>
                        <li>Vous contacter concernant votre commande</li>
                        <li>Vous envoyer notre newsletter (si vous y avez consenti)</li>
                        <li>Améliorer nos services</li>
                    </ul>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Protection des données</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données
                        contre tout accès non autorisé. Vos informations de paiement sont cryptées via SSL
                        et ne sont jamais stockées sur nos serveurs.
                    </p>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Cookies</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Notre site utilise des cookies pour améliorer votre expérience de navigation
                        et analyser l'utilisation du site. Vous pouvez configurer votre navigateur
                        pour refuser les cookies.
                    </p>
                </section>

                <Separator className="my-8" />

                <section>
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Vos droits</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression
                        de vos données personnelles. Pour exercer ces droits, contactez-nous à :
                        contact@orientrelais.com
                    </p>
                </section>
            </div>
        </div>
    );
}
