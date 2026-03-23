"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { heroSlides } from "@/data/makers";

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide(current === heroSlides.length - 1 ? 0 : current + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  const slide = heroSlides[current];

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-[var(--color-sand)]">
      {/* Background image with crossfade */}
      {heroSlides.map((s, i) => (
        <div
          key={s.slug + i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/5" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-end pb-24 md:pb-36 px-6 text-center">
        <p
          key={`sub-${current}`}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80 mb-3 animate-fade-in-up"
        >
          {slide.subtitle}
        </p>
        <h1
          key={`title-${current}`}
          className="font-[family-name:var(--font-display)] text-4xl md:text-7xl text-white font-light mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {slide.name}
        </h1>
        <Link
          href={`/collections/${slide.slug}`}
          className="inline-block border-2 border-white text-white text-xs uppercase tracking-[0.25em] px-12 py-5 hover:bg-white hover:text-[var(--color-volcanic)] transition-all duration-300 focus-ring backdrop-blur-sm bg-white/5"
        >
          Shop Now
        </Link>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 focus-ring ${
              i === current ? "bg-white w-8" : "bg-white/40 w-2 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
