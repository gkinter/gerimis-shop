import Link from "next/link";

interface MarqueeProps {
  text: string;
  href: string;
  separator?: string;
  variant?: "default" | "accent";
}

export function Marquee({
  text,
  href,
  separator = "~",
  variant = "default",
}: MarqueeProps) {
  const items = Array.from({ length: 20 }, (_, i) => i);
  const bgClass =
    variant === "accent"
      ? "bg-[var(--color-accent)] text-white"
      : "bg-transparent";

  return (
    <div className={`overflow-hidden py-3.5 ${bgClass}`} aria-hidden="true">
      <div className="animate-marquee flex whitespace-nowrap w-max">
        {[...items, ...items].map((_, idx) => (
          <Link
            key={idx}
            href={href}
            className="text-[11px] uppercase tracking-[0.25em] font-medium hover:opacity-60 transition-opacity mx-3"
            tabIndex={-1}
          >
            {text}
            <span className="mx-3 opacity-30">{separator}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
