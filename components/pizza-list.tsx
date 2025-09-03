"use client";

import { useState } from "react";

import { PizzaCard } from "@/components/pizza-card";
import { PizzaModal } from "@/components/pizza-modal";

import { pizzas } from "@/lib/data";
import { PizzaType } from "@/types";

export const PizzaList = () => {
  const [selectedPizza, setSelectedPizza] = useState<PizzaType | null>(null);

  const closeModal = () => setSelectedPizza(null);

  return (
    <>
      <ul className="container py-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-7.5">
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <PizzaCard pizza={pizza} onOpen={() => setSelectedPizza(pizza)} />
          </li>
        ))}
      </ul>

      <PizzaModal
        pizza={selectedPizza || pizzas[0]}
        isOpen={!!selectedPizza}
        onClose={closeModal}
      />
    </>
  );
};
