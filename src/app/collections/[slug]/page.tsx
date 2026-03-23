import { products, getProductsByTag } from "@/data/products";
import {
  shopCollections,
  moodCollections,
} from "@/data/collections";
import { ProductGrid } from "@/components/ProductGrid";
import { Marquee } from "@/components/Marquee";

const allCollections = [...shopCollections, ...moodCollections];

export function generateStaticParams() {
  return [...allCollections.map((c) => ({ slug: c.slug })), { slug: "all" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = allCollections.find((c) => c.slug === slug);
  const title = collection
    ? `${collection.name} — Gerimis Rain Ponchos`
    : "All Rain Ponchos — Gerimis";
  return { title };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = allCollections.find((c) => c.slug === slug);

  const collectionProducts =
    slug === "all" ? products : getProductsByTag(slug);
  const displayProducts =
    collectionProducts.length > 0 ? collectionProducts : products;

  const title = collection?.name ?? "All Rain Ponchos";

  return (
    <>
      <Marquee text={title} href={`/collections/${slug}`} />

      {/* Collection header */}
      {collection ? (
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-[var(--color-sand)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-start p-6 md:p-16">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-white font-light">
                {collection.name}
              </h1>
              {collection.description && (
                <p className="text-sm text-white/70 mt-2 max-w-md">
                  {collection.description}
                </p>
              )}
              <p className="text-xs text-white/50 mt-3">
                {displayProducts.length} {displayProducts.length === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 md:py-20 bg-[var(--color-sand)]">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-2">
            Gerimis
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light">
            {title}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            {displayProducts.length} {displayProducts.length === 1 ? "item" : "items"}
          </p>
        </div>
      )}

      {/* Product grid */}
      <section className="px-4 md:px-8 py-12 md:py-16">
        <ProductGrid products={displayProducts} columns={4} />
      </section>
    </>
  );
}
