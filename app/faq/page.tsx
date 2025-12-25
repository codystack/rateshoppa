'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Is this tool really free to use?",
    answer:
      "Yes, absolutely! Our comparison tool is 100% free for all visitors. You do not need to sign up or pay anything to see the best rates available.",
  },
  {
    id: 2,
    question: "How do your Rate Alerts work?",
    answer:
      "Our Rate Alerts let you set a desired exchange rate for any currency pair (e.g., CAD to USD, USD to JPY or NGN to GBP). We constantly monitor the rates from your selected providers, and the moment a provider hits or beats that target rate, we send you an instant email or notification so you can lock in the deal!",
  },
  {
    id: 3,
    question: "Where do your exchange rates come from?",
    answer:
      "We aggregate real-time exchange rate data (or 'bids') from a wide network of reputable and trusted financial institutions and currency exchange providers. We strive to give you the most accurate and up-to-date market view possible.",
  },
  {
    id: 4,
    question: "How do you make money if the tool is free?",
    answer:
      "As a new platform, our main priority right now is not making money, but building value and reputation for our users. Our entire focus is on ensuring you find the best possible offer. We are entirely independent of transaction fees. While we may explore strategies like advertising or a rates 'billboard' model in the future, we are not focused on that now. Your savings and trust are our biggest priority.",
  },
  {
    id: 5,
    question: "Do I exchange my money directly on your website?",
    answer:
      "No, we are a comparison service only. We show you the best rate, and when you click on it, we safely and instantly redirect you to the chosen partner's official website (the specific landing page) to complete your exchange securely.",
  },
  {
    id: 6,
    question: "Are the rates guaranteed when I click through?",
    answer:
      "The rates we display are live and real-time, but the foreign exchange market moves incredibly fast. While we aim for perfect accuracy, the rate is only locked in once you confirm your transaction on the provider's website. We recommend completing the exchange quickly after clicking through to secure the rate you see.",
  },
  {
    id: 7,
    question: "Is my personal information safe?",
    answer:
      "We do not collect any personal or financial information from you when you use our comparison tool. Your transaction is handled entirely by the reputable financial provider you choose to click through to. For Rate Alerts, we only require your email address, which is used strictly for sending rate notifications.",
  },
  {
    id: 8,
    question: "Are you planning to compare other financial rates, such as mortgage rates, savings interest rates, or loan rates? If so, when?",
    answer:
      "Yes, absolutely. While our current focus is delivering the best forex exchange rate comparison, our long-term vision is to be your single source for finding the best rates across all major financial sectors. We plan to launch comparison features for critical products like mortgage rates, savings account interest rates, and various loan rates. These features are coming soon as part of our continuous product rollout. We strategically prioritize which rates to launch first based on an analysis of global macro trends to ensure we provide the most timely and impactful value to our visitors.",
  },
  {
    id: 9,
    question: "Why focus on forex exchange rates first before other rates?",
    answer:
      "The foreign exchange market is incredibly dynamic and often involves the largest and most frequent disparity in rates and fees. Our initial focus on forex exchange rates allowed us to quickly deliver a high-value tool that solves an immediate and painful problem for both travelers and international transactors: knowing you're getting the best rate right now.",
  },
  {
    id: 10,
    question: "Will these future comparison tools be as accurate as your real-time forex rate comparison?",
    answer:
      "Our commitment to real-time accuracy and complete transparency is the foundation of our entire platform. Every future feature will adhere to the same high standards, ensuring you get the most accurate, comprehensive, and up-to-date comparison data available, regardless of the financial product.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Find answers to the most common questions about using RateShoppa
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-[#c6cedf] rounded-2xl bg-white transition"
          >
            <button
              onClick={() => toggle(faq.id)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <div className="flex items-center gap-4">

                {/* Question */}
                <span className="text-lg font-normal text-gray-900">
                  {faq.question}
                </span>
              </div>

              {/* Chevron */}
              <ChevronDown
                className={`w-6 h-6 text-[#9399a1] transition-transform ${
                  openId === faq.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            {openId === faq.id && (
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}