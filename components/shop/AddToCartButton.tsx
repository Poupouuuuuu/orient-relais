"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
    product: {
        id: string;
        title: string;
        price: number;
        image: string;
        slug: string;
    };
    variant?: string;
    className?: string;
}

export function AddToCartButton({ product, variant = "Standard", className }: AddToCartButtonProps) {
    const { addItem } = useCart();

    const handleAdd = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent link navigation if inside a Link
        addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            variant: variant,
            quantity: 1
        });
    };

    return (
        <Button
            size="icon"
            className={`h-9 w-9 rounded-full bg-white text-stone-800 shadow-lg hover:bg-primary hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 ${className}`}
            onClick={handleAdd}
            aria-label="Ajouter au panier"
        >
            <ShoppingBag className="h-4 w-4" />
        </Button>
    );
}
