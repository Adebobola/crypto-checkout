import Image from "next/image";
import dropdown from "./assets/dropdown.svg";

type AmountInputCardProps = {
  label: string;
  amount: string;
  onChange?: (value: string) => void; 
  currency: string;
  currencyIcon?: string;
  onCurrencyClick?: () => void;
  children?: React.ReactNode;
  readOnly?: boolean; 
};

export default function AmountInputCard({
  label,
  amount,
  onChange,
  currency,
  currencyIcon,
  onCurrencyClick,
  children,
  readOnly = false,
}: AmountInputCardProps) {
  return (
    <div className="relative rounded-3xl border border-gray-200 p-6 flex justify-between items-center">
      <div className="space-y-2">
        <p className="text-gray-500">{label}</p>
        <input
          type="text"
          value={amount}
          onChange={(e) => onChange && onChange(e.target.value)}
          readOnly={readOnly} 
          className="text-3xl font-semibold w-full focus:outline-none"
        />
      </div>

      <button
        onClick={onCurrencyClick}
        className="flex items-center gap-2 rounded-full border px-4 py-2 flex-shrink-0"
      >
        {currencyIcon && (
          <Image src={currencyIcon} alt={currency} width={20} height={20} />
        )}
        <span className="font-medium whitespace-nowrap">{currency}</span>
        <Image src={dropdown} alt="Dropdown arrow" width={16} height={16} />
      </button>

      {children}
    </div>
  );
}
