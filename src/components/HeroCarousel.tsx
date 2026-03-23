"use client";

import { useState } from "react";
import Link from "next/link";
import { heroSlides } from "@/data/makers";

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const slide = heroSlides[current];

  const prev = () =>
    setCurrent((c) => (c === 0 ? heroSlides.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === heroSlides.length - 1 ? 0 : c + 1));

  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[70vh] md:h-[85vh]">
        {slide.images.map((img, i) => (
          <div key={i} className="relative overflow-hidden">
            <img
              src={img}
              alt={slide.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay with brand name */}
      <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-16 pointer-events-none">
        <div className="text-center pointer-events-auto">
          <h2 className="text-2xl md:text-4xl font-light text-white drop-shadow-lg mb-4 italic">
            {slide.name}
          </h2>
          <Link
            href={`/collections/${slide.slug}`}
            className="inline-block border border-white text-white text-xs uppercase tracking-[0.2em] px-8 py-3 hover:bg-white hover:text-black transition-colors"
          >
            Discover
          </Link>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white text-2xl hover:opacity-60 transition-opacity"
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white text-2xl hover:opacity-60 transition-opacity"
        aria-label="Next slide"
      >
        &#8250;
      </button>
    </section>
  );
}
