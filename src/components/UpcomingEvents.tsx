"use client";
import * as React from "react";
import ScheduleCard from "./ScheduleCard";

function UpcomingEvents() {
  const scheduleData = [
    {
      image: "ww-sports-crafts.png",
      title: "Sports & Crafts Social",
      description:
        "First event of the year! Come to the lawn next to parking structure 2 for crafts and sports at the lawn!",
      location: "Parking Structure 2 @ Cal Poly Pomona\n3801 W Temple Ave\nPomona, CA 91768",
      day: "August 25",
      time: "6:00 PM",
    },
    {
      image: "ww-bowling-night.png",
      title: "Bowling Night",
      description:
        "Join us for a fun-filled bowling social and enjoy a relaxed evening to socialize!",
      location: "Chaparral Lanes\n400 W Bonita Ave\nSan Dimas, CA 91773",
      day: "August 26",
      time: "7:00 PM",
    },
    {
      image: "ww-boba.png",
      title: "Boba & Board Games",
      description:
        "Come hangout and meet new friends while enjoying some boba!",
      location: "Ding Tea\n2516 E Workman Ave\nWest Covina, CA 91791",
      day: "August 27",
      time: "6:30 PM",
    },
    {
      image: "ww-large-group.jpg",
      title: "Large Group & Game Night",
      description:
        "Come join us for our first large group meeting of the year! Come see what Epic is all about!",
      location: "EFree Church Diamond Bar\n3255 S Diamond Bar Blvd\nDiamond Bar, CA 91765",
      day: "August 28",
      time: "7:00 PM",
    },
    {
      image: "ww-downtown-disney.png",
      title: "Downtown Disney",
      description:
        "Come explore Downtown Disney with us as we enjoy beignets and other foods!",
      location: "Downtown Disney District\n1741 Disneyland Dr\nAnaheim, CA 92802",
      day: "August 29",
      time: "7:00 PM",
    },
  ];

  return (
    <div className="w-full max-w-[1152px] mx-auto px-5 lg:px-4 sm:px-3 box-border">
      <div className="font-outfit font-bold text-[65px] lg:text-[52px] sm:text-[8px] text-[#0093D0] text-center leading-[110%] capitalize mb-[72px] lg:mb-12 sm:mb-8">
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