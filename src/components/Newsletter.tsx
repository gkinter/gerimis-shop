"use client";

import { useState, useEffect } from "react";

export function Newsletter() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("newsletter-dismissed")) {
        setOpen(true);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

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
      <div className="fixed inset-0 bg-black/40 z-50" onClick={dismiss} />
      <div className="fixed bottom-0 left-0 right-0 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-[#FEFCF8] z-50 p-8 md:p-12 md:max-w-md w-full shadow-2xl">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-xl hover:opacity-60 transition-opacity"
          aria-label="Close"
        >
          &times;
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <p className="font-[family-name:var(--font-display)] text-2xl mb-2">
              Welcome to the crew!
            </p>
            <p className="text-sm text-gray-500">
              Check your inbox for a little something.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-2">
              Join the Drizzle Crew
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-light mb-2">
              10% off your first coat
            </h3>
            <p className="text-sm text-gray-500 mb-6">
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
                className="w-full border-b-2 border-black/20 focus:border-[var(--color-accent)] pb-2 text-sm outline-none placeholder:text-gray-300 mb-6 bg-transparent transition-colors"
              />
              <input type="text" className="honey-field" tabIndex={-1} aria-hidden="true" />
              <button
                type="submit"
                className="w-full py-3 bg-[var(--color-accent)] text-white text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-accent-hover)] transition-colors"
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
