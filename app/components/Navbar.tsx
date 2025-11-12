'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-[40px] left-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 md:py-7">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              className="dark:invert w-[120px] lg:w-[180px] h-auto"
              src="/logo-dark.svg"
              alt="logo"
              width={150}
              height={38}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-800">
          <li>
            <Link href="#" className="hover:text-black transition-colors">
              Product
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-black transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-black transition-colors">
              Case studies
            </Link>
          </li>
          <li className="relative group">
            <button className="hover:text-black flex items-center transition-colors">
              Company
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute left-0 hidden group-hover:block bg-white border border-gray-100 rounded-lg mt-2 shadow-lg">
              <Link
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700"
              >
                About
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-50 text-gray-700"
              >
                Careers
              </Link>
            </div>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#"
            className="bg-[#084040] text-[#B6EA25] text-lg px-8 py-3 rounded-lg font-medium hover:bg-[#B6EA25] hover:text-[#084040] transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-800 text-base font-medium">
          <li>
            <Link href="#" className="block hover:text-black transition-colors">
              Product
            </Link>
          </li>
          <li>
            <Link href="#" className="block hover:text-black transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className="block hover:text-black transition-colors">
              Case studies
            </Link>
          </li>
          <li>
            <Link href="#" className="block hover:text-black transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="block hover:text-black transition-colors">
              Careers
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block bg-[#084040] text-[#B6EA25] text-center px-6 py-3 rounded-lg font-medium hover:bg-[#B6EA25] hover:text-[#084040] transition"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}