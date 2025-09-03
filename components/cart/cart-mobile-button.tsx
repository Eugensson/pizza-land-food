"use client";

import { useContext } from "react";
import { BsHandbagFill } from "react-icons/bs";

import { CartContext } from "@/context/cart-context";

export const CartMobileButton = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { isOpen, setIsOpen, totalAmount } = context;

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      type="button"
      aria-label="Open cart"
      className="fixed lg:hidden z-20 right-[10%] bottom-[5%] size-18 flex items-center justify-center rounded-full cursor-pointer bg-tertiary text-white"
    >
      <BsHandbagFill size={36} />
      <span className="absolute bottom-3 right-4 size-5 flex items-center justify-center text-xs text-white gradient rounded-full font-tertiary">
        {totalAmount}
      </span>
    </button>
  );
};
