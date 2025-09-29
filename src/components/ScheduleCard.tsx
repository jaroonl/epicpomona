"use client";
import * as React from "react";
import { MapPin, Clock } from "lucide-react";

interface ScheduleCardProps {
  image: string;
  title: string;
  description: string;
  location: string;
  day: string;
  time: string;
}

function ScheduleCard({
  image,
  title,
  description,
  location,
  day,
  time,
}: ScheduleCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    const updateScale = () => {
      if (cardRef.current) {
        const width = cardRef.current.offsetWidth;
        // Scale based on card width, with 420px as the base
        setScale(Math.min(width / 420, 1));
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    
    // Use ResizeObserver to detect card size changes
    const resizeObserver = new ResizeObserver(updateScale);
    if (cardRef.current) {
      resizeObserver.observe(cardRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateScale);
      resizeObserver.disconnect();
    };
  }, []);

  const locationLines = location.split("\n");
  const locationName = locationLines[0];
  const address = locationLines.slice(1);

  const handleFlip = () => setIsFlipped((v) => !v);
  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div ref={cardRef} className="w-full max-w-[420px] aspect-[7/12]">
      {/* 3D stage */}
      <div className="relative w-full h-full [perspective:1000px]">
        {/* Rotator */}
        <div
          className={`absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* FRONT */}
          <div className="absolute inset-0 flex flex-col items-start rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white [backface-visibility:hidden]"
               style={{ padding: `${20 * scale}px`, gap: `${8 * scale}px` }}>
            <div className="w-full aspect-[37/37] flex-shrink-0 relative overflow-hidden rounded"
                 style={{ marginBottom: `${4 * scale}px` }}>
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="font-bold text-[#1D2046] self-stretch leading-[120%] capitalize"
                 style={{ fontSize: `${32 * scale}px`, marginBottom: `${8 * scale}px` }}>
              {title}
            </div>

            <div className="flex-1 flex flex-col justify-between self-stretch min-h-0">
              <div className="flex flex-col items-start" style={{ gap: `${20 * scale}px` }}>
                <div className="flex flex-col justify-center items-start" style={{ gap: `${8 * scale}px` }}>
                  <div className="flex items-start" style={{ gap: `${6 * scale}px` }}>
                    <MapPin className="text-[#1D2046] flex-shrink-0" 
                            style={{ width: `${15 * scale}px`, height: `${15 * scale}px`, marginTop: `${2 * scale}px` }} />
                    <div className="flex flex-col text-[#1D2046] leading-[140%]"
                         style={{ gap: `${4 * scale}px`, fontSize: `${18 * scale}px` }}>
                      <div className="font-bold">{locationName}</div>
                      {address.length > 0 && (
                        <div className="font-normal">
                          {address.map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              {index < address.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center" style={{ gap: `${6 * scale}px` }}>
                    <Clock className="text-[#1D2046] flex-shrink-0" 
                           style={{ width: `${14 * scale}px`, height: `${14 * scale}px` }} />
                    <div className="text-[#1D2046] font-normal leading-[140%]"
                         style={{ fontSize: `${18 * scale}px` }}>
                      <span className="font-bold text-[#1D2046]">
                        {day}
                      </span>
                      <span className="font-normal text-[#1D2046]">
                        {" "}
                        {time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end" style={{ marginTop: `${8 * scale}px` }}>
                <button
                  type="button"
                  aria-label={isFlipped ? "Show front" : "Show details"}
                  onClick={handleFlip}
                  onKeyDown={handleKey}
                  className={`flex justify-center items-center rounded-xl transition-all duration-300 bg-[#0093D0] hover:bg-[#007bb3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0093D0] ${
                    isFlipped ? "rotate-180" : ""
                  }`}
                  style={{ 
                    width: `${38 * scale}px`, 
                    height: `${34 * scale}px`,
                    padding: `${10 * scale}px ${12 * scale}px`
                  }}
                >
                  <span className="font-normal text-[#FAF9F6] leading-[110%]"
                        style={{ fontSize: `${20 * scale}px` }}>
                    ➜
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className="absolute inset-0 flex flex-col items-start rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white [transform:rotateY(180deg)] [backface-visibility:hidden]"
               style={{ padding: `${20 * scale}px`, gap: `${16 * scale}px` }}>
            <div className="font-bold text-[#1D2046] leading-[120%]"
                 style={{ fontSize: `${28 * scale}px` }}>
              {title} — Details
            </div>

            <div className="flex items-center" style={{ gap: `${8 * scale}px` }}>
              <Clock className="text-[#1D2046] flex-shrink-0" 
                     style={{ width: `${18 * scale}px`, height: `${18 * scale}px` }} />
              <div className="text-[#1D2046]" style={{ fontSize: `${18 * scale}px` }}>
                <span className="font-bold">{day}</span> {time}
              </div>
            </div>

            <div className="flex items-start" style={{ gap: `${8 * scale}px` }}>
              <MapPin className="text-[#1D2046] flex-shrink-0" 
                      style={{ width: `${18 * scale}px`, height: `${18 * scale}px`, marginTop: `${4 * scale}px` }} />
              <div className="text-[#1D2046] leading-[140%]" style={{ fontSize: `${18 * scale}px` }}>
                <div className="font-bold">{locationName}</div>
                {address.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>

            <div className="flex-1 text-[#1D2046] leading-relaxed overflow-auto"
                 style={{ fontSize: `${18 * scale}px` }}>
              {description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < description.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>

            <div className="flex w-full justify-end">
              <button
                type="button"
                aria-label="Show front"
                onClick={handleFlip}
                onKeyDown={handleKey}
                className={`flex justify-center items-center rounded-xl transition-all duration-300 bg-[#0093D0] hover:bg-[#007bb3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0093D0] ${
                  isFlipped ? "rotate-180" : ""
                }`}
                style={{ 
                  width: `${38 * scale}px`, 
                  height: `${34 * scale}px`,
                  padding: `${10 * scale}px ${12 * scale}px`
                }}
              >
                <span className="font-normal text-[#FAF9F6] leading-[110%]"
                      style={{ fontSize: `${20 * scale}px` }}>
                  ➜
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleCard;