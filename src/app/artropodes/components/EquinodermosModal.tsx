"use client";

import React from "react";
import Image from "next/image";
import BotaoRedondo from "./BotaoRedondo";
import VideoPlayer from "./VideoPlayer";

interface EquinodermosModalProps {
  isOpen: boolean;
  onClose: () => void;
  onHome: () => void;
}

const EquinodermosModal: React.FC<EquinodermosModalProps> = ({ isOpen, onClose, onHome }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBotaoClick = (numero: string) => {
    console.log(`Botão ${numero} clicado`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleBackdropClick}>
      <div className="relative w-full max-w-[393px] h-full overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#41AA98] to-[#EBF3EE]" />

        {/* Top buttons */}
        <div className="absolute flex justify-between items-center z-20 w-full bg-[#64AD9C] p-[15px]">
          <button onClick={onClose} className="w-12 h-12 rounded-full bg-[#94E7FC] border-[3px] border-white flex items-center justify-center shadow-[0px_3px_0px_0px_#01668E]">
            <Image src="/assets/icons/back-arrow-icon.svg" alt="Voltar" width={28} height={27} className="text-[#01668E]" />
          </button>

          <button onClick={onHome} className="w-12 h-12 rounded-full bg-[#94E7FC] border-[3px] border-white flex items-center justify-center shadow-[0px_3px_0px_0px_#01668E]">
            <Image src="/assets/icons/home-icon.svg" alt="Home" width={24} height={24} className="text-[#01668E]" />
          </button>
        </div>

        {/* Content container */}
        <div className="flex flex-col items-center h-full px-10 pt-[80px] pb-10 gap-3 overflow-y-auto pl-[50px]">

          {/* Content block */}
          <div className="w-[313px] bg-[#41AA98] border-4 border-white rounded-[16px] flex flex-col justify-end items-start gap-4 relative pt-0 pr-[5px] pb-[7px] pl-0">
            <div className="bg-[#EBF3EE] border-2 border-[#1C4F46] rounded-[16px] z-0 flex-none order-0 w-full p-[14px_10px]">
              <div className="w-full flex flex-col items-start gap-4 z-20 relative">
                <h1 className="w-[281px] h-[22px] font-nunito font-extrabold text-[18px] leading-[1.2] text-[#1C4F46] flex-none order-0 flex-grow-1">Equinodermos</h1>

                {/* Imagem principal do topo */}
                <div className="w-full flex justify-center">
                  <div className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[280px] rounded-[16px] relative bg-[url('/assets/images/artropodes/equinodermos-modal-1.png')] bg-cover bg-center">
                  </div>
                </div>
                
                {/* Primeira seção com botão 1 */}
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("1")} numero="1" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">
                      Apresentam espinhos na superfície do corpo e são exclusivamente marinhos.
                    </p>
                  </div>
                </div>

                {/* Segunda seção - Botão 2 + Texto */}
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("2")} numero="2" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">
                      São representados por estrelas-do-mar, serpentes-do-mar, ouriços-do-mar, bolachas da praia, lírio-do-mar e pepinos-do-mar. Apresentam grande capacidade de regeneração. Uma estrela-do-mar, por exemplo, pode regenerar braços perdidos.
                    </p>
                  </div>
                </div>

                {/* Terceira seção - Imagem */}
                <div className="w-full flex justify-center">
                  <div className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative bg-[url('/assets/images/artropodes/equinodermos-modal-2.png')] bg-cover bg-center">
                  </div>
                </div>

                {/* Quarta seção - Botão 3 + Texto */}
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("3")} numero="3" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">
                      Apresentam um endoesqueleto calcário e um sistema exclusivo denominado ambulacrário, importante para a locomoção do animal. Dele se projetam os pés ambulacrários bem visíveis na estrela-do-mar.
                    </p>
                  </div>
                </div>

                {/* Quinta seção - Imagem */}
                <div className="w-full flex justify-center">
                  <div
                    className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative">
                    <VideoPlayer src="https://player.vimeo.com/video/1100711946?h=a8ff67b424&badge=0&autopause=0&player_id=0&app_id=58479" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom button */}
          <div className="w-full mt-6">
            <button onClick={onClose} className="w-full bg-[#01668E] border-4 border-white rounded-full py-3 px-6 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)] relative overflow-hidden">
              <div
                className="absolute inset-0 bg-[#94E7FC] rounded-full top-0" 
                style={{left: "1.01px", width: "calc(100% - 3px)", height: "calc(100% - 4px)"}}
              />
              <span className="relative z-10 font-nunito font-black text-base leading-[1.364] tracking-[0.04em] uppercase text-center text-[#01668E]">VOLTAR</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquinodermosModal;
