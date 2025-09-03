export type AdditionalToppingType = {
  image: string;
  name: string;
  price: number;
};

export type PizzaType = {
  id: string;
  name: string;
  description: string;
  image: string;
  priceSm: number;
  priceMd: number;
  priceLg: number;
  toppings: AdditionalToppingType[];
};

export type SizeType = "small" | "medium" | "large";

export type CrustType = "traditional" | "thin";

export type CartItemType = {
  id: string;
  image: string;
  name: string;
  price: number;
  additionalToppings: AdditionalToppingType[];
  size: SizeType;
  crust: CrustType;
  amount: number;
};
