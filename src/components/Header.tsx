"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigationItems = [
    {
      label: "About Us",
      href: "/AboutUs"
    },
    {
      label: "Local Churches",
      href: "/LocalChurches"
    },
    {
      label: "Upcoming Events",
      href: "/UpcomingEvents"
    },
    {
      label: "Resources",
      href: "/Resources"
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`bg-[rgba(29,32,70,1)] shadow-lg relative z-50 transform transition-transform duration-700 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <style jsx>{`
          @keyframes slideInDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes expandWidth {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes hamburgerSlide {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .header-entrance {
            animation: slideInDown 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .logo-button {
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border-radius: 16px;
            padding: 16px 20px;
            position: relative;
            overflow: hidden;
          }

          .logo-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(250, 249, 246, 0.1), transparent);
            transition: left 0.6s ease-in-out;
          }

          .logo-button:hover::before {
            left: 100%;
          }

          .logo-button:hover {
            transform: translateY(-3px) scale(1.03);
            background: linear-gradient(135deg, rgba(250, 249, 246, 0.1), rgba(250, 249, 246, 0.05));
            box-shadow: 
              0 10px 30px rgba(0, 0, 0, 0.25),
              0 0 0 1px rgba(250, 249, 246, 0.15),
              inset 0 1px 0 rgba(250, 249, 246, 0.1);
            border-color: rgba(250, 249, 246, 0.3);
          }

          .logo-button:active {
            transform: translateY(-1px) scale(1.01);
            transition: all 0.1s ease-out;
          }

          .logo-image {
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .logo-button:hover .logo-image {
            transform: rotate(-2deg) scale(1.05);
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
          }

          .logo-text-epic {
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .logo-text-pomona {
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .logo-button:hover .logo-text-epic {
            transform: translateX(2px);
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }

          .logo-button:hover .logo-text-pomona {
            transform: translateX(3px);
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
          }

          .nav-item {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border-radius: 12px;
            padding: 10px 24px;
            position: relative;
            overflow: hidden;
            font-size: 1rem;
          }

          .nav-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: linear-gradient(135deg, rgba(250, 249, 246, 0.15), rgba(250, 249, 246, 0.08));
            transition: width 0.4s ease-out;
            z-index: -1;
          }

          .nav-item:hover::before {
            width: 100%;
          }

          .nav-item:hover {
            transform: translateY(-2px);
            box-shadow: 
              0 6px 20px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(250, 249, 246, 0.1);
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          .nav-item:active {
            transform: translateY(0);
            transition: all 0.1s ease-out;
          }

          .underline-expand {
            position: relative;
            overflow: hidden;
          }

          .underline-expand::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            height: 2px;
            background-color: rgba(250, 249, 246, 1);
            width: 0;
            transition: width 0.3s ease-out;
          }

          .underline-expand:hover::after {
            width: 100%;
          }

          .logo-text {
            animation: slideInLeft 0.6s ease-out 0.3s both;
          }

          .bottom-border {
            animation: expandWidth 0.8s ease-out 0.5s both;
            transform-origin: left;
          }

          .hamburger-line {
            display: block;
            width: 25px;
            height: 3px;
            background-color: rgba(250, 249, 246, 1);
            margin: 5px 0;
            transition: 0.3s;
            border-radius: 2px;
          }

          .hamburger.open .hamburger-line:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
          }

          .hamburger.open .hamburger-line:nth-child(2) {
            opacity: 0;
          }

          .hamburger.open .hamburger-line:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
          }

          .mobile-menu {
            animation: slideInRight 0.3s ease-out;
          }

          .mobile-nav-item {
            animation: hamburgerSlide 0.3s ease-out both;
            margin-bottom: 4px;
          }

          .mobile-nav-item:nth-child(1) { animation-delay: 0.1s; }
          .mobile-nav-item:nth-child(2) { animation-delay: 0.2s; }
          .mobile-nav-item:nth-child(3) { animation-delay: 0.3s; }
          .mobile-nav-item:nth-child(4) { animation-delay: 0.4s; }
          .mobile-nav-item:last-child { margin-bottom: 0; } /* Remove margin from last item */
        `}</style>

        <div className="flex flex-col items-center font-outfit text-lg text-[rgba(250,249,246,1)] font-semibold">
          <div className="flex w-full max-w-[1152px] items-center justify-between px-10 lg:px-16 py-0"> {/* Added vertical padding */}
            {/* Logo Button - Combined into one cohesive button */}
            <Link 
              href="/" 
              className="logo-button flex py-[20px] items-center gap-4 overflow-hidden whitespace-nowrap leading-7 flex-shrink-0 cursor-pointer bg-transparent border-2 border-transparent hover:border-[rgba(250,249,246,0.2)]"
            >
              <div className="relative logo-image">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1daca73f69a00c6e5e7a1a1332fb96ee50bc9c7?placeholderIfAbsent=true"
                  className="aspect-[2.29] object-contain object-center w-[117px] flex-shrink-0 max-w-full drop-shadow-sm"
                  alt="EPIC POMONA Logo"
                />
              </div>
              <div className="leading-7 tracking-wide logo-text">
                <span className="block text-2xl font-bold logo-text-epic">
                  Epic Movement
                </span>
                <span className="block text-lg font-medium opacity-90 logo-text-pomona">
                  POMONA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Improved spacing */}
            <nav className="hidden lg:flex items-center gap-8 leading-none justify-end flex-shrink-0"> {/* Increased gap from 2 to 4 (16px) */}
              {navigationItems.map((navItem, index) => (
                <Link
                  key={index}
                  href={navItem.href}
                  className="nav-item"
                >
                  <span className="relative underline-expand">
                    {navItem.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Hamburger Menu Button - Added margin for breathing room */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden flex flex-col items-center justify-center w-12 h-12 ml-4 rounded-lg hover:bg-[rgba(250,249,246,0.1)] focus:outline-none focus:ring-2 focus:ring-[rgba(250,249,246,0.3)] transition-all duration-300 hamburger ${isMobileMenuOpen ? 'open' : ''}`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
        
        <div className="h-px bg-[rgba(250,249,246,0.2)] bottom-border" />
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-[rgba(29,32,70,0.98)] backdrop-blur-md z-50 transform transition-transform duration-300 ease-out lg:hidden mobile-menu ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-[rgba(250,249,246,0.1)]">
            <h2 className="text-xl font-bold text-[rgba(250,249,246,1)] font-outfit">Menu</h2>
            <button
              onClick={closeMobileMenu}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[rgba(250,249,246,0.1)] text-[rgba(250,249,246,1)] transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-4"> {/* Added horizontal padding and increased vertical padding */}
            {navigationItems.map((navItem, index) => (
              <div key={index} className="mobile-nav-item">
                <Link
                  href={navItem.href}
                  onClick={closeMobileMenu}
                  className="block w-full px-8 py-3 mx-2 text-left text-base font-medium text-[rgba(250,249,246,1)] hover:bg-[rgba(250,249,246,0.1)] transition-colors rounded-lg" // Added margin and border radius
                >
                  {navItem.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;