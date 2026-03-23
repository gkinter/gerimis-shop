"use client";

import { makers } from "@/data/makers";
import Link from "next/link";

export function MakerStrip() {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex gap-4 px-4 md:px-8 py-2" style={{ width: "max-content" }}>
        {makers.map((maker) => (
          <Link
            key={maker.slug}
            href={`/collections/${maker.slug}`}
            className="group flex-shrink-0"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden">
              <img
                src={maker.portrait}
                alt={maker.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-[10px] md:text-xs text-center mt-2 font-medium">
              {maker.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
