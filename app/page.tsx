import WhatIsDeCleanupNetwork from "@/components/WhatIsDecleanUp/WhatIsDeCleanupNetwork";
import Hero from "@/components/HeroSection/Hero";
import TokenizeImpactSection from "@/components/HowToTokonizeImpact/TokenizeImpactSection";
import NetworkRoadmapSection from "@/components/NetworkRoadmapSection/NetworkRoadmapSection";
import UseDeCleanupToday from "@/components/UseDeCleanupToday/UseDeCleanupToday";
import WhoIsThisFor from "@/components/WhoIsThisFor/WhoIsThisFor";
import WhyDeCleanup from "@/components/WhyDeCleanup/WhyDeCleanup";

const Page = () => {
  return (
    <main className="flex min-w-0 flex-col overflow-x-hidden text-center">
      {/* Aura-style hero: gradient orbs + badge + CTAs */}
      <Hero />
      {/* Why DeCleanup Exists - SDG positioning */}
      <WhyDeCleanup />
      {/* Who is this for? – Aura glow cards */}
      <WhoIsThisFor />
      {/* Earn DeCleanup Rewards – Base/Celo CTA cards with hover glow */}
      <UseDeCleanupToday />
      {/* Transparent, Verifiable Digital Impact / DMRV – two-column + progress bar */}
      <WhatIsDeCleanupNetwork />
      <NetworkRoadmapSection />
      {/* How to Tokenize Impact – 3-step + photo verified card, Backed by + SDGs just above footer */}
      <TokenizeImpactSection />
    </main>
  );
};

export default Page;