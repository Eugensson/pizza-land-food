"use client";

import { useContext } from "react";

import { Item } from "@/components/cart/item";
import { Header } from "@/components/cart/header";
import { Footer } from "@/components/cart/footer";

import { cn } from "@/lib/utils";
import { CartItemType } from "@/types";
import { CartContext } from "@/context/cart-context";

export const CartMobile = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { isOpen, cartItems } = context;

  return (
    <div
      className={cn(
        "fixed left-0 z-20 w-full h-full lg:hidden flex flex-col transition-all duration-300 bg-white",
        isOpen ? "bottom-0" : "-bottom-full"
      )}
    >
      <Header />
      <ul
        className={cn(
          "p-2 pr-4 mr-4 mt-8 h-[60vh] flex flex-col gap-y-4 overflow-y-scroll scrollbar-thin",
          cartItems.length >= 3
            ? "scrollbar-track-black/10 scrollbar-thumb-secondary"
            : "scrollbar-track-transparent"
        )}
      >
        {cartItems.map((item: CartItemType) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};
