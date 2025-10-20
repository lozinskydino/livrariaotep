import React, { PropsWithChildren } from "react";

type InfoCardTextProps = PropsWithChildren<{
  mb?: boolean; // quando true, aplica margin-bottom padrão de 16px
  className?: string; // classes extras, ex: mt-2
}>;

// Parágrafo estilizado padrão dos cards, com opção de margin-bottom
export default function InfoCardText({ children, mb = false, className = "" }: InfoCardTextProps) {
  const base = "text-[#343434] text-[16px] leading-[1.2] font-semibold font-nunito";
  const withMb = mb ? " mb-[16px]" : "";
  return <p className={`${base}${withMb} ${className}`.trim()}>{children}</p>;
}
