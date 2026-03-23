"use client";

import { useCart } from "@/components/CartProvider";
import type { Product } from "@/data/products";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() => addItem(product)}
      className="block w-full py-3 bg-black text-white text-center text-sm uppercase tracking-[0.15em] hover:bg-gray-800 transition-colors"
    >
      Add to Wishlist
    </button>
  );
}
