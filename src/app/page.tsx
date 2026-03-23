import { Marquee } from "@/components/Marquee";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductCard } from "@/components/ProductCard";
import { CollectionCard } from "@/components/CollectionCard";
import { products } from "@/data/products";
import { shopCollections, moodCollections } from "@/data/collections";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
  const newArrivals = products.filter((p) => p.tags.includes("new"));
  const bestSellers = products.filter((p) => p.tags.includes("bestseller"));

  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* Dive in marquee — with breathing room from hero */}
      <div className="py-4">
        <Marquee
          text="New Collection: Embrace the Drizzle"
          href="/collections/new"
          variant="accent"
          separator="&middot;"
        />
      </div>

      {/* Brand intro */}
      <section className="text-center py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <p className="label-editorial text-[var(--color-accent)] mb-4">
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
          </div>
        </div>
      </section>

      {/* New Arrivals — asymmetric grid: first product large */}
      <section className="pb-24 md:pb-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between mb-16 md:mb-20">
            <div>
              <p className="label-editorial text-[var(--color-accent)] mb-2">
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
          {newArrivals.length > 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {/* First product: large, spans 2 cols on desktop */}
              <div className="col-span-2 lg:col-span-2 lg:row-span-2">
                <Link href={`/products/${newArrivals[0].slug}`} className="group block focus-ring">
                  <div className="overflow-hidden aspect-square bg-[var(--color-sand)] rounded-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={newArrivals[0].images[0]}
                      alt={newArrivals[0].name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-5 space-y-1.5">
                    <p className="label-editorial text-[var(--color-accent)]">{newArrivals[0].category}</p>
                    <h3 className="text-base md:text-lg font-medium">{newArrivals[0].name}</h3>
                    <p className="text-sm font-light">{formatPrice(newArrivals[0].price)}</p>
                  </div>
                </Link>
              </div>
              {/* Remaining products: normal size */}
              {newArrivals.slice(1).map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Values strip — editorial, cream background */}
      <section className="border-t border-black/10 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light italic mb-3">
                Recycled
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Every poncho is made from 100% recycled polyester — turning ocean-bound plastic into your favorite rain gear.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light italic mb-3">
                Waterproof
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Seam-sealed construction with PU coating keeps you dry through Bali&apos;s heaviest monsoons.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light italic mb-3">
                Designed in Bali
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Every pattern is inspired by Indonesian nature, culture, and the vibrant energy of island life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <p className="label-editorial text-[var(--color-accent)] mb-2">
              Explore
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light">
              Shop by Collection
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {shopCollections.map((col) => (
              <CollectionCard key={col.slug} collection={col} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="pb-24 md:pb-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between mb-16 md:mb-20">
            <div>
              <p className="label-editorial text-[var(--color-accent)] mb-2">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {bestSellers.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Mood collections — asymmetric: 1 large + 2 stacked */}
      <section className="pb-24 md:pb-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <p className="label-editorial text-[var(--color-accent)] mb-2">
              Curated
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light">
              Shop by Mood
            </h2>
          </div>
          {moodCollections.length >= 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <CollectionCard collection={moodCollections[0]} size="large" />
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {moodCollections.slice(1).map((col) => (
                  <CollectionCard key={col.slug} collection={col} />
                ))}
              </div>
            </div>
          )}
          {moodCollections.length > 0 && moodCollections.length < 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {moodCollections.map((col) => (
                <CollectionCard key={col.slug} collection={col} size="large" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Brand story teaser */}
      <section className="relative py-36 md:py-48 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-jungle)] to-[var(--color-volcanic)]" />
        <div className="relative text-center max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <p className="label-editorial text-white/60 mb-6">
              Our Story
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-white font-light leading-tight">
              &ldquo;Gerimis&rdquo; means <em>drizzle</em> in Indonesian
            </h2>
            <p className="mt-8 text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
              We started Gerimis in a small studio in Canggu, Bali, with a simple
              idea: rain gear shouldn&apos;t be boring. Inspired by the colors of
              Indonesian nature and fueled by a commitment to sustainability, we
              make rain ponchos that you&apos;ll actually want to wear.
            </p>
            <Link
              href="/our-story"
              className="inline-block mt-10 border-2 border-white text-white text-xs uppercase tracking-[0.25em] px-12 py-4 hover:bg-white hover:text-[var(--color-volcanic)] transition-all duration-300 focus-ring"
            >
              Read the Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <p className="label-editorial text-[var(--color-accent)] mb-2">
              In the Wild
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light">
              Gerimis in Action
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 rounded-lg overflow-hidden">
            {[
              { src: "/lifestyle/lifestyle-scooter.png", alt: "Scooter ride in Bali rain", emoji: "\u{1F6F5}" },
              { src: "/lifestyle/lifestyle-rice-terrace.png", alt: "Rice terrace walk", emoji: "\u{1F33E}" },
              { src: "/lifestyle/lifestyle-surfer.png", alt: "Surfer in rain", emoji: "\u{1F3C4}" },
              { src: "/lifestyle/lifestyle-cafe.png", alt: "Bali cafe in rain", emoji: "\u2615" },
            ].map((item) => (
              <div key={item.alt} className="aspect-square overflow-hidden bg-[var(--color-sand)] relative group flex items-center justify-center">
                {/* Emoji placeholder (visible when image is missing) */}
                <span className="text-4xl opacity-15 absolute">{item.emoji}</span>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram / community teaser */}
      <section className="text-center py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
          <p className="label-editorial text-[var(--color-accent)] mb-2">
            @gerimis.bali
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light mb-3">
            Join the Drizzle Crew
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Tag us in your rainy day adventures. We repost our favorites.
          </p>
        </div>
      </section>
    </>
  );
}
