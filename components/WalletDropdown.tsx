"use client";

import React from "react";
import Image from "next/image";
import metamask from "./assets/metamask.svg";
import rainbow from "./assets/rainbow.svg";
import walletconnect from "./assets/walletconnect.svg";
import otherwallet from "./assets/other.svg";

type Wallet = {
  id: string;
  name: string;
  icon: string;
};

const wallets: Wallet[] = [
  { id: "metamask", name: "Metamask", icon: metamask },
  { id: "rainbow", name: "Rainbow", icon: rainbow },
  { id: "walletconnect", name: "WalletConnect", icon: walletconnect },
  {
    id: "other",
    name: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)",
    icon: otherwallet,
  },
];

type Props = {
  onSelect: (value: string) => void;
};

const WalletDropdown: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="absolute left-0 top-16 w-full rounded-2xl border bg-white shadow-lg p-4 space-y-2 z-20">
      {wallets.map((wallet: Wallet) => (
        <div
          key={wallet.id}
          onClick={() => onSelect(wallet.name)}
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer"
        >
          <div className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
            <Image src={wallet.icon} alt={wallet.name} width={32} height={32} />
          </div>
          <span className="font-bold text-gray-900">{wallet.name}</span>
        </div>
      ))}
    </div>
  );
};

export default WalletDropdown;
