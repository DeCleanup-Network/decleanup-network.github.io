import Hero from "@/components/HeroSection/Hero";
import WhyDeCleanup from "@/components/WhyDeCleanup/WhyDeCleanup";
import TokenizeImpactSection from "@/components/HowToTokonizeImpact/TokenizeImpactSection";
import UseDeCleanupToday from "@/components/UseDeCleanupToday/UseDeCleanupToday";
import CommunityImpactSection from "@/components/CommunityImpactSection/CommunityImpactSection";
import TotalImpactSection from "@/components/TotalImpactSection/TotalImpactSection";
import AppendixSection from "@/components/AppendixSection/AppendixSection";
import JoinTheMovementSection from "@/components/JoinTheMovementSection/JoinTheMovementSection";
import NavLink from "@/components/NavLink/NavLink";

const Page = () => {
  return (
    <main className="flex min-w-0 flex-col overflow-x-hidden text-center">
      <Hero />
      <WhyDeCleanup />
      <TokenizeImpactSection />
      <UseDeCleanupToday />
      <CommunityImpactSection />
      <TotalImpactSection />
      <AppendixSection />
      <JoinTheMovementSection />
      <NavLink variant="full" />
    </main>
  );
};

export default Page;
