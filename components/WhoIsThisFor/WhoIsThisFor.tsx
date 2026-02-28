import React from "react";
import Link from "next/link";

const cardBase =
  "relative flex h-full flex-col rounded-2xl border bg-gray-900/80 p-6 text-left transition hover:bg-gray-900/90 card-border-glow";

export default function WhoIsThisFor() {
  return (
    <section id="who-is-this-for" className="relative overflow-x-hidden py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-14 text-center text-3xl font-bebas font-normal uppercase leading-tight text-white md:text-4xl lg:text-5xl">
          Who is this for?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-stretch">
          {/* Card 1 - Individuals and communities who clean, care and act */}
          <div className={cardBase}>
            <p className="mb-3 text-xs text-[#58B12F]">
              Individuals and communities who clean, care and act
            </p>
            <h3 className="mb-3 text-xl font-bebas font-medium text-white">
              For those who care about the planet
            </h3>
            <p className="mb-5 min-h-[6.5rem] text-gray-200 text-sm leading-relaxed">
              Choose how you want to use the app: within other platforms with minimum features or full experience in browser. We’ll show you what you need and where to go.
            </p>
            <ul className="mb-6 min-h-[7.5rem] list-none space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F] shrink-0">•</span>
                Join or organize cleanup actions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F] shrink-0">•</span>
                Take photos of the result
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F] shrink-0">•</span>
                Get recognition and rewards for real impact
              </li>
            </ul>
            <Link
              href="/get-started"
              className="mt-auto inline-flex items-center gap-2 text-[#FAFF00] hover:text-[#FAFF00]/90"
            >
              Learn more and begin →
            </Link>
          </div>

          {/* Card 2 - Web3-native, but impact first */}
          <div className={cardBase}>
            <p className="mb-3 text-xs text-[#58B12F]">
              Web3-native, but impact first
            </p>
            <h3 className="mb-3 text-xl font-bebas font-medium text-white">
              For those who build and coordinate impact
            </h3>
            <p className="mb-5 min-h-[6.5rem] text-gray-200 text-sm leading-relaxed">
              Use onchain tools to coordinate cleanups, rewards, and community
              governance.
            </p>
            <ul className="mb-6 min-h-[7.5rem] list-none space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F] shrink-0">•</span>
                Participate in governance and proposals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F] shrink-0">•</span>
                Help shape how impact is verified and rewarded
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F] shrink-0">•</span>
                Build on open, impact-focused infrastructure
              </li>
            </ul>
            <Link
              href="/coordinate"
              className="mt-auto inline-flex items-center gap-2 text-[#FAFF00] hover:text-[#FAFF00]/90"
            >
              Dive deeper to the network →
            </Link>
          </div>

          {/* Card 3 - Capital with intention */}
          <div className={cardBase}>
            <p className="mb-3 text-xs text-[#58B12F]">
              Capital with intention
            </p>
            <h3 className="mb-3 text-xl font-bebas font-medium text-white">
              For those who fund real-world impact
            </h3>
            <p className="mb-5 min-h-[6.5rem] text-gray-200 text-sm leading-relaxed">
              Support verified environmental cleanups and help scale them
              globally.
            </p>
            <ul className="mb-6 min-h-[7.5rem] list-none space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F] shrink-0">•</span>
                Fund cleanup actions at scale
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F] shrink-0">•</span>
                Support open verification infrastructure
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F] shrink-0">•</span>
                Hold tokens connected to real-world impact
              </li>
            </ul>
            <Link
              href="/funders"
              className="mt-auto inline-flex items-center gap-2 text-[#FAFF00] hover:text-[#FAFF00]/90"
            >
              See how funding works →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
