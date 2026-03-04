import React from "react";
import Link from "next/link";

const cardBase =
  "relative flex h-full flex-col rounded-2xl border border-[#58B12F]/30 bg-gray-900/80 p-6 text-left transition hover:bg-gray-900/90 hover:border-[#58B12F]/50 card-border-glow block";

const cards = [
  {
    smallTitle: "Individuals and communities who clean, care and act",
    title: "For those who care about the planet",
    body: "Choose how you want to use the app: within other platforms with minimum features or full experience in browser. We'll show you what you need and where to go.",
    bullets: [
      "Join or organize cleanup actions",
      "Take photos of the result",
      "Get recognition and rewards for real impact",
    ],
    cta: "Learn more and begin →",
    href: "/get-started",
  },
  {
    smallTitle: "Web3-native, but impact first",
    title: "For those who build and coordinate impact",
    body: "Use onchain tools to coordinate cleanups, rewards, and community governance.",
    bullets: [
      "Participate in governance and proposals",
      "Help shape how impact is verified and rewarded",
      "Build on open, impact-focused infrastructure",
    ],
    cta: "Dive deeper to the network →",
    href: "/coordinate",
  },
  {
    smallTitle: "Capital with intention",
    title: "For those who fund real-world impact",
    body: "Support verified environmental cleanups and help scale them globally.",
    bullets: [
      "Fund cleanup actions at scale",
      "Support open verification infrastructure",
      "Hold tokens connected to real-world impact",
    ],
    cta: "See how funding works →",
    href: "/funders",
  },
];

export default function WhoIsThisForCards() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-stretch">
      {cards.map((card) => (
        <Link key={card.href} href={card.href} className={cardBase}>
          <p className="mb-3 text-xs font-medium text-[#58B12F] uppercase tracking-wider">
            {card.smallTitle}
          </p>
          <h2 className="mb-3 text-xl font-bebas font-medium text-white uppercase tracking-wide">
            {card.title}
          </h2>
          <p className="mb-5 min-h-[6.5rem] text-gray-200 text-sm leading-relaxed">
            {card.body}
          </p>
          <ul className="mb-6 min-h-[7.5rem] list-none space-y-2 text-sm text-gray-300">
            {card.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58B12F] shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
          <span className="mt-auto inline-flex items-center gap-2 text-[#58B12F] hover:text-[#FAFF00] font-medium transition-colors">
            {card.cta}
          </span>
        </Link>
      ))}
    </div>
  );
}
