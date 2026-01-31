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
        <div className="mb-16 rounded-2xl border border-[#58B12F]/30 bg-gray-900/90 p-6 md:p-8 max-w-3xl mx-auto text-left">
          <h2 className="text-lg font-medium text-[#58B12F] mb-6">For those who fund real-world impact</h2>

          <h3 className="text-xl font-medium text-white mb-3">The problem</h3>
          <p className="text-gray-400 text-sm mb-3">Funders want:</p>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Proof that money led to real action</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Transparency without heavy overhead</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Repeatable, scalable funding models</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Less trust, more verification</li>
          </ul>

          <h3 className="text-xl font-medium text-white mb-3">What DeCleanup enables</h3>
          <p className="text-gray-400 text-sm mb-3">We don&apos;t promise financial returns first. We offer verifiable impact infrastructure. Funders can:</p>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Fund cleanup pools</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>See immutable proof of execution</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Support open verification infrastructure</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Hold tokens connected to real-world activity</li>
          </ul>

          <h3 className="text-xl font-medium text-white mb-3">DMRV (Data, Measurement, Reporting, Verification) from a funder&apos;s perspective</h3>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-4 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Funds flow → cleanups happen → proof is published</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Records are tamper-resistant</li>
          </ul>
          <p className="text-gray-400 text-sm mb-2">Data can be:</p>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-4 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Audited</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Aggregated</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Reused across reports and ecosystems</li>
          </ul>
          <p className="text-gray-400 text-sm mb-2">This reduces:</p>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Greenwashing risk</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Reporting costs</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Dependence on trust-based claims</li>
          </ul>

          <h3 className="text-xl font-medium text-white mb-3">Tokens</h3>
          <h4 className="text-base font-medium text-white mb-2">
            <a href="https://basescan.org/address/0x30171b7014c02229497CdE6745DD3aD821F12b07" target="_blank" rel="noopener noreferrer" className="text-[#58B12F] hover:text-[#FAFF00] underline">
              $bDCU (Base)
            </a>
          </h4>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-4 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Incentive &amp; utility token</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Rewards cleanup activity</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Reflects ecosystem usage and demand</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Holders will be airdropped $cDCU to get the full experience (Base + Celo)</li>
          </ul>
          <h4 className="text-base font-medium text-white mb-2">Governance on Celo ($cUSD)</h4>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-4 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Stable, accessible voting</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Proposals via <a href="https://gardens.fund" target="_blank" rel="noopener noreferrer" className="text-[#58B12F] hover:text-[#FAFF00] underline">Gardens.fund</a></li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Decisions tied to funding and rules</li>
          </ul>
          <p className="text-gray-400 text-sm mb-6">Value grows through usage, legitimacy, and adoption, not speculation.</p>

          <h3 className="text-xl font-medium text-white mb-3">Outcome</h3>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Funding tied to verifiable action</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Better accountability</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Open infrastructure worth supporting</li>
          </ul>
          <p className="text-sm text-gray-500 italic mb-2">A base layer for future impact finance</p>
          <p className="text-sm font-medium text-[#58B12F]">Fund what you can verify.</p>
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
