import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ minHeight: "100dvh" }}
    >
      {/* Aura-style background: gradient orbs + grid overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full blur-3xl animate-pulse"
          style={{ background: "rgba(88, 177, 47, 0.1)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] rounded-full blur-3xl"
          style={{ background: "rgba(250, 255, 0, 0.08)" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 text-center">
        <h1 className="mb-6 py-2">
          <span className="bg-gradient-to-r from-[#58B12F] via-[#FAFF00] to-[#58B12F] bg-clip-text text-transparent animate-pulse">
            DECLEANUP
          </span>{" "}
          NETWORK
        </h1>

        {/* Headline */}
        <h1 className="mx-auto mb-4 max-w-3xl text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
          Clean Local. Prove Global.
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
          Join volunteers worldwide turning trash pickup into verified, rewarded impact.
        </p>

        {/* CTAs - primary: Get Started, secondary: How It Works */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/get-started"
            className="rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] min-h-[44px] flex items-center justify-center"
          >
            Start Cleaning
          </Link>
          <Link
            href="/userguide"
            className="rounded-xl border border-white/20 px-6 py-3.5 font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 min-h-[44px] flex items-center justify-center"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
