import React from "react";

export default function ProblemSection() {
  return (
    <section id="the-problem" className="w-full py-16 md:py-24 bg-neutral-950 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="pain">
            <h2 className="text-3xl md:text-4xl font-bebas text-white mb-4 tracking-wide">
              The Invisible Work Problem
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Every year, volunteers clean up millions of tons of trash. And nobody tracks it. No proof. No recognition. No funding for the next cleanup.
            </p>
          </div>
          <div className="agitate">
            <p className="text-gray-500 leading-relaxed italic">
              Meanwhile, billion-dollar carbon credit markets exist for corporations. But the person picking up plastic bottles on a beach? Invisible.
            </p>
          </div>
          <div className="solution pt-4">
            <p className="text-gray-200 leading-relaxed text-lg">
              <strong className="text-[#58B12F]">DeCleanup changes that.</strong> Every cleanup becomes verifiable proof. Every piece of trash becomes data. Every volunteer becomes fundable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
