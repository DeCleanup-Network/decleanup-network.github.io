import Image from "next/image";
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
        {/* Logo - compact */}
        <div className="mb-6 flex justify-center">
          <Image
            src="https://ipfs.io/ipfs/bafkreidva4g2hrnmegqkkig4t743hprwk6g3or76foe25hyrvs4zngprja"
            alt="DeCleanup Network Logo"
            width={100}
            height={40}
            className="h-8 w-auto object-contain sm:h-10"
            unoptimized
          />
        </div>

        {/* Pill badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          <span
            className="h-2 w-2 rounded-full bg-[#58B12F] animate-pulse"
            aria-hidden
          />
          CLEAN UP, SNAP, EARN
        </div>

        {/* Main title - DECLEANUP NETWORK (gradient on NETWORK + pulse) */}
        <h1
          className="mb-6 text-5xl font-normal leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
        >
          <span className="bg-gradient-to-r from-[#58B12F] via-[#FAFF00] to-[#58B12F] bg-clip-text text-transparent animate-pulse">
            DECLEANUP
          </span>{" "}
          NETWORK
        </h1>

        {/* Headline */}
        <p className="mx-auto mb-4 max-w-2xl text-xl font-medium leading-tight text-white md:text-2xl lg:text-3xl">
          Real cleanups. Real proof. Real impact.
        </p>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          A global platform that verifies environmental cleanups and turns them
          into measurable, fundable impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]"
          >
            Start Earning
          </Link>
          <Link
            href="/litepaper"
            className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
          >
            Read Litepaper
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
