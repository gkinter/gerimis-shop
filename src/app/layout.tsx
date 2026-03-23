import type { Metadata } from "next";
import { Outfit, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { CartProvider } from "@/components/CartProvider";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gerimis — Colorful Rain Ponchos from Bali",
  description:
    "Gerimis: artfully designed rain ponchos that celebrate the beauty of rain. Born in Bali, made for the world. Embrace the drizzle in style.",
  openGraph: {
    title: "Gerimis — Colorful Rain Ponchos from Bali",
    description:
      "Artfully designed rain ponchos that celebrate the beauty of rain. Born in Bali, made for the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-[50vh]">{children}</main>
          <Footer />
          <Newsletter />
        </CartProvider>
      </body>
    </html>
  );
}
