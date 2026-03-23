import { products, getProductsByTag } from "@/data/products";
import {
  shopCollections,
  moodCollections,
  curatorCollections,
} from "@/data/collections";
import { ProductGrid } from "@/components/ProductGrid";
import { Marquee } from "@/components/Marquee";

const allCollections = [
  ...shopCollections,
  ...moodCollections,
  ...curatorCollections,
];

export function generateStaticParams() {
  return [
    ...allCollections.map((c) => ({ slug: c.slug })),
    { slug: "all" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = allCollections.find((c) => c.slug === slug);
  const title = collection
    ? `${collection.name} | I Can't Afford This But Maybe She Can`
    : "All Products | I Can't Afford This But Maybe She Can";

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

  const title = collection?.name ?? "All Products";

  return (
    <>
      <Marquee text={title} href={`/collections/${slug}`} />

      {/* Collection header */}
      {collection && (
        <div className="relative h-[40vh] overflow-hidden">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-light text-white drop-shadow-lg">
                {collection.name}
              </h1>
              <p className="text-sm text-white/80 mt-2 drop-shadow">
                {collection.count} items
              </p>
            </div>
          </div>
        </div>
      )}

      {!collection && (
        <div className="text-center py-12">
          <h1 className="text-3xl md:text-4xl font-light">{title}</h1>
          <p className="text-sm text-gray-500 mt-2">
            {displayProducts.length} items
          </p>
        </div>
      )}

      {/* Product grid */}
      <section className="px-4 md:px-8 py-8 md:py-12">
        <ProductGrid products={displayProducts} columns={4} />
      </section>
    </>
  );
}
