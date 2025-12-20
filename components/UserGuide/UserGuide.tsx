"use client";

import React from "react";

// Custom SVG Icon Components
const FarcasterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

const TrashIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const CameraIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const TargetIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
    />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const CoinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ShareIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>
);

const FlameIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
    />
  </svg>
);

const DocumentIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const VerifiedIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const PlantIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
    />
  </svg>
);

const UserGuide = () => {
  return (
    <section
      id="user-guide"
      className="w-full bg-black text-white py-10 md:py-16"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-white mb-4">
            USER GUIDE
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            DeCleanup Mini app - a simple flow to start using DeCleanup rewards
            today.
          </p>
        </div>

      
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
     
            <div className="bg-[#0A0A0A] border-l-4 border-[#FAFF00] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(250,255,0,0.2)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FAFF00] to-[#58B12F] rounded-lg flex items-center justify-center shrink-0">
                  <FarcasterIcon className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Use on Farcaster
                </h2>
              </div>
              <a
                href="https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#FAFF00] hover:bg-[#FAFF00]/90 text-black font-bold text-sm sm:text-base tracking-wider transition-colors duration-200 border-2 border-[#FAFF00] normal-case hover:scale-105 hover:shadow-[0_0_20px_rgba(250,255,0,0.4)] transition-all duration-300 px-4 py-2.5 rounded-lg mb-4"
                style={{
                  textTransform: "none",
                  fontFamily:
                    "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
                }}
              >
                Open on Farcaster
              </a>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Use the DeCleanup Mini App directly inside Farcaster. Smooth,
                instant, easy wallet connect
              </p>
              <div className="mt-auto">
                <p className="text-sm text-gray-400 mb-2">Wallets:</p>
                <ul className="space-y-1 mb-3">
                  <li className="text-gray-300 text-sm flex items-center">
                    <span className="text-[#FAFF00] mr-2">•</span>
                    Farcaster Wallet is preferable...
                  </li>
                </ul>
                <p className="text-xs text-gray-500 italic">
                  Note: currently other wallet work unstable in farcaster app,
                  use native wallet for best experience
                </p>
              </div>
            </div>

          
            <div className="bg-[#0A0A0A] border-l-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(88,177,47,0.2)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center shrink-0">
                  <GlobeIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Use on Web
                </h2>
              </div>
              <a
                href="https://miniapp.decleanup.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#58B12F] hover:bg-[#58B12F]/90 text-black font-bold text-sm sm:text-base tracking-wider transition-colors duration-200 border-2 border-[#58B12F] normal-case hover:scale-105 hover:shadow-[0_0_20px_rgba(88,177,47,0.4)] transition-all duration-300 px-4 py-2.5 rounded-lg mb-4"
                style={{
                  textTransform: "none",
                  fontFamily:
                    "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
                }}
              >
                Open Web App
              </a>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Open the same Mini App in a browser on mobile or desktop and
                connect any Base-compatible wallet.
              </p>
              <div className="mt-auto">
                <p className="text-sm text-gray-400 mb-2">Wallets:</p>
                <ul className="space-y-1">
                  <li className="text-gray-300 text-sm flex items-center">
                    <span className="text-[#58B12F] mr-2">•</span>
                    Rainbow
                  </li>
                  <li className="text-gray-300 text-sm flex items-center">
                    <span className="text-[#58B12F] mr-2">•</span>
                    Base account
                  </li>
                  <li className="text-gray-300 text-sm flex items-center">
                    <span className="text-[#58B12F] mr-2">•</span>
                    Metamask
                  </li>
                  <li className="text-gray-300 text-sm flex items-center">
                    <span className="text-[#58B12F] mr-2">•</span>
                    Wallet Connect
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — HOW IT WORKS (3-STEP FLOW) */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="bg-gray-900 border-t-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrashIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 text-center">
                Clean Up
              </h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Find a polluted spot and remove the trash.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-900 border-t-4 border-[#FAFF00] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:shadow-[0_0_30px_rgba(250,255,0,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FAFF00] to-[#58B12F] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CameraIcon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 text-center">
                Snap Proof
              </h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Take before & after photos with location enabled.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-900 border-t-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 text-center">
                Submit & Earn
              </h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Upload proof, get verified, earn rewards.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — REWARDS OVERVIEW (2 FEATURE CARDS) */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-8 text-center">
            Rewards Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card A — Impact Product */}
            <div className="bg-gray-900 border-l-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center mb-4">
                <TargetIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                Impact Product
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Your permanent, evolving environmental profile.
              </p>
            </div>

            {/* Card B — $bDCU Rewards */}
            <div className="bg-gray-900 border-l-4 border-[#FAFF00] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:shadow-[0_0_30px_rgba(250,255,0,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FAFF00] to-[#58B12F] rounded-lg flex items-center justify-center mb-4">
                <CoinIcon className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                $bDCU Rewards
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Earn $bDCU for every approved cleanup, streaks, referrals and
                submitting Impact Reports in the Mini App.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — REWARDS BREAKDOWN */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-8 text-center">
            Rewards Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6">
            {/* Cleanups */}
            <div className="bg-gray-900 border-l-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center shrink-0">
                  <TrashIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Cleanups
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Claims of Impact Product
              </p>
              <p className="text-[#58B12F] text-2xl md:text-3xl font-bold">
                10 $bDCU
              </p>
            </div>

            {/* Referrals */}
            <div className="bg-gray-900 border-l-4 border-[#FAFF00] rounded-xl p-6 lg:p-8 flex flex-col hover:shadow-[0_0_30px_rgba(250,255,0,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FAFF00] to-[#58B12F] rounded-lg flex items-center justify-center shrink-0">
                  <ShareIcon className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Referrals
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Rewards for referring new users
              </p>
              <p className="text-[#FAFF00] text-2xl md:text-3xl font-bold">
                3 $bDCU each
              </p>
            </div>

            {/* Streak */}
            <div className="bg-gray-900 border-l-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center shrink-0">
                  <FlameIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Streak
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Weekly streak maintenance rewards
              </p>
              <p className="text-[#58B12F] text-2xl md:text-3xl font-bold">
                2 $bDCU
              </p>
            </div>

            {/* Impact Reports */}
            <div className="bg-gray-900 border-l-4 border-[#FAFF00] rounded-xl p-6 lg:p-8 flex flex-col hover:shadow-[0_0_30px_rgba(250,255,0,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FAFF00] to-[#58B12F] rounded-lg flex items-center justify-center shrink-0">
                  <DocumentIcon className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Impact Reports
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Submission of impact reports
              </p>
              <p className="text-[#FAFF00] text-2xl md:text-3xl font-bold">
                5 $bDCU
              </p>
            </div>

            {/* Verifier Reward */}
            <div className="bg-gray-900 border-l-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center shrink-0">
                  <VerifiedIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Verifier Reward
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Verifier reward for valid submission verification
              </p>
              <p className="text-[#58B12F] text-2xl md:text-3xl font-bold">
                1 $bDCU
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 italic">
              Note: Rewards are subject to change upon the actual token price.
            </p>
          </div>
        </section>

        {/* SECTION 5 — VERIFICATION SYSTEM (SPLIT LAYOUT) */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-8 text-center">
            Verification System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* LEFT SIDE — Text block */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                Your cleanup will be reviewed by community verifiers, who are
                $bDCU stakers. If the submission has geolocation, photos are
                clear and authentic, it gets approved. If not, it&apos;s
                rejected.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Submitting Impact Report helps to validate submissions and
                builds your profile.
              </p>
            </div>

            {/* RIGHT SIDE — Illustration with icon */}
            <div className="bg-[#0A0A0A] border-2 border-[#58B12F] rounded-xl p-8 flex items-center justify-center aspect-video hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300">
              <div className="w-full h-full bg-gradient-to-br from-[#58B12F]/20 to-[#FAFF00]/20 rounded-lg flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-full flex items-center justify-center">
                  <SearchIcon className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — CELO FULL APP COMING SOON (FINAL CARD) */}
        <section className="mb-12 md:mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#0A0A0A] border-l-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col items-center text-center hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center mb-4">
                <PlantIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Full Celo dApp — Coming Soon
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                The complete DeCleanup experience is launching soon on Celo with
                full dashboard, leaderboard, streaks, governance, Impact Product
                management, and Hypercert generation.
              </p>
              <button
                disabled
                className="bg-gray-800 text-gray-500 cursor-not-allowed px-8 py-3 text-base font-semibold tracking-wider opacity-50 pointer-events-none rounded-lg"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default UserGuide;
