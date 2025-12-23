"use client";

import Image from "next/image";
import CurrencyExchangeCardAPI from "./CurrencyExchangeCardAPI";
import { Conversion } from "@/lib/api/conversions";

interface HeroProps {
  currencies: string[];
  currenciesLoading: boolean;
  currenciesError: string | null;
  conversions: Conversion[];
  conversionsLoading: boolean;
  conversionsError: string | null;
  onCurrencyChange: (from: string, to: string) => void;
  onAmountChange: (amount: number) => void;
}

export default function Hero({
  currencies,
  currenciesLoading,
  currenciesError,
  conversions,
  conversionsLoading,
  conversionsError,
  onCurrencyChange,
  onAmountChange,
}: HeroProps) {
  return (
    <section className="relative h-full lg:h-[85vh] lg:py-0 py-10 flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-black uppercase text-white">
            Compare <br />Trusted Forex Rates.
          </h1>
          <p className="text-gray-200 text-lg mb-8">
            Get the exchange rate that&apos;s best for you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="https://app.rateshoppa.com/signup"
              className="px-12 py-3 bg-[#B6EA25] text-[#084040] rounded hover:bg-[#96c80e] hover:text-[#084040] transition"
            >
              Get started
            </a>
          </div>
        </div>

        <div className="relative px-8 py-8 w-full mx-auto lg:w-[500px] bg-white rounded-2xl">
          <CurrencyExchangeCardAPI
            currencies={currencies}
            currenciesLoading={currenciesLoading}
            currenciesError={currenciesError}
            conversions={conversions}
            conversionsLoading={conversionsLoading}
            conversionsError={conversionsError}
            onCurrencyChange={onCurrencyChange}
            onAmountChange={onAmountChange}
          />
        </div>
      </div>
    </section>
  );
}