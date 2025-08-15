"use client";

import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["600"] });

export type ModalCTAButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode; // opcional: ícone à esquerda (prioridade sobre iconLeftSrc)
  iconLeftSrc?: string;   // caminho de um SVG/PNG à esquerda
  iconLeftAlt?: string;
  iconSize?: number;      // tamanho do ícone em px (largura/altura)
  disabled?: boolean;
};

/**
 * Botão reutilizável para CTAs nos modais de Regência Verbal.
 * Visual baseado no Figma: pill azul, texto branco, leve sombra e hover.
 */
export default function ModalCTAButton({ label, onClick, className = "", icon, iconLeftSrc, iconLeftAlt = "", iconSize = 18, disabled }: ModalCTAButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "w-full h-[48px] px-5 rounded-full",
        "bg-[#2B7BDE] text-white",
        "flex items-center justify-center gap-[6px]",
        "shadow-[0_4px_12px_rgba(43,123,222,0.35)]",
        "transition-transform duration-150",
        "active:scale-[0.98]",
        "hover:bg-[#216bc5]",
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
        inter.className,
        className,
      ].join(" ")}
    >
      {icon ? (
        <span className="shrink-0" aria-hidden>{icon}</span>
      ) : iconLeftSrc ? (
        <img src={iconLeftSrc} alt={iconLeftAlt} width={iconSize} height={iconSize} className="shrink-0" />
      ) : null}
      <span className="text-[14px] leading-[20px] font-semibold whitespace-nowrap">{label}</span>
    </button>
  );
}
