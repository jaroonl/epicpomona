"use client";
import * as React from "react";
import ScheduleCard from "./ScheduleCard";

function WeeklySchedule() {
  const scheduleData = [
    {
      image: "bible-study.png",
      title: "Bible Study",
      description:
        "For women: please message a Bible study leader to get the exact location!\n",
      location: "Men's: BLDG 5 & Women's: Check Discord!\n3801 W Temple Ave\nPomona, CA 91768",
      day: "Tuesdays",
      time: "@ 7:00 PM",
    },
    {
      image: "large-group.jpg",
      title: "Large Group",
      description:
        "Come join us for a time of fellowship and learning more about God!\n\nNext Large Group: 10/2/25",
      location: "Cal Poly Pomona\nUrsa Major C\nBronco Student Center",
      day: "Thursdays",
      time: "@ 7:00 PM",
    },
    {
      image: "prayer-meeting.png",
      title: "Prayer Meeting",
      description:
        "Come join us and witness the power of prayer!\n\nNext Prayer Meeting: TBD",
      location: "On Campus\n3801 W Temple Ave\nPomona, CA 91768",
      day: "Wednesdays",
      time: "@ 1:00 PM",
    },
  ];

  return (
    <div className="w-full max-w-[1152px] mx-auto px-5 lg:px-4 sm:px-3 box-border">
      <div className="font-outfit font-bold text-[65px] lg:text-[52px] sm:text-[38px] text-[#0093D0] text-center leading-[110%] capitalize mb-[72px] lg:mb-12 sm:mb-8">
        WEEKLY SCHEDULE
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

export default WeeklySchedule;