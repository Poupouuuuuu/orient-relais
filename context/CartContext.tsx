"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
    variant?: string;
}

interface CartContextType {
    items: CartItem[];
    addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
    removeItem: (id: string, variant?: string) => void;
    updateQuantity: (id: string, delta: number, variant?: string) => void;
    clearCart: () => void;
    cartCount: number;
    subtotal: number;
    isDrawerOpen: boolean;
    setIsDrawerOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Load from LocalStorage
    useEffect(() => {
        setIsMounted(true);
        const saved = localStorage.getItem("orient-relais-cart");
        if (saved) {
            try {
                setItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save to LocalStorage
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("orient-relais-cart", JSON.stringify(items));
        }
    }, [items, isMounted]);

    const addItem = (newItem: Omit<CartItem, "quantity"> & { quantity?: number }) => {
        setItems((currentItems) => {
            const existingItemIndex = currentItems.findIndex(
                (item) => item.id === newItem.id && item.variant === newItem.variant
            );

            if (existingItemIndex > -1) {
                const updatedItems = [...currentItems];
                updatedItems[existingItemIndex].quantity += newItem.quantity || 1;
                return updatedItems;
            } else {
                return [...currentItems, { ...newItem, quantity: newItem.quantity || 1 }];
            }
        });
        setIsDrawerOpen(true); // Auto-open drawer on add
    };

    const removeItem = (id: string, variant?: string) => {
        setItems((currentItems) =>
            currentItems.filter((item) => !(item.id === id && item.variant === variant))
        );
    };

    const updateQuantity = (id: string, delta: number, variant?: string) => {
        setItems((currentItems) => {
            return currentItems.map((item) => {
                if (item.id === id && item.variant === variant) {
                    const newQty = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQty };
                }
                return item;
            });
        });
    };

    const clearCart = () => {
        setItems([]);
    };

    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                cartCount,
                subtotal,
                isDrawerOpen,
                setIsDrawerOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
