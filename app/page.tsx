import WhatIsDeCleanupNetwork from "@/components/WhatIsDecleanUp/WhatIsDeCleanupNetwork";
import Hero from "@/components/HeroSection/Hero";
import TokenizeImpactSection from "@/components/HowToTokonizeImpact/TokenizeImpactSection";
import NetworkRoadmapSection from "@/components/NetworkRoadmapSection/NetworkRoadmapSection";
import UseDeCleanupToday from "@/components/UseDeCleanupToday/UseDeCleanupToday";

const Page = () => {
  return (
    <main className="flex flex-col text-center">
      <Hero />
      <UseDeCleanupToday />
      <WhatIsDeCleanupNetwork />
       <NetworkRoadmapSection/>
      <TokenizeImpactSection />
    </main>
  );
};

export default Page;