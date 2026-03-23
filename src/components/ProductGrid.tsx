import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4 | 6;
}

export function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  const gridCols: Record<number, string> = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="font-[family-name:var(--font-display)] text-xl text-gray-400 mb-2">
          No ponchos here... yet
        </p>
        <p className="text-sm text-gray-400">
          Check back soon for new drops.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10`}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
