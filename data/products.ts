// Complete Product Catalog for Orient Relais
// Based on real data from orient-relais.com

export interface Product {
    id: string;
    title: string;
    slug: string;
    price: number;
    originalPrice?: number; // For promo items
    description: string;
    shortDescription: string;
    image: string;
    images?: string[];
    category: string;
    subcategory?: string;
    badges?: { text: string; color: "green" | "orange" | "stone" }[];
    rating: number;
    reviews: number;
    inStock: boolean;
    featured?: boolean;
    benefits?: string[];
    ingredients?: string[];
    usage?: string;
    weight?: string;
}

// ==========================================
// SAVONS BIO
// ==========================================
export const SAVONS: Product[] = [
    {
        id: "savon-rose-damas",
        title: "Savon d'Alep à la rose de Damas bio",
        slug: "savon-dalep-rose-damas-bio",
        price: 4.50,
        originalPrice: 5.00,
        description: "Ce savon d'Alep enrichi à l'huile essentielle de rose de Damas offre une expérience sensorielle unique. La rose de Damas, connue pour ses propriétés régénérantes et apaisantes, sublime ce savon traditionnel pour un soin délicat de votre peau.",
        shortDescription: "Savon d'Alep enrichi à l'huile essentielle de rose de Damas bio.",
        image: "/products/savon-rose-damas.jpg",
        category: "savons",
        badges: [{ text: "Promo", color: "orange" }, { text: "Bio", color: "green" }],
        rating: 4.8,
        reviews: 67,
        inStock: true,
        featured: true,
        benefits: ["Régénérant", "Apaisant", "Parfum délicat", "Tous types de peaux"],
        ingredients: ["Huile d'olive", "Huile de baie de laurier", "Huile essentielle de rose de Damas"],
        usage: "Faire mousser sur peau humide, masser délicatement puis rincer.",
        weight: "100g"
    },
    {
        id: "savon-encens",
        title: "Savon d'Alep à l'encens",
        slug: "savon-dalep-encens",
        price: 1.50,
        description: "Ce savon d'Alep parfumé à l'encens vous transporte dans une ambiance orientale authentique. L'encens, utilisé depuis des millénaires, apporte ses propriétés purifiantes à ce savon traditionnel.",
        shortDescription: "Savon d'Alep traditionnel parfumé à l'encens.",
        image: "/products/savon-encens.jpg",
        category: "savons",
        badges: [{ text: "Petit prix", color: "stone" }],
        rating: 4.6,
        reviews: 42,
        inStock: true,
        benefits: ["Purifiant", "Parfum oriental", "Économique"],
        weight: "100g"
    },
    {
        id: "savon-ambre-oud",
        title: "Savon d'Alep Ambre et Oud",
        slug: "savon-dalep-ambre-oud",
        price: 6.00,
        originalPrice: 7.00,
        description: "Alliance luxueuse de l'ambre et du oud, ce savon d'Alep offre un parfum envoûtant et raffiné. Le oud, bois précieux d'Orient, apporte une note boisée et chaleureuse à ce savon d'exception.",
        shortDescription: "Savon d'Alep au parfum envoûtant d'ambre et de oud.",
        image: "/products/savon-ambre-oud.jpg",
        category: "savons",
        badges: [{ text: "Promo", color: "orange" }, { text: "Luxe", color: "stone" }],
        rating: 4.9,
        reviews: 89,
        inStock: true,
        featured: true,
        benefits: ["Parfum luxueux", "Hydratant", "Longue tenue"],
        weight: "100g"
    },
    {
        id: "savon-mer-morte",
        title: "Savon d'Alep à la boue de la mer Morte",
        slug: "savon-dalep-boue-mer-morte",
        price: 3.50,
        originalPrice: 4.50,
        description: "Ce savon combine les bienfaits du savon d'Alep traditionnel avec les minéraux de la boue de la mer Morte. Idéal pour les peaux à problèmes, il nettoie en profondeur tout en apaisant les irritations.",
        shortDescription: "Savon d'Alep enrichi à la boue de la mer Morte.",
        image: "/products/savon-mer-morte.jpg",
        category: "savons",
        badges: [{ text: "Promo", color: "orange" }, { text: "Peaux sensibles", color: "green" }],
        rating: 4.7,
        reviews: 56,
        inStock: true,
        benefits: ["Détoxifiant", "Minéraux", "Peaux à problèmes", "Apaisant"],
        weight: "100g"
    },
    {
        id: "savon-traditionnel-40",
        title: "Savon d'Alep traditionnel 40% laurier",
        slug: "savon-dalep-traditionnel-40-laurier",
        price: 8.90,
        description: "Le savon d'Alep authentique avec 40% d'huile de baie de laurier. Cette concentration élevée en laurier lui confère des propriétés antiseptiques et purifiantes exceptionnelles, idéal pour les peaux grasses ou à problèmes.",
        shortDescription: "Savon d'Alep authentique haute concentration en laurier (40%).",
        image: "/products/savon-traditionnel-40.jpg",
        category: "savons",
        badges: [{ text: "Best-seller", color: "orange" }, { text: "40% Laurier", color: "green" }],
        rating: 4.9,
        reviews: 234,
        inStock: true,
        featured: true,
        benefits: ["Antiseptique", "Purifiant", "Peaux grasses", "Acné"],
        ingredients: ["60% Huile d'olive", "40% Huile de baie de laurier"],
        weight: "200g"
    },
    {
        id: "savon-liquide-5",
        title: "Savon d'Alep liquide 5% laurier – 200 ml",
        slug: "savon-dalep-liquide-5-laurier",
        price: 9.90,
        description: "Version liquide du savon d'Alep traditionnel, pratique pour un usage quotidien. Avec 5% d'huile de laurier, il convient à toute la famille pour le corps et les mains.",
        shortDescription: "Savon d'Alep liquide pratique pour usage quotidien.",
        image: "/products/savon-liquide.jpg",
        category: "savons",
        subcategory: "savon-liquide",
        badges: [{ text: "Pratique", color: "stone" }],
        rating: 4.5,
        reviews: 78,
        inStock: true,
        benefits: ["Usage quotidien", "Toute la famille", "Pratique"],
        weight: "200ml"
    },
    {
        id: "gel-douche-ambre-oud",
        title: "Gel douche parfum Ambre et Oud",
        slug: "gel-douche-ambre-oud",
        price: 12.90,
        description: "Gel douche onctueux au parfum envoûtant d'ambre et de oud. Sa formule douce nettoie la peau en préservant son hydratation naturelle tout en laissant un parfum délicat.",
        shortDescription: "Gel douche au parfum luxueux d'ambre et oud.",
        image: "/products/gel-douche.jpg",
        category: "savons",
        subcategory: "savon-liquide",
        badges: [{ text: "Nouveau", color: "stone" }],
        rating: 4.7,
        reviews: 34,
        inStock: true,
        weight: "250ml"
    }
];

