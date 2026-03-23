"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.slug === product.slug);
      if (existing) {
        return prev.map((i) =>
          i.product.slug === product.slug
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.product.slug !== slug));
  }, []);

  const updateQuantity = useCallback((slug: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.product.slug !== slug));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.slug === slug ? { ...i, quantity } : i))
    );
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        totalItems,
        subtotal,
      }}
    >
      {children}
      {isOpen && <CartSlideOut />}
    </CartContext.Provider>
  );
}

function CartSlideOut() {
  const { items, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-[60] animate-fade-in"
        onClick={closeCart}
        aria-hidden="true"
      />
      {/* Slide-out panel */}
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md bg-[#FEFCF8] z-[70] shadow-2xl flex flex-col animate-slide-in-right"
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between p-6 border-b border-black/10">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-light tracking-wide">
            Your Bag
          </h2>
          <button
            onClick={closeCart}
            className="w-10 h-10 flex items-center justify-center hover:opacity-60 transition-opacity focus-ring rounded-sm"
            aria-label="Close cart"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="3" x2="15" y2="15" />
              <line x1="15" y1="3" x2="3" y2="15" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-[family-name:var(--font-display)] text-lg text-gray-400 mb-2">
                Your bag is empty
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Time to find your rain day look.
              </p>
              <button
                onClick={closeCart}
                className="text-xs uppercase tracking-[0.15em] border-b border-[var(--color-accent)] text-[var(--color-accent)] pb-0.5 hover:opacity-70 transition-opacity focus-ring"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={item.product.slug}
                  className="flex gap-4"
                >
                  <div className="w-20 h-24 bg-[var(--color-sand)] rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.product.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.product.color}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.slug, item.quantity - 1)
                        }
                        className="w-7 h-7 border border-black/20 text-xs flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-colors rounded-sm focus-ring"
                        aria-label={`Decrease quantity of ${item.product.name}`}
                      >
                        -
                      </button>
                      <span className="text-sm tabular-nums w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.slug, item.quantity + 1)
                        }
                        className="w-7 h-7 border border-black/20 text-xs flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-colors rounded-sm focus-ring"
                        aria-label={`Increase quantity of ${item.product.name}`}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.product.slug)}
                        className="ml-auto text-xs underline text-gray-400 hover:text-black transition-colors focus-ring"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-sm font-medium mt-2">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-black/10 p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-gray-500">
              Tax included and shipping calculated at checkout
            </p>
            <button className="w-full py-4 bg-[var(--color-accent)] text-white text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-accent-hover)] transition-colors btn-tactile focus-ring rounded-sm">
              Check Out
            </button>
          </div>
        )}
      </div>
    </>
  );
}
