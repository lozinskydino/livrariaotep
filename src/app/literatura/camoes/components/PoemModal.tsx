"use client";

import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({ subsets: ["latin"], weight: ["400", "800"], style: ["normal", "italic"] });

interface PoemModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function PoemModal({ isOpen, onClose, title, content }: PoemModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[620px] bg-[#FFFFFF] rounded-[40px] shadow-2xl px-12 py-10 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-200"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="#999999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Título */}
        <h2 className={`${ebGaramond.className} text-[#8B0000] font-bold text-[32px] leading-[1.2em] mb-6 pr-12`}>
          {title}
        </h2>

        {/* Conteúdo */}
        <p className={`${ebGaramond.className} text-[#000000] text-[20px] leading-[1em] font-normal`}>
          {content}
        </p>
      </div>
    </div>
  );
}
