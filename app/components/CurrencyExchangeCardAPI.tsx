'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HiChevronDown, HiCheck } from 'react-icons/hi';
import { HiArrowsUpDown } from 'react-icons/hi2';
import { Conversion } from '@/lib/api/conversions';

/** 
 * COMMENTED OUT - Using API data instead
 * 100+ currency list (kept compact here) 
 */
// const currencyList: Record<string, string> = { AED: "UAE Dirham", AFN: "Afghan Afghani", ALL: "Albanian Lek", AMD: "Armenian Dram", ANG: "Netherlands Antillean Guilder", AOA: "Angolan Kwanza", ARS: "Argentine Peso", AUD: "Australian Dollar", AWG: "Aruban Florin", AZN: "Azerbaijani Manat", BAM: "Bosnia-Herzegovina Convertible Mark", BBD: "Barbadian Dollar", BDT: "Bangladeshi Taka", BGN: "Bulgarian Lev", BHD: "Bahraini Dinar", BIF: "Burundian Franc", BMD: "Bermudian Dollar", BND: "Brunei Dollar", BOB: "Bolivian Boliviano", BRL: "Brazilian Real", BSD: "Bahamian Dollar", BTN: "Bhutanese Ngultrum", BWP: "Botswanan Pula", BYN: "Belarusian Ruble", BZD: "Belize Dollar", CAD: "Canadian Dollar", CDF: "Congolese Franc", CHF: "Swiss Franc", CLP: "Chilean Peso", CNY: "Chinese Yuan", COP: "Colombian Peso", CRC: "Costa Rican Colón", CUP: "Cuban Peso", CVE: "Cape Verdean Escudo", CZK: "Czech Koruna", DJF: "Djiboutian Franc", DKK: "Danish Krone", DOP: "Dominican Peso", DZD: "Algerian Dinar", EGP: "Egyptian Pound", ERN: "Eritrean Nakfa", ETB: "Ethiopian Birr", EUR: "Euro", FJD: "Fijian Dollar", FKP: "Falkland Islands Pound", FOK: "Faroese króna", GBP: "British Pound Sterling", GEL: "Georgian Lari", GGP: "Guernsey Pound", GHS: "Ghanaian Cedi", GIP: "Gibraltar Pound", GMD: "Gambian Dalasi", GNF: "Guinean Franc", GTQ: "Guatemalan Quetzal", GYD: "Guyanese Dollar", HKD: "Hong Kong Dollar", HNL: "Honduran Lempira", HRK: "Croatian Kuna", HTG: "Haitian Gourde", HUF: "Hungarian Forint", IDR: "Indonesian Rupiah", ILS: "Israeli New Shekel", IMP: "Isle of Man Pound", INR: "Indian Rupee", IQD: "Iraqi Dinar", IRR: "Iranian Rial", ISK: "Icelandic Króna", JEP: "Jersey Pound", JMD: "Jamaican Dollar", JOD: "Jordanian Dinar", JPY: "Japanese Yen", KES: "Kenyan Shilling", KGS: "Kyrgystani Som", KHR: "Cambodian Riel", KID: "Kiribati Dollar", KMF: "Comorian Franc", KRW: "South Korean Won", KWD: "Kuwaiti Dinar", KYD: "Cayman Islands Dollar", KZT: "Kazakhstani Tenge", LAK: "Laotian Kip", LBP: "Lebanese Pound", LKR: "Sri Lankan Rupee", LRD: "Liberian Dollar", LSL: "Lesotho Loti", LYD: "Libyan Dinar", MAD: "Moroccan Dirham", MDL: "Moldovan Leu", MGA: "Malagasy Ariary", MKD: "Macedonian Denar", MMK: "Myanmar Kyat", MNT: "Mongolian Tugrik", MOP: "Macanese Pataca", MRU: "Mauritanian Ouguiya", MUR: "Mauritian Rupee", MVR: "Maldivian Rufiyaa", MWK: "Malawian Kwacha", MXN: "Mexican Peso", MYR: "Malaysian Ringgit", MZN: "Mozambican Metical", NAD: "Namibian Dollar", NGN: "Nigerian Naira", NIO: "Nicaraguan Córdoba", NOK: "Norwegian Krone", NPR: "Nepalese Rupee", NZD: "New Zealand Dollar", OMR: "Omani Rial", PAB: "Panamanian Balboa", PEN: "Peruvian Sol", PGK: "Papua New Guinean Kina", PHP: "Philippine Peso", PKR: "Pakistani Rupee", PLN: "Polish Złoty", PYG: "Paraguayan Guaraní", QAR: "Qatari Rial", RON: "Romanian Leu", RSD: "Serbian Dinar", RUB: "Russian Ruble", RWF: "Rwandan Franc", SAR: "Saudi Riyal", SBD: "Solomon Islands Dollar", SCR: "Seychellois Rupee", SDG: "Sudanese Pound", SEK: "Swedish Krona", SGD: "Singapore Dollar", SHP: "Saint Helena Pound", SLE: "Sierra Leonean Leone", SLL: "Sierra Leonean old Leone", SOS: "Somali Shilling", SRD: "Surinamese Dollar", SSP: "South Sudanese Pound", STN: "São Tomé and Príncipe Dobra", SYP: "Syrian Pound", SZL: "Swazi Lilangeni", THB: "Thai Baht", TJS: "Tajikistani Somoni", TMT: "Turkmenistani Manat", TND: "Tunisian Dinar", TOP: "Tongan Paʻanga", TRY: "Turkish Lira", TTD: "Trinidad & Tobago Dollar", TVD: "Tuvaluan Dollar", TWD: "New Taiwan Dollar", TZS: "Tanzanian Shilling", UAH: "Ukrainian Hryvnia", UGX: "Ugandan Shilling", USD: "US Dollar", UYU: "Uruguayan Peso", UZS: "Uzbekistani Som", VES: "Venezuelan Bolívar", VND: "Vietnamese Dong", VUV: "Vanuatu Vatu", WST: "Samoan Tala", XAF: "Central African CFA Franc", XCD: "East Caribbean Dollar", XOF: "West African CFA Franc", XPF: "CFP Franc", YER: "Yemeni Rial", ZAR: "South African Rand", ZMW: "Zambian Kwacha", };

