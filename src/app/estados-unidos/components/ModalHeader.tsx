"use client";

import React from "react";
import Image from "next/image";

interface ModalHeaderProps {
  onBack: () => void;
  onHome: () => void;
}

// Header de modal para Estados Unidos, seguindo o padrão do Figma / artropodes
// Não reutiliza componentes de botão. Estilização inline + Tailwind para pixel-perfect mobile.
const ModalHeader: React.FC<ModalHeaderProps> = ({ onBack, onHome }) => {
  return (
    <div className="absolute z-20 w-full flex justify-center p-[15px] pointer-events-none bg-[#C93030]">
      <div className="w-[393px] flex items-center justify-between pointer-events-auto">
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
  );
};

export default ModalHeader;
