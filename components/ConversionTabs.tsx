type Tab = {
  id: string;
  label: string;
};

const tabs: Tab[] = [
  { id: "crypto-to-cash", label: "Crypto to cash" },
  { id: "cash-to-crypto", label: "Cash to crypto" },
  { id: "crypto-to-fiat-loan", label: "Crypto to fiat loan" },
];

type Props = {
  active: string;
  onChange: (id: string) => void;
};

export default function ConversionTabs({ active, onChange }: Props) {
  return (
    <div className="flex bg-gray-100 rounded-full p-1 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex-1 rounded-full py-2 font-medium cursor-pointer
            text-sm sm:text-xs xs:text-[10px]  /* responsive text sizes */
            whitespace-nowrap overflow-hidden text-ellipsis
            ${active === tab.id ? "bg-[#063B3B] text-white" : "text-gray-500"}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
