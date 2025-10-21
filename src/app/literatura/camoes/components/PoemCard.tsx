"use client";

import { EB_Garamond } from "next/font/google";
import Image from "next/image";

const ebGaramond = EB_Garamond({ subsets: ["latin"], weight: ["400", "800"], style: ["normal", "italic"] });

interface PoemCardProps {
  title: string;
  content: string;
  author?: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  showZoomIcon?: boolean;
  modalId?: string;
  onZoomClick?: () => void;
}

export default function PoemCard({
  title,
  content,
  author = "Camões",
  x,
  y,
  width = 320,
  height = 380,
  showZoomIcon = true,
  modalId,
  onZoomClick,
}: PoemCardProps) {
  // Só mostra o ícone se tiver modalId
  const shouldShowIcon = showZoomIcon && modalId;
  return (
    <div
      className="absolute bg-[#FFF7E8] rounded-[30px] shadow-lg z-20"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        minHeight: `${height}px`,
        pointerEvents: "none",
        padding: "32px 24px",
        display: "grid",
        gridTemplateRows: "auto auto auto auto",
        gap: "20px",
      }}
    >
      {shouldShowIcon && (
        <button
          onClick={onZoomClick}
          className="absolute top-6 right-6 w-10 h-10 bg-[#C3AC7C]/80 rounded-full flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-[#C3AC7C] hover:scale-110 transition-all duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="6" stroke="#000" strokeWidth="2"/>
            <path d="M14 14L20 20" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 7v6M7 10h6" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      )}

      {/* Área vazia superior (para espaçamento) */}
      <div></div>

      {/* Título */}
      <h3 className={`${ebGaramond.className} text-[#8B0000] font-bold text-[24px] leading-[1.2em]`}>
        {title}
      </h3>

      {/* Conteúdo */}
      <p className={`${ebGaramond.className} italic text-[#333] text-[17px] leading-[1.7em] whitespace-pre-line`}>
        {content}
      </p>

      {/* Assinatura */}
      {author && (
        <p className={`${ebGaramond.className} text-[#333] text-[20px] font-normal text-right`}>
          {author}
        </p>
      )}
    </div>
  );
}