// ==========================================
// COMPLÉMENTS ALIMENTAIRES BIO
// ==========================================
export const COMPLEMENTS: Product[] = [
    {
        id: "pollen-abeille",
        title: "Pollen d'abeille bio 150 G",
        slug: "pollen-abeille-bio",
        price: 7.00,
        description: "Le pollen d'abeille est un superaliment naturel riche en protéines, vitamines et minéraux. Il soutient le système immunitaire et apporte vitalité au quotidien.",
        shortDescription: "Superaliment naturel riche en protéines et vitamines.",
        image: "/products/pollen.jpg",
        category: "complements-alimentaires",
        badges: [{ text: "Bio", color: "green" }, { text: "Superaliment", color: "orange" }],
        rating: 4.8,
        reviews: 92,
        inStock: true,
        featured: true,
        benefits: ["Immunité", "Vitalité", "Protéines", "Vitamines"],
        weight: "150g"
    },
    {
        id: "moringa",
        title: "MORINGA 60 GÉLULES",
        slug: "moringa-60-gelules",
        price: 10.00,
        originalPrice: 12.00,
        description: "Le Moringa, surnommé 'arbre de vie', est une plante aux vertus exceptionnelles. Riche en antioxydants, vitamines et minéraux, il contribue à la vitalité générale.",
        shortDescription: "Gélules de Moringa bio pour vitalité et bien-être.",
        image: "/products/moringa.jpg",
        category: "complements-alimentaires",
        badges: [{ text: "Promo", color: "orange" }, { text: "Bio", color: "green" }],
        rating: 4.7,
        reviews: 65,
        inStock: true,
        benefits: ["Antioxydant", "Vitalité", "Immunité"],
        weight: "60 gélules"
    },
    {
        id: "vidanga",
        title: "VIDANGA EXTRAIT 60 GÉLULES DE 335 MG",
        slug: "vidanga-extrait-60-gelules",
        price: 14.50,
        originalPrice: 18.00,
        description: "Le Vidanga est une plante ayurvédique traditionnellement utilisée pour soutenir la digestion et purifier l'organisme. Extrait concentré pour une efficacité optimale.",
        shortDescription: "Plante ayurvédique pour la digestion et purification.",
        image: "/products/vidanga.jpg",
        category: "complements-alimentaires",
        badges: [{ text: "Promo", color: "orange" }, { text: "Ayurvéda", color: "green" }],
        rating: 4.6,
        reviews: 38,
        inStock: true,
        benefits: ["Digestion", "Purification", "Ayurvéda"],
        weight: "60 gélules - 335mg"
    },
    {
        id: "andrographis",
        title: "Andrographis (Echinacée d'Inde) – 60 gélules",
        slug: "andrographis-60-gelules",
        price: 12.00,
        description: "L'Andrographis, aussi appelée Echinacée d'Inde, est reconnue pour son soutien au système immunitaire, particulièrement en période hivernale.",
        shortDescription: "Soutien naturel du système immunitaire.",
        image: "/products/andrographis.jpg",
        category: "complements-alimentaires",
        badges: [{ text: "Immunité", color: "green" }],
        rating: 4.5,
        reviews: 41,
        inStock: true,
        benefits: ["Immunité", "Hiver", "Défenses naturelles"],
        weight: "60 gélules"
    },
    {
        id: "bilva",
        title: "BILVA BIO 60 GÉLULES",
        slug: "bilva-bio-60-gelules",
        price: 11.00,
        description: "Le Bilva (Aegle marmelos) est un fruit sacré en Inde, traditionnellement utilisé en Ayurvéda pour soutenir la digestion et l'équilibre intestinal.",
        shortDescription: "Soutien digestif traditionnel ayurvédique.",
        image: "/products/bilva.jpg",
        category: "complements-alimentaires",
        badges: [{ text: "Bio", color: "green" }, { text: "Ayurvéda", color: "stone" }],
        rating: 4.4,
        reviews: 28,
        inStock: true,
        benefits: ["Digestion", "Équilibre intestinal"],
        weight: "60 gélules"
    },
    {
        id: "gingembre",
        title: "Gingembre indien bio (Andraka) – 60 gélules",
        slug: "gingembre-bio-60-gelules",
        price: 10.50,
        description: "Le gingembre indien (Andraka) est réputé pour ses propriétés digestives et anti-nauséeuses. Il aide également à maintenir la vitalité et le tonus.",
        shortDescription: "Gingembre bio pour digestion et vitalité.",
        image: "/products/gingembre.jpg",
        category: "complements-alimentaires",
        badges: [{ text: "Bio", color: "green" }],
        rating: 4.7,
        reviews: 72,
        inStock: true,
        benefits: ["Digestion", "Anti-nausée", "Vitalité", "Tonus"],
        weight: "60 gélules"
    },
    {
        id: "guduchi",
        title: "GUDUCHI BIO 60 GÉLULES 570 MG",
        slug: "guduchi-bio-60-gelules",
        price: 13.00,
        description: "Le Guduchi (Tinospora cordifolia) est une plante adaptogène majeure de l'Ayurvéda. Elle aide à renforcer les défenses naturelles et à maintenir l'équilibre du corps.",
        shortDescription: "Plante adaptogène pour renforcer les défenses.",
        image: "/products/guduchi.jpg",
        category: "complements-alimentaires",
        badges: [{ text: "Bio", color: "green" }, { text: "Adaptogène", color: "orange" }],
        rating: 4.6,
        reviews: 35,
        inStock: true,
        benefits: ["Adaptogène", "Immunité", "Équilibre"],
        weight: "60 gélules - 570mg"
    },
    {
        id: "huile-nigelle-capsules",
        title: "Huile de Nigelle Bio – 120 capsules",
        slug: "huile-nigelle-bio-120-capsules",
        price: 18.00,
        description: "L'huile de nigelle, aussi appelée 'graine bénie', est utilisée depuis des millénaires pour ses propriétés immunostimulantes et anti-inflammatoires.",
        shortDescription: "Capsules d'huile de nigelle pour l'immunité.",
        image: "/products/nigelle-capsules.jpg",
        category: "complements-alimentaires",
        badges: [{ text: "Bio", color: "green" }, { text: "Best-seller", color: "orange" }],
        rating: 4.9,
        reviews: 156,
        inStock: true,
        featured: true,
        benefits: ["Immunité", "Anti-inflammatoire", "Antioxydant"],
        weight: "120 capsules"
    },
    {
        id: "onagre-bourrache",
        title: "Huile Onagre-Bourrache Bio – 120 capsules",
        slug: "huile-onagre-bourrache-bio",
        price: 16.00,
        description: "Association d'huiles d'onagre et de bourrache, riches en acides gras essentiels oméga-6. Idéal pour la beauté de la peau et l'équilibre hormonal féminin.",
        shortDescription: "Oméga-6 pour la peau et l'équilibre féminin.",
        image: "/products/onagre-bourrache.jpg",
        category: "complements-alimentaires",
        subcategory: "femme",
        badges: [{ text: "Bio", color: "green" }, { text: "Beauté", color: "stone" }],
        rating: 4.7,
        reviews: 89,
        inStock: true,
        benefits: ["Beauté peau", "Oméga-6", "Équilibre féminin"],
        weight: "120 capsules"
    },
    {
        id: "lithotamne",
        title: "Lithotamne 90 GÉLULES",
        slug: "lithotamne-90-gelules",
        price: 12.00,
        description: "Le lithotamne est une algue marine exceptionnellement riche en calcium et magnésium naturels. Il contribue au maintien d'une ossature normale.",
        shortDescription: "Algue marine riche en calcium naturel.",
        image: "/products/lithotamne.jpg",
        category: "complements-alimentaires",
        badges: [{ text: "Calcium", color: "green" }],
        rating: 4.5,
        reviews: 47,
        inStock: true,
        benefits: ["Ossature", "Calcium", "Magnésium"],
        weight: "90 gélules"
    },
    {
        id: "manjistha",
        title: "Manjistha certifié bio – 100 g",
        slug: "manjistha-bio-100g",
        price: 9.00,
        description: "Le Manjistha (Rubia cordifolia) est une plante ayurvédique puissante, connue pour ses propriétés purifiantes du sang et son action bénéfique sur la peau.",
        shortDescription: "Plante purifiante pour une peau saine.",
        image: "/products/manjistha.jpg",
        category: "complements-alimentaires",
        badges: [{ text: "Bio", color: "green" }, { text: "Peau", color: "stone" }],
        rating: 4.6,
        reviews: 31,
        inStock: true,
        benefits: ["Purifiant", "Peau", "Détox"],
        weight: "100g poudre"
    },
    {
        id: "miel-bourdaine-250",
        title: "Miel de Bourdaine 250G",
        slug: "miel-bourdaine-250g",
        price: 12.00,
        description: "Miel rare et précieux récolté sur les fleurs de bourdaine. Ce miel ambré aux notes boisées est apprécié pour ses qualités gustatives et ses propriétés digestives.",
        shortDescription: "Miel rare aux propriétés digestives.",
        image: "/products/miel-bourdaine.jpg",
        category: "complements-alimentaires",
        subcategory: "miels",
        badges: [{ text: "Rare", color: "orange" }],
        rating: 4.8,
        reviews: 52,
        inStock: true,
        benefits: ["Digestion", "Naturel", "Artisanal"],
        weight: "250g"
    },
    {
        id: "miel-montagne",
        title: "Miel de montagne 250 G",
        slug: "miel-montagne-250g",
        price: 14.00,
        description: "Miel de montagne récolté en altitude, où la flore sauvage préservée offre un nectar d'une qualité exceptionnelle. Goût riche et complexe.",
        shortDescription: "Miel de montagne à la flore sauvage préservée.",
        image: "/products/miel-montagne.jpg",
        category: "complements-alimentaires",
        subcategory: "miels",
        badges: [{ text: "Premium", color: "orange" }],
        rating: 4.9,
        reviews: 38,
        inStock: true,
        benefits: ["Énergie", "Naturel", "Qualité premium"],
        weight: "250g"
    }
];

