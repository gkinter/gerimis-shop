"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import type { Product } from "@/data/products";

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [showSizeError, setShowSizeError] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizeError(true);
      return;
    }
    setShowSizeError(false);
    addItem(product);
  };

  return (
    <div className="space-y-4">
      {/* Size selector */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Size
          </p>
          <button className="text-xs text-[var(--color-accent)] underline">
            Size Guide
          </button>
        </div>
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => {
                setSelectedSize(size);
                setShowSizeError(false);
              }}
              className={`w-12 h-12 border text-sm transition-all ${
                selectedSize === size
                  ? "border-black bg-black text-white"
                  : "border-black/20 hover:border-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        {showSizeError && (
          <p className="text-xs text-red-500 mt-2">Please select a size</p>
        )}
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        disabled={product.soldOut}
        className="w-full py-4 bg-[var(--color-accent)] text-white text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {product.soldOut ? "Sold Out" : "Add to Bag"}
      </button>
    </div>
  );
}
