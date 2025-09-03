"use client";

import Image from "next/image";
import { useState } from "react";

export const CartDesktopButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const totalAmount = 0;

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
