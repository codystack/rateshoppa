'use client';

import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-[#084040] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Link href="/">
              <Image
                  className="dark:invert w-[120px] lg:w-[180px] h-auto"
                  src="./logo-white.svg"
                  alt="logo"
                  width={150}
                  height={38}
                  priority
              />
            </Link>
          </div>
          <p className="text-gray-300 mb-6">Modern finance starts here.</p>

          <div className="space-y-2 text-gray-300 text-sm">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-4 w-4" />
              <span>0445 334 1235</span>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-4 w-4" />
              <span>info@vectura.com</span>
            </div>
          </div>
        </div>

        {/* Middle Section - Features */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-200">Features</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              'Expense tracking',
              'Budgeting',
              'Reporting',
              'Smart approvals',
              'Vendor management',
              'User access & roles',
            ].map((feature) => (
              <li key={feature}>
                <Link href="#" className="hover:text-white transition">
                  {feature}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Company */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-200">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              'Case studies',
              'About us',
              'Blog',
              'Careers',
              'Contact',
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#B6EA25] mt-12 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          © 2025 Vectura LTD. All rights reserved.
        </div>

        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:text-white">
            Terms
          </Link>
          <Link href="#" className="hover:text-white">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}