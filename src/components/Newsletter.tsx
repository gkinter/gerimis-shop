"use client";

import { useState, useEffect } from "react";

export function Newsletter() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.5 && !sessionStorage.getItem("newsletter-dismissed")) {
        setOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 15000);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const dismiss = () => {
    setOpen(false);
    sessionStorage.setItem("newsletter-dismissed", "true");
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-[80] animate-fade-in"
        onClick={dismiss}
        aria-hidden="true"
      />
      {/* Modal: bottom-sheet on mobile, centered on desktop */}
      <div
        className="fixed bottom-0 left-0 right-0 md:bottom-auto md:top-1/2 md:left-1/2 bg-[#FEFCF8] z-[90] p-10 md:p-16 md:max-w-md w-full shadow-2xl rounded-t-2xl md:rounded-2xl animate-slide-up md:animate-scale-in"
        role="dialog"
        aria-label="Newsletter signup"
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity focus-ring rounded-full"
          aria-label="Close newsletter popup"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="2" y1="2" x2="14" y2="14" />
            <line x1="14" y1="2" x2="2" y2="14" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <p className="text-3xl mb-3">&#x1F30A;</p>
            <p className="font-[family-name:var(--font-display)] text-2xl mb-2">
              Welcome to the crew!
            </p>
            <p className="text-sm text-gray-500">
              Check your inbox for a little something.
            </p>
          </div>
        ) : (
          <>
            <p className="label-editorial text-[var(--color-accent)] mb-3">
              Join the Drizzle Crew
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light mb-3">
              10% off your first poncho
            </h3>
            <p className="text-sm text-gray-500 mb-8">
              Plus early access to new drops, behind-the-scenes from Bali, and
              rainy day playlists.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full border-b-2 border-black/20 focus:border-[var(--color-accent)] pb-3 text-sm outline-none placeholder:text-gray-300 mb-8 bg-transparent transition-colors"
              />
              <input type="text" className="honey-field" tabIndex={-1} aria-hidden="true" />
              <button
                type="submit"
                className="w-full py-4 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-gray-900 transition-colors btn-tactile focus-ring rounded-sm"
              >
                Join & Save 10%
              </button>
              <p className="text-[10px] text-gray-400 text-center mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </>
  );
}
