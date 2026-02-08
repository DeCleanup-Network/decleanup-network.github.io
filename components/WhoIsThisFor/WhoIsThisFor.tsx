import React from "react";
import Link from "next/link";

const cardBase =
  "relative rounded-2xl border bg-gray-900/80 p-6 text-left transition hover:bg-gray-900/90 card-border-glow";

export default function WhoIsThisFor() {
  return (
    <section id="who-is-this-for" className="relative overflow-x-hidden py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2
          className="mb-14 text-center text-3xl font-normal uppercase leading-tight text-white md:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
        >
          Who is this for?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 - Individuals and communities who clean, care and act */}
          <div className={cardBase}>
            <p className="mb-3 text-xs text-[#58B12F]">
              Individuals and communities who clean, care and act
            </p>
            <h3 className="mb-3 text-xl font-medium text-white">
              For those who care about the planet
            </h3>
            <p className="mb-5 text-gray-200">
              Choose how you want to use the app: within other platforms with minimum features or full experience in browser. We’ll show you what you need and where to go.
            </p>
            <ul className="mb-6 list-none space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F]">•</span>
                Join or organize cleanup actions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F]">•</span>
                Take photos of the result
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F]">•</span>
                Get recognition and rewards for real impact
              </li>
            </ul>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 text-[#FAFF00] hover:text-[#FAFF00]/90"
            >
              Learn more and begin →
            </Link>
          </div>

          {/* Card 2 - Web3-native, but impact first */}
          <div className={cardBase}>
            <p className="mb-3 text-xs text-[#58B12F]">
              Web3-native, but impact first
            </p>
            <h3 className="mb-3 text-xl font-medium text-white">
              For those who build and coordinate impact
            </h3>
            <p className="mb-5 text-gray-200">
              Use onchain tools to coordinate cleanups, rewards, and community
              governance.
            </p>
            <ul className="mb-6 list-none space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F]">•</span>
                Participate in governance and proposals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F]">•</span>
                Help shape how impact is verified and rewarded
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F]">•</span>
                Build on open, impact-focused infrastructure
              </li>
            </ul>
            <Link
              href="/coordinate"
              className="inline-flex items-center gap-2 text-[#FAFF00] hover:text-[#FAFF00]/90"
            >
              Dive deeper to the network →
            </Link>
          </div>

          {/* Card 3 - Capital with intention */}
          <div className={cardBase}>
            <p className="mb-3 text-xs text-[#58B12F]">
              Capital with intention
            </p>
            <h3 className="mb-3 text-xl font-medium text-white">
              For those who fund real-world impact
            </h3>
            <p className="mb-5 text-gray-200">
              Support verified environmental cleanups and help scale them
              globally.
            </p>
            <ul className="mb-6 list-none space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F]">•</span>
                Fund cleanup actions at scale
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F]">•</span>
                Support open verification infrastructure
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#58B12F]">•</span>
                Hold tokens connected to real-world impact
              </li>
            </ul>
            <Link
              href="/funders"
              className="inline-flex items-center gap-2 text-[#FAFF00] hover:text-[#FAFF00]/90"
            >
              See how funding works →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
