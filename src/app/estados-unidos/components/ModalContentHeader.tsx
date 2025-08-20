"use client";

import React from "react";

interface ModalContentHeaderProps {
  title: string;
}

// Header interno do modal (título), com gradient vermelho e cantos arredondados
const ModalContentHeader: React.FC<ModalContentHeaderProps> = ({ title }) => {
  return (
    <div className="rounded-[14px] bg-gradient-to-b from-[#E24E4E] to-[#F18A8A] text-white font-extrabold text-[18px] leading-[1.2] px-[12px] py-[10px] shadow-[0_1px_0_rgba(0,0,0,0.15)]">
      {title}
    </div>
  );
};

export default ModalContentHeader;
