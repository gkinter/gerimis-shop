import Link from "next/link";

interface MarqueeProps {
  text: string;
  href: string;
  separator?: string;
}

export function Marquee({ text, href, separator = "—" }: MarqueeProps) {
  const items = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="overflow-hidden border-y border-black/10 py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((i) => (
          <Link
            key={i}
            href={href}
            className="text-xs uppercase tracking-[0.2em] font-medium hover:text-[var(--color-accent)] transition-colors mx-2"
          >
            {text}
            <span className="mx-2 text-gray-300">{separator}</span>
          </Link>
        ))}
        {items.map((i) => (
          <Link
            key={`dup-${i}`}
            href={href}
            className="text-xs uppercase tracking-[0.2em] font-medium hover:text-[var(--color-accent)] transition-colors mx-2"
          >
            {text}
            <span className="mx-2 text-gray-300">{separator}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
