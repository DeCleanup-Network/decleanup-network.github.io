import React from "react";

const NetworkRoadmapSection = () => {
  const roadmap = [
    {
      phase: "FOUNDATION PHASE",
      description: "initial community partnerships activated",
      version: "DAPP V1",
      features: [
        "BASIC POI SUBMISSION",
        "IMPACT PRODUCTS",
        "POINTS AND IMPACT VALUE",
      ],
    },
    {
      phase: "SYSTEM GROWTH",
      description: "collaboration with regen coordination",
      version: "DAPP V2.1",
      features: [
        "IMPROVED POI SUBMISSION",
        "PERSONAL DASHBOARD",
        "REFERRAL SYSTEM",
        "LEADERBOARD",
      ],
    },
    {
      phase: "ACTIVATION",
      description: "launching global ambassador program",
      version: "DAPP V2.2",
      features: [
        "$DCU TOKEN LAUNCH",
        "STAKING AND LOCKING",
        "COMMUNITY VERIFICATION",
        "IMPACT CIRCLES",
        "INTEGRATION WITH REGEN BAZAAR",
        "MULTICHAIN ROLLOUT",
      ],
    },
    {
      phase: "REGIONAL SCALING",
      description: "multi-region coordination and governance",
      version: "DAPP V3",
      features: [
        "NEW IMPACT PRODUCT LEVELS",
        "GOVERNANCE TOOLS",
        "IMPACT METRICS",
        "MULTICHAIN POAPS",
        "INTEGRATIONS WITH PARTNERS",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16 2xl:py-20 3xl:py-24">
      {/* Header */}
      <div className="text-left mb-8 sm:mb-12 lg:mb-20 2xl:mb-24 3xl:mb-32 lg:bottom-10">
        <h2 className="text-3xl sm:text-4xl sm:ml-4 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-black uppercase text-[#4FA02A] mb-0 leading-tight">
          NETWORK ROADMAP
        </h2>
      </div>

      {/* Desktop Roadmap - Original Style */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6 2xl:gap-8 3xl:gap-12 relative">
        {/* Connecting lines - visible on larger screens */}
        <div className="absolute top-45 left-0 w-full">
          <div className="flex justify-between items-center h-0">
            <div className="w-1/4 h-0.5 bg-[#4FA02A]"></div>
            <div className="w-1/4 h-0.5 bg-[#4FA02A]"></div>
            <div className="w-1/4 h-0.5 bg-[#4FA02A]"></div>
            <div className="w-1/4 h-0.5 bg-[#4FA02A]"></div>
          </div>
        </div>

        {roadmap.map((item, index) => (
          <div key={index} className="relative">
            {/* Connection dot */}
            <div
              className={`absolute top-44 left-2 transform -translate-x-1/2 w-3 h-3 rounded-0 border-2 border-[#FAFF00] z-10 bg-[#FAFF00]`}
            />

            <div className="text-left">
              <h3
                className="text-[#FAFF00] text-4xl sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl uppercase mb-2 leading-tight"
                style={{
                  fontFamily: "Bebas Neue",
                  letterSpacing: "-0.02em",
                  lineHeight: "100%",
                }}
              >
                {item.phase}
              </h3>
              <p
                className="text-[#58B12F] text-lg md:text-3xl lg:text-xl 2xl:text-4xl  font-normal mb-10  leading-tight lowercase md:mb-16"
                style={{ letterSpacing: "-0.03em" }}
              >
                {item.description}
              </p>

              <div
                className={` h-full rounded-xl p-6 2xl:p-4 3xl:p-6 shadow-lg`}
              >
                <h4
                  className="text-[#FAFF00] text-4xl sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl uppercase mb-2 leading-tight"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "100%",
                  }}
                >
                  {item.version}
                </h4>
                <ul
                  className="text-[#58B12F] text-lg lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-normal mb-5 leading-tight lowercase font-family-bebas"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "102%",
                  }}
                >
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="uppercase">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Roadmap */}
      <div className="relative block lg:hidden">
        {/* Vertical connecting line */}
        <div className="absolute left-3 top-6 w-2 h-285 bg-[#4FA02A] z-0"></div>

        <div className="space-y-6 pb-12">
          {/* Point 1 - Foundation Phase */}
          <div className="relative">
            <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
            <div className="ml-8">
              <div className="p-4 shadow-lg">
                <h4
                  className="text-[#FAFF00] text-left text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "100%",
                  }}
                >
                  FOUNDATION PHASE
                </h4>
                <p
                  className="text-[#58B12F] text-left text-lg lg:text-3xl font-normal mb-4 leading-tight lowercase"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "102%",
                  }}
                >
                  initial community partnerships activated
                </p>
              </div>
            </div>
          </div>

          {/* Point 2 - System Growth */}
          <div className="relative">
            <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
            <div className="ml-8">
              <div className="p-4 shadow-lg">
                <h4
                  className="text-[#FAFF00] text-left text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "100%",
                  }}
                >
                  SYSTEM GROWTH
                </h4>
                <p
                  className="text-[#58B12F] text-left text-lg lg:text-3xl font-normal mb-4 leading-tight lowercase"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "102%",
                  }}
                >
                  collaboration with regen coordination
                </p>
              </div>
            </div>
          </div>

          {/* Point 3 - Activation */}
          <div className="relative">
            <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
            <div className="ml-8">
              <div className="p-4 shadow-lg">
                <h4
                  className="text-[#FAFF00] text-left text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "100%",
                  }}
                >
                  ACTIVATION
                </h4>
                <p
                  className="text-[#58B12F] text-left text-lg lg:text-3xl font-normal mb-4 leading-tight lowercase"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "102%",
                  }}
                >
                  launching global ambassador program
                </p>
              </div>
            </div>
          </div>

          {/* Point 4 - Regional Scaling */}
          <div className="relative">
            <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
            <div className="ml-8">
              <div className="p-4 shadow-lg">
                <h4
                  className="text-[#FAFF00] text-left text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "100%",
                  }}
                >
                  REGIONAL SCALING
                </h4>
                <p
                  className="text-[#58B12F] text-left text-lg lg:text-3xl font-normal mb-4 leading-tight lowercase"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "102%",
                  }}
                >
                  multi-region coordination and governance
                </p>
              </div>
            </div>
          </div>

          {/* Point 5 - DAPP V1 */}
          <div className="relative">
            <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
            <div className="ml-8">
              <div className="rounded-lg p-4 shadow-lg">
                <h4
                  className="text-[#FAFF00] text-left text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "100%",
                  }}
                >
                  DAPP V1
                </h4>
                <ul
                  className="text-[#58B12F] text-left text-lg lg:text-3xl font-normal mb-4 leading-tight lowercase"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "102%",
                  }}
                >
                  <li className="uppercase">BASIC POI SUBMISSION</li>
                  <li className="uppercase">IMPACT PRODUCTS</li>
                  <li className="uppercase">POINTS AND IMPACT VALUE</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Point 6 - DAPP V2.1 */}
          <div className="relative">
            <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
            <div className="ml-8">
              <div className="rounded-lg p-4 shadow-lg">
                <h4
                  className="text-[#FAFF00] text-4xl text-left sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "100%",
                  }}
                >
                  DAPP V2.1
                </h4>
                <ul
                  className="text-[#58B12F] text-lg text-left lg:text-3xl font-normal mb-4 leading-tight lowercase"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "102%",
                  }}
                >
                  <li className="uppercase">IMPROVED POI SUBMISSION</li>
                  <li className="uppercase">PERSONAL DASHBOARD</li>
                  <li className="uppercase">REFERRAL SYSTEM</li>
                  <li className="uppercase">LEADERBOARD</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Point 7 - DAPP V2.2 */}
          <div className="relative">
            <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
            <div className="ml-8">
              <div className="rounded-lg p-4 shadow-lg">
                <h4
                  className="text-[#FAFF00] text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 text-left leading-tight"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "100%",
                  }}
                >
                  DAPP V2.2
                </h4>
                <ul
                  className="text-[#58B12F] text-lg lg:text-3xl font-normal mb-4 leading-tight text-left"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "102%",
                  }}
                >
                  <li className="uppercase">$DCU TOKEN LAUNCH</li>
                  <li className="uppercase">STAKING AND LOCKING</li>
                  <li className="uppercase">COMMUNITY VERIFICATION</li>
                  <li className="uppercase">IMPACT CIRCLES</li>
                  <li className="uppercase">INTEGRATION WITH REGEN BAZAAR</li>
                  <li className="uppercase">MULTICHAIN ROLLOUT</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Point 8 - DAPP V3 */}
          <div className="relative">
            <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
            <div className="ml-8">
              <div className="rounded-lg p-4 shadow-lg">
                <h4
                  className="text-[#FAFF00] text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight text-left"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "100%",
                  }}
                >
                  DAPP V3
                </h4>
                <ul
                  className="text-[#58B12F] text-lg lg:text-3xl font-normal mb-4 leading-tight lowercase text-left"
                  style={{
                    fontFamily: "Bebas Neue",
                    letterSpacing: "-0.02em",
                    lineHeight: "102%",
                  }}
                >
                  <li className="uppercase">NEW IMPACT PRODUCT LEVELS</li>
                  <li className="uppercase">GOVERNANCE TOOLS</li>
                  <li className="uppercase">IMPACT METRICS</li>
                  <li className="uppercase">MULTICHAIN POAPS</li>
                  <li className="uppercase">INTEGRATIONS WITH PARTNERS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkRoadmapSection;
