import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Bangers, Quicksand, Roboto_Condensed } from "next/font/google";

import "./globals.css";

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
    <html lang="en">
      <body
        className={`${bangers.variable} ${quicksand.variable} ${robotoCondensed.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
