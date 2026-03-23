import Link from "next/link";
import type { Collection } from "@/data/collections";

interface CollectionCardProps {
  collection: Collection;
  size?: "normal" | "large";
}

export function CollectionCard({
  collection,
  size = "normal",
}: CollectionCardProps) {
  const aspectClass = size === "large" ? "aspect-[4/5]" : "aspect-[3/4]";

  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group block relative overflow-hidden rounded-sm"
    >
      <div className={`${aspectClass} bg-[var(--color-sand)]`}>
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover product-image-zoom"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
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
