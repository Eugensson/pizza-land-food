"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import { CartItemType } from "@/types";
import { CartContext } from "@/context/cart-context";

interface CheckoutDetailsProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CheckoutDetails = ({ setModal }: CheckoutDetailsProps) => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { cartItems, setCartItems } = context;

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [count, setCount] = useState<number>(5);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [count, isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setCartItems([]);
        setModal(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, setCartItems, setModal]);

  return (
    <div>
      {isSuccess ? (
        <div className="flex flex-col justify-center items-center h-[100vh] lg:h-[600px] px-6">
          <h2 className="text-2xl font-semibold text-center">
            Thank you! The order has been placed.
          </h2>
          <Image
            src="/success-1.gif"
            alt="Success gif"
            width={150}
            height={150}
          />
          <p>
            This windows will close in <span>{count}</span> seconds.
          </p>
        </div>
      ) : (
        <div className="h-full lg:gap-x-8 lg:px-12 lg:py-8">
          <h2 className="mb-6 pt-6 lg:pt-0 text-xl uppercase font-extrabold text-center lg:text-left">
            Shipping & Checkout
          </h2>
          <div className="h-[86vh] lg:h-[60vh] flex flex-col lg:flex-row lg:gap-x-4">
            <div className="flex-1 h-full overflow-y-auto lg:overflow-visible py-4 px-8 lg:p-0">
              <div className="h-full flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="w-full input"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="w-full input"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full input"
                    placeholder="Phone Number"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full input"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <input
                    type="text"
                    name="streetName"
                    id="streetName"
                    className="w-full input"
                    placeholder="Street Name"
                  />
                  <input
                    type="text"
                    name="streetNo"
                    id="streetNo"
                    className="w-full input"
                    placeholder="Street No"
                  />
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <input
                    type="text"
                    name="streetName"
                    id="streetName"
                    className="w-full input"
                    placeholder="Block"
                  />
                  <input
                    type="text"
                    name="streetNo"
                    id="streetNo"
                    className="w-full input"
                    placeholder="Floor"
                  />
                  <input
                    type="text"
                    name="streetNo"
                    id="streetNo"
                    className="w-full input"
                    placeholder="Apt. No."
                  />
                </div>
                <div className="flex-1 h-full">
                  <textarea
                    name="mentions"
                    id="mentions"
                    className="textarea w-full h-full"
                    placeholder="Mentions (optional)"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0">
              <div className="flex flex-col mb-4 p-4 h-full border rounded-lg">
                <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
                  Your order
                </h3>
                <ul className="h-60 py-2 flex flex-col gap-4 overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white font-semibold">
                  {cartItems.map((item: CartItemType) => (
                    <li key={item.id} className="flex justify-between text-sm">
                      <div className="flex gap-2">
                        <p className="capitalize">{item.name}</p>
                        <p>{item.amount > 1 && `x ${item.amount}`}</p>
                      </div>
                      <div>
                        $ {parseFloat((item.price * item.amount).toFixed(2))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setIsSuccess(true)}
                disabled={cartItems.length === 0}
                className="btn btn-lg gradient w-full"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
