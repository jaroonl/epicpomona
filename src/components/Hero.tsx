"use client";
import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Define slides with actual photos
  const slides = [
    {
      image: "sbt-group.jpg"
    },
    {
      image: "sad-group.jpg"
    },
    {
      image: "thanksmas.jpg", 
    },
    {
      image: "wincon-25.jpg"
    }
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
    <div className="relative w-full h-[720px] overflow-hidden flex items-center justify-center lg:h-[698px] md:h-[500px] sm:h-[400px]">
      {/* Background Images Container */}
      <div className="absolute top-0 left-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Optional: Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
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
        <span className="text-[#0093D0] sm:my-[5px] block drop-shadow-lg">INVITE</span>
        <span className="text-[#0093D0] sm:my-[5px] block drop-shadow-lg">INTEGRATE</span>
        <span className="text-[#0093D0] sm:my-[5px] block drop-shadow-lg">SEND</span>
      </div>

      {/* CTA Button */}
      <div className="absolute top-[480px] left-1/2 transform -translate-x-1/2 z-10 lg:top-[480px] md:top-[350px] sm:top-[280px]">
        <Link
          href="/AboutUs"
          className="inline-flex items-center justify-center px-8 py-3 sm:px-6 sm:py-2 
                    rounded-full bg-[#1D2046] text-white font-outfit font-semibold 
                    text-lg sm:text-base tracking-[1.5px] uppercase shadow-lg
                    transition-transform duration-200 hover:scale-105 hover:bg-[#2a2d5c]"
        >
          WHO ARE WE?
        </Link>
      </div>
    </div>
  );
}

export default Hero;