/**
 * Complete currency name mapping (for displaying full names)
 * This maps currency codes to their full names
 */
const CURRENCY_NAMES: Record<string, string> = {
  AED: "UAE Dirham", AFN: "Afghan Afghani", ALL: "Albanian Lek", AMD: "Armenian Dram",
  ANG: "Netherlands Antillean Guilder", AOA: "Angolan Kwanza", ARS: "Argentine Peso",
  AUD: "Australian Dollar", AWG: "Aruban Florin", AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark", BBD: "Barbadian Dollar", BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev", BHD: "Bahraini Dinar", BIF: "Burundian Franc", BMD: "Bermudian Dollar",
  BND: "Brunei Dollar", BOB: "Bolivian Boliviano", BRL: "Brazilian Real", BSD: "Bahamian Dollar",
  BTN: "Bhutanese Ngultrum", BWP: "Botswanan Pula", BYN: "Belarusian Ruble", BZD: "Belize Dollar",
  CAD: "Canadian Dollar", CDF: "Congolese Franc", CHF: "Swiss Franc", CLP: "Chilean Peso",
  CNY: "Chinese Yuan", COP: "Colombian Peso", CRC: "Costa Rican Colón", CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo", CZK: "Czech Koruna", DJF: "Djiboutian Franc", DKK: "Danish Krone",
  DOP: "Dominican Peso", DZD: "Algerian Dinar", EGP: "Egyptian Pound", ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr", EUR: "Euro", FJD: "Fijian Dollar", FKP: "Falkland Islands Pound",
  FOK: "Faroese króna", GBP: "British Pound Sterling", GEL: "Georgian Lari", GGP: "Guernsey Pound",
  GHS: "Ghanaian Cedi", GIP: "Gibraltar Pound", GMD: "Gambian Dalasi", GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal", GYD: "Guyanese Dollar", HKD: "Hong Kong Dollar", HNL: "Honduran Lempira",
  HRK: "Croatian Kuna", HTG: "Haitian Gourde", HUF: "Hungarian Forint", IDR: "Indonesian Rupiah",
  ILS: "Israeli New Shekel", IMP: "Isle of Man Pound", INR: "Indian Rupee", IQD: "Iraqi Dinar",
  IRR: "Iranian Rial", ISK: "Icelandic Króna", JEP: "Jersey Pound", JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar", JPY: "Japanese Yen", KES: "Kenyan Shilling", KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel", KID: "Kiribati Dollar", KMF: "Comorian Franc", KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar", KYD: "Cayman Islands Dollar", KZT: "Kazakhstani Tenge", LAK: "Laotian Kip",
  LBP: "Lebanese Pound", LKR: "Sri Lankan Rupee", LRD: "Liberian Dollar", LSL: "Lesotho Loti",
  LYD: "Libyan Dinar", MAD: "Moroccan Dirham", MDL: "Moldovan Leu", MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar", MMK: "Myanmar Kyat", MNT: "Mongolian Tugrik", MOP: "Macanese Pataca",
  MRU: "Mauritanian Ouguiya", MUR: "Mauritian Rupee", MVR: "Maldivian Rufiyaa", MWK: "Malawian Kwacha",
  MXN: "Mexican Peso", MYR: "Malaysian Ringgit", MZN: "Mozambican Metical", NAD: "Namibian Dollar",
  NGN: "Nigerian Naira", NIO: "Nicaraguan Córdoba", NOK: "Norwegian Krone", NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar", OMR: "Omani Rial", PAB: "Panamanian Balboa", PEN: "Peruvian Sol",
  PGK: "Papua New Guinean Kina", PHP: "Philippine Peso", PKR: "Pakistani Rupee", PLN: "Polish Złoty",
  PYG: "Paraguayan Guaraní", QAR: "Qatari Rial", RON: "Romanian Leu", RSD: "Serbian Dinar",
  RUB: "Russian Ruble", RWF: "Rwandan Franc", SAR: "Saudi Riyal", SBD: "Solomon Islands Dollar",
  SCR: "Seychellois Rupee", SDG: "Sudanese Pound", SEK: "Swedish Krona", SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound", SLE: "Sierra Leonean Leone", SLL: "Sierra Leonean old Leone",
  SOS: "Somali Shilling", SRD: "Surinamese Dollar", SSP: "South Sudanese Pound",
  STN: "São Tomé and Príncipe Dobra", SYP: "Syrian Pound", SZL: "Swazi Lilangeni", THB: "Thai Baht",
  TJS: "Tajikistani Somoni", TMT: "Turkmenistani Manat", TND: "Tunisian Dinar", TOP: "Tongan Paʻanga",
  TRY: "Turkish Lira", TTD: "Trinidad & Tobago Dollar", TVD: "Tuvaluan Dollar", TWD: "New Taiwan Dollar",
  TZS: "Tanzanian Shilling", UAH: "Ukrainian Hryvnia", UGX: "Ugandan Shilling", USD: "US Dollar",
  UYU: "Uruguayan Peso", UZS: "Uzbekistani Som", VES: "Venezuelan Bolívar", VND: "Vietnamese Dong",
  VUV: "Vanuatu Vatu", WST: "Samoan Tala", XAF: "Central African CFA Franc", XCD: "East Caribbean Dollar",
  XOF: "West African CFA Franc", XPF: "CFP Franc", YER: "Yemeni Rial", ZAR: "South African Rand",
  ZMW: "Zambian Kwacha"
};

