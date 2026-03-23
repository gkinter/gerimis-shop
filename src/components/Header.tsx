"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";

export function Header() {
  const { openCart, totalItems } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <Link href="/" className="flex-1">
          <span className="text-[11px] md:text-xs tracking-[0.15em] uppercase font-medium leading-tight block max-w-[200px] md:max-w-none">
            I can&apos;t afford this but maybe she can
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-xs uppercase tracking-wider hover:opacity-60 transition-opacity"
            aria-label="Search"
          >
            Search
          </button>
          <Link
            href="/"
            className="text-xs uppercase tracking-wider hover:opacity-60 transition-opacity hidden md:block"
          >
            Log in
          </Link>
          <button
            onClick={openCart}
            className="text-xs uppercase tracking-wider hover:opacity-60 transition-opacity relative"
            aria-label="Cart"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-[var(--color-accent)] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-black/10 px-4 md:px-8 py-4">
          <input
            type="text"
            placeholder="Search the bazaar..."
            className="w-full border-b border-black pb-2 text-sm outline-none placeholder:text-gray-400"
            autoFocus
          />
        </div>
      )}
    </header>
  );
}
