import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coordinate & Scale Impact | DeCleanup Rewards",
  description:
    "Open infrastructure for transparent, scalable environmental coordination. For those who build and coordinate impact.",
};

const problemItems = [
  "Fragmented data",
  "Manual reporting",
  "Trust bottlenecks",
  "No shared infrastructure for verification",
  "Hard-to-govern funding decisions",
];

const providesItems = [
  "Use standardized cleanup data",
  "Participate in governance",
  "Help define verification rules",
  "Coordinate funding transparently",
];

const compatibleWith = ["SDG reporting", "Regen ecosystems", "Future certification layers"];

const alignsWith = [
  "Regen community tooling",
  "Open impact accounting systems",
  "Governance & coordination",
];

const governanceItems = [
  { title: "$cDCU Token", desc: "Used for proposals and voting" },
  { title: "Gardens.fund", desc: "Coordination platform" },
  { title: "Community Decides", desc: "Verification rules, funding priorities, new pools" },
];

const fundingPools = [
  { name: "First Pool", detail: "Sponsored by Ethereum for the World", status: "coming soon (not active)" },
  { name: "Equipment Pool", detail: "" },
  { name: "Local Organizer Support Pool", detail: "" },
  { name: "Logistics & Transport Pool", detail: "" },
  { name: "Data & Research Pool", detail: "" },
  { name: "Experimental / Pilot Pool", detail: "" },
];

const outcomes = [
  "Coordinators spend less time proving impact",
  "Communities self-govern funding",
  "Impact data becomes reusable infrastructure",
  "Cleanups scale without centralized control",
];

export default function CoordinatePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#58B12F] selection:text-black">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#FAFF00] font-semibold text-sm md:text-base transition-colors duration-200 group"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas uppercase text-white mb-6 tracking-wide">
            Coordinate & Scale Impact
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-2">
            For those who build and coordinate impact
          </p>
          <p className="text-xl text-[#58B12F] font-medium">
            Open infrastructure for transparent, scalable environmental coordination.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* The Problem */}
          <section>
            <h2 className="text-2xl font-bebas text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </span>
              The Problem
            </h2>
            <p className="text-gray-200 mb-4">Impact coordinators struggle with:</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {problemItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#58B12F] shrink-0">•</span>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* What DeCleanup Provides */}
          <section>
            <h2 className="text-2xl font-bebas text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#58B12F]/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              What DeCleanup Provides
            </h2>
            <p className="text-gray-200 mb-4">
              DeCleanup is open DMRV infrastructure, not a closed platform. You can:
            </p>
            <ul className="space-y-2">
              {providesItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-200">
                  <span className="text-[#58B12F]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* DMRV as Infrastructure */}
          <section>
            <h2 className="text-2xl font-bebas text-white mb-6">DMRV as Infrastructure</h2>
            <p className="text-gray-200 mb-6">
              We treat DMRV as a public good layer:
            </p>
            <ul className="space-y-2 text-gray-200 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[#58B12F]">•</span>
                Cleanup records are immutable
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#58B12F]">•</span>
                Data structures are open and interoperable
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#58B12F]">•</span>
                No dependency on proprietary standards
              </li>
            </ul>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl border border-[#58B12F]/30 bg-gray-900/80">
                <h3 className="text-[#58B12F] font-semibold mb-3">Compatible with</h3>
                <ul className="space-y-1 text-gray-200 text-sm">
                  {compatibleWith.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-[#58B12F]/30 bg-gray-900/80">
                <h3 className="text-[#58B12F] font-semibold mb-3">This aligns with</h3>
                <ul className="space-y-1 text-gray-200 text-sm">
                  {alignsWith.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Governance Tools Live on Celo */}
          <section>
            <h2 className="text-2xl font-bebas text-white mb-6">Governance Tools Live on Celo</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {governanceItems.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-[#58B12F]/30 bg-gray-900/80">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Example Funding Pools */}
          <section>
            <h2 className="text-2xl font-bebas text-white mb-6">Example Funding Pools</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {fundingPools.map((pool, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-white font-medium">{pool.name}</span>
                    {pool.status && (
                      <span className="text-xs text-gray-400 shrink-0">{pool.status}</span>
                    )}
                  </div>
                  {pool.detail && <p className="text-sm text-gray-400 mt-1">{pool.detail}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* The Outcome */}
          <section>
            <h2 className="text-2xl font-bebas text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#FAFF00]/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#FAFF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              The Outcome
            </h2>
            <ol className="space-y-4">
              {outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#58B12F] text-black font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-200">{outcome}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* CTA to Litepaper */}
          <section className="text-center pt-8 border-t border-white/10">
            <p className="text-gray-200 mb-4">
              For full governance and token details, see the litepaper.
            </p>
            <Link
              href="/litepaper#governance"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#58B12F] text-black font-semibold hover:bg-[#58B12F]/90 transition"
            >
              Read the Litepaper
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
