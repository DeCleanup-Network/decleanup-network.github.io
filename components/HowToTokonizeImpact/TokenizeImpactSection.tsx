import React from "react";
import Image from "next/image";

const steps = [
  { number: "1.", title: "Find your spot" },
  { number: "2.", title: "Do the work" },
  { number: "3.", title: "Photograph the result" },
  { number: "4.", title: "Earn your reward" },
];

// Placeholder for real cleanup before/after photo
const CLEANUP_IMAGE = "/images/impact_verification.png";

const TokenizeImpactSection = () => {
  return (
    <div className="w-full py-16 md:py-24 overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - increased spacing */}
        <div className="mb-12 text-center md:mb-16">
          <h2
            className="mb-4 text-3xl font-normal uppercase leading-tight text-white md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
          >
            How Your Cleanup Becomes Verified Impact
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Four simple steps from picking up litter to earning recognition.
          </p>
        </div>

        {/* Content: Visual card (left) + 3-step flow (right); mobile: full-width stacked, steps stretch */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-12 lg:gap-16 items-stretch">
          {/* Left: Card with cleanup photo + floating verification badge */}
          <div className="w-full min-w-0 md:w-1/2 shrink-0">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 transition-all duration-300 hover:border-[#58B12F]/30 hover:shadow-[0_0_30px_rgba(88,177,47,0.1)]">
              {/* Floating badge: Photo Verified */}
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/90 px-3 py-1.5 text-xs text-white shadow-lg animate-pulse" style={{ animationDuration: "2.5s" }}>
                <span aria-hidden>✔</span>
                <span>Photo Verified</span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/40">
                <Image
                  src={CLEANUP_IMAGE}
                  alt="Cleanup result – verified impact"
                  width={600}
                  height={450}
                  loading="lazy"
                  className="h-full w-full object-cover filter contrast-110 saturate-[0.85] brightness-90"
                />
              </div>
              {/* Optional second badge: Approved Impact */}
              <div className="mt-3 flex items-center gap-2 text-xs text-[#58B12F]">
                <span>✔ Approved Impact</span>
              </div>
            </div>
          </div>

          {/* Right: 3-step vertical flow - full width on mobile, stretched */}
          <div className="flex w-full min-w-0 flex-1 flex-col gap-4 sm:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-full min-w-0 rounded-2xl border border-gray-800 bg-gray-900/80 p-4 sm:p-6 transition-all duration-300 hover:border-[#58B12F]/30 hover:shadow-[0_0_20px_rgba(88,177,47,0.08)]"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-semibold text-[#FAFF00] md:text-3xl" style={{ fontWeight: 500 }}>
                    {step.number}
                  </div>
                  <h3
                    className="text-lg font-medium uppercase tracking-wide text-white md:text-xl"
                    style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontWeight: 500 }}
                  >
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenizeImpactSection;
