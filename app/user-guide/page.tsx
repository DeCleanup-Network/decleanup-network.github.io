import type { Metadata } from "next";
import Redirect from "@/components/Redirect/Redirect";

export const metadata: Metadata = {
  title: "Get Started | DeCleanup Network",
  description: "Redirecting to Get Started",
  robots: "noindex, follow",
};

export default function UserGuideRedirectPage() {
  return <Redirect to="/get-started" />;
}
