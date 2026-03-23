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
      <nav className="container-page py-3 text-[11px] text-gray-400">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span className="mx-1.5">/</span>
        <Link href="/collections/all" className="hover:text-gray-600">Shop</Link>
        <span className="mx-1.5">/</span>
        <span className="text-gray-600">{product.name}</span>
      </nav>

      {/* Product hero */}
      <div className="container-page pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Gallery — 7 cols */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} name={product.name} />
          </div>

          {/* Product info — 5 cols */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-accent)] mb-1.5">
              {product.category}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light leading-tight">
              {product.name}
            </h1>
            <p className="font-[family-name:var(--font-display)] text-sm text-gray-400 italic mt-1 mb-4">
              {product.headline}
            </p>

            {/* Price */}
            <p className="text-base mb-4">
              <span className="font-light">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </p>

            {/* Description */}
            <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Color */}
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-4 h-4 rounded-full border border-black/10"
                style={{ backgroundColor: product.colorHex }}
              />
              <span className="text-[11px] text-gray-500">{product.color}</span>
            </div>

            {/* Size + Add to Bag */}
            <ProductActions product={product} />

            {/* Accordions */}
            <div className="mt-6 border-t border-black/5">
              {[
                {
                  title: "Details",
                  content: (
                    <ul className="mt-3 space-y-1.5">
                      {product.details.map((d, i) => (
                        <li key={i} className="text-[13px] text-gray-500">— {d}</li>
                      ))}
                    </ul>
                  ),
                  defaultOpen: true,
                },
                {
                  title: "Materials",
                  content: (
                    <div className="mt-3 space-y-1">
                      {product.materials.map((m, i) => (
                        <p key={i} className="text-[13px] text-gray-500">{m}</p>
                      ))}
                    </div>
                  ),
                },
                {
                  title: "Care",
                  content: (
                    <ul className="mt-3 space-y-1">
                      {product.care.map((c, i) => (
                        <li key={i} className="text-[13px] text-gray-500">{c}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  title: "Shipping",
                  content: (
                    <div className="mt-3 space-y-1 text-[13px] text-gray-500">
                      <p>From {product.shippingFrom}</p>
                      <p>To {product.shippingTo}</p>
                      {product.leadTime && <p>{product.leadTime}</p>}
                      <p>Free shipping over $150</p>
                    </div>
                  ),
                },
              ].map((section) => (
                <details
                  key={section.title}
                  className="border-b border-black/5 py-3.5 group"
                  open={section.defaultOpen}
                >
                  <summary className="flex justify-between items-center cursor-pointer text-[11px] uppercase tracking-[0.08em] text-gray-700 font-medium">
                    {section.title}
                    <span className="text-xs text-gray-400 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  {section.content}
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story section */}
      <section className="border-t border-black/5">
        <div className="container-page py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {product.lifestyleImage && (
              <div className="aspect-[4/5] overflow-hidden bg-[var(--color-sand)] rounded-sm">
                <img
                  src={product.lifestyleImage}
                  alt={`${product.name} in Bali`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="max-w-sm">
              <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-accent)] mb-3">
                The Story
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light italic mb-4">
                {product.headline}
              </h2>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {product.story}
              </p>
              <div className="mt-6 flex gap-6">
                {[
                  { value: "100%", label: "Recycled", color: "var(--color-jungle)" },
                  { value: "IPX4", label: "Waterproof", color: "var(--color-ocean)" },
                  { value: "12kg", label: "Plastic saved", color: "var(--color-accent)" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-[family-name:var(--font-display)] text-lg" style={{ color: stat.color }}>
                      {stat.value}
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.1em] text-gray-400 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-black/5">
          <div className="container-page py-14 md:py-20">
            <div className="text-center mb-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-light">
                You may also like
              </h2>
            </div>
            <ProductGrid products={related} columns={4} />
          </div>
        </section>
      )}
    </>
  );
}
