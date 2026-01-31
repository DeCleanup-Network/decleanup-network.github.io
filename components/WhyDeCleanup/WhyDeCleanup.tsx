import React from "react";

export default function WhyDeCleanup() {
  return (
    <section className="relative overflow-x-hidden border-t border-white/10 bg-black py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2
          className="mb-8 text-3xl font-normal uppercase leading-tight text-white md:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
        >
          Why DeCleanup Exists
        </h2>
        <p className="text-base leading-relaxed text-gray-400 md:text-lg mb-4">
          Environmental cleanups already happen.
          What&apos;s missing is credible, open, reusable proof that they happened - and tools to coordinate, incentivize, and fund them transparently.
        </p>
        <h2
          className="mb-6 text-2xl font-normal uppercase leading-tight text-white md:text-3xl lg:text-4xl"
          style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
        >
          How DeCleanup Network Works
        </h2>
        <p className="text-base leading-relaxed text-gray-400 md:text-lg mb-6">
          DeCleanup is an SDG-aligned application focused on:
        </p>
        <ul className="text-left max-w-xl mx-auto space-y-3 text-base text-gray-300 md:text-lg">
          <li className="flex items-start gap-3">
            <span className="text-[#58B12F] shrink-0">•</span>
            <span><strong className="text-white">DMRV (Data, Measurement, Reporting, Verification)</strong> for cleanups</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#58B12F] shrink-0">•</span>
            <span><strong className="text-white">Onchain immutability</strong> of cleanup records</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#58B12F] shrink-0">•</span>
            <span><strong className="text-white">Incentives and reputation</strong> for people doing real work</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#58B12F] shrink-0">•</span>
            <span><strong className="text-white">Open coordination and funding</strong> for future cleanups</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
