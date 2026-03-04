import type { Metadata } from "next";
import Link from "next/link";
import WhoIsThisForCards from "@/components/WhoIsThisFor/WhoIsThisForCards";

export const metadata: Metadata = {
  title: "How It Works | DeCleanup Network",
  description:
    "Who is DeCleanup for? Individuals who care, builders who coordinate impact, and funders who support real-world environmental action.",
};

export default function UserGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[#58B12F] selection:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#FAFF00] font-medium text-sm md:text-base transition-colors group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas text-white uppercase tracking-wide">
            How It Works
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Find your place in the network: clean and earn, build and coordinate, or fund verified impact.
          </p>
        </div>

        <WhoIsThisForCards />
      </div>
    </main>
  );
}
