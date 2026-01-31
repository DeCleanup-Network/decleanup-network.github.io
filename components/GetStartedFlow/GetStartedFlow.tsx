"use client";

import React, { useState } from "react";
import Link from "next/link";

type Step =
  | "intro"
  | "start"
  | "choose"
  | "celo"
  | "farcaster"
  | "base"
  | "base_only"
  | "end";

const GUIDE_LINKS = {
  metamask: "https://metamask.io/download/",
  baseNetwork: "https://docs.base.org/network-information",
  celoNetwork: "https://docs.celo.org/network",
  celoSepoliaNetwork: "https://docs.celo.org/tooling/wallets/metamask/add-celo-testnet-to-metamask",
  celoFaucet: "https://faucet.celo.org/celo-sepolia",
  ethForGas: "https://www.coinbase.com/learn/tips-and-tutorials/how-to-get-eth",
  farcasterDocs: "https://docs.farcaster.xyz",
  farcasterRegister: "https://farcaster.xyz/",
  baseAppRegister: "https://join.base.app/",
  baseApp: "https://base.org",
  baseAppGetStarted: "https://help.coinbase.com/en/base/getting-started/get-started",
  decleanupFarcaster: "https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards",
  decleanupBase: "https://base.app/app/miniapp.decleanup.net",
  decleanupCelo: "https://dapp.decleanup.net",
  warpcast: "https://warpcast.com",
};

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-[#58B12F]/30 bg-gray-900/90 p-6 md:p-8 " +
        className
      }
    >
      {children}
    </div>
  );
}

