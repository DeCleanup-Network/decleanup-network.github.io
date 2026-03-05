"use client";
import React from "react";

export default function WhyDeCleanup() {
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
      </div>
    </section>
  );
}
