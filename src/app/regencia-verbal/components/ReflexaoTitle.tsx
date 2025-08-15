"use client";

import React from "react";
import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({ subsets: ["latin"], weight: ["300"] });

export type ReflexaoTitleProps = {
  text?: string;
  className?: string;
  iconSrc?: string;
  iconColor?: string; // ex: #8C8C8C
};

/**
 * Título "Reflexão sobre os sentidos do verbo" com ícone de lâmpada à esquerda
 * Especificações (Figma):
 * - Container: 189x52, display flex, alinhado ao topo
 * - Ícone: 26x26, cor #8C8C8C (via mask)
 * - Texto: Noto Sans, italic, weight 300, 22/26, letter-spacing -0.02em, cor #3A3A3A
 */
export default function ReflexaoTitle({
  text = "Reflexão sobre os sentidos do verbo",
  className = "",
  iconSrc = "/assets/images/regencia-verbal/icon-lamp.svg",
  iconColor = "#8C8C8C",
}: ReflexaoTitleProps) {
  return (
    <div
      className={["flex flex-row items-start p-0", className].join(" ")}
      style={{ height: 52 }}
      aria-label={text}
    >
      <span
        aria-hidden
        className="inline-block"
        style={{
          width: 26,
          height: 26,
          backgroundColor: iconColor,
          WebkitMask: `url(${iconSrc}) no-repeat center / contain`,
          mask: `url(${iconSrc}) no-repeat center / contain`,
          flex: "none",
          order: 0,
          flexGrow: 0,
        }}
      />
      <span
        className={noto.className}
        style={{
          width: 183,
          height: 52,
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: 22,
          lineHeight: "26px",
          letterSpacing: "-0.02em",
          color: "#3A3A3A",
          marginLeft: 0,
          display: "flex",
          alignItems: "flex-start",
          flex: "none",
          order: 1,
          flexGrow: 0,
        }}
      >
        {text}
      </span>
    </div>
  );
}
