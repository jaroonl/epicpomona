"use client";
import React, { useState } from "react";
import { staffMembers, leadershipMembers } from "./TeamMembers";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

/* ====== MISSION COMPONENTS ====== */

const MissionHeader: React.FC = () => (
  <section
    className="flex flex-col items-center justify-center text-center w-full max-w-[1440px] px-8 pt-10 pb-4 mx-auto gap-6"
    style={{ backgroundColor: "#FAF9F6" }}
  >
    <h2
      className="text-5xl font-bold tracking-tight max-md:text-4xl max-sm:text-3xl leading-tight"
      style={{ color: "#1D2046" }}
    >
      Mission Statement
    </h2>
    <p
      className="text-2xl font-light leading-relaxed max-md:text-xl max-sm:text-lg"
      style={{ color: "#0093D0" }}
    >
      To invite, integrate, and send Asian Americans to reach the world for
      Christ
    </p>
    <a
      href="https://epicmovement.com/mission/"
      className="inline-flex items-center text-base font-medium transition-colors duration-200 border-b-2 pb-1"
      style={{ color: "#1D2046", borderColor: "#1D2046" }}
    >
      Click here to learn more!
      <svg
        className="ml-2 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
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
    className="flex flex-col gap-6 items-start p-8 rounded-xl border border-neutral-200 shadow-lg w-full max-w-[400px] sm:w-[80%] md:w-[45%] lg:w-[30%] max-sm:gap-4 max-sm:p-6 hover:shadow-xl transition-shadow duration-300"
    style={{ backgroundColor: "#FAF9F6" }}
  >
    <img
      src={image}
      alt={altText}
      className="object-cover w-full rounded-lg h-[280px] max-sm:h-[200px]"
    />
    <div className="flex flex-col gap-4 items-start w-full">
      <header className="flex items-center gap-3 w-full">
        <span className="text-3xl font-bold text-neutral-400 leading-none">
          {number}
        </span>
        <div className="w-8 h-px bg-neutral-300"></div>
        <h3
          className="text-3xl font-bold tracking-wide uppercase max-sm:text-2xl leading-tight"
          style={{ color: "#1D2046" }}
        >
          {title}
        </h3>
      </header>
      <p
        className="w-full text-lg leading-relaxed max-sm:text-base"
        style={{ color: "#000000" }}
      >
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
      image: "./AboutMeImages/LargeGroup.png",
      description:
        "We invite Asian American students and communities to come and see who Jesus is and his mission given to each of us. (Luke 14:15-24, Isaiah 55:1-2)",
    },
    {
      number: "02",
      title: "integrate",
      image: "./AboutMeImages/Tabling.jpg",
      description:
        "We integrate our faith in every area of our lives, helping each other grow, multiply and build on God's faith in us.",
    },
    {
      number: "03",
      title: "send",
      image: "./AboutMeImages/SanDiego.png",
      description:
        "We send disciples to reach the world for Christ, empowering them to make disciples who make disciples in every nation and culture.",
    },
  ];

  return (
    <section
      className="pt-10 pb-16 px-8 w-full font-[Outfit]"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <MissionHeader />
      <div className="flex flex-wrap justify-center gap-8 mt-12 w-full max-w-[1440px] mx-auto">
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

const TeamCard: React.FC<TeamCardProps> = ({
  imageUrl,
  name,
  role,
  altText = "",
}) => (
<article
  className="box-border flex flex-col items-center gap-6 p-6 border border-neutral-200 rounded-xl shadow-md h-[380px] w-[320px] max-md:w-[280px] max-sm:w-full max-sm:max-w-[320px] hover:shadow-lg transition-shadow duration-300"
  style={{ backgroundColor: "#FAF9F6" }}
>

    <img
      src={imageUrl}
      alt={altText}
      className="object-cover aspect-[13/14] h-[240px] w-[220px] border-2 border-neutral-200 rounded-lg"
    />
    <div className="flex flex-col items-center text-center">
      <h3
        className="text-xl font-bold mb-1 leading-tight"
        style={{ color: "#1D2046" }}
      >
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
  const chunkSize = 3; // always display 3 per row
  const chunked = Array.from(
    { length: Math.ceil(members.length / chunkSize) },
    (_, i) => members.slice(i * chunkSize, i * chunkSize + chunkSize)
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
            className={`flex flex-wrap gap-6 w-full ${
              group.length === chunkSize ? "justify-between" : "justify-around"
            } max-md:justify-center`}
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
          Meet the individuals who make Epic Movement at Pomona possible!
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

const images = [
  "/AboutMeImages/abmecarousel1.jpg",
  "/AboutMeImages/abmecarousel2.jpg",
  "/AboutMeImages/abmecarousel3.jpg",
  "/AboutMeImages/abmecarousel4.jpg",
  "/AboutMeImages/abmecarousel5.jpg",
  "/AboutMeImages/abmecarousel6.jpg",
  "/AboutMeImages/abmecarousel7.jpg",
  "/AboutMeImages/abmecarousel8.jpg",
  "/AboutMeImages/abmecarousel9.jpg",
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const goToSlide = (index: number) => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true); // Trigger fade-in
    }, 400); // Match the transition duration
  };

  const prevSlide = () => {
    goToSlide(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    goToSlide(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
<div className="relative w-full h-[300px] max-md:h-[240px] max-sm:h-[200px] rounded-lg overflow-hidden shadow-lg">

      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`w-full h-full object-cover transition-opacity duration-[600ms] ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl hover:scale-110 transition-transform duration-300 z-10"
        aria-label="Previous Slide"
      >
        ◀
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl hover:scale-110 transition-transform duration-300 z-10"
        aria-label="Next Slide"
      >
        ▶
      </button>
    </div>
  );
};

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />

      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Hero Section */}
      <section
        className="px-8 py-20 w-full font-[Outfit]"
        style={{ backgroundColor: "#FAF9F6" }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <h1
              className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{ color: "#1D2046" }}
            >
              About Us
            </h1>
            <div className="flex-1 h-px bg-neutral-300 hidden sm:block"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="flex-1 lg:pr-8">
              <p
                className="text-xl lg:text-2xl font-light leading-relaxed mb-6"
                style={{ color: "#0093D0" }}
              >
                Welcome to Epic Movement at Cal Poly Pomona
              </p>
              <p
                className="text-base lg:text-lg leading-relaxed"
                style={{ color: "#333333" }}
              >
                {
                  "Epic Movement is a Cru ministry dedicated to bringing the gospel to the world through Asian American students. At Cal Poly Pomona, we're a Christ-centered community that seeks to know Jesus deeply and make Him known across our campus. We invite students to ask questions about faith and Christianity, meet new people, and live life together. Whether you're curious about Christianity, looking to develop your faith, or seeking meaningful relationships, we’d love to meet you!"
                }
              </p>
            </div>
            <div className="flex-shrink-0 lg:w-1/3 w-full">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <MissionStatement />

      {/* Our Team Section */}
      <OurTeam />

      <Footer />
    </>
  );
};

export default AboutUs;