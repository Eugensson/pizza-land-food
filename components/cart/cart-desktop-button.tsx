"use client";

import Image from "next/image";
import { useContext } from "react";

import { CartContext } from "@/context/cart-context";

export const CartDesktopButton = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { isOpen, setIsOpen, totalAmount } = context;

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="relative cursor-pointer hidden lg:flex"
    >
      <Image src="/bag.svg" alt="Bag icon" width={38} height={38} />
      <span className="absolute -bottom-2 -right-1 size-6 flex items-center justify-center rounded-full text-xs font-tertiary bg-tertiary text-white">
        {totalAmount}
      </span>
    </div>
  );
};
