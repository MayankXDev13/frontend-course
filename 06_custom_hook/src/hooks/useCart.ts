import { useState, useEffect, useMemo } from "react";
import type { Product } from "../data/products";

export interface CartItem extends Product {
  quantity: number;
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
      return [];
    }
  });

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [cart]);

  // Sync across tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "cart") {
        try {
          setCart(e.newValue ? JSON.parse(e.newValue) : []);
        } catch (error) {
          console.error("Failed to parse cart from localStorage", error);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find(item => item.id === product.id);

      if (existing) {
        return current.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(current => current.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;

    setCart(current =>
      current.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const total = useMemo(() => {
    return Number(
      cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ).toFixed(2)
    );
  }, [cart]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    total,
  };
}
