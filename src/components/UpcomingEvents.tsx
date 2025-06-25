"use client";
import * as React from "react";
import ScheduleCard from "./ScheduleCard";

function UpcomingEvents() {
  const scheduleData = [
    {
      image: "https://placehold.co/295x297/e8e8e8/e8e8e8",
      title: "Bible Study",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Mauris Ut Tellus Ultrices A Habitant Vitae At.",
      location: "3801 W Temple Ave",
      day: "Tuesdays",
      time: "7PM",
    },
    {
      image: "https://placehold.co/295x297/e8e8e8/e8e8e8",
      title: "Large Group",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Mauris Ut Tellus Ultrices A Habitant Vitae At.",
      location: "3801 W Temple Ave",
      day: "Thursdays",
      time: "7PM",
    },
    {
      image: "https://placehold.co/295x297/e8e8e8/e8e8e8",
      title: "Prayer Meeting",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Mauris Ut Tellus Ultrices A Habitant Vitae At.",
      location: "3801 W Temple Ave",
      day: "Wednesdays",
      time: "12PM",
    },
  ];

  return (
    <div className="w-full max-w-[1152px] mx-auto px-5 lg:px-4 sm:px-3 box-border">
      <div className="font-outfit font-bold text-[40px] lg:text-[32px] sm:text-[28px] text-[#0093D0] text-center leading-[110%] capitalize mb-[72px] lg:mb-12 sm:mb-8">
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