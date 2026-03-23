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
      <nav className="container-page py-4 text-xs text-gray-400" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/collections/all" className="hover:text-gray-600">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{product.name}</span>
      </nav>

      {/* Product hero — 2 column */}
      <div className="container-page pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Info */}
          <div className="lg:sticky lg:top-32 lg:self-start space-y-6">
            <div>
              <p className="label-editorial text-[var(--color-accent)] mb-2">
                {product.category}
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light">
                {product.name}
              </h1>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-lg font-light tracking-wide">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-base text-gray-500 leading-relaxed max-w-md">
              {product.description}
            </p>

            <p className="label-editorial text-gray-400">
              Color: {product.color}
            </p>

            <ProductActions product={product} />

            {/* Details */}
            <div className="border-t border-black/5 pt-2 space-y-0">
              {[
                {
                  title: "Details & Features",
                  content: (
                    <ul className="mt-4 space-y-2">
                      {product.details.map((d, i) => (
                        <li key={i} className="text-sm text-gray-500 flex gap-2">
                          <span className="text-[var(--color-accent)]">·</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  ),
                },
                {
                  title: "Materials",
                  content: (
                    <div className="mt-4 space-y-2">
                      {product.materials.map((m, i) => (
                        <p key={i} className="text-sm text-gray-500">{m}</p>
                      ))}
                    </div>
                  ),
                },
                {
                  title: "Shipping",
                  content: (
                    <div className="mt-4 space-y-1.5 text-sm text-gray-500">
                      <p>From: {product.shippingFrom}</p>
                      <p>To: {product.shippingTo}</p>
                      {product.leadTime && <p>Delivery: {product.leadTime}</p>}
                      <p className="pt-1">Free shipping on orders over $150.</p>
                    </div>
                  ),
                },
              ].map((section) => (
                <details key={section.title} className="border-b border-black/5 py-5 group">
                  <summary className="flex justify-between items-center cursor-pointer label-editorial text-gray-600">
                    {section.title}
                    <span className="text-sm group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  {section.content}
                </details>
              ))}
            </div>

            {/* Share */}
            <div className="flex gap-4 text-xs text-gray-400 pt-2">
              <span className="label-editorial">Share:</span>
              {["Facebook", "X", "Pinterest"].map((s) => (
                <a key={s} href="#" className="hover:text-[var(--color-accent)] transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lifestyle image — full bleed */}
      {product.lifestyleImage && (
        <div className="aspect-[21/9] overflow-hidden bg-[var(--color-sand)]">
          <img
            src={product.lifestyleImage}
            alt={`${product.name} in action`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="container-page py-20 md:py-28">
          <div className="text-center mb-10">
            <p className="label-editorial text-[var(--color-accent)] mb-2">You May Also Like</p>
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
