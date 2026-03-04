import React from "react";
import Link from "next/link";
import { Sparkles, Camera, Coins } from "lucide-react";

const steps = [
  { number: 1, title: "Clean", description: "Join a cleanup or start your own", Icon: Sparkles },
  { number: 2, title: "Snap", description: "Take before/after photos in the app", Icon: Camera },
  { number: 3, title: "Earn", description: "Get $bDCU tokens for verified impact", Icon: Coins },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 bg-black border-t border-white/5 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bebas text-white text-center mb-12 tracking-wide">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Progress line - desktop */}
          <div className="hidden md:block absolute top-16 left-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-[#58B12F]/50 to-transparent -translate-x-1/2" style={{ top: "5.5rem" }} />
          {steps.map((step) => {
            const Icon = step.Icon;
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#58B12F]/20 border-2 border-[#58B12F]/50 flex items-center justify-center mb-4 relative z-10">
                  <Icon className="w-7 h-7 text-[#58B12F]" />
                </div>
                <span className="text-2xl font-bebas text-[#FAFF00] mb-2">{step.number}</span>
                <h3 className="text-xl font-bebas text-white mb-2 tracking-wide">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/get-started"
            className="inline-block rounded-xl bg-[#58B12F] px-8 py-4 font-semibold text-black hover:bg-[#58B12F]/90 transition-colors min-h-[44px] flex items-center justify-center"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
}
