'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3BottomRightIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => setScreenWidth(window.innerWidth);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

   // Detect scroll
  // useEffect(() => {
  //   const handleScroll = () => setIsScrolled(window.scrollY > 10);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // Determine screen categories
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth <= 1024;

  // Top offset for Topbar
  let topValue;
  if (isMobile) topValue = '4rem'; // 40px for mobile
  else if (isTablet) topValue = '2.5rem'; // 48px for tablet
  else topValue = '2.5rem'; // 0 for desktop

  return (
    <>
      {/* Navbar */}
      <header
        className={`w-full fixed left-0 z-40 transition-all duration-300
          ${isScrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-white'}
          px-4 md:px-6
        `}
        style={{ top: topValue }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 md:py-7 relative z-50">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                className="dark:invert w-[170px] md:w-[190px] h-auto"
                src="/logo-dark.svg"
                alt="logo"
                width={150}
                height={38}
                priority
              />
            </Link>
          </div>

          <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-800">
            <li><Link href="#" className="hover:text-black transition-colors">Product</Link></li>
            <li><Link href="#" className="hover:text-black transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-black transition-colors">Case studies</Link></li>
            <li className="relative">
              <button
                onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
                className="hover:text-black flex items-center transition-colors"
              >
                Company
                <ChevronDownIcon
                  className={`ml-1 mt-0.5 h-4 w-4 transition-transform ${
                    isDesktopDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-lg transition-all ${
                  isDesktopDropdownOpen ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">About</Link>
                <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">Careers</Link>
              </div>
            </li>
          </ul>

          <div className="hidden md:block">
            <a
              href="https://app.rateshoppa.com"
              className="bg-[#084040] text-[#B6EA25] text-lg px-8 py-3 rounded-lg font-medium hover:bg-[#B6EA25] hover:text-[#084040] transition"
            >
              Login
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-gray-800 focus:outline-none relative z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3BottomRightIcon className="h-8 w-8" />}
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Menu with smooth slide */}
      <div
        className={`fixed inset-0 bg-white z-50 md:hidden flex flex-col transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Mobile Top Bar */}
        <div className="flex justify-between items-center px-6 py-6 border-b border-gray-200">
          <Link href="/">
            <Image
              className="dark:invert w-[180px] h-auto"
              src="/logo-dark.svg"
              alt="logo"
              width={150}
              height={38}
              priority
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-gray-800"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex flex-col space-y-6 px-6 pt-8 text-gray-800 text-lg font-medium flex-1 overflow-y-auto">
          <li><Link href="#" className="block hover:text-black transition-colors">Product</Link></li>
          <li><Link href="#" className="block hover:text-black transition-colors">Pricing</Link></li>
          <li><Link href="#" className="block hover:text-black transition-colors">Case studies</Link></li>

          <li>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="w-full flex justify-between items-center hover:text-black transition-colors"
            >
              Company
              <ChevronDownIcon
                className={`ml-2 h-5 w-5 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-2 flex flex-col space-y-3 transition-all overflow-hidden ${
                isMobileDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <li><Link href="#" className="block hover:text-black transition-colors">About</Link></li>
              <li><Link href="#" className="block hover:text-black transition-colors">Careers</Link></li>
            </ul>
          </li>
        </ul>

        <div className="p-6 border-t border-gray-200">
          <a href="https://app.rateshoppa.com"
            className="block bg-[#084040] text-[#B6EA25] text-center px-6 py-3 rounded-lg font-medium hover:bg-[#B6EA25] hover:text-[#084040] transition"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
}