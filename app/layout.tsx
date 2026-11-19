import type { Metadata } from "next";
import Script from "next/script";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import "./footer.css";
import "./identity.css";
import "../typography.css";
import "./landing-v2.css";
import "./palette.css";
import "./github-live.css";
import "./currently-building.css";
import "./tech-aesthetic.css";
import "./no-cards.css";
import "./serif-refinement.css";
import "./barron-entries.css";
import "./home-profile.css";
import "./mobile-layout.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
});

export const metadata: Metadata = {
  title: "Kartikey Sharma",
  description: "A personal engineering and research portfolio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script defer src="https://cloud.umami.is/script.js" data-website-id="68672760-79cf-4fd4-b32e-3ac8d780c0fc" />
      </head>
      <body className={bodoniModa.variable}>
        {children}
      </body>
    </html>
  );
}
