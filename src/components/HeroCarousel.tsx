"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { heroSlides } from "@/data/makers";

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === heroSlides.length - 1 ? 0 : c + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-[80vh] md:h-[90vh] overflow-hidden bg-[var(--color-sand)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.name}
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-end pb-16 md:pb-24 px-4 text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80 mb-3">
          {slide.subtitle}
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-7xl text-white font-light mb-8">
          {slide.name}
        </h1>
        <Link
          href={`/collections/${slide.slug}`}
          className="inline-block border-2 border-white text-white text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-white hover:text-[var(--color-volcanic)] transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
