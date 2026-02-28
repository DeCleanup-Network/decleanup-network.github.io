"use client";

import React, { useState } from "react";
import { BadgeCheck, ClipboardCheck, Users } from "lucide-react";

const cards = [
  {
    title: "Verifiable Data",
    icon: BadgeCheck,
    iconColor: "text-[#58B12F]",
    bgColor: "bg-[#58B12F]/10",
    borderHover: "hover:border-[#58B12F]/50",
    backContent: (
      <>
        <p className="text-gray-200 text-sm leading-relaxed mb-2">
          We turn invisible cleanup efforts into standardized, onchain evidence. No more &quot;trust me&quot;—only &quot;verify me.&quot;
        </p>
        <p className="text-gray-400 text-xs leading-relaxed">
          Geotagged photos, timestamps, and DMRV create immutable records on Base and Celo—the foundation for rewards, impact products, and ESG reporting.
        </p>
      </>
    ),
  },
  {
    title: "Auditable Impact",
    icon: ClipboardCheck,
    iconColor: "text-[#FAFF00]",
    bgColor: "bg-[#FAFF00]/10",
    borderHover: "hover:border-[#FAFF00]/50",
    backContent: (
      <>
        <p className="text-gray-200 text-sm leading-relaxed mb-2">
          Traceable impact records compatible with Hypercerts. Funders see where capital goes and what outcomes it produced.
        </p>
        <p className="text-gray-400 text-xs leading-relaxed">
          AI + human verification reduces fraud; impact is attributed to real actors, building reputation and outcome-based funding.
        </p>
      </>
    ),
  },
  {
    title: "Governable Funding",
    icon: Users,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderHover: "hover:border-blue-400/50",
    backContent: (
      <>
        <p className="text-gray-200 text-sm leading-relaxed mb-2">
          DAO-based allocation using stable assets and impact-linked tokens. Communities and funders decide how capital flows.
        </p>
        <p className="text-gray-400 text-xs leading-relaxed">
          Outcome-based pools and Gardens proposals support long-term sustainability; governance is tied to $cDCU and reputation.
        </p>
      </>
    ),
  },
];

export default function LitepaperOverviewCards() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => {
        const isFlipped = flipped === index;
        const Icon = card.icon;
        return (
          <button
            key={index}
            type="button"
            onClick={() => setFlipped(isFlipped ? null : index)}
            className="relative h-[320px] w-full cursor-pointer text-left overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58B12F]"
            aria-label={isFlipped ? `Hide ${card.title} description` : `Show ${card.title} description`}
          >
            {/* Two panels stacked: show one, hide the other. No 3D = no mirroring. */}
            <div
              className={`absolute inset-0 p-8 rounded-2xl flex flex-col items-center justify-center transition-opacity duration-300 ${card.borderHover} ${!isFlipped ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}
            >
              <div className={`w-12 h-12 rounded-full ${card.bgColor} flex items-center justify-center mb-4`}>
                <Icon className={`${card.iconColor} w-6 h-6`} />
              </div>
              <h3 className="text-white font-bebas tracking-wide text-xl md:text-2xl uppercase text-center">
                {card.title}
              </h3>
              <p className="text-xs text-gray-400 mt-2">Click to read more</p>
            </div>
            <div
              className={`absolute inset-0 p-5 rounded-2xl flex flex-col justify-between bg-neutral-900/95 border border-white/10 transition-opacity duration-300 ${isFlipped ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}
            >
              <div className="flex-1 min-h-0 overflow-y-auto">{card.backContent}</div>
              <p className="text-xs text-gray-500 mt-3 shrink-0">Click to flip back</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
