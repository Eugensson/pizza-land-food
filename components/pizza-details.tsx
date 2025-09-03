"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import { Topping } from "@/components/topping";
import { SizeSelection } from "@/components/size-selection";
import { CrustSelection } from "@/components/crust-selection";

import { CartContext } from "@/context/cart-context";
import { AdditionalToppingType, CrustType, PizzaType, SizeType } from "@/types";

interface PizzaDetailsProps {
  pizza: PizzaType;
  onClose: () => void;
}

export const PizzaDetails = ({ pizza, onClose }: PizzaDetailsProps) => {
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState<SizeType>("small");
  const [crust, setCrust] = useState<CrustType>("traditional");
  const [additionalToppings, setAdditionalToppings] = useState<
    AdditionalToppingType[]
  >([]);
  const [additionalToppingsPrice, setAdditionalToppingsPrice] =
    useState<number>(0);

  useEffect(() => {
    const basePrice: number =
      size === "small"
        ? pizza.priceSm
        : size === "medium"
        ? pizza.priceMd
        : pizza.priceLg;

    setPrice(parseFloat((basePrice + additionalToppingsPrice).toFixed(2)));
  }, [
    size,
    additionalToppingsPrice,
    pizza.priceSm,
    pizza.priceMd,
    pizza.priceLg,
  ]);

  useEffect(() => {
    if (additionalToppings.length > 0) {
      const toppingsPrice = additionalToppings.reduce(
        (a, c) => a + c?.price,
        0
      );
      setAdditionalToppingsPrice(toppingsPrice);
    } else {
      setAdditionalToppingsPrice(0);
    }
  }, [additionalToppings]);

  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { addToCart } = context;

  const onSubmit = () => {
    addToCart(
      pizza.id,
      pizza.image,
      pizza.name,
      price,
      additionalToppings,
      size,
      crust
    );
    onClose();
  };

  return (
    <div className="md:p-8 h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
      <div className="max-w-75 lg:max-w-none mx-auto mt-6 lg:mt-0 flex items-center justify-center">
        <Image
          width={450}
          height={450}
          priority
          src={pizza.image}
          alt={`${pizza.name} Pizza Image`}
          className="object-cover aspect-square relative mx-auto"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="h-full text-center lg:text-left">
          <div className="bg-white overflow-y-scroll h-[45vh] lg:h-[55vh] xl:h-[60vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-2">
            <div className="font-semibold">
              <h2 className="mb-2 capitalize text-3xl">{pizza.name}</h2>
              <div className="mb-6 text-lg font-medium">
                <span>
                  {size === "small"
                    ? "25cm"
                    : size === "medium"
                    ? "30cm"
                    : size === "large"
                    ? "35cm"
                    : null}
                </span>
                <span>, {crust} crust</span>
              </div>
            </div>
            <SizeSelection pizza={pizza} size={size} setSize={setSize} />
            <CrustSelection crust={crust} setCrust={setCrust} />

            <p className="mb-4 text-xl font-semibold">Choose topping</p>
            <ul className="grid grid-cols-3 gap-4">
              {pizza.toppings.map((topping) => (
                <li key={topping.name}>
                  <Topping
                    topping={topping}
                    additionalToppings={additionalToppings}
                    setAdditionalToppings={setAdditionalToppings}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-lg gradient w-full max-w-75 mx-auto space-x-2 mb-2"
          onClick={onSubmit}
        >
          <span>Add to cart for</span>
          <span>$ {price}</span>
        </button>
      </div>
    </div>
  );
};
