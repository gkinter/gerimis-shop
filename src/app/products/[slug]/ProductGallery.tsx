"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);
  const [imgErrors, setImgErrors] = useState<Set<number>>(new Set());

  const handleImgError = (index: number) => {
    setImgErrors((prev) => new Set(prev).add(index));
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails: horizontal scroll on mobile, vertical on desktop */}
      {images.length > 1 && (
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible no-scrollbar md:w-16 flex-shrink-0">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`aspect-square overflow-hidden border-2 transition-all duration-200 rounded-sm flex-shrink-0 w-14 md:w-full focus-ring ${
                i === selected
                  ? "border-[var(--color-accent)] opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`View image ${i + 1} of ${name}`}
            >
              {imgErrors.has(i) ? (
                <div className="w-full h-full bg-[var(--color-sand)]" />
              ) : (
                <img
                  src={img}
                  alt={`${name} thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={() => handleImgError(i)}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] overflow-hidden bg-[var(--color-sand)] rounded-sm">
        {imgErrors.has(selected) ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-accent)]/30">
              Gerimis
            </span>
          </div>
        ) : (
          <img
            src={images[selected]}
            alt={name}
            className="w-full h-full object-cover transition-opacity duration-300"
            onError={() => handleImgError(selected)}
          />
        )}
      </div>
    </div>
  );
}
