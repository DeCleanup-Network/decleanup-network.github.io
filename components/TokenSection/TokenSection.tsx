"use client";

import React, { useState } from "react";
import Link from "next/link";

const CONTRACT = "0x30171b7014c02229497CdE6745DD3aD821F12b07";
const DEX_LINK = "https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07";

export default function TokenSection() {
  const [copied, setCopied] = useState(false);
  const copyContract = () => {
    navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="token" className="w-full py-16 md:py-24 bg-neutral-950 border-t border-white/5 scroll-mt-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4 tracking-wide">
          $bDCU Token
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          The reward layer for verified environmental action on Base.
        </p>
        <div className="bg-neutral-900/80 border border-white/10 rounded-2xl p-6 md:p-8 text-left space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Network</span>
            <span className="text-white font-medium">Base</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Circulating supply</span>
            <span className="text-white font-medium">~85%</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm block mb-2">Contract</span>
            <div className="flex items-center gap-2 flex-wrap">
              <code className="text-xs text-gray-300 font-mono break-all flex-1">{CONTRACT}</code>
              <button
                type="button"
                onClick={copyContract}
                className="shrink-0 px-3 py-1.5 rounded-lg bg-white/10 text-gray-200 text-xs hover:bg-[#58B12F]/20 hover:text-[#58B12F] transition-colors min-h-[44px]"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={DEX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-[#58B12F] px-6 py-3 font-semibold text-[#58B12F] hover:bg-[#58B12F]/10 transition-colors min-h-[44px] flex items-center justify-center w-full sm:w-auto"
          >
            View on DEX
          </a>
          <Link
            href="/tokenomics"
            className="text-gray-400 hover:text-[#58B12F] transition-colors text-sm underline"
          >
            Full tokenomics
          </Link>
        </div>
      </div>
    </section>
  );
}
