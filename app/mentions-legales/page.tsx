import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
    title: "Mentions Légales - RGPD - CGV | Orient Relais",
    description: "Mentions légales, politique de confidentialité et conditions générales de vente d'Orient Relais.",
};

export default function MentionsLegalesPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-stone-900 mb-8">Mentions Légales</h1>

            <div className="prose prose-stone max-w-none">
                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Éditeur du site</h2>
                    <p className="text-stone-600 leading-relaxed">
                        <strong>ORIENT RELAIS</strong><br />
                        Revendeur spécialisé DP Nature et Najel
                    </p>
                    <p className="text-stone-600 leading-relaxed mt-4">
                        <strong>Siège social :</strong><br />
                        48 avenue de Touraine<br />
                        78310 MAUREPAS, France
                    </p>
                    <p className="text-stone-600 leading-relaxed mt-4">
                        <strong>Contact :</strong><br />
                        Téléphone : 06 99 55 69 77<br />
                        Email : Contact@orient-relais.com
                    </p>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Directeur de la publication</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Le directeur de la publication est le représentant légal d'Orient Relais.
                    </p>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Hébergement</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Ce site est hébergé par :<br />
                        <strong>Vercel Inc.</strong><br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789, USA<br />
                        https://vercel.com
                    </p>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Propriété intellectuelle</h2>
                    <p className="text-stone-600 leading-relaxed">
                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
                        et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour
                        les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Protection des données personnelles (RGPD)</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit
                        d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
                    </p>
                    <p className="text-stone-600 leading-relaxed mt-4">
                        Pour exercer ces droits ou pour toute question relative à vos données personnelles,
                        vous pouvez nous contacter à l'adresse : Contact@orient-relais.com
                    </p>
                    <p className="text-stone-600 leading-relaxed mt-4">
                        <Link href="/confidentialite" className="text-primary hover:underline">
                            Consulter notre politique de confidentialité complète →
                        </Link>
                    </p>
                </section>

                <Separator className="my-8" />

                <section>
                    <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Conditions Générales de Vente</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Les conditions générales de vente sont consultables sur une page dédiée.
                    </p>
                    <p className="text-stone-600 leading-relaxed mt-4">
                        <Link href="/cgv" className="text-primary hover:underline">
                            Consulter nos CGV →
                        </Link>
                    </p>
                </section>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-200 text-center text-sm text-stone-500">
                <p>Copyright © 2026 Orient Relais - Tous droits réservés</p>
            </div>
        </div>
    );
}
