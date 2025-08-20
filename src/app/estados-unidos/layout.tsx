import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Os Estados Unidos do século XIX",
};

export default function EstadosUnidosLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
