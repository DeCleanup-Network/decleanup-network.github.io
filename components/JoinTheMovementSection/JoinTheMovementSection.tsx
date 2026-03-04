import React from "react";
import Link from "next/link";

export default function JoinTheMovementSection() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden bg-black border-t border-white/5">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-white mb-4 tracking-wide">
          Join the Movement
        </h2>
        <p className="text-gray-400 mb-10 leading-relaxed">
          Connect with our community and explore everything you need to contribute to a cleaner environment.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://t.me/EcoSynthesisX/443"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#FAFF00]/30 px-6 py-3 font-medium text-[#FAFF00] transition-all hover:border-[#FAFF00]/60 hover:bg-[#FAFF00]/5 min-h-[44px] flex items-center justify-center"
          >
            Telegram
          </Link>
          <Link
            href="https://x.com/DeCleanupNet"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#FAFF00]/30 px-6 py-3 font-medium text-[#FAFF00] transition-all hover:border-[#FAFF00]/60 hover:bg-[#FAFF00]/5 min-h-[44px] flex items-center justify-center"
          >
            X
          </Link>
          <Link
            href="https://farcaster.xyz/decleanupnet"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#FAFF00]/30 px-6 py-3 font-medium text-[#FAFF00] transition-all hover:border-[#FAFF00]/60 hover:bg-[#FAFF00]/5 min-h-[44px] flex items-center justify-center"
          >
            Farcaster
          </Link>
        </div>
      </div>
    </section>
  );
}
