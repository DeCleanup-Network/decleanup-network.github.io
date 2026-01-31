"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const RoadmapCarousel = ({ roadmap }: { roadmap: Array<{ phase: string; bullets: string[] }> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? roadmap.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === roadmap.length - 1 ? 0 : prev + 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swipe left - go to next
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swipe right - go to previous
      goToPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative w-full">
      {/* Container with padding to prevent border cutoff */}
      <div className="px-4 py-4">
        {/* Cards Container - Centered with stacked effect */}
        <div 
          className="relative flex justify-center items-center min-h-[500px] lg:min-h-[600px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {roadmap.map((item, index) => {
            const isActive = index === currentIndex;
            const offset = index - currentIndex;
            const absOffset = Math.abs(offset);
            
            // Calculate position and scale for stacked cards
            let transform = "";
            let zIndex = roadmap.length - absOffset;
            let opacity = 1;
            
            if (isActive) {
              transform = "translateX(0) translateY(0)";
              zIndex = roadmap.length + 1;
            } else if (offset < 0) {
              // Cards to the left
              transform = `translateX(${-100 * absOffset - 50}px) translateY(${20 * absOffset}px) scale(${1 - absOffset * 0.1})`;
              opacity = Math.max(0.3, 1 - absOffset * 0.2);
            } else {
              // Cards to the right
              transform = `translateX(${100 * absOffset + 50}px) translateY(${20 * absOffset}px) scale(${1 - absOffset * 0.1})`;
              opacity = Math.max(0.3, 1 - absOffset * 0.2);
            }

            return (
              <div
                key={index}
                className="absolute w-full max-w-[95%] sm:max-w-xl lg:max-w-2xl"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div
                  className={`bg-gray-900 border-2 rounded-lg p-8 sm:p-10 lg:p-12 text-left transition-all duration-300 ${
                    isActive 
                      ? "border-[#58B12F] shadow-[0_0_25px_rgba(88,177,47,0.15)]" 
                      : "border-gray-800 cursor-pointer"
                  } hover:border-[#58B12F] hover:shadow-[0_0_25px_rgba(88,177,47,0.15)] hover:-translate-y-2`}
                  onMouseEnter={() => !isActive && setCurrentIndex(index)}
                  onClick={() => !isActive && setCurrentIndex(index)}
                  style={{
                    transform: isActive ? "scale(1)" : "scale(0.9)",
                  }}
                >
                  <h3 className="text-white text-3xl sm:text-3xl lg:text-4xl xl:text-5xl uppercase mb-6 leading-tight font-normal">
                    {item.phase}
                  </h3>
                  <ul className="text-gray-400 text-lg sm:text-lg lg:text-xl leading-relaxed space-y-3">
                    {item.bullets.map((bullet, idx) => {
                      // Check if bullet contains a link
                      const linkMatch = bullet.match(/\(https?:\/\/[^)]+\)/);
                      if (linkMatch) {
                        const url = linkMatch[0].slice(1, -1);
                        const textBefore = bullet.substring(0, bullet.indexOf("("));
                        return (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-[#58B12F] font-bold">•</span>
                            <span>
                              {textBefore}
                              <Link 
                                href={url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#58B12F] hover:text-[#FAFF00] underline transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {url}
                              </Link>
                            </span>
                          </li>
                        );
                      }
                      return (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-[#58B12F] font-bold">•</span>
                          <span>{bullet}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:flex justify-center items-center gap-4 mt-8">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full bg-gray-900 border-2 border-gray-700 hover:border-[#58B12F] flex items-center justify-center transition-all duration-300 opacity-100 cursor-pointer hover:shadow-[0_0_20px_rgba(88,177,47,0.3)]"
          aria-label="Previous card"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Dots indicator */}
        <div className="flex gap-2">
          {roadmap.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-[#58B12F] w-8" 
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="w-12 h-12 rounded-full bg-gray-900 border-2 border-gray-700 hover:border-[#58B12F] flex items-center justify-center transition-all duration-300 opacity-100 cursor-pointer hover:shadow-[0_0_20px_rgba(88,177,47,0.3)]"
          aria-label="Next card"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots indicator for mobile - visible on mobile, hidden on desktop */}
      <div className="flex lg:hidden justify-center items-center gap-2 mt-8">
        {roadmap.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-[#58B12F] w-8" 
                : "bg-gray-700 w-2"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const NetworkRoadmapSection = () => {
  const roadmap = [
    {
      phase: "Phase 1 - Base Mini App (live)",
      bullets: [
        "Farcaster mini app for quick cleanups",
        "$bDCU rewards on Base",
        "Simple logging + basic stats",
      ],
    },
    {
      phase: "Phase 2 - Celo Full dApp (building)",
      bullets: [
        "Full dashboard, leaderboard, streaks",
        "Impact Products, claim & stake",
        "Hypercert minted after every 10 verified cleanups",
      ],
    },
    {
      phase: "Phase 3 - Reputation & Governance",
      bullets: [
        "$cDCU as reputation + governance token on Celo",
        "Voting on Gardens.fund",
        "Cleaner profiles and long-term contribution history",
      ],
    },
    {
      phase: "Phase 4 - Multichain Ecosystem",
      bullets: [
        "Base + Celo live side-by-side",
        "Integrations with Regen Bazaar and partners",
        "New Impact Product levels and impact metrics",
      ],
    },
  ];

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
      {/* Roadmap Section with responsive margins */}
      <div>
        <div className="relative w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 lg:mb-8">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-normal uppercase text-white mb-0 leading-tight"
            >
              Network Roadmap
            </h2>
          </div>

          {/* Roadmap Carousel */}
          <RoadmapCarousel roadmap={roadmap} />
        </div>
      </div>

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
