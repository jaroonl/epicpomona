// app/about/AboutUs.tsx
"use client";
import React from "react";
import { staffMembers, leadershipMembers } from "./teamMembers";

/* ====== MISSION COMPONENTS ====== */

const MissionHeader: React.FC = () => (
  <section
    className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1440px] px-8 py-16 mx-auto gap-8"
    style={{ backgroundColor: "#FAF9F6" }}
  >
    <div className="flex-1">
      <h1
        className="text-6xl font-bold tracking-tight mb-8 max-md:text-5xl max-sm:text-4xl leading-tight"
        style={{ color: "#1D2046" }}
      >
        Mission Statement
      </h1>
      <p
        className="text-2xl font-light leading-relaxed max-md:text-xl max-sm:text-lg mb-4"
        style={{ color: "#0093D0" }}
      >
        To invite, integrate, and send Asian Americans to reach the world for Christ
      </p>
      <a
        href="#"
        className="inline-flex items-center text-base font-medium transition-colors duration-200 border-b-2 pb-1"
        style={{ color: "#1D2046", borderColor: "#1D2046" }}
      >
        Click here to learn more!
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
    <img
      src="https://placehold.co/294x276/e8d5c4/e8d5c4"
      alt="Mission visual"
      className="h-[276px] w-[294px] object-cover rounded-lg shadow-md max-sm:h-[188px] max-sm:w-[200px]"
    />
  </section>
);

interface MissionPanelProps {
  image: string;
  number: string;
  title: string;
  description: string;
  altText?: string;
}

const MissionPanel: React.FC<MissionPanelProps> = ({
  image,
  number,
  title,
  description,
  altText = "",
}) => (
  <article
    className="flex flex-col gap-6 items-start p-8 rounded-xl border border-neutral-200 shadow-lg w-[400px] h-[580px] max-md:w-full max-md:h-auto max-sm:gap-4 max-sm:p-6 hover:shadow-xl transition-shadow duration-300"
    style={{ backgroundColor: "#FAF9F6" }}
  >
    <img
      src={image}
      alt={altText}
      className="object-cover w-full rounded-lg h-[280px] max-sm:h-[200px]"
    />
    <div className="flex flex-col gap-4 items-start w-full">
      <header className="flex items-center gap-3 w-full">
        <span className="text-3xl font-bold text-neutral-400 leading-none">{number}</span>
        <div className="w-8 h-px bg-neutral-300"></div>
        <h3
          className="text-3xl font-bold tracking-wide uppercase max-sm:text-2xl leading-tight"
          style={{ color: "#1D2046" }}
        >
          {title}
        </h3>
      </header>
      <p className="w-full text-lg leading-relaxed max-sm:text-base" style={{ color: "#000000" }}>
        {description}
      </p>
    </div>
  </article>
);

const MissionStatement: React.FC = () => {
  const missionPanels = [
    {
      number: "01",
      title: "invite",
      image: "https://placehold.co/500x500/4a4a4a/ffffff",
      description:
        "We invite Asian American students and communities to come and see who Jesus is and his mission given to each of us. (Luke 14:15-24, Isaiah 55:1-2)",
    },
    {
      number: "02",
      title: "integrate",
      image: "https://placehold.co/500x500/4a4a4a/ffffff",
      description:
        "We integrate our faith in every area of our lives, helping each other grow, multiply and build on God's faith in us.",
    },
    {
      number: "03",
      title: "send",
      image: "https://placehold.co/500x500/4a4a4a/ffffff",
      description:
        "We send disciples to reach the world for Christ, empowering them to make disciples who make disciples in every nation and culture.",
    },
  ];

  return (
    <section className="py-20 px-8 w-full font-[Outfit]" style={{ backgroundColor: "#FAF9F6" }}>
      <MissionHeader />
      <div className="flex flex-wrap justify-center gap-8 mt-20 max-w-[1440px] mx-auto">
        {missionPanels.map((panel, index) => (
          <MissionPanel
            key={index}
            number={panel.number}
            title={panel.title}
            image={panel.image}
            description={panel.description}
          />
        ))}
      </div>
    </section>
  );
};

/* ====== TEAM COMPONENTS ====== */

