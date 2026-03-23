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
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="overflow-hidden aspect-square bg-[var(--color-sand)] rounded-sm relative">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-[family-name:var(--font-display)] text-lg text-black/10">
              Gerimis
            </span>
          </div>
        ) : (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="mt-3 space-y-0.5">
        <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
          {product.category}
        </p>
        <h3 className="text-sm font-medium group-hover:text-[var(--color-accent)] transition-colors leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 font-light">
          {formatPrice(product.price)}
          {product.originalPrice && (
            <span className="ml-2 line-through text-gray-300">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}
