"use client";
import * as React from "react";
import ScheduleCard from "./ScheduleCard";

type ScheduleItem = {
  image: string;
  title: string;
  description: string;
  location: string;
  day: string;
  time?: string; // <-- optional
};

function UpcomingEvents() {
  const scheduleData: ScheduleItem[] = [
    {
      image: "fall-retreat.jpg",
      title: "Fall Retreat",
      description:
        "Interested in registering? Click on this link!",
      location: "Camp Wrightwood\n1401 Linnet Road\nWrightwood, California 92397",
      day: "October 10-12",
    },
    {
      image: "cross-on-mountain.jpg",
      title: "Praise & Prayer Night",
      description:
        "Interested in registering? Click on this link!",
      location: "Cal Poly Pomona\n3801 W Temple Ave\nPomona, CA 91768",
      day: "October 23",
      time: "@ 7:00 PM"
    },
  ];

  return (
    <div className="w-full max-w-[1152px] mx-auto px-5 lg:px-4 sm:px-3 box-border">
      <div className="font-outfit font-bold text-[65px] lg:text-[52px] sm:text-[38px] text-[#0093D0] text-center leading-[110%] capitalize mb-[72px] lg:mb-12 sm:mb-8">
        UPCOMING EVENTS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {scheduleData.map((event, index) => (
          <ScheduleCard
            key={index}
            image={event.image}
            title={event.title}
            description={event.description}
            location={event.location}
            day={event.day}
            time={event.time}
          />
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;