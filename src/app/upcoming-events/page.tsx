"use client";

import React from "react";
import Image from "next/image";

const UpcomingEvents: React.FC = () => {
  return (
    <div className="w-[1440px] h-[3068px] relative bg-white overflow-hidden">
      <div className="w-[1440px] h-56 left-0 top-[2838px] absolute bg-indigo-950 border-t border-Border-Default-Secondary overflow-hidden">
        <div className="w-[1152px] px-5 py-6 left-[144px] top-[15px] absolute inline-flex justify-between items-start">
          <div className="inline-flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch h-9 justify-start text-neutral-100 text-3xl font-medium font-[Inter] leading-10">
              Socials
            </div>
            <div className="self-stretch h-24 p-1.5 flex flex-col justify-between items-start">
              <div className="w-56 h-10 inline-flex justify-start items-center gap-2.5">
                <div className="w-10 h-10 p-[3px] flex justify-center items-center gap-2.5">
                  <div className="w-8 h-8 bg-neutral-100" />
                </div>
                <div className="flex-1 justify-end text-neutral-100 text-2xl font-normal font-[Inter] leading-7">
                  @epicpomona
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                <div className="w-10 h-10 relative">
                  <div className="w-9 h-7 left-[2.94px] top-[7px] absolute bg-neutral-100" />
                </div>
                <div className="flex-1 justify-end text-neutral-100 text-2xl font-normal font-[Inter] leading-7">
                  Discord
                </div>
              </div>
            </div>
          </div>
          <div className="p-[5px] flex justify-center items-start gap-12">
            <div className="w-40 inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch pb-4 flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch inline-flex justify-start items-start">
                  <div className="justify-start text-Text-Neutral-On-Neutral text-base font-semibold font-[Inter] leading-snug">
                    About Us
                  </div>
                </div>
              </div>
              <div className="w-24 h-5 relative">
                <div className="left-0 top-0 absolute justify-center text-Text-Neutral-On-Neutral text-base font-normal font-[Inter] leading-snug">
                  What is Epic?
                </div>
              </div>
              <div className="w-24 h-5 relative">
                <div className="left-0 top-0 absolute justify-center text-Text-Neutral-On-Neutral text-base font-normal font-[Inter] leading-snug">
                  Mission Statement
                </div>
              </div>
              <div className="w-24 h-5 relative">
                <div className="left-0 top-0 absolute justify-center text-Text-Neutral-On-Neutral text-base font-normal font-[Inter] leading-snug">
                  Staff and Leadership
                </div>
              </div>
            </div>
            <div
              data-density="Default"
              data-has-title="true"
              className="w-48 inline-flex flex-col justify-start items-start gap-3"
            >
              <div className="self-stretch pb-4 flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch inline-flex justify-start items-start">
                  <div className="justify-start text-Text-Neutral-On-Neutral text-base font-semibold font-[Inter] leading-snug">
                    Get Connected
                  </div>
                </div>
              </div>
              <div className="w-24 h-5 relative">
                <div className="left-0 top-0 absolute justify-center text-Text-Neutral-On-Neutral text-base font-normal font-[Inter] leading-snug">
                  Local Churches
                </div>
              </div>
              <div className="w-24 h-5 relative">
                <div className="left-0 top-0 absolute justify-center text-Text-Neutral-On-Neutral text-base font-normal font-[Inter] leading-snug">
                  Upcoming Events
                </div>
              </div>
              <div className="w-24 h-5 relative">
                <div className="left-0 top-0 absolute justify-center text-Text-Neutral-On-Neutral text-base font-normal font-[Inter] leading-snug">
                  Discord Announcements
                </div>
              </div>
            </div>
            <div
              data-density="Default"
              data-has-title="true"
              className="w-32 inline-flex flex-col justify-start items-start gap-3"
            >
              <div className="self-stretch pb-4 flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch inline-flex justify-start items-start">
                  <div className="justify-start text-Text-Neutral-On-Neutral text-base font-semibold font-[Inter] leading-snug">
                    Resources
                  </div>
                </div>
              </div>
              <div className="w-24 h-5 relative">
                <div className="left-0 top-0 absolute justify-center text-Text-Neutral-On-Neutral text-base font-normal font-[Inter] leading-snug">
                  Rides Sign-up
                </div>
              </div>
              <div className="w-24 h-5 relative">
                <div className="left-0 top-0 absolute justify-center text-Text-Neutral-On-Neutral text-base font-normal font-[Inter] leading-snug">
                  Prayer Requests
                </div>
              </div>
            </div>
            <div
              data-density="Default"
              data-has-title="true"
              className="w-36 inline-flex flex-col justify-start items-start gap-3"
            >
              <div className="self-stretch pb-4 flex flex-col justify-start items-start gap-2.5">
                <div className="self-stretch inline-flex justify-start items-start">
                  <div className="justify-start text-Text-Neutral-On-Neutral text-base font-semibold font-[Inter] leading-snug">
                    Support/Give
                  </div>
                </div>
              </div>
              <div className="w-24 h-5 relative">
                <div className="left-0 top-0 absolute justify-center text-Text-Neutral-On-Neutral text-base font-normal font-[Inter] leading-snug">
                  Support SoCal Epic
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 p-5 left-[563px] top-[1540px] absolute bg-stone-50/50 rounded-lg inline-flex flex-col justify-start items-start gap-5">
        <div className="self-stretch h-72 relative">
          <img
            className="w-72 h-72 left-0 top-0 absolute rounded"
            src="/images/winter-conference.png"
            alt=""
          />
        </div>
        <div className="self-stretch justify-start text-indigo-950 text-4xl font-bold font-[Outfit] capitalize leading-10">
          Winter Conf
        </div>
        <div className="self-stretch justify-start text-indigo-950 text-base font-light font-[Outfit] capitalize leading-none">
          Lorem ipsum dolor sit amet consectetur. Mauris ut tellus ultrices a
          habitant vitae at.
        </div>
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="inline-flex flex-col justify-start items-start gap-5">
            <div className="flex flex-col justify-center items-start gap-1">
              <div className="inline-flex justify-start items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="https://placehold.co/13x13"
                  alt=""
                />
                <div className="justify-start text-indigo-950 text-sm font-light font-[Outfit] leading-none">
                  3801 W Temple Ave
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="https://placehold.co/12x12"
                  alt=""
                />
                <div className="justify-start">
                  <span className="text-indigo-950 text-sm font-bold font-[Outfit] leading-none">
                    Weekday
                  </span>
                  <span className="text-indigo-950 text-sm font-light font-[Outfit] leading-none">
                    : Time
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-text-button="true"
            className="w-9 h-8 px-3 py-2.5 bg-sky-600 rounded-xl flex justify-center items-center gap-2.5"
          >
            <div className="justify-start text-stone-50 text-xl font-normal font-[Outfit] leading-7">
              ➜
            </div>
          </div>
        </div>
      </div>

      <div className="w-80 p-5 left-[563px] top-[2189px] absolute bg-stone-50/50 rounded-lg inline-flex flex-col justify-start items-start gap-5">
        <div className="self-stretch h-72 relative">
          <img
            className="w-72 h-72 left-0 top-0 absolute rounded"
            src="/images/halloween-party.png"
            alt=""
          />
        </div>
        <div className="self-stretch justify-start text-indigo-950 text-4xl font-bold font-[Outfit] capitalize leading-10">
          Halloween Party
        </div>
        <div className="self-stretch justify-start text-indigo-950 text-base font-light font-[Outfit] capitalize leading-none">
          Lorem ipsum dolor sit amet consectetur. Mauris ut tellus ultrices a
          habitant vitae at.
        </div>
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="inline-flex flex-col justify-start items-start gap-5">
            <div className="flex flex-col justify-center items-start gap-1">
              <div className="inline-flex justify-start items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="https://placehold.co/13x13"
                  alt=""
                />
                <div className="justify-start text-indigo-950 text-sm font-light font-[Outfit] leading-none">
                  3801 W Temple Ave
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="https://placehold.co/12x12"
                  alt=""
                />
                <div className="justify-start">
                  <span className="text-indigo-950 text-sm font-bold font-[Outfit] leading-none">
                    Weekday
                  </span>
                  <span className="text-indigo-950 text-sm font-light font-[Outfit] leading-none">
                    : Time
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-text-button="true"
            className="w-9 h-8 px-3 py-2.5 bg-sky-600 rounded-xl flex justify-center items-center gap-2.5"
          >
            <div className="justify-start text-stone-50 text-xl font-normal font-[Outfit] leading-7">
              ➜
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 p-5 left-[981px] top-[1540px] absolute bg-stone-50/50 rounded-lg inline-flex flex-col justify-start items-start gap-5">
        <div className="self-stretch h-72 relative">
          <img
            className="w-72 h-72 left-0 top-0 absolute rounded"
            src="/images/scavenger-hunt.jpg"
            alt=""
          />
        </div>
        <div className="self-stretch justify-start text-indigo-950 text-4xl font-bold font-[Outfit] capitalize leading-10">
          Scavenger Hunt
        </div>
        <div className="self-stretch justify-start text-indigo-950 text-base font-light font-[Outfit] capitalize leading-none">
          Lorem ipsum dolor sit amet consectetur. Mauris ut tellus ultrices a
          habitant vitae at.
        </div>
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="inline-flex flex-col justify-start items-start gap-5">
            <div className="flex flex-col justify-center items-start gap-1">
              <div className="inline-flex justify-start items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="https://placehold.co/13x13"
                  alt=""
                />
                <div className="justify-start text-indigo-950 text-sm font-light font-[Outfit] leading-none">
                  3801 W Temple Ave
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="https://placehold.co/12x12"
                  alt=""
                />
                <div className="justify-start">
                  <span className="text-indigo-950 text-sm font-bold font-[Outfit] leading-none">
                    Weekday
                  </span>
                  <span className="text-indigo-950 text-sm font-light font-[Outfit] leading-none">
                    : Time
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-text-button="true"
            className="w-9 h-8 px-3 py-2.5 bg-sky-600 rounded-xl flex justify-center items-center gap-2.5"
          >
            <div className="justify-start text-stone-50 text-xl font-normal font-[Outfit] leading-7">
              ➜
            </div>
          </div>
        </div>
      </div>

      <div className="w-80 p-5 left-[981px] top-[2189px] absolute bg-stone-50/50 rounded-lg inline-flex flex-col justify-start items-start gap-5">
        <div className="self-stretch h-72 relative">
          <img
            className="w-72 h-72 left-0 top-0 absolute rounded"
            src="/images/feast-for-five.png"
            alt=""
          />
        </div>
        <div className="self-stretch justify-start text-indigo-950 text-4xl font-bold font-[Outfit] capitalize leading-10">
          Feast for Five
        </div>
        <div className="self-stretch justify-start text-indigo-950 text-base font-light font-[Outfit] capitalize leading-none">
          Lorem ipsum dolor sit amet consectetur. Mauris ut tellus ultrices a
          habitant vitae at.
        </div>
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="inline-flex flex-col justify-start items-start gap-5">
            <div className="flex flex-col justify-center items-start gap-1">
              <div className="inline-flex justify-start items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="https://placehold.co/13x13"
                  alt=""
                />
                <div className="justify-start text-indigo-950 text-sm font-light font-[Outfit] leading-none">
                  3801 W Temple Ave
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="https://placehold.co/12x12"
                  alt=""
                />
                <div className="justify-start">
                  <span className="text-indigo-950 text-sm font-bold font-[Outfit] leading-none">
                    Weekday
                  </span>
                  <span className="text-indigo-950 text-sm font-light font-[Outfit] leading-none">
                    : Time
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-text-button="true"
            className="w-9 h-8 px-3 py-2.5 bg-sky-600 rounded-xl flex justify-center items-center gap-2.5"
          >
            <div className="justify-start text-stone-50 text-xl font-normal font-[Outfit] leading-7">
              ➜
            </div>
          </div>
        </div>
      </div>

      <div className="w-80 p-5 left-[145px] top-[1540px] absolute bg-stone-50/50 rounded-lg inline-flex flex-col justify-start items-start gap-5">
        <div className="self-stretch h-72 relative">
          <img
            className="w-72 h-72 left-0 top-0 absolute rounded"
            src="/images/fall-retreat.png"
            alt=""
          />
        </div>
        <div className="self-stretch justify-start text-indigo-950 text-4xl font-bold font-[Outfit] capitalize leading-10">
          Fall Retreat
        </div>
        <div className="self-stretch justify-start text-indigo-950 text-base font-light font-[Outfit] capitalize leading-none">
          Lorem ipsum dolor sit amet consectetur. Mauris ut tellus ultrices a
          habitant vitae at.
        </div>
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="inline-flex flex-col justify-start items-start gap-5">
            <div className="flex flex-col justify-center items-start gap-1">
              <div className="inline-flex justify-start items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="https://placehold.co/13x13"
                  alt=""
                />
                <div className="justify-start text-indigo-950 text-sm font-light font-[Outfit] leading-none">
                  3801 W Temple Ave
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="https://placehold.co/12x12"
                  alt=""
                />
                <div className="justify-start">
                  <span className="text-indigo-950 text-sm font-bold font-[Outfit] leading-none">
                    Weekday
                  </span>
                  <span className="text-indigo-950 text-sm font-light font-[Outfit] leading-none">
                    : Time
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-text-button="true"
            className="w-9 h-8 px-3 py-2.5 bg-sky-600 rounded-xl flex justify-center items-center gap-2.5"
          >
            <div className="justify-start text-stone-50 text-xl font-normal font-[Outfit] leading-7">
              ➜
            </div>
          </div>
        </div>
      </div>

      <div className="w-80 p-5 left-[145px] top-[2189px] absolute bg-stone-50/50 rounded-lg inline-flex flex-col justify-start items-start gap-5">
        <div className="self-stretch h-72 relative">
          <img
            className="w-72 h-72 left-0 top-0 absolute rounded"
            src="/images/broomball.png"
            alt=""
          />
        </div>
        <div className="self-stretch justify-start text-indigo-950 text-4xl font-bold font-[Outfit] capitalize leading-10">
          Broomball
        </div>
        <div className="self-stretch justify-start text-indigo-950 text-base font-light font-[Outfit] capitalize leading-none">
          Lorem ipsum dolor sit amet consectetur. Mauris ut tellus ultrices a
          habitant vitae at.
        </div>
        <div className="self-stretch inline-flex justify-between items-start">
          <div className="inline-flex flex-col justify-start items-start gap-5">
            <div className="flex flex-col justify-center items-start gap-1">
              <div className="inline-flex justify-start items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="https://placehold.co/13x13"
                  alt=""
                />
                <div className="justify-start text-indigo-950 text-sm font-light font-[Outfit] leading-none">
                  3801 W Temple Ave
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-1">
                <img
                  className="w-3 h-3"
                  src="https://placehold.co/12x12"
                  alt=""
                />
                <div className="justify-start">
                  <span className="text-indigo-950 text-sm font-bold font-[Outfit] leading-none">
                    Weekday
                  </span>
                  <span className="text-indigo-950 text-sm font-light font-[Outfit] leading-none">
                    : Time
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            data-text-button="true"
            className="w-9 h-8 px-3 py-2.5 bg-sky-600 rounded-xl flex justify-center items-center gap-2.5"
          >
            <div className="justify-start text-stone-50 text-xl font-normal font-[Outfit] leading-7">
              ➜
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1355px] h-52 left-[43px] top-[1182px] absolute bg-neutral-50 rounded-2xl overflow-hidden">
        <div className="w-px h-96 left-[338.75px] top-0 absolute bg-black" />
        <div className="w-px h-96 left-[676px] top-0 absolute bg-black" />
        <div className="w-px h-96 left-[1013px] top-0 absolute bg-black" />
        <div
          data-state="Default"
          data-type="highlighted"
          className="px-5 py-4 left-[21px] top-[16px] absolute bg-indigo-950 rounded-lg inline-flex justify-center items-center gap-2.5"
        >
          <div className="justify-start text-stone-50 text-xl font-semibold font-[Outfit] leading-7">
            June 12
          </div>
        </div>
        <div
          data-state="Default"
          data-type="highlighted"
          className="px-5 py-4 left-[359px] top-[16px] absolute bg-indigo-950 rounded-lg inline-flex justify-center items-center gap-2.5"
        >
          <div className="justify-start text-stone-50 text-xl font-semibold font-[Outfit] leading-7">
            June 14
          </div>
        </div>
        <div
          data-state="Default"
          data-type="highlighted"
          className="px-5 py-4 left-[696px] top-[16px] absolute bg-indigo-950 rounded-lg inline-flex justify-center items-center gap-2.5"
        >
          <div className="justify-start text-stone-50 text-xl font-semibold font-[Outfit] leading-7">
            June 21
          </div>
        </div>
        <div
          data-state="Default"
          data-type="highlighted"
          className="px-5 py-4 left-[1033px] top-[16px] absolute bg-indigo-950 rounded-lg inline-flex justify-center items-center gap-2.5"
        >
          <div className="justify-start text-stone-50 text-xl font-semibold font-[Outfit] leading-7">
            June 24
          </div>
        </div>
        <div className="w-36 h-16 left-[21px] top-[254px] absolute" />
        <div className="w-72 h-28 left-[21px] top-[76px] absolute inline-flex flex-col justify-center items-start gap-1">
          <div className="justify-start text-black text-3xl font-bold font-[Outfit] leading-9">
            Scavenger Hunt
          </div>
          <div className="inline-flex justify-start items-center gap-1">
            <img className="w-3 h-3" src="https://placehold.co/13x13" alt="" />
            <div className="justify-start text-indigo-950 text-base font-light font-[Outfit] leading-none">
              3801 W Temple Ave
            </div>
          </div>
          <div className="inline-flex justify-start items-center gap-1">
            <img className="w-3 h-3" src="https://placehold.co/12x12" alt="" />
            <div className="justify-start">
              <span className="text-indigo-950 text-base font-bold font-[Outfit] leading-none">
                Thursday
              </span>
              <span className="text-indigo-950 text-base font-light font-[Outfit] leading-none">
                : 7:00 PM
              </span>
            </div>
          </div>
        </div>
        <div className="w-72 h-28 left-[696px] top-[76px] absolute inline-flex flex-col justify-center items-start gap-1">
          <div className="justify-start text-black text-3xl font-bold font-[Outfit] leading-9">
            Halloween Party
          </div>
          <div className="inline-flex justify-start items-center gap-1">
            <img className="w-3 h-3" src="https://placehold.co/13x13" alt="" />
            <div className="justify-start text-indigo-950 text-base font-light font-[Outfit] leading-none">
              3801 W Temple Ave
            </div>
          </div>
          <div className="inline-flex justify-start items-center gap-1">
            <img className="w-3 h-3" src="https://placehold.co/12x12" alt="" />
            <div className="justify-start">
              <span className="text-indigo-950 text-base font-bold font-[Outfit] leading-none">
                Tuesday
              </span>
              <span className="text-indigo-950 text-base font-light font-[Outfit] leading-none">
                : 7:00 PM
              </span>
            </div>
          </div>
        </div>
        <div className="w-72 h-28 left-[1033px] top-[76px] absolute inline-flex flex-col justify-center items-start gap-1">
          <div className="justify-start text-black text-3xl font-bold font-[Outfit] leading-9">
            Feast for Five
          </div>
          <div className="inline-flex justify-start items-center gap-1">
            <img className="w-3 h-3" src="https://placehold.co/13x13" alt="" />
            <div className="justify-start text-indigo-950 text-base font-light font-[Outfit] leading-none">
              3801 W Temple Ave
            </div>
          </div>
          <div className="inline-flex justify-start items-center gap-1">
            <img className="w-3 h-3" src="https://placehold.co/12x12" alt="" />
            <div className="justify-start">
              <span className="text-indigo-950 text-base font-bold font-[Outfit] leading-none">
                Thursday
              </span>
              <span className="text-indigo-950 text-base font-light font-[Outfit] leading-none">
                : 7:00 PM
              </span>
            </div>
          </div>
        </div>
        <div className="w-72 h-28 left-[359px] top-[76px] absolute inline-flex flex-col justify-center items-start gap-1">
          <div className="justify-start text-black text-3xl font-bold font-[Outfit] leading-9">
            Broomball
          </div>
          <div className="inline-flex justify-start items-center gap-1">
            <img className="w-3 h-3" src="https://placehold.co/13x13" alt="" />
            <div className="justify-start text-indigo-950 text-base font-light font-[Outfit] leading-none">
              3801 W Temple Ave
            </div>
          </div>
          <div className="inline-flex justify-start items-center gap-1">
            <img className="w-3 h-3" src="https://placehold.co/12x12" alt="" />
            <div className="justify-start">
              <span className="text-indigo-950 text-base font-bold font-[Outfit] leading-none">
                Saturday
              </span>
              <span className="text-indigo-950 text-base font-light font-[Outfit] leading-none">
                : 2:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[636px] h-20 left-[43px] top-[1057px] absolute justify-start text-black text-6xl font-bold font-[Outfit] capitalize leading-[70.40px]">
        Upcoming Events
      </div>

      <div className="w-[1158px] h-[741px] left-[141px] top-[201px] absolute">
        <img
          className="w-[1158px] h-[741.24px] left-0 top-0 absolute shadow-[0px_4px_34.900001525878906px_12px_rgba(0,0,0,0.25)]"
          src="/images/fall-retreat-banner.jpg"
          alt=""
        />
        <div className="left-[411px] top-[252px] absolute justify-start text-sky-600 text-4xl font-normal font-[Outfit] capitalize leading-10">
          FEATURED EVENT
        </div>
        <div className="left-[356px] top-[336px] absolute justify-start text-black text-6xl font-bold font-[Outfit] capitalize leading-[70.40px]">
          FALL RETREAT
        </div>
      </div>

      <div className="w-[1440px] h-20 left-0 top-0 absolute bg-indigo-950 inline-flex flex-col justify-center items-center gap-2.5">
        <div className="w-[1152px] inline-flex justify-between items-center">
          <div className="w-64 h-20 relative bg-stone-300/0 overflow-hidden">
            <img
              className="w-28 h-12 left-0 top-[17px] absolute"
              src="https://placehold.co/117x51"
              alt=""
            />
            <div className="left-[129px] top-[13px] absolute justify-start text-neutral-200 text-xl font-semibold font-[Outfit] leading-7">
              EPIC
              <br />
              POMONA
            </div>
          </div>
          <div className="flex justify-start items-center gap-3">
            <div
              data-state="Default"
              data-type="regular"
              className="px-5 py-4 flex justify-center items-center gap-2.5"
            >
              <div className="justify-start text-stone-50 text-xl font-semibold font-[Outfit] leading-7">
                About Us
              </div>
            </div>
            <div
              data-state="Default"
              data-type="regular"
              className="px-5 py-4 flex justify-center items-center gap-2.5"
            >
              <div className="justify-start text-stone-50 text-xl font-semibold font-[Outfit] leading-7">
                Local Churches
              </div>
            </div>
            <div
              data-state="Default"
              data-type="regular"
              className="px-5 py-4 flex justify-center items-center gap-2.5"
            >
              <div className="justify-start text-stone-50 text-xl font-semibold font-[Outfit] leading-7">
                Upcoming Events
              </div>
            </div>
            <div
              data-state="Default"
              data-type="regular"
              className="px-5 py-4 flex justify-center items-center gap-2.5"
            >
              <div className="justify-start text-neutral-200 text-xl font-semibold font-[Outfit] leading-7">
                Resources
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
