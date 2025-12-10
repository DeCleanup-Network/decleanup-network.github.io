"use client";

import React from "react";

const UserGuide = () => {
  return (
    <section id="user-guide" className="w-full bg-black text-white py-10 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-white mb-4">
            USER GUIDE
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            A simple flow to start using DeCleanup today.
          </p>
        </div>

        {/* SECTION 1 — BASE MINI APP ACCESS */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* CARD 1 — Use on Farcaster */}
            <div className="bg-[#0A0A0A] border-l-4 border-[#FAFF00] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(250,255,0,0.2)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FAFF00] to-[#58B12F] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">F</span>
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
                style={{ textTransform: 'none', fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif' }}
              >
                Open on Farcaster
              </a>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Use the DeCleanup Mini App directly inside Farcaster. Smooth, instant, easy wallet connect
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
                  Note: currently other wallet work unstable in farcaster app, use native wallet for best experience
                </p>
              </div>
            </div>

            {/* CARD 2 — Use on Web */}
            <div className="bg-[#0A0A0A] border-l-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(88,177,47,0.2)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
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
                style={{ textTransform: 'none', fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif' }}
              >
                Open Web App
              </a>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Open the same Mini App in a browser on mobile or desktop and connect any Base-compatible wallet.
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
            <div className="bg-gray-900 border-t-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🧹</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 text-center">
                Clean Up
              </h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Find a polluted spot and remove the trash.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-900 border-t-4 border-[#FAFF00] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:shadow-[0_0_30px_rgba(250,255,0,0.2)] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FAFF00] to-[#58B12F] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📷</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 text-center">
                Snap Proof
              </h3>
              <p className="text-gray-300 text-base leading-relaxed text-center">
                Take before & after photos with location enabled.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-900 border-t-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">✓</span>
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

        {/* SECTION 3 — REWARDS OVERVIEW (3 FEATURE CARDS) */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-8 text-center">
            Rewards Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card A — Impact Product */}
            <div className="bg-gray-900 border-l-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                Impact Product
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Your permanent, evolving environmental profile.
              </p>
            </div>

            {/* Card B — $bDCU Rewards */}
            <div className="bg-gray-900 border-l-4 border-[#FAFF00] rounded-xl p-6 lg:p-8 flex flex-col h-full hover:shadow-[0_0_30px_rgba(250,255,0,0.2)] transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FAFF00] to-[#58B12F] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                $bDCU Rewards
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Earn $bDCU for every approved cleanup, streaks, referrals and submitting Impact Reports in the Mini App.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — REWARDS BREAKDOWN */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-8 text-center">
            Rewards Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6">
            {/* Cleanups */}
            <div className="bg-gray-900 border-l-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Cleanups
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Claims of Impact Product
              </p>
              <p className="text-[#58B12F] text-2xl md:text-3xl font-bold">
                10 $bDCU
              </p>
            </div>

            {/* Referrals */}
            <div className="bg-gray-900 border-l-4 border-[#FAFF00] rounded-xl p-6 lg:p-8 flex flex-col hover:shadow-[0_0_30px_rgba(250,255,0,0.2)] transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Referrals
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Rewards for referring new users
              </p>
              <p className="text-[#FAFF00] text-2xl md:text-3xl font-bold">
                3 $bDCU for the referrer and the referred
              </p>
            </div>

            {/* Streak */}
            <div className="bg-gray-900 border-l-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Streak
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Weekly streak maintenance rewards
              </p>
              <p className="text-[#58B12F] text-2xl md:text-3xl font-bold">
                2 $bDCU
              </p>
            </div>

            {/* Impact Reports */}
            <div className="bg-gray-900 border-l-4 border-[#FAFF00] rounded-xl p-6 lg:p-8 flex flex-col hover:shadow-[0_0_30px_rgba(250,255,0,0.2)] transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Impact Reports
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Submission of impact reports
              </p>
              <p className="text-[#FAFF00] text-2xl md:text-3xl font-bold">
                5 $bDCU
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
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Your cleanup will be reviewed by community verifiers, who are $bDCU stakers. If the submission has geolocation, photos are clear and authentic, it gets approved. If not, it&apos;s rejected. Submitting Impact Report helps to validate submissions and builds your profile.
              </p>
            </div>

            {/* RIGHT SIDE — Illustration placeholder */}
            <div className="bg-[#0A0A0A] border-2 border-[#58B12F] rounded-xl p-8 flex items-center justify-center aspect-video hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300">
              <div className="w-full h-full bg-gradient-to-br from-[#58B12F]/20 to-[#FAFF00]/20 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🔍</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — CELO FULL APP COMING SOON (FINAL CARD) */}
        <section className="mb-12 md:mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#0A0A0A] border-l-4 border-[#58B12F] rounded-xl p-6 lg:p-8 flex flex-col items-center text-center hover:shadow-[0_0_30px_rgba(88,177,47,0.2)] transition-all duration-300 opacity-90">
              <div className="w-16 h-16 bg-gradient-to-br from-[#58B12F] to-[#FAFF00] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Full Celo dApp — Coming Soon
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                The complete DeCleanup experience is launching soon on Celo with full dashboard, leaderboard, streaks, governance, Impact Product management, and Hypercert generation.
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

