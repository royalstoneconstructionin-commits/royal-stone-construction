import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import PublicShell from "@/components/PublicShell";
import { siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  icons: { icon: "/logo.png", apple: "/logo.png" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  title: { default: "Royal Stone Construction | Architecture & Construction", template: "%s | Royal Stone Construction" },
  description:
    "Royal Stone Construction provides architecture, construction with material, and interior design services.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PublicShell>{children}</PublicShell>
        <Footer />
      </body>
    </html>
  );
}