// ==========================================
// HUILES ESSENTIELLES BIO (Terra Etica)
// ==========================================
export const HUILES_ESSENTIELLES: Product[] = [
    {
        id: "he-girofle",
        title: "Huile Essentielle Clou de Girofle – 10ml",
        slug: "huile-essentielle-girofle-10ml",
        price: 6.50,
        description: "L'huile essentielle de clou de girofle est reconnue pour ses puissantes propriétés antiseptiques et analgésiques. Traditionnellement utilisée pour les soins bucco-dentaires.",
        shortDescription: "Antiseptique puissant, soins bucco-dentaires.",
        image: "/products/he-girofle.jpg",
        category: "huiles-essentielles",
        badges: [{ text: "Bio", color: "green" }, { text: "Terra Etica", color: "stone" }],
        rating: 4.7,
        reviews: 45,
        inStock: true,
        benefits: ["Antiseptique", "Dents", "Analgésique"],
        weight: "10ml"
    },
    {
        id: "he-cypres",
        title: "Huile essentielle de Cyprès bio – 5ml",
        slug: "huile-essentielle-cypres-bio-5ml",
        price: 7.50,
        description: "L'huile essentielle de cyprès est réputée pour son action sur la circulation sanguine et lymphatique. Elle aide à tonifier et décongestionner.",
        shortDescription: "Circulation, tonifiant, décongestionnant.",
        image: "/products/he-cypres.jpg",
        category: "huiles-essentielles",
        badges: [{ text: "Bio", color: "green" }],
        rating: 4.6,
        reviews: 32,
        inStock: true,
        benefits: ["Circulation", "Tonifiant", "Jambes légères"],
        weight: "5ml"
    },
    {
        id: "he-laurier",
        title: "Huile essentielle de Laurier noble bio – 5ml",
        slug: "huile-essentielle-laurier-noble-bio-5ml",
        price: 9.00,
        description: "L'huile essentielle de laurier noble possède des propriétés antibactériennes et stimulantes. Elle favorise la confiance en soi et le courage.",
        shortDescription: "Antibactérien, stimulant, confiance en soi.",
        image: "/products/he-laurier.jpg",
        category: "huiles-essentielles",
        badges: [{ text: "Bio", color: "green" }, { text: "Premium", color: "orange" }],
        rating: 4.8,
        reviews: 28,
        inStock: true,
        benefits: ["Antibactérien", "Confiance", "Stimulant"],
        weight: "5ml"
    },
    {
        id: "he-niaouli",
        title: "Huile essentielle de Niaouli bio – 10ml",
        slug: "huile-essentielle-niaouli-bio-10ml",
        price: 5.50,
        description: "L'huile essentielle de niaouli est un incontournable de l'aromathérapie. Anti-infectieuse et expectorante, elle est précieuse en hiver.",
        shortDescription: "Anti-infectieux, expectorant, hiver.",
        image: "/products/he-niaouli.jpg",
        category: "huiles-essentielles",
        badges: [{ text: "Bio", color: "green" }],
        rating: 4.7,
        reviews: 67,
        inStock: true,
        featured: true,
        benefits: ["Anti-infectieux", "Expectorant", "Immunité"],
        weight: "10ml"
    },
    {
        id: "he-ravintsara",
        title: "Huile essentielle de Ravintsara bio – 10ml",
        slug: "huile-essentielle-ravintsara-bio-10ml",
        price: 8.00,
        description: "Le ravintsara est l'huile essentielle antivirale par excellence. Incontournable pour renforcer les défenses immunitaires et lutter contre les infections hivernales.",
        shortDescription: "Antiviral puissant, immunité, hiver.",
        image: "/products/he-ravintsara.jpg",
        category: "huiles-essentielles",
        badges: [{ text: "Bio", color: "green" }, { text: "Best-seller", color: "orange" }],
        rating: 4.9,
        reviews: 134,
        inStock: true,
        featured: true,
        benefits: ["Antiviral", "Immunité", "Énergie"],
        weight: "10ml"
    },
    {
        id: "he-eucalyptus",
        title: "Huile Essentielle Eucalyptus Globulus – 5ml",
        slug: "huile-essentielle-eucalyptus-globulus-5ml",
        price: 4.50,
        description: "L'eucalyptus globulus est l'allié des voies respiratoires. Expectorant et décongestionnant, il libère la respiration et purifie l'air.",
        shortDescription: "Respiratoire, expectorant, purifiant.",
        image: "/products/he-eucalyptus.jpg",
        category: "huiles-essentielles",
        badges: [{ text: "Bio", color: "green" }],
        rating: 4.6,
        reviews: 89,
        inStock: true,
        benefits: ["Voies respiratoires", "Expectorant", "Purifiant"],
        weight: "5ml"
    },
    {
        id: "he-orange",
        title: "Huile Essentielle Orange Douce – 10ml",
        slug: "huile-essentielle-orange-douce-10ml",
        price: 4.00,
        description: "L'huile essentielle d'orange douce apporte bonne humeur et détente. Son parfum fruité et sucré est idéal pour créer une atmosphère apaisante.",
        shortDescription: "Relaxant, bonne humeur, atmosphère apaisante.",
        image: "/products/he-orange.jpg",
        category: "huiles-essentielles",
        badges: [{ text: "Bio", color: "green" }, { text: "Relaxant", color: "stone" }],
        rating: 4.8,
        reviews: 76,
        inStock: true,
        benefits: ["Relaxant", "Bonne humeur", "Sommeil"],
        weight: "10ml"
    },
    {
        id: "he-thym",
        title: "Huile Essentielle Thym Thymol – 5ml",
        slug: "huile-essentielle-thym-thymol-5ml",
        price: 8.50,
        description: "Le thym à thymol est une huile essentielle puissante aux propriétés anti-infectieuses majeures. À utiliser avec précaution, toujours diluée.",
        shortDescription: "Anti-infectieux puissant, usage expert.",
        image: "/products/he-thym.jpg",
        category: "huiles-essentielles",
        badges: [{ text: "Bio", color: "green" }, { text: "Puissant", color: "orange" }],
        rating: 4.5,
        reviews: 23,
        inStock: true,
        benefits: ["Anti-infectieux", "Tonifiant", "Immunité"],
        weight: "5ml"
    }
];

