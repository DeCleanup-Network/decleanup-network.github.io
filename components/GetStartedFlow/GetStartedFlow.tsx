"use client";

import React, { useState } from "react";
import Link from "next/link";

type Step =
  | "intro"
  | "start"
  | "choose"
  | "celo"
  | "farcaster"
  | "base"
  | "base_only"
  | "end";

const GUIDE_LINKS = {
  metamask: "https://metamask.io/download/",
  baseNetwork: "https://docs.base.org/network-information",
  celoNetwork: "https://docs.celo.org/network",
  celoSepoliaNetwork: "https://docs.celo.org/tooling/wallets/metamask/add-celo-testnet-to-metamask",
  celoFaucet: "https://faucet.celo.org/celo-sepolia",
  ethForGas: "https://www.coinbase.com/learn/tips-and-tutorials/how-to-get-eth",
  farcasterDocs: "https://docs.farcaster.xyz",
  farcasterRegister: "https://farcaster.xyz/",
  baseAppRegister: "https://join.base.app/",
  baseApp: "https://base.org",
  baseAppGetStarted: "https://help.coinbase.com/en/base/getting-started/get-started",
  decleanupFarcaster: "https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards",
  decleanupBase: "https://base.app/app/miniapp.decleanup.net",
  decleanupCelo: "https://dapp.decleanup.net",
  warpcast: "https://warpcast.com",
};

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-[#58B12F]/30 bg-gray-900/90 p-6 md:p-8 " +
        className
      }
    >
      {children}
    </div>
  );
}

