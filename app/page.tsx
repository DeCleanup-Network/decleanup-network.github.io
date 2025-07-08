import WhatIsDeCleanupNetwork from "@/components/WhatIsDecleanUp/WhatIsDeCleanupNetwork";
import Hero from "@/components/HeroSection/Hero";
import TokenizeImpactSection from "@/components/HowToTokonizeImpact/TokenizeImpactSection";
import NetworkRoadmapSection from "@/components/NetworkRoadmapSection/NetworkRoadmapSection";
import ProblemAndSolution from "@/components/ProblemAndSolution/ProblemAndSolution";
import CommunityImpact from "@/components/CommunityImpact/CommunityImpact";
import { SectionPadded, SectionFullWithPadding } from "@/components/ui/Section";

const Page = () => {
  return (
    <main className="flex flex-col text-center uppercase">
      <div className="mx-auto w-full flex flex-col gap-12">
        <SectionPadded>
          <Hero />
        </SectionPadded>

        <SectionPadded>
          <WhatIsDeCleanupNetwork />
        </SectionPadded>

        <SectionPadded>
          <CommunityImpact />
        </SectionPadded>

        <SectionPadded>
          <ProblemAndSolution />
        </SectionPadded>

        <SectionFullWithPadding className="bg-[#111111]">
          <NetworkRoadmapSection />
        </SectionFullWithPadding>

        <SectionPadded>
          <TokenizeImpactSection />
        </SectionPadded>
      </div>
    </main>
  );
};

export default Page;
