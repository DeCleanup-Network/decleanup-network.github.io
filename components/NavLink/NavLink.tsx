import React from "react";
import Divider from "../ui/Divider";
// Simple Divider component since it's imported

const NavLink = () => {
  const navLinks = [
    { name: "LITEPAPER", href: "https://github.com/DeCleanup-Network" },
    { name: "DOCS", href: "https://github.com/DeCleanup-Network/docs" },
    { name: "LATEST ARTICLES", href: "https://paragraph.xyz/decleanupnet" },
    { name: "KARMA GAP", href: "https://gap.karmahq.xyz/project/decentralized-cleanup-network-decleanup-network"},
    { name: "GITHUB", href: "https://github.com/DeCleanup-Network" },
    { name: "USER GUIDE", href: "https://giveth.io/project/decentralized-cleanup-network"},
    { name: "BUG REPORT", href: "https://tally.so/r/mRBlbl" },
  ];

  return (
    <nav className="relative  overflow-hidden ">
      <Divider className="" />
      
      {/* Mobile Layout - Grid */}
      <div className="block md:hidden">
        <div className="grid grid-cols-2 gap-3 mb-3">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-900 text-[#FAFF00] text-xs font-semibold rounded-lg px-4 py-3 text-center border border-gray-800 hover:border-[#FAFF00] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(250,255,0,0.2)] overflow-hidden"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-[#FAFF00] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Horizontal Row with better styling */}
      <div className="hidden md:flex flex-wrap justify-center gap-3 lg:gap-4">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-900 text-[#FAFF00] text-sm lg:text-base font-semibold rounded-lg px-4 lg:px-5 py-2 lg:py-3 text-center border border-gray-800 hover:border-[#FAFF00] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(250,255,0,0.2)] overflow-hidden whitespace-nowrap"
          >
            <span className="relative z-10">{link.name}</span>
            <div className="absolute inset-0 bg-[#FAFF00] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          </a>
        ))}
      </div>
      
      <Divider className="mt-6 bg-gray-800" />

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-800">
        <span 
          className="text-white text-base lg:text-lg font-medium mb-4 md:mb-0"
        >
          DECLEANUP NETWORK 2025©
        </span>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>base</span>
          <span className="text-gray-600">•</span>
          <span>celo</span>
        </div>
      </div>
    </nav>
  );
};

export default NavLink;