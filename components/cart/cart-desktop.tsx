"use client";

import { useContext } from "react";

import { Item } from "@/components/cart/item";
import { Header } from "@/components/cart/header";
import { Footer } from "@/components/cart/footer";

import { cn } from "@/lib/utils";
import { CartItemType } from "@/types";
import { CartContext } from "@/context/cart-context";

export const CartDesktop = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { isOpen, cartItems } = context;

  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 z-30 w-100 hidden lg:flex flex-col shadow-2xl bg-white transition-all duration-300",
        isOpen ? "left-0" : "-left-full"
      )}
    >
      <Header />
      <ul
        className={cn(
          "px-10 py-2 mr-4 mt-8 h-[65vh] flex flex-col gap-y-4",
          cartItems.length >= 3 &&
            "overflow-y-scroll scrollbar-thin scrollbar-track-black/10 scrollbar-thumb-secondary"
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
