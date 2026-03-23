import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story — Gerimis",
  description:
    "How a love for Bali's rain led to the creation of Gerimis — colorful, sustainable rain ponchos designed in Canggu.",
};

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-[var(--color-jungle)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-jungle)] to-[var(--color-volcanic)]" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="label-editorial text-white/60 mb-6">
            Our Story
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white font-light max-w-2xl leading-tight">
            Born from the rain, shaped by the island
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 md:px-12 py-24 md:py-36">
        {/* The Beginning */}
        <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 pt-24 md:pt-32">
          <div>
            <p className="label-editorial text-[var(--color-accent)] md:sticky md:top-40">
              The Beginning
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light mb-10">
              It started with a scooter ride in the rain
            </h2>
            <div className="space-y-5 text-base text-gray-500 leading-[1.8] max-w-xl">
              <p>
                Bali&apos;s wet season is magnificent. The sky opens up, the rice
                terraces shimmer, and the air fills with the smell of wet earth and
                frangipani. But for two designers caught on a scooter in
                Canggu&apos;s monsoon downpour, it was also the moment an idea was
                born.
              </p>
              <p>
                Soaking wet and laughing, they looked at each other and asked: why
                does rain gear have to be so... ugly? Why can&apos;t a rain poncho be
                as colorful and alive as the island itself?
              </p>
              <p>
                That was 2024. Today, Gerimis (Indonesian for &ldquo;drizzle&rdquo;)
                creates rain ponchos that are as much about self-expression as they
                are about staying dry.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-black/5 pt-24 md:pt-32 mt-24 md:mt-32">
          <div>
            <p className="label-editorial text-[var(--color-accent)] md:sticky md:top-40">
              Our Philosophy
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light mb-10">
              Celebrate the rain, don&apos;t hide from it
            </h2>
            <div className="space-y-5 text-base text-gray-500 leading-[1.8] max-w-xl">
              <p>
                In Bali, rain isn&apos;t an inconvenience — it&apos;s a blessing.
                Farmers celebrate it. Temples welcome it. Children play in it.
                Gerimis carries that spirit: we make rain ponchos for people who see
                a downpour and smile.
              </p>
              <p>
                Every design draws from Indonesia&apos;s natural beauty — the deep
                greens of jungle canopies, the warm corals of reef systems, the
                golden tones of temple offerings, the vibrant pinks of frangipani
                gardens. We don&apos;t do boring. We don&apos;t do beige.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-black/5 pt-24 md:pt-32 mt-24 md:mt-32">
          <div>
            <p className="label-editorial text-[var(--color-accent)] md:sticky md:top-40">
              Sustainability
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light mb-10">
              The ocean is our neighbor
            </h2>
            <div className="space-y-5 text-base text-gray-500 leading-[1.8] max-w-xl">
              <p>
                Living on an island surrounded by water changes your relationship
                with waste. We see the plastic. We see the coral bleaching. We
                see the monsoon floods carrying trash to the sea.
              </p>
              <p>
                That&apos;s why every Gerimis poncho is made from 100% recycled
                polyester — much of it recovered from ocean-bound plastic. Our PU
                waterproof coating is solvent-free. Our packaging is plastic-free.
                Our tote bags are organic cotton.
              </p>
              <p>
                We&apos;re not perfect. But we&apos;re committed. Every poncho we make is a
                small act of care for the waters that surround us.
              </p>
            </div>

            {/* Stats — elegant typographic, no boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 pt-12 border-t border-black/5">
              <div>
                <p className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-light text-[var(--color-jungle)]">
                  100%
                </p>
                <p className="label-editorial text-gray-400 mt-3">
                  Recycled Materials
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-light text-[var(--color-ocean)]">
                  0
                </p>
                <p className="label-editorial text-gray-400 mt-3">
                  Plastic Packaging
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-light text-[var(--color-accent)]">
                  12kg
                </p>
                <p className="label-editorial text-gray-400 mt-3">
                  Plastic Saved Per Poncho
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Name */}
        <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-black/5 pt-24 md:pt-32 mt-24 md:mt-32">
          <div>
            <p className="label-editorial text-[var(--color-accent)] md:sticky md:top-40">
              The Name
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light mb-4">
              <em>gerimis</em>
            </h2>
            <p className="text-sm text-gray-400 tracking-wider mb-10">/guh-REE-miss/ — Indonesian noun</p>
            <div className="space-y-5 text-base text-gray-500 leading-[1.8] max-w-xl">
              <p>
                A light, gentle rain. The kind that doesn&apos;t soak you but kisses
                your skin. The kind that makes everything green and alive.
              </p>
              <p>
                We chose this name because it captures the beauty of rain at its
                most poetic — not the storm, not the flood, but the soft drizzle
                that makes Bali magical.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pt-24 md:pt-32">
          <Link
            href="/collections/all"
            className="inline-block bg-black text-white text-xs uppercase tracking-[0.25em] px-14 py-5 hover:bg-gray-900 transition-colors btn-tactile focus-ring rounded-sm"
          >
            Shop the Collection
          </Link>
        </section>
      </div>
    </>
  );
}
