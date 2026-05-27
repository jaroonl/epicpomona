"use client";
import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    { image: "sbt-group.jpg" },
    { image: "sad-group.jpg" },
    { image: "thanksmas.jpg" },
    { image: "wincon-25.jpg" },
  ];

  const totalSlides = slides.length;

  // autoplay (respect reduced motion)
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(id);
  }, [totalSlides]);

  const goToSlide = React.useCallback(
    (i: number) => i >= 0 && i < totalSlides && setCurrentSlide(i),
    [totalSlides]
  );
  const goToPrevious = React.useCallback(
    () => setCurrentSlide((p) => (p - 1 + totalSlides) % totalSlides),
    [totalSlides]
  );
  const goToNext = React.useCallback(
    () => setCurrentSlide((p) => (p + 1) % totalSlides),
    [totalSlides]
  );

  return (
    <section
      className="
        relative isolate w-full
        h-[80svh] min-h-[420px] md:h-[70svh] lg:h-[700px]
        overflow-hidden"
      aria-label="Epic Movement highlights"
    >
      {/* slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={s.image}
              alt=""
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        {/* overlay for contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 px-4 pt-4">
        <h1 className="text-center font-outfit font-bold uppercase leading-[0.95] drop-shadow-lg">
          <span className="block text-[#0093D0] text-[clamp(28px,9vw,80px)]">
            Invite
          </span>
          <span className="block text-[#0093D0] text-[clamp(28px,9vw,80px)]">
            Integrate
          </span>
          <span className="block text-[#0093D0] text-[clamp(28px,9vw,80px)]">
            Send
          </span>
        </h1>

        <Link
          href="/AboutUs"
          className="inline-flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3
                     rounded-full bg-[#1D2046] text-white font-outfit font-semibold
                     text-base sm:text-lg tracking-[1.5px] uppercase shadow-lg
                     transition-transform duration-200 hover:scale-105 hover:bg-[#2a2d5c]"
        >
          Who are we?
        </Link>
      </div>

      {/* arrows (hide on very small screens) */}
      <button
        onClick={goToPrevious}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20
                   h-10 w-10 items-center justify-center rounded-full
                   bg-white/20 hover:bg-white/30 backdrop-blur-sm transition"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20
                   h-10 w-10 items-center justify-center rounded-full
                   bg-white/20 hover:bg-white/30 backdrop-blur-sm transition"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            aria-label={`Go to slide ${i + 1}`}
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 w-2 rounded-full transition
              ${i === currentSlide ? "bg-white scale-110" : "bg-white/60 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
