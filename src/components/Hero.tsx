"use client";
import * as React from "react";

function Hero() {
  return (
    <div className="relative w-full h-[720px] overflow-hidden flex items-center justify-center lg:h-[712px] md:h-[500px] sm:h-[400px]">
      {/* Background Images Container */}
      <div className="absolute top-0 left-0 w-full h-full flex">
        <div className="w-full h-full object-cover flex-shrink-0 absolute top-0 left-0 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500"></div>
        <div className="w-full h-full object-cover flex-shrink-0 absolute top-0 left-0 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500"></div>
        <div className="w-full h-full object-cover flex-shrink-0 absolute top-0 left-0 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500"></div>
        <div className="w-full h-full object-cover flex-shrink-0 absolute top-0 left-0 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500"></div>
      </div>

      {/* Main Title */}
      <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 w-[502px] h-[297px] text-center font-outfit text-[80px] font-bold leading-[110%] capitalize z-10 lg:top-[180px] lg:text-[80px] lg:w-[502px] lg:h-[297px] md:top-[140px] md:text-[55px] md:w-[400px] md:h-[200px] sm:top-[100px] sm:text-[36px] sm:w-[300px] sm:h-[150px] sm:leading-[100%]">
        <span className="text-[#0093D0] sm:my-[5px] block">INVITE</span>
        <span className="text-[#1D2046] sm:my-[5px] block">INTEGRATE</span>
        <span className="text-[#0093D0] sm:my-[5px] block">SEND</span>
      </div>

      {/* CTA Button */}
      <div className="absolute top-[480px] left-1/2 transform -translate-x-1/2 w-[247px] h-[63px] cursor-pointer z-10 lg:top-[480px] md:top-[350px] sm:top-[280px] sm:w-[200px] sm:h-[50px]">
        <div className="relative w-full h-full">
          {/* SVG Background */}
          <svg
            width="247"
            height="63"
            viewBox="0 0 247 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M0 31.5C0 14.103 14.103 0 31.5 0H215.5C232.897 0 247 14.103 247 31.5C247 48.897 232.897 63 215.5 63H31.5C14.103 63 0 48.897 0 31.5Z"
              fill="#1D2046"
            />
          </svg>

          {/* Button Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-outfit font-semibold text-[18px] text-white leading-[27.5px] tracking-[1.8px] uppercase w-[143px] h-[28px] text-center sm:text-[14px] sm:tracking-[1.4px] sm:w-[120px] sm:h-[20px]">
            WHO ARE WE?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;