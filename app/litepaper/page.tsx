import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  Info,
  BadgeCheck,
  TrendingUp,
  Users,
  Building2,
  RefreshCw,
  CloudSun,
  Droplets,
  Smartphone,
  Camera,
  Wand2,
  Wallet,
  ArrowLeftRight,
  Layers,
  MapPin,
  FileText,
  MessageCircle,
  Scan,
  UserCheck,
  Link as LinkIcon,
  Star,
  ShieldCheck,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Menu
} from "lucide-react";
import TheoryOfChange from "@/components/TheoryOfChange/TheoryOfChange";


export const metadata: Metadata = {
  title: "DeCleanup Network - Litepaper",
  description: "Infrastructure for verifiable, governable, and fundable environmental impact. February 2026 Edition.",
};

export default function LitepaperPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#58B12F] selection:text-white pb-0">

      {/* Navigation (Litepaper specific) */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image
                src="/images/decleanup_logo_full.png"
                alt="DeCleanup"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <span className="text-xs text-gray-300 border-l border-gray-700 pl-3 font-medium">LITEPAPER</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-200 font-medium">
            <Link href="#overview" className="hover:text-white transition-colors">Overview</Link>
            <Link href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</Link>
            <Link href="#tokens" className="hover:text-white transition-colors">Tokens</Link>
            <Link href="#roadmap" className="hover:text-white transition-colors">Roadmap</Link>
            <Link href="#appendices" className="hover:text-white transition-colors">Appendices</Link>
            <a href="https://dapp.decleanup.net" target="_blank" className="border border-[#FAFF00]/50 text-[#FAFF00] px-4 py-1.5 rounded-full text-xs font-bold hover:bg-[#FAFF00] hover:text-black transition-all">
              LAUNCH APP
            </a>
          </div>
          {/* Mobile Menu Icon (Placeholder) */}
          <div className="md:hidden text-gray-200">
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </nav>

      {/* Header / Title */}
      <header className="relative pt-32 pb-20 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#58B12F] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#FAFF00]/20 bg-[#FAFF00]/5 text-[#FAFF00] text-xs font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FAFF00] animate-pulse"></span>
                FEBRUARY 2026 EDITION
              </div>
              <h1>
                DECLEANUP <br />
                <span className="text-[#58B12F]">NETWORK</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-xl font-light leading-relaxed font-sans">
                Infrastructure for verifiable, governable, and fundable environmental impact.
              </p>
            </div>

            <div className="flex gap-8 border-l border-white/10 pl-6 md:border-l-0 md:pl-0">
              <div className="text-left md:text-right">
                <div className="text-xs text-gray-300 uppercase tracking-widest mb-1 font-medium">Status</div>
                <div className="text-white text-sm font-bold">PHASE 1: LIVE</div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block"></div>
              <div className="text-left md:text-right">
                <div className="text-xs text-gray-300 uppercase tracking-widest mb-1 font-medium">Network</div>
                <div className="flex gap-2 justify-start md:justify-end mt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FAFF00] shadow-[0_0_10px_rgba(250,255,0,0.5)]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 1. Overview Cards */}
      <section id="overview" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="mb-10 flex items-center gap-3">
            <Info className="text-[#58B12F] w-8 h-8" />
            The Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl group hover:border-[#58B12F]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#58B12F]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BadgeCheck className="text-[#58B12F] w-6 h-6" />
              </div>
              <h3 className="mb-2">Verifiable Data</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Transforming invisible cleanup efforts into standardized, onchain evidence. No more &quot;trust me&quot; - only &quot;verify me.&quot;
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl group hover:border-[#FAFF00]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FAFF00]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-[#FAFF00] w-6 h-6" />
              </div>
              <h3 className="mb-2">Auditable Impact</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Creating specific, traceable records compatible with Hypercerts. Funders can see exactly where capital goes.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl group hover:border-blue-400/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="mb-2">Governable Funding</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                DAO-based allocation of resources using stable assets. Outcome-based funding pools for long-term sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SDG Alignment */}
      <section className="py-20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#58B12F]/5 -skew-y-3 transform origin-top-left scale-110 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-5xl text-white font-bebas">SDG <span className="text-[#FAFF00]">ALIGNMENT</span></h2>
            <span className="text-sm text-gray-300 font-mono hidden md:block tracking-widest">UN SUSTAINABLE DEVELOPMENT GOALS</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* SDG 11 */}
            <div className="bg-amber-600/20 border border-amber-600/30 p-6 rounded-xl hover:bg-amber-600/30 transition-colors group">
              <div className="text-amber-500 text-xs font-bold mb-2 font-mono">SDG 11</div>
              <Building2 className="text-white w-8 h-8 mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-white text-lg font-bebas leading-none tracking-wide uppercase">Sustainable<br />Cities</h3>
            </div>

            {/* SDG 12 */}
            <div className="bg-orange-600/20 border border-orange-600/30 p-6 rounded-xl hover:bg-orange-600/30 transition-colors group">
              <div className="text-orange-500 text-xs font-bold mb-2 font-mono">SDG 12</div>
              <RefreshCw className="text-white w-8 h-8 mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-white text-lg font-bebas leading-none tracking-wide uppercase">Responsible<br />Consumption</h3>
            </div>

            {/* SDG 13 */}
            <div className="bg-emerald-800/20 border border-emerald-700/30 p-6 rounded-xl hover:bg-emerald-800/30 transition-colors group">
              <div className="text-emerald-500 text-xs font-bold mb-2 font-mono">SDG 13</div>
              <CloudSun className="text-white w-8 h-8 mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-white text-lg font-bebas leading-none tracking-wide uppercase">Climate<br />Action</h3>
            </div>

            {/* SDG 14 */}
            <div className="bg-blue-600/20 border border-blue-600/30 p-6 rounded-xl hover:bg-blue-600/30 transition-colors group">
              <div className="text-blue-500 text-xs font-bold mb-2 font-mono">SDG 14</div>
              <Droplets className="text-white w-8 h-8 mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-white text-lg font-bebas leading-none tracking-wide uppercase">Life Below<br />Water</h3>
            </div>

            {/* SDG 15 */}
            <div className="bg-green-600/20 border border-green-600/30 p-6 rounded-xl hover:bg-green-600/30 transition-colors group">
              <div className="text-green-500 text-xs font-bold mb-2 font-mono">SDG 15</div>
              <Leaf className="text-white w-8 h-8 mb-3 opacity-80 group-hover:opacity-100 transition-opacity fill-current" />
              <h3 className="text-white text-lg font-bebas leading-none tracking-wide uppercase">Life On<br />Land</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Ecosystem (Twin Engine) */}
      <section id="ecosystem" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl text-center mb-16 font-bebas">THE <span className="text-[#58B12F]">ECOSYSTEM</span></h2>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left: Base App */}
            <Link
              href="https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards"
              target="_blank"
              className="flex-1 relative group block"
            >
              <div className="absolute inset-0 bg-blue-900/10 rounded-3xl blur-xl group-hover:bg-blue-900/20 transition-all duration-500"></div>
              <div className="relative h-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 overflow-hidden group-hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none">
                  <Smartphone className="text-blue-500 w-32 h-32 -rotate-12 translate-x-4 translate-y-4 opacity-10" />
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider">BASE</span>
                  <h3 className="text-3xl text-white font-bebas tracking-wide">Mini App</h3>
                </div>

                <p className="text-gray-200 mb-8 text-sm leading-relaxed">Lightweight entry for individuals via Farcaster or Base app.</p>

                <div className="space-y-4">
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

                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 group-hover:text-white transition-colors">
                  Open on Farcaster <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Center Connector */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-2 text-gray-200">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-[#58B12F] to-transparent"></div>
              <ArrowLeftRight className="text-[#58B12F] w-6 h-6 animate-pulse" />
              <div className="w-px h-full bg-gradient-to-b from-transparent via-[#58B12F] to-transparent"></div>
            </div>

            {/* Right: Celo dApp */}
            <Link
              href="https://dapp.decleanup.net"
              target="_blank"
              className="flex-1 relative group block"
            >
              <div className="absolute inset-0 bg-[#FAFF00]/5 rounded-3xl blur-xl group-hover:bg-[#FAFF00]/10 transition-all duration-500"></div>
              <div className="relative h-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 overflow-hidden group-hover:border-[#FAFF00]/50 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none">
                  <Layers className="text-[#FAFF00] w-32 h-32 rotate-12 translate-x-4 translate-y-4 opacity-10" />
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-[#FAFF00] text-black text-[10px] font-bold px-2 py-1 rounded tracking-wider">CELO</span>
                  <h3 className="text-3xl text-white font-bebas tracking-wide">Full Platform</h3>
                </div>

                <p className="text-gray-200 mb-8 text-sm leading-relaxed">Full platform for individuals, NGOs and organizers. Governance and coordination.</p>

                <div className="space-y-4">
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

                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FAFF00] group-hover:text-white transition-colors">
                  Explore Celo dApp <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DMRV Flow (Infrastructure) */}
      <section className="py-24 border-y border-white/5 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-white mb-2 font-bebas">CORE INFRASTRUCTURE: <span className="text-[#58B12F]">DMRV</span></h2>
          <p className="text-gray-200 text-sm mb-12 max-w-2xl">Digital Monitoring, Reporting, and Verification Process. Ensuring every cleanup is accounted for.</p>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-800 -translate-y-1/2 hidden md:block z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-[#0A0A0A] border border-neutral-700 p-8 rounded-xl flex flex-col items-center text-center hover:border-[#58B12F] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-neutral-800 text-gray-200 font-bold flex items-center justify-center mb-6 text-sm tabular-nums group-hover:bg-[#58B12F]/20 group-hover:text-[#58B12F] transition-colors">01</div>
                <Camera className="text-white w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white text-xl mb-2 font-bebas tracking-wide">Capture</h4>
                <p className="text-xs text-gray-300">Before/After photos & GPS estimates</p>
              </div>

              {/* Step 2 */}
              <div className="bg-[#0A0A0A] border border-neutral-700 p-8 rounded-xl flex flex-col items-center text-center hover:border-[#58B12F] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-neutral-800 text-gray-200 font-bold flex items-center justify-center mb-6 text-sm tabular-nums group-hover:bg-[#58B12F]/20 group-hover:text-[#58B12F] transition-colors">02</div>
                <Scan className="text-white w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white text-xl mb-2 font-bebas tracking-wide">AI Scan</h4>
                <p className="text-xs text-gray-300">Waste detection & auto-scoring</p>
              </div>

              {/* Step 3 */}
              <div className="bg-[#0A0A0A] border border-neutral-700 p-8 rounded-xl flex flex-col items-center text-center hover:border-[#58B12F] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-neutral-800 text-gray-200 font-bold flex items-center justify-center mb-6 text-sm tabular-nums group-hover:bg-[#58B12F]/20 group-hover:text-[#58B12F] transition-colors">03</div>
                <UserCheck className="text-white w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white text-xl mb-2 font-bebas tracking-wide">Verify</h4>
                <p className="text-xs text-gray-300">Community review & edge-case handling</p>
              </div>

              {/* Step 4 */}
              <div className="bg-[#0A0A0A] border border-neutral-700 p-8 rounded-xl flex flex-col items-center text-center hover:border-[#58B12F] transition-colors shadow-[0_0_20px_rgba(88,177,47,0.1)] group">
                <div className="w-10 h-10 rounded-full bg-neutral-800 text-gray-200 font-bold flex items-center justify-center mb-6 text-sm tabular-nums group-hover:bg-[#58B12F]/20 group-hover:text-[#58B12F] transition-colors">04</div>
                <LinkIcon className="text-[#58B12F] w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white text-xl mb-2 font-bebas tracking-wide">Onchain</h4>
                <p className="text-xs text-gray-300">Minted as Impact Record (Hypercert)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tokens */}
      <section id="tokens" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl text-center mb-16 font-bebas">NETWORK <span className="text-gray-200">TOKENS</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* $bDCU */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all"></div>
              <div className="w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center bg-black z-10 shrink-0 overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Image src="/images/dcu-token-logo.png" alt="$bDCU" width={96} height={96} className="w-full h-full object-contain" unoptimized />
              </div>
              <div className="z-10 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <h3 className="text-3xl text-white font-bebas tracking-wide">$bDCU</h3>
                  <span className="text-[10px] bg-neutral-800 text-gray-200 px-2 py-0.5 rounded border border-neutral-700 tracking-wider font-mono">BASE</span>
                </div>
                <div className="text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest font-mono">Utility Token</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-200"><Star className="text-blue-500 w-4 h-4" /> Earned for verified cleanup</li>
                  <li className="flex items-center gap-2 text-sm text-gray-200"><Star className="text-blue-500 w-4 h-4" /> Liquid & Tradable</li>
                  <li className="flex items-center gap-2 text-sm text-gray-200"><Star className="text-blue-500 w-4 h-4" /> Incentivizes Action</li>
                </ul>

                <a
                  href="https://basescan.org/token/0x30171b7014c02229497CdE6745DD3aD821F12b07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-gray-400 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-1 font-mono"
                >
                  <LinkIcon className="w-3 h-3" />
                  0x30171b70...b2107
                </a>
              </div>
            </div>

            {/* $cDCU */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group hover:border-[#FAFF00]/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#58B12F]/10 rounded-full blur-2xl group-hover:bg-[#58B12F]/20 transition-all"></div>
              <div className="w-24 h-24 rounded-full border-2 border-[#58B12F] flex items-center justify-center bg-black z-10 shrink-0 overflow-hidden shadow-[0_0_15px_rgba(88,177,47,0.5)]">
                <Image src="/images/dcu-token-logo.png" alt="$cDCU" width={96} height={96} className="w-full h-full object-contain" unoptimized />
              </div>
              <div className="z-10 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <h3 className="text-3xl text-white font-bebas tracking-wide">$cDCU</h3>
                  <span className="text-[10px] bg-neutral-800 text-gray-200 px-2 py-0.5 rounded border border-neutral-700 tracking-wider font-mono">CELO</span>
                </div>
                <div className="text-[#FAFF00] text-xs font-bold mb-4 uppercase tracking-widest font-mono">Governance</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-200"><ShieldCheck className="text-[#58B12F] w-4 h-4" /> Reputation Based</li>
                  <li className="flex items-center gap-2 text-sm text-gray-200"><ShieldCheck className="text-[#58B12F] w-4 h-4" /> Non-speculative</li>
                  <li className="flex items-center gap-2 text-sm text-gray-200"><ShieldCheck className="text-[#58B12F] w-4 h-4" /> Proposal Voting</li>
                </ul>
                <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  CONTRACT COMING SOON
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Roadmap */}
      <section id="roadmap" className="py-24 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl mb-12 font-bebas">ROADMAP</h2>

          <div className="space-y-8 relative pl-8 md:pl-0">
            {/* Vertical Line for mobile */}
            <div className="absolute left-[31px] top-0 bottom-0 w-px bg-neutral-800 md:hidden"></div>

            {/* Phase 1 */}
            <div className="flex flex-col md:flex-row gap-6 relative">
              <div className="hidden md:flex w-32 flex-col items-end pt-2">
                <span className="text-[#58B12F] font-bold text-lg font-bebas tracking-wide">PHASE 1</span>
                <span className="text-xs text-gray-300 uppercase tracking-widest">Live</span>
              </div>
              {/* Node */}
              <div className="absolute left-[-11px] md:static w-6 h-6 rounded-full bg-[#58B12F] border-4 border-black z-10 shrink-0"></div>

              <div className="flex-1 bg-neutral-900/50 border border-[#58B12F]/30 p-6 rounded-xl hover:bg-neutral-900/80 transition-colors">
                <h3 className="text-xl text-white mb-2 md:hidden font-bebas tracking-wide text-[#58B12F]">PHASE 1 - LIVE</h3>
                <h4 className="text-white text-lg font-medium mb-3">Foundation</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-200">
                  <div className="flex items-center gap-2"><CheckCircle className="text-[#58B12F] w-4 h-4" /> Base Mini App</div>
                  <div className="flex items-center gap-2"><CheckCircle className="text-[#58B12F] w-4 h-4" /> $bDCU Rewards</div>
                  <div className="flex items-center gap-2"><CheckCircle className="text-[#58B12F] w-4 h-4" /> Basic Verification</div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex flex-col md:flex-row gap-6 relative">
              <div className="hidden md:flex w-32 flex-col items-end pt-2">
                <span className="text-[#FAFF00] font-bold text-lg font-bebas tracking-wide">PHASE 2</span>
                <span className="text-xs text-gray-300 uppercase tracking-widest">In Dev</span>
              </div>
              {/* Node */}
              <div className="absolute left-[-11px] md:static w-6 h-6 rounded-full bg-[#FAFF00] border-4 border-black z-10 shrink-0 animate-pulse"></div>

              <div className="flex-1 bg-neutral-900/30 border border-dashed border-[#FAFF00]/30 p-6 rounded-xl hover:bg-neutral-900/50 transition-colors">
                <h3 className="text-xl text-white mb-2 md:hidden font-bebas tracking-wide text-[#FAFF00]">PHASE 2 - IN DEV</h3>
                <h4 className="text-white text-lg font-medium mb-3">Governance & Celo</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-200">
                  <div className="flex items-center gap-2"><Clock className="text-[#FAFF00] w-4 h-4" /> Celo Full dApp</div>
                  <div className="flex items-center gap-2"><Clock className="text-[#FAFF00] w-4 h-4" /> Impact Products v2</div>
                  <div className="flex items-center gap-2"><Clock className="text-[#FAFF00] w-4 h-4" /> Hypercert Records</div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex flex-col md:flex-row gap-6 relative">
              <div className="hidden md:flex w-32 flex-col items-end pt-2">
                <span className="text-gray-300 font-bold text-lg font-bebas tracking-wide">PHASE 3</span>
                <span className="text-xs text-gray-200 uppercase tracking-widest">Future</span>
              </div>
              {/* Node */}
              <div className="absolute left-[-11px] md:static w-6 h-6 rounded-full bg-gray-700 border-4 border-black z-10 shrink-0"></div>

              <div className="flex-1 bg-neutral-900/10 border border-neutral-800 p-6 rounded-xl opacity-60 hover:opacity-100 transition-opacity">
                <h3 className="text-xl text-white mb-2 md:hidden font-bebas tracking-wide text-gray-300">PHASE 3</h3>
                <h4 className="text-white text-lg font-medium mb-3">AI verification</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200">
                  <div>• RWI Rank</div>
                  <div>• Impact Staking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Theory of Change (Appendix Included) */}
      <section id="appendices" className="py-24 bg-neutral-900/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-x-auto pb-4">
            <TheoryOfChange />
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/toc"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#58B12F] hover:bg-[#58B12F]/90 text-black font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              Full theory of change
            </Link>
          </div>

          <div className="mt-12">
            <h3 className="text-xl text-[#58B12F] font-bebas tracking-wide mb-4 uppercase">Additional Details</h3>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-200 leading-relaxed">
              <div>
                <h4 className="text-white font-bold mb-2">Governance Principles</h4>
                <p>Impact first, speculation minimized. Stable capital remains primary for funding decisions to ensure outcomes are not correlated with market volatility.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Interoperability</h4>
                <p>DeCleanup is designed to align with existing SDG/ESG frameworks. Verified data is meant to travel, not stay siloed, ensuring composability across the Regen ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="bg-black border-t border-neutral-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="bg-gradient-to-b from-[#58B12F]/10 to-transparent p-12 rounded-3xl border border-[#58B12F]/20 mb-16 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#58B12F] to-transparent opacity-50"></div>

            <h2 className="text-4xl md:text-6xl text-white mb-6 font-bebas tracking-tight">NOT HYPE. <span className="text-[#58B12F]">INFRASTRUCTURE.</span></h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg font-light">
              DeCleanup Network is open, SDG-aligned infrastructure for turning real environmental work into verifiable, fundable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards" target="_blank" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                Start on Base <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://dapp.decleanup.net" target="_blank" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                Test on Celo <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/decleanup_logo_full.png"
                alt="DeCleanup Network"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-gray-200">2026 © DeCleanup Network. Open Infrastructure.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
