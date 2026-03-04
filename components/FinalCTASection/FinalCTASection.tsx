import React from "react";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-[#58B12F]/10 to-black border-t border-white/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4 tracking-wide">
          Ready to Make Your Impact Count?
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Join volunteers worldwide turning cleanup action into on-chain proof.
        </p>
        <Link
          href="/get-started"
          className="inline-block rounded-xl bg-[#58B12F] px-10 py-4 text-lg font-semibold text-black hover:bg-[#58B12F]/90 transition-colors min-h-[48px]"
        >
          Start Your First Cleanup
        </Link>
      </div>
    </section>
  );
}
