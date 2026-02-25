import React from "react";
import Link from "next/link";
import Image from "next/image";

interface AppConfig {
  chain: string;
  title: string;
  subtitle: string;
  bullets: string[];
  href: string;
  logo: string;
  accentColor: string;
}

const UseDeCleanupToday = () => {
  const ecosystems: AppConfig[] = [
    {
      chain: "BASE",
      title: "Mini App",
      subtitle: "Lightweight entry for individuals via Farcaster or Base app.",
      bullets: [
        "Photo-based logging",
        "Quick verification",
        "$bDCU rewards",
      ],
      href: "https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards",
      logo: "/base-logo-white.svg",
      accentColor: "#58B12F",
    },
    {
      chain: "CELO",
      title: "Full Platform",
      subtitle: "Full platform for individuals, NGOs and organizers. Governance and coordination.",
      bullets: [
        "Geolocation and maps",
        "Impact reports (Hypercerts)",
        "Funding governance",
      ],
      href: "https://dapp.decleanup.net",
      logo: "/celo-celo-logo.svg",
      accentColor: "#FAFF00",
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ecosystems.map((app, index) => (
            <Link
              key={index}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-900/50 rounded-2xl border border-gray-800 p-8 lg:p-10 flex flex-col transition-all duration-500 hover:border-[#58B12F]/40 hover:shadow-[0_0_40px_rgba(88,177,47,0.15)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Decorative background glow */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: app.accentColor }}
              />

              {/* Chain Label & Logo */}
              <div className="mb-8 flex items-center gap-3">
                <Image
                  src={app.logo}
                  alt={app.chain}
                  width={24}
                  height={24}
                  className="h-6 w-auto"
                />
                <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
                  {app.chain}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-3 text-white normal-case"
                style={{
                  fontFamily:
                    "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
                }}
              >
                {app.title}
              </h3>

              {/* Subtitle */}
              <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
                {app.subtitle}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-4 mb-8 flex-grow">
                {app.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: app.accentColor }}
                    />
                    <span className="text-gray-300 text-base sm:text-lg">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Indicator */}
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white group-hover:text-[#FAFF00] transition-colors">
                Explore on {app.chain}
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseDeCleanupToday;
