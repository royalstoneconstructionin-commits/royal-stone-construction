
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Admin | Royal Stone Construction",
    template: "%s | Royal Stone Construction",
  },

  description:
    "Restricted administration area for Royal Stone Construction. Manage customer leads, website content, project information and approved testimonials.",

  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,

    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  return <>{children}</>;
}
