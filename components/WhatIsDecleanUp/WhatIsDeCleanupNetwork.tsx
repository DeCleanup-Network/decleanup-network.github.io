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

            {/* Placeholder: Community impact (nodes / growth) - top-left area */}
            <div className="absolute left-4 top-4 flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm sm:left-6 sm:top-6 sm:h-24 sm:w-24">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="h-10 w-10 text-[#58B12F]/80 sm:h-12 sm:w-12"
                aria-hidden
              >
                <circle cx="24" cy="24" r="3" fill="currentColor" />
                <circle cx="12" cy="16" r="2" fill="currentColor" opacity="0.7" />
                <circle cx="36" cy="16" r="2" fill="currentColor" opacity="0.7" />
                <circle cx="12" cy="32" r="2" fill="currentColor" opacity="0.7" />
                <circle cx="36" cy="32" r="2" fill="currentColor" opacity="0.7" />
                <path
                  d="M24 21v6M24 27v-6M18 18l6 6M24 24l6-6M18 30l6-6M24 24l-6-6"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  opacity="0.5"
                />
              </svg>
              <span className="sr-only">Community impact visualization</span>
            </div>

            {/* Placeholder: Cleanup done (check + bag) - top-right area */}
            <div className="absolute right-4 top-4 flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm sm:right-6 sm:top-6 sm:h-24 sm:w-24">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="h-10 w-10 text-[#FAFF00]/80 sm:h-12 sm:w-12"
                aria-hidden
              >
                <path
                  d="M18 32l-6-6 2.8-2.8L18 26.4l12.4-12.4L33 16 18 32z"
                  fill="currentColor"
                />
                <path
                  d="M14 20h2v-4c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v4h2v-4c0-3.3-2.7-6-6-6H20c-3.3 0-6 2.7-6 6v4z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.8"
                />
              </svg>
              <span className="sr-only">Cleanup done visualization</span>
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
            <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
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
