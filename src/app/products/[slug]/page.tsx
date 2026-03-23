import { products, getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { ProductGrid } from "@/components/ProductGrid";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductGallery } from "./ProductGallery";
import { ProductActions } from "./ProductActions";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.name} — Gerimis Rain Ponchos`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="px-4 md:px-8 py-4 text-xs text-gray-400" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-gray-600 focus-ring">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/collections/all" className="hover:text-gray-600 focus-ring">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{product.name}</span>
      </nav>

      <div className="px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product info */}
          <div className="lg:sticky lg:top-36 lg:self-start space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-2">
                {product.category}
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light">
                {product.name}
              </h1>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-xl font-medium">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-base text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color swatch */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Color: {product.color}
              </p>
            </div>

            {/* Size + Add to cart */}
            <ProductActions product={product} />

            {/* Details accordion */}
            <div className="space-y-0 border-t border-black/10">
              <details className="border-b border-black/10 py-4 group">
                <summary className="flex justify-between items-center cursor-pointer text-xs uppercase tracking-widest focus-ring py-1">
                  Details & Features
                  <span className="text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <ul className="mt-3 space-y-2">
                  {product.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-[var(--color-accent)] mt-0.5">&#8226;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </details>

              <details className="border-b border-black/10 py-4 group">
                <summary className="flex justify-between items-center cursor-pointer text-xs uppercase tracking-widest focus-ring py-1">
                  Materials
                  <span className="text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="mt-3 space-y-2">
                  {product.materials.map((mat, i) => (
                    <p key={i} className="text-sm text-gray-600">{mat}</p>
                  ))}
                </div>
              </details>

              <details className="border-b border-black/10 py-4 group">
                <summary className="flex justify-between items-center cursor-pointer text-xs uppercase tracking-widest focus-ring py-1">
                  Shipping
                  <span className="text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="mt-3 space-y-2 text-sm text-gray-600">
                  <p>Ships from: {product.shippingFrom}</p>
                  <p>Ships to: {product.shippingTo}</p>
                  {product.leadTime && <p>Delivery: {product.leadTime}</p>}
                  <p>Free shipping on orders over $150.</p>
                </div>
              </details>
            </div>

            {/* Share */}
            <div className="flex gap-4 text-xs text-gray-400 pt-2">
              <span className="uppercase tracking-widest">Share:</span>
              <a href="#" className="hover:text-[var(--color-accent)] transition-colors focus-ring">Facebook</a>
              <a href="#" className="hover:text-[var(--color-accent)] transition-colors focus-ring">X</a>
              <a href="#" className="hover:text-[var(--color-accent)] transition-colors focus-ring">Pinterest</a>
            </div>
          </div>
        </div>
      </div>

      {/* Lifestyle image */}
      {product.lifestyleImage && (
        <section className="px-4 md:px-0 py-8">
          <div className="aspect-[21/9] overflow-hidden bg-[var(--color-sand)] rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.lifestyleImage}
              alt={`${product.name} in action`}
              className="w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </section>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <section className="px-4 md:px-8 py-16 border-t border-black/5">
          <div className="text-center mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-1">
              You May Also Like
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-light">
              More Rain Ponchos
            </h2>
          </div>
          <ProductGrid products={related} columns={4} />
        </section>
      )}
    </>
  );
}
