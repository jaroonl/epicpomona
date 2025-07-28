"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { Event } from "@/types/events";

const events: Event[] = [
  {
    id: "1",
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris ut tellus ultrices a habitant vitae at.",
    image: "/images/broomball.png",
    location: "3801 W Temple Ave",
    time: "Time",
    day: "Weekday",
  },
  {
    id: "2",
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris ut tellus ultrices a habitant vitae at.",
    image: "/images/fall-retreat.png",
    location: "3801 W Temple Ave",
    time: "Time",
    day: "Weekday",
  },
  {
    id: "3",
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris ut tellus ultrices a habitant vitae at.",
    image: "/images/feast-for-five.png",
    location: "3801 W Temple Ave",
    time: "Time",
    day: "Weekday",
  },
  {
    id: "4",
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris ut tellus ultrices a habitant vitae at.",
    image: "/images/halloween-party.png",
    location: "3801 W Temple Ave",
    time: "Time",
    day: "Weekday",
  },
  {
    id: "5",
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris ut tellus ultrices a habitant vitae at.",
    image: "/images/halloween-party.png",
    location: "3801 W Temple Ave",
    time: "Time",
    day: "Weekday",
  },
  {
    id: "6",
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris ut tellus ultrices a habitant vitae at.",
    image: "/images/halloween-party.png",
    location: "3801 W Temple Ave",
    time: "Time",
    day: "Weekday",
  },
];

const UpcomingEvents: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[719px]">
        {/* Background Image */}
        <Image
          src="/images/beachday.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          style={{ filter: "blur(2px)" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#D9D9D9] opacity-69"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex justify-center items-center px-4">
          <h1 className="text-[#1D2046] font-[Outfit] text-[32px] sm:text-[48px] lg:text-[64px] font-bold leading-[110%] text-center capitalize">
            UPCOMING
            <br />
            EVENTS
          </h1>
        </div>
      </div>

{/* Featured Event Section */}
<div className="relative w-full flex justify-center py-8 sm:py-12 lg:py-16 px-4">
  <div className="relative w-full max-w-[1152px]">
    <Image
      src="/images/fall-retreat-banner.jpg"
      alt="Fall Retreat"
      width={820}
      height={524}
      className="w-full h-auto shadow-[0px_4px_34.9px_12px_rgba(0,0,0,0.25)] rounded-lg"
    />

    {/* Centered Featured Event Text */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
      <p className="text-[#0093D0] font-[Outfit] text-[14px] sm:text-[16px] lg:text-[20px] font-normal leading-[110%] capitalize mb-1 sm:mb-2">
        FEATURED EVENT
      </p>
      <h2 className="text-black font-[Outfit] text-[20px] sm:text-[26px] lg:text-[32px] font-bold leading-[110%] capitalize">
        FALL RETREAT
      </h2>
    </div>
  </div>
</div>


      {/* Events Grid Section */}
      <div className="w-full flex justify-center pb-16 sm:pb-24 lg:pb-32 px-4">
        <div className="w-full max-w-[1152px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-x-[73px] lg:gap-y-16">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UpcomingEvents;