function GuideLinks({ variant }: { variant: "base" | "celo" | "wallet" }) {
  const links =
    variant === "base"
      ? [
          { label: "Get started with Base app", href: GUIDE_LINKS.baseAppGetStarted },
          { label: "Tips and tutorials", href: GUIDE_LINKS.ethForGas },
        ]
      : variant === "celo"
        ? [
            { label: "Download MetaMask", href: GUIDE_LINKS.metamask },
            { label: "Add Celo Sepolia network", href: GUIDE_LINKS.celoSepoliaNetwork },
            { label: "Get CELO for transactions", href: GUIDE_LINKS.celoFaucet },
          ]
        : [
            { label: "MetaMask guide", href: GUIDE_LINKS.metamask },
            { label: "Farcaster setup", href: GUIDE_LINKS.farcasterDocs },
          ];
  return (
    <div className="mt-4 pt-4 border-t border-white/10">
      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Guides</p>
      <ul className="space-y-1 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58B12F] hover:text-[#FAFF00] underline"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function GetStartedFlow() {
  const [step, setStep] = useState<Step>("intro");

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Step: Intro - For those who care about the planet (before flowchart) */}
      {step === "intro" && (
        <div className="space-y-6">
          <Card>
            <h2 className="text-lg font-medium text-[#58B12F] mb-4">For those who care about the planet</h2>

            <h3 className="text-xl font-medium text-white mb-3">The problem</h3>
            <p className="text-gray-400 text-sm mb-3">People clean beaches, rivers, forests - but:</p>
            <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 ml-0">
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Their work is invisible beyond social media</li>
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>There&apos;s no durable proof they can reuse</li>
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Recognition and support are inconsistent</li>
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Motivation drops without feedback or continuity</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3">What DeCleanup changes</h3>
            <p className="text-gray-400 text-sm mb-3">We give everyday people a simple flow:</p>
            <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 ml-0">
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Join or organize a cleanup</li>
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Document the result (photos, location, basic data)</li>
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Publish (immutable proof onchain)</li>
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Earn recognition, reputation, and rewards</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3">DMRV</h3>
            <ul className="list-none space-y-2 text-sm text-gray-300 mb-4 ml-0">
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span><strong className="text-white">Data:</strong> photos, location, cleanup type, waste categories</li>
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span><strong className="text-white">Measurement:</strong> amount collected, frequency, participation</li>
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span><strong className="text-white">Reporting:</strong> standardized, readable cleanup records</li>
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span><strong className="text-white">Verification:</strong> records anchored onchain so they can&apos;t be altered</li>
            </ul>
            <p className="text-gray-400 text-sm mb-6">This means: Your cleanup can&apos;t be erased. Your contribution adds up over time. Your impact becomes provable.</p>

            <h3 className="text-xl font-medium text-white mb-3">Outcome</h3>
            <ul className="list-none space-y-2 text-sm text-gray-300 mb-6 ml-0">
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>More people clean up, more often</li>
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Contributors build an onchain impact reputation</li>
              <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span>Cleanups become visible, countable, and supportable</li>
            </ul>
            <p className="text-sm text-gray-500 italic mb-6">Impact first. Web3 only where it helps.</p>

            <button
              onClick={() => setStep("start")}
              className="w-full px-5 py-3 rounded-xl bg-[#FAFF00] text-black font-medium hover:bg-[#FAFF00]/90 transition"
            >
              Choose your path →
            </button>
          </Card>
        </div>
      )}

      {/* Step: Start - Do you have / want Farcaster or Base App? */}
      {step === "start" && (
        <Card>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-4">
            Do you have a Farcaster account or the Base app?
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-6">
            DeCleanup Rewards runs as a mini app inside Farcaster client or the Base app. If you prefer not to use either, you can use the full platform on Celo chain.
          </p>
          <div className="space-y-4 mb-6">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-gray-300 font-medium mb-2">
                <a
                  href={GUIDE_LINKS.farcasterRegister}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58B12F] hover:text-[#FAFF00] underline"
                >
                  Farcaster
                </a>
              </p>
              <p className="text-sm text-gray-400">
                Farcaster is an open social protocol that lets people own their identity and social graph. Multiple apps can use the same feed, profiles, and followers, so your social presence isn’t locked into one platform.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-gray-300 font-medium mb-2">
                <a
                  href={GUIDE_LINKS.baseAppRegister}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58B12F] hover:text-[#FAFF00] underline"
                >
                  Base App
                </a>
              </p>
              <p className="text-sm text-gray-400">
                Base App is an onchain consumer app built on Base that uses the Farcaster feed. It combines social posts, mini apps, payments, trading, chat, and earning into one place - so content isn’t just read, it’s actionable.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setStep("celo")}
              className="px-5 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              No - use full platform instead
            </button>
            <button
              onClick={() => setStep("choose")}
              className="px-5 py-3 rounded-xl bg-[#58B12F] text-black font-medium hover:bg-[#58B12F]/90 transition"
            >
              Yes - I’ll use mini app
            </button>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => setStep("intro")}
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back
            </button>
          </div>
        </Card>
      )}

      {/* Step: Choose - Base App or Farcaster */}
      {step === "choose" && (
        <>
          <Card>
            <h2 className="text-xl md:text-2xl font-medium text-white mb-4">
              Choose one to get started
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              You can add the other later. Pick the one you prefer to set up first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setStep("base_only")}
                className="flex-1 p-5 rounded-xl border border-[#58B12F]/40 bg-[#58B12F]/10 text-white hover:bg-[#58B12F]/20 transition text-left"
              >
                <span className="font-medium block mb-1">Register on Base app</span>
                <span className="text-sm text-gray-400">Use DeCleanup inside the Base mobile app</span>
              </button>
              <button
                onClick={() => setStep("farcaster")}
                className="flex-1 p-5 rounded-xl border border-[#58B12F]/40 bg-[#58B12F]/10 text-white hover:bg-[#58B12F]/20 transition text-left"
              >
                <span className="font-medium block mb-1">Register on Farcaster</span>
                <span className="text-sm text-gray-400">Use DeCleanup mini app inside Farcaster / Warpcast</span>
              </button>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={() => setStep("start")}
                className="text-sm text-gray-400 hover:text-white"
              >
                ← Back
              </button>
            </div>
          </Card>
        </>
      )}

      {/* Step: Celo path */}
      {step === "celo" && (
        <Card>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
            Try the full DeCleanup Rewards platform
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Explore full dashboard, leaderboard, and governance. Works with a wallet (e.g. MetaMask) on Celo chain.
          </p>
          <div className="mb-4">
            <Link
              href={GUIDE_LINKS.decleanupCelo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAFF00] text-black font-medium hover:bg-[#FAFF00]/90"
            >
              Open DeCleanup dApp (currently on testnet) →
            </Link>
          </div>
          <GuideLinks variant="celo" />
          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => setStep("start")}
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back to start
            </button>
          </div>
        </Card>
      )}

      {/* Step: Farcaster path - then “Also Base?” */}
      {step === "farcaster" && (
        <Card>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
            DeCleanup on Farcaster
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Open the DeCleanup mini app inside Farcaster. Log in with your Farcaster account and start logging cleanups.
          </p>
          <div className="mb-4 space-y-3">
            <a
              href={GUIDE_LINKS.farcasterRegister}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-3 rounded-xl border border-[#58B12F]/50 text-[#58B12F] hover:bg-[#58B12F]/10 text-center text-sm font-medium"
            >
              Get Farcaster app or use in browser
            </a>
            <Link
              href={GUIDE_LINKS.decleanupFarcaster}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAFF00] text-black font-medium hover:bg-[#FAFF00]/90 w-full justify-center"
            >
              Open DeCleanup mini app on Farcaster →
            </Link>
          </div>
          <div className="mb-6 rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-sm text-gray-400 mb-2">
              To fund your wallet: open the Farcaster wallet, press <strong className="text-gray-300">Deposit</strong>, then copy your wallet address. Transfer ETH from an exchange or another wallet to that address, or buy directly via a linked Coinbase account.
            </p>
            <a
              href={GUIDE_LINKS.ethForGas}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#58B12F] hover:text-[#FAFF00] underline"
            >
              Tips and tutorials →
            </a>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Do you also want to use DeCleanup on the Base app?
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setStep("end")}
              className="px-5 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              No, I’m done
            </button>
            <button
              onClick={() => setStep("base")}
              className="px-5 py-3 rounded-xl bg-[#58B12F] text-black font-medium hover:bg-[#58B12F]/90 transition"
            >
              Yes - also open on Base app
            </button>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => setStep("choose")}
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back
            </button>
          </div>
        </Card>
      )}

      {/* Step: Base only (user chose Base at “choose”) */}
      {step === "base_only" && (
        <Card>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
            DeCleanup on Base app
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Install the Base app, then open DeCleanup Rewards as a mini app inside it. Pin it to your apps to be able to always find it later.
          </p>
          <div className="space-y-3 mb-4">
            <a
              href={GUIDE_LINKS.baseAppRegister}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-3 rounded-xl border border-[#58B12F]/50 text-[#58B12F] hover:bg-[#58B12F]/10 text-center"
            >
              Get Base app
            </a>
            <Link
              href={GUIDE_LINKS.decleanupBase}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAFF00] text-black font-medium hover:bg-[#FAFF00]/90 w-full justify-center"
            >
              Open DeCleanup on Base app →
            </Link>
          </div>
          <GuideLinks variant="base" />
          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => setStep("choose")}
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back
            </button>
          </div>
        </Card>
      )}

      {/* Step: Base after Farcaster (“Also use Base?” → Yes) */}
      {step === "base" && (
        <Card>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
            DeCleanup on Base app
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Install the Base app, then open DeCleanup Rewards as a mini app inside it. Pin it to your apps to be able to always find it later.
          </p>
          <div className="space-y-3 mb-4">
            <a
              href={GUIDE_LINKS.baseAppRegister}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-3 rounded-xl border border-[#58B12F]/50 text-[#58B12F] hover:bg-[#58B12F]/10 text-center"
            >
              Get Base app
            </a>
            <Link
              href={GUIDE_LINKS.decleanupBase}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAFF00] text-black font-medium hover:bg-[#FAFF00]/90 w-full justify-center"
            >
              Open DeCleanup on Base app →
            </Link>
          </div>
          <GuideLinks variant="base" />
          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => setStep("farcaster")}
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back to Farcaster step
            </button>
          </div>
        </Card>
      )}

      {/* Step: End */}
      {step === "end" && (
        <Card>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
            You’re all set
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Use DeCleanup on Farcaster to log cleanups and earn rewards. Need the full dApp or Base app later? Come back to this page or use the links on the main page.
          </p>
          <Link
            href="/#apps"
            className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#FAFF00]"
          >
            Back to main page →
          </Link>
        </Card>
      )}
    </div>
  );
}
