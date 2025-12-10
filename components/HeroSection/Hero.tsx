import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#58B12F]/5 via-transparent to-[#FAFF00]/5 animate-pulse"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Header with logo on left and tagline on right */}
        <div className="w-full flex justify-between items-center mb-6 sm:mb-8 animate-fade-in px-4">
          <div className="flex items-center">
            <Image
              src="https://ipfs.io/ipfs/bafkreidva4g2hrnmegqkkig4t743hprwk6g3or76foe25hyrvs4zngprja"
              alt="DeCleanup Network Logo"
              width={120}
              height={48}
              className="w-auto h-8 sm:h-10 lg:h-12 object-contain"
              unoptimized
            />
          </div>
          <div className="text-right">
            <span className="inline-block px-4 py-2 bg-[#FAFF00] text-black text-sm sm:text-base font-normal tracking-wider transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#FAFF00]/20 uppercase">
              CLEAN UP, SNAP, EARN
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-normal mb-6 sm:mb-8 leading-tight text-white animate-fade-in-up"
        >
        DECLEANUP NETWORK
      </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4 sm:mb-6 font-light max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Turn environmental action into digital assets
        </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Join the global network of individuals and communities tokenizing environmental impact of cleanups utilizing DeCleanup Network tools
          </p>

          {/* Stylish Breaker */}
          <div className="flex items-center justify-center gap-4 my-8 sm:my-12 lg:my-16 animate-fade-in-up animation-delay-600">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#58B12F] to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[#FAFF00] animate-pulse"></div>
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#FAFF00] to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[#58B12F] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#58B12F] to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
