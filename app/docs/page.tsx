import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DeCleanup Network Documentation",
  description: "Guides and resources for the DeCleanup Network. Tech stack and where to find more.",
};

export default function DocsPage() {
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
              DOCS
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tighter mb-4 font-bebas">
              NETWORK <span className="text-[#58B12F]">DOCUMENTATION</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto font-light">
              Guides and resources for the DeCleanup Network.
            </p>
          </div>
        </div>

        {/* Tech stack / What we build with */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-0">
            <h2 className="text-4xl md:text-5xl text-center mb-4 font-bebas text-gray-200">TECH STACK</h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              A simple overview of what powers DeCleanup. For full technical docs and source code, see GitHub.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-[#58B12F] mb-2">Smart contracts</h3>
                <p className="text-sm text-gray-200 mb-4">Verification, tokens, and core logic on Base and Celo.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/DeCleanup-Network/Farcaster-Mini-App/tree/main/contracts/contracts" target="_blank" rel="noopener noreferrer" className="text-sm text-[#58B12F] hover:text-[#FAFF00] font-medium">
                    Base →
                  </a>
                  <a href="https://github.com/DeCleanup-Network/decleanup-main-celo/tree/main/contracts/contracts" target="_blank" rel="noopener noreferrer" className="text-sm text-[#58B12F] hover:text-[#FAFF00] font-medium">
                    Celo →
                  </a>
                </div>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#FAFF00]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-[#FAFF00] mb-2">Frontend & mini apps</h3>
                <p className="text-sm text-gray-200 mb-4">Web app, PWA, and Farcaster mini app.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/DeCleanup-Network/Farcaster-Mini-App/tree/main/app" target="_blank" rel="noopener noreferrer" className="text-sm text-[#58B12F] hover:text-[#FAFF00] font-medium">
                    Base →
                  </a>
                  <a href="https://github.com/DeCleanup-Network/decleanup-main-celo/tree/main/frontend" target="_blank" rel="noopener noreferrer" className="text-sm text-[#58B12F] hover:text-[#FAFF00] font-medium">
                    Celo →
                  </a>
                </div>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-2">Indexing & subgraphs</h3>
                <p className="text-sm text-gray-200 mb-4">Query cleanup and token data for apps and analytics.</p>
                <span className="text-sm text-gray-500">Coming soon</span>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-2">AI verification</h3>
                <p className="text-sm text-gray-200 mb-4">Computer vision for verifying cleanup impact.</p>
                <span className="text-sm text-gray-500">Docs coming soon</span>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#FAFF00]/30 transition-colors md:col-span-2">
                <h3 className="text-xl font-bebas tracking-wide text-[#FAFF00] mb-2">Governance</h3>
                <p className="text-sm text-gray-200 mb-4">Funding pools and voting on Celo via Gardens.</p>
                <span className="text-sm text-gray-500">Coming soon</span>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://github.com/DeCleanup-Network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#58B12F] hover:bg-[#58B12F]/90 text-black font-semibold rounded-xl transition-colors"
              >
                DeCleanup on GitHub →
              </a>
              <p className="text-sm text-gray-400 mt-4 max-w-md mx-auto">
                Full technical docs, source code, and contribution guides are on GitHub.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