// ==========================================
// COFFRETS CADEAUX
// ==========================================
export const COFFRETS: Product[] = [
    {
        id: "coffret-hiver",
        title: "Coffret de douceur d'hiver Najel",
        slug: "coffret-douceur-hiver-najel",
        price: 30.00,
        originalPrice: 35.00,
        description: "Ce coffret cadeau Najel réunit les essentiels pour affronter l'hiver en douceur. Une sélection de produits naturels pour prendre soin de sa peau pendant la saison froide.",
        shortDescription: "Coffret hivernal pour prendre soin de sa peau.",
        image: "/products/coffret-hiver.jpg",
        category: "coffrets",
        badges: [{ text: "Promo", color: "orange" }, { text: "Idée cadeau", color: "stone" }],
        rating: 4.9,
        reviews: 45,
        inStock: true,
        featured: true,
        benefits: ["Cadeau idéal", "Soin complet", "Marque Najel"],
    },
    {
        id: "coffret-cocooning",
        title: "Coffret cadeau cocooning Najel",
        slug: "coffret-cocooning-najel",
        price: 30.00,
        originalPrice: 35.00,
        description: "Un coffret dédié au bien-être et à la détente. Parfait pour offrir ou se faire plaisir avec des produits Najel de qualité pour un moment cocooning.",
        shortDescription: "Coffret bien-être et détente Najel.",
        image: "/products/coffret-cocooning.jpg",
        category: "coffrets",
        badges: [{ text: "Promo", color: "orange" }, { text: "Bien-être", color: "green" }],
        rating: 4.8,
        reviews: 38,
        inStock: true,
        benefits: ["Détente", "Bien-être", "Coffret complet"],
    },
    {
        id: "coffret-mer-morte",
        title: "COFFRET CADEAU PRODUIT DE LA MER MORTE",
        slug: "coffret-cadeau-mer-morte",
        price: 30.00,
        description: "Découvrez les bienfaits exceptionnels des minéraux de la mer Morte avec ce coffret complet. Des soins naturels pour purifier et régénérer la peau.",
        shortDescription: "Coffret aux minéraux de la mer Morte.",
        image: "/products/coffret-mer-morte.jpg",
        category: "coffrets",
        badges: [{ text: "Exclusif", color: "orange" }, { text: "Mer Morte", color: "green" }],
        rating: 4.7,
        reviews: 29,
        inStock: true,
        benefits: ["Minéraux", "Purification", "Régénération"],
    }
];

