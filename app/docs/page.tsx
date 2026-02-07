
"use client";

import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/#tokenize"
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
            Developer Documentation
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Technical guides and resources for the DeCleanup Network
          </p>
        </div>

        {/* Developer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Contracts */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-[#58B12F]/50 transition-colors group">
            <div className="text-3xl mb-4 text-[#58B12F]">📜</div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#58B12F] transition-colors">Smart Contracts</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Explore the core contracts powering DeCleanup, cleanups verification, and token logic.
            </p>
            <a href="https://github.com/DeCleanup-Network/contracts" target="_blank" rel="noopener noreferrer" className="text-[#58B12F] text-sm font-medium hover:underline">
              View on GitHub →
            </a>
          </div>

          {/* Subgraph */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-[#FAFF00]/50 transition-colors group">
            <div className="text-3xl mb-4 text-[#FAFF00]">🕸️</div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FAFF00] transition-colors">Indexing & Subgraphs</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Query DeCleanup data for integrations, analytics and governance apps.
            </p>
            <div className="flex gap-4">
              <span className="text-gray-600 text-sm cursor-not-allowed">Coming soon</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-cyan-400/50 transition-colors group">
            <div className="text-3xl mb-4 text-cyan-400">🖥️</div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">Frontend & Mini Apps</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Contribute to the user interfaces, PWA, and Farcaster frames.
            </p>
            <a href="https://github.com/DeCleanup-Network" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm font-medium hover:underline">
              Explore Repos →
            </a>
          </div>

          {/* Verification AI */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-400/50 transition-colors group">
            <div className="text-3xl mb-4 text-purple-400">🤖</div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">AI Verification</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Learn about the computer vision models used for verifying cleanup impact.
            </p>
            <a href="#" className="text-purple-400 text-sm font-medium hover:underline opacity-50 cursor-not-allowed">
              Docs coming soon
            </a>
          </div>

          {/* Governance */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-pink-400/50 transition-colors group">
            <div className="text-3xl mb-4 text-pink-400">⚖️</div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">Governance</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Technical details on how funding pools and voting mechanisms work.
            </p>
            <a href="https://gardens.fund" target="_blank" rel="noopener noreferrer" className="text-pink-400 text-sm font-medium hover:underline">
              Visit Gardens →
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Looking for the impact coordination guide? <Link href="/coordinate" className="text-[#58B12F] hover:underline">Click here</Link>.
          </p>
        </div>

      </div>
    </main>
  );
}
