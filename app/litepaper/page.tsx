import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DeCleanup Network — Litepaper",
  description: "What DeCleanup is, how to try it (Base & Farcaster), DMRV, AI verification, tokens, and how to get involved. February 2026.",
};

export default function LitepaperPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
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

        {/* Page Header with visual */}
        <div className="text-center mb-12 md:mb-16">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#58B12F]/30 bg-[#58B12F]/5">
            <svg className="h-10 w-10 text-[#58B12F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal uppercase text-white mb-4">
            DeCleanup Network — Litepaper
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            February 2026
          </p>
        </div>

        {/* 1. What is DeCleanup? */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            1. What is DeCleanup?
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            <strong className="text-white">DeCleanup is a platform that helps people and organizations prove real-world environmental cleanups — transparently and at scale.</strong>
          </p>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            People all over the world clean beaches, forests, rivers, and cities. The problem is simple: <strong className="text-white">there is no trusted, shared way to prove this work happened and measure its impact.</strong>
          </p>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            DeCleanup solves this by:
          </p>
          <ul className="list-disc list-inside space-y-2 md:text-lg leading-relaxed text-gray-300 ml-4 mb-4">
            <li>verifying cleanup results using photos and AI</li>
            <li>creating trusted impact records</li>
            <li>enabling rewards, funding, and governance around real environmental action</li>
          </ul>
          <p className="md:text-lg leading-relaxed text-gray-300">
            This is not just an app — it&apos;s <strong className="text-white">open infrastructure for environmental impact verification.</strong>
          </p>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* 2. Try DeCleanup in minutes */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            2. Try DeCleanup in minutes (no setup needed)
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-8">
            If you already have an account on <strong className="text-white">Base</strong> or <strong className="text-white">Farcaster</strong>, you can use DeCleanup here — no extra sign-up. Pick where you&apos;re active:
          </p>

          <div className="space-y-8">
            <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">🧭 I use Base / the web app</h3>
              <p className="text-gray-300 mb-4">
                Open the DeCleanup Mini App in your browser. You can log in with a wallet (e.g. Base) and use it without Farcaster.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4 ml-4">
                <li>Log cleanups and upload photos</li>
                <li>See verified impact and rewards</li>
                <li>Use $bDCU rewards on Base</li>
              </ul>
              <p className="text-sm text-gray-500 mb-3">Where:</p>
              <Link href="https://miniapp.decleanup.net" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#58B12F]/80 font-medium">
                miniapp.decleanup.net →
              </Link>
            </div>

            <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">🟣 I have a Farcaster account</h3>
              <p className="text-gray-300 mb-4">
                Use DeCleanup inside Farcaster as a Mini App. Open it from the Farcaster app — same rewards and verification, in your feed.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4 ml-4">
                <li>Open the DeCleanup Mini App from Farcaster</li>
                <li>Submit cleanups and share results with your channel</li>
                <li>Earn $bDCU and build reputation</li>
              </ul>
              <p className="text-sm text-gray-500 mb-3">Where:</p>
              <Link href="https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FAFF00] hover:text-[#FAFF00]/80 font-medium">
                DeCleanup Mini App on Farcaster →
              </Link>
            </div>
          </div>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* 3. Full DeCleanup application (Celo) */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            3. The full DeCleanup application (Celo)
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            For users who want the <strong className="text-white">complete feature set</strong>, DeCleanup runs as a full dApp on Celo.
          </p>
          <p className="mb-6">
            <Link href="https://dapp.decleanup.net" target="_blank" rel="noopener noreferrer" className="text-[#58B12F] hover:text-[#58B12F]/80 font-medium underline">
              Celo App (Testnet): dapp.decleanup.net
            </Link>
            <span className="text-gray-500 text-sm ml-2">(Currently live on Celo Sepolia testnet)</span>
          </p>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-6">
            This version unlocks the full DeCleanup vision.
          </p>

          <h3 className="text-xl font-semibold text-white mb-4">Core Features</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-white mb-2">✅ Cleanup Actions</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>Create or join cleanup events</li>
                <li>Upload before &amp; after photos</li>
                <li>Track cleanup locations and results</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-2">📊 Impact Reports &amp; Hypercerts</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>Verified cleanups generate <strong className="text-white">impact reports</strong></li>
                <li>Impact can be minted as <strong className="text-white">Hypercerts</strong></li>
                <li>Enables future funding, sponsorship, and reuse of impact data</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-2">🏛 Governance &amp; Funding (Gardens)</h4>
              <p className="text-gray-300 mb-2">DeCleanup integrates governance and funding flows.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>Proposals for cleanup equipment reimbursement</li>
                <li>Community voting on funding priorities</li>
                <li>Transparent decision-making</li>
              </ul>
              <p className="text-gray-300 mt-2">This allows communities to <strong className="text-white">self-organize and allocate resources</strong> around environmental action.</p>
            </div>
          </div>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* 4. DMRV */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            4. DMRV — Digital Monitoring, Reporting &amp; Verification
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            At the core of DeCleanup is <strong className="text-white">DMRV</strong>.
          </p>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            <strong className="text-white">DMRV turns cleanup actions into trusted, auditable data.</strong>
          </p>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            It combines:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-4">
            <li>photos from the field</li>
            <li>AI-assisted verification</li>
            <li>human review when needed</li>
            <li>on-chain records for transparency</li>
          </ul>
          <p className="md:text-lg leading-relaxed text-gray-300">
            This makes DeCleanup useful not only for individuals, but also for: NGOs, corporates, large cleanup sponsors, and public funding programs.
          </p>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* 5. AI Verification — Coming Soon */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            5. AI Verification (DMRV) — Coming Soon
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-6">
            AI-assisted verification is being rolled out in phases.
          </p>

          <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">🤖 ML Verification (DMRV)</h3>
            <p className="text-gray-300 mb-2"><strong className="text-white">Status:</strong> Phase 1 &amp; 2 complete — AI-assisted verification pipeline ready.</p>
            <p className="text-gray-300 mb-4">
              The system detects waste in before/after photos, scores cleanup impact, and can auto-verify or flag for human review. It uses object-detection models trained on real-world litter data (e.g. TACO: Trash Annotations in Context — 60+ waste categories).
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Reference:</strong>{" "}
              <a href="https://github.com/jeremy-rico/litter-detection" target="_blank" rel="noopener noreferrer" className="text-[#58B12F] hover:underline">TACO fine-tuned litter detection (GitHub)</a>
            </p>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">Why AI verification?</h3>
          <p className="md:text-lg leading-relaxed text-gray-300">
            Manual verification does not scale. AI helps: reduce fraud, speed up verification, make impact reporting more objective. Human review remains available for edge cases.
          </p>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* 6. Tokens & Network Economy */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            6. Tokens &amp; Network Economy
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-6">
            DeCleanup uses tokens to coordinate incentives — <strong className="text-white">not to replace real impact.</strong>
          </p>
          <p className="text-gray-300 mb-4"><strong className="text-white">Live tokens:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-6">
            <li><strong className="text-white">$bDCU</strong> — live on Base</li>
            <li><strong className="text-white">$cDCU</strong> — coming soon (Celo)</li>
          </ul>
          <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-3">$cDCU Airdrop</h3>
            <p className="text-gray-300 mb-2">$cDCU will be airdropped to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
              <li>Early DeCleanup V1 users</li>
              <li>Community donors &amp; supporters</li>
              <li>Contributors (2024–2025)</li>
            </ul>
            <p className="text-gray-300 mt-3">This rewards people who supported the project <strong className="text-white">before scale and hype.</strong></p>
          </div>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* 7. What DeCleanup enables long-term */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            7. What DeCleanup enables long-term
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300 mb-4">
            DeCleanup is building infrastructure for:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-6">
            <li>verified environmental impact</li>
            <li>transparent funding flows</li>
            <li>scalable cleanup programs</li>
            <li>interoperable impact data</li>
          </ul>
          <p className="text-gray-300 mb-2">Possible future integrations:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
            <li>NGO reporting</li>
            <li>corporate ESG</li>
            <li>public funding programs</li>
            <li>cross-chain impact markets</li>
          </ul>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* 8. How to get involved */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            8. How to get involved
          </h2>
          <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300">
            <li>🌱 Join or organize a cleanup</li>
            <li>🧪 Test the Celo dApp</li>
            <li>🧠 Contribute to governance</li>
            <li>💚 Support the network</li>
          </ul>
          <p className="mt-6 md:text-lg leading-relaxed text-gray-300">
            DeCleanup is open, evolving, and community-driven.
          </p>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Final note */}
        <section className="mb-12 md:mb-16 rounded-2xl border border-[#58B12F]/20 bg-[#58B12F]/5 p-6 md:p-8">
          <p className="md:text-lg leading-relaxed text-gray-300 italic">
            DeCleanup is not hype — it&apos;s infrastructure. We welcome non-crypto readers, let people try the product in minutes, and layer in technical depth only when it helps. Real cleanups, real proof, real impact.
          </p>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Roadmap Section — kept */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Roadmap (Updated)
          </h2>
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2 rounded-xl border border-[#58B12F]/20 bg-gray-900/50 px-4 py-2 text-sm text-gray-400">
              <span className="h-2 w-2 rounded-full bg-[#58B12F] animate-pulse" />
              Phase 1 Live · Phases 2–5 in development
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Phase 1 — Base Mini App (Live)
              </h3>
              <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
                <li>Farcaster app</li>
                <li>$bDCU rewards</li>
                <li>basic logging</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-l-4 border-[#58B12F] p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Phase 2 — Celo Full dApp (In Development)
              </h3>
              <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
                <li>dashboards + leaderboards</li>
                <li>streaks</li>
                <li>Impact Products v2</li>
                <li>claim & stake</li>
                <li>hypercerts</li>
                <li>community verification</li>
                <li>$cDCU governance</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Phase 3 — Reputation + Marketplace Layer
              </h3>
              <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
                <li>RWI Rank</li>
                <li>Regen Bazaar staking (Impact Products → $REBAZ)</li>
                <li>advanced analytics</li>
                <li>partner integrations</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Phase 4 — Multichain Expansion
              </h3>
              <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
                <li>unified identity</li>
                <li>multichain Hypercerts</li>
                <li>Base ↔ Celo syncing</li>
                <li>additional EVM chains</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-l-4 border-[#FAFF00] p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-normal uppercase text-white mb-4">
                Phase 5 — DeCleanup V3
              </h3>
              <ul className="space-y-2 md:text-lg leading-relaxed text-gray-300 list-disc list-inside ml-4">
                <li>ESG partnerships</li>
                <li>machine-learning verification</li>
                <li>IoT integrations</li>
                <li>enterprise impact reporting</li>
                <li>mobile app with offline mode</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Partners Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Partners
          </h2>
          <p className="md:text-lg leading-relaxed text-gray-300">
            Regen Bazaar, EcoSynthesisX, Atlantis, Hypercerts Foundation, Gardens.fund, NGOs, university partners, ReFi communities, USDGLO, DeTrash, and more.
          </p>
        </section>

        <div className="h-px bg-[#58B12F] mb-12 md:mb-16"></div>

        {/* Backed by — Giveth, Octant, Gitcoin, Ethereum for the World (logo placeholders) */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6">
            Backed by
          </h2>
          <p className="mb-8 md:text-lg leading-relaxed text-gray-300">
            DeCleanup has been supported by Giveth, Octant, Gitcoin, and Ethereum for the World.
          </p>
          {/* Logo placeholders — replace with <Image> or <img> when logos are ready */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-gray-900/50 p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 text-gray-500">
                <span className="text-xs">Giveth logo</span>
              </div>
              <span className="text-sm font-medium text-white">Giveth</span>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-gray-900/50 p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 text-gray-500">
                <span className="text-xs">Octant logo</span>
              </div>
              <span className="text-sm font-medium text-white">Octant</span>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-gray-900/50 p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 text-gray-500">
                <span className="text-xs">Gitcoin logo</span>
              </div>
              <span className="text-sm font-medium text-white">Gitcoin</span>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-gray-900/50 p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 text-gray-500">
                <span className="text-xs">E4W logo</span>
              </div>
              <span className="text-sm font-medium text-white">Ethereum for the World</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

