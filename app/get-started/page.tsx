import type { Metadata } from "next";
import Link from "next/link";
import GetStartedFlow from "@/components/GetStartedFlow/GetStartedFlow";

export const metadata: Metadata = {
  title: "Get Started | DeCleanup Rewards",
  description:
    "Choose how you want to use the app: within other platforms with minimum features or full experience in browser.",
};

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-10">
          <Link
            href="/#who-is-this-for"
            className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#FAFF00] font-medium text-sm md:text-base transition-colors group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 uppercase leading-tight"
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Get started with DeCleanup Rewards
          </h1>
          <p className="text-xl md:text-2xl text-[#58B12F] mb-4 font-medium uppercase">
            FOR THOSE WHO CARE ABOUT THE PLANET
          </p>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Environmental action deserves recognition. Choose how you want to use the app: you can have an experience within other platforms and with minimum features or full experience separately in browser. We’ll show you what you need and where to go.
          </p>
        </div>

        <GetStartedFlow />
      </div>
    </main>
  );
}
