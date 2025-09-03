"use client";

import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";

import { CartContext } from "@/context/cart-context";

export const Header = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { setIsOpen, totalAmount } = context;

  return (
    <div className="w-full h-20 px-8 flex items-center justify-between border-b">
      <h2 className="font-semibold">Shopping bag({totalAmount})</h2>
      <button
        type="button"
        aria-label="Close cart"
        onClick={() => setIsOpen(false)}
        className="cursor-pointer group"
      >
        <IoCloseOutline
          size={30}
          className="group-hover:scale-x-110 transition-all duration-300"
        />
      </button>
    </div>
  );
};
