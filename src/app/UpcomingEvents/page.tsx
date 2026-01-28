"use client";

{/* UPCOMING EVENTS PAGE
    (MOST EDITS WILL BE ON THIS FILE)
    - event cards
    - retreat cards
    - featured event banner */}

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { Event } from "@/types/events";

{/* event cards 
    - id starts at 4 bc simpler to keep retreats as 1-3
    - same structure for each event, just copy paste or delete to add/remove event */ }
const regularEvents: Event[] = [
  {
    id: "4",
    title: "Park Day",
    description:
      "Come join us for a fun day at the park with sports, bracelet making, and more!",
    image: "",
    location: "Join Discord to see location",  // **ONLY list location if on campus. otherwise, state to join discord to see location** 
    time: "2:00 PM",
    day: "Friday",
    date: "Feb 6",
    longDescription: "Our first event of the semester! Come join us for a fun day at the park with sports, bracelet making, and more! Bring your friends, sunscreen, and water.",
    cost: "Free",
  },
  {
    id: "5",
    title: "Epic Olympics",
    description:
      "The first ever Epic Olympics with Epic Movements from SLO, SB, Pomona, and Fullerton!",
    image: "/images/epicolympics.png",
    location: "West Beach, Santa Barbara",  // **ONLY list location if on campus. otherwise, state to join discord to see location**
    time: "11:00 AM",
    day: "Saturday",
    date: "Feb 21",
    longDescription: "We are so excited to announce the first ever Epic Olympics with Epic Movements from SLO, SB, Pomona, and Fullerton! The hope for this event is to build long lasting, Christ-centered friendships between campuses and offer a time to celebrate and encourage each other in their goals/accomplishments. We can't wait to see yall there, feel free to reach out to your campus lead with any questions :)",
    cost: "$8",
  },
  {
    id: "6",
    title: "Epic Madness",
    description:
      "Basketball tournament! More details to come.",
    image: "",
    location: "Join Discord for location",  // **ONLY list location if on campus. otherwise, state to join discord to see location**
    time: "TBD",
    day: "Saturday",
    date: "Mar 14",
    longDescription: "More details to come.",
    cost: "TBD",
  },
];


{/* retreat cards 
    - id 1-3 (3 retreats every year, constant) */ }
const retreats: Event[] = [
  {
    id: "1",
    title: "Fall Retreat",
    description:
      "This event has concluded. Stay tuned for next year's Fall Retreat!",
    image: "/fall-retreat.jpg",
    location: "Camp Wrightwood",
    day: "Friday-Sunday",
    date: "Oct 10-12",
    longDescription: "Come spend a weekend in the woods with refreshing outdoor time and the cool, crispy mountain air! This year, we are focusing on spiritual disciplines that will help us draw closer to God as our source of refreshment while also drawing closer to each other! Hope to see you there!",
    cost: "Regular: $110 | First-timer: $77 | Scholarships available",
    registrationLink: "",
  },
  {
    id: "2",
    title: "Winter Conference",
    description:
      "This event has concluded. Stay tuned for next year's Winter Conference!",
    image: "/winter-conference.jpg",
    location: "Hyatt Regency Orange County",
    day: "Friday-Monday",
    date: "Jan 16-19",
    longDescription: "Winter Conference is a gathering of college students experiencing Jesus, growing together in our faith, and discovering our place in the mission of God. Join us for four amazing days of drawing near to God's heart through inspiring teaching, musical worship, life-changing community, and so much more.",
    cost: "$259 (before Jan 3) | $319 (regular) | Scholarships available",
    registrationLink: "",
  },
  {
    id: "3",
    title: "Spring Break Trip",
    description:
      "TBD",
    image: "",
    location: "TBD",
    day: "TBD",
    date: "TBD",
    longDescription: "TBD",
    cost: "TBD",
    registrationLink: "https://www.youtube.com/watch?v=NhHb9usKy6Q&list=RDNhHb9usKy6Q&start_radio=1",
  },
];

const UpcomingEvents: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[719px]">
        {/* Background Image */}
        <Image
          src="/event-banner.jpg"
          alt="Hero background"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/50"></div>

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
      <div className="w-full flex justify-center py-8 sm:py-12 lg:py-16 px-4">
      <div className="w-full max-w-[1152px]">
        {/* Container */}
        <div className="relative w-full h-[500px] lg:h-[524px] rounded-2xl overflow-hidden shadow-[0px_8px_40px_rgba(0,0,0,0.15)]">
          
          {/* Background Image */}
          <Image
            src="/images/epicolympics.png"
            alt="Epic Olympics"
            fill
            className="object-cover"
            priority
          />

          {/* Gradient Overlay - darker and more sophisticated */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

          {/* Content Container */}
          <div className="absolute inset-0 flex items-center px-8 sm:px-12 lg:px-16">
            <div className="max-w-lg">
              {/* Date Badge */}
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="bg-[#0093D0] rounded-lg px-4 py-2 shadow-lg">
                  <span className="text-white font-[Outfit] text-sm sm:text-base font-bold uppercase">
                    Feb 21
                  </span>
                </div>
                <div className="h-px w-12 bg-white/40"></div>
                <span className="text-white/90 font-[Outfit] text-sm sm:text-base font-light">
                  Saturday, 11:00 AM
                </span>
              </div>

              {/* Featured Label */}
              <p className="text-[#0093D0] font-[Outfit] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
                Featured Event
              </p>

              {/* Event Title */}
              <h2 className="text-white font-[Outfit] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Epic Olympics
              </h2>

              {/* Description */}
              <p className="text-white/90 font-[Outfit] text-base sm:text-lg font-light leading-relaxed mb-6">
                Join Epic Movements from SLO, SB, Pomona, and Fullerton for our first ever Epic Olympics!
              </p>

              {/* Quick Info Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <span className="text-white font-[Outfit] text-sm font-medium">
                    West Beach, Santa Barbara
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <span className="text-white font-[Outfit] text-sm font-medium">
                    $8
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd_AA9M6_k47zoz9ALKrvYUvi6ZoziNQVQsp3_HMJhXh_5JbQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0093D0] text-white font-[Outfit] text-base font-semibold px-6 py-3 rounded-lg hover:bg-[#007bb3] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Register Now
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.16669 10H15.8334M15.8334 10L10 4.16667M15.8334 10L10 15.8333"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#events"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white font-[Outfit] text-base font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-200"
                >
                  View All Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      {/* Events Section */}
      <div id="events"className="w-full pb-8 sm:pb-12 lg:pb-16">
        {/* Events Heading with full-width centered divider */}
        <div className="relative mb-8 sm:mb-12 lg:mb-16 flex items-center w-full">
          <hr className="flex-1 border-t border-gray-400 opacity-80" />
          <h2 className="text-[#1D2046] font-[Outfit] text-[22px] sm:text-[28px] lg:text-[32px] font-bold leading-[110%] text-transform-capitalize bg-transparent sm:bg-white px-2 sm:px-6 rounded sm:rounded-md">
            EVENTS
          </h2>
          <hr className="flex-1 border-t border-gray-400 opacity-80" />
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
        <div className="relative mb-8 sm:mb-12 lg:mb-16 flex items-center w-full">
          <hr className="flex-1 border-t border-gray-400 opacity-80" />
          <h2 className="text-[#1D2046] font-[Outfit] text-[22px] sm:text-[28px] lg:text-[32px] font-bold leading-[110%] text-transform-capitalize bg-transparent sm:bg-white px-2 sm:px-6 rounded sm:rounded-md">
            RETREATS
          </h2>
          <hr className="flex-1 border-t border-gray-400 opacity-80" />
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