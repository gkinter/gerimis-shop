import { products, getProductBySlug, getProductsByTag } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { ProductGrid } from "@/components/ProductGrid";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductGallery } from "./ProductGallery";
import { AddToCartButton } from "./AddToCartButton";

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
    title: `${product.name} by ${product.vendor} | I Can't Afford This But Maybe She Can`,
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
    .filter((p) => p.slug !== product.slug && p.vendor === product.vendor)
    .slice(0, 4);

  const moreByTag = product.tags[0]
    ? getProductsByTag(product.tags[0])
        .filter((p) => p.slug !== product.slug)
        .slice(0, 6)
    : [];

  return (
    <>
      <div className="px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product info */}
          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-light">{product.name}</h1>

            <div className="flex items-center gap-3">
              <span className="text-lg">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-sm text-gray-500">
              Sold by{" "}
              <Link
                href={`/collections/${product.vendorSlug}`}
                className="underline hover:text-black transition-colors"
              >
                {product.vendor}
              </Link>
            </p>

            <p className="text-sm leading-relaxed text-gray-700">
              {product.description}
            </p>

            {/* Shipping details */}
            <div className="border-t border-black/10 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping from</span>
                <span>{product.shippingFrom}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping to</span>
                <span>{product.shippingTo}</span>
              </div>
              {product.leadTime && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Lead time</span>
                  <span>{product.leadTime}</span>
                </div>
              )}
            </div>

            {/* CTA buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 border border-black text-center text-sm uppercase tracking-[0.15em] hover:bg-black hover:text-white transition-colors"
              >
                Go to shop &rarr;
              </a>
              <AddToCartButton product={product} />
            </div>

            {/* Share */}
            <div className="border-t border-black/10 pt-4">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                Share:
              </p>
              <div className="flex gap-4 text-xs">
                <a
                  href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(`https://icantaffordthis.vercel.app/products/${product.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[var(--color-accent)]"
                >
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[var(--color-accent)]"
                >
                  X
                </a>
                <a
                  href={`https://pinterest.com/pin/create/button/?description=${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[var(--color-accent)]"
                >
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="px-4 md:px-8 py-12 border-t border-black/10">
          <h2 className="text-lg font-light mb-6">You may like these</h2>
          <ProductGrid products={related} columns={4} />
        </section>
      )}

      {moreByTag.length > 0 && (
        <section className="px-4 md:px-8 py-12 border-t border-black/10">
          <h2 className="text-lg font-light mb-6">More from the Bazaar</h2>
          <ProductGrid products={moreByTag} columns={6} />
        </section>
      )}
    </>
  );
}
