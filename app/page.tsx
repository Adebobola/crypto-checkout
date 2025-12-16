"use client";

import { useState, useRef, useEffect } from "react";
import ConversionTabs from "@/components/ConversionTabs";
import AmountInputCard from "@/components/AmountInputCard";
import CurrencyDropdown from "@/components/CurrencyDropdown";
import WalletDropdown from "@/components/WalletDropdown";
import Button from "@/components/ui/Button";
import Image from "next/image";

import dropdown from "@/components/assets/dropdown.svg";
import celo from "@/components/assets/celo.svg";
import ton from "@/components/assets/ton.svg";
import bnb from "@/components/assets/bnb.svg";
import metamask from "@/components/assets/metamask.svg";
import rainbow from "@/components/assets/rainbow.svg";
import eth from "@/components/assets/eth.svg";
import walletconnect from "@/components/assets/walletconnect.svg";
import otherwallet from "@/components/assets/other.svg";
import ngn from "@/components/assets/ngn.svg";

const currencyIcons: Record<string, string> = {
  "USDT-CELO": celo,
  "USDT-TON": ton,
  "USDT-BNB": bnb,
  ETH: eth,
  NGN: ngn,
};

const walletIcons: Record<string, string> = {
  Metamask: metamask,
  Rainbow: rainbow,
  WalletConnect: walletconnect,
  "Other Crypto Wallets (Binance, Coinbase, Bybit etc)": otherwallet,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("crypto-to-cash");
  const [payAmount, setPayAmount] = useState("1.00");
  const [currency, setCurrency] = useState("ETH");
  const [wallet, setWallet] = useState("");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);
  const currencyRef = useRef<HTMLDivElement | null>(null);
  const walletRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target as Node)) {
        setShowCurrencyDropdown(false);
      }
      if (walletRef.current && !walletRef.current.contains(e.target as Node)) {
        setShowWalletDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePayChange = (value: string) => {
    value = value.replace(/[^\d.]/g, "");
    const parts = value.split(".");
    if (parts.length > 2) value = parts[0] + "." + parts[1];
    if (!value.includes(".")) value += ".00";
    setPayAmount(value);
  };

  return (
    <div className="space-y-6">
      <ConversionTabs active={activeTab} onChange={setActiveTab} />

      {activeTab === "crypto-to-cash" && (
        <>
          {/* You Pay */}
          <div ref={currencyRef} className="relative cursor-pointer">
            <AmountInputCard
              label="You pay"
              amount={payAmount}
              onChange={handlePayChange}
              currency={currency}
              currencyIcon={currencyIcons[currency]}
              onCurrencyClick={() => setShowCurrencyDropdown((prev) => !prev)}
            >
              {showCurrencyDropdown && (
                <CurrencyDropdown
                  onSelect={(value) => {
                    setCurrency(value);
                    setShowCurrencyDropdown(false);
                  }}
                />
              )}
            </AmountInputCard>
          </div>

          {/* You Receive */}
          <AmountInputCard
            label="You receive"
            amount={payAmount}
            currency="NGN"
            currencyIcon={currencyIcons["NGN"]}
            readOnly
          />

          {/* Pay From */}
          <div ref={walletRef} className="relative pt-4">
            <label className="font-semibold text-gray-900 mb-3 block">Pay from</label>
            <button
              onClick={() => setShowWalletDropdown((prev) => !prev)}
              className="w-full rounded-full border px-4 py-4 text-left flex items-center gap-3 cursor-pointer"
            >
              {wallet ? (
                <>
                  {walletIcons[wallet] && (
                    <Image src={walletIcons[wallet]} alt={wallet} width={24} height={24} />
                  )}
                  <span className="flex-1 font-semibold text-gray-900">{wallet}</span>
                </>
              ) : (
                <span className="flex-1 font-normal text-gray-400">Select an option</span>
              )}
              <Image src={dropdown} alt="Dropdown" width={16} height={16} />
            </button>

            {showWalletDropdown && (
              <WalletDropdown
                onSelect={(value) => {
                  setWallet(value);
                  setShowWalletDropdown(false);
                }}
              />
            )}
          </div>

          {/* Pay To */}
          <div className="relative pt-2">
            <label className="font-semibold text-gray-900 mb-3 block">Pay to</label>
            <button className="w-full rounded-full border px-4 py-4 text-left flex items-center justify-between cursor-pointer">
              <span className="font-normal text-gray-400">Select an option</span>
              <Image src={dropdown} alt="Dropdown" width={16} height={16} />
            </button>
          </div>

          <Button disabled={!wallet}>Convert now</Button>
        </>
      )}

      {activeTab !== "crypto-to-cash" && <div style={{ height: "600px" }}></div>}
    </div>
  );
}