// ==========================================
// ACCESSOIRES
// ==========================================
export const ACCESSOIRES: Product[] = [
    {
        id: "sac-savon",
        title: "Sac à savon sisal et coton",
        slug: "sac-savon-sisal-coton",
        price: 4.00,
        description: "Ce sac exfoliant en sisal et coton est l'accessoire idéal pour accompagner votre savon d'Alep. Il permet une exfoliation douce tout en prolongeant la durée de vie de votre savon.",
        shortDescription: "Sac exfoliant naturel pour savon.",
        image: "/products/sac-savon.jpg",
        category: "accessoires",
        badges: [{ text: "Naturel", color: "green" }, { text: "Zéro déchet", color: "stone" }],
        rating: 4.6,
        reviews: 87,
        inStock: true,
        featured: true,
        benefits: ["Exfoliant", "Écologique", "Prolonge durée savon"],
    },
    {
        id: "spray-cedre-citron",
        title: "Spray d'ambiance Cèdre Citron – 100 ml",
        slug: "spray-ambiance-cedre-citron",
        price: 9.50,
        description: "Ce spray d'ambiance aux huiles essentielles de cèdre et citron purifie et parfume agréablement votre intérieur. Une note boisée et fraîche pour une atmosphère saine.",
        shortDescription: "Spray purifiant cèdre et citron.",
        image: "/products/spray-cedre.jpg",
        category: "accessoires",
        badges: [{ text: "Naturel", color: "green" }],
        rating: 4.7,
        reviews: 34,
        inStock: true,
        benefits: ["Purifiant", "Parfum naturel", "Atmosphère saine"],
        weight: "100ml"
    }
];

