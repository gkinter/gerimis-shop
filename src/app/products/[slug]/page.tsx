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

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="container-page py-4 text-xs text-gray-400">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/collections/all" className="hover:text-gray-600">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{product.name}</span>
      </nav>

      {/* Product hero */}
      <div className="container-page pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Gallery — 7 cols */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} name={product.name} />
          </div>

          {/* Product info — 5 cols */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            {/* Category + Name */}
            <p className="label-editorial text-[var(--color-accent)] mb-2">
              {product.category}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light mb-2">
              {product.name}
            </h1>
            <p className="font-[family-name:var(--font-display)] text-base text-gray-400 italic mb-6">
              {product.headline}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-lg font-light tracking-wide">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Color */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-5 h-5 rounded-full border border-black/10"
                style={{ backgroundColor: product.colorHex }}
              />
              <span className="text-xs text-gray-500">{product.color}</span>
            </div>

            {/* Size + Add to Bag */}
            <ProductActions product={product} />

            {/* Accordion sections */}
            <div className="mt-8 border-t border-black/5 pt-2">
              <details className="border-b border-black/5 py-5 group" open>
                <summary className="flex justify-between items-center cursor-pointer label-editorial text-gray-600">
                  Details & Features
                  <span className="text-sm group-open:rotate-45 transition-transform">+</span>
                </summary>
                <ul className="mt-4 space-y-2">
                  {product.details.map((d, i) => (
                    <li key={i} className="text-sm text-gray-500 flex gap-2">
                      <span className="text-[var(--color-accent)]">·</span>{d}
                    </li>
                  ))}
                </ul>
              </details>

              <details className="border-b border-black/5 py-5 group">
                <summary className="flex justify-between items-center cursor-pointer label-editorial text-gray-600">
                  Materials
                  <span className="text-sm group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-4 space-y-2">
                  {product.materials.map((m, i) => (
                    <p key={i} className="text-sm text-gray-500">{m}</p>
                  ))}
                </div>
              </details>

              <details className="border-b border-black/5 py-5 group">
                <summary className="flex justify-between items-center cursor-pointer label-editorial text-gray-600">
                  Care
                  <span className="text-sm group-open:rotate-45 transition-transform">+</span>
                </summary>
                <ul className="mt-4 space-y-2">
                  {product.care.map((c, i) => (
                    <li key={i} className="text-sm text-gray-500">{c}</li>
                  ))}
                </ul>
              </details>

              <details className="border-b border-black/5 py-5 group">
                <summary className="flex justify-between items-center cursor-pointer label-editorial text-gray-600">
                  Shipping
                  <span className="text-sm group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-4 space-y-1.5 text-sm text-gray-500">
                  <p>From: {product.shippingFrom}</p>
                  <p>To: {product.shippingTo}</p>
                  {product.leadTime && <p>Delivery: {product.leadTime}</p>}
                  <p className="pt-1">Free shipping on orders over $150.</p>
                </div>
              </details>
            </div>

            {/* Share */}
            <div className="flex gap-4 text-xs text-gray-400 pt-4">
              <span className="label-editorial">Share:</span>
              {["Facebook", "X", "Pinterest"].map((s) => (
                <a key={s} href="#" className="hover:text-[var(--color-accent)] transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story section — editorial */}
      <section className="border-t border-black/5">
        <div className="container-page py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Lifestyle image */}
            {product.lifestyleImage && (
              <div className="aspect-[4/5] overflow-hidden bg-[var(--color-sand)] rounded-sm">
                <img
                  src={product.lifestyleImage}
                  alt={`${product.name} in Bali`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {/* Story text */}
            <div className="max-w-md">
              <p className="label-editorial text-[var(--color-accent)] mb-4">
                The Story Behind
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light italic mb-6">
                {product.headline}
              </h2>
              <p className="text-base text-gray-500 leading-relaxed">
                {product.story}
              </p>
              <div className="mt-8 flex gap-6 text-sm text-gray-400">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-jungle)]">100%</p>
                  <p className="label-editorial mt-1">Recycled</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ocean)]">IPX4</p>
                  <p className="label-editorial mt-1">Waterproof</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-accent)]">12kg</p>
                  <p className="label-editorial mt-1">Plastic Saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-black/5">
          <div className="container-page py-16 md:py-24">
            <div className="text-center mb-10">
              <p className="label-editorial text-[var(--color-accent)] mb-2">You May Also Like</p>
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
