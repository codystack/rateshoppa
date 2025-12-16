"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Conversion } from '@/lib/api/conversions';

interface Props {
  conversions: Conversion[];
  conversionsLoading: boolean;
  conversionsError: string | null;
  fromCurrency: string;
  toCurrency: string;
}

export default function RateComparisonTableAPI({
  conversions,
  conversionsLoading,
  conversionsError,
  fromCurrency,
  toCurrency,
}: Props) {
  // Calculate best rate (highest effective rate)
  const bestRate = conversions.length > 0
    ? Math.max(...conversions.map(c => c.effectiveRate))
    : 0;

  return (
    <section id="rate-comparison-table" className="bg-[#f7f9f7] pb-20">
      <div className="lg:w-1/2 text-center mx-auto">
        <h1 className="text-4xl lg:text-6xl uppercase font-black text-[#084040]">
          Compare the best exchange rates
        </h1>
        <p className="text-[#084040] text-lg mb-8">
          Comparing prices for international money transfers can be challenging. We've created this comparison table to help you identify hidden fees in exchange rate markups.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-2xl bg-white border border-gray-200">
        {/* Header */}
        <div className="grid grid-cols-4 bg-[#084040] text-white py-5 px-6 text-sm font-medium rounded-t">
          <div>Provider</div>
          <div>
            Exchange rate
            <div className="text-xs opacity-70">
              (1 {fromCurrency} → {toCurrency})
            </div>
          </div>
          <div>Transfer fee</div>
          <div>
            Recipient gets
            <div className="text-xs opacity-70">Sending 1,000 {fromCurrency}</div>
          </div>
        </div>

        {/* Loading State */}
        {conversionsLoading && (
          <div className="px-6 py-12">
            <div className="space-y-4 animate-pulse">
              {[1, 2, 3].map((i) => (
                <div key={i} className="grid grid-cols-4 items-center gap-4">
                  <div className="h-10 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error State */}
        {conversionsError && !conversionsLoading && (
          <div className="px-6 py-12 text-center text-red-500">
            {conversionsError}
          </div>
        )}

        {/* Empty State */}
        {!conversionsLoading && !conversionsError && conversions.length === 0 && (
          <div className="px-6 py-12 text-center text-gray-500">
            Select currencies to compare rates
          </div>
        )}

        {/* Rows */}
        {!conversionsLoading && !conversionsError && conversions.length > 0 && (
          <>
            {conversions.map((conversion, i) => {
              const isBest = conversion.effectiveRate === bestRate;
              // Calculate recipient gets (1000 * rate - fee)
              const recipientGets = (1000 * conversion.rate) - (conversion.transferFee.currency === fromCurrency ? conversion.transferFee.fee : 0);
              // Determine if rate is good (within 5% of best rate)
              const rateGood = conversion.effectiveRate >= (bestRate * 0.95);

              return (
                <div
                  key={conversion.merchantId}
                  className="grid grid-cols-4 items-center px-6 py-6 border-b last:border-0 border-gray-200"
                >
                  {/* Provider */}
                  <div className="flex items-center space-x-3">
                    <Image
                      src={conversion.logo}
                      alt={conversion.merchantName}
                      width={90}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  {/* Exchange rate */}
                  <div className="text-sm">
                    <div className="flex items-center space-x-2">
                      <span>{conversion.rate.toFixed(5)}</span>
                      <span
                        className={`h-2 w-2 rounded-full ${
                          rateGood ? "bg-green-600" : "bg-red-500"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Fee */}
                  <div className="text-sm">
                    <div>{conversion.transferFee.fee.toFixed(2)} {conversion.transferFee.currency}</div>
                  </div>

                  {/* Recipient gets */}
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">
                      {recipientGets.toFixed(2)} {toCurrency}
                    </div>

                    <a
                      href={conversion.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block bg-green-500 hover:bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full"
                    >
                      Send money
                    </a>
                  </div>
                </div>
              );
            })}
            <div className="grid grid-cols-1 items-center px-6 py-6 border-b last:border-0 border-gray-200">
              <Link 
                href="/"
                className="font-semibold underline text-center">
                Show more providers
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}