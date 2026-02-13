'use client';

import { useState } from 'react';
import Image from 'next/image';

const navigation = [
  { name: 'The Need', href: '#need' },
  { name: 'Our Vision', href: '#vision' },
  { name: 'Help', href: '#help' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <a
              href="#top"
              className="flex items-center space-x-3 text-primary hover:opacity-90 transition-opacity"
            >
              <Image
                src="/BeWell-icon-transparent.png"
                alt="Be Well Center logo"
                width={48}
                height={48}
                className=""
              />
              <span className="text-lg sm:text-2xl font-bold text-primary leading-none">
                Be Well Center
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-1"
            aria-label="Main navigation"
          >
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <div className="ml-4">
              <a
                href="#help"
                className="btn-primary inline-block text-center"
              >
                Get Involved
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100 shadow-lg rounded-b-lg">
              {navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:text-primary font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <a
                  href="#help"
                  className="block px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 text-center shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
