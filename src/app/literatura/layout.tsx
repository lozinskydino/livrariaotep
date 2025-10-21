import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Literatura - Aspectos temáticos da lírica camoniana",
};

export default function LiteraturaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
