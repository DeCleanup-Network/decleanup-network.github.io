"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const sections = [
  { id: "quick-start", title: "Quick Start" },
  { id: "tech-stack", title: "Tech Stack" },
  { id: "architecture", title: "Architecture Overview" },
  { id: "environment", title: "Environment Setup" },
  { id: "commands", title: "Development Commands" },
  { id: "contracts", title: "Smart Contracts" },
  { id: "structure", title: "Project Structure" },
  { id: "testing", title: "Testing" },
  { id: "deployment", title: "Deployment" },
  { id: "api-routes", title: "API Routes" },
  { id: "security", title: "Security Notes" },
  { id: "troubleshooting", title: "Troubleshooting" },
  { id: "resources", title: "Resources & Links" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("quick-start");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setSidebarOpen(false);
    }
  };

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
            Developer Documentation
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Technical guide for DeCleanup Rewards
          </p>
        </div>

        {/* For those who build and coordinate impact - intro before technical docs */}
        <div className="mb-16 rounded-2xl border border-[#58B12F]/30 bg-gray-900/90 p-6 md:p-8 max-w-3xl mx-auto text-left">
          <h2 className="text-lg font-medium text-[#58B12F] mb-6">For those who build and coordinate impact</h2>

          <h3 className="text-xl font-medium text-white mb-3">The problem</h3>
          <p className="text-gray-400 text-sm mb-3">Impact coordinators struggle with:</p>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Fragmented data</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Manual reporting</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Trust bottlenecks</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>No shared infrastructure for verification</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Hard-to-govern funding decisions</li>
          </ul>

          <h3 className="text-xl font-medium text-white mb-3">What DeCleanup provides</h3>
          <p className="text-gray-400 text-sm mb-3">DeCleanup is open DMRV infrastructure, not a closed platform. You can:</p>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Use standardized cleanup data</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Participate in governance</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Help define verification rules</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Coordinate funding transparently</li>
          </ul>

          <h3 className="text-xl font-medium text-white mb-3">DMRV (Data-Measurement-Reporting-Verification) as infrastructure</h3>
          <p className="text-gray-400 text-sm mb-3">We treat DMRV as a public good layer:</p>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-4 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Cleanup records are immutable</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Data structures are open and interoperable</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>No dependency on proprietary standards</li>
          </ul>
          <p className="text-gray-400 text-sm mb-2">Compatible with:</p>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-4 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>SDG reporting</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Regen ecosystems</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Future certification layers</li>
          </ul>
          <p className="text-gray-400 text-sm mb-2">This aligns with:</p>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Regen community tooling</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Open impact accounting systems</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Governance &amp; coordination</li>
          </ul>

          <h3 className="text-xl font-medium text-white mb-3">Governance tools live on Celo</h3>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-4 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>$cDCU is used for proposals and voting</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Governance is coordinated via <a href="https://gardens.fund" target="_blank" rel="noopener noreferrer" className="text-[#58B12F] hover:text-[#FAFF00] underline">Gardens.fund</a></li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Community decides: verification rules, funding priorities, new pools and experiments</li>
          </ul>

          <h4 className="text-base font-medium text-white mb-2">Example funding pools</h4>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Equipment Pool (first pool, sponsored by Ethereum for the World)</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Local Organizer Support Pool</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Logistics &amp; Transport Pool</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Data &amp; Research Pool</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Experimental / Pilot Pool</li>
          </ul>

          <h3 className="text-xl font-medium text-white mb-3">Outcome</h3>
          <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 ml-0">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Coordinators spend less time proving impact</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Communities self-govern funding</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Impact data becomes reusable infrastructure</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Cleanups scale without centralized control</li>
          </ul>
          <p className="text-sm text-gray-500 italic">Coordination layer first.</p>
        </div>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/70 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside
            className={`lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto w-full lg:w-64 flex-shrink-0 z-50 ${
              sidebarOpen ? "fixed inset-y-0 left-0 overflow-y-auto" : "hidden lg:block"
            }`}
          >
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h2 className="text-lg font-semibold text-white uppercase">
                  Contents
                </h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                      activeSection === section.id
                        ? "bg-[#58B12F]/20 text-[#58B12F] border-l-2 border-[#58B12F]"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Mobile Sidebar Toggle */}
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden fixed bottom-6 right-6 bg-[#58B12F] text-black rounded-full p-4 shadow-lg z-50 hover:bg-[#58B12F]/90 transition-colors"
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            </button>
          )}

          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Quick Start */}
            <section
              id="quick-start"
              ref={(el) => {
                sectionRefs.current["quick-start"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                Quick Start
              </h2>
              <p className="md:text-lg leading-relaxed text-gray-300 mb-6">
                Get DeCleanup Rewards running locally in minutes.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                Prerequisites
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 md:text-lg">
                <li>Node.js 18+</li>
                <li>Base-compatible wallet (MetaMask, Coinbase Wallet, etc.)</li>
                <li>Git</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                Installation
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-[#58B12F] mb-6 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`git clone https://github.com/DeCleanup-Network/Farcaster-Mini-App.git
cd Farcaster-Mini-App
npm install
cp .env.example .env.local
# Edit .env.local with your configuration
npm run dev`}</code>
                </pre>
              </div>

              <p className="text-gray-400 mb-4">
                For detailed local testing instructions, see the{" "}
                <a
                  href="https://github.com/DeCleanup-Network/Farcaster-Mini-App/blob/main/LOCAL_TESTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58B12F] hover:underline"
                >
                  Local Testing Guide on GitHub
                </a>
                .
              </p>
            </section>

            {/* Tech Stack */}
            <section
              id="tech-stack"
              ref={(el) => {
                sectionRefs.current["tech-stack"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                Tech Stack
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-700 mb-6">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">
                        Category
                      </th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">
                        Technologies
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold text-[#58B12F]">
                        Frontend
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Next.js 14, TypeScript, Tailwind CSS
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold text-[#58B12F]">
                        Blockchain
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Wagmi v2, Viem, Base (L2)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold text-[#58B12F]">
                        Wallet
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Farcaster SDK, WalletConnect, MetaMask, Coinbase Wallet
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold text-[#58B12F]">
                        Storage
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        IPFS (Pinata)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-semibold text-[#58B12F]">
                        Smart Contracts
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Solidity 0.8.20, Hardhat
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Architecture Overview */}
            <section
              id="architecture"
              ref={(el) => {
                sectionRefs.current["architecture"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                Architecture Overview
              </h2>
              <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-[#58B12F] mb-6">
                <div className="text-center space-y-2 text-gray-300 font-mono">
                  <div>Next.js Client</div>
                  <div className="text-[#58B12F]">↓</div>
                  <div>Wallet Layer</div>
                  <div className="text-[#58B12F]">↓</div>
                  <div>Domain Logic</div>
                  <div className="text-[#58B12F]">↓</div>
                  <div>Smart Contracts</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                Key Flows
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 mb-6 md:text-lg">
                <li>
                  <strong className="text-white">Cleanup Submission:</strong> Photo → IPFS → On-chain
                </li>
                <li>
                  <strong className="text-white">Verification:</strong> Verifier dashboard → Review → Approve/Reject
                </li>
                <li>
                  <strong className="text-white">Rewards:</strong> Automatic $bDCU distribution
                </li>
                <li>
                  <strong className="text-white">Impact Products:</strong> Dynamic NFT minting and level progression
                </li>
              </ul>

              <p className="text-gray-400">
                For detailed system architecture, see the{" "}
                <a
                  href="https://github.com/DeCleanup-Network/Farcaster-Mini-App/blob/main/SYSTEM_ARCHITECTURE.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58B12F] hover:underline"
                >
                  System Architecture documentation on GitHub
                </a>
                .
              </p>
            </section>

            {/* Environment Setup */}
            <section
              id="environment"
              ref={(el) => {
                sectionRefs.current["environment"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                Environment Setup
              </h2>
              <p className="md:text-lg leading-relaxed text-gray-300 mb-6">
                Configure your environment variables for local development. Copy{" "}
                <code className="bg-gray-900 px-2 py-1 rounded text-[#58B12F]">
                  .env.example
                </code>{" "}
                to{" "}
                <code className="bg-gray-900 px-2 py-1 rounded text-[#58B12F]">
                  .env.local
                </code>{" "}
                and fill in your values.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                Network Configuration
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 md:text-lg">
                <li>Chain ID</li>
                <li>RPC URLs</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                Contract Addresses
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 md:text-lg">
                <li>Impact Product NFT</li>
                <li>Verification Contract</li>
                <li>Reward Distributor</li>
                <li>$bDCU Token</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                IPFS/Pinata
              </h3>
              <div className="bg-yellow-900/20 border-l-4 border-[#FAFF00] rounded-lg p-4 mb-6">
                <p className="text-yellow-200 text-sm">
                  <strong>Important:</strong> Pinata keys must be server-side only. Use{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">PINATA_API_KEY</code>, NOT{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">NEXT_PUBLIC_PINATA_API_KEY</code>
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 md:text-lg">
                <li>Server-side API keys</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                Farcaster
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 md:text-lg">
                <li>Neynar API key</li>
                <li>Base App ID</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                WalletConnect
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 md:text-lg">
                <li>Project ID</li>
              </ul>

              <p className="text-gray-400">
                See the{" "}
                <a
                  href="https://github.com/DeCleanup-Network/Farcaster-Mini-App/blob/main/.env.example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58B12F] hover:underline"
                >
                  .env.example file on GitHub
                </a>{" "}
                for the complete list of required variables.
              </p>
            </section>

            {/* Development Commands */}
            <section
              id="commands"
              ref={(el) => {
                sectionRefs.current["commands"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                Development Commands
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-700 mb-6">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">
                        Command
                      </th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-sm">
                        <code className="text-[#58B12F]">npm install</code>
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Install dependencies
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-sm">
                        <code className="text-[#58B12F]">npm run dev</code>
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Start dev server
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-sm">
                        <code className="text-[#58B12F]">npm run build</code>
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Build for production
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-sm">
                        <code className="text-[#58B12F]">npm run test</code>
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Run tests
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-sm">
                        <code className="text-[#58B12F]">npm run lint</code>
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Lint code
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-sm">
                        <code className="text-[#58B12F]">npm run generate:metadata</code>
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Generate NFT metadata
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Smart Contracts */}
            <section
              id="contracts"
              ref={(el) => {
                sectionRefs.current["contracts"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                Smart Contracts
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                Core Contracts
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-700">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">
                        Contract
                      </th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-sm text-[#58B12F]">
                        ImpactProductNFT
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Dynamic NFT (10 levels)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-sm text-[#58B12F]">
                        VerificationContract
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Cleanup submissions
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-sm text-[#58B12F]">
                        bDCURewardDistributor
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        Auto token distribution
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-sm text-[#58B12F]">
                        $bDCU Token
                      </td>
                      <td className="border border-gray-700 px-4 py-3">
                        ERC20 reward token
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                Reward Structure
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-700">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">
                        Action
                      </th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">
                        Reward
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr>
                      <td className="border border-gray-700 px-4 py-3">Level Claim</td>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-[#58B12F]">
                        10 $bDCU
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3">Weekly Streak</td>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-[#58B12F]">
                        2 $bDCU
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3">Referral</td>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-[#58B12F]">
                        3 $bDCU (both parties)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3">Impact Form</td>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-[#58B12F]">
                        5 $bDCU
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3">Verification</td>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-[#58B12F]">
                        1 $bDCU
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Structure */}
            <section
              id="structure"
              ref={(el) => {
                sectionRefs.current["structure"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                Project Structure
              </h2>
              <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-[#58B12F] mb-6">
                <ul className="space-y-3 text-gray-300 font-mono text-sm">
                  <li>
                    <span className="text-[#58B12F]">app/</span> - Next.js routes
                  </li>
                  <li>
                    <span className="text-[#58B12F]">components/</span> - Reusable UI components
                  </li>
                  <li>
                    <span className="text-[#58B12F]">lib/</span> - Business logic (contracts, IPFS, verification)
                  </li>
                  <li>
                    <span className="text-[#58B12F]">contracts/</span> - Solidity smart contracts
                  </li>
                  <li>
                    <span className="text-[#58B12F]">scripts/</span> - Utility scripts
                  </li>
                </ul>
              </div>
            </section>

            {/* Testing */}
            <section
              id="testing"
              ref={(el) => {
                sectionRefs.current["testing"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                Testing
              </h2>
              <p className="md:text-lg leading-relaxed text-gray-300 mb-6">
                For local development testing, follow the setup steps in Quick Start. Ensure your wallet is connected to Base Sepolia testnet.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                Mobile Testing
              </h3>
              <p className="text-gray-400 mb-6">
                For mobile testing instructions, see the{" "}
                <a
                  href="https://github.com/DeCleanup-Network/Farcaster-Mini-App/blob/main/LOCAL_TESTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58B12F] hover:underline"
                >
                  Local Testing Guide
                </a>
                .
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                Testing Checklist
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 md:text-lg">
                <li>Wallet connection and network switching</li>
                <li>Photo upload and IPFS storage</li>
                <li>Cleanup submission and verification flow</li>
                <li>Reward distribution and Impact Product minting</li>
              </ul>
            </section>

            {/* Deployment */}
            <section
              id="deployment"
              ref={(el) => {
                sectionRefs.current["deployment"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                Deployment
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                Frontend (Vercel)
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6 md:text-lg">
                <li>Push code to GitHub repository</li>
                <li>Connect repository to Vercel</li>
                <li>Configure environment variables in Vercel dashboard</li>
                <li>Deploy</li>
              </ol>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                Smart Contracts (Hardhat)
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-[#58B12F] mb-6">
                <pre className="text-sm text-gray-300">
                  <code>{`npx hardhat run scripts/deploy.js --network base`}</code>
                </pre>
              </div>

              <div className="bg-yellow-900/20 border-l-4 border-[#FAFF00] rounded-lg p-4">
                <p className="text-yellow-200 text-sm">
                  <strong>Remember:</strong> Set all required environment variables in your deployment platform before deploying.
                </p>
              </div>
            </section>

            {/* API Routes */}
            <section
              id="api-routes"
              ref={(el) => {
                sectionRefs.current["api-routes"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                API Routes
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-700 mb-6">
                  <thead>
                    <tr className="bg-gray-900">
                      <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">
                        Route
                      </th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">
                        Method
                      </th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-sm">
                        <code className="text-[#58B12F]">/api/ipfs/upload</code>
                      </td>
                      <td className="border border-gray-700 px-4 py-3">POST</td>
                      <td className="border border-gray-700 px-4 py-3">
                        Proxy IPFS uploads
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 font-mono text-sm">
                        <code className="text-[#58B12F]">/api/health</code>
                      </td>
                      <td className="border border-gray-700 px-4 py-3">GET</td>
                      <td className="border border-gray-700 px-4 py-3">
                        Health check
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Security Notes */}
            <section
              id="security"
              ref={(el) => {
                sectionRefs.current["security"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                Security Notes
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-300 mb-6 md:text-lg">
                <li>
                  <strong className="text-white">Pinata API keys are server-side only:</strong> Never expose API keys in client-side code. Use server-side API routes for IPFS uploads.
                </li>
                <li>
                  <strong className="text-white">IPFS uploads proxied through API route:</strong> All IPFS operations go through <code className="bg-gray-900 px-2 py-1 rounded text-sm">/api/ipfs/upload</code> to protect credentials.
                </li>
                <li>
                  <strong className="text-white">Wallet connection requires user approval:</strong> All wallet operations require explicit user consent.
                </li>
                <li>
                  <strong className="text-white">Network switching enforced:</strong> The app enforces Base network only to prevent transactions on wrong chains.
                </li>
              </ul>
            </section>

            {/* Troubleshooting */}
            <section
              id="troubleshooting"
              ref={(el) => {
                sectionRefs.current["troubleshooting"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                Troubleshooting
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Wallet Connection Issues
                  </h3>
                  <p className="text-gray-300">
                    Ensure your wallet extension is installed and unlocked. Try refreshing the page or switching networks manually.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    IPFS Upload Failures
                  </h3>
                  <p className="text-gray-300">
                    Verify your Pinata API keys are correctly set in <code className="bg-gray-900 px-2 py-1 rounded text-sm">.env.local</code>. Check that keys are server-side only (no <code className="bg-gray-900 px-2 py-1 rounded text-sm">NEXT_PUBLIC_</code> prefix).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Contract Interaction Errors
                  </h3>
                  <p className="text-gray-300">
                    Confirm you&apos;re on the correct network (Base Sepolia for testing). Verify contract addresses in your environment variables match the deployed contracts.
                  </p>
                </div>
              </div>
            </section>

            {/* Resources & Links */}
            <section
              id="resources"
              ref={(el) => {
                sectionRefs.current["resources"] = el;
              }}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-normal uppercase text-white mb-6 border-b border-[#58B12F] pb-3">
                Resources & Links
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                External Resources
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8 md:text-lg">
                <li>
                  <a
                    href="https://docs.base.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58B12F] hover:underline"
                  >
                    Base Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.farcaster.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58B12F] hover:underline"
                  >
                    Farcaster Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://wagmi.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58B12F] hover:underline"
                  >
                    Wagmi Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://viem.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58B12F] hover:underline"
                  >
                    Viem Docs
                  </a>
                </li>
              </ul>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8">
                GitHub Documentation
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8 md:text-lg">
                <li>
                  <a
                    href="https://github.com/DeCleanup-Network/Farcaster-Mini-App/blob/main/SYSTEM_ARCHITECTURE.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58B12F] hover:underline"
                  >
                    System Architecture
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/DeCleanup-Network/Farcaster-Mini-App/blob/main/LOCAL_TESTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58B12F] hover:underline"
                  >
                    Local Testing Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/DeCleanup-Network/Farcaster-Mini-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58B12F] hover:underline"
                  >
                    Full Repository
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
