"use client";

import Image from "next/image";
import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiPlus, BiMinus } from "react-icons/bi";

import { CartItemType } from "@/types";
import { CartContext } from "@/context/cart-context";

export const Item = ({ item }: { item: CartItemType }) => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { increaseAmount, decreaseAmount, removeFromCart } = context;

  return (
    <div className="select-none">
      <div className="flex gap-x-4 mb-2">
        <div className="flex items-center justify-center">
          <Image
            src={item.image}
            alt={`${item.name} pizza image`}
            width={90}
            height={90}
          />
        </div>
        <div className="flex flex-1 flex-col gap-y-1">
          <h3 className="text-lg font-bold capitalize">{item.name}</h3>
          <div className="flex flex-col gap-y-1">
            <p className="capitalize font-medium text-sm">{item.crust} crust</p>
            <p className="capitalize font-medium text-sm mb-2">
              {item.size} size
            </p>
            <div className="flex items-center gap-x-1">
              <button
                onClick={() => decreaseAmount(item.id, item.price)}
                type="button"
                className="size-4.5 flex items-center justify-center rounded-full gradient text-white cursor-pointer"
                aria-label="Minus"
              >
                <BiMinus />
              </button>
              <p className="flex items-center justify-center flex-1 max-w-7.5 font-semibold text-sm">
                {item.amount}
              </p>
              <button
                onClick={() => increaseAmount(item.id, item.price)}
                type="button"
                className="size-4.5 flex items-center justify-center rounded-full gradient text-white cursor-pointer"
                aria-label="Plus"
              >
                <BiPlus />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <button
            type="button"
            onClick={() => removeFromCart(item.id, item.price, item.crust)}
            aria-label="Remove Pizza from cart"
            className="flex items-center justify-center self-end cursor-pointer hover:scale-110 transition-all duration-100 text-orange"
          >
            <IoCloseOutline size={24} />
          </button>
          <div>
            <span className="text-base font-medium font-tertiary">
              ${parseFloat((item.price * item.amount).toFixed(2))}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 py-6 px-3 border-b border-black/10">
        <p className="font-semibold">
          Toppings: {item.additionalToppings.length === 0 && "None"}
        </p>
        {item.additionalToppings.map((topping, index) => (
          <p
            key={index}
            className="gradient text-xs font-medium px-3 py-1 capitalize rounded-full leading-none inline-block"
          >
            {topping.name}
          </p>
        ))}
      </div>
    </div>
  );
};
