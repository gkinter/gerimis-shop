"use client";

import { useState, useEffect } from "react";

export function Newsletter() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Show popup after 5 seconds on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("newsletter-dismissed")) {
        setOpen(true);
      }
    }, 5000);
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
      <div className="fixed bottom-0 left-0 right-0 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white z-50 p-8 md:p-12 md:max-w-lg w-full shadow-2xl">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-xl hover:opacity-60 transition-opacity"
          aria-label="Close"
        >
          &times;
        </button>

        {submitted ? (
          <p className="text-sm text-center">Thank you!</p>
        ) : (
          <>
            <h3 className="text-lg font-medium mb-2">Hello there!</h3>
            <p className="text-sm text-gray-600 mb-6">
              Sign up to our newsletter, a publication packed with our latest
              finds, new bazaar items, sales and a quirky artist interview.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full border-b border-black pb-2 text-sm outline-none placeholder:text-gray-400 mb-6"
              />
              {/* Honeypot fields */}
              <input type="text" className="honey-field" tabIndex={-1} aria-hidden="true" />
              <input type="email" className="honey-field" tabIndex={-1} aria-hidden="true" />
              <button
                type="submit"
                className="w-full py-3 border border-black text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
              >
                Sign me up!
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
