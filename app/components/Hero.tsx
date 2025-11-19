"use client";

import Image from "next/image";
import CurrencyExchangeCard from "./CurrencyExchangeCard";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center">
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
          <CurrencyExchangeCard />
        </div>
      </div>
    </section>
  );
}