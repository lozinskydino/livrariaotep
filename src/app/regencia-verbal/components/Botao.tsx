import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["600"] });

interface BotaoProps {
  onClick: () => void;
  label: string;
  variant: "portugues" | "voltar" | "verbo";
  height?: string;
  iconRightSrc?: string;
  iconRightAlt?: string;
  iconRightSize?: number;
  iconRightHoverSrc?: string;
  gradientColors?: {
    from: string;
    to: string;
  };
}

export default function Botao({ 
  onClick, 
  label, 
  variant, 
  height, 
  iconRightSrc, 
  iconRightAlt, 
  iconRightSize, 
  iconRightHoverSrc,
  gradientColors
}: BotaoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getColors = () => {
    switch (variant) {
      case "portugues":
        return {
          bg: "#FFFFFF",
          inner: "#FFFFFF",
          hover: "#C4C8FF",
          text: "#00076C",
          hoverText: "#00076C",
        } as const;
      case "voltar":
        return {
          bg: "#FFFFFF",
          inner: "#FFFFFF", 
          hover: "#C4C8FF",
          text: "#00076C",
          hoverText: "#00076C",
        } as const;
      case "verbo":
        return {
          bg: gradientColors ? `linear-gradient(135deg, ${gradientColors.from}, ${gradientColors.to})` : "#0575E6",
          inner: gradientColors ? `linear-gradient(135deg, ${gradientColors.from}, ${gradientColors.to})` : "#0575E6",
          hover: "#ffffff",
          text: "#FFFFFF",
          hoverText: "#00076C",
        } as const;
      default:
        return {
          bg: "#FFFFFF",
          inner: "#FFFFFF",
          hover: "#C4C8FF", 
          text: "#00076C",
          hoverText: "#00076C",
        } as const;
    }
  };

  const colors = getColors();
  const buttonHeight = height || "40px";

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${inter.className} group cursor-pointer w-full rounded-xl px-6 py-2 flex items-center justify-center gap-1.5 transition-all duration-200 font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]`}
      style={{
        height: buttonHeight,
        background: isHovered ? colors.hover : colors.bg,
        color: isHovered ? colors.hoverText : colors.text,
        boxShadow: isHovered ? "0px 4px 9.2px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <span>{label}</span>
      {iconRightSrc && (
        <Image
          src={isHovered && iconRightHoverSrc ? iconRightHoverSrc : iconRightSrc}
          alt={iconRightAlt || "Ícone"}
          width={iconRightSize || 24}
          height={iconRightSize || 24}
          className="flex-shrink-0"
        />
      )}
    </button>
  );
}
