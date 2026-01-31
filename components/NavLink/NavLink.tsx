import React from "react";
import Link from "next/link";
import Image from "next/image";
import Divider from "../ui/Divider";
// Simple Divider component since it's imported

type NavLinkVariant = "full" | "linksOnly" | "footerOnly";

const NavLink = ({ variant = "full" }: { variant?: NavLinkVariant }) => {
  // Internal links (same domain)
  const internalLinks = [
    { name: "LITEPAPER", href: "/litepaper" },
    { name: "TOKENOMICS", href: "/tokenomics" },
    { name: "DOCS", href: "/docs" },
  ];

  // User Guide (internal link)
  const userGuideLink = { name: "USER GUIDE", href: "/userguide" };

  // External links
  const externalLinks = [
    { name: "LATEST ARTICLES", href: "https://paragraph.xyz/decleanupnet" },
    {
      name: "KARMA GAP",
      href: "https://gap.karmahq.xyz/project/decentralized-cleanup-network-decleanup-network",
    },
    { name: "GITHUB", href: "https://github.com/DeCleanup-Network" },
    {
      name: "BUG REPORT",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfWCK4WmO9T-WJOOZwuDiG3yEJVX23RX_AkIa6tZHZ0J9Tf3w/viewform?usp=header",
    },
  ];

  const showLinks = variant === "full" || variant === "linksOnly";
  const showFooter = variant === "full" || variant === "footerOnly";

  return (
    <nav className="relative overflow-hidden">
      {showLinks && <Divider className="" />}

      {showLinks && (
        <>
          {/* Internal Links Section - More Prominent */}
          <div className="mb-6">
            {/* Mobile Layout - Internal Links */}
            <div className="block md:hidden mb-4">
              <div className="grid grid-cols-2 gap-3">
                {internalLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="group relative bg-gray-900 text-[#58B12F] text-xs font-semibold rounded-lg px-3 py-3 text-center border-2 border-[#58B12F] hover:border-[#58B12F] hover:bg-[#58B12F]/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(88,177,47,0.3)] overflow-hidden"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-[#58B12F] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </Link>
                ))}
                <Link
                  href={userGuideLink.href}
                  className="group relative bg-gray-900 text-[#58B12F] text-xs font-semibold rounded-lg px-3 py-3 text-center border-2 border-[#58B12F] hover:border-[#58B12F] hover:bg-[#58B12F]/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(88,177,47,0.3)] overflow-hidden"
                >
                  <span className="relative z-10">{userGuideLink.name}</span>
                  <div className="absolute inset-0 bg-[#58B12F] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>

            {/* Desktop Layout - Internal Links */}
            <div className="hidden md:flex flex-wrap justify-center gap-4 lg:gap-5">
              {internalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group relative bg-gray-900 text-[#58B12F] text-base lg:text-lg font-semibold rounded-lg px-5 lg:px-6 py-3 lg:py-4 text-center border-2 border-[#58B12F] hover:border-[#58B12F] hover:bg-[#58B12F]/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(88,177,47,0.4)] overflow-hidden whitespace-nowrap"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-[#58B12F] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </Link>
              ))}
              <Link
                href={userGuideLink.href}
                className="group relative bg-gray-900 text-[#58B12F] text-base lg:text-lg font-semibold rounded-lg px-5 lg:px-6 py-3 lg:py-4 text-center border-2 border-[#58B12F] hover:border-[#58B12F] hover:bg-[#58B12F]/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(88,177,47,0.4)] overflow-hidden whitespace-nowrap"
              >
                <span className="relative z-10">{userGuideLink.name}</span>
                <div className="absolute inset-0 bg-[#58B12F] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>

          {/* External Links Section - Less Prominent */}
          <div className="mb-4">
            <p className="text-xs md:text-sm text-gray-500 text-center mb-3 uppercase tracking-wide">
              External Links
            </p>

            {/* Mobile Layout - External Links */}
            <div className="block md:hidden">
              <div className="grid grid-cols-2 gap-2">
                {externalLinks.map((link, index) => (
                <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group relative bg-gray-900 text-[#FAFF00] text-xs font-semibold rounded-lg px-3 py-2 text-center border border-gray-800 hover:border-[#FAFF00] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(250,255,0,0.15)] overflow-hidden"
              >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-[#FAFF00] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Layout - External Links */}
            <div className="hidden md:flex flex-wrap justify-center gap-2 lg:gap-3">
              {externalLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group relative bg-gray-900 text-[#FAFF00] text-xs lg:text-sm font-semibold rounded-lg px-3 lg:px-4 py-2 lg:py-2.5 text-center border border-gray-800 hover:border-[#FAFF00] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(250,255,0,0.15)] overflow-hidden whitespace-nowrap"
            >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-[#FAFF00] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

        </>
      )}

      {showFooter && (
        <>
          <Divider className="mt-6 bg-gray-800" />

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-6 pt-6 border-t border-gray-800 gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 order-2 md:order-1">
              <Image
                src="/images/decleanup_logo_full.png"
                alt="DeCleanup Network Logo"
                width={150}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
                unoptimized
              />
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-white text-sm md:text-base lg:text-lg font-medium">
                  2026
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:gap-4 order-1 md:order-2">
              <Image
                src="/base-logo-white.svg"
                alt="Base"
                width={100}
                height={32}
                className="h-5 md:h-6 w-auto"
              />
              <div className="flex items-center">
                <Image
                  src="/celo-celo-logo.svg"
                  alt="Celo"
                  width={100}
                  height={100}
                  className="h-5 md:h-6 w-auto"
                />
                <span className="text-sm font-semibold text-gray-400 tracking-wider ml-2">celo</span>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavLink;
