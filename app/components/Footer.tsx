'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaXTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer
      className="relative bg-[#084040] text-white py-20 px-6 pb-55 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/pattern.png"
          alt="Footer background"
          fill
          className="object-cover object-bottom opacity-100 lg:translate-y-128 md:translate-y-125 translate-y-160"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 lg:mb-30 md:mb-25 mb-15">
        <div className="md:w-1/1 lg:w-1/4">
          <div className="flex items-center space-x-2 mb-4">
            <Link href="/" aria-label="Go to homepage">
              <Image
                className="dark:invert w-[220px] lg:w-[180px] h-auto"
                src="/logo-white.svg"
                alt="logo"
                width={150}
                height={38}
                priority
              />
            </Link>
          </div>
          <p className="text-white mb-6">Compare global exchange rates instantly and make smarter money decisions.</p>

          <div className="flex space-x-4 w-full">
              <a
                  href="https://instagram.com/userateshoppa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#060809] hover:bg-[#B6EA25] hover:text-[#084040] transition"
              >
                  <FaInstagram />
              </a>

              <a
                  href="https://www.tiktok.com/@userateshoppa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#060809] hover:bg-[#B6EA25] hover:text-[#084040] transition"
              >
                  <FaTiktok />
              </a>

              <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#060809] hover:bg-[#B6EA25] hover:text-[#084040] transition"
              >
                  <FaXTwitter />
              </a>

              <a
                  href="https://facebook.com/userateshoppa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#060809] hover:bg-[#B6EA25] hover:text-[#084040] transition"
              >
                  <FaFacebookF />
              </a>
          </div>
        </div>

        {/* Right side links */}
        <div className="md:w-1/2 lg:w-1/4 grid grid-cols-2 sm:grid-cols-2">
          <div>
            <h2 className="font-bold mb-4 text-gray-300">Company</h2>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-[#B6EA25] transition" aria-label="About us">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[#B6EA25] transition" aria-label="Contact us">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[#B6EA25] transition" aria-label="Careers">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-4 text-gray-300">Resources</h2>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-[#B6EA25] transition" aria-label="Support">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[#B6EA25] transition" aria-label="FAQs">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="relative max-w-7xl mx-auto border-t border-[#B6EA25] mt-12 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-white">
          © {new Date().getFullYear()} Rateshoppa. All rights reserved.
        </div>

        <div className="flex items-center space-x-4">
          <Link href="#" className="text-white hover:text-[#B6EA25]" aria-label="Terms of service">
            Terms
          </Link>
          <Link href="#" className="text-white hover:text-[#B6EA25]" aria-label="Privacy policy">
            Privacy
          </Link>
          <Link href="#" className="text-white hover:text-[#B6EA25]" aria-label="Cookie policy">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}