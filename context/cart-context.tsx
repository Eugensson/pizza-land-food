"use client";

import {
  useState,
  Dispatch,
  useEffect,
  createContext,
  SetStateAction,
} from "react";

import {
  SizeType,
  CrustType,
  CartItemType,
  AdditionalToppingType,
} from "@/types";

interface CartContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  addToCart: (
    id: string,
    image: string,
    name: string,
    price: number,
    additionalToppings: AdditionalToppingType[],
    size: SizeType,
    crust: CrustType
  ) => void;
  removeFromCart: (id: string, price: number, crust: CrustType) => void;
  cartItems: CartItemType[];
  setCartItems: Dispatch<SetStateAction<CartItemType[]>>;
  increaseAmount: (id: string, price: number) => void;
  decreaseAmount: (id: string, price: number) => void;
  totalAmount: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItemType[] | []>([]);

  useEffect(() => {
    const amount = cartItems.reduce((acc, item) => acc + item.amount, 0);
    setTotalAmount(amount);
  }, [cartItems]);

  useEffect(() => {
    const calcTotalPrice = cartItems.reduce(
      (acc, item) => acc + Number(item.price) * item.amount,
      0
    );
    setTotalPrice(calcTotalPrice);
  }, [cartItems]);

  const addToCart = (
    id: string,
    image: string,
    name: string,
    price: number,
    additionalToppings: AdditionalToppingType[],
    size: SizeType,
    crust: CrustType
  ) => {
    additionalToppings.sort((a, b) => a.name.localeCompare(b.name));

    const newItem = {
      id,
      image,
      name,
      price,
      additionalToppings,
      size,
      crust,
      amount: 1,
    };

    const cartItemIndex = cartItems.findIndex(
      (item) =>
        item.id === id &&
        item.price === price &&
        item.size === size &&
        JSON.stringify(item.additionalToppings) ===
          JSON.stringify(additionalToppings) &&
        item.crust === crust
    );

    if (cartItemIndex === -1) {
      setCartItems([...cartItems, newItem]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[cartItemIndex].amount += 1;
      setCartItems(newCartItems);
    }

    setIsOpen(true);
  };

  const removeFromCart = (id: string, price: number, crust: CrustType) => {
    const itemIndex = cartItems.findIndex(
      (item) => item.id === id && item.price === price && item.crust === crust
    );
    if (itemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(itemIndex, 1);
      setCartItems(newCartItems);
    }
  };

  const increaseAmount = (id: string, price: number) => {
    const itemIndex = cartItems.findIndex(
      (item) => item.id === id && item.price === price
    );
    if (itemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].amount += 1;
      setCartItems(newCartItems);
    }
  };

  const decreaseAmount = (id: string, price: number) => {
    const itemIndex = cartItems.findIndex(
      (item) => item.id === id && item.price === price
    );

    if (itemIndex !== -1) {
      const newCartItems = [...cartItems];

      if (newCartItems[itemIndex].amount > 1) {
        newCartItems[itemIndex].amount -= 1;
      }

      setCartItems(newCartItems);
    }
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        removeFromCart,
        cartItems,
        setCartItems,
        increaseAmount,
        decreaseAmount,
        totalAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
