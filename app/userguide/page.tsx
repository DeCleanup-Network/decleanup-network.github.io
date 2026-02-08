import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DeCleanup Network User Guide",
  description: "Guides for using the DeCleanup mini app and full platform",
};

export default function UserGuidePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#58B12F] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Back + Header */}
        <div className="mb-12 md:mb-16">
          <Link
            href="/"
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
              USER GUIDE
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tighter mb-4 font-bebas">
              HOW TO <span className="text-[#58B12F]">USE DECLEANUP</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto font-light">
              Mini app on Base and Farcaster, or full platform on Celo.
            </p>
          </div>
        </div>

        {/* SECTION 1 - HOW TO USE THE MINI APP */}
        <section id="miniapp" className="py-16 md:py-24 border-t border-white/5 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-0">
            <h2 className="text-4xl md:text-5xl text-center mb-4 font-bebas text-gray-200">HOW TO USE THE MINI APP</h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Use DeCleanup inside Farcaster, the Base app, or in a browser. Earn $bDCU and build your Impact Product.
            </p>

            {/* Where to open */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#FAFF00]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-[#FAFF00] mb-3">Farcaster</h3>
                <p className="text-sm text-gray-200 mb-4">Open the mini app inside Farcaster or Warpcast. Use the built-in wallet for the smoothest experience.</p>
                <a href="https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-[#FAFF00] text-black font-semibold rounded-xl hover:bg-[#FAFF00]/90 text-sm">
                  Open on Farcaster →
                </a>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-[#58B12F] mb-3">Base app</h3>
                <p className="text-sm text-gray-200 mb-4">Install the Base app, then open DeCleanup Rewards as a mini app. Pin it for quick access.</p>
                <a href="https://base.app/app/miniapp.decleanup.net" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-[#58B12F] text-black font-semibold rounded-xl hover:bg-[#58B12F]/90 text-sm">
                  Open on Base app →
                </a>
              </div>
            </div>

            {/* How it works - 3 steps */}
            <h3 className="text-2xl md:text-3xl font-bebas text-white mb-6">How it works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <div className="text-3xl font-bebas text-[#58B12F] mb-2">1</div>
                <h4 className="text-lg font-bebas tracking-wide text-white mb-2">Clean up</h4>
                <p className="text-sm text-gray-200">Find a polluted spot and remove the trash.</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#FAFF00]/30 transition-colors">
                <div className="text-3xl font-bebas text-[#FAFF00] mb-2">2</div>
                <h4 className="text-lg font-bebas tracking-wide text-white mb-2">Snap proof</h4>
                <p className="text-sm text-gray-200">Take before & after photos with location enabled.</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <div className="text-3xl font-bebas text-[#58B12F] mb-2">3</div>
                <h4 className="text-lg font-bebas tracking-wide text-white mb-2">Submit & earn</h4>
                <p className="text-sm text-gray-200">Upload proof, get verified, earn $bDCU rewards.</p>
              </div>
            </div>

            {/* Rewards */}
            <h3 className="text-2xl md:text-3xl font-bebas text-white mb-6">Rewards in the mini app</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h4 className="text-lg font-bebas tracking-wide text-white mb-1">Cleanups</h4>
                <p className="text-2xl font-bebas text-[#58B12F]">10 $bDCU</p>
                <p className="text-sm text-gray-400">Per approved cleanup (Impact Product claim)</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#FAFF00]/30 transition-colors">
                <h4 className="text-lg font-bebas tracking-wide text-white mb-1">Referrals</h4>
                <p className="text-2xl font-bebas text-[#FAFF00]">3 $bDCU each</p>
                <p className="text-sm text-gray-400">For referring new users</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h4 className="text-lg font-bebas tracking-wide text-white mb-1">Streak</h4>
                <p className="text-2xl font-bebas text-[#58B12F]">2 $bDCU</p>
                <p className="text-sm text-gray-400">Weekly streak maintenance</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h4 className="text-lg font-bebas tracking-wide text-white mb-1">Verifier reward</h4>
                <p className="text-2xl font-bebas text-[#58B12F]">1 $bDCU</p>
                <p className="text-sm text-gray-400">Per valid verification</p>
              </div>
            </div>

            {/* Verification */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bebas tracking-wide text-white mb-4">Verification</h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                Submissions are reviewed by community verifiers ($bDCU stakers). If the submission has geolocation, clear and authentic photos, it gets approved; otherwise it may be rejected.
              </p>
              <p className="text-xs text-gray-400 italic">Rewards are subject to change based on token price reflecting multiplier formula at the moment of claim.</p>
            </div>
          </div>
        </section>

        {/* SECTION 2 - HOW TO USE THE FULL APP (CELO) */}
        <section id="fullapp" className="py-16 md:py-24 border-t border-white/5 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-0">
            <h2 className="text-4xl md:text-5xl text-center mb-4 font-bebas text-gray-200">HOW TO USE THE FULL APP</h2>
            <p className="text-center text-gray-400 mb-4 max-w-2xl mx-auto">
              The full DeCleanup platform on Celo: dashboard, leaderboards, governance, Impact Product, and Hypercerts.
            </p>
            <p className="text-center text-gray-500 text-sm italic mb-12">Full guide for Celo app is coming soon.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-[#FAFF00]/30 transition-colors">
                <h3 className="text-2xl font-bebas tracking-wide text-[#FAFF00] mb-4">Full platform on Celo</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-6">
                  The complete DeCleanup experience runs on Celo: full dashboard, leaderboards, streaks, governance via Gardens.fund, Impact Product management, and Hypercert generation (every 10 verified cleanups). Connect a wallet (e.g. MetaMask) on Celo to use the dApp.
                </p>
                <a href="https://dapp.decleanup.net" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-[#FAFF00] text-black font-semibold rounded-xl hover:bg-[#FAFF00]/90">
                  Open DeCleanup dApp (Celo) →
                </a>
              </div>
              <div className="space-y-4">
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                  <h4 className="text-lg font-bebas tracking-wide text-white mb-2">Wallet & network</h4>
                  <p className="text-sm text-gray-200">Use MetaMask or another Celo-compatible wallet. Add the Celo (or Celo Sepolia testnet) network and fund the wallet with CELO for gas.</p>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                  <h4 className="text-lg font-bebas tracking-wide text-white mb-2">$cDCU & governance</h4>
                  <p className="text-sm text-gray-200">Earn $cDCU through verified cleanups on the full dApp. Use it for verifier staking and to vote on proposals via Gardens.fund.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#58B12F]/20 bg-[#58B12F]/5 p-6">
              <p className="text-sm text-gray-200">
                <strong className="text-white">Note:</strong> The Celo dApp may be on testnet (e.g. Celo Sepolia). Check the app for the current network and faucet links if you need test CELO.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
