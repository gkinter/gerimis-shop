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
  const aspectClass = size === "large" ? "aspect-[4/5]" : "aspect-square";

  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group block relative overflow-hidden"
    >
      <div className={`${aspectClass} bg-gray-100`}>
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover product-image-zoom"
        />
      </div>
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <h3 className="text-sm md:text-base font-medium text-white drop-shadow-md">
          {collection.name}
        </h3>
        <span className="text-xs text-white/80 drop-shadow-md">
          {collection.count}
        </span>
      </div>
    </Link>
  );
}
