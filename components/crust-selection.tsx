import { CrustType } from "@/types";
import { crustOptions } from "@/lib/data";

interface CrustSelectionProps {
  crust: CrustType;
  setCrust: (dough: CrustType) => void;
}

export const CrustSelection = ({ crust, setCrust }: CrustSelectionProps) => {
  return (
    <ul className="mb-8 flex items-center justify-center lg:justify-start gap-x-12 font-medium">
      {crustOptions.map(({ label, value }) => (
        <li key={value}>
          <label
            htmlFor={value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="crust"
              value={value}
              id={value}
              checked={crust === value}
              onChange={() => setCrust(value as CrustType)}
              className="appearance-none size-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary checked:border-secondary"
              aria-labelledby={`${value}-label`}
            />
            <span id={`${value}-label`}>{label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
