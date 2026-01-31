import React from "react";

export default function WhatIsDeCleanupNetwork() {
  return (
    <section className="relative overflow-x-hidden py-16 bg-black md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* LEFT - Visual DMRV: gradient, concentric circles, placeholders, overlay */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 md:aspect-square lg:aspect-[4/3]">
            {/* Abstract gradient background */}
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black"
              aria-hidden
            />
            {/* Concentric circles animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-3/4 w-3/4 items-center justify-center rounded-full border border-white/10 animate-[spin_60s_linear_infinite]">
                <div className="flex h-2/3 w-2/3 items-center justify-center rounded-full border border-[#58B12F]/30">
                  <div className="h-1/2 w-1/2 rounded-full border border-[#FAFF00]/30 bg-white/5 backdrop-blur-sm" />
                </div>
              </div>
            </div>

            {/* Icon Left: Monitoring / Data */}
            <div className="absolute left-4 top-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-transform hover:scale-105 sm:left-6 sm:top-6 sm:h-20 sm:w-20 shadow-[0_0_20px_rgba(88,177,47,0.15)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-8 w-8 text-[#58B12F] sm:h-10 sm:w-10"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </div>

            {/* Icon Right: Verification / Action */}
            <div className="absolute right-4 top-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-transform hover:scale-105 sm:right-6 sm:top-6 sm:h-20 sm:w-20 shadow-[0_0_20px_rgba(250,255,0,0.15)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-8 w-8 text-[#FAFF00] sm:h-10 sm:w-10"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* UI overlay: Total Impact - LIVE (lighter so label and border are visible) */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/25 bg-neutral-800/95 p-3 shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:right-6 sm:p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-200">
                  Total Impact
                </span>
                <span className="font-mono text-xs font-semibold text-[#FAFF00]">LIVE</span>
              </div>
            </div>
          </div>

          {/* RIGHT - DMRV Explanation */}
          <div className="min-w-0">
            <h2
              className="mb-4 text-3xl font-normal uppercase leading-tight text-white md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
            >
              DMRV: Digital Monitoring, Reporting & Verification
            </h2>
            <p className="mb-6 text-gray-400 sm:mb-8">
              DeCleanup provides an open-source DMRV system that turns real-world
              cleanup actions into trusted, auditable digital data.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
                <h4 className="mb-1 text-sm font-medium text-white">NGOs</h4>
                <p className="text-xs text-gray-400">
                  Transparent impact verification & reporting
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
                <h4 className="mb-1 text-sm font-medium text-white">
                  Corporates
                </h4>
                <p className="text-xs text-gray-400">
                  ESG data & sponsored cleanups
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
                <h4 className="mb-1 text-sm font-medium text-white">Sponsors</h4>
                <p className="text-xs text-gray-400">
                  Fund & track large-scale actions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
