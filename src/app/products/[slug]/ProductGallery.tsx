"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="aspect-[4/5] overflow-hidden bg-[var(--color-sand)] rounded-sm">
        <img
          src={images[selected]}
          alt={`${name} — view ${selected + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnail strip — horizontal */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex-1 aspect-square overflow-hidden bg-[var(--color-sand)] rounded-sm transition-all ${
                i === selected
                  ? "opacity-100 ring-1 ring-black/20"
                  : "opacity-50 hover:opacity-80"
              }`}
              aria-label={`View ${name} image ${i + 1}`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
