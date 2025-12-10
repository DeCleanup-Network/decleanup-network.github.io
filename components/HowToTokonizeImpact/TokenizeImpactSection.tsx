import React from "react";
import NavLink from "../NavLink/NavLink";
import Link from "next/link";

const TokenizeImpactSection = () => {
  const steps = [
    {
      number: "1.",
      title: "Start or Join a Cleanup",
    },
    {
      number: "2.",
      title: "Capture the Impact",
    },
    {
      number: "3.",
      title: "Earn Rewards",
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-white mb-4"
          >
            How to Tokenize Impact?
          </h2>
        </div>

        {/* Content Section - Image and Steps */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 mb-12 lg:mb-16 items-center">
          {/* Left Content with Background Image and Yellow Frame */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="relative p-4 bg-[#FAFF00] rounded-lg transform hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-[#FAFF00]/20 w-full">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <div
                  className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover transform hover:scale-110 transition-transform duration-500"
              style={{
                backgroundImage: "url('/image1.png')",
              }}
            ></div>
              </div>
            </div>
          </div>

          {/* Right Content - Steps */}
          <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-900 border-2 border-gray-800 rounded-lg p-8 hover:border-[#58B12F] transition-all duration-300 hover:shadow-[0_0_20px_rgba(88,177,47,0.15)] hover:-translate-y-1 card-hover"
              >
                <div className="flex flex-row items-center">
                  <div 
                    className="text-[#FAFF00] text-3xl lg:text-4xl font-bold mr-3"
                  >
                    {step.number}
                  </div>
                  <h3 
                    className="text-lg sm:text-xl lg:text-2xl font-normal uppercase text-white flex-1"
                  >
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-12 lg:space-y-16">
          {/* Get Started Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://farcaster.xyz/miniapps/njiQzfqas3yN/decleanup-rewards"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#FAFF00] text-black font-bold text-lg sm:text-xl tracking-wider hover:bg-[#FAFF00]/90 transition-colors duration-200 border-2 border-[#FAFF00] normal-case hover:scale-105 hover:shadow-[0_0_20px_rgba(250,255,0,0.4)] transition-all duration-300"
              style={{ textTransform: 'none' }}
            >
              Get started on Farcaster
            </Link>
            <Link
              href="https://miniapp.decleanup.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black text-[#FAFF00] font-bold text-lg sm:text-xl tracking-wider hover:bg-gray-900 transition-colors duration-200 border-2 border-[#FAFF00] normal-case hover:scale-105 hover:shadow-[0_0_20px_rgba(250,255,0,0.4)] transition-all duration-300"
              style={{ textTransform: 'none' }}
            >
              Get started in web app
            </Link>
          </div>

          {/* Join Movement Section */}
          <div className="space-y-8 lg:space-y-12">
            <h3
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal uppercase text-white"
            >
              Join the Movement
            </h3>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Connect with our growing community on social media, and explore everything you need to start contributing to a cleaner environment today.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
              <Link
                href={"https://t.me/EcoSynthesisX/443"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-[#FAFF00] font-semibold text-base sm:text-lg border-2 border-[#FAFF00] hover:border-[#58B12F] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,255,0,0.3)] text-center overflow-hidden"
              >
                <span className="relative z-10">Telegram</span>
                <div className="absolute inset-0 bg-[#FAFF00] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
              <Link
                href={"https://x.com/DeCleanupNet/status/1917591927563624903"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-[#FAFF00] font-semibold text-base sm:text-lg border-2 border-[#FAFF00] hover:border-[#58B12F] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,255,0,0.3)] text-center overflow-hidden"
              >
                <span className="relative z-10">X</span>
                <div className="absolute inset-0 bg-[#FAFF00] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
              <Link
                href={"https://farcaster.xyz/decleanupnet"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-[#FAFF00] font-semibold text-base sm:text-lg border-2 border-[#FAFF00] hover:border-[#58B12F] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,255,0,0.3)] text-center overflow-hidden"
              >
                <span className="relative z-10">Farcaster</span>
                <div className="absolute inset-0 bg-[#FAFF00] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
          <NavLink />
        </div>
      </div>
    </div>
  );
};

export default TokenizeImpactSection;
