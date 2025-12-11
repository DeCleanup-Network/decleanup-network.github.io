import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeCleanup Network Developer Documentation",
  description: "Technical documentation for DeCleanup Rewards - Quick start guide, architecture, smart contracts, and API reference",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

