"use client";

{/* UPCOMING EVENTS PAGE
    (MOST EDITS WILL BE ON THIS FILE)
    - event cards
    - retreat cards
    - featured event banner */}

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { Event } from "@/types/events";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

{/* event cards */ }
const regularEvents: Event[] = [
  {
    id: "4",
    title: "Sports & Crafts Social",
    description:
      "First event of the year! Come to the lawn next to parking structure 2 for crafts and sports at the lawn!",
    image: "/images/ww-sports-crafts.png",
    location: "Parking Structure 2",  // **ONLY list location if on campus. otherwise, state to join discord to see location** 
    time: "6:00 PM",
    day: "Monday",
    date: "Aug 25",
    longDescription: "First event of the year! Come to the lawn next to parking structure 2 for crafts and sports at the lawn!",
    cost: "Free",
  },
  {
    id: "5",
    title: "Bowling Night",
    description:
      "Join us for a fun-filled bowling social and enjoy a relaxed evening to socialize!",
    image: "/images/ww-bowling-night.png",
    location: "Chaparral Lanes - 400 W Bonita Ave, San Dimas, CA 91773",  // **ONLY list location if on campus. otherwise, state to join discord to see location**
    time: "7:00 PM",
    day: "Tuesday",
    date: "Aug 26",
    longDescription: "Join us for a fun-filled bowling social and enjoy a relaxed evening to socialize!",
    cost: "$12, free for newcomers",
  },
  {
    id: "6",
    title: "Boba & Board Games",
    description:
      "Come hangout and meet new friends while enjoying some boba!",
    image: "/images/ww-boba.png",
    location: "Ding Tea - 2516 E Workman Ave,\nWest Covina, CA 91791",  // **ONLY list location if on campus. otherwise, state to join discord to see location**
    time: "6:30 PM",
    day: "Wednesday",
    date: "Aug 27",
    longDescription: "Come hangout and meet new friends while enjoying some boba!",
    cost: "Free",
  },
  {
    id: "7",
    title: "Large Group & Game Night",
    description:
      "Come join us for our first large group meeting of the year! Come see what Epic is all about!",
    image: "/images/ww-large-group.jpg",
    location: "Join Discord for Location",  // **ONLY list location if on campus. otherwise, state to join discord to see location**
    time: "7:00 PM",
    day: "Thursday",
    date: "Aug 28",
    longDescription: "Come join us for our first large group meeting of the year! Come see what Epic is all about!",
    cost: "Free",
  },
  {
    id: "8",
    title: "Downtown Disney",
    description:
      "Come explore Downtown Disney with us as we enjoy beignets and other foods!",
    image: "/images/ww-downtown-disney.png",
    location: "Downtown Disney District - 1741 Disneyland Dr, Anaheim, CA 92802",  // **ONLY list location if on campus. otherwise, state to join discord to see location**
    time: "7:30 PM",
    day: "Friday",
    date: "Aug 29",
    longDescription: "Come explore Downtown Disney with us as we enjoy beignets and other foods!",
    cost: "Split parking with driver",
  },
];

{/* retreat cards */ }
const retreats: Event[] = [
  {
    id: "1",
    title: "Fall Retreat",
    description:
      "TBD",
    image: "/images/epic-movement.jpg",
    location: "TBD",
    time: "TBD",
    day: "TBD",
    date: "TBD",
    longDescription: "TBD",
    cost: "TBD",
    registrationLink: "https://www.youtube.com/watch?v=NhHb9usKy6Q&list=RDNhHb9usKy6Q&start_radio=1",
  },
  {
    id: "2",
    title: "Winter Conference",
    description:
      "TBD",
    image: "/images/epic-movement.jpg",
    location: "Joe Mama's",
    time: "TBD",
    day: "TBD",
    date: "TBD",
    longDescription: "TBD",
    cost: "TBD",
    registrationLink: "https://www.youtube.com/watch?v=NhHb9usKy6Q&list=RDNhHb9usKy6Q&start_radio=1",
  },
  {
    id: "3",
    title: "Spring Break Trip",
    description:
      "TBD",
    image: "/images/epic-movement.jpg",
    location: "Jaron's Basement",
    time: "TBD",
    day: "TBD",
    date: "TBD",
    longDescription: "TBD",
    cost: "TBD",
    registrationLink: "https://www.youtube.com/watch?v=NhHb9usKy6Q&list=RDNhHb9usKy6Q&start_radio=1",
  },
];

