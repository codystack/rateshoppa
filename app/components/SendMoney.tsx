// components/SendMoney.tsx
import React from 'react';

export const SendMoney: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Send money to Nigeria from the UK
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <ol className="list-decimal list-inside space-y-6 text-lg text-gray-700">
              <li>
                <strong>Enter Amount</strong> – Tell us how much you'd like to send.
              </li>
              <li>
                <strong>Add Recipient</strong> – Input your recipient’s details.
              </li>
              <li>
                <strong>Click send!</strong> – We'll convert your GBP to NGN and credit in seconds.
              </li>
            </ol>
          </div>
          <div className="lg:w-1/2">
            <div className="border border-gray-200 rounded p-8 shadow">
              {/* Simple simulation of amount form */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">GBP £</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="100.00"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">NGN ₦</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="~ "
                  disabled
                />
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Send Money
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};