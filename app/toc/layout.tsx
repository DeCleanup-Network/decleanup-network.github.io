import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theory of Change — DeCleanup Network",
  description: "Why cleanup action stays invisible — and how we fix it. DeCleanup Network Theory of Change v2.2.",
};

export default function TocLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
