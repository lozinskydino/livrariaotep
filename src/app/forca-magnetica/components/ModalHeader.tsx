"use client";

import React from "react";
import Image from "next/image";

interface ModalHeaderProps {
  onClose: () => void;
  onHome?: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose, onHome }) => {
  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
      <button onClick={onClose} className="w-12 h-12 rounded-full bg-[#94E7FC] border-[3px] border-white flex items-center justify-center shadow-[0px_3px_0px_0px_#01668E] cursor-pointer">
        <Image src="/assets/icons/back-arrow-icon.svg" alt="Voltar" width={28} height={27} className="text-[#01668E]" />
      </button>

      <button onClick={onHome} className="w-12 h-12 rounded-full bg-[#94E7FC] border-[3px] border-white flex items-center justify-center shadow-[0px_3px_0px_0px_#01668E] cursor-pointer">
        <Image src="/assets/icons/home-icon.svg" alt="Home" width={24} height={24} className="text-[#01668E]" />
      </button>
    </div>
  );
};

export default ModalHeader;
