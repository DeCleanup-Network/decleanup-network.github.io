import React from "react";

export default function TotalImpactSection() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden bg-neutral-950 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-white text-center mb-12 tracking-wide">
          Total Impact
        </h2>

        {/* Diagram: gradient, concentric circles with blinking, icons, overlay */}
        <div className="relative aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 md:aspect-[4/3]">
          {/* Abstract gradient background */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black"
            aria-hidden
          />
          {/* Concentric circles - outer spins, inner circles blink */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-3/4 w-3/4 items-center justify-center rounded-full border border-white/10 animate-[spin_60s_linear_infinite]">
              <div className="flex h-2/3 w-2/3 items-center justify-center rounded-full border-2 border-[#58B12F]/40 animate-pulse">
                <div className="h-1/2 w-1/2 rounded-full border-2 border-[#FAFF00]/40 bg-white/5 backdrop-blur-sm animate-pulse" style={{ animationDuration: "2s" }} />
              </div>
            </div>
          </div>

          {/* Icon Left: Monitoring / Data */}
          <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-transform hover:scale-105 sm:left-6 sm:top-6 sm:h-16 sm:w-16 shadow-[0_0_20px_rgba(88,177,47,0.15)]">
            <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-[#58B12F] sm:h-8 sm:w-8" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </div>

          {/* Icon Right: Verification / Action */}
          <div className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-transform hover:scale-105 sm:right-6 sm:top-6 sm:h-16 sm:w-16 shadow-[0_0_20px_rgba(250,255,0,0.15)]">
            <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-[#FAFF00] sm:h-8 sm:w-8" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* UI overlay: Total Impact - LIVE + stats */}
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/25 bg-neutral-800/95 p-3 shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:right-6 sm:p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-200">Total Impact</span>
                <span className="font-mono text-xs font-semibold text-[#FAFF00]">LIVE</span>
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-xs">
                <span className="text-gray-400"><span className="font-bebas text-[#58B12F]">—</span> Cleanups</span>
                <span className="text-gray-400"><span className="font-bebas text-[#58B12F]">—</span> Countries</span>
                <span className="text-gray-400"><span className="font-bebas text-[#58B12F]">—</span> kg Waste</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
