import React from "react";
import Image from "next/image";

const backers = [
  {
    name: "Ethereum for the World",
    src: "/images/backers/ethereum.png",
    href: "https://fortheworld.eco",
    className: "", // Already white
    logoScale: "scale-100"
  },
  {
    name: "Giveth",
    src: "/images/backers/giveth.png",
    href: "https://giveth.io",
    className: "", // Already white
    logoScale: "scale-100"
  },
  {
    name: "Gitcoin",
    src: "/images/backers/gitcoin.jpg",
    href: "https://www.gitcoin.co",
    // JPG is opaque. Invert turns black->white. contrast cleans it up.
    className: "filter grayscale brightness-200 contrast-200 invert",
    logoScale: "scale-125"
  },
  {
    name: "Octant",
    src: "/images/backers/octant.png",
    href: "https://octant.app",
    // PNG transparent. Invert turns Black Content -> White Content.
    // Wrapper bg-black handles the transparency.
    className: "invert",
    logoScale: "scale-100"
  },
];

export default function BackedBy() {
  return (
    <section className="w-full py-16 md:py-24 bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-normal uppercase leading-tight text-white mb-10 md:mb-12 text-center md:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
        >
          Backed by
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {backers.map((backer) => (
            <a
              key={backer.name}
              href={backer.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group flex flex-col items-center gap-4"
            >
              {/* Gradient Container */}
              <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#58B12F] via-[#FAFF00] to-[#58B12F] animate-pulse">
                {/* Mask Container: High Contrast Mask (Black hides, White reveals) */}
                <div className="relative h-full w-full bg-black mix-blend-multiply">
                  <Image
                    src={backer.src}
                    alt={`${backer.name} logo`}
                    fill
                    className={`object-contain p-4 transition-transform duration-300 ${backer.className} ${backer.logoScale}`}
                    unoptimized
                  />
                </div>
              </div>
              <span className="text-center text-sm font-medium text-gray-200 transition-colors duration-300 group-hover:text-[#FAFF00] group-hover:font-bold">
                {backer.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
