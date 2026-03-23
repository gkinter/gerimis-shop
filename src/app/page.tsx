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
      {/* Hero — full bleed */}
      <HeroCarousel />

      {/* Marquee */}
      <Marquee
        text="New Collection: Embrace the Drizzle"
        href="/collections/new"
        variant="accent"
        separator="·"
      />

      {/* Brand intro */}
      <section className="py-20 md:py-28">
        <div className="container-page max-w-3xl text-center">
          <p className="label-editorial text-[var(--color-accent)] mb-4">
            Born in Bali
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-light leading-snug">
            Rain is not something to hide from.
            <br />
            It&apos;s something to <em>celebrate</em>.
          </h2>
          <p className="mt-6 text-base text-gray-500 max-w-md mx-auto leading-relaxed">
            Gerimis creates colorful, artfully designed rain ponchos from
            recycled materials. Inspired by the landscapes and spirit of
            Indonesia.
          </p>
          <Link
            href="/our-story"
            className="inline-block mt-8 label-editorial border-b border-[var(--color-accent)] text-[var(--color-accent)] pb-1 hover:opacity-70 transition-opacity"
          >
            Read Our Story
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10">
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
              className="label-editorial border-b border-black/30 pb-0.5 hover:border-black transition-colors"
            >
              View All
            </Link>
          </div>
          <ProductGrid products={newArrivals.slice(0, 4)} columns={4} />
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-black/5 py-16 md:py-24">
        <div className="container-page grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {[
            { title: "Recycled", text: "Every poncho is made from 100% recycled polyester — turning ocean-bound plastic into your favorite rain gear." },
            { title: "Waterproof", text: "Seam-sealed construction with PU coating keeps you dry through Bali's heaviest monsoons." },
            { title: "Designed in Bali", text: "Every pattern is inspired by Indonesian nature, culture, and the vibrant energy of island life." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light italic mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="label-editorial text-[var(--color-accent)] mb-2">Explore</p>
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light">
              Shop by Collection
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shopCollections.map((col) => (
              <CollectionCard key={col.slug} collection={col} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="label-editorial text-[var(--color-accent)] mb-2">Most Loved</p>
              <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light">
                Best Sellers
              </h2>
            </div>
            <Link
              href="/collections/bestseller"
              className="label-editorial border-b border-black/30 pb-0.5 hover:border-black transition-colors"
            >
              View All
            </Link>
          </div>
          <ProductGrid products={bestSellers} columns={4} />
        </div>
      </section>

      {/* Mood collections */}
      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="label-editorial text-[var(--color-accent)] mb-2">Curated</p>
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light">
              Shop by Mood
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {moodCollections.map((col) => (
              <CollectionCard key={col.slug} collection={col} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand story teaser — full bleed */}
      <section className="relative py-28 md:py-40 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-jungle)] to-[var(--color-volcanic)]" />
        <div className="relative container-page max-w-3xl text-center">
          <p className="label-editorial text-white/50 mb-6">Our Story</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-white font-light leading-tight">
            &ldquo;Gerimis&rdquo; means <em>drizzle</em> in Indonesian
          </h2>
          <p className="mt-8 text-base text-white/60 max-w-md mx-auto leading-relaxed">
            We started in a small studio in Canggu with a simple idea: rain gear
            shouldn&apos;t be boring.
          </p>
          <Link
            href="/our-story"
            className="inline-block mt-10 bg-white/90 text-[#1a2e25] label-editorial px-10 py-4 hover:bg-white transition-colors"
          >
            Read the Full Story
          </Link>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="label-editorial text-[var(--color-accent)] mb-2">In the Wild</p>
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light">
              Gerimis in Action
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              "/lifestyle/lifestyle-scooter.png",
              "/lifestyle/lifestyle-rice-terrace.png",
              "/lifestyle/lifestyle-surfer.png",
              "/lifestyle/lifestyle-cafe.png",
            ].map((src) => (
              <div key={src} className="aspect-square overflow-hidden bg-[var(--color-sand)] group">
                <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="text-center pb-20 md:pb-28">
        <p className="label-editorial text-[var(--color-accent)] mb-2">@gerimis.bali</p>
        <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-light mb-3">
          Join the Drizzle Crew
        </h2>
        <p className="text-sm text-gray-500">Tag us in your rainy day adventures.</p>
      </section>
    </>
  );
}