const UpcomingEvents: React.FC = () => {
  // Animation hooks for different sections
  const [featuredRef, featuredVisible] = useScrollAnimation({ threshold: 0.3 });
  const [eventsHeaderRef, eventsHeaderVisible] = useScrollAnimation({ threshold: 0.5 });
  const [retreatsHeaderRef, retreatsHeaderVisible] = useScrollAnimation({ threshold: 0.5 });

  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[719px]">
        {/* Background Image */}
        <Image
          src="/images/event.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          style={{ filter: "blur(2px)" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#D9D9D9] opacity-69"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex justify-center items-center px-4">
          <h1 className="text-[#1D2046] font-[Outfit] text-[48px] sm:text-[64px] lg:text-[80px] font-bold leading-[110%] text-center capitalize">
            UPCOMING
            <br />
            EVENTS
          </h1>
        </div>
      </div>

      {/* Featured Event Section */}
      <div ref={featuredRef} className={`relative w-full flex justify-center py-8 sm:py-12 lg:py-16 px-4 animate-scale-in ${featuredVisible ? 'visible' : ''}`}>
        <div className="relative w-full aspect-[1152/524] lg:w-[1152px] lg:h-[524px] rounded-lg shadow-[0px_4px_34.9px_12px_rgba(0,0,0,0.25)] overflow-hidden">
          <Image
            src="/images/fall-retreat-banner.jpg"
            alt="Fall Retreat"
            fill
            className="object-cover"
            priority
          />

          {/* Tint overlay */}
          <div className="absolute inset-0 bg-[#D9D9D9] opacity-10"></div>

          {/* Centered Featured Event Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <p className={`text-[#0093D0] font-[Outfit] text-[14px] sm:text-[16px] lg:text-[20px] font-normal leading-[110%] capitalize mb-1 sm:mb-2 animate-fade-in ${featuredVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
              FEATURED EVENT
            </p>
            <h2 className={`text-black font-[Outfit] text-[20px] sm:text-[26px] lg:text-[50px] font-bold leading-[110%] capitalize animate-fade-in ${featuredVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
              FALL RETREAT
            </h2>
          </div>
        </div>
      </div>


      {/* Events Section */}
      <div className="w-full pb-8 sm:pb-12 lg:pb-16">
        {/* Events Heading with full-width centered divider */}
        <div ref={eventsHeaderRef} className="relative mb-8 sm:mb-12 lg:mb-16 flex items-center w-full">
          <hr className={`flex-1 border-t border-gray-400 opacity-80 section-divider ${eventsHeaderVisible ? 'visible' : ''}`} />
          <h2 className={`text-[#1D2046] font-[Outfit] text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-[110%] text-transform-capitalize bg-white px-8 section-title ${eventsHeaderVisible ? 'visible' : ''}`}>
            EVENTS
          </h2>
          <hr className={`flex-1 border-t border-gray-400 opacity-80 section-divider ${eventsHeaderVisible ? 'visible' : ''}`} />
        </div>

        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-[1152px]">
            {/* Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-x-[30px] lg:gap-y-16 justify-items-start">
              {regularEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Retreats Section */}
      <div className="w-full pb-16 sm:pb-24 lg:pb-32">
        {/* Retreats Heading with full-width centered divider */}
        <div ref={retreatsHeaderRef} className="relative mb-8 sm:mb-12 lg:mb-16 flex items-center w-full">
          <hr className={`flex-1 border-t border-gray-400 opacity-80 section-divider ${retreatsHeaderVisible ? 'visible' : ''}`} />
          <h2 className={`text-[#1D2046] font-[Outfit] text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-[110%] text-transform-capitalize bg-white px-8 section-title ${retreatsHeaderVisible ? 'visible' : ''}`}>
            RETREATS
          </h2>
          <hr className={`flex-1 border-t border-gray-400 opacity-80 section-divider ${retreatsHeaderVisible ? 'visible' : ''}`} />
        </div>

        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-[1152px]">
            {/* Retreats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-x-[30px] lg:gap-y-16 justify-items-start">
              {retreats.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UpcomingEvents;
