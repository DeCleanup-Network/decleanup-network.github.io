import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "DECLEANUP NETWORK",
  description: "Empowering Cleanups. Tokenizing Impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R92BBYP0F8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R92BBYP0F8');
            `,
          }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${bebas.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
