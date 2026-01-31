import React from "react";
import Link from "next/link";
import Image from "next/image";

interface AppConfig {
  title: string;
  subtitle: string;
  bullets: string[];
  buttonLabel: string;
  buttonHref: string;
  buttonDisabled: boolean;
  secondButtonLabel?: string;
  secondButtonHref?: string;
  note: string | null;
  imageUrl?: string;
}

const UseDeCleanupToday = () => {
  const apps: AppConfig[] = [
    {
      title: "Base mini app",
      subtitle: "Fast actions, onchain rewards.",
      bullets: [
        "Log in and share cleanup impact",
        "Earn and use $bDCU on Base",
      ],
      buttonLabel: "Open mini app on Farcaster",
      buttonHref:
        "https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards",
      buttonDisabled: false,
      secondButtonLabel: "Open web app",
      secondButtonHref: "https://miniapp.decleanup.net",
      note: null,
    },
    {
      title: "$bDCU token on Base",
      subtitle: "Cleanup reward + trading token.",
      bullets: [
        "Live on Base",
        "Used for quick rewards and trading",
        "Holders will be airdropped $cDCU for the full experience",
      ],
      buttonLabel: "Swap ETH/bDCU",
      buttonHref: "https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07",
      buttonDisabled: false,
      secondButtonLabel: "Swap USDT/bDCU",
      secondButtonHref: "https://app.uniswap.org/swap?chain=base&inputCurrency=0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07",
      note: "Contract: 0x30171b7014c02229497CdE6745DD3aD821F12b07",
      imageUrl: "/token-icon.png",
    },
    {
      title: "Full dApp on Celo",
      subtitle: "All DeCleanup Rewards features, plus governance.",
      bullets: [
        "Full dashboard, leaderboard, streaks",
        "Recycables rewards promo, supported by DeTrash Global and Recy.App",
        "Impact Products and $cDCU rewards",
        "COMING_SOON_HEADING",
        "Staking",
        "Governance with $cDCU on Gardens.fund",
        "Hypercerts: 1 cleanup hypercert after every 10 verified cleanups",
      ],
      buttonLabel: "MVP on Celo Sepolia",
      buttonHref: "https://dapp.decleanup.net",
      buttonDisabled: false,
      note: "$cDCU starts as a reputation + governance token for early cleaners.",
    },
  ];

  return (
    <section
      id="apps"
      className="w-full overflow-x-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header - after hero: EARN DECLEANUP REWARDS TODAY */}
        <div className="mb-16 text-center">
          <h2
            className="mb-4 text-3xl font-normal uppercase leading-tight text-white md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
          >
            EARN DECLEANUP <span className="text-[#58B12F]">REWARDS</span> TODAY
          </h2>
          <p className="mx-auto max-w-xl text-gray-400">
            Choose your path to impact. Start with our Base Mini App for quick
            rewards or dive into the full ecosystem on Celo.
          </p>
        </div>

        {/* Cards Layout: Two Base cards side by side, then Celo full width */}
        <div className="space-y-6 lg:space-y-8">
          {/* Base Cards - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Base / Celo CTA cards: Aura-style hover-reactive glow (subtle border + shadow) */}
            {apps.slice(0, 2).map((app, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-2xl border border-gray-800 p-6 lg:p-8 flex flex-col transition-all duration-300 hover:border-[#58B12F]/40 hover:shadow-[0_0_30px_rgba(88,177,47,0.12)] hover:-translate-y-1"
              >
                {/* Chain Label */}
                <div className="mb-4 flex justify-center items-center w-full">
                  <Image
                    src="/base-logo-white.svg"
                    alt="Base"
                    width={100}
                    height={32}
                    className="h-5 w-auto"
                  />
                </div>

                {/* Image (if present) */}
                {app.imageUrl && (
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={app.imageUrl}
                      alt={index === 0 ? "DCU Icon" : "DCU Token Logo"}
                      width={60}
                      height={60}
                      className="w-14 h-12 object-contain"
                      unoptimized
                    />
                  </div>
                )}

                {/* Title - Secondary font, normal case */}
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl font-medium mb-3 text-white normal-case"
                  style={{
                    fontFamily:
                      "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
                  }}
                >
                  {app.title}
                </h3>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-gray-300 mb-6 font-medium">
                  {app.subtitle}
                </p>

                {/* Bullet Points */}
                <ul className="text-gray-400 text-sm sm:text-base mb-6 space-y-2 flex-grow">
                  {app.bullets.map((bullet, idx) => {
                    // Special handling for swap links bullet
                    if (bullet.startsWith("Swap:")) {
                      const ethSwapUrl = "https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07";
                      const usdtSwapUrl = "https://app.uniswap.org/swap?chain=base&inputCurrency=0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07";
                      return (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-[#58B12F] font-bold">•</span>
                          <span>
                            Swap:{" "}
                            <Link
                              href={ethSwapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#58B12F] hover:text-[#FAFF00] underline transition-colors"
                            >
                              ETH/bDCU
                            </Link>
                            {", "}
                            <Link
                              href={usdtSwapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#58B12F] hover:text-[#FAFF00] underline transition-colors"
                            >
                              USDT/bDCU
                            </Link>
                          </span>
                        </li>
                      );
                    }
                    return (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-[#58B12F] font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Note (if present) */}
                {app.note && (
                  <p className="text-sm text-gray-500 mb-6 italic">
                    {app.note.startsWith("Contract:") ? (
                      <>
                        Contract:{" "}
                        <Link
                          href={`https://basescan.org/address/${app.note.split("Contract:")[1].trim()}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#58B12F] hover:text-[#FAFF00] underline transition-colors"
                        >
                          {app.note.split("Contract:")[1].trim()}
                        </Link>
                      </>
                    ) : (
                      app.note
                    )}
                  </p>
                )}

                {/* Buttons */}
                <div className="space-y-3">
                  {app.buttonDisabled ? (
                    <button
                      disabled
                      className="w-full bg-gray-800 text-gray-500 cursor-not-allowed px-6 py-3 text-sm sm:text-base font-semibold tracking-wider opacity-50 pointer-events-none"
                    >
                      {app.buttonLabel}
                    </button>
                  ) : (
                    <Link
                      href={app.buttonHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#FAFF00] text-black font-medium text-sm sm:text-base tracking-wider hover:bg-[#FAFF00]/90 transition-colors duration-200 border border-[#FAFF00] normal-case hover:shadow-[0_0_20px_rgba(250,255,0,0.25)] transition-all duration-300 text-center block px-6 py-3 rounded-xl"
                      style={{ textTransform: "none" }}
                    >
                      {app.buttonLabel}
                    </Link>
                  )}

                  {/* Second button (if present) */}
                  {app.secondButtonLabel && app.secondButtonHref && (
                    <Link
                      href={app.secondButtonHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-black text-[#FAFF00] font-medium text-sm sm:text-base tracking-wider hover:bg-gray-900 transition-colors duration-200 border border-[#FAFF00] normal-case hover:shadow-[0_0_20px_rgba(250,255,0,0.2)] transition-all duration-300 text-center block px-6 py-3 rounded-xl"
                      style={{ textTransform: "none" }}
                    >
                      {app.secondButtonLabel}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Celo Card - Full Width; same hover-reactive glow */}
          {apps[2] && (
            <div className="group bg-gray-900 rounded-2xl border border-gray-800 p-6 lg:p-8 flex flex-col transition-all duration-300 hover:border-[#FAFF00]/30 hover:shadow-[0_0_30px_rgba(250,255,0,0.08)] hover:-translate-y-1">
              {/* Chain Label */}
              <div className="mb-4 flex justify-center items-center w-full">
                <Image
                  src="/celo-celo-logo.svg"
                  alt="Celo"
                  width={100}
                  height={100}
                  className="h-5 w-auto"
                />
                <span className="text-sm font-medium text-gray-400 tracking-wider ml-2">celo</span>
              </div>

              {/* Title - Secondary font, normal case */}
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-medium mb-3 text-white normal-case"
                style={{
                  fontFamily:
                    "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
                }}
              >
                {apps[2].title}
              </h3>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 font-medium">
                {apps[2].subtitle}
              </p>

              {/* Bullet Points */}
              <ul className="text-gray-400 text-sm sm:text-base lg:text-lg mb-6 space-y-2 flex-grow">
                {apps[2].bullets.map((bullet, idx) => {
                  // Special handling for bullet with DeTrash Global link (second bullet, index 1)
                  if (idx === 1) {
                    const linkUrl = "https://detrashtoken.com/en";
                    const parts = bullet.split("DeTrash Global");
                    return (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-[#58B12F] font-bold">•</span>
                        <span>
                          {parts[0]}
                          <Link
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#58B12F] hover:text-[#FAFF00] underline transition-colors"
                          >
                            DeTrash Global
                          </Link>
                          {parts[1]}
                        </span>
                      </li>
                    );
                  }
                  // Special handling for "Coming soon" heading
                  if (bullet === "COMING_SOON_HEADING") {
                    return (
                      <li key={idx} className="mt-3 mb-2">
                        <span className="text-xs sm:text-sm text-gray-500 italic font-medium">
                          Coming soon:
                        </span>
                      </li>
                    );
                  }
                  return (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-[#58B12F] font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  );
                })}
              </ul>

              {/* Note (if present) */}
              {apps[2].note && (
                <p className="text-sm lg:text-base text-gray-500 mb-6 italic">
                  {apps[2].note.startsWith("Contract:") ? (
                    <>
                      Contract:{" "}
                      <Link
                        href={`https://basescan.org/address/${apps[2].note.split("Contract:")[1].trim()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#58B12F] hover:text-[#FAFF00] underline transition-colors"
                      >
                        {apps[2].note.split("Contract:")[1].trim()}
                      </Link>
                    </>
                  ) : (
                    apps[2].note
                  )}
                </p>
              )}

              {/* Button */}
              {apps[2].buttonDisabled ? (
                <button
                  disabled
                  className="w-full bg-gray-800 text-gray-500 cursor-not-allowed px-6 py-3 text-sm sm:text-base font-semibold tracking-wider opacity-50 pointer-events-none"
                >
                  {apps[2].buttonLabel}
                </button>
              ) : (
                <Link
                  href={apps[2].buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FAFF00] text-black font-medium text-sm sm:text-base tracking-wider hover:bg-[#FAFF00]/90 transition-colors duration-200 border border-[#FAFF00] normal-case hover:shadow-[0_0_20px_rgba(250,255,0,0.25)] transition-all duration-300 text-center block px-6 py-3 rounded-xl"
                  style={{ textTransform: "none" }}
                >
                  {apps[2].buttonLabel}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UseDeCleanupToday;
