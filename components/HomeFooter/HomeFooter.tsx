import React from "react";
import NavLink from "../NavLink/NavLink";
import BackedBy from "../BackedBy/BackedBy";
import SDGsFooter from "../SDGsFooter/SDGsFooter";

export default function HomeFooter() {
  return (
    <div className="w-full py-12 overflow-hidden bg-black border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BackedBy />
        <SDGsFooter />
        <NavLink variant="footerOnly" />
      </div>
    </div>
  );
}
