import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-volcanic)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-[family-name:var(--font-display)] text-3xl font-light">
              Gerimis
            </span>
            <p className="mt-5 text-sm text-white/70 max-w-sm leading-relaxed">
              Artfully designed rain ponchos born in Bali. We believe rain is
              beautiful, and so should you be in it. Made from recycled materials
              because the ocean is our neighbor.
            </p>
            <div className="flex gap-5 mt-8">
              {["Instagram", "TikTok", "Pinterest"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-white/50 hover:text-white transition-colors focus-ring"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 text-white/50">
              Shop
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/collections/all", label: "All Rain Ponchos" },
                { href: "/collections/new", label: "New Arrivals" },
                { href: "/collections/print", label: "Bold Prints" },
                { href: "/collections/essential", label: "Essentials" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors focus-ring"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 text-white/50">
              Info
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/our-story"
                  className="text-sm text-white/70 hover:text-white transition-colors focus-ring"
                >
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

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Gerimis. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Designed in Bali, for the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
