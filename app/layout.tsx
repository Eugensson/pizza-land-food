import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Bangers, Quicksand, Roboto_Condensed } from "next/font/google";

import { Header } from "@/components/header";
import { CartDesktop } from "@/components/cart/cart-desktop";
import { CartMobileButton } from "@/components/cart/cart-mobile-button";

import { CartProvider } from "@/context/cart-context";

import "./globals.css";
import { CartMobile } from "@/components/cart/cart-mobile";
import { Footer } from "@/components/footer";

const bangers = Bangers({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bangers",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-robotoCondensed",
});

export const metadata: Metadata = {
  title: "PizzaLand | Freshly Baked Pizzas & Italian Flavors",
  description:
    "Discover PizzaLand – your destination for authentic Italian pizzas, fresh ingredients, fast delivery, and unbeatable taste. Order online and enjoy hot, delicious pizza anytime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="en">
        <body
          className={`${bangers.variable} ${quicksand.variable} ${robotoCondensed.variable} antialiased`}
        >
          <Header />
          <CartMobileButton />
          <CartMobile />
          {children}
          <CartDesktop />
          <Footer />
          <Analytics />
        </body>
      </html>
    </CartProvider>
  );
}
