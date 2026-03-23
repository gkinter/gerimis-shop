"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";

export function Header() {
  const { openCart, totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FEFCF8]/95 backdrop-blur-md">
      {/* Top bar */}
      <div className="bg-[var(--color-volcanic)] text-white text-center py-2 px-4">
        <p className="text-[10px] md:text-xs tracking-widest uppercase">
          Free shipping on orders over $150 &middot; Made from recycled materials
        </p>
      </div>

      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 border-b border-black/5">
        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-sm tracking-wider uppercase focus-ring min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="17" y2="6" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="14" x2="17" y2="14" />
            </svg>
          )}
        </button>

        {/* Logo */}
        <Link href="/" className="flex-1 text-center md:text-left md:flex-none focus-ring">
          <img
            src="/gerimis-logo-2.png"
            alt="Gerimis"
            className="h-8 md:h-10 w-auto inline-block"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const span = document.createElement("span");
              span.className = "font-[family-name:var(--font-display)] text-2xl font-light";
              span.textContent = "Gerimis";
              target.parentElement?.appendChild(span);
            }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {[
            { href: "/collections/all", label: "Shop All" },
            { href: "/collections/new", label: "New Arrivals" },
            { href: "/collections/print", label: "Prints" },
            { href: "/our-story", label: "Our Story" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] hover:text-[var(--color-accent)] transition-colors focus-ring py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-5">
          <button
            onClick={openCart}
            className="text-xs uppercase tracking-wider hover:text-[var(--color-accent)] transition-colors relative focus-ring min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={`Shopping bag with ${totalItems} items`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M5 7h10l1 11H4L5 7z" />
              <path d="M7 7V5a3 3 0 0 1 6 0v2" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute top-1 right-0 bg-[var(--color-accent)] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/5 px-4 py-6 space-y-1 bg-[#FEFCF8] animate-slide-down">
          {[
            { href: "/collections/all", label: "Shop All" },
            { href: "/collections/new", label: "New Arrivals" },
            { href: "/collections/print", label: "Bold Prints" },
            { href: "/our-story", label: "Our Story" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm py-3 px-2 hover:text-[var(--color-accent)] hover:bg-[var(--color-sand)]/50 rounded transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
