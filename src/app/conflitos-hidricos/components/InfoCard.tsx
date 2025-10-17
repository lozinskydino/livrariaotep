import React, { PropsWithChildren } from "react";

type InfoCardProps = PropsWithChildren<{
  className?: string;
  containerBg?: string; // cor de fundo externa (default #646363)
  innerBg?: string; // cor do fundo interno deslocado (default #e6e6e6)
  innerBorder?: string; // cor da borda interna (default #343434)
  radius?: number; // raio em px (default 16)
  padding?: number; // padding em px (default 16)
}>;

export default function InfoCard({
  className = "",
  children,
  containerBg = "#646363",
  innerBg = "#e6e6e6",
  innerBorder = "#343434",
  radius = 16,
  padding = 16,
}: InfoCardProps) {
  return (
    <div
      className={`w-full relative border-4 border-white mt-2 flex flex-col gap-4 items-start justify-end ${className}`}
      style={{
        backgroundColor: containerBg,
        borderRadius: radius,
        padding,
      }}
    >
      {/* Plano de fundo e borda interna deslocados */}
      <div
        className="absolute left-0 right-[3.5px] top-0"
        style={{
          bottom: 5.36,
          backgroundColor: innerBg,
          borderRadius: radius,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ border: `2px solid ${innerBorder}`, borderRadius: radius }}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative box-border flex flex-row gap-4 items-start justify-start p-0 w-full leading-none">
        <div className="basis-0 grow min-h-px min-w-px shrink-0 relative">{children}</div>
      </div>
    </div>
  );
}
