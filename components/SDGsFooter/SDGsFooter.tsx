import React from "react";
import Image from "next/image";

const UN_SDG_BASE =
  "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08";

// Major SDGs DeCleanup aligns with: cities & waste, consumption & waste, climate, life below water, life on land
const sdgs = [
  {
    num: 11,
    href: "https://www.un.org/sustainabledevelopment/cities/",
    src: `${UN_SDG_BASE}/E-Goal-11-1024x1024.png`,
    alt: "SDG 11: Sustainable Cities and Communities",
  },
  {
    num: 12,
    href: "https://www.un.org/sustainabledevelopment/sustainable-consumption-production/",
    src: `${UN_SDG_BASE}/E-Goal-12-1024x1024.png`,
    alt: "SDG 12: Responsible Consumption and Production",
  },
  {
    num: 13,
    href: "https://www.un.org/sustainabledevelopment/climate-change/",
    src: `${UN_SDG_BASE}/E-Goal-13-1024x1024.png`,
    alt: "SDG 13: Climate Action",
  },
  {
    num: 14,
    href: "https://www.un.org/sustainabledevelopment/oceans/",
    src: `${UN_SDG_BASE}/E-Goal-14-1024x1024.png`,
    alt: "SDG 14: Life Below Water",
  },
  {
    num: 15,
    href: "https://www.un.org/sustainabledevelopment/biodiversity/",
    src: `${UN_SDG_BASE}/E-Goal-15-1024x1024.png`,
    alt: "SDG 15: Life on Land",
  },
];

export default function SDGsFooter() {
  return (
    <section className="w-full py-12 md:py-16 bg-black border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center text-3xl font-normal uppercase leading-tight text-white mb-6 md:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
        >
          Aligned with the United Nations Sustainable Development Goals
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {sdgs.map((goal) => (
            <a
              key={goal.num}
              href={goal.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex-shrink-0 rounded-lg border border-white/10 bg-white/5 p-1 transition hover:border-[#58B12F]/40 hover:bg-white/10"
              title={`SDG ${goal.num}`}
            >
              <Image
                src={goal.src}
                alt={goal.alt}
                width={48}
                height={48}
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                unoptimized
              />
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-gray-300 max-w-2xl mx-auto">
          <a
            href="https://www.un.org/sustainabledevelopment"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-[#58B12F] hover:text-[#FAFF00] underline"
          >
            United Nations Sustainable Development Goals
          </a>
          {" · "}
          The content of this publication has not been approved by the United Nations and does not reflect the views of the United Nations or its officials or Member States.
        </p>
      </div>
    </section>
  );
}
