"use client";
import * as React from "react";
import { useState, useEffect } from "react";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigationItems = [
    {
      label: "About Us",
      items: [
        { label: "Our Mission", href: "#mission" },
        { label: "Leadership Team", href: "#leadership" },
        { label: "History & Vision", href: "#history" }
      ]
    },
    {
      label: "Local Churches",
      items: [
        { label: "Find a Church", href: "#find-church" },
        { label: "Church Directory", href: "#directory" },
        { label: "Plant a Church", href: "#plant" }
      ]
    },
    {
      label: "Upcoming Events",
      items: [
        { label: "Community Gatherings", href: "#gatherings" },
        { label: "Workshops & Training", href: "#workshops" },
        { label: "Special Services", href: "#services" }
      ]
    },
    {
      label: "Resources",
      items: [
        { label: "Study Materials", href: "#study" },
        { label: "Prayer Requests", href: "#prayer" },
        { label: "Community Support", href: "#support" }
      ]
    }
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
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

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        .header-entrance {
          animation: slideInDown 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .logo-hover:hover {
          transform: scale(1.05);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .logo-wiggle:hover {
          animation: wiggle 0.5s ease-in-out;
        }

        .nav-item {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .nav-item:hover {
          transform: translateY(-2px) scale(1.05);
        }

        .nav-item:active {
          transform: scale(0.95);
        }

        .dropdown-menu {
          animation: slideInUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .dropdown-item {
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .dropdown-item:hover {
          transform: translateX(5px) scale(1.02);
        }

        .underline-expand {
          position: relative;
          overflow: hidden;
        }

        .underline-expand::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background-color: rgba(250, 249, 246, 1);
          width: 0;
          transition: width 0.3s ease-out;
        }

        .underline-expand:hover::after {
          width: 100%;
        }

        .chevron {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .chevron.rotate {
          transform: rotate(180deg);
        }

        .dropdown-arrow {
          animation: scaleIn 0.2s ease-out 0.1s both;
        }

        .stagger-item:nth-child(1) { animation-delay: 0.05s; }
        .stagger-item:nth-child(2) { animation-delay: 0.1s; }
        .stagger-item:nth-child(3) { animation-delay: 0.15s; }

        .stagger-item {
          animation: slideInLeft 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        .logo-text {
          animation: slideInLeft 0.6s ease-out 0.3s both;
        }

        .logo-epic:hover {
          transform: scale(1.02);
          transition: transform 0.2s ease-out;
        }

        .logo-pomona:hover {
          transform: scale(1.02);
          transition: transform 0.2s ease-out;
        }

        .bottom-border {
          animation: expandWidth 0.8s ease-out 0.5s both;
          transform-origin: left;
        }
      `}</style>

      <div className="flex flex-col items-center font-outfit text-2xl text-[rgba(250,249,246,1)] font-semibold">
        <div className="flex w-full max-w-[1152px] items-center justify-between px-6 lg:px-8">
          {/* Logo Section */}
          <div className="bg-transparent flex py-[20px] items-center gap-4 overflow-hidden whitespace-nowrap leading-7 flex-shrink-0 cursor-pointer logo-hover">
            <div className="relative logo-wiggle">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1daca73f69a00c6e5e7a1a1332fb96ee50bc9c7?placeholderIfAbsent=true"
                className="aspect-[2.29] object-contain object-center w-[117px] self-start mt-1 flex-shrink-0 max-w-full drop-shadow-sm"
                alt="EPIC POMONA Logo"
              />
            </div>
            <div className="leading-7 tracking-wide logo-text">
              <span className="block text-2xl font-bold logo-epic cursor-pointer">
                Epic Movement
              </span>
              <span className="block text-lg font-medium opacity-90 logo-pomona cursor-pointer">
                POMONA
              </span>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="flex items-center gap-1 leading-none justify-end flex-shrink-0">
            {navigationItems.map((navItem, index) => {
              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="px-4 py-4 rounded-lg hover:bg-[rgba(250,249,246,0.1)] focus:outline-none focus:ring-2 focus:ring-[rgba(250,249,246,0.3)] whitespace-nowrap cursor-pointer flex items-center text-base nav-item"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === index}
                  >
                    <span className="relative underline-expand">
                      {navItem.label}
                    </span>
                    <svg
                      className={`ml-2 w-4 h-4 chevron ${activeDropdown === index ? 'rotate' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === index && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-[rgba(29,32,70,0.98)] backdrop-blur-sm rounded-lg shadow-xl border border-[rgba(250,249,246,0.1)] dropdown-menu">
                      <div className="py-2">
                        {navItem.items.map((item, itemIndex) => {
                          return (
                            <a
                              key={itemIndex}
                              href={item.href}
                              className="block px-6 py-3 text-base font-medium text-[rgba(250,249,246,0.9)] hover:text-[rgba(250,249,246,1)] hover:bg-[rgba(250,249,246,0.1)] border-l-4 border-transparent hover:border-[rgba(250,249,246,0.5)] dropdown-item stagger-item"
                            >
                              {item.label}
                            </a>
                          );
                        })}
                      </div>
                      
                      {/* Dropdown arrow */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[rgba(29,32,70,0.98)] border-l border-t border-[rgba(250,249,246,0.1)] rotate-45 dropdown-arrow" />
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="h-px bg-[rgba(250,249,246,0.2)] bottom-border" />
    </header>
  );
}

export default Header;