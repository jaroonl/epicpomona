"use client";
import * as React from "react";
import { IconMapPin, IconClock } from "@tabler/icons-react";

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
  const locationLines = location.split('\n');
  const locationName = locationLines[0]; // First line (location name)
  const address = locationLines.slice(1); // Remaining lines (address)

  return (
    <div className="flex w-[335px] max-w-full lg:max-w-[400px] md:w-full sm:w-full sm:max-w-[335px] p-5 sm:p-4 flex-col items-start gap-2 sm:gap-2 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] flex-shrink-0 bg-white h-[650px] sm:h-[600px]">
      <div className="flex h-[360px] sm:h-[295px] flex-col justify-center items-center self-stretch relative overflow-hidden rounded mb-1">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="font-outfit font-bold text-[35px] sm:text-[28px] text-[#1D2046] self-stretch leading-[110%] capitalize h-[60px] sm:h-[55px] flex items-start">
        {title}
      </div>

      <div className="font-outfit font-light text-lg sm:text-base text-[#1D2046] self-stretch leading-[110%] h-[90px] sm:h-[80px] flex items-start overflow-hidden">
        {description.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < description.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-between items-start self-stretch sm:flex-col sm:gap-4 sm:items-start flex-grow">
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="flex items-start gap-1">
              <IconMapPin className="w-[13px] h-[13px] text-[#1D2046] mt-0.5" />
              <div className="flex flex-col gap-1 text-lg sm:text-base text-[#1D2046] leading-[110%]">
                <div className="font-outfit font-bold">
                  {locationName}
                </div>
                {address.length > 0 && (
                  <div className="font-outfit font-normal">
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

            <div className="flex items-center gap-1">
              <IconClock className="w-3 h-3 text-[#1D2046]" />
              <div className="text-[#1D2046] font-outfit text-lg sm:text-base font-normal leading-[110%]">
                <span className="font-outfit font-bold text-lg sm:text-base text-[#1D2046]">
                  {day}
                </span>
                <span className="font-outfit font-normal text-lg sm:text-base text-[#1D2046]">
                  {" "}@ {time}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[38px] h-[34px] px-3 py-[10px] justify-center items-center gap-[10px] rounded-xl cursor-pointer transition-colors duration-200 sm:self-end bg-[#0093D0] hover:bg-[#007bb3]">
          <div className="font-outfit font-normal text-xl text-[#FAF9F6] leading-[27.5px]">
            ➜
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleCard;