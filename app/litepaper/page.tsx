import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DeCleanup Network Litepaper (v3.0)",
  description: "DeCleanup Network Litepaper Version 3.0 — December 2025",
};

export default function LitepaperPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
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
            Litepaper
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Version 3.0 — December 2025
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Overview
          </h2>
          <div className="space-y-4 md:text-lg leading-relaxed text-gray-300">
            <p>
              DeCleanup Network is global infrastructure for coordinating environmental cleanups and converting them into verifiable, onchain impact. We unite individuals, communities, and organizations into a shared ecosystem where every cleanup generates a measurable digital asset: an Impact Product.
            </p>
            <p>
              The network now operates across two chains, each serving a clear purpose:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white">Base</strong> — fast, lightweight action + cleanup rewards</li>
              <li><strong className="text-white">Celo</strong> — full dApp, governance, reputation, hypercerts, and advanced features</li>
            </ul>
          </div>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Mission Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Mission
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300">
            To mobilize people worldwide into measurable environmental action by transforming real cleanups into provable, composable digital impact assets. Through transparent verification, community incentives, and shared infrastructure, DeCleanup enables environmental action to become visible, rewarded, and scalable.
          </p>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* The Problem Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            The Problem
          </h2>
          <ul className="space-y-3 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
            <li>No lasting incentives for cleanup actions</li>
            <li>No standardized way to measure or verify real-world environmental work</li>
            <li>Fragmented local efforts with no shared global infrastructure</li>
          </ul>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Our Solution Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Our Solution
          </h2>
          <ul className="space-y-3 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
            <li><strong className="text-white">Impact Products</strong> — dynamic NFTs representing real-world cleanup impact</li>
            <li><strong className="text-white">Multichain Architecture</strong> — Base mini app for fast actions, Celo full dApp for governance & analytics</li>
            <li><strong className="text-white">Verifiable Reputation</strong> — user identity grows with real contributions</li>
            <li><strong className="text-white">Hypercerts Integration</strong> — automatically minted every 10 cleanups</li>
            <li><strong className="text-white">Decentralized Verification</strong> — staked community verifiers</li>
            <li><strong className="text-white">Global Coordination Layer</strong> — ambassadors + open infrastructure</li>
          </ul>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Multichain Network Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Multichain Network: Base + Celo
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Base — Quick Action Layer
              </h3>
              <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
                <li>Farcaster Mini App</li>
                <li>$bDCU reward token</li>
                <li>Simple logging + stats</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Celo — Full Impact Layer
              </h3>
              <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
                <li>Full-feature dApp</li>
                <li>Leaderboards, streaks, dashboards</li>
                <li>Claim & stake flows</li>
                <li>Hypercert auto-minting</li>
                <li>$cDCU governance + Gardens.fund</li>
                <li>Advanced analytics</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Impact Products Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Impact Products
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-6">
            Dynamic NFTs representing verified environmental work.
          </p>
          
          <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
            Key Characteristics:
          </h3>
          <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4 mb-6">
            <li>Dynamic metadata</li>
            <li>Verifiable history</li>
            <li>Level progression</li>
            <li>Hypercert linkage</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
            Level Progression:
          </h3>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-2">
            Newbie → Pro → Hero → Guardian
          </p>
          <p className="md:text-lg leading-relaxed text-gray-300">
            1, 2, 3 - Newbie; 4, 5, 6 - Pro; 7, 8, 9 - Hero; 10 - Guardian
          </p>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Hypercerts Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Hypercerts
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            Every 10 verified cleanups → automatic Hypercert (ERC-1155).
          </p>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            Contains:
          </p>
          <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
            <li>weight removed</li>
            <li>area cleaned</li>
            <li>waste types</li>
            <li>contributors</li>
            <li>timeframes</li>
            <li>cumulative metrics</li>
          </ul>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Base Token Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Base Token: $bDCU
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            The &quot;action token.&quot; Used on Base for:
          </p>
          <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
            <li>cleanup rewards</li>
            <li>streaks</li>
            <li>referrals</li>
            <li>verifier staking</li>
            <li>simple incentives</li>
          </ul>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Celo Token Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Celo Token: $cDCU
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            Non-tradable first, governance & reputation token.
          </p>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            Used for:
          </p>
          <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4 mb-6">
            <li>governance voting (Gardens.fund)</li>
            <li>verifier staking</li>
            <li>milestone rewards</li>
          </ul>
          
          <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
              Why non-tradable?
            </h3>
            <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
              <li>prevents speculation</li>
              <li>preserves legitimacy of reputation</li>
              <li>aligns incentives</li>
            </ul>
          </div>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Verification System Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Verification System
          </h2>
          <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
            <li>Staked verifiers - 100 $bDCU or $cDCU required to stake</li>
            <li>Verifier rewards - 1 $bDCU or 1 $cDCU per valid submission</li>
          </ul>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* User Flow Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            User Flow
          </h2>
          <ol className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-decimal list-inside ml-4">
            <li>Clean up</li>
            <li>Snap evidence</li>
            <li>Submit</li>
            <li>Verify</li>
            <li>Earn $bDCU or $cDCU</li>
            <li>Impact Product updates</li>
            <li>Hypercerts every 10 cleanups</li>
          </ol>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Use Cases Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Use Cases
          </h2>
          <ul className="space-y-4 md:text-lg leading-relaxed text-gray-300">
            <li><strong className="text-white">HEM Japan</strong> — early partner community</li>
            <li><strong className="text-white">Pesathon Nigeria</strong> — university cleanup campaign</li>
          </ul>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Roadmap Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Roadmap (Updated)
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Phase 1 — Base Mini App (Live)
              </h3>
              <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
                <li>Farcaster app</li>
                <li>$bDCU rewards</li>
                <li>basic logging</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Phase 2 — Celo Full dApp (In Development)
              </h3>
              <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
                <li>dashboards + leaderboards</li>
                <li>streaks</li>
                <li>Impact Products v2</li>
                <li>claim & stake</li>
                <li>hypercerts</li>
                <li>community verification</li>
                <li>$cDCU governance</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Phase 3 — Reputation + Marketplace Layer
              </h3>
              <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
                <li>RWI Rank</li>
                <li>Regen Bazaar staking (Impact Products → $REBAZ)</li>
                <li>advanced analytics</li>
                <li>partner integrations</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Phase 4 — Multichain Expansion
              </h3>
              <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
                <li>unified identity</li>
                <li>multichain Hypercerts</li>
                <li>Base ↔ Celo syncing</li>
                <li>additional EVM chains</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Phase 5 — DeCleanup V3
              </h3>
              <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
                <li>ESG partnerships</li>
                <li>machine-learning verification</li>
                <li>IoT integrations</li>
                <li>enterprise impact reporting</li>
                <li>mobile app with offline mode</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Partners Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Partners
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300">
            Regen Bazaar, EcoSynthesisX, Atlantis, Hypercerts Foundation, Gardens.fund, NGOs, university partners, ReFi communities, USDGLO, DeTrash, and more.
          </p>
        </section>
      </div>
    </main>
  );
}

