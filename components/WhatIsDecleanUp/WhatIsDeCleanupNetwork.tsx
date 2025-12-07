import React from "react";

interface ProblemSectionProps {
  hideHeader?: boolean;
}

function ProblemSection({ hideHeader = false }: ProblemSectionProps) {
  // This component is kept for backwards compatibility but cards are now rendered inline
  return null;
}

interface SolutionSectionProps {
  hideHeader?: boolean;
}

function SolutionSection({ hideHeader = false }: SolutionSectionProps) {
  // This component is kept for backwards compatibility but cards are now rendered inline
  return null;
}

export default function WhatIsDeCleanupNetwork() {
  const problems = [
    "Lack of incentives for cleanup actions",
    "Limits for recognition and quantification of impact",
    "Weak global coordination",
  ];

  const solutions = [
    "Tokenizing impact into Impact Products and tokens",
    "Scalable personal recognition system",
    "Network of coordinated action",
  ];

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-white mb-4"
          >
            What is DeCleanup Network?
          </h2>
        </div>

        {/* Content Section - Image and Description Side by Side */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-center mb-12 lg:mb-16">
          {/* Left: Image with Yellow Frame */}
          <div className="w-full md:w-1/2">
            <div className="relative p-4 bg-[#FAFF00] rounded-lg transform hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-[#FAFF00]/20">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <div
                  className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover transform hover:scale-110 transition-transform duration-500"
              style={{
                backgroundImage: "url('/image2.png')",
              }}
            ></div>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 leading-relaxed font-medium">
                DeCleanup Network transforms environmental action into transparent, verifiable digital impact.
              </p>

              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                Your cleanups become tokenized assets that unlock rewards, reputation, and community recognition.
              </p>
            </div>
          </div>
        </div>

        {/* Problem-Solution Section */}
          <div className="mb-8 lg:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Problem Section */}
            <div className="flex flex-col h-full">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-4"
              >
                THE PROBLEM
              </h2>
              <div className="flex flex-col gap-4 flex-1">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-900 rounded-lg border-l-4 border-[#58B12F] flex items-start flex-1"
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-relaxed text-left">
                      {problem}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution Section */}
            <div className="flex flex-col h-full">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-4"
              >
                THE SOLUTION
              </h2>
              <div className="flex flex-col gap-4 flex-1">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 p-6 rounded-lg border-l-4 border-[#FAFF00] flex items-start flex-1"
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-relaxed text-left">
                      {solution}
                    </h3>
            </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
