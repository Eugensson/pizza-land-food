"use client";

import Image from "next/image";

import { PizzaType } from "@/types";

interface PizzaCardProps {
  pizza: PizzaType;
  onOpen: () => void;
}

export const PizzaCard = ({ pizza, onOpen }: PizzaCardProps) => {
  const { name, description, image, priceSm } = pizza;

  return (
    <article className="py-2 px-4 xl:py-4 xl:px-2 rounded-xl group">
      <Image
        priority
        src={image}
        alt={`${name} Pizza Image`}
        width={270}
        height={270}
        className="mb-8 object-cover aspect-square lg:group-hover:translate-y-3 transition-all duration-300 cursor-pointer"
        onClick={onOpen}
      />
      <div onClick={onOpen}>
        <h3 className="mb-3 text-xl font-bold capitalize cursor-pointer">
          {name}
        </h3>
      </div>
      <p className="text-sm font-medium min-h-15 mb-6 line-clamp-4">
        {description}
      </p>
      <div className="mb-6 flex items-center justify-between">
        <p className="hidden lg:block text-xl font-semibold">
          starts at {priceSm}
        </p>
        <button
          onClick={onOpen}
          className="hidden lg:block btn btn-sm gradient font-semibold text-white"
        >
          Choose
        </button>
        <button onClick={onOpen} className="btn btn-sm gradient lg:hidden">
          starts at {priceSm}
        </button>
      </div>
    </article>
  );
};
