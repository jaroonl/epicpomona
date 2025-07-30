"use client";
import React from 'react';
//import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
import { useState, useEffect } from "react";

export const TopHeader = () => (
  <div className="w-full bg-blue-900 text-white py-4 px-6 shadow-md">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <h1 className="text-xl font-bold">Epic Ministry</h1>
      {/* Optional nav items or buttons can go here */}
      <nav className="space-x-4 text-sm hidden md:block">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Connect</a>
        <a href="#" className="hover:underline">Support</a>
      </nav>
    </div>
  </div>
);
export const HeroSection = () => (
  <header className="w-screen h-[677px] max-md:h-[500px] flex justify-center items-center bg-white relative">
    <div className="w-screen h-[677px] max-md:h-[500px] flex flex-col justify-between items-center relative">
      {/* Background image - lowest layer */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41f87fc25c9bd123845d8096b9b46916b4abbc35?placeholderIfAbsent=true&apiKey=466110543a0c42c5bbfa00555e2c572e"
        alt="Hero background"
        className="absolute inset-0 w-screen h-full object-cover"
      />
     
      {/* Light dark overlay - middle layer */}
      <div className="w-screen h-full absolute inset-0 z-5" style={{backgroundColor: 'rgba(37, 37, 37, 0.6)'}}></div>
     

     
      {/* Content overlay - top layer */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-4">
        <h1 className="font-outfit text-[64px] max-md:text-[40px] max-sm:text-[32px] font-bold leading-normal text-white mb-6 text-center">
          Connect with us!
        </h1>
          {/* Subheading */}
          <p className="font-outfit text-[24px] max-md:text-[18px] max-sm:text-[16px] font-bold leading-normal text-white mb-12 text-center">
            Join our discord and instagram to stay updated!
          </p>
          {/* Buttons container */}
          <div className="flex gap-8 max-md:gap-4 max-sm:flex-col max-sm:gap-4">
            {/* Instagram Button */}
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center rounded-full bg-[#0093D0] hover:bg-[#007BB8] transition-colors cursor-pointer">
                <div className="flex justify-center items-center gap-1 px-3 py-1.5">
                  <span className="font-roboto text-[14px] max-sm:text-[12px] font-medium leading-[20px] tracking-[0.1px] text-white">
                    Connect with us on Instgram!
                  </span>
                </div>
              </div>
            </div>
            {/* Discord Button */}
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center rounded-full bg-[#0093D0] hover:bg-[#007BB8] transition-colors cursor-pointer">
                <div className="flex justify-center items-center gap-1 px-3 py-1.5">
                  <span className="font-roboto text-[14px] max-sm:text-[12px] font-medium leading-[20px] tracking-[0.1px] text-white">
                    Connect with us on Discord!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </header>
);

export const PrayerSection = () => (
  <section className="flex flex-col items-center gap-[60px] max-w-[974px] mx-auto">
    <h2 className="font-outfit text-[48px] font-bold leading-normal text-[#1D2046] max-md:text-[36px]">
      Need Prayer?
    </h2>
    <p className="font-outfit text-[24px] font-normal leading-normal text-black w-full text-center max-md:text-[20px]">
      Prayer is our way of connecting with God. It's powerful because He hears us. In fact, God is always ready for us to come to Him with both our praise and our requests. Even the smallest, most seemingly insignificant prayer can have a big impact.
    </p>

  </section>
);

export const GoogleFormEmbed = () => (
  <section className="w-full flex justify-center px-6 py-12 mt-16">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScbfYSAH1YyFmvRw5gvmfW4GZyT-Xei0kv1VJAL34c-5q3H-g/viewform?embedded=true"
      width="760"
      height="600"
      frameBorder="0"
      title="Contact Form"
      className="rounded-lg shadow-lg"
    >
      Loading…
    </iframe>
  </section>
);

export const SupportSection = () => (
  <section className="flex flex-col items-center gap-[49px] max-w-[1102px] mx-auto">
    <h2 className="font-outfit text-[48px] font-bold leading-normal text-[#1D2046] max-md:text-[36px]">
      Support
    </h2>
    <p className="font-outfit text-[24px] font-normal leading-normal text-black w-full text-center max-md:text-[20px]">
      Epic is a movement and ministry that relies on the generous support of others to thrive. Want to make a difference? Partner with us by giving today.
    </p>
    <div className="flex justify-center items-center">
      <button className="flex justify-center items-center gap-2 px-16 py-3 rounded-lg border border-[rgba(44,44,44,1)] bg-[#0093D0] hover:bg-[#007BB8] transition-colors min-w-[200px]">
        <span className="font-inter text-[16px] font-medium leading-[100%] text-[rgba(245,245,245,1)]">
          Give
        </span>
      </button>
    </div>
  </section>
);

export const Footer = () => {
  return (
    <footer
      className="flex justify-center items-center py-8 px-8 border-t border-[rgba(117,117,117,1)]"
      style={{ backgroundColor: "#1D2046", minHeight: "230px" }}
    >
      <div className="flex w-full max-w-[1152px] justify-between items-start">
        {/* Socials Section */}
        <div className="flex flex-col items-start gap-1.5">
          <h3
            className="text-[32px] font-medium leading-[120%] tracking-[-0.64px] font-outfit mb-6"
            style={{ color: "#F5F5F5" }}
          >
            Socials
          </h3>
          <div className="flex flex-col gap-4 py-1.5">
            {/* Instagram */}
            <div className="flex items-center gap-2.5 h-10">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 p-0.5"
              >
                <path
                  d="M13.175 4.25H26.825C32.025 4.25 36.25 8.475 36.25 13.675V27.325C36.25 29.8247 35.257 32.222 33.4895 33.9895C31.722 35.757 29.3247 36.75 26.825 36.75H13.175C7.975 36.75 3.75 32.525 3.75 27.325V13.675C3.75 11.1753 4.74299 8.77805 6.51052 7.01052C8.27805 5.24299 10.6753 4.25 13.175 4.25ZM12.85 7.5C11.2985 7.5 9.81051 8.11634 8.71343 9.21343C7.61634 10.3105 7 11.7985 7 13.35V27.65C7 30.8837 9.61625 33.5 12.85 33.5H27.15C28.7015 33.5 30.1895 32.8837 31.2866 31.7866C32.3837 30.6895 33 29.2015 33 27.65V13.35C33 10.1163 30.3837 7.5 27.15 7.5H12.85ZM28.5312 9.9375C29.07 9.9375 29.5866 10.1515 29.9676 10.5324C30.3485 10.9134 30.5625 11.43 30.5625 11.9688C30.5625 12.5075 30.3485 13.0241 29.9676 13.4051C29.5866 13.786 29.07 14 28.5312 14C27.9925 14 27.4759 13.786 27.0949 13.4051C26.714 13.0241 26.5 12.5075 26.5 11.9688C26.5 11.43 26.714 10.9134 27.0949 10.5324C27.4759 10.1515 27.9925 9.9375 28.5312 9.9375ZM20 12.375C22.1549 12.375 24.2215 13.231 25.7452 14.7548C27.269 16.2785 28.125 18.3451 28.125 20.5C28.125 22.6549 27.269 24.7215 25.7452 26.2452C24.2215 27.769 22.1549 28.625 20 28.625C17.8451 28.625 15.7785 27.769 14.2548 26.2452C12.731 24.7215 11.875 22.6549 11.875 20.5C11.875 18.3451 12.731 16.2785 14.2548 14.7548C15.7785 13.231 17.8451 12.375 20 12.375ZM20 15.625C18.7071 15.625 17.4671 16.1386 16.5529 17.0529C15.6386 17.9671 15.125 19.2071 15.125 20.5C15.125 21.7929 15.6386 23.0329 16.5529 23.9471C17.4671 24.8614 18.7071 25.375 20 25.375C21.2929 25.375 22.5329 24.8614 23.4471 23.9471C24.3614 23.0329 24.875 21.7929 24.875 20.5C24.875 19.2071 24.3614 17.9671 23.4471 17.0529C22.5329 16.1386 21.2929 15.625 20 15.625Z"
                  fill="#F5F5F5"
                />
              </svg>
              <span
                className="text-[24px] font-normal leading-[120%] tracking-[-0.48px] font-outfit flex-1"
                style={{ color: "#F5F5F5" }}
              >
                @epicpomona
              </span>
            </div>

            {/* Discord */}
            <div className="flex items-center gap-2.5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M31.8112 9.65783C29.65 8.65033 27.31 7.91908 24.8725 7.49658C24.8296 7.49719 24.7887 7.51472 24.7587 7.54533C24.4662 8.08158 24.125 8.78033 23.8975 9.31658C21.3121 8.92683 18.6829 8.92683 16.0975 9.31658C15.87 8.76408 15.5287 8.08158 15.22 7.54533C15.2037 7.51283 15.155 7.49658 15.1062 7.49658C12.6687 7.91908 10.345 8.65033 8.16749 9.65783C8.15124 9.65783 8.13499 9.67408 8.11874 9.69033C3.69874 16.3041 2.47999 22.7391 3.08124 29.1091C3.08124 29.1416 3.09749 29.1741 3.12999 29.1903C6.05499 31.3353 8.86624 32.6353 11.645 33.4966C11.6937 33.5128 11.7425 33.4966 11.7587 33.4641C12.4087 32.5703 12.9937 31.6278 13.4975 30.6366C13.53 30.5716 13.4975 30.5066 13.4325 30.4903C12.5062 30.1328 11.6287 29.7103 10.7675 29.2228C10.7025 29.1903 10.7025 29.0928 10.7512 29.0441C10.93 28.9141 11.1087 28.7678 11.2875 28.6378C11.32 28.6053 11.3687 28.6053 11.4012 28.6216C16.9912 31.1728 23.02 31.1728 28.545 28.6216C28.5775 28.6053 28.6262 28.6053 28.6587 28.6378C28.8375 28.7841 29.0162 28.9141 29.195 29.0603C29.26 29.1091 29.26 29.2066 29.1787 29.2391C28.3337 29.7428 27.44 30.1491 26.5137 30.5066C26.4487 30.5228 26.4325 30.6041 26.4487 30.6528C26.9687 31.6441 27.5537 32.5866 28.1875 33.4803C28.2362 33.4966 28.285 33.5128 28.3337 33.4966C31.1287 32.6353 33.94 31.3353 36.865 29.1903C36.8975 29.1741 36.9137 29.1416 36.9137 29.1091C37.6287 21.7478 35.7275 15.3616 31.8762 9.69033C31.86 9.67408 31.8437 9.65783 31.8112 9.65783ZM14.3425 25.2253C12.6687 25.2253 11.2712 23.6816 11.2712 21.7803C11.2712 19.8791 12.6362 18.3353 14.3425 18.3353C16.065 18.3353 17.43 19.8953 17.4137 21.7803C17.4137 23.6816 16.0487 25.2253 14.3425 25.2253ZM25.6687 25.2253C23.995 25.2253 22.5975 23.6816 22.5975 21.7803C22.5975 19.8791 23.9625 18.3353 25.6687 18.3353C27.3912 18.3353 28.7562 19.8953 28.74 21.7803C28.74 23.6816 27.3912 25.2253 25.6687 25.2253Z"
                  fill="#F5F5F5"
                />
              </svg>
              <span
                className="text-[24px] font-normal leading-[120%] tracking-[-0.48px] font-outfit flex-1 underline"
                style={{ color: "#F5F5F5" }}
              >
                Discord
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="flex justify-center items-start gap-12 p-1.5">
          {/* About Us */}
          <div className="flex flex-col items-start gap-3 w-[158px]">
            <div className="flex flex-col items-start gap-2.5 self-stretch pb-4">
              <h4
                className="text-[18px] font-semibold leading-[140%] font-outfit self-stretch"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                About Us
              </h4>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                What is Epic?
              </a>
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Mission Statement
              </a>
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Staff and Leadership
              </a>
            </div>
          </div>

          {/* Get Connected */}
          <div className="flex flex-col items-start gap-3 w-[189px]">
            <div className="flex flex-col items-start gap-2.5 self-stretch pb-4">
              <h4
                className="text-[18px] font-semibold leading-[140%] font-outfit self-stretch"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Get Connected
              </h4>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Local Churches
              </a>
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Upcoming Events
              </a>
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Discord Announcements
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-start gap-3 w-[123px]">
            <div className="flex flex-col items-start gap-2.5 self-stretch pb-4">
              <h4
                className="text-[18px] font-semibold leading-[140%] font-outfit self-stretch"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Resources
              </h4>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Rides Sign-up
              </a>
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Prayer Requests
              </a>
            </div>
          </div>

          {/* Support/Give */}
          <div className="flex flex-col items-start gap-3 w-[147px]">
            <div className="flex flex-col items-start gap-2.5 self-stretch pb-4">
              <h4
                className="text-[18px] font-semibold leading-[140%] font-outfit self-stretch"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Support/Give
              </h4>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Support SoCal Epic
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

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



const ConnectPage = () => {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Header />

      {/* Main content container */}
      <div className="flex flex-col items-center gap-[55px] max-w-[1706px] mx-auto bg-[#FAF9F6] pb-16 px-4">
        <HeroSection />
        <PrayerSection />
        <GoogleFormEmbed />
        <SupportSection />
      </div>

      
      <Footer/>
    </main>
  );
};




export default ConnectPage;
