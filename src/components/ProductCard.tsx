"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link href={`/products/${product.slug}`} className="group block product-card-lift rounded-sm focus-ring">
      <div className="overflow-hidden aspect-[3/4] bg-[var(--color-sand)] rounded-sm relative">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center bg-[var(--color-sand)]">
            <span className="font-[family-name:var(--font-display)] text-lg text-[var(--color-accent)]/40">
              Gerimis
            </span>
          </div>
        ) : (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover product-image-zoom"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        {/* Sale badge */}
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-[var(--color-coral)] text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm font-medium">
            Sale
          </span>
        )}
        {/* Quick view hint on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-[var(--color-accent)]">
          {product.category}
        </p>
        <h3 className="text-sm font-medium group-hover:text-[var(--color-accent)] transition-colors duration-200">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500">{product.color}</p>
      </div>
    </Link>
  );
}
