import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ácidos",
};

export default function AcidosLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
