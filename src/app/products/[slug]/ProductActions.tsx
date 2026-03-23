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
    <div className="space-y-4">
      {/* Size */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] uppercase tracking-[0.08em] text-gray-600 font-medium">Size</span>
          <button className="text-[11px] text-[var(--color-accent)] underline">Size Guide</button>
        </div>
        <div className="flex gap-1.5">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => { setSelectedSize(size); setShowSizeError(false); }}
              className={`min-w-[40px] h-10 px-2.5 text-[12px] border transition-all rounded-sm ${
                selectedSize === size
                  ? "border-black text-black font-medium"
                  : "border-black/10 text-gray-500 hover:border-black/25"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        {showSizeError && (
          <p className="text-[11px] text-[var(--color-coral)] mt-1.5">Please select a size</p>
        )}
      </div>

      {/* Add to bag */}
      <button
        onClick={handleAddToCart}
        disabled={product.soldOut}
        className={`w-full py-3.5 text-[11px] uppercase tracking-[0.12em] font-medium transition-colors rounded-sm ${
          added
            ? "bg-[var(--color-jungle)] text-white"
            : product.soldOut
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {product.soldOut ? "Sold Out" : added ? "Added!" : "Add to Bag"}
      </button>
    </div>
  );
}