interface TeamCardProps {
  imageUrl: string;
  name: string;
  role: string;
  altText?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imageUrl, name, role, altText = "" }) => (
  <article
    className="box-border flex flex-col items-center gap-6 p-8 border border-neutral-200 rounded-xl shadow-md h-[380px] w-[280px] max-md:p-6 max-md:w-64 max-sm:max-w-full max-sm:w-[280px] hover:shadow-lg transition-shadow duration-300"
    style={{ backgroundColor: "#FAF9F6" }}
  >
    <img
      src={imageUrl}
      alt={altText}
      className="object-cover aspect-[13/14] h-[240px] w-[220px] border-2 border-neutral-200 rounded-lg max-md:h-[216px] max-md:w-[200px] max-sm:h-[238px] max-sm:w-[220px]"
    />
    <div className="flex flex-col items-center text-center">
      <h3 className="text-xl font-bold mb-1 leading-tight" style={{ color: "#1D2046" }}>
        {name}
      </h3>
      <p className="text-base font-medium" style={{ color: "#0093D0" }}>
        {role}
      </p>
    </div>
  </article>
);

interface TeamMember {
  id: string;
  imageUrl: string;
  name: string;
  role: string;
  altText?: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => {
  const chunked = Array.from({ length: Math.ceil(members.length / 3) }, (_, i) =>
    members.slice(i * 3, i * 3 + 3)
  );

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex items-center gap-6 mb-12">
        <h2
          className="text-5xl font-bold tracking-tight max-md:text-4xl max-sm:text-3xl leading-tight"
          style={{ color: "#1D2046" }}
        >
          {title}
        </h2>
        <div className="flex-1 h-px bg-neutral-300 max-sm:hidden"></div>
      </div>
      <section className="flex flex-col gap-12 w-full">
        {chunked.map((group, index) => (
          <div
            key={index}
            className="flex justify-center gap-8 flex-wrap w-full px-4"
          >
            {group.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

const OurTeam: React.FC = () => {
  return (
    <main
      className="box-border flex flex-col gap-16 items-center px-16 pt-20 pb-16 min-h-screen max-md:gap-12 max-md:px-8 max-md:pt-16 max-sm:gap-8 max-sm:px-4 max-sm:pt-12"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <header className="w-full max-w-[1440px]">
        <div className="flex items-center gap-6 mb-4">
          <h1
            className="text-6xl font-bold tracking-tight max-md:text-5xl max-sm:text-4xl leading-tight"
            style={{ color: "#1D2046" }}
          >
            Our Team
          </h1>
          <div className="flex-1 h-px bg-neutral-300 max-sm:hidden"></div>
        </div>
        <p
          className="text-xl leading-relaxed max-md:text-lg max-sm:text-base"
          style={{ color: "#0093D0" }}
        >
          Meet the individuals who make Epic Movement possible!
        </p>
      </header>

      <div className="flex flex-col gap-20 w-full">
        <TeamSection title="Staff" members={staffMembers} />
        <TeamSection title="Leadership" members={leadershipMembers} />
      </div>
    </main>
  );
};

/* ====== ABOUT US MAIN COMPONENT ====== */

const AboutUs: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Hero Section */}
      <section
        className="px-6 md:px-16 lg:px-32 py-20 w-full font-[Outfit]"
        style={{ backgroundColor: "#FAF9F6" }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <h1
              className="text-6xl font-bold tracking-tight max-md:text-5xl max-sm:text-4xl leading-tight"
              style={{ color: "#1D2046" }}
            >
              About Us
            </h1>
            <div className="flex-1 h-px bg-neutral-300 max-sm:hidden"></div>
          </div>

          <div className="max-w-4xl">
            <p
              className="text-2xl font-light leading-relaxed mb-8 max-md:text-xl max-sm:text-lg"
              style={{ color: "#0093D0" }}
            >
              Welcome to Epic Movement at Cal Poly Pomona
            </p>
            <p
              className="text-lg leading-relaxed max-md:text-base"
              style={{ color: "#000000" }}
            >
              We're a Christ-centered community that seeks to know Jesus and make Him known on our campus. 
              We're a group of students who are passionate about growing in our relationship with God. 
              Our community is part of a national movement that focuses on reaching Asian American students.
              Come as you are. We welcome you with open arms!
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <MissionStatement />

      {/* Our Team Section */}
      <OurTeam />
    </>
  );
};

export default AboutUs;
