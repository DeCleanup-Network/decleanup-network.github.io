"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle, Clock } from "lucide-react";

const NetworkRoadmapSection = () => {
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

  return (
    <div className="min-h-screen ">
      {/* Roadmap Section - litepaper-style vertical timeline */}
      <section id="roadmap" className="py-24 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-12 text-center">
            ROADMAP
          </h2>

          <div className="space-y-8 relative pl-8 md:pl-0 max-w-4xl mx-auto">
            {/* Vertical Line for mobile */}
            <div className="absolute left-[31px] top-0 bottom-0 w-px bg-neutral-800 md:hidden" />

            {/* Phase 1 - Base blue */}
            <div className="flex flex-col md:flex-row gap-6 relative">
              <div className="hidden md:flex w-32 flex-col items-end pt-2">
                <span className="text-blue-500 font-bold text-lg font-bebas tracking-wide">PHASE 1</span>
                <span className="text-xs text-gray-300 uppercase tracking-widest">Live</span>
              </div>
              <div className="absolute left-[-11px] md:static w-6 h-6 rounded-full bg-blue-500 border-4 border-black z-10 shrink-0" />
              <div className="flex-1 bg-neutral-900/50 border border-blue-500/30 p-6 rounded-xl hover:bg-neutral-900/80 transition-colors">
                <h3 className="text-xl text-white mb-2 md:hidden font-bebas tracking-wide text-blue-500">PHASE 1 - LIVE</h3>
                <h4 className="text-white text-lg font-medium mb-3">Foundation</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-200">
                  <div className="flex items-center gap-2"><CheckCircle className="text-blue-500 w-4 h-4 shrink-0" /> Base Mini App</div>
                  <div className="flex items-center gap-2"><CheckCircle className="text-blue-500 w-4 h-4 shrink-0" /> $bDCU Rewards</div>
                  <div className="flex items-center gap-2"><CheckCircle className="text-blue-500 w-4 h-4 shrink-0" /> Basic Verification</div>
                </div>
              </div>
            </div>

            {/* Phase 2 - Celo yellow */}
            <div className="flex flex-col md:flex-row gap-6 relative">
              <div className="hidden md:flex w-32 flex-col items-end pt-2">
                <span className="text-[#FAFF00] font-bold text-lg font-bebas tracking-wide">PHASE 2</span>
                <span className="text-xs text-gray-300 uppercase tracking-widest">In Dev</span>
              </div>
              <div className="absolute left-[-11px] md:static w-6 h-6 rounded-full bg-[#FAFF00] border-4 border-black z-10 shrink-0 animate-pulse" />
              <div className="flex-1 bg-neutral-900/30 border border-dashed border-[#FAFF00]/30 p-6 rounded-xl hover:bg-neutral-900/50 transition-colors">
                <h3 className="text-xl text-white mb-2 md:hidden font-bebas tracking-wide text-[#FAFF00]">PHASE 2 - IN DEV</h3>
                <h4 className="text-white text-lg font-medium mb-3">Governance & Celo</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-200">
                  <div className="flex items-center gap-2"><Clock className="text-[#FAFF00] w-4 h-4 shrink-0" /> Celo Full dApp</div>
                  <div className="flex items-center gap-2"><Clock className="text-[#FAFF00] w-4 h-4 shrink-0" /> Impact Products v2</div>
                  <div className="flex items-center gap-2"><Clock className="text-[#FAFF00] w-4 h-4 shrink-0" /> Hypercert Records</div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex flex-col md:flex-row gap-6 relative">
              <div className="hidden md:flex w-32 flex-col items-end pt-2">
                <span className="text-gray-300 font-bold text-lg font-bebas tracking-wide">PHASE 3</span>
                <span className="text-xs text-gray-200 uppercase tracking-widest">Future</span>
              </div>
              <div className="absolute left-[-11px] md:static w-6 h-6 rounded-full bg-gray-700 border-4 border-black z-10 shrink-0" />
              <div className="flex-1 bg-neutral-900/10 border border-neutral-800 p-6 rounded-xl opacity-60 hover:opacity-100 transition-opacity">
                <h3 className="text-xl text-white mb-2 md:hidden font-bebas tracking-wide text-gray-300">PHASE 3</h3>
                <h4 className="text-white text-lg font-medium mb-3">AI verification</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200">
                  <div>• RWI Rank</div>
                  <div>• Impact Staking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <div
        className="relative w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16 lg:py-20"
        style={{ position: "relative" }}
      >
        {/* Gallery with responsive margins */}
        <div className="mb-10">
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
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

        {/* Community Impact Section with centered heading and description */}
        <div className="mt-12 mb-12">
          {/* Centered Heading + Description */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal uppercase text-white mb-4">
              Community Impact
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Participants worldwide use DeCleanup dApp to turn real-world impact into onchain products with additional utilities in the ecosystem.
              </p>
          </div>

          {/* Cards Section - Two cards side by side with responsive spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* HEM Japan - shorter card */}
            <div className="bg-gray-900 border-2 border-[#58B12F] p-6 lg:p-8 rounded-lg">
              <h4 
                className="text-2xl sm:text-3xl lg:text-4xl mb-3 font-normal text-white leading-tight uppercase"
              >
                HEM Japan
              </h4>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Early partner organizing cleanups across Japan using DeCleanup&apos;s verification system. 2024: 12 active users, 9 cleanup events
              </p>
            </div>

            {/* Pestathon - taller card */}
            <div className="bg-gray-900 border-2 border-[#58B12F] p-6 lg:p-8 rounded-lg">
              <h4 
                className="text-2xl sm:text-3xl lg:text-4xl mb-3 font-normal text-white leading-tight uppercase"
              >
                Pestathon
              </h4>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                UNNPloggas university campaign combining education + action. Students learned environmental care while cleaning campus. DeCleanup added 120 USDGLO to Atlantis Impact Miner rewards. 2024: 9 active users, 4 cleanup events
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section with responsive typography */}
        <div className="bg-gray-900 p-8 lg:p-12 rounded-lg mb-0 relative border-l-4 border-[#FAFF00]">
          {/* Main Quote Text */}
          <div className="relative text-gray-200 leading-relaxed">
            <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-6 italic">
              &quot;DeCleanup employs the most simplified system I&apos;ve encountered in dApps, making it easier for people to participate in environmental protection activities. Even picking up a single plastic bottle can transform into rewards!&quot;
            </p>

            {/* Attribution */}
            <div className="flex justify-end items-center">
              <div className="text-right">
                <p className="text-base sm:text-lg font-bold text-gray-300">
                  - Yuichi Hosomo, Hem Japan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkRoadmapSection;
