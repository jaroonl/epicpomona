"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { Event } from "@/types/events";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const regularEvents: Event[] = [
  {
    id: "1",
    title: "Ministry Fair",
    description:
      "Join us for an exciting broomball tournament! A fun way to connect with fellow students.",
    image: "/images/ministryfair.png",
    location: "3801 W Temple Ave",
    time: "7:00 PM",
    day: "Friday",
    date: "Nov 15",
    longDescription: "Come out for an evening of friendly competition and fellowship! Broomball is like hockey but played on foot with brooms and a ball. All skill levels welcome - we'll provide equipment and teach beginners. Bring warm clothes and a competitive spirit!",
    cost: "Free",
  },
  {
    id: "3",
    title: "Thanksmas",
    description:
      "A special dinner event bringing students together around tables for community and conversation.",
    image: "/images/thanksmas.png",
    location: "3801 W Temple Ave",
    time: "6:30 PM",
    day: "Thursday",
    date: "Nov 21",
    longDescription: "Experience authentic community over a home-cooked meal! Feast for Five connects students in small groups around dinner tables for meaningful conversation, prayer, and fellowship. Each table hosts five students for an evening of food and friendship.",
    cost: "Free",
  },
  {
    id: "4",
    title: "Praise and Prayer Night",
    description:
      "Join us for a fun Halloween outreach event serving our local community with treats and games.",
    image: "/images/praiseandprayer.png",
    location: "3801 W Temple Ave",
    time: "5:00 PM",
    day: "Thursday",
    date: "Oct 31",
    longDescription: "Come dressed up and ready to serve! We'll be hosting a Halloween outreach event for local families, providing a safe and fun environment for trick-or-treating, games, and community connection. Help us show God's love to our neighbors!",
    cost: "Free",
  },
  {
    id: "5",
    title: "Park Day",
    description:
      "Relax and unwind with friends while watching a great film together with popcorn and snacks.",
    image: "/images/parkday.png",
    location: "3801 W Temple Ave",
    time: "8:00 PM",
    day: "Saturday",
    date: "Nov 9",
    longDescription: "Take a break from studying and join us for a cozy movie night! We'll be screening an inspiring film followed by discussion. Popcorn, snacks, and drinks provided. Bring blankets and pillows for maximum comfort!",
    cost: "Free",
  },
  {
    id: "6",
    title: "Worship Under the Stars",
    description:
      "An evening dedicated to worship, prayer, and encountering God's presence together as a community.",
    image: "/images/worship.png",
    location: "3801 W Temple Ave",
    time: "7:30 PM",
    day: "Wednesday",
    date: "Nov 13",
    longDescription: "Join us for an intimate evening of worship and prayer. This special night is focused on encountering God's presence through music, testimonies, and corporate prayer. Come expecting to be refreshed and renewed in your faith.",
    cost: "Free",
  },
];

const retreats: Event[] = [
  {
    id: "2",
    title: "Fall Retreat",
    description:
      "A weekend getaway for spiritual growth, fellowship, and unforgettable memories.",
    image: "/images/fallretreat.png",
    location: "3801 W Temple Ave",
    time: "6:00 PM",
    day: "Friday",
    date: "Nov 22",
    longDescription: "Join us for our annual Fall Retreat! Three days of worship, teaching, small group discussions, outdoor activities, and deep fellowship. This retreat is designed to help you grow in your faith while building lasting friendships with other students.",
    cost: "$150 (scholarships available)",
    registrationLink: "https://epicpomona.org/register/fall-retreat",
  },
  {
    id: "7",
    title: "Winter Conference",
    description:
      "A winter getaway focused on spiritual growth and community building in a beautiful mountain setting.",
    image: "/images/winter-conference.png",
    location: "Mountain Resort",
    time: "4:00 PM",
    day: "Friday",
    date: "Jan 17",
    longDescription: "Escape to the mountains for a transformative winter retreat! Experience God's beauty in creation while engaging in worship, teaching sessions, and meaningful fellowship. Activities include hiking, group discussions, and evening worship sessions around the fire.",
    cost: "$200 (scholarships available)",
    registrationLink: "https://epicpomona.org/register/winter-retreat",
  },
  {
    id: "8",
    title: "Spring Break Trip",
    description:
      "Celebrate renewal and growth with a spring retreat focused on fresh beginnings and spiritual revival.",
    image: "/images/sbt.png",
    location: "Lakeside Camp",
    time: "5:00 PM",
    day: "Friday",
    date: "Mar 21",
    longDescription: "Welcome spring with a refreshing retreat by the lake! Focus on themes of renewal, growth, and new beginnings through worship, teaching, and outdoor activities. Enjoy kayaking, campfires, and quiet reflection time in nature.",
    cost: "$175 (scholarships available)",
    registrationLink: "https://epicpomona.org/register/spring-retreat",
  },
];

const UpcomingEvents: React.FC = () => {
  // Animation hooks for different sections
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.3 });
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
        <div ref={heroRef} className="absolute inset-0 flex justify-center items-center px-4">
          <h1 className={`text-[#1D2046] font-[Outfit] text-[48px] sm:text-[64px] lg:text-[80px] font-bold leading-[110%] text-center capitalize hero-content-animate ${heroVisible ? 'visible' : ''}`}>
            UPCOMING
            <br />
            EVENTS
          </h1>
        </div>
      </div>

{/* Featured Event Section */}
<div ref={featuredRef} className={`relative w-full flex justify-center py-8 sm:py-12 lg:py-16 px-4 animate-scale-in ${featuredVisible ? 'visible' : ''}`}>
  <div className="relative w-full max-w-[1152px]">
    <Image
      src="/images/fall-retreat-banner.jpg"
      alt="Fall Retreat"
      width={1152}
      height={524}
      className="w-[1152px] h-[524px] shadow-[0px_4px_34.9px_12px_rgba(0,0,0,0.25)] rounded-lg"
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
