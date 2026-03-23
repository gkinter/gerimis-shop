import { Marquee } from "@/components/Marquee";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductGrid } from "@/components/ProductGrid";
import { CollectionCard } from "@/components/CollectionCard";
import { products } from "@/data/products";
import { shopCollections, moodCollections } from "@/data/collections";
import Link from "next/link";

export default function HomePage() {
  const newArrivals = products.filter((p) => p.tags.includes("new"));
  const bestSellers = products.filter((p) => p.tags.includes("bestseller"));

  return (
    <>
      {/* Announcement marquee */}
      <Marquee
        text="New Collection: Embrace the Drizzle"
        href="/collections/new"
        variant="accent"
        separator="&middot;"
      />

      {/* Hero */}
      <HeroCarousel />

      {/* Brand intro */}
      <section className="text-center px-6 md:px-16 py-16 md:py-24 max-w-4xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
          Born in Bali
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-light leading-relaxed">
          Rain is not something to hide from.
          <br />
          It&apos;s something to <em>celebrate</em>.
        </h2>
        <p className="mt-6 text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
          Gerimis creates colorful, artfully designed rain ponchos from recycled
          materials. Each piece is inspired by the landscapes, textures, and
          spirit of Indonesia — from Ubud&apos;s jungles to Nusa Penida&apos;s coral reefs.
        </p>
        <Link
          href="/our-story"
          className="inline-block mt-8 text-xs uppercase tracking-[0.2em] border-b border-[var(--color-accent)] text-[var(--color-accent)] pb-1 hover:opacity-70 transition-opacity focus-ring"
        >
          Read Our Story
        </Link>
      </section>

      {/* New Arrivals */}
      <section className="px-4 md:px-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-1">
              Just Dropped
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light">
              New Arrivals
            </h2>
          </div>
          <Link
            href="/collections/new"
            className="text-xs uppercase tracking-[0.15em] border-b border-black/30 pb-0.5 hover:border-black transition-colors focus-ring"
          >
            View All
          </Link>
        </div>
        <ProductGrid products={newArrivals} columns={4} />
      </section>

      {/* Values strip */}
      <section className="bg-[var(--color-volcanic)] text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-2xl mb-2">&#x267B;</p>
            <h3 className="text-xs uppercase tracking-widest mb-2">
              Recycled Materials
            </h3>
            <p className="text-xs text-white/60 max-w-xs mx-auto">
              Every poncho is made from 100% recycled polyester. We turn ocean-bound
              plastic into your favorite rain gear.
            </p>
          </div>
          <div>
            <p className="text-2xl mb-2">&#x1F30A;</p>
            <h3 className="text-xs uppercase tracking-widest mb-2">
              Waterproof Guaranteed
            </h3>
            <p className="text-xs text-white/60 max-w-xs mx-auto">
              Seam-sealed construction with PU coating keeps you dry through
              Bali&apos;s heaviest monsoons.
            </p>
          </div>
          <div>
            <p className="text-2xl mb-2">&#x2728;</p>
            <h3 className="text-xs uppercase tracking-widest mb-2">
              Designed in Bali
            </h3>
            <p className="text-xs text-white/60 max-w-xs mx-auto">
              Every pattern is inspired by Indonesian nature, culture, and the
              vibrant energy of island life.
            </p>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="px-4 md:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-1">
            Explore
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light">
            Shop by Collection
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {shopCollections.map((col) => (
            <CollectionCard key={col.slug} collection={col} size="large" />
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="px-4 md:px-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-1">
              Most Loved
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light">
              Best Sellers
            </h2>
          </div>
          <Link
            href="/collections/bestseller"
            className="text-xs uppercase tracking-[0.15em] border-b border-black/30 pb-0.5 hover:border-black transition-colors focus-ring"
          >
            View All
          </Link>
        </div>
        <ProductGrid products={bestSellers} columns={4} />
      </section>

      {/* Mood collections */}
      <section className="px-4 md:px-8 pb-16">
        <div className="text-center mb-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-1">
            Curated
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light">
            Shop by Mood
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {moodCollections.map((col) => (
            <CollectionCard key={col.slug} collection={col} />
          ))}
        </div>
      </section>

      {/* Brand story teaser */}
      <section className="relative py-20 md:py-32 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-jungle)] to-[var(--color-volcanic)]" />
        <div className="relative text-center px-6 max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-4">
            Our Story
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-white font-light leading-tight">
            &ldquo;Gerimis&rdquo; means <em>drizzle</em> in Indonesian
          </h2>
          <p className="mt-6 text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
            We started Gerimis in a small studio in Canggu, Bali, with a simple
            idea: rain gear shouldn&apos;t be boring. Inspired by the colors of
            Indonesian nature and fueled by a commitment to sustainability, we
            make rain ponchos that you&apos;ll actually want to wear.
          </p>
          <Link
            href="/our-story"
            className="inline-block mt-8 border-2 border-white text-white text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-white hover:text-[var(--color-volcanic)] transition-all duration-300 focus-ring"
          >
            Read the Full Story
          </Link>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="px-4 md:px-8 pb-16">
        <div className="text-center mb-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-1">
            In the Wild
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light">
            Gerimis in Action
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { src: "/lifestyle/lifestyle-scooter.png", alt: "Scooter ride in Bali rain", emoji: "\u{1F6F5}" },
            { src: "/lifestyle/lifestyle-rice-terrace.png", alt: "Rice terrace walk", emoji: "\u{1F33E}" },
            { src: "/lifestyle/lifestyle-surfer.png", alt: "Surfer in rain", emoji: "\u{1F3C4}" },
            { src: "/lifestyle/lifestyle-cafe.png", alt: "Bali cafe in rain", emoji: "\u2615" },
          ].map((item) => (
            <div key={item.alt} className="aspect-square overflow-hidden rounded-sm bg-[var(--color-sand)] relative group">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              {/* Fallback shown when image fails (sand bg already visible) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-4xl opacity-20">{item.emoji}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram / community teaser */}
      <section className="text-center px-6 py-16 md:py-20">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-1">
          @gerimis.bali
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light mb-2">
          Join the Drizzle Crew
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Tag us in your rainy day adventures. We repost our favorites.
        </p>
      </section>
    </>
  );
}
