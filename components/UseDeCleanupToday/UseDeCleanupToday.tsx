import React from "react";
import Link from "next/link";
import {
  Smartphone,
  Layers,
  Camera,
  Wand2,
  Wallet,
  MapPin,
  FileText,
  MessageCircle,
  ArrowUpRight
} from "lucide-react";

const UseDeCleanupToday = () => {
  return (
    <section
      id="ecosystem"
      className="w-full overflow-x-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-3xl font-normal uppercase leading-tight text-white md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
          >
            THE <span className="text-[#58B12F]">ECOSYSTEM</span>
          </h2>
        </div>

        {/* Cards Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Base Card */}
          <Link
            href="https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 relative group block"
          >
            <div className="absolute inset-0 bg-blue-900/10 rounded-3xl blur-xl group-hover:bg-blue-900/20 transition-all duration-500"></div>
            <div className="relative flex h-full flex-col bg-neutral-900 border border-neutral-800 rounded-3xl p-8 overflow-hidden group-hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none">
                <Smartphone className="text-blue-500 w-32 h-32 -rotate-12 translate-x-4 translate-y-4 opacity-10" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider">BASE</span>
                <h3 className="text-3xl text-white font-bebas tracking-wide">Mini App</h3>
              </div>

              <p className="text-gray-200 mb-8 min-h-[3.5rem] text-sm leading-relaxed">Lightweight entry for individuals via Farcaster or Base app.</p>

              <div className="space-y-4 min-h-[10rem]">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                  <Camera className="text-blue-400 w-5 h-5" />
                  <span className="text-sm text-gray-200">Photo-based logging</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                  <Wand2 className="text-blue-400 w-5 h-5" />
                  <span className="text-sm text-gray-200">Quick verification</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                  <Wallet className="text-blue-400 w-5 h-5" />
                  <span className="text-sm text-gray-200">$bDCU rewards</span>
                </div>
              </div>

              <div className="mt-auto pt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 group-hover:text-white transition-colors">
                Open on Farcaster <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Celo Card */}
          <Link
            href="https://dapp.decleanup.net"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 relative group block"
          >
            <div className="absolute inset-0 bg-[#FAFF00]/5 rounded-3xl blur-xl group-hover:bg-[#FAFF00]/10 transition-all duration-500"></div>
            <div className="relative flex h-full flex-col bg-neutral-900 border border-neutral-800 rounded-3xl p-8 overflow-hidden group-hover:border-[#FAFF00]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none">
                <Layers className="text-[#FAFF00] w-32 h-32 rotate-12 translate-x-4 translate-y-4 opacity-10" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#FAFF00] text-black text-[10px] font-bold px-2 py-1 rounded tracking-wider">CELO</span>
                <h3 className="text-3xl text-white font-bebas tracking-wide">Full Platform</h3>
              </div>

              <p className="text-gray-200 mb-8 min-h-[3.5rem] text-sm leading-relaxed">Full platform for individuals, NGOs and organizers. Governance and coordination.</p>

              <div className="space-y-4 min-h-[10rem]">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                  <MapPin className="text-[#FAFF00] w-5 h-5" />
                  <span className="text-sm text-gray-200">Geolocation and maps</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                  <FileText className="text-[#FAFF00] w-5 h-5" />
                  <span className="text-sm text-gray-200">Impact reports (Hypercerts)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                  <MessageCircle className="text-[#FAFF00] w-5 h-5" />
                  <span className="text-sm text-gray-200">Funding governance</span>
                </div>
              </div>

              <div className="mt-auto pt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FAFF00] group-hover:text-white transition-colors">
                Explore Celo dApp <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UseDeCleanupToday;
