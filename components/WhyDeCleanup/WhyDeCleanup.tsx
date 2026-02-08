"use client";
import React from "react";

export default function WhyDeCleanup() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "DMRV",
      subtitle: "Data, Measurement, Reporting, Verification",
      description: "Credible proof of environmental impact",
      accentColor: "text-[#58B12F]"
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Onchain Immutability",
      subtitle: "Permanent Records",
      description: "Blockchain-verified cleanup history",
      accentColor: "text-[#58B12F]"
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Incentives & Reputation",
      subtitle: "Reward Real Work",
      description: "Earn recognition for environmental action",
      accentColor: "text-[#58B12F]"
    },
    {
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Open Coordination",
      subtitle: "Transparent Funding",
      description: "Community-driven cleanup initiatives",
      accentColor: "text-[#FAFF00]"
    }
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-16 md:py-24">
      {/* Subtle brand tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#58B12F]/[0.03] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="mb-6 text-3xl font-normal uppercase leading-tight text-gray-200 md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
          >
            Why DeCleanup Exists
          </h2>

          {/* Visual Problem → Solution Flow */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-4 items-center">
              {/* Problem */}
              <div className="group relative p-6 rounded-2xl bg-white/[0.04] border border-white/10 transition-all duration-300 hover:border-white/20">
                <div className="text-gray-300 mb-3 flex justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-gray-300 font-semibold text-lg mb-2">The Problem</h3>
                <p className="text-gray-300 text-sm">Cleanups happen, but there&apos;s no credible proof or transparent coordination</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <svg className="w-16 h-8 text-[#58B12F]/70" viewBox="0 0 64 32" fill="none">
                  <path d="M2 16h56m0 0l-12-12m12 12l-12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Solution */}
              <div className="group relative p-6 rounded-2xl bg-[#58B12F]/[0.08] border border-[#58B12F]/20 transition-all duration-300 hover:border-[#58B12F]/30">
                <div className="text-[#58B12F] mb-3 flex justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-200 font-semibold text-lg mb-2">The Solution</h3>
                <p className="text-gray-300 text-sm">Verifiable, incentivized, and transparently funded environmental action</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl bg-white/[0.04] border border-white/10 transition-all duration-300 hover:border-[#58B12F]/20 overflow-hidden">
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`${feature.accentColor} mb-4 opacity-90`}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-200 font-semibold text-xl mb-1 tracking-wide">
                    {feature.title}
                  </h3>

                  {/* Subtitle */}
                  <p className={`${feature.accentColor} text-sm font-medium mb-3 opacity-90`}>
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            <span className="text-[#58B12F] font-semibold">SDG-aligned</span> technology for a cleaner, more transparent future
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
