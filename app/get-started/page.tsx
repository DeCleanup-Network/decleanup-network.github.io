import type { Metadata } from "next";
import Link from "next/link";
import GetStartedFlow from "@/components/GetStartedFlow/GetStartedFlow";

export const metadata: Metadata = {
  title: "Get Started | DeCleanup Rewards",
  description:
    "For those who care about the planet. Join or organize cleanups, document results, and earn recognition and rewards for real impact.",
};

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[#58B12F] selection:text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 md:py-16">
        <div className="mb-8">
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

        <GetStartedFlow />
      </div>
    </main>
  );
}
