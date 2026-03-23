"use client";

import Link from "next/link";
import { useState } from "react";
import type { Collection } from "@/data/collections";

interface CollectionCardProps {
  collection: Collection;
  size?: "normal" | "large";
}

export function CollectionCard({
  collection,
  size = "normal",
}: CollectionCardProps) {
  const [imgError, setImgError] = useState(false);
  const aspectClass = size === "large" ? "aspect-[4/5]" : "aspect-[3/4]";

  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group block relative overflow-hidden rounded-sm focus-ring"
    >
      <div className={`${aspectClass} bg-[var(--color-sand)]`}>
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--color-sand)] to-[var(--color-accent)]/10">
            <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-volcanic)]/20">
              {collection.name}
            </span>
          </div>
        ) : (
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover product-image-zoom"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent group-hover:from-black/65 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 transform group-hover:translate-y-[-4px] transition-transform duration-300">
        <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-white font-light">
          {collection.name}
        </h3>
        {collection.description && (
          <p className="text-xs text-white/70 mt-1 max-w-xs">
            {collection.description}
          </p>
        )}
        <span className="inline-block mt-3 text-[10px] uppercase tracking-widest text-white/80 border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
          Explore
        </span>
      </div>
    </Link>
  );
}