/** FloatingInput component */
function FloatingInput({ label, value, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const hasValue = value !== "" && value !== undefined && value !== null;

  return (
    <div className="relative w-full">
      <input
        {...props}
        value={value}
        placeholder=" "
        className={`peer block w-full border border-gray-300 dark:border-gray-700 rounded-md
        bg-white dark:bg-gray-900 px-3 py-4 text-gray-900 dark:text-gray-100 text-xl font-semibold
        focus:outline-none focus:ring-0 focus:ring-[#084040] focus:border-[#084040]`}
      />

      <label
        className={`absolute left-5 px-1 -top-2 bg-white text-gray-500 dark:text-gray-400 transition-all duration-200 pointer-events-none
        ${hasValue ? "-top-2 text-sm text-[#084040] dark:text-[#084040]" : "top-3 text-base"}
        peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#084040] dark:peer-focus:text-[#084040]`}
      >
        {label}
      </label>
    </div>
  );
}

  /** CurrencyDropdown component */
  function CurrencyDropdown({
  label,
  selected,
  setSelected,
  open,
  setOpen,
  search,
  setSearch,
  flags,
  currencyList,
}: {
  label: string;
  selected: string;
  setSelected: (s: string) => void;
  open: boolean;
  setOpen: (b: boolean) => void;
  search: string;
  setSearch: (s: string) => void;
  flags: Record<string, string>;
  currencyList: Record<string, string>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);
  return (
    <div ref={ref} className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="w-full py-4 px-5 border border-gray-300 rounded bg-white flex items-center gap-3 cursor-pointer"
      >
        {flags[selected] && (
          <Image
            src={flags[selected]}
            width={30}
            height={30}
            alt={selected}
            className="rounded-full object-cover w-5 h-5"
          />
        )}
        <span className="font-regular">{selected}</span>
        <HiChevronDown className="ml-auto text-xl text-gray-500" />
      </div>

      <label className="absolute left-5 -top-2 bg-white px-1 text-sm text-gray-500">{label}</label>

      {open && (
        <div className="absolute top-full right-0 w-full bg-white shadow-2xl rounded z-40 max-h-96 overflow-y-auto">
          {/* Sticky header */}
          <div className="sticky top-0 bg-white z-10 px-5 pt-5 pb-2 mb-5 border-b border-gray-200">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type currency / country"
              className="w-full py-3 px-5 border border-gray-400 mb-2 rounded-md text-gray-900 dark:text-gray-100
                        focus:outline-none focus:ring-0 focus:border-[#084040] bg-white dark:bg-gray-900"
            />
            <p className="text-sm font-regular mb-1 mt-3">All currencies</p>
          </div>

          {/* Currency list */}
          {(() => {
            const filtered = Object.keys(currencyList).filter(
              (c) =>
                c.toLowerCase().includes(search.toLowerCase()) ||
                currencyList[c].toLowerCase().includes(search.toLowerCase())
            );

            // Separate selected currency
            const selectedItem = filtered.filter((c) => c === selected);
            const otherItems = filtered.filter((c) => c !== selected);

            return [...selectedItem, ...otherItems].map((code) => {
              const isSelected = code === selected;
              return (
                <div
                  key={code}
                  onClick={() => {
                    setSelected(code);
                    setOpen(false);
                    setSearch("");
                  }}
                  className={`px-6 py-4 flex items-center justify-between gap-2 cursor-pointer hover:bg-gray-100 ${
                    isSelected ? "bg-gray-100 rounded" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={flags[code]}
                      width={30}
                      height={30}
                      alt=""
                      className="rounded-full object-cover w-6 h-6"
                    />
                    <span>{code} – {currencyList[code]}</span>
                  </div>
                  {isSelected && <HiCheck className="text-[#084040] w-4 h-4" />}
                </div>
              );
            });
          })()}
        </div>
      )}
    </div>
  );}

/** Main component - API Version */
export default function CurrencyConverterInlineAPI({
  currencies = [],
  currenciesLoading = false,
  currenciesError = null,
  conversions = [],
  conversionsLoading = false,
  conversionsError = null,
  onCurrencyChange,
  onAmountChange,
}: {
  currencies?: string[];
  currenciesLoading?: boolean;
  currenciesError?: string | null;
  conversions?: Conversion[];
  conversionsLoading?: boolean;
  conversionsError?: string | null;
  onCurrencyChange?: (from: string, to: string) => void;
  onAmountChange?: (amount: number) => void;
}) {
  const [amount, setAmount] = useState<number | "">(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [flags, setFlags] = useState<Record<string, string>>({});
  
  // Build currency list from API data
  const [currencyList, setCurrencyList] = useState<Record<string, string>>({});

  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");

  // Notify parent when currencies change
  useEffect(() => {
    if (onCurrencyChange) {
      onCurrencyChange(fromCurrency, toCurrency);
    }
  }, [fromCurrency, toCurrency, onCurrencyChange]);

  // Notify parent when amount changes
  useEffect(() => {
    if (onAmountChange && typeof amount === 'number') {
      onAmountChange(amount);
    }
  }, [amount, onAmountChange]);

  // Build currency list from prop data
  useEffect(() => {
    if (currencies && currencies.length > 0) {
      const list: Record<string, string> = {};
      currencies.forEach((code: string) => {
        list[code] = CURRENCY_NAMES[code] || code;
      });
      // console.log('📋 Built currency list from props:', list);
      setCurrencyList(list);
    }
  }, [currencies]);

  // Generate flags (depends on currencyList being loaded)
  useEffect(() => {
    const result: Record<string, string> = {};
    Object.keys(currencyList).forEach((code) => {
      const country = code.slice(0, 2).toLowerCase();
      result[code] = `https://flagcdn.com/${country}.svg`;
    });
    setFlags(result);
  }, [currencyList]); // ✅ FIX: Added dependency on currencyList

  // Fake conversion
  useEffect(() => {
    const rate = 1.2;
    setConvertedAmount(typeof amount === 'number' ? amount * rate : null);
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Error state */}
      {currenciesError && (
        <div className="text-center text-red-500 py-2 text-sm">
          {currenciesError}
        </div>
      )}

      {currenciesLoading ? (
        /* Skeleton Loading State */
        <div className="space-y-6 animate-pulse">
          {/* Amount skeleton */}
          <div className="relative w-full">
            <div className="h-14 bg-gray-200 rounded-md"></div>
          </div>

          <div className="relative flex flex-col gap-8">
            {/* From currency skeleton */}
            <div className="relative">
              <div className="h-14 bg-gray-200 rounded-md"></div>
            </div>

            {/* Swap button skeleton */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gray-200 z-20"></div>

            {/* To currency skeleton */}
            <div className="relative">
              <div className="h-14 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>
      ) : (
        /* Actual Form */
        <>
          {/* Amount */}
          <FloatingInput
            label="Amount"
            type="text"
            className="mb-3"
            value={
              amount === ""
                ? ""
                : new Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  }).format(amount)
            }
            onChange={(e) => {
              const raw = e.target.value.replace(/,/g, "");
              if (raw === "") {
                setAmount("");
              } else if (!isNaN(Number(raw))) {
                setAmount(Number(raw));
              }
            }}
          />

          <div className="relative flex flex-col gap-8">
            {/* From */}
            <CurrencyDropdown
              label="From"
              selected={fromCurrency}
              setSelected={setFromCurrency}
              open={openFrom}
              setOpen={(isOpen) => {
                setOpenFrom(isOpen);
                if (isOpen) setOpenTo(false);
              }}
              search={searchFrom}
              setSearch={setSearchFrom}
              flags={flags}
              currencyList={currencyList}
            />

            {/* Swap floating between */}
            <button
              onClick={() => {
                const old = fromCurrency;
                setFromCurrency(toCurrency);
                setToCurrency(old);
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center z-20"
            >
              <HiArrowsUpDown className="text-xl text-gray-700" />
            </button>

            {/* To */}
            <CurrencyDropdown
              label="To"
              selected={toCurrency}
              setSelected={setToCurrency}
              open={openTo}
              setOpen={(isOpen) => {
                setOpenTo(isOpen);
                if (isOpen) setOpenFrom(false);
              }}
              search={searchTo}
              setSearch={setSearchTo}
              flags={flags}
              currencyList={currencyList}
            />
          </div>
        </>
      )}


      {/* <div className="w-full rounded-xl border border-gray-300 p-4 bg-white">
        <h6 className='mb-3 uppercase text-xs'>Top 3 cheapest rates</h6>
        <hr className='border-gray-300' />
        
        {conversionsLoading && (
          <div className="space-y-3 mt-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid grid-cols-2 items-center animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-32 ml-auto"></div>
              </div>
            ))}
          </div>
        )}

        {conversionsError && (
          <div className="text-center text-red-500 py-4 text-sm">
            {conversionsError}
          </div>
        )}

        {!conversionsLoading && !conversionsError && conversions.length === 0 && (
          <div className="text-center text-gray-500 py-4 text-sm">
            Select currencies to see rates
          </div>
        )}

        {!conversionsLoading && !conversionsError && conversions.length > 0 && (
          <>
            {conversions.slice(0, 3).map((conversion, index) => (
              <div key={conversion.merchantId} className="grid grid-cols-2 items-center text-gray-700 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center p-1 overflow-hidden">
                    <Image
                      src={conversion.logo}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                      alt={conversion.merchantName}
                    />
                  </div>
                  <span className="text-sm">{conversion.merchantName}</span>
                </div>

                <span className="text-end text-sm font-medium">
                  1 {fromCurrency} → {conversion.rate.toFixed(2)} {toCurrency}
                </span>
              </div>
            ))}
          </>
        )}
      </div> */}

      {/* Compare Rates */}
      <button
        onClick={() => {
          // Only scroll if conversions are loaded
          if (conversions.length > 0) {
            const tableSection = document.getElementById('rate-comparison-table');
            if (tableSection) {
              tableSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }}
        className="px-5 py-4 w-full bg-[#B6EA25] text-black rounded hover:opacity-90 transition"
      >
        Compare Rates
      </button>
    </div>
  );
}