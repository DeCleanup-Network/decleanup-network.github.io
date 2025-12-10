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
            The dual-token model powering DeCleanup's global impact ecosystem.
          </p>
        </div>

        {/* SECTION 1 — TWO-TOKEN OVERVIEW */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 — $bDCU — Base */}
            <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg flex flex-col h-full">
              <h2 className="text-2xl md:text-3xl font-normal uppercase text-white mb-2">
                $bDCU — Base
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                Fast rewards, staking & trading
              </p>
              <ul className="space-y-3 text-base md:text-lg text-gray-300 mb-6 flex-grow">
                <li className="flex items-start">
                  <span className="text-[#58B12F] mr-2">•</span>
                  <span>Earned in the Farcaster Mini App</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#58B12F] mr-2">•</span>
                  <span>Liquid ERC-20 token deployed via Clanker</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#58B12F] mr-2">•</span>
                  <span>Auto-created Uniswap v3 liquidity and locked pool</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#58B12F] mr-2">•</span>
                  <span>Used for fast cleanup incentives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#58B12F] mr-2">•</span>
                  <span>Can be staked to become a Verifier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#58B12F] mr-2">•</span>
                  <span>Powers the Base social & participation layer</span>
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

            {/* Card 2 — $cDCU — Celo */}
            <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg flex flex-col h-full">
              <h2 className="text-2xl md:text-3xl font-normal uppercase text-white mb-2">
                $cDCU — Celo
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
                  <span>Hypercert minted every 10 cleanups</span>
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

        {/* SECTION 2 — TOKEN COMPARISON TABLE */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-8 text-center">
            Token Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b-2 border-[#58B12F]">
                  <th className="text-left py-4 px-4 text-xl font-normal uppercase text-white"></th>
                  <th className="text-center py-4 px-4 text-xl font-normal uppercase text-[#58B12F]">
                    $bDCU (Base)
                  </th>
                  <th className="text-center py-4 px-4 text-xl font-normal uppercase text-[#FAFF00]">
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

        {/* SECTION 3 — IMPACT SYSTEM CARDS */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-8 text-center">
            Impact System
          </h2>
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
            {/* Card A — Impact Products */}
            <div className="bg-gray-900 border-t-4 border-[#58B12F] p-6 rounded-lg min-w-[280px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Impact Products
              </h3>
              <ul className="space-y-3 text-base md:text-lg text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#58B12F] mr-2">•</span>
                  <span>Dynamic soulbound NFTs</span>
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

            {/* Card B — Verifier System */}
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

            {/* Card C — Hypercerts */}
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

        {/* SECTION 4 — TOKEN LIFECYCLE */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-8 text-center">
            Token Lifecycle
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* $bDCU Lifecycle */}
            <div>
              <h3 className="text-2xl md:text-3xl font-normal uppercase text-[#58B12F] mb-6">
                $bDCU Lifecycle
              </h3>
              <div className="relative pl-8">
                {/* Vertical connector line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#58B12F] opacity-30"></div>
                
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#58B12F] border-2 border-black"></div>
                    <div className="pl-4">
                      <div className="text-lg font-semibold text-white mb-1">1 — Earn through the Base mini app</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#58B12F] border-2 border-black"></div>
                    <div className="pl-4">
                      <div className="text-lg font-semibold text-white mb-1">2 — Stake to become a Verifier</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#58B12F] border-2 border-black"></div>
                    <div className="pl-4">
                      <div className="text-lg font-semibold text-white mb-1">3 — Trade freely on Base DEXes</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#58B12F] border-2 border-black"></div>
                    <div className="pl-4">
                      <div className="text-lg font-semibold text-white mb-1">4 — Participate in Base-side campaigns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* $cDCU Lifecycle */}
            <div>
              <h3 className="text-2xl md:text-3xl font-normal uppercase text-[#FAFF00] mb-6">
                $cDCU Lifecycle
              </h3>
              <div className="relative pl-8">
                {/* Vertical connector line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#FAFF00] opacity-30"></div>
                
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#FAFF00] border-2 border-black"></div>
                    <div className="pl-4">
                      <div className="text-lg font-semibold text-white mb-1">1 — Earn through verified cleanups</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#FAFF00] border-2 border-black"></div>
                    <div className="pl-4">
                      <div className="text-lg font-semibold text-white mb-1">2 — Stake for governance and Verifier role</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#FAFF00] border-2 border-black"></div>
                    <div className="pl-4">
                      <div className="text-lg font-semibold text-white mb-1">3 — Grow Impact Product reputation</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#FAFF00] border-2 border-black"></div>
                    <div className="pl-4">
                      <div className="text-lg font-semibold text-white mb-1">4 — Receive a Hypercert every 10 cleanups</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-2rem] top-2 w-6 h-6 rounded-full bg-[#FAFF00] border-2 border-black"></div>
                    <div className="pl-4">
                      <div className="text-lg font-semibold text-white mb-1">5 — Vote on proposals through Gardens.fund</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — $cDCU SUPPLY & ALLOCATION */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-4 text-center">
            $cDCU Supply & Allocation
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-center text-gray-300 mb-8">
            Total Supply: 10,000,000 $cDCU
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Staking & Verifier Rewards — 35%
              </h3>
              <p className="text-base text-gray-300">
                Supports long-term staking and review system
              </p>
            </div>
            
            <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Cleanup Campaign Incentives — 25%
              </h3>
              <p className="text-base text-gray-300">
                Fuels Impact Circles, leaderboards and global events
              </p>
            </div>
            
            <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Public Distribution — 20%
              </h3>
              <p className="text-base text-gray-300">
                Onboarding users through controlled vesting
              </p>
            </div>
            
            <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Team & Development — 10%
              </h3>
              <p className="text-base text-gray-300">
                Multi-year vesting for stability and alignment
              </p>
            </div>
            
            <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Verification Treasury — 5%
              </h3>
              <p className="text-base text-gray-300">
                Funds Proof-of-Impact validation rewards
              </p>
            </div>
            
            <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Community Incentives — 4%
              </h3>
              <p className="text-base text-gray-300">
                Supports ambassadors, referrals, content, contributors
              </p>
            </div>
            
            <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Liquidity — 1%
              </h3>
              <p className="text-base text-gray-300">
                Seeds Celo-side DEX access
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — CLANKER HIGHLIGHT BOX */}
        <section className="mb-12 md:mb-16">
          <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-normal uppercase text-white mb-6">
              How Clanker Works
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
              <p>
                Clanker automatically deploys the $bDCU token, creates a Uniswap v3 liquidity pool, and locks initial liquidity for transparent and secure trading.
              </p>
              <p>
                For $bDCU specifically:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>85% of the total supply circulates immediately</li>
                <li>15% of supply is held in the Clanker Vault</li>
                <li>The Clanker Vault is used for burns, ecosystem rewards, and liquidity stabilization</li>
                <li>Full total supply remains TBA (to be announced after final audits)</li>
              </ul>
              <p>
                This structure creates a partially deflationary model and provides long-term sustainability for Base-side participation.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7 — CELO UTILITY HIGHLIGHT BOX */}
        <section className="mb-12 md:mb-16">
          <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 md:p-8 rounded-lg shadow-lg">
            <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
              <p>
                $cDCU powers the full DeCleanup platform: governance, verifiers, dashboards, analytics, streaks, and Hypercert generation. It represents a user's cumulative reputation in the ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8 — CLOSING STATEMENT */}
        <section className="mb-12 md:mb-16">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Built for a transparent global impact economy — where every cleanup becomes verified onchain action.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
