import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import PublicShell from "@/components/PublicShell";

export const metadata: Metadata = {
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
