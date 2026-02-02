"use client";

import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#58B12F]/80 font-semibold text-sm md:text-base transition-colors duration-200 group"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-white mb-4">
            Developer Documentation
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Technical guide for DeCleanup Rewards
          </p>
        </div>

        {/* For those who build and coordinate impact - intro before technical docs */}
        <div className="mb-16 max-w-5xl mx-auto text-left space-y-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              For those who build and coordinate impact
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
              Open infrastructure for transparent, scalable environmental coordination
            </p>
          </div>

          {/* The Problem - Visual Cards */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">The Problem</h3>
            </div>

            <p className="text-gray-400 text-sm mb-4">Impact coordinators struggle with:</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { icon: "🧩", text: "Fragmented data" },
                { icon: "📝", text: "Manual reporting" },
                { icon: "🔒", text: "Trust bottlenecks" },
                { icon: "🏗️", text: "No shared infrastructure for verification" },
                { icon: "⚖️", text: "Hard-to-govern funding decisions" }
              ].map((problem, idx) => (
                <div
                  key={idx}
                  className="group relative p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
                  style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both` }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{problem.icon}</span>
                    <p className="text-sm text-gray-300 leading-relaxed">{problem.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Arrow Transition */}
          <div className="flex justify-center py-4">
            <svg className="w-12 h-12 text-[#58B12F] animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* What DeCleanup Provides */}
          <div className="rounded-2xl border border-[#58B12F]/30 bg-gradient-to-br from-[#58B12F]/10 to-green-600/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#58B12F]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">What DeCleanup Provides</h3>
            </div>

            <p className="text-gray-300 text-sm mb-6">
              DeCleanup is <span className="text-[#58B12F] font-semibold">open DMRV infrastructure</span>, not a closed platform. You can:
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
                  text: "Use standardized cleanup data"
                },
                {
                  icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                  text: "Participate in governance"
                },
                {
                  icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
                  text: "Help define verification rules"
                },
                {
                  icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  text: "Coordinate funding transparently"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#58B12F]/50 transition-all duration-300 group"
                  style={{ animation: `slideInRight 0.5s ease-out ${idx * 0.1}s both` }}
                >
                  <div className="text-[#58B12F] shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className="text-sm text-gray-200">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DMRV as Infrastructure */}
          <div className="rounded-2xl border border-cyan-500/30 bg-gray-900/90 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">DMRV as Infrastructure</h3>
            </div>

            <p className="text-gray-300 text-sm mb-6">We treat DMRV as a <span className="text-cyan-400 font-semibold">public good layer</span>:</p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { icon: "🔗", text: "Cleanup records are immutable", color: "from-blue-500/10 to-blue-600/5" },
                { icon: "🌐", text: "Data structures are open and interoperable", color: "from-purple-500/10 to-purple-600/5" },
                { icon: "🆓", text: "No dependency on proprietary standards", color: "from-green-500/10 to-green-600/5" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 text-center`}
                  style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.15}s both` }}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Compatible With */}
            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-3 font-medium">Compatible with:</p>
              <div className="flex flex-wrap gap-2">
                {["SDG reporting", "Regen ecosystems", "Future certification layers"].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Aligns With */}
            <div>
              <p className="text-sm text-gray-400 mb-3 font-medium">This aligns with:</p>
              <div className="flex flex-wrap gap-2">
                {["Regen community tooling", "Open impact accounting systems", "Governance & coordination"].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-[#58B12F]/10 border border-[#58B12F]/30 text-[#58B12F] text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Governance Tools */}
          <div className="rounded-2xl border border-purple-500/30 bg-gray-900/90 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Governance Tools Live on Celo</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: "💰",
                  title: "$cDCU Token",
                  text: "Used for proposals and voting"
                },
                {
                  icon: "🌱",
                  title: "Gardens.fund",
                  text: "Coordination platform",
                  link: "https://gardens.fund"
                },
                {
                  icon: "🗳️",
                  title: "Community Decides",
                  text: "Verification rules, funding priorities, new pools"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                  style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both` }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="text-white font-semibold mb-2">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-[#FAFF00] underline">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h4>
                  <p className="text-sm text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Funding Pools */}
            <div>
              <h4 className="text-base font-medium text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Example Funding Pools
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { name: "Equipment Pool", badge: "First Pool", sponsor: "Ethereum for the World" },
                  { name: "Local Organizer Support Pool" },
                  { name: "Logistics & Transport Pool" },
                  { name: "Data & Research Pool" },
                  { name: "Experimental / Pilot Pool" }
                ].map((pool, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm font-medium text-white">{pool.name}</p>
                      {pool.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-bold">
                          {pool.badge}
                        </span>
                      )}
                    </div>
                    {pool.sponsor && (
                      <p className="text-xs text-gray-400">Sponsored by {pool.sponsor}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div className="rounded-2xl border border-[#FAFF00]/30 bg-gradient-to-br from-[#FAFF00]/10 to-yellow-600/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">The Outcome</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                {
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  text: "Coordinators spend less time proving impact",
                  color: "text-blue-400"
                },
                {
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                  text: "Communities self-govern funding",
                  color: "text-purple-400"
                },
                {
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
                  text: "Impact data becomes reusable infrastructure",
                  color: "text-green-400"
                },
                {
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                  text: "Cleanups scale without centralized control",
                  color: "text-yellow-400"
                }
              ].map((outcome, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                  style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both` }}
                >
                  <div className={`${outcome.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                    {outcome.icon}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{outcome.text}</p>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <div className="text-center pt-4 border-t border-white/10">
              <p className="text-sm text-gray-400 italic">
                <span className="text-[#FAFF00] font-semibold not-italic">Coordination layer first.</span>
              </p>
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      </div>
    </main>
  );
}
