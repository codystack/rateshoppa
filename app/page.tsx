'use client';

import { useState, useEffect } from 'react';
import Hero from "@/app/components/Hero";
import FlagMarquee from "./components/FlagMarquee";
import RateComparisonTable, {
  ProviderRate,
} from "./components/RateComparisonTable";
import RateComparisonTableAPI from "./components/RateComparisonTableAPI";
import Cta from "./components/Cta";
import { getCurrencies } from "@/lib/api/currencies";
import { getConversionRates, Conversion } from "@/lib/api/conversions";

export default function Home() {
  // Currencies state
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [currenciesLoading, setCurrenciesLoading] = useState(true);
  const [currenciesError, setCurrenciesError] = useState<string | null>(null);

  // Conversion rates state
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [conversions, setConversions] = useState<Conversion[]>([]);
  const [conversionsLoading, setConversionsLoading] = useState(false);
  const [conversionsError, setConversionsError] = useState<string | null>(null);

  // Fetch currencies on mount
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        console.log('🔄 [Page] Fetching currencies...');
        setCurrenciesLoading(true);
        const response = await getCurrencies();
        
        if (response.success && response.data.currencies) {
          console.log('✅ [Page] Currencies loaded:', response.data.currencies);
          setCurrencies(response.data.currencies);
          setCurrenciesError(null);
        } else {
          setCurrenciesError("Failed to load currencies");
        }
      } catch (error) {
        console.error("❌ [Page] Error fetching currencies:", error);
        setCurrenciesError("Failed to load currencies");
      } finally {
        setCurrenciesLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  // Fetch conversion rates when currencies change
  useEffect(() => {
    const fetchConversions = async () => {
      try {
        console.log(`🔄 [Page] Fetching conversions for ${fromCurrency} → ${toCurrency}...`);
        setConversionsLoading(true);
        const response = await getConversionRates(fromCurrency, toCurrency);
        
        if (response.success && response.data.conversions) {
          console.log('✅ [Page] Conversions loaded:', response.data.conversions);
          setConversions(response.data.conversions);
          setConversionsError(null);
        } else {
          setConversionsError("Failed to load conversion rates");
        }
      } catch (error) {
        console.error("❌ [Page] Error fetching conversions:", error);
        setConversionsError("Failed to load conversion rates");
      } finally {
        setConversionsLoading(false);
      }
    };

    // Only fetch if currencies are selected
    if (fromCurrency && toCurrency) {
      fetchConversions();
    }
  }, [fromCurrency, toCurrency]);

  // Hardcoded providers for original table (keeping for reference)
  const providers: ProviderRate[] = [
    {
      name: "Wise",
      logo: "/vendors/wise-logo.svg",
      rate: 1.40525,
      rateGood: true,
      fee: "5.76 USD",
      recipientGets: "1,397.16 CAD",
      isBest: true,
    },
    {
      name: "MonieWorld",
      logo: "/vendors/monieworld-logo.svg",
      rate: 1.36526,
      rateGood: false,
      fee: "0.00 USD",
      recipientGets: "1,365.26 CAD",
      isBest: true,
    },
    {
      name: "Remitly",
      logo: "/vendors/remitly-logo.svg",
      rate: 1.36080,
      rateGood: false,
      fee: "0.00 USD",
      recipientGets: "1,360.80 CAD",
      isBest: true,
    },
    {
      name: "Lemfi",
      logo: "/vendors/lemfi-logo.png",
      rate: 1.36299,
      rateGood: false,
      fee: "5.00 USD",
      recipientGets: "1,356.17 CAD",
      isBest: true,
    },
    {
      name: "Sendwave",
      logo: "/vendors/sendwave-logo.svg",
      rate: 1.34037,
      rateGood: false,
      fee: "4.99 USD",
      recipientGets: "1,333.68 CAD",
      isBest: true,
    },
  ];
  
  return (
    <>
      <Hero
        currencies={currencies}
        currenciesLoading={currenciesLoading}
        currenciesError={currenciesError}
        conversions={conversions}
        conversionsLoading={conversionsLoading}
        conversionsError={conversionsError}
        onCurrencyChange={(from, to) => {
          setFromCurrency(from);
          setToCurrency(to);
        }}
      />
      <FlagMarquee />
      {/* Using API version */}
      <RateComparisonTableAPI
        conversions={conversions}
        conversionsLoading={conversionsLoading}
        conversionsError={conversionsError}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />

      {/* <RateComparisonTable providers={providers} /> */}
      <Cta />
    </>
  );
}

