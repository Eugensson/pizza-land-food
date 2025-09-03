import Image from "next/image";

import { cn } from "@/lib/utils";
import { sizeOptions } from "@/lib/data";
import { PizzaType, SizeType } from "@/types";

interface SizeSelectionProps {
  pizza: PizzaType;
  size: SizeType;
  setSize: (size: SizeType) => void;
}

export const SizeSelection = ({ pizza, size, setSize }: SizeSelectionProps) => {
  return (
    <ul className="mb-10 grid grid-cols-3 items-baseline gap-12 font-medium">
      {sizeOptions.map(({ label, value, width, height }) => (
        <li key={value}>
          <label
            htmlFor={value}
            className="flex flex-col items-center gap-1 cursor-pointer"
          >
            <Image
              src={pizza.image}
              alt={`${label} pizza`}
              width={width}
              height={height}
              className={cn(
                "object-cover aspect-square mb-1",
                size === value
                  ? "border-2 border-orange p-0.5 rounded-full"
                  : "border-transparent filter saturate-[.1]"
              )}
            />
            <input
              type="radio"
              name="size"
              value={value}
              id={value}
              checked={size === value}
              onChange={() => setSize(value as SizeType)}
              className="appearance-none"
              aria-labelledby={`${value}-label`}
            />
            <span id={`${value}-label`}>{label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
