import React from "react";

const backers = [
  { name: "Giveth", logoLabel: "Giveth logo" },
  { name: "Octant", logoLabel: "Octant logo" },
  { name: "Gitcoin", logoLabel: "Gitcoin logo" },
  { name: "Ethereum for the World", logoLabel: "E4W logo" },
];

export default function BackedBy() {
  return (
    <section className="w-full py-16 md:py-24 bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-normal uppercase text-white mb-6 text-center"
          style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
        >
          Backed by
        </h2>
        <p className="mb-10 md:mb-12 md:text-lg leading-relaxed text-gray-300 text-center max-w-2xl mx-auto">
          DeCleanup has been supported by Giveth, Octant, Gitcoin, and Ethereum for the World.
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {backers.map((backer) => (
            <div
              key={backer.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-gray-900/50 p-6"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 text-gray-500">
                <span className="text-xs">{backer.logoLabel}</span>
              </div>
              <span className="text-sm font-medium text-white">{backer.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
