import { Marquee } from "@/components/Marquee";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductGrid } from "@/components/ProductGrid";
import { CollectionCard } from "@/components/CollectionCard";
import { MakerStrip } from "@/components/MakerStrip";
import { products } from "@/data/products";
import {
  shopCollections,
  moodCollections,
  curatorCollections,
} from "@/data/collections";
import Link from "next/link";

export default function HomePage() {
  const firstRow = products.slice(0, 6);
  const secondRow = products.slice(6, 12);
  const thirdRow = products.slice(12, 18);

  return (
    <>
      {/* New Gems marquee */}
      <Marquee text="New Gems" href="/collections/new-gems" />

      {/* Hero carousel */}
      <HeroCarousel />

      {/* Everything marquee */}
      <Marquee text="Everything" href="/collections/all" />

      {/* Product rows */}
      <section className="px-4 md:px-8 py-8">
        <ProductGrid products={firstRow} columns={6} />
      </section>

      <section className="px-4 md:px-8 pb-8">
        <ProductGrid products={secondRow} columns={6} />
      </section>

      <section className="px-4 md:px-8 pb-8">
        <ProductGrid products={thirdRow} columns={6} />
      </section>

      {/* Dive in CTA */}
      <div className="text-center py-4 mb-8">
        <Link
          href="/collections/all"
          className="inline-block border border-black text-xs uppercase tracking-[0.2em] px-10 py-3 hover:bg-black hover:text-white transition-colors"
        >
          Dive in
        </Link>
      </div>

      {/* Welcome text */}
      <section className="text-center px-8 md:px-16 lg:px-32 py-12 md:py-16">
        <h2 className="text-lg md:text-xl leading-relaxed">
          Welcome to our Bazaar, a directory of shoppable beauties by the
          curators of{" "}
          <em className="font-semibold">
            I can&apos;t afford this but maybe she can
          </em>
          .
        </h2>
        <Link
          href="/collections/all"
          className="inline-block mt-6 border border-black text-xs uppercase tracking-[0.2em] px-10 py-3 hover:bg-black hover:text-white transition-colors"
        >
          Dive in
        </Link>
      </section>

      {/* Shop collections */}
      <section className="px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {shopCollections.map((col) => (
            <CollectionCard key={col.slug} collection={col} size="large" />
          ))}
        </div>
      </section>

      {/* Curated Moods heading */}
      <section className="text-center px-8 py-8">
        <h2 className="text-lg md:text-xl">
          Discover our <em className="font-semibold">Curated Moods,</em> a
          poetic way to wander the Bazaar.
        </h2>
      </section>

      {/* Mood collections — 2 rows of 3 */}
      <section className="px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {moodCollections.slice(0, 3).map((col) => (
            <CollectionCard key={col.slug} collection={col} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {moodCollections.slice(3, 6).map((col) => (
            <CollectionCard key={col.slug} collection={col} />
          ))}
        </div>
      </section>

      {/* Meet the Makers */}
      <section className="py-12">
        <div className="text-center mb-8">
          <Link
            href="/blogs"
            className="text-xs uppercase tracking-[0.2em] hover:text-[var(--color-accent)] transition-colors"
          >
            Read
          </Link>
          <h2 className="text-lg md:text-xl mt-2">
            Meet the <em className="font-semibold">Makers</em>.
          </h2>
          <Link
            href="/blogs"
            className="inline-block mt-4 text-xs uppercase tracking-[0.2em] underline hover:text-[var(--color-accent)] transition-colors"
          >
            Read
          </Link>
        </div>
        <MakerStrip />
      </section>

      {/* Curator collections */}
      <section className="px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {curatorCollections.map((col) => (
            <CollectionCard key={col.slug} collection={col} size="large" />
          ))}
        </div>
      </section>
    </>
  );
}
