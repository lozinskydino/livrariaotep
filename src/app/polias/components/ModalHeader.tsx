"use client";

import React from "react";
import Image from "next/image";

interface ModalHeaderProps {
  onBack: () => void;
  onHome: () => void;
  bgColor?: string; // cor de fundo opcional da barra (ex.: "#C93030" ou "rgba(0,0,0,0.2)")
}

// Header de modal para Hidrolise, seguindo o padrão do Figma
// Não reutiliza componentes de botão. Estilização inline + Tailwind para pixel-perfect mobile.
const ModalHeader: React.FC<ModalHeaderProps> = ({ onBack, onHome, bgColor = "transparent" }) => {
  return (
    <>
      {/* Barra absoluta alinhada ao conteúdo */}
      <div
        className="absolute inset-x-0 top-0 z-20 w-full flex justify-center pt-[40px] pb-[10px] pointer-events-none"
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-full max-w-[909px] px-6 flex items-center justify-between pointer-events-auto">
          <button
            onClick={onBack}
            className="w-12 h-12 rounded-full bg-[#94E7FC] border-[3px] border-white flex items-center justify-center shadow-[0px_3px_0px_0px_#01668E] active:translate-y-[1px] cursor-pointer"
            aria-label="Voltar"
          >
            <Image
              src="/assets/icons/back-arrow-icon.svg"
              alt="Voltar"
              width={28}
              height={27}
              priority
            />
          </button>

          <button
            onClick={onHome}
            className="w-12 h-12 rounded-full bg-[#94E7FC] border-[3px] border-white flex items-center justify-center shadow-[0px_3px_0px_0px_#01668E] active:translate-y-[1px] cursor-pointer"
            aria-label="Home"
          >
            <Image
              src="/assets/icons/home-icon.svg"
              alt="Home"
              width={24}
              height={24}
              priority
            />
          </button>
        </div>
      </div>
      {/* Espaçador para não sobrepor o conteúdo */}
      <div className="h-[72px]" />
    </>
  );
};

export default ModalHeader;
