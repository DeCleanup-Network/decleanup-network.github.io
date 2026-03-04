import React from "react";
import Link from "next/link";
import Divider from "../ui/Divider";
// Simple Divider component since it's imported

type NavLinkVariant = "full" | "linksOnly" | "footerOnly";

const NavLink = ({ variant = "full" }: { variant?: NavLinkVariant }) => {
  const showFooter = variant === "full" || variant === "footerOnly";

  return (
    <nav className="relative overflow-hidden">
      {showFooter && <Divider className="" />}

      {showFooter && (
        <>
          <Divider className="mt-6 bg-gray-800" />

          {/* Footer - 4 columns per brief */}
          <footer className="mt-6 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Product</h4>
                <ul className="space-y-2">
                  <li><Link href="/get-started" className="text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Get Started</Link></li>
                  <li><a href="https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Open App</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><Link href="/litepaper" className="text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Litepaper</Link></li>
                  <li><Link href="/tokenomics" className="text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Tokenomics</Link></li>
                  <li><Link href="/docs" className="text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Dev docs</Link></li>
                  <li><Link href="/get-started" className="text-gray-200 hover:text-[#58B12F] transition-colors text-sm">User guide</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Community</h4>
                <ul className="space-y-2">
                  <li><a href="https://x.com/DeCleanupNet" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Twitter</a></li>
                  <li><a href="https://farcaster.xyz/decleanupnet" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Farcaster</a></li>
                  <li><a href="https://t.me/EcoSynthesisX/443" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Telegram</a></li>
                  <li><a href="https://github.com/DeCleanup-Network" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#58B12F] transition-colors text-sm">GitHub</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Gardens.fund</a></li>
                  <li><a href="#" className="text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Donate on Giveth</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6" />
          </footer>
        </>
      )}
    </nav>
  );
};

export default NavLink;
