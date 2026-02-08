
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
          <p className="text-lg md:text-xl text-gray-200">
            Technical guides and resources for the DeCleanup Network
          </p>
        </div>

        {/* Developer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Contracts */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-[#58B12F]/50 transition-colors group">
            <div className="mb-4">
              <svg className="w-10 h-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#58B12F] transition-colors">Smart Contracts</h3>
            <p className="text-gray-200 mb-4 text-sm">
              Explore the core contracts powering DeCleanup, cleanups verification, and token logic.
            </p>
            <a href="https://github.com/DeCleanup-Network/contracts" target="_blank" rel="noopener noreferrer" className="text-[#58B12F] text-sm font-medium hover:underline">
              View on GitHub →
            </a>
          </div>

          {/* Subgraph */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-[#FAFF00]/50 transition-colors group">
            <div className="mb-4">
              <svg className="w-10 h-10 text-[#FAFF00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.152A10.962 10.962 0 0112 21c-2.578 0-4.95-.903-6.855-2.43M6.551 16.5A10.964 10.964 0 013 11.25c0-1.879.468-3.649 1.289-5.21M17.449 16.5A10.964 10.964 0 0021 11.25c0-1.879-.468-3.649-1.289-5.21" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FAFF00] transition-colors">Indexing & Subgraphs</h3>
            <p className="text-gray-200 mb-4 text-sm">
              Query DeCleanup data for integrations, analytics and governance apps.
            </p>
            <div className="flex gap-4">
              <span className="text-gray-200 text-sm cursor-not-allowed">Coming soon</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-cyan-400/50 transition-colors group">
            <div className="mb-4">
              <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">Frontend & Mini Apps</h3>
            <p className="text-gray-200 mb-4 text-sm">
              Contribute to the user interfaces, PWA, and Farcaster frames.
            </p>
            <a href="https://github.com/DeCleanup-Network" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm font-medium hover:underline">
              Explore Repos →
            </a>
          </div>

          {/* Verification AI */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-400/50 transition-colors group">
            <div className="mb-4">
              <svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">AI Verification</h3>
            <p className="text-gray-200 mb-4 text-sm">
              Learn about the computer vision models used for verifying cleanup impact.
            </p>
            <a href="#" className="text-purple-400 text-sm font-medium hover:underline opacity-50 cursor-not-allowed">
              Docs coming soon
            </a>
          </div>

          {/* Governance */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-pink-400/50 transition-colors group">
            <div className="mb-4">
              <svg className="w-10 h-10 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">Governance</h3>
            <p className="text-gray-200 mb-4 text-sm">
              Technical details on how funding pools and voting mechanisms work.
            </p>
            <a href="https://gardens.fund" target="_blank" rel="noopener noreferrer" className="text-pink-400 text-sm font-medium hover:underline">
              Visit Gardens →
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-200">
            Looking for the impact coordination guide? <Link href="/coordinate" className="text-[#58B12F] hover:underline">Click here</Link>.
          </p>
        </div>

      </div>
    </main>
  );
}
