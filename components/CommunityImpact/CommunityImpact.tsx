import React from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/testimonial1.jpg",
    alt: "Community cleanup 11",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/testimonial2.jpg",
    alt: "Community cleanup 2",
    className: "col-span-1 row-span-1",
  },

  {
    src: "/testimonial3.jpg",
    alt: "Community cleanup 3",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/testimonial4.jpg",
    alt: "Community cleanup 4",
    className: "col-span-1 row-span-2",
  },
];

export default function CommunityImpact() {
  return (
    <div>
      {/* Gallery with responsive margins */}
      <div className="pt-5 mb-4 sm:mb-4 2xl:mb-4 3xl:mb-4">
        <div className="grid grid-cols-3 gap-2 2xl:gap-4 3xl:gap-6">
          {/* Large image on left - full height */}
          <div className="col-span-1 rounded-lg overflow-hidden">
            <Image
              width={600}
              height={400}
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle column with two stacked images */}
          <div className="col-span-1 flex flex-col gap-2 2xl:gap-4 3xl:gap-6">
            <div className="flex-1 rounded-lg overflow-hidden">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1  rounded-lg overflow-hidden">
              <Image
                width={600}
                height={400}
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Large image on right - full height */}
          <div className="col-span-1 rounded-lg overflow-hidden">
            <Image
              width={600}
              height={400}
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Community Impact Section with responsive margins and typography */}
      <div className="mb-11 mt-10 lg:mt-10 lg:mb-10 2xl:mb-10 3xl:mb-10 3xl:mt-10">
        {/* Horizontal Line Separator */}
        <div className="w-full h-0.5 bg-black mb-2 lg:mb-7 lg:mt-11 2xl:mb-10 3xl:mb-12 3xl:mt-50"></div>
        {/* Header Section - Title and Description side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-12 3xl:gap-16 mb-8 2xl:mb-12 3xl:mb-16 3xl:mt-50">
          <div>
            <h3 className="text-4xl sm:text-3xl inline md:block lg:text-7xl xl:text-6xl  2xl:text-7xl 3xl:text-8xl bg-[#FAFF00] md:bg-transparent  md:text-left font-light uppercase text-black md:mb-15 mt-2 md:mt-0 leading-tight">
              COMMUNITY IMPACT
            </h3>
          </div>
          <div>
            <p
              className="text-black text-center md:text-left  sm:text-lg lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-normal mb-4 md:mt-2 leading-tight uppercase"
              style={{
                fontFamily: "Bebas Neue",
                letterSpacing: "-0.02em",
                lineHeight: "102%",
              }}
            >
              participants worldwide use DeCleanup dApp to turn real world
              impact into onchain products with additional utilities within the
              ecosystem in the future.
            </p>
          </div>
        </div>

        {/* Cards Section - Two cards side by side with responsive spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-8 3xl:gap-12 lg:items-start">
          {/* HEM Japan - shorter card */}
          <div className="bg-black text-[#4FA02A] p-4 lg:p-6 2xl:p-8 3xl:p-10 rounded-none">
            <h4 className="text-[#FAFF00] text-2xl sm:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl mb-2 font-extrabold text-left leading-tight uppercase">
              HEM JAPAN
            </h4>
            <p className="text-[#4FA02A] text-sm lg:text-base 2xl:text-4xl 3xl:text-xl font-extrabold leading-relaxed text-left uppercase">
              Early partner organizing cleanups across Japan using
              DeCleanup&apos;s verification system. 2024: 12 active users, 9
              cleanup events
            </p>
          </div>

          {/* Pestathon - taller card */}
          <div className="bg-black text-[#4FA02A] p-4 lg:p-6 2xl:p-8 3xl:p-10 rounded-none">
            <h4 className="text-[#FAFF00] text-3xl sm:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl mb-2 font-black uppercase text-left">
              PESATHON
            </h4>
            <p className="text-[#4FA02A] text-sm lg:text-base 2xl:text-4xl 3xl:text-xl font-extrabold leading-tight text-left uppercase">
              UNNPloggas university campaign combining education + action.
              Students learned environmental care while cleaning campus.
              DeCleanup added 120 USDGLO to Atlantis Impact Miner rewards.2024:
              9 active users, 4 cleanup events
            </p>
          </div>
        </div>
      </div>
      {/* Horizontal Line Separator */}
      <div className="w-full h-0.5 bg-black mb-4 lg:mb-9 2xl:mb-12 3xl:mb-16"></div>

      {/* Quote Section with responsive typography */}
      <div className=" py-6 lg:p-8 2xl:p-10 3xl:p-12 rounded-xl mb-0 relative">
        {/* Opening Quote Mark */}
        <div className="absolute top-4 left lg:top-6 lg:left-6">
          <span className="text-6xl lg:text-8xl font-black text-black leading-none opacity-60">
            &quot;
          </span>
        </div>

        {/* Main Quote Text */}
        <div className="relative text-black leading-relaxed pt-8 lg:pt-12">
          <p
            className="text-black text-left text-lg sm:text-xl lg:text-5xl xl:text-3xl 2xl:text-4xl font-normal mb-6 leading-tight uppercase tracking-tight"
            style={{
              fontFamily: "Bebas Neue, Arial Black, sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            DeCleanup employs the most simplified system I&apos;ve encountered
            in dApps, making it easier for people to participate in
            environmental protection activities. Even picking up a single
            plastic bottle can transform into rewards!
          </p>

          {/* Attribution */}
          <div className="flex justify-end items-center mt-2">
            <div className="text-right">
              <p
                className="text-black font-normal text-[10px] lg:text-xl  uppercase tracking-wide"
                style={{ fontFamily: "Bebas Neue, Arial Black, sans-serif" }}
              >
                YUICHI HOSOMO — NEW JAPAN
              </p>
            </div>
          </div>
        </div>

        {/* Closing Quote Mark */}
        <div className="absolute bottom- right-4 lg:bottom-6 lg:right-6">
          <span className="text-6xl lg:text-8xl font-black text-black leading-none opacity-60">
            &quot;
          </span>
        </div>
      </div>

      <div className="w-full h-0.5 bg-black mb-4 lg:mb-9 2xl:mb-12 3xl:mb-16"></div>
    </div>
  );
}
