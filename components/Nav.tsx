'use client';

import { useState, useEffect } from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaDiscord, FaTwitch } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gradient-to-br from-gray-900 to-black text-white fixed w-full z-20 top-0 left-0 font-sans py-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Hamburger + Dark mode + Social */}
          <div className="flex items-center space-x-4">
            {/* Hamburger button - shown on mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="hidden md:flex items-center justify-center p-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg
                  className="w-6 h-6 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-400 hover:text-amber-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            {/* Social Icons - visible from sm */}
            <ul className="hidden sm:flex space-x-4">
              <li>
                <Link href="https://youtube.com/channel/..." target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube className="w-6 h-6 hover:text-amber-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/alexis_alex" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF className="w-6 h-6 hover:text-amber-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/alexis_alex_ii" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="w-6 h-6 hover:text-amber-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="https://www.twitch.tv/alexis_alex_ii" target="_blank" rel="noopener noreferrer" aria-label="Twitch">
                  <FaTwitch className="w-6 h-6 hover:text-amber-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                  <FaDiscord className="w-6 h-6 hover:text-amber-400 transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle: Logo */}
          <div className="flex-shrink-0 bg-gradient-to-r from-amber-500 to-red-600 p-1 rounded-full">
            <Link href="/" className="flex items-center">
              <Image
                src="https://yt3.googleusercontent.com/I2mcCfvHKcgzdc55WhcIwRUZm2Y_ZkjxzngUFJNCg3WO2ESM7z7vZZGOlAdhJg2uqnuu7WPHWw=s120-c-k-c0x00ffffff-no-rj"
                alt="Ale Tube Logo"
                width={64}
                height={64}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Right: Desktop Nav */}
          <div className="hidden md:flex space-x-8 font-semibold text-lg">
            <Link href="https://www.youtube.com/@AleTube1st" className="hover:text-amber-400 transition-colors">
              Ale Tube
            </Link>
            <Link href="/Store" className="hover:text-amber-400 transition-colors">
              Merch
            </Link>
            <Link href="/Aboutme" className="hover:text-amber-400 transition-colors">
              About
            </Link>
            <Link href="/Blog" className="hover:text-amber-400 transition-colors">
              Blog
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 px-2 pb-4 border-t border-gray-700">
            <Link
              href="https://www.youtube.com/@AleTube1st"
              className="block px-3 py-2 rounded hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ale Tube
            </Link>
            <Link href="/Store" className="block px-3 py-2 rounded hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>
              Merch
            </Link>
            <Link href="/Aboutme" className="block px-3 py-2 rounded hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/Blog" className="block px-3 py-2 rounded hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
