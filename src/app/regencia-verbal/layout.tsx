import React from "react";
  
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regência Verbal",
};

export default function RegenciaVerbalLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
