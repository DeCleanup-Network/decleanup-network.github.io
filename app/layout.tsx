import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

// Configure Geist Sans (Secondary/Body font)
// GeistSans is already configured with variable: '--font-geist-sans'

// Configure Bebas Neue (Heading font)
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400', // Bebas Neue has only one weight
  display: 'swap',
  variable: '--font-bebas-neue',
});

const SITE_URL = "https://decleanup.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Cleanups with action. Proof under verified. Fundable impact. | DeCleanup Network",
  description:
    "A global platform that verifies environmental cleanups and turns them into measurable, fundable impact.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Cleanups with action. Proof under verified. Fundable impact. | DeCleanup Network",
    description:
      "A global platform that verifies environmental cleanups and turns them into measurable, fundable impact.",
    url: SITE_URL,
    siteName: "DeCleanup Network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleanups with action. Proof under verified. Fundable impact. | DeCleanup Network",
    description:
      "A global platform that verifies environmental cleanups and turns them into measurable, fundable impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DeCleanup Network",
    url: SITE_URL,
    logo: `${SITE_URL}/images/decleanup_logo_full.png`,
    description:
      "DeCleanup Network is a decentralized platform that tokenizes environmental cleanups into verifiable real-world impact.",
    sameAs: [
      "https://x.com/DeCleanupNet",
      "https://github.com/DeCleanup-Network",
      "https://t.me/EcoSynthesisX/443",
      "https://farcaster.xyz/decleanupnet",
    ],
  };

  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R92BBYP0F8"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R92BBYP0F8');
          `}
        </Script>
      </head>
      <body
        className={`${GeistSans.variable} ${bebas.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
