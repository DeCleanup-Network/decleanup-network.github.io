import React from "react";
import Link from "next/link";

export default function WhoIsThisFor() {
  return (
    <section className="relative overflow-x-hidden py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section title */}
        <h2 className="mb-3 text-center text-3xl font-semibold text-white md:text-4xl">
          Who is this for?
        </h2>
        <p className="mb-14 text-center text-gray-400">
          Different ways to take part in DeCleanup.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 — Environmental Activists (People who clean, care, and act) */}
          <div className="relative rounded-2xl border border-[#58B12F]/20 bg-gradient-to-b from-[#58B12F]/5 to-transparent p-6 transition hover:border-[#58B12F]/40">
            <p className="mb-3 text-xs text-[#58B12F]">
              People who clean, care, and act
            </p>
            <h3 className="mb-3 text-xl font-medium text-white">
              People who care about the planet
            </h3>
            <p className="mb-5 text-gray-400">
              You clean up nature. We help you prove it and get support for it.
            </p>
            <ul className="mb-5 space-y-2 text-sm text-gray-300">
              <li>• Join or organize cleanup actions</li>
              <li>• Take photos of the result</li>
              <li>• Get recognition and rewards for real impact</li>
            </ul>
            <p className="mb-6 text-sm italic text-gray-400">
              &ldquo;Finally, my cleanup actually counts.&rdquo;
            </p>
            <Link
              href="#apps"
              className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#58B12F]/80"
            >
              Start a cleanup →
            </Link>
            <p className="mt-4 text-xs text-gray-500">
              No crypto knowledge needed
            </p>
          </div>

          {/* Card 2 — Impact Builders & Governors (Web3-native, but impact-first) */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20">
            <p className="mb-3 text-xs text-gray-400">
              Web3-native, but impact-first
            </p>
            <h3 className="mb-3 text-xl font-medium text-white">
              People who build and coordinate impact
            </h3>
            <p className="mb-5 text-gray-400">
              Use on-chain tools to coordinate cleanups, rewards, and community
              governance.
            </p>
            <ul className="mb-5 space-y-2 text-sm text-gray-300">
              <li>• Participate in governance and proposals</li>
              <li>• Help shape how impact is verified and rewarded</li>
              <li>• Build on open, impact-focused infrastructure</li>
            </ul>
            <p className="mb-6 text-sm italic text-gray-400">
              &ldquo;This is public-good Web3 that actually touches the real
              world.&rdquo;
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-[#FAFF00] hover:text-[#FAFF00]/80"
            >
              Explore how the network works →
            </Link>
            <p className="mt-4 text-xs text-gray-500">
              For Web3-native users
            </p>
          </div>

          {/* Card 3 — Investors & Impact Sponsors (Capital with intention) */}
          <div className="relative rounded-2xl border border-[#FAFF00]/20 bg-gradient-to-b from-[#FAFF00]/5 to-transparent p-6 transition hover:border-[#FAFF00]/40">
            <p className="mb-3 text-xs text-[#FAFF00]">
              Capital with intention
            </p>
            <h3 className="mb-3 text-xl font-medium text-white">
              People who fund real-world impact
            </h3>
            <p className="mb-5 text-gray-400">
              Support verified environmental cleanups and help scale them
              globally.
            </p>
            <ul className="mb-5 space-y-2 text-sm text-gray-300">
              <li>• Fund cleanup actions at scale</li>
              <li>• Support open verification infrastructure</li>
              <li>• Hold tokens connected to real-world impact</li>
            </ul>
            <p className="mb-6 text-sm italic text-gray-400">
              &ldquo;My capital supports something real and measurable.&rdquo;
            </p>
            <Link
              href="/tokenomics"
              className="inline-flex items-center gap-2 text-[#FAFF00] hover:text-[#FAFF00]/80"
            >
              See how funding works →
            </Link>
            <p className="mt-4 text-xs text-gray-500">
              Transparent · Trackable · Verifiable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
