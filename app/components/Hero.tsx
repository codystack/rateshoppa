// components/Hero.tsx
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Easily send funds to Nigeria from the UK in seconds and at great rates
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Zero transfer fees | Usually arrives in seconds
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Get started
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              Download mobile app
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          {/* Placeholder for hero image / slider */}
          <img
            src="/hero-image.png"
            alt="Send money illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};