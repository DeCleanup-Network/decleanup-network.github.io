import React from "react";
import Image from "next/image";

const UN_SDG_BASE =
  "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08";

// Major SDGs DeCleanup aligns with: cities & waste, consumption & waste, climate, life below water, life on land
const MAJOR_SDG_NUMS = [11, 12, 13, 14, 15];

const sdgIcons = MAJOR_SDG_NUMS.map((num) => ({
  num,
  src: `${UN_SDG_BASE}/E-Goal-${String(num).padStart(2, "0")}-1024x1024.png`,
  alt: `SDG ${num}`,
}));

export default function SDGsFooter() {
  return (
    <section className="w-full py-12 md:py-16 bg-black border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-sm uppercase tracking-wider text-gray-500 mb-6"
          style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
        >
          Aligned with the UN Sustainable Development Goals
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {sdgIcons.map((goal) => (
            <a
              key={goal.num}
              href="https://www.un.org/sustainabledevelopment"
              target="_blank"
              rel="noopener noreferrer"
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
        <p className="mt-6 text-center text-xs text-gray-500 max-w-2xl mx-auto">
          <a
            href="https://www.un.org/sustainabledevelopment"
            target="_blank"
            rel="noopener noreferrer"
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
