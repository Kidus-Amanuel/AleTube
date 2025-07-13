'use client'; // Ensure this component is treated as a client component

import { useState, useEffect } from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaDiscord, FaTwitch } from 'react-icons/fa';

export default function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to apply the dark mode class to the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <nav className=" bg-gradient-to-br from-gray-900 to-black text-white  font-[family-name:var(--font-geist-sans)] opacity-100 fixed w-full z-20 top-0 start-0 ">
      <div className="container wrapper max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="header__sections flex items-center justify-between p-4">
          {/* Left Section - Mobile Hamburger & Desktop Controls */}
          <div className="header__section header__section--left flex items-center space-x-4">
            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button className="header__icon header__icon--hamburger">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3.75H20M0 10H20M0 16.25H20" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="1.5"></path>
                </svg>
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <div className="header__mode-switch hidden md:block">
              <label className="switch" onClick={toggleDarkMode}>
                <span className="switch__slider">
                  <span className={`switch__icon switch__icon--on ${isDarkMode ? 'block' : 'hidden'}`}>
                    <svg className="w-6 h-6 hover:text-amber-400 transition-colors cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <span className={`switch__icon switch__icon--off ${isDarkMode ? 'hidden' : 'block'}`}>
                    <svg className="w-6 h-6 hover:text-amber-400 transition-colors cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                    </svg>
                  </span>
                </span>
              </label>
            </div>

            {/* Social Icons */}
            <div className="header__social hidden sm:flex">
              <ul className="header__list header__list--socials flex space-x-4">
                <li className="header__list-item">
                  <a href="https://youtube.com/channel/..." target="_blank" rel="noopener noreferrer" className="header__icon hover:text-amber-400 transition-colors cursor-pointer">
                    <FaYoutube className="w-6 h-6" />
                  </a>
                </li>
                <li className="header__list-item">
                  <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqa1RjNGtfbHlfa0xSSk04TUxkRUxOOEtxejRlQXxBQ3Jtc0tsRE5ya2lzWWtNWldNdUhyeWRFNkdsOC1hbjNmdFJmckdOMzFCQUZVMzZWWkJjUFNqNkJSSXNjdDVvMXdsYXZZSVVfc0NuVFVoV2ZuemZnN1hjVkJHZ1RwejVJM0hyS2EyVUp5VFhNZGl2aWF4S0l1TQ&q=https%3A%2F%2Fwww.facebook.com%2Faletube2" target="_blank" rel="noopener noreferrer" className="header__icon hover:text-amber-400 transition-colors cursor-pointer">
                    <FaFacebookF className="w-6 h-6" />
                  </a>
                </li>
                <li className="header__list-item">
                  <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbGE5aHBjZ1RYTGllWUZDUWh4QnEzd1Q3akFaZ3xBQ3Jtc0tsZFdKWTNUeFZ0WEZYdW5nREdUb3U5QUpIUDZ0Y3VkNTJSamVSUVR0bkYtQ1NEWFNDSTdsdU9XYWJVZmFMWGFMMVFyRTFMTlhZR3FWWlh1X3JmVUVrYmpQRWNGdDItN2tHcnRXV2JIak5uck9vWjF0QQ&q=https%3A%2F%2Fwww.instagram.com%2Falexis_alex_ii%2F" target="_blank" rel="noopener noreferrer" className="header__icon hover:text-amber-400 transition-colors cursor-pointer">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </li>
                <li className="header__list-item">
                  <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbTZNUDJ3ejhjRThuN1VEMGpxVnpCV0ptSGtNZ3xBQ3Jtc0ttSTlvUXhzT0xRSGhtTmZPMlNqbUlwZVpKa01GMEpYenFrM3NfQXJSVTVFdVBQZTRRdmRjQzJtRUVyXzNUX1VFSjVfTkJvQ1N6TXpQV2k3Vl9GcG9DR0dxSVBrOVp1UnVuSU9KZW5GbW5ZTUhmbjFsdw&q=https%3A%2F%2Fwww.twitch.tv%2Falexis_alex_ii" target="_blank" rel="noopener noreferrer" className="header__icon hover:text-amber-400 transition-colors cursor-pointer">
                    <FaTwitch className="w-6 h-6" />
                  </a>
                </li>
                <li className="header__list-item">
                  <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="header__icon hover:text-amber-400 transition-colors cursor-pointer">
                    <FaDiscord className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Section - Logo */}
          <div className="header__section header__section--middle bg-gradient-to-r from-amber-500 to-red-600 p-1 rounded-full">
            <h1 className="header__logo">
              <a href="/" className="header__logo-link flex items-center ">
                <img
                  src="https://yt3.googleusercontent.com/I2mcCfvHKcgzdc55WhcIwRUZm2Y_ZkjxzngUFJNCg3WO2ESM7z7vZZGOlAdhJg2uqnuu7WPHWw=s120-c-k-c0x00ffffff-no-rj"
                  className="header__logo-image h-16 rounded-full"
                  alt="Ale Tube Logo"
                />
              </a>
            </h1>
          </div>

          {/* Right Section - Navigation */}
          <div className="header__section header__section--right flex items-center space-x-6 ">
            {/* Desktop Navigation */}
            <nav className="header__nav hidden md:block">
              <ul className="header__list flex space-x-6 text-bold">
                <li className="header__list-item">
                  <a href="https://www.youtube.com/@AleTube1st" className="header__link hover:text-amber-400 transition-colors cursor-pointer">Ale Tube</a>
                </li>
                <li className="header__list-item">
                  <a href="/Store" className="header__link hover:text-amber-400 transition-colors cursor-pointer">Merch</a>
                </li>
                <li className="header__list-item">
                  <a href="/Aboutme" className="header__link hover:text-amber-400 transition-colors cursor-pointer">About</a>
                </li>
                <li className="header__list-item">
                  <a href="/Blog" className="header__link hover:text-amber-400 transition-colors cursor-pointer">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
