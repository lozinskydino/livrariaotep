import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["600"] });

interface BotaoProps {
  onClick: () => void;
  label: string;
  variant: "amarelo" | "azul" | "verde" | "acidos" | "acessar";
  height?: string;
  iconRightSrc?: string; // caminho para SVG/PNG público
  iconRightAlt?: string;
  iconRightSize?: number; // px (largura/altura)
  iconRightHoverSrc?: string; // caminho alternativo para o ícone no hover
}

export default function Botao({ onClick, label, variant, height, iconRightSrc, iconRightAlt, iconRightSize, iconRightHoverSrc }: BotaoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isAcidos = variant === "acidos";
  const isAcessar = variant === "acessar";

  const getColors = () => {
    switch (variant) {
      case "amarelo":
        return {
          bg: "#FFB213",
          inner: "#FFEE88",
          hover: "#fff6c2",
          text: "#F59E0B",
        } as const;
      case "azul":
        return {
          bg: "#01668E",
          inner: "#94E7FC",
          hover: "#c3f2fd",
          text: "#01668E",
        } as const;
      case "verde":
        return {
          bg: "#15752F",
          inner: "#67EB00",
          hover: "#9eff52",
          text: "#15752F",
        } as const;
      case "acidos":
        return {
          bg: "#FFFFFF",
          inner: "#FFFFFF",
          hover: "#C4C8FF",
          text: "#00076C",
        } as const;
      case "acessar":
        return {
          bg: "#00076C",
          inner: "#00076C",
          hover: "#C4C8FF",
          text: "#FFFFFF", // texto branco no estado normal
        } as const;
    }
  };

  const colors = getColors();

  const finalIconSize = iconRightSize ?? (isAcidos ? 24 : 16);
  const iconSrc = isHovered && iconRightHoverSrc ? iconRightHoverSrc : iconRightSrc;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full relative overflow-hidden cursor-pointer ${
        (isAcidos || isAcessar)
          ? `rounded-[12px] py-2 px-6 transition-all duration-200 ease-out ${isHovered ? 'shadow-[0px_4px_9.2px_0px_rgba(0,0,0,0.25)]' : ''}`
          : "border-4 border-white border-pulse rounded-full py-3 px-6 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)]"
      }`}
      style={{
        backgroundColor: isAcidos
          ? (isHovered ? colors.hover : colors.bg)
          : isAcessar
            ? (isHovered ? colors.hover : colors.bg)
            : colors.bg,
        height: height ?? "auto",
      }}
    >
      {/* camada interna */}
      {!isAcidos && (
        <div
          className="absolute inset-0 rounded-full transition-colors duration-300"
          style={{
            backgroundColor: isHovered ? colors.hover : colors.inner,
            left: "1.01px",
            top: "0px",
            width: "calc(100% - 3px)",
            height: "calc(100% - 4px)",
          }}
        />
      )}

      {/* conteúdo */}
      <div className={`relative z-10 flex items-center justify-center ${(isAcidos || isAcessar) ? "gap-1.5" : "gap-2"}`}>
        <span
          className={
            (isAcidos || isAcessar)
              ? `${inter.className} font-semibold text-[15.2749px] leading-[21px] tracking-[-0.01em] text-center`
              : "font-nunito font-black text-base leading-[1.364] tracking-[0.04em] uppercase text-center"
          }
          style={{ color: isAcessar ? (isHovered ? "#00076C" : colors.text) : colors.text }}
        >
          {label}
        </span>
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={iconRightAlt ?? ""}
            width={finalIconSize}
            height={finalIconSize}
            className="shrink-0"
          />
        )}
      </div>
    </button>
  );
}