function GuideLinks({ variant }: { variant: "base" | "celo" | "wallet" }) {
  const links =
    variant === "base"
      ? [
        { label: "Get started with Base app", href: GUIDE_LINKS.baseAppGetStarted },
        { label: "Tips and tutorials", href: GUIDE_LINKS.ethForGas },
      ]
      : variant === "celo"
        ? [
          { label: "Download MetaMask", href: GUIDE_LINKS.metamask },
          { label: "Add Celo Sepolia network", href: GUIDE_LINKS.celoSepoliaNetwork },
          { label: "Get CELO for transactions", href: GUIDE_LINKS.celoFaucet },
        ]
        : [
          { label: "MetaMask guide", href: GUIDE_LINKS.metamask },
          { label: "Farcaster setup", href: GUIDE_LINKS.farcasterDocs },
        ];
  return (
    <div className="mt-4 pt-4 border-t border-white/10">
      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Guides</p>
      <ul className="space-y-1 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58B12F] hover:text-[#FAFF00] underline"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function GetStartedFlow() {
  const [step, setStep] = useState<Step>("intro");

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Step: Intro - For those who care about the planet (before flowchart) */}
      {step === "intro" && (
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              For those who care about the planet
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
              Environmental action deserves recognition. Here&apos;s how DeCleanup makes it happen.
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

            <p className="text-gray-400 text-sm mb-4">People clean beaches, rivers, forests - but:</p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: "👻", text: "Their work is invisible beyond social media" },
                { icon: "📄", text: "There's no durable proof they can reuse" },
                { icon: "🎲", text: "Recognition and support are inconsistent" },
                { icon: "📉", text: "Motivation drops without feedback or continuity" }
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

          {/* What DeCleanup Changes - Visual Flow */}
          <Card className="bg-gradient-to-br from-[#58B12F]/10 to-green-600/5 border-[#58B12F]/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#58B12F]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">What DeCleanup Changes</h3>
            </div>

            <p className="text-gray-400 text-sm mb-6">We give everyday people a simple flow:</p>

            {/* Visual Step Flow */}
            <div className="space-y-3">
              {[
                {
                  step: "1",
                  icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                  text: "Join or organize a cleanup",
                  color: "from-blue-500/20 to-cyan-500/10"
                },
                {
                  step: "2",
                  icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  text: "Document the result (photos, location, basic data)",
                  color: "from-purple-500/20 to-pink-500/10"
                },
                {
                  step: "3",
                  icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                  text: "Publish (immutable proof onchain)",
                  color: "from-orange-500/20 to-yellow-500/10"
                },
                {
                  step: "4",
                  icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
                  text: "Earn recognition, reputation, and rewards",
                  color: "from-green-500/20 to-emerald-500/10"
                }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${step.color} border border-white/10 hover:border-white/30 transition-all duration-300 group`}
                  style={{ animation: `slideInRight 0.5s ease-out ${idx * 0.15}s both` }}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#58B12F] text-black font-bold text-sm shrink-0">
                    {step.step}
                  </div>
                  <div className="text-[#58B12F] shrink-0 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <p className="text-sm text-gray-200 flex-1">{step.text}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* DMRV Breakdown - Interactive Cards */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">DMRV Framework</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  letter: "D",
                  title: "Data",
                  items: ["Photos", "Location", "Cleanup type", "Waste categories"],
                  color: "text-blue-400",
                  bgColor: "from-blue-500/10 to-blue-600/5"
                },
                {
                  letter: "M",
                  title: "Measurement",
                  items: ["Amount collected", "Frequency", "Participation"],
                  color: "text-purple-400",
                  bgColor: "from-purple-500/10 to-purple-600/5"
                },
                {
                  letter: "R",
                  title: "Reporting",
                  items: ["Standardized records", "Readable format", "Open access"],
                  color: "text-orange-400",
                  bgColor: "from-orange-500/10 to-orange-600/5"
                },
                {
                  letter: "V",
                  title: "Verification",
                  items: ["Onchain anchoring", "Immutable proof", "Can't be altered"],
                  color: "text-green-400",
                  bgColor: "from-green-500/10 to-green-600/5"
                }
              ].map((dmrv, idx) => (
                <div
                  key={idx}
                  className={`group p-5 rounded-xl bg-gradient-to-br ${dmrv.bgColor} border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105`}
                  style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full ${dmrv.color} bg-white/10 flex items-center justify-center font-bold text-lg`}>
                      {dmrv.letter}
                    </div>
                    <h4 className={`font-semibold ${dmrv.color}`}>{dmrv.title}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {dmrv.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-[#58B12F] shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Benefit Callout */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#58B12F]/20 to-green-600/10 border border-[#58B12F]/30">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#58B12F] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-white font-medium mb-1">This means:</p>
                  <p className="text-sm text-gray-300">
                    Your cleanup can&apos;t be erased. Your contribution adds up over time. Your impact becomes provable.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Outcome - Visual Metrics */}
          <Card className="bg-gradient-to-br from-[#FAFF00]/10 to-yellow-600/5 border-yellow-500/30">
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
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                  text: "More people clean up, more often",
                  color: "text-green-400"
                },
                {
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                  text: "Contributors build an onchain impact reputation",
                  color: "text-purple-400"
                },
                {
                  icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
                  text: "Cleanups become visible, countable, and supportable",
                  color: "text-cyan-400"
                }
              ].map((outcome, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                  style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.15}s both` }}
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
                <span className="text-[#FAFF00] font-semibold not-italic">Impact first.</span> Web3 only where it helps.
              </p>
            </div>
          </Card>

          {/* CTA Button */}
          <button
            onClick={() => setStep("start")}
            className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#FAFF00] to-yellow-400 text-black font-semibold hover:from-[#FAFF00]/90 hover:to-yellow-400/90 transition-all duration-300 shadow-lg shadow-[#FAFF00]/20 hover:shadow-[#FAFF00]/40 hover:scale-[1.02] flex items-center justify-center gap-2 group"
          >
            <span>Choose your path</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

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
      )}

      {/* Step: Start - Do you have / want Farcaster or Base App? */}
      {step === "start" && (
        <Card>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-4">
            Do you have a Farcaster account or the Base app?
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            DeCleanup Rewards runs as a mini app inside Farcaster client or the Base app. If you prefer not to use either, you can use the full platform on Celo chain.
          </p>
          <div className="space-y-4 mb-6">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-gray-300 font-medium mb-2">
                <a
                  href={GUIDE_LINKS.farcasterRegister}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58B12F] hover:text-[#FAFF00] underline"
                >
                  Farcaster
                </a>
              </p>
              <p className="text-sm text-gray-400">
                Farcaster is an open social protocol that lets people own their identity and social graph. Multiple apps can use the same feed, profiles, and followers, so your social presence isn’t locked into one platform.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-gray-300 font-medium mb-2">
                <a
                  href={GUIDE_LINKS.baseAppRegister}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58B12F] hover:text-[#FAFF00] underline"
                >
                  Base App
                </a>
              </p>
              <p className="text-sm text-gray-400">
                Base App is an onchain consumer app built on Base that uses the Farcaster feed. It combines social posts, mini apps, payments, trading, chat, and earning into one place - so content isn’t just read, it’s actionable.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setStep("celo")}
              className="px-5 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              No - use full platform instead
            </button>
            <button
              onClick={() => setStep("choose")}
              className="px-5 py-3 rounded-xl bg-[#58B12F] text-black font-medium hover:bg-[#58B12F]/90 transition"
            >
              Yes - I’ll use mini app
            </button>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => setStep("intro")}
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back
            </button>
          </div>
        </Card>
      )}

      {/* Step: Choose - Base App or Farcaster */}
      {step === "choose" && (
        <>
          <Card>
            <h2 className="text-xl md:text-2xl font-medium text-white mb-4">
              Choose one to get started
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              You can add the other later. Pick the one you prefer to set up first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setStep("base_only")}
                className="flex-1 p-5 rounded-xl border border-[#58B12F]/40 bg-[#58B12F]/10 text-white hover:bg-[#58B12F]/20 transition text-left"
              >
                <span className="font-medium block mb-1">Register on Base app</span>
                <span className="text-sm text-gray-400">Use DeCleanup inside the Base mobile app</span>
              </button>
              <button
                onClick={() => setStep("farcaster")}
                className="flex-1 p-5 rounded-xl border border-[#58B12F]/40 bg-[#58B12F]/10 text-white hover:bg-[#58B12F]/20 transition text-left"
              >
                <span className="font-medium block mb-1">Register on Farcaster</span>
                <span className="text-sm text-gray-400">Use DeCleanup mini app inside Farcaster / Warpcast</span>
              </button>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={() => setStep("start")}
                className="text-sm text-gray-400 hover:text-white"
              >
                ← Back
              </button>
            </div>
          </Card>
        </>
      )}

      {/* Step: Celo path */}
      {step === "celo" && (
        <Card>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
            Try the full DeCleanup Rewards platform
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Explore full dashboard, leaderboard, and governance. Works with a wallet (e.g. MetaMask) on Celo chain.
          </p>
          <div className="mb-4">
            <Link
              href={GUIDE_LINKS.decleanupCelo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAFF00] text-black font-medium hover:bg-[#FAFF00]/90"
            >
              Open DeCleanup dApp (currently on testnet) →
            </Link>
          </div>
          <GuideLinks variant="celo" />
          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => setStep("start")}
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back to start
            </button>
          </div>
        </Card>
      )}

      {/* Step: Farcaster path - then “Also Base?” */}
      {step === "farcaster" && (
        <Card>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
            DeCleanup on Farcaster
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Open the DeCleanup mini app inside Farcaster. Log in with your Farcaster account and start logging cleanups.
          </p>
          <div className="mb-4 space-y-3">
            <a
              href={GUIDE_LINKS.farcasterRegister}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-3 rounded-xl border border-[#58B12F]/50 text-[#58B12F] hover:bg-[#58B12F]/10 text-center text-sm font-medium"
            >
              Get Farcaster app or use in browser
            </a>
            <Link
              href={GUIDE_LINKS.decleanupFarcaster}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAFF00] text-black font-medium hover:bg-[#FAFF00]/90 w-full justify-center"
            >
              Open DeCleanup mini app on Farcaster →
            </Link>
          </div>
          <div className="mb-6 rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-sm text-gray-400 mb-2">
              To fund your wallet: open the Farcaster wallet, press <strong className="text-gray-300">Deposit</strong>, then copy your wallet address. Transfer ETH from an exchange or another wallet to that address, or buy directly via a linked Coinbase account.
            </p>
            <a
              href={GUIDE_LINKS.ethForGas}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#58B12F] hover:text-[#FAFF00] underline"
            >
              Tips and tutorials →
            </a>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Do you also want to use DeCleanup on the Base app?
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setStep("end")}
              className="px-5 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              No, I’m done
            </button>
            <button
              onClick={() => setStep("base")}
              className="px-5 py-3 rounded-xl bg-[#58B12F] text-black font-medium hover:bg-[#58B12F]/90 transition"
            >
              Yes - also open on Base app
            </button>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => setStep("choose")}
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back
            </button>
          </div>
        </Card>
      )}

      {/* Step: Base only (user chose Base at “choose”) */}
      {step === "base_only" && (
        <Card>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
            DeCleanup on Base app
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Install the Base app, then open DeCleanup Rewards as a mini app inside it. Pin it to your apps to be able to always find it later.
          </p>
          <div className="space-y-3 mb-4">
            <a
              href={GUIDE_LINKS.baseAppRegister}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-3 rounded-xl border border-[#58B12F]/50 text-[#58B12F] hover:bg-[#58B12F]/10 text-center"
            >
              Get Base app
            </a>
            <Link
              href={GUIDE_LINKS.decleanupBase}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAFF00] text-black font-medium hover:bg-[#FAFF00]/90 w-full justify-center"
            >
              Open DeCleanup on Base app →
            </Link>
          </div>
          <GuideLinks variant="base" />
          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => setStep("choose")}
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back
            </button>
          </div>
        </Card>
      )}

      {/* Step: Base after Farcaster (“Also use Base?” → Yes) */}
      {step === "base" && (
        <Card>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
            DeCleanup on Base app
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Install the Base app, then open DeCleanup Rewards as a mini app inside it. Pin it to your apps to be able to always find it later.
          </p>
          <div className="space-y-3 mb-4">
            <a
              href={GUIDE_LINKS.baseAppRegister}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-3 rounded-xl border border-[#58B12F]/50 text-[#58B12F] hover:bg-[#58B12F]/10 text-center"
            >
              Get Base app
            </a>
            <Link
              href={GUIDE_LINKS.decleanupBase}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAFF00] text-black font-medium hover:bg-[#FAFF00]/90 w-full justify-center"
            >
              Open DeCleanup on Base app →
            </Link>
          </div>
          <GuideLinks variant="base" />
          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => setStep("farcaster")}
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back to Farcaster step
            </button>
          </div>
        </Card>
      )}

      {/* Step: End */}
      {step === "end" && (
        <Card>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
            You’re all set
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Use DeCleanup on Farcaster to log cleanups and earn rewards. Need the full dApp or Base app later? Come back to this page or use the links on the main page.
          </p>
          <Link
            href="/#apps"
            className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#FAFF00]"
          >
            Back to main page →
          </Link>
        </Card>
      )}
    </div>
  );
}
