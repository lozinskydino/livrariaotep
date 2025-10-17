import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hidrólise ácida e básica",
};

export default function HidroliseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
