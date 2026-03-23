import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-volcanic)] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-[family-name:var(--font-display)] text-3xl font-light">
              Gerimis
            </span>
            <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
              Artfully designed raincoats born in Bali. We believe rain is
              beautiful, and so should you be in it. Made from recycled materials
              because the ocean is our neighbor.
            </p>
            <p className="mt-6 text-xs text-white/40">
              &copy; {new Date().getFullYear()} Gerimis. All rights reserved.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-white/50">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/collections/all" className="text-sm text-white/70 hover:text-white transition-colors">
                  All Raincoats
                </Link>
              </li>
              <li>
                <Link href="/collections/new" className="text-sm text-white/70 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections/print" className="text-sm text-white/70 hover:text-white transition-colors">
                  Bold Prints
                </Link>
              </li>
              <li>
                <Link href="/collections/essential" className="text-sm text-white/70 hover:text-white transition-colors">
                  Essentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-white/50">
              Info
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/our-story" className="text-sm text-white/70 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <span className="text-sm text-white/70">Sustainability</span>
              </li>
              <li>
                <span className="text-sm text-white/70">Shipping & Returns</span>
              </li>
              <li>
                <span className="text-sm text-white/70">Contact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
