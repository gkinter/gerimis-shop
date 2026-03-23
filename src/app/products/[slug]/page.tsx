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
      <nav className="px-6 md:px-12 lg:px-16 py-5 text-xs text-gray-400" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="hover:text-gray-600 focus-ring">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/collections/all" className="hover:text-gray-600 focus-ring">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{product.name}</span>
        </div>
      </nav>

      <div className="px-0 md:px-12 lg:px-16 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-24">
          {/* Image gallery — full-bleed on mobile */}
          <div className="md:px-0">
            <ProductGallery images={product.images} name={product.name} />
          </div>

          {/* Product info */}
          <div className="lg:sticky lg:top-36 lg:self-start space-y-10 px-6 md:px-0 pt-8 lg:pt-0">
            <div>
              <p className="label-editorial text-[var(--color-accent)] mb-3">
                {product.category}
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light">
                {product.name}
              </h1>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="price-whisper">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through font-light">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-base text-gray-600 leading-relaxed max-w-md">
              {product.description}
            </p>

            {/* Color swatch */}
            <div>
              <p className="label-editorial text-gray-500 mb-2">
                Color: {product.color}
              </p>
            </div>

            {/* Size + Add to cart */}
            <ProductActions product={product} />

            {/* Details accordion */}
            <div className="space-y-0 border-t border-black/5 pt-2">
              <details className="border-b border-black/5 py-6 group">
                <summary className="flex justify-between items-center cursor-pointer text-xs uppercase tracking-widest font-light focus-ring py-1">
                  Details & Features
                  <span className="text-base group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <ul className="mt-5 space-y-2.5">
                  {product.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-[var(--color-accent)] mt-0.5">&#8226;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </details>

              <details className="border-b border-black/5 py-6 group">
                <summary className="flex justify-between items-center cursor-pointer text-xs uppercase tracking-widest font-light focus-ring py-1">
                  Materials
                  <span className="text-base group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="mt-5 space-y-2.5">
                  {product.materials.map((mat, i) => (
                    <p key={i} className="text-sm text-gray-600">{mat}</p>
                  ))}
                </div>
              </details>

              <details className="border-b border-black/5 py-6 group">
                <summary className="flex justify-between items-center cursor-pointer text-xs uppercase tracking-widest font-light focus-ring py-1">
                  Shipping
                  <span className="text-base group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="mt-5 space-y-2.5 text-sm text-gray-600">
                  <p>Ships from: {product.shippingFrom}</p>
                  <p>Ships to: {product.shippingTo}</p>
                  {product.leadTime && <p>Delivery: {product.leadTime}</p>}
                  <p>Free shipping on orders over $150.</p>
                </div>
              </details>
            </div>

            {/* Share */}
            <div className="flex gap-4 text-xs text-gray-400 pt-4">
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
        <section className="px-0 md:px-12 lg:px-16 py-8">
          <div className="max-w-7xl mx-auto aspect-[21/9] overflow-hidden bg-[var(--color-sand)] md:rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.lifestyleImage}
              alt={`${product.name} in action`}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <section className="px-6 md:px-12 lg:px-16 py-24 md:py-36 border-t border-black/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <p className="label-editorial text-[var(--color-accent)] mb-2">
                You May Also Like
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-light">
                More Rain Ponchos
              </h2>
            </div>
            <ProductGrid products={related} columns={4} />
          </div>
        </section>
      )}
    </>
  );
}
