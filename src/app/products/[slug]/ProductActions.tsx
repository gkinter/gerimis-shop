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
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizeError(true);
      return;
    }
    setShowSizeError(false);
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Size selector */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="label-editorial text-gray-500">
            Size
          </p>
          <button className="text-xs text-[var(--color-accent)] underline hover:opacity-70 transition-opacity focus-ring">
            Size Guide
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => {
                setSelectedSize(size);
                setShowSizeError(false);
              }}
              className={`min-w-[48px] h-12 px-3 border text-sm transition-all duration-200 rounded-sm focus-ring ${
                selectedSize === size
                  ? "border-black bg-transparent text-black font-semibold"
                  : "border-black/10 text-gray-600 hover:border-black/30"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        {showSizeError && (
          <p className="text-xs text-[var(--color-coral)] mt-2 animate-fade-in-up" style={{ animationDuration: "0.3s" }}>
            Please select a size
          </p>
        )}
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        disabled={product.soldOut}
        className={`w-full py-5 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-200 btn-tactile focus-ring rounded-sm ${
          added
            ? "bg-[var(--color-jungle)] text-white"
            : product.soldOut
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-900"
        }`}
      >
        {product.soldOut ? "Sold Out" : added ? "Added to Bag!" : "Add to Bag"}
      </button>
    </div>
  );
}
