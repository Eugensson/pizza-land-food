"use client";

import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { Dispatch, SetStateAction } from "react";

import { cn } from "@/lib/utils";
import { AdditionalToppingType } from "@/types";

interface ToppingProps {
  topping: AdditionalToppingType;
  additionalToppings: AdditionalToppingType[];
  setAdditionalToppings: Dispatch<SetStateAction<AdditionalToppingType[]>>;
}

export const Topping = ({
  topping,
  additionalToppings,
  setAdditionalToppings,
}: ToppingProps) => {
  const isChecked = additionalToppings.some((t) => t.name === topping.name);

  const handleTopping = () => {
    setAdditionalToppings((prev) =>
      isChecked
        ? prev.filter((t) => t.name !== topping.name)
        : [...prev, topping]
    );
  };

  return (
    <div
      className={cn(
        "relative w-full px-2 py-4 flex flex-col items-center gap-4 justify-center border rounded-md bg-white cursor-pointer transition",
        isChecked ? "border-orange" : "border-gray-300 hover:border-gray-400"
      )}
      onClick={handleTopping}
    >
      <Image
        src={topping.image}
        alt={`${topping.name} pizza topping`}
        width={70}
        height={70}
        className="object-cover aspect-square"
      />
      <p className="text-xs font-semibold capitalize text-center">
        {topping.name}
      </p>
      <input
        type="checkbox"
        name={topping.name}
        id={topping.name}
        checked={isChecked}
        readOnly
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
      {isChecked && (
        <div className="absolute top-1 right-1 opacity-100">
          <IoMdCheckmark className="text-xl text-orange" />
        </div>
      )}
    </div>
  );
};
