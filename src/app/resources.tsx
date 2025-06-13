
import * as React from "react";
export const HeroSection: React.FC = () => {
  return (
    <header className="grow shrink w-[1595px] max-md:max-w-full">
      <div className="flex w-full bg-indigo-950 min-h-[154px] max-md:max-w-full" />
      <div className="flex relative flex-col w-full min-h-[523px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/41f87fc25c9bd123845d8096b9b46916b4abbc35?placeholderIfAbsent=true&apiKey=466110543a0c42c5bbfa00555e2c572e"
          className="object-cover absolute inset-0 size-full"
          alt="Hero background"
        />
        <div className="flex relative flex-col items-start px-20 pt-52 pb-14 w-full bg-black-950 bg-opacity-40 max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[743px]">
            <h1 className="self-start text-6xl font-bold text-black -50 max-md:max-w-full max-md:text-4xl">
              Connect with us!
            </h1>
            <div className="flex flex-col self-end max-w-full w-[524px]">
              <p className="text-2xl font-bold text-sky-500 max-md:max-w-full">
                Join our discord and instagram to stay updated!
              </p>
              <div className="self-center mt-5 max-w-full w-[484px]">
                <SocialConnectButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export const SocialConnectButtons: React.FC = () => {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:">
      <div className="w-6/12 max-md:ml-0 max-md:w-full">
        <button className="flex justify-center items-center w-full text-sm font-medium tracking-normal leading-none text-white min-h-[130px] max-md:mt-10">
          <div className="flex overflow-hidden justify-center items-center self-stretch my-auto bg-sky-600 rounded-[100px]">
            <div className="gap-1 self-stretch px-3 py-1.5 my-auto">
              Connect with us on Discord!
            </div>
          </div>
        </button>
      </div>
      <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <button className="flex justify-center items-center w-full text-sm font-medium tracking-normal leading-none text-white min-h-[130px] max-md:mt-10">
          <div className="flex overflow-hidden justify-center items-center self-stretch my-auto bg-sky-600 rounded-[100px]">
            <div className="gap-1 self-stretch px-3 py-1.5 my-auto">
              Connect with us on Instgram!
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
export const PrayerSection: React.FC = () => {
  return (
    <section className="flex flex-col grow shrink rounded-lg min-w-60 w-[442px] max-md:max-w-full">
      <h2 className="self-start text-5xl font-bold text-indigo-950 max-md:text-4xl">
        Need Prayer?
      </h2>
      <div className="flex flex-col pl-20 mt-11 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <p className="self-start text-2xl font-thin text-black max-md:max-w-full">
          {"Prayer is our way of connecting with God. It's powerful because He hears us. In fact, God is always ready for us to come to Him with both our praise and our requests. Even the smallest, most seemingly insignificant prayer can have a big impact. "}
        </p>
        <button className="overflow-hidden self-center mt-24 ml-6 w-52 max-w-full text-base leading-none bg-sky-600 border-solid border-[color:var(--sds-color-border-brand-default)] border-[length:var(--sds-size-stroke-border)] gap-[var(--sds-size-space-200)] min-h-[63px] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)] text-[color:var(--sds-color-text-brand-on-brand)] max-md:mt-10">
          Get Prayer
        </button>
      </div>
    </section>
  );
};
export const SupportSection: React.FC = () => {
  return (
    <section className="flex flex-col grow shrink rounded-lg min-w-60 w-[462px] max-md:max-w-full">
      <h2 className="self-start text-5xl font-bold text-indigo-950 max-md:text-4xl">
        Support
      </h2>
      <div className="flex flex-col pl-20 mt-16 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <p className="self-start text-2xl font-thin text-black max-md:max-w-full">
          {" Epic is a movement and ministry that relies on the generous support of others to thrive. Want to make a difference? Partner with us by giving today. "}
        </p>
        <button className="overflow-hidden self-center mt-32 ml-12 w-52 max-w-full text-base leading-none whitespace-nowrap bg-sky-600 border-solid border-[color:var(--sds-color-border-brand-default)] border-[length:var(--sds-size-stroke-border)] gap-[var(--sds-size-space-200)] min-h-[63px] pb-[var(--sds-size-space-300)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)] pt-[var(--sds-size-space-300)] rounded-[var(--sds-size-radius-200)] text-[color:var(--sds-color-text-brand-on-brand)] max-md:mt-10">
          Give
        </button>
      </div>
    </section>
  );
};
export const ConnectPage: React.FC = () => {
  return (
    <main>
      <div className="flex overflow-hidden flex-wrap gap-14 items-end w-full bg-stone-50 max-md:max-w-full">
        <HeroSection />
        <PrayerSection />
        <SupportSection />
      </div>
    </main>
  );
};

export default ConnectPage;
