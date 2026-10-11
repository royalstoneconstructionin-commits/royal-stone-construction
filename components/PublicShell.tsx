
"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

type PublicShellProps = {
  children: ReactNode;
};

export default function PublicShell({
  children,
}: PublicShellProps) {
  const pathname = usePathname();

  // Hide public navbar on admin routes
  const isAdminRoute =
    pathname === "/admin" ||
    pathname.startsWith("/admin/");

  return (
    <>
      {/* Public Website Navbar */}
      {!isAdminRoute && <Navbar />}

      {/* Current Page Content */}
      {children}
    </>
  );
}
