import React from "react";

export default function WhatIsDeCleanupNetwork() {
  return (
    <div className="md:min-h-screen">
      <div className="mx-auto lg:py-4">
        <div className="w-full flex justify-center mb-5 md:mb-10  items-center font-black text-black uppercase leading-relaxed drop-shadow-lg">
          <div className="inline-block bg-[#FAFF00] text-2xl md:text-6xl lg:text-7xl px-2 font-medium">
            What is DeCleanup Network?
          </div>
        </div>

        {/* Header Section - Title and Description Side by Side */}
        <div className=" text-center flex flex-col md:flex-row lg:text-left mb-8 lg:mb-12">
          {/* Left: Title with background image */}
          <div className="relative md:w-[50%] min-h-[300px] md:min-h-[400px]">
            <div
              className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: "url('/image2.png')",
              }}
            ></div>
          </div>

          {/* Right: Description */}
          <div className="md:w-[50%] pl-0 md:pl-4 lg:pl-8 mt-4 md:mt-0 ">
            <div className="space-y-4 md:space-y-6 flex flex-col h-full justify-between">
              <div className="font-black">
                <div className="text-[#000000] text-xl md:text-4xl text-left  lg:text-3xl xl:text-4xl leading-tight font-light">
                  at DeCleanup Network we coordinate global environmental
                  cleanups and turn them into lasting digital impact.
                </div>
              </div>

              <div className="font-black">
                <div className="text-[#000000] text-xl md:text-3xl text-left  lg:text-3xl xl:text-4xl leading-tight font-light">
                  We connect participants and partners into a shared ecosystem
                  where every cleanup becomes a part of broader planetary
                  regeneration.
                </div>
              </div>

              <div className="font-black">
                <div className="text-[#000000] text-xl md:text-3xl text-left  lg:text-3xl xl:text-4xl leading-tight font-light">
                  By converting actions into onchain Impact Products, we enable
                  recognition, traceability, and participation across regions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
