// components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} MonieWorld by Moniepoint GB Limited</p>
        <p>8th Floor, 22 Upper Ground, Sea Containers House, London, United Kingdom, SE1 9PD</p>
      </div>
    </footer>
  );
};