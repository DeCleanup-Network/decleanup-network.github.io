import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Star, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "DeCleanup Network Tokenomics",
  description: "The dual-token model powering DeCleanup's global impact ecosystem",
};

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#58B12F] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Back + Header */}
        <div className="mb-12 md:mb-16">
          <Link
            href="/#tokenize"
            className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#58B12F]/80 font-semibold text-sm md:text-base transition-colors duration-200 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Home</span>
          </Link>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#FAFF00]/20 bg-[#FAFF00]/5 text-[#FAFF00] text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FAFF00] animate-pulse" />
              TOKENOMICS
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tighter mb-4 font-bebas">
              NETWORK <span className="text-[#58B12F]">TOKENS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto font-light">
              The dual-token model powering DeCleanup&apos;s global impact ecosystem.
            </p>
          </div>
        </div>

        {/* SECTION 1 - TWO-TOKEN OVERVIEW (litepaper-style cards) */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-0">
            <h2 className="text-4xl md:text-5xl text-center mb-12 font-bebas text-gray-200">TWO TOKENS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* $bDCU */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all" />
                <div className="w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center bg-black z-10 shrink-0 overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Image src="/images/dcu-token-logo.png" alt="$bDCU" width={96} height={96} className="w-full h-full object-contain" unoptimized />
                </div>
                <div className="z-10 text-center md:text-left flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <h3 className="text-3xl text-white font-bebas tracking-wide">Utility token</h3>
                    <span className="text-[10px] bg-neutral-800 text-gray-200 px-2 py-0.5 rounded border border-neutral-700 tracking-wider">BASE</span>
                  </div>
                  <p className="text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">$bDCU</p>
                  <p className="text-sm text-gray-400 mb-4">The &quot;action token.&quot; Used on Base for:</p>
                  <ul className="space-y-3 mb-6 text-sm text-gray-200">
                    <li className="flex items-center gap-2"><Star className="text-blue-500 w-4 h-4 shrink-0" /> Cleanup rewards</li>
                    <li className="flex items-center gap-2"><Star className="text-blue-500 w-4 h-4 shrink-0" /> Streaks & referrals</li>
                    <li className="flex items-center gap-2"><Star className="text-blue-500 w-4 h-4 shrink-0" /> Verifier staking</li>
                    <li className="flex items-center gap-2"><Star className="text-blue-500 w-4 h-4 shrink-0" /> Liquid & tradable</li>
                  </ul>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <a
                        href="https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-[#58B12F] hover:bg-[#58B12F]/80 text-black font-bold rounded-lg transition-all text-xs uppercase tracking-wider"
                      >
                        Swap ETH / $bDCU
                      </a>
                      <a
                        href="https://app.uniswap.org/swap?chain=base&inputCurrency=0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 border border-[#58B12F] text-[#58B12F] hover:bg-[#58B12F]/10 font-bold rounded-lg transition-all text-xs uppercase tracking-wider"
                      >
                        Swap USDT / $bDCU
                      </a>
                    </div>
                    <a
                      href="https://basescan.org/token/0x30171b7014c02229497CdE6745DD3aD821F12b07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1 font-mono break-all"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      0x30171b7014c02229497CdE6745DD3aD821F12b07
                    </a>
                  </div>
                </div>
              </div>

              {/* $cDCU */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group hover:border-[#FAFF00]/30 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#58B12F]/10 rounded-full blur-2xl group-hover:bg-[#58B12F]/20 transition-all" />
                <div className="w-24 h-24 rounded-full border-2 border-[#58B12F] flex items-center justify-center bg-black z-10 shrink-0 overflow-hidden shadow-[0_0_15px_rgba(88,177,47,0.5)]">
                  <Image src="/images/dcu-token-logo.png" alt="$cDCU" width={96} height={96} className="w-full h-full object-contain" unoptimized />
                </div>
                <div className="z-10 text-center md:text-left flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <h3 className="text-3xl text-white font-bebas tracking-wide">Governance</h3>
                    <span className="text-[10px] bg-neutral-800 text-gray-200 px-2 py-0.5 rounded border border-neutral-700 tracking-wider">CELO</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Reputation, governance & advanced utilities</p>
                  <ul className="space-y-3 mb-6 text-sm text-gray-200">
                    <li className="flex items-center gap-2"><ShieldCheck className="text-[#58B12F] w-4 h-4 shrink-0" /> Earned through verified cleanups</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="text-[#58B12F] w-4 h-4 shrink-0" /> Non-tradable (reputation-linked)</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="text-[#58B12F] w-4 h-4 shrink-0" /> Governance via Gardens.fund</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="text-[#58B12F] w-4 h-4 shrink-0" /> Verifier roles, streaks, analytics</li>
                  </ul>
                  <button disabled className="inline-block text-center px-6 py-3 bg-neutral-800 text-gray-400 font-semibold rounded-xl cursor-not-allowed opacity-60">
                    View Celo dApp (inactive)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 - TOKEN COMPARISON TABLE */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-0">
            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-10 text-center">TOKEN COMPARISON</h2>
            <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900/50">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b border-neutral-700">
                    <th className="text-left py-4 px-6 text-sm font-medium uppercase tracking-wider text-gray-400" />
                    <th className="text-center py-4 px-6 text-lg font-medium text-[#58B12F]">$bDCU (Base)</th>
                    <th className="text-center py-4 px-6 text-lg font-medium text-[#FAFF00]">$cDCU (Celo)</th>
                  </tr>
                </thead>
                <tbody className="text-base text-gray-200">
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-6 font-medium text-white">Chain</td>
                    <td className="py-4 px-6 text-center">Base</td>
                    <td className="py-4 px-6 text-center">Celo</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-6 font-medium text-white">Type</td>
                    <td className="py-4 px-6 text-center">Liquid ERC-20</td>
                    <td className="py-4 px-6 text-center">Reputation + Governance</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-6 font-medium text-white">Transferable</td>
                    <td className="py-4 px-6 text-center">Yes</td>
                    <td className="py-4 px-6 text-center">Non-tradable</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-6 font-medium text-white">Primary Use</td>
                    <td className="py-4 px-6 text-center">Fast incentives</td>
                    <td className="py-4 px-6 text-center">Verified impact + governance</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-6 font-medium text-white">Earned From</td>
                    <td className="py-4 px-6 text-center">Mini app cleanups</td>
                    <td className="py-4 px-6 text-center">Full dApp cleanups</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-6 font-medium text-white">Staking Purpose</td>
                    <td className="py-4 px-6 text-center">Verifier access</td>
                    <td className="py-4 px-6 text-center">Verifier access + governance</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-6 font-medium text-white">Governance</td>
                    <td className="py-4 px-6 text-center">No</td>
                    <td className="py-4 px-6 text-center">Yes (Gardens.fund)</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-6 font-medium text-white">Hypercerts</td>
                    <td className="py-4 px-6 text-center">No</td>
                    <td className="py-4 px-6 text-center">Yes (every 10 cleanups)</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-6 font-medium text-white">Market</td>
                    <td className="py-4 px-6 text-center">Tradable</td>
                    <td className="py-4 px-6 text-center">Non-tradable</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-4 px-6 font-medium text-white">Total Supply</td>
                    <td className="py-4 px-6 text-center">TBA</td>
                    <td className="py-4 px-6 text-center">10,000,000 fixed supply</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 3 - IMPACT SYSTEM CARDS */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-0">
            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-10 text-center">IMPACT SYSTEM</h2>
            <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
              {/* Card A - Impact Products */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 min-w-[280px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl md:text-2xl font-bebas tracking-wide text-white mb-4">Impact Products</h3>
                <ul className="space-y-3 text-sm text-gray-200">
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
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 min-w-[280px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink hover:border-[#FAFF00]/30 transition-colors">
                <h3 className="text-xl md:text-2xl font-bebas tracking-wide text-white mb-4">Verifier System</h3>
                <ul className="space-y-3 text-sm text-gray-200">
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
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 min-w-[280px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl md:text-2xl font-bebas tracking-wide text-white mb-4">Hypercerts</h3>
                <ul className="space-y-3 text-sm text-gray-200">
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
          </div>
        </section>

        {/* SECTION 4 - TOKEN LIFECYCLE */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-0">
            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-10 text-center">TOKEN LIFECYCLE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* $bDCU Lifecycle */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-medium text-[#58B12F] mb-6">$bDCU Lifecycle</h3>
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
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-medium text-[#FAFF00] mb-6">$cDCU Lifecycle</h3>
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
          </div>
        </section>

        {/* SECTION 5 - $bDCU SUPPLY & ALLOCATION */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-0">
            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-6 text-center">SUPPLY & ALLOCATION</h2>
            <p className="text-xl text-center text-gray-300 mb-8">$bDCU: total supply TBA</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-2">Circulating Supply - 85%</h3>
                <p className="text-sm text-gray-200">85% of the total supply circulates immediately</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-2">Clanker Vault - 15%</h3>
                <p className="text-sm text-gray-200">15% of supply is held in the Clanker Vault for burns, ecosystem rewards, and liquidity stabilization</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - $cDCU SUPPLY & ALLOCATION */}
        <section className="pt-8 pb-16 md:pt-10 md:pb-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-0">
            <p className="text-xl text-center text-gray-300 mb-6">$cDCU: total supply 10,000,000</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-2">Staking & Verifier Rewards - 35%</h3>
                <p className="text-sm text-gray-200">Supports long-term staking and review system</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#FAFF00]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-2">Cleanup Campaign Incentives - 25%</h3>
                <p className="text-sm text-gray-200">Fuels Impact Circles, leaderboards and global events</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-2">Public Distribution - 20%</h3>
                <p className="text-sm text-gray-200">Onboarding users through controlled vesting</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#FAFF00]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-2">Team & Development - 10%</h3>
                <p className="text-sm text-gray-200">Multi-year vesting for stability and alignment</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-2">Verification Treasury - 5%</h3>
                <p className="text-sm text-gray-200">Funds Proof-of-Impact validation rewards</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#FAFF00]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-2">Community Incentives - 4%</h3>
                <p className="text-sm text-gray-200">Supports ambassadors, referrals, content, contributors</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-2">Liquidity - 1%</h3>
                <p className="text-sm text-gray-200">Seeds Celo-side DEX access</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 - CLOSING STATEMENT */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-0 text-center">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Built for a transparent global impact economy - where every cleanup becomes verified onchain action.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
