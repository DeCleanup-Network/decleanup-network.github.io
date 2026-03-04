import React from "react";

export default function SocialProofSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-neutral-950 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <span className="block text-3xl md:text-4xl font-bebas text-[#58B12F]">—</span>
            <span className="block text-sm text-gray-500 mt-1">Cleanups Verified</span>
          </div>
          <div>
            <span className="block text-3xl md:text-4xl font-bebas text-[#58B12F]">—</span>
            <span className="block text-sm text-gray-500 mt-1">Countries Active</span>
          </div>
          <div>
            <span className="block text-3xl md:text-4xl font-bebas text-[#58B12F]">—</span>
            <span className="block text-sm text-gray-500 mt-1">Waste Documented (kg)</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Supported by</p>
          <div className="flex flex-wrap justify-center gap-6 items-center opacity-80">
            <a href="https://www.ethfortheworld.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">ETH for the World</a>
            <a href="https://giveth.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Giveth</a>
            <a href="https://gitcoin.co" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Gitcoin</a>
          </div>
        </div>
      </div>
    </section>
  );
}
