"use client";

import React, { useState } from "react";
import Image from "next/image";
import search from "./assets/search.svg";
import celo from "./assets/celo.svg";
import ton from "./assets/ton.svg";
import bnb from "./assets/bnb.svg";

type Currency = {
  code: string;
  label: string;
  icon: string;
};

const currencies: Currency[] = [
  { code: "USDT-CELO", label: "USDT - CELO", icon: celo },
  { code: "USDT-TON", label: "USDT - TON", icon: ton },
  { code: "USDT-BNB", label: "USDT - BNB", icon: bnb },
];

type Props = {
  onSelect: (value: string) => void;
};

const CurrencyDropdown: React.FC<Props> = ({ onSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      currency.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="absolute right-0 top-16 w-64 rounded-2xl border bg-white shadow-lg p-4 space-y-3 z-20">
      <div className="flex items-center gap-2 border rounded-full px-3 py-2">
        <Image src={search} alt="Search" width={20} height={20} />
        <input
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full focus:outline-none font-semibold text-gray-900"
        />
      </div>

      <ul className="space-y-2">
        {filteredCurrencies.length > 0 ? (
          filteredCurrencies.map((currency: Currency) => (
            <li
              key={currency.code}
              onClick={() => onSelect(currency.code)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer"
            >
              <div className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                <Image
                  src={currency.icon}
                  alt={currency.label}
                  width={32}
                  height={32}
                />
              </div>
              <span className="whitespace-nowrap font-bold text-gray-900">
                {currency.label}
              </span>
            </li>
          ))
        ) : (
          <li className="p-3 text-center text-gray-700 font-semibold">
            No results found
          </li>
        )}
      </ul>
    </div>
  );
};

export default CurrencyDropdown;
