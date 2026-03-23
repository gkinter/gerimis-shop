import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { CartProvider } from "@/components/CartProvider";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gerimis — Colorful Raincoats from Bali",
  description:
    "Gerimis: artfully designed raincoats that celebrate the beauty of rain. Born in Bali, made for the world. Embrace the drizzle in style.",
  openGraph: {
    title: "Gerimis — Colorful Raincoats from Bali",
    description:
      "Artfully designed raincoats that celebrate the beauty of rain. Born in Bali, made for the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Newsletter />
        </CartProvider>
      </body>
    </html>
  );
}
