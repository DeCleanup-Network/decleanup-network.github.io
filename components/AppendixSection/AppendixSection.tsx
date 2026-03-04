import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Theory of Change",
    description: "How verified cleanups create measurable environmental and social impact.",
    href: "/toc",
  },
  {
    title: "DMRV",
    description: "How Digital Monitoring, Reporting & Verification works under the hood.",
    href: "/litepaper#dmrv",
  },
  {
    title: "Tokenomics",
    description: "Tokens, rewards, and how value flows in the network.",
    href: "/tokenomics",
  },
  {
    title: "Roadmap",
    description: "Where we are, what's being built, and where DeCleanup is headed.",
    href: "/litepaper#roadmap",
  },
];

export default function AppendixSection() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden bg-black border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-white text-center mb-2 tracking-wide">
          Appendix
        </h2>
        <p className="text-gray-400 text-center mb-12 text-sm md:text-base">
          Explore the details behind the network.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group block rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 md:p-8 text-left transition-all duration-300 hover:border-[#58B12F]/50 hover:bg-neutral-900"
            >
              <h3 className="text-xl font-bebas text-white tracking-wide mb-2 group-hover:text-[#58B12F] transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-[#58B12F]">
                Read more
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
