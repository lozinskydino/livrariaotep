import React, { PropsWithChildren } from "react";

type InfoCardTitleProps = PropsWithChildren<{
  className?: string;
}>;

// Componente que se comporta como uma <p> estilizada, recebendo apenas o texto via children
export default function InfoCardTitle({ children, className = "" }: InfoCardTitleProps) {
  return (
    <p className={`text-[#343434] text-[18px] leading-[1.2] font-extrabold font-nunito mb-[16px] ${className}`}>
      {children}
    </p>
  );
}
