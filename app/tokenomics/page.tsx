import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DeCleanup Network Tokenomics",
  description: "The dual-token model powering DeCleanup's global impact ecosystem",
};

export default function TokenomicsPage() {
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
            Tokenomics
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            The dual-token model powering DeCleanup&apos;s global impact ecosystem.
          </p>
        </div>

        {/* For those who fund real-world impact - intro before token details */}
        <div className="mb-16 max-w-5xl mx-auto text-left space-y-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              For those who fund real-world impact
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
              Verifiable impact infrastructure, not speculation
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

            <p className="text-gray-400 text-sm mb-4">Funders want:</p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: "✅", text: "Proof that money led to real action" },
                { icon: "👁️", text: "Transparency without heavy overhead" },
                { icon: "📈", text: "Repeatable, scalable funding models" },
                { icon: "🔍", text: "Less trust, more verification" }
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

          {/* What DeCleanup Enables */}
          <div className="rounded-2xl border border-[#58B12F]/30 bg-gradient-to-br from-[#58B12F]/10 to-green-600/5 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#58B12F]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">What DeCleanup Enables</h3>
            </div>

            <p className="text-gray-300 text-sm mb-6">
              We don't promise <span className="line-through text-gray-500">financial returns first</span>. We offer <span className="text-[#58B12F] font-semibold">verifiable impact infrastructure</span>. Funders can:
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                  text: "Fund cleanup pools"
                },
                {
                  icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  text: "See immutable proof of execution"
                },
                {
                  icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                  text: "Support open verification infrastructure"
                },
                {
                  icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  text: "Hold tokens connected to real-world activity"
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

          {/* DMRV from Funder's Perspective */}
          <div className="rounded-2xl border border-cyan-500/30 bg-gray-900/90 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">DMRV from a Funder's Perspective</h3>
            </div>

            {/* Flow Diagram */}
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  <span className="text-sm font-medium text-white">Funds flow</span>
                </div>
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🧹</span>
                  <span className="text-sm font-medium text-white">Cleanups happen</span>
                </div>
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📋</span>
                  <span className="text-sm font-medium text-white">Proof published</span>
                </div>
              </div>
              <p className="text-xs text-cyan-300 mt-3 text-center">Records are tamper-resistant</p>
            </div>

            {/* Data Capabilities */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-400 mb-3 font-medium">Data can be:</p>
                <div className="space-y-2">
                  {["Audited", "Aggregated", "Reused across reports and ecosystems"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <p className="text-sm text-gray-400 mb-3 font-medium">This reduces:</p>
                <div className="grid sm:grid-cols-3 gap-2">
                  {[
                    { icon: "🚫", text: "Greenwashing risk" },
                    { icon: "💸", text: "Reporting costs" },
                    { icon: "🤝", text: "Trust-based claims" }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 text-center"
                    >
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <p className="text-xs text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
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

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  text: "Funding tied to verifiable action",
                  color: "text-green-400"
                },
                {
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
                  text: "Better accountability",
                  color: "text-blue-400"
                },
                {
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                  text: "Open infrastructure worth supporting",
                  color: "text-purple-400"
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

            {/* Taglines */}
            <div className="space-y-3 text-center pt-4 border-t border-white/10">
              <p className="text-sm text-gray-400 italic">
                A <span className="text-[#FAFF00] font-semibold not-italic">base layer</span> for future impact finance
              </p>
              <p className="text-lg font-bold text-[#58B12F]">
                Fund what you can verify.
              </p>
            </div>
          </div>
        </div>

        {/* Expandable: Dive into tokenomics */}
        <details className="group mb-12 max-w-3xl mx-auto">
          <summary className="list-none cursor-pointer rounded-xl border border-[#58B12F]/40 bg-[#58B12F]/10 px-6 py-4 text-center font-medium text-white hover:bg-[#58B12F]/20 hover:border-[#58B12F]/60 transition-colors flex items-center justify-center gap-2 [&::-webkit-details-marker]:hidden">
            <span>Dive into tokenomics</span>
            <svg className="w-5 h-5 text-[#58B12F] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="mt-6 pt-6 border-t border-white/10">
            {/* SECTION 1 - TWO-TOKEN OVERVIEW */}
            <section className="mb-12 md:mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 - $bDCU - Base */}
                <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg flex flex-col h-full">
                  <h2
                    className="text-2xl md:text-3xl font-medium text-white mb-2 normal-case"
                    style={{ fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif' }}
                  >
                    BASE TOKEN: $bDCU
                  </h2>
                  <p className="text-base md:text-lg text-gray-300 mb-6">
                    The &quot;action token.&quot; Used on Base for:
                  </p>
                  <ul className="space-y-3 text-base md:text-lg text-gray-300 mb-6 flex-grow">
                    <li className="flex items-start">
                      <span className="text-[#58B12F] mr-2">•</span>
                      <span>cleanup rewards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#58B12F] mr-2">•</span>
                      <span>streaks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#58B12F] mr-2">•</span>
                      <span>referrals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#58B12F] mr-2">•</span>
                      <span>verifier staking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#58B12F] mr-2">•</span>
                      <span>simple incentives</span>
                    </li>
                  </ul>
                  <a
                    href="https://basescan.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-6 py-3 bg-[#58B12F] hover:bg-[#58B12F]/80 text-black font-semibold rounded-lg transition-colors duration-200"
                  >
                    View on Base
                  </a>
                </div>

                {/* Card 2 - $cDCU - Celo */}
                <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg flex flex-col h-full">
                  <h2
                    className="text-2xl md:text-3xl font-medium text-white mb-2 normal-case"
                    style={{ fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif' }}
                  >
                    CELO TOKEN: $cDCU
                  </h2>
                  <p className="text-base md:text-lg text-gray-300 mb-6">
                    Reputation, governance & advanced utilities
                  </p>
                  <ul className="space-y-3 text-base md:text-lg text-gray-300 mb-6 flex-grow">
                    <li className="flex items-start">
                      <span className="text-[#FAFF00] mr-2">•</span>
                      <span>Earned through verified cleanups in the Celo dApp</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FAFF00] mr-2">•</span>
                      <span>Non-tradable by design (reputation-linked)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FAFF00] mr-2">•</span>
                      <span>Used for governance via Gardens.fund</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FAFF00] mr-2">•</span>
                      <span>Stake to access Verifier roles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FAFF00] mr-2">•</span>
                      <span>Required for streaks, dashboard, analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FAFF00] mr-2">•</span>
                      <span>Powers the Celo ReFi + governance layer</span>
                    </li>
                  </ul>
                  <button
                    disabled
                    className="inline-block w-full text-center px-6 py-3 bg-gray-700 text-gray-400 font-semibold rounded-lg cursor-not-allowed opacity-50"
                  >
                    View Celo dApp (inactive)
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION 2 - TOKEN COMPARISON TABLE */}
            <section className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-8 text-center">
                Token Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#58B12F]">
                      <th className="text-left py-4 px-4 text-xl font-normal uppercase text-white"></th>
                      <th
                        className="text-center py-4 px-4 text-xl font-medium text-[#58B12F] normal-case"
                        style={{ fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif' }}
                      >
                        $bDCU (Base)
                      </th>
                      <th
                        className="text-center py-4 px-4 text-xl font-medium text-[#FAFF00] normal-case"
                        style={{ fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif' }}
                      >
                        $cDCU (Celo)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-base md:text-lg text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 font-semibold text-white">Chain</td>
                      <td className="py-4 px-4 text-center">Base</td>
                      <td className="py-4 px-4 text-center">Celo</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 font-semibold text-white">Type</td>
                      <td className="py-4 px-4 text-center">Liquid ERC-20</td>
                      <td className="py-4 px-4 text-center">Reputation + Governance</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 font-semibold text-white">Transferable</td>
                      <td className="py-4 px-4 text-center">Yes</td>
                      <td className="py-4 px-4 text-center">Non-tradable</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 font-semibold text-white">Primary Use</td>
                      <td className="py-4 px-4 text-center">Fast incentives</td>
                      <td className="py-4 px-4 text-center">Verified impact + governance</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 font-semibold text-white">Earned From</td>
                      <td className="py-4 px-4 text-center">Mini app cleanups</td>
                      <td className="py-4 px-4 text-center">Full dApp cleanups</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 font-semibold text-white">Staking Purpose</td>
                      <td className="py-4 px-4 text-center">Verifier access</td>
                      <td className="py-4 px-4 text-center">Verifier access + governance</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 font-semibold text-white">Governance</td>
                      <td className="py-4 px-4 text-center">No</td>
                      <td className="py-4 px-4 text-center">Yes (Gardens.fund)</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 font-semibold text-white">Hypercerts</td>
                      <td className="py-4 px-4 text-center">No</td>
                      <td className="py-4 px-4 text-center">Yes (every 10 cleanups)</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 font-semibold text-white">Market</td>
                      <td className="py-4 px-4 text-center">Tradable</td>
                      <td className="py-4 px-4 text-center">Non-tradable</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-4 font-semibold text-white">Total Supply</td>
                      <td className="py-4 px-4 text-center">TBA</td>
                      <td className="py-4 px-4 text-center">10,000,000 fixed supply</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3 - IMPACT SYSTEM CARDS */}
            <section className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-8 text-center">
                Impact System
              </h2>
              <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
                {/* Card A - Impact Products */}
                <div className="bg-gray-900 border-t-4 border-[#58B12F] p-6 rounded-lg min-w-[280px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink">
                  <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                    Impact Products
                  </h3>
                  <ul className="space-y-3 text-base md:text-lg text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#58B12F] mr-2">•</span>
                      <span>Dynamic NFTs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#58B12F] mr-2">•</span>
                      <span>Level up with each cleanup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#58B12F] mr-2">•</span>
                      <span>Track long-term environmental history</span>
                    </li>
                  </ul>
                </div>

                {/* Card B - Verifier System */}
                <div className="bg-gray-900 border-t-4 border-[#FAFF00] p-6 rounded-lg min-w-[280px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink">
                  <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                    Verifier System
                  </h3>
                  <ul className="space-y-3 text-base md:text-lg text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#FAFF00] mr-2">•</span>
                      <span>Stake $bDCU or $cDCU to join</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FAFF00] mr-2">•</span>
                      <span>Review Proof-of-Impact submissions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FAFF00] mr-2">•</span>
                      <span>Earn verifier rewards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FAFF00] mr-2">•</span>
                      <span>Slashing protects integrity</span>
                    </li>
                  </ul>
                </div>

                {/* Card C - Hypercerts */}
                <div className="bg-gray-900 border-t-4 border-[#58B12F] p-6 rounded-lg min-w-[280px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink">
                  <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                    Hypercerts
                  </h3>
                  <ul className="space-y-3 text-base md:text-lg text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#58B12F] mr-2">•</span>
                      <span>Minted after every 10 verified cleanups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#58B12F] mr-2">•</span>
                      <span>Permanent ERC-1155 impact certificate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#58B12F] mr-2">•</span>
                      <span>Used for grants, ESG reporting, identity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 4 - TOKEN LIFECYCLE */}
            <section className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-8 text-center">
                Token Lifecycle
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* $bDCU Lifecycle */}
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-medium text-[#58B12F] mb-6 normal-case"
                    style={{ fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif' }}
                  >
                    $bDCU Lifecycle
                  </h3>
                  <div className="relative pl-8">
                    {/* Vertical connector line */}
                    <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#58B12F] opacity-30"></div>

                    <div className="space-y-6">
                      <div className="relative">
                        <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#58B12F] border-2 border-black"></div>
                        <div className="pl-4">
                          <div className="text-lg font-semibold text-white mb-1">1 - Earn through the Base mini app</div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#58B12F] border-2 border-black"></div>
                        <div className="pl-4">
                          <div className="text-lg font-semibold text-white mb-1">2 - Stake to become a Verifier</div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#58B12F] border-2 border-black"></div>
                        <div className="pl-4">
                          <div className="text-lg font-semibold text-white mb-1">3 - Trade freely on Base DEXes</div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#58B12F] border-2 border-black"></div>
                        <div className="pl-4">
                          <div className="text-lg font-semibold text-white mb-1">4 - Participate in Base-side campaigns</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* $cDCU Lifecycle */}
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-medium text-[#FAFF00] mb-6 normal-case"
                    style={{ fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif' }}
                  >
                    $cDCU Lifecycle
                  </h3>
                  <div className="relative pl-8">
                    {/* Vertical connector line */}
                    <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#FAFF00] opacity-30"></div>

                    <div className="space-y-6">
                      <div className="relative">
                        <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#FAFF00] border-2 border-black"></div>
                        <div className="pl-4">
                          <div className="text-lg font-semibold text-white mb-1">1 - Earn through verified cleanups</div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#FAFF00] border-2 border-black"></div>
                        <div className="pl-4">
                          <div className="text-lg font-semibold text-white mb-1">2 - Stake for governance and Verifier role</div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#FAFF00] border-2 border-black"></div>
                        <div className="pl-4">
                          <div className="text-lg font-semibold text-white mb-1">3 - Grow Impact Product reputation</div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#FAFF00] border-2 border-black"></div>
                        <div className="pl-4">
                          <div className="text-lg font-semibold text-white mb-1">4 - Vote on proposals through Gardens.fund</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5 - $bDCU SUPPLY & ALLOCATION */}
            <section className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-4 text-center">
                supply and allocation.
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-center text-gray-300 mb-8">
                $bDCU: total supply TBA
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Circulating Supply - 85%
                  </h3>
                  <p className="text-base text-gray-300">
                    85% of the total supply circulates immediately
                  </p>
                </div>

                <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Clanker Vault - 15%
                  </h3>
                  <p className="text-base text-gray-300">
                    15% of supply is held in the Clanker Vault for burns, ecosystem rewards, and liquidity stabilization
                  </p>
                </div>
              </div>

              <p className="text-xl md:text-2xl font-semibold text-center text-gray-300 mb-8 mt-8">
                $cDCU: total supply 10,000,000
              </p>
            </section>

            {/* SECTION 6 - $cDCU SUPPLY & ALLOCATION */}
            <section className="mb-12 md:mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Staking & Verifier Rewards - 35%
                  </h3>
                  <p className="text-base text-gray-300">
                    Supports long-term staking and review system
                  </p>
                </div>

                <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Cleanup Campaign Incentives - 25%
                  </h3>
                  <p className="text-base text-gray-300">
                    Fuels Impact Circles, leaderboards and global events
                  </p>
                </div>

                <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Public Distribution - 20%
                  </h3>
                  <p className="text-base text-gray-300">
                    Onboarding users through controlled vesting
                  </p>
                </div>

                <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Team & Development - 10%
                  </h3>
                  <p className="text-base text-gray-300">
                    Multi-year vesting for stability and alignment
                  </p>
                </div>

                <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Verification Treasury - 5%
                  </h3>
                  <p className="text-base text-gray-300">
                    Funds Proof-of-Impact validation rewards
                  </p>
                </div>

                <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Community Incentives - 4%
                  </h3>
                  <p className="text-base text-gray-300">
                    Supports ambassadors, referrals, content, contributors
                  </p>
                </div>

                <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Liquidity - 1%
                  </h3>
                  <p className="text-base text-gray-300">
                    Seeds Celo-side DEX access
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7 - CLOSING STATEMENT */}
            <section className="mb-12 md:mb-16">
              <div className="text-center">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Built for a transparent global impact economy - where every cleanup becomes verified onchain action.
                </p>
              </div>
            </section>
          </div>
        </details>
      </div>
    </main>
  );
}
