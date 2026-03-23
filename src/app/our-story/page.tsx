import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story — Gerimis",
  description:
    "How a love for Bali's rain led to the creation of Gerimis — colorful, sustainable raincoats designed in Canggu.",
};

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-[var(--color-jungle)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-jungle)] to-[var(--color-volcanic)]" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-4">
            Our Story
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white font-light max-w-2xl">
            Born from the rain, shaped by the island
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-16">
        {/* The Beginning */}
        <section>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
            The Beginning
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light mb-6">
            It started with a scooter ride in the rain
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Bali&apos;s wet season is magnificent. The sky opens up, the rice
              terraces shimmer, and the air fills with the smell of wet earth and
              frangipani. But for two designers caught on a scooter in
              Canggu&apos;s monsoon downpour, it was also the moment an idea was
              born.
            </p>
            <p>
              Soaking wet and laughing, they looked at each other and asked: why
              does rain gear have to be so... ugly? Why can&apos;t a raincoat be
              as colorful and alive as the island itself?
            </p>
            <p>
              That was 2024. Today, Gerimis (Indonesian for &ldquo;drizzle&rdquo;)
              creates raincoats that are as much about self-expression as they
              are about staying dry.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="border-t border-black/10 pt-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
            Our Philosophy
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light mb-6">
            Celebrate the rain, don&apos;t hide from it
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              In Bali, rain isn&apos;t an inconvenience — it&apos;s a blessing.
              Farmers celebrate it. Temples welcome it. Children play in it.
              Gerimis carries that spirit: we make raincoats for people who see
              a downpour and smile.
            </p>
            <p>
              Every design draws from Indonesia&apos;s natural beauty — the deep
              greens of jungle canopies, the warm corals of reef systems, the
              golden tones of temple offerings, the vibrant pinks of frangipani
              gardens. We don&apos;t do boring. We don&apos;t do beige.
            </p>
          </div>
        </section>

        {/* Sustainability */}
        <section className="border-t border-black/10 pt-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
            Sustainability
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light mb-6">
            The ocean is our neighbor
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Living on an island surrounded by water changes your relationship
              with waste. We see the plastic. We see the coral bleaching. We
              see the monsoon floods carrying trash to the sea.
            </p>
            <p>
              That&apos;s why every Gerimis raincoat is made from 100% recycled
              polyester — much of it recovered from ocean-bound plastic. Our PU
              waterproof coating is solvent-free. Our packaging is plastic-free.
              Our tote bags are organic cotton.
            </p>
            <p>
              We&apos;re not perfect. But we&apos;re committed. Every coat we make is a
              small act of care for the waters that surround us.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10 text-center">
            <div className="bg-[var(--color-sand)] p-6 rounded-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-jungle)]">
                100%
              </p>
              <p className="text-[10px] uppercase tracking-widest mt-2 text-gray-500">
                Recycled Materials
              </p>
            </div>
            <div className="bg-[var(--color-sand)] p-6 rounded-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-ocean)]">
                0
              </p>
              <p className="text-[10px] uppercase tracking-widest mt-2 text-gray-500">
                Plastic Packaging
              </p>
            </div>
            <div className="bg-[var(--color-sand)] p-6 rounded-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
                12kg
              </p>
              <p className="text-[10px] uppercase tracking-widest mt-2 text-gray-500">
                Plastic Saved Per Coat
              </p>
            </div>
          </div>
        </section>

        {/* The Name */}
        <section className="border-t border-black/10 pt-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
            The Name
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light mb-6 italic">
            ge&middot;ri&middot;mis
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              <strong>/guh-REE-miss/</strong> — Indonesian for a light,
              gentle rain. The kind of rain that doesn&apos;t soak you but kisses
              your skin. The kind that makes everything green and alive.
            </p>
            <p>
              We chose this name because it captures the beauty of rain at its
              most poetic — not the storm, not the flood, but the soft drizzle
              that makes Bali magical.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pt-8">
          <Link
            href="/collections/all"
            className="inline-block bg-[var(--color-accent)] text-white text-xs uppercase tracking-[0.25em] px-12 py-4 hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            Shop the Collection
          </Link>
        </section>
      </div>
    </>
  );
}
