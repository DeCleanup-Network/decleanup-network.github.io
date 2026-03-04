import React from "react";

const faqs = [
  {
    q: "Do I need crypto experience to participate?",
    a: "No. Our app walks you through wallet setup in under 2 minutes. If you can take a photo, you can earn.",
  },
  {
    q: "How do you verify cleanups are real?",
    a: "Every submission includes before/after photos, geolocation metadata, and community validation. Verified records are anchored on-chain.",
  },
  {
    q: "What can I do with $bDCU tokens?",
    a: "Hold for governance voting, trade on Base DEXs, or accumulate reputation in the network.",
  },
  {
    q: "How do I organize a cleanup in my area?",
    a: "Anyone can launch a campaign through the app. Define your location, set goals, invite volunteers.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-black border-t border-white/5 scroll-mt-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bebas text-white text-center mb-12 tracking-wide">
          Questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-neutral-900/50 border border-white/10 rounded-xl overflow-hidden"
            >
              <summary className="list-none flex items-center justify-between gap-4 px-5 py-4 cursor-pointer text-left font-medium text-white hover:bg-white/5 transition-colors min-h-[44px]">
                <span>{faq.q}</span>
                <span className="shrink-0 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-4 pt-0">
                <p className="text-gray-400 text-sm leading-relaxed pl-0">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
