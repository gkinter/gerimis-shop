import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="overflow-hidden aspect-[3/4] bg-[var(--color-sand)] rounded-sm">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover product-image-zoom"
        />
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-[var(--color-accent)]">
          {product.category}
        </p>
        <h3 className="text-sm font-medium group-hover:text-[var(--color-accent)] transition-colors">
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