// ==========================================
// ALL PRODUCTS
// ==========================================
export const ALL_PRODUCTS: Product[] = [
    ...SAVONS,
    ...COMPLEMENTS,
    ...HUILES_ESSENTIELLES,
    ...COFFRETS,
    ...ACCESSOIRES
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================
export function getProductBySlug(slug: string): Product | undefined {
    return ALL_PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
    return ALL_PRODUCTS.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
    return ALL_PRODUCTS.filter(p => p.featured);
}

export function getPromoProducts(): Product[] {
    return ALL_PRODUCTS.filter(p => p.originalPrice && p.originalPrice > p.price);
}

// Categories config
export const CATEGORIES = [
    { slug: "savons", title: "Savons Bio", description: "Savons d'Alep authentiques et naturels" },
    { slug: "complements-alimentaires", title: "Compléments Alimentaires", description: "Compléments naturels et bio pour votre santé" },
    { slug: "huiles-essentielles", title: "Huiles Essentielles Bio", description: "Huiles essentielles 100% pures et naturelles" },
    { slug: "coffrets", title: "Coffrets Cadeaux", description: "Coffrets bien-être à offrir ou se faire plaisir" },
    { slug: "accessoires", title: "Accessoires", description: "Accessoires naturels pour vos rituels beauté" },
];
