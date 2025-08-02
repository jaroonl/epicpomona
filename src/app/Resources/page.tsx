"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const TopHeader = () => (
  <div className="w-full bg-blue-900 text-white py-4 px-6 shadow-md">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <h1 className="text-xl font-bold">Epic Ministry</h1>
      {/* Optional nav items or buttons can go here */}
      <nav className="space-x-4 text-sm hidden md:block">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Connect</a>
        <a href="#" className="hover:underline">Support</a>
      </nav>
    </div>
  </div>
);
export const HeroSection = () => (
  <header className="w-screen h-[677px] max-md:h-[500px] flex justify-center items-center bg-white relative">
    <div className="w-screen h-[677px] max-md:h-[500px] flex flex-col justify-between items-center relative">
      {/* Background image - lowest layer */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41f87fc25c9bd123845d8096b9b46916b4abbc35?placeholderIfAbsent=true&apiKey=466110543a0c42c5bbfa00555e2c572e"
        alt="Hero background"
        className="absolute inset-0 w-screen h-full object-cover"
      />
     
      {/* Light dark overlay - middle layer */}
      <div className="w-screen h-full absolute inset-0 z-5" style={{backgroundColor: 'rgba(37, 37, 37, 0.6)'}}></div>
     

     
      {/* Content overlay - top layer */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-4">
        <h1 className="font-outfit text-[64px] max-md:text-[40px] max-sm:text-[32px] font-bold leading-normal text-white mb-6 text-center">
          Connect with us!
        </h1>
          {/* Subheading */}
          <p className="font-outfit text-[24px] max-md:text-[18px] max-sm:text-[16px] font-bold leading-normal text-white mb-12 text-center">
            Join our discord and instagram to stay updated!
          </p>
          {/* Buttons container */}
          <div className="flex gap-8 max-md:gap-4 max-sm:flex-col max-sm:gap-4">
            {/* Instagram Button */}
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center rounded-full bg-[#0093D0] hover:bg-[#007BB8] transition-colors cursor-pointer">
                <div className="flex justify-center items-center gap-1 px-3 py-1.5">
                  <span className="font-roboto text-[14px] max-sm:text-[12px] font-medium leading-[20px] tracking-[0.1px] text-white">
                    Connect with us on Instgram!
                  </span>
                </div>
              </div>
            </div>
            {/* Discord Button */}
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center rounded-full bg-[#0093D0] hover:bg-[#007BB8] transition-colors cursor-pointer">
                <div className="flex justify-center items-center gap-1 px-3 py-1.5">
                  <span className="font-roboto text-[14px] max-sm:text-[12px] font-medium leading-[20px] tracking-[0.1px] text-white">
                    Connect with us on Discord!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </header>
);

export const PrayerSection = () => (
  <section className="flex flex-col items-center gap-[60px] max-w-[974px] mx-auto">
    <h2 className="font-outfit text-[48px] font-bold leading-normal text-[#1D2046] max-md:text-[36px]">
      Need Prayer?
    </h2>
    <p className="font-outfit text-[24px] font-normal leading-normal text-black w-full text-center max-md:text-[20px]">
      Prayer is our way of connecting with God. It's powerful because He hears us. In fact, God is always ready for us to come to Him with both our praise and our requests. Even the smallest, most seemingly insignificant prayer can have a big impact.
    </p>

  </section>
);

export const GoogleFormEmbed = () => (
  <section className="w-full flex justify-center px-6 py-12 mt-16">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScbfYSAH1YyFmvRw5gvmfW4GZyT-Xei0kv1VJAL34c-5q3H-g/viewform?embedded=true"
      width="760"
      height="600"
      frameBorder="0"
      title="Contact Form"
      className="rounded-lg shadow-lg"
    >
      Loading…
    </iframe>
  </section>
);

export const SupportSection = () => (
  <section className="flex flex-col items-center gap-[49px] max-w-[1102px] mx-auto">
    <h2 className="font-outfit text-[48px] font-bold leading-normal text-[#1D2046] max-md:text-[36px]">
      Support
    </h2>
    <p className="font-outfit text-[24px] font-normal leading-normal text-black w-full text-center max-md:text-[20px]">
      Epic is a movement and ministry that relies on the generous support of others to thrive. Want to make a difference? Partner with us by giving today.
    </p>
    <div className="flex justify-center items-center">
      <button className="flex justify-center items-center gap-2 px-16 py-3 rounded-lg border border-[rgba(44,44,44,1)] bg-[#0093D0] hover:bg-[#007BB8] transition-colors min-w-[200px]">
        <span className="font-inter text-[16px] font-medium leading-[100%] text-[rgba(245,245,245,1)]">
          Give
        </span>
      </button>
    </div>
  </section>
);



const ConnectPage = () => {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Header />

      {/* Main content container */}
      <div className="flex flex-col items-center gap-[55px] max-w-[1706px] mx-auto bg-[#FAF9F6] pb-16 px-4">
        <HeroSection />
        <PrayerSection />
        <GoogleFormEmbed />
        <SupportSection />
      </div>

      
      <Footer/>
    </main>
  );
};




export default ConnectPage;