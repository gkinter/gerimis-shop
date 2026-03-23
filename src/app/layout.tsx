import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { CartProvider } from "@/components/CartProvider";
import { Newsletter } from "@/components/Newsletter";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "I can't afford this but maybe she can",
  description:
    "A curated Bazaar of design objects by independent designers and brands. Discover sculptural homeware, fashion, art and playful oddities.",
  openGraph: {
    title: "I can't afford this but maybe she can",
    description:
      "A curated Bazaar of design objects by independent designers and brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Newsletter />
        </CartProvider>
      </body>
    </html>
  );
}
