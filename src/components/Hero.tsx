"use client";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);

  // Define different backgrounds for each slide
  const slides :string[]= [
    "bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500",
    "bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500",
    "bg-gradient-to-br from-purple-100 via-purple-300 to-purple-500",
    "bg-gradient-to-br from-green-100 via-green-300 to-green-500"
  ];

  const totalSlides = slides.length;

  // Simple autoplay effect that continues running
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [totalSlides]);

  // Navigation functions - autoplay continues automatically
  const goToSlide = React.useCallback((index:number) => {
    if (index < 0 || index >= totalSlides) return;
    setCurrentSlide(index);
  }, [totalSlides]);

  const goToPrevious = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToNext = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  return (
    <div className="relative w-full h-[720px] overflow-hidden flex items-center justify-center lg:h-[712px] md:h-[500px] sm:h-[400px]">
      {/* Background Images Container */}
      <div className="absolute top-0 left-0 w-full h-full">
        {slides.map((slideBackground, index) => (
          <div
            key={index}
            className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } ${slideBackground}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 sm:left-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 sm:right-2"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white sm:w-5 sm:h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 sm:bottom-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 sm:w-2 sm:h-2 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Title */}
      <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 w-[502px] h-[297px] text-center font-outfit text-[80px] font-bold leading-[110%] capitalize z-10 lg:top-[180px] lg:text-[80px] lg:w-[502px] lg:h-[297px] md:top-[140px] md:text-[55px] md:w-[400px] md:h-[200px] sm:top-[100px] sm:text-[36px] sm:w-[300px] sm:h-[150px] sm:leading-[100%]">
        <span className="text-[#0093D0] sm:my-[5px] block">INVITE</span>
        <span className="text-[#1D2046] sm:my-[5px] block">INTEGRATE</span>
        <span className="text-[#0093D0] sm:my-[5px] block">SEND</span>
      </div>

      {/* CTA Button */}
      <div className="absolute top-[480px] left-1/2 transform -translate-x-1/2 w-[247px] h-[63px] cursor-pointer z-10 lg:top-[480px] md:top-[350px] sm:top-[280px] sm:w-[200px] sm:h-[50px] hover:scale-105 transition-transform duration-200">
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