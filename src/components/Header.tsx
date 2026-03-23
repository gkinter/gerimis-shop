"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";

export function Header() {
  const { openCart, totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#FEFCF8]/95 backdrop-blur-sm border-b border-black/5">
      {/* Top bar */}
      <div className="bg-[var(--color-volcanic)] text-white text-center py-2 px-4">
        <p className="text-[10px] md:text-xs tracking-widest uppercase">
          Free shipping on orders over $150 &middot; Made from recycled materials
        </p>
      </div>

      <nav className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-sm"
          aria-label="Menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Logo */}
        <Link href="/" className="flex-1 text-center md:text-left md:flex-none">
          <span className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-wide font-light">
            Gerimis
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link
            href="/collections/all"
            className="text-xs uppercase tracking-[0.15em] hover:text-[var(--color-accent)] transition-colors"
          >
            Shop All
          </Link>
          <Link
            href="/collections/new"
            className="text-xs uppercase tracking-[0.15em] hover:text-[var(--color-accent)] transition-colors"
          >
            New Arrivals
          </Link>
          <Link
            href="/collections/print"
            className="text-xs uppercase tracking-[0.15em] hover:text-[var(--color-accent)] transition-colors"
          >
            Prints
          </Link>
          <Link
            href="/our-story"
            className="text-xs uppercase tracking-[0.15em] hover:text-[var(--color-accent)] transition-colors"
          >
            Our Story
          </Link>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-5">
          <button
            onClick={openCart}
            className="text-xs uppercase tracking-wider hover:text-[var(--color-accent)] transition-colors relative"
            aria-label="Cart"
          >
            Bag
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-5 bg-[var(--color-accent)] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/5 px-4 py-6 space-y-4 bg-[#FEFCF8]">
          <Link href="/collections/all" className="block text-sm" onClick={() => setMenuOpen(false)}>
            Shop All
          </Link>
          <Link href="/collections/new" className="block text-sm" onClick={() => setMenuOpen(false)}>
            New Arrivals
          </Link>
          <Link href="/collections/print" className="block text-sm" onClick={() => setMenuOpen(false)}>
            Prints
          </Link>
          <Link href="/our-story" className="block text-sm" onClick={() => setMenuOpen(false)}>
            Our Story
          </Link>
        </div>
      )}
    </header>
  );
}
