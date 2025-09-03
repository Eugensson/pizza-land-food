"use client";

import { Logo } from "@/components/logo";
import { PhoneInfo } from "@/components/phone-info";
import { CartDesktopButton } from "@/components/cart/cart-desktop-button";

export const Header = () => {
  return (
    <header className="absolute z-20 w-full py-8">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-y-3">
        <Logo />
        <div className="flex items-center gap-x-8">
          <PhoneInfo />
          <CartDesktopButton />
        </div>
      </div>
    </header>
  );
};
