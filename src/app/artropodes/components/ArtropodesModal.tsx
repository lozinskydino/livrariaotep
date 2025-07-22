"use client";

import React from "react";
import Image from "next/image";
import BotaoRedondo from "./BotaoRedondo";
import ModalHeader from "./ModalHeader";

interface ArtropodesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onHome: () => void;
}

const ArtropodesModal: React.FC<ArtropodesModalProps> = ({ isOpen, onClose, onHome }) => {
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
      <div className="relative w-full h-full overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#41AA98] to-[#EBF3EE]" />

        {/* Top buttons */}
        <ModalHeader onClose={onClose} onHome={onHome} />

        {/* Content container */}
        <div className="flex flex-col items-center h-full px-10 pt-[80px] pb-10 gap-3 overflow-y-auto pl-[50px]">

          {/* Content block */}
          <div className="w-[313px] bg-[#41AA98] border-4 border-white rounded-[16px] flex flex-col justify-end items-start gap-4 relative pt-0 pr-[5px] pb-[7px] pl-0">
            <div className="bg-[#EBF3EE] border-2 border-[#1C4F46] rounded-[16px] z-0 flex-none order-0 w-full p-[14px_10px]">
              <div className="w-full flex flex-col items-start gap-4 z-20 relative">
                <h1 className="w-[281px] h-[22px] font-nunito font-extrabold text-[18px] leading-[1.2] text-[#1C4F46] flex-none order-0 flex-grow-1">Artropodes</h1>
                
                {/* Imagem da segunda seção */}
                <div className="w-full flex justify-center">
                  <div className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[280px] rounded-[16px] relative bg-[url('/assets/images/artropodes/artropodes-modal-1.png')] bg-cover bg-center">
                  </div>
                </div>


                {/* Primeira seção com botão 1 */}
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("1")} numero="1" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">
                      São caracterizados por apresentarem apêndices articulados.
                    </p>
                  </div>
                </div>

                {/* Segunda seção com botão 2 */}
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("2")} numero="2" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">
                      Representam o maior agrupamento de animais, com cerca de 1,2 milhões de espécies e são encontrados em todos os ambientes.
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <div className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative bg-[url('/assets/images/artropodes/artropodes-modal-3.png')] bg-cover bg-center">
                  </div>
                </div>

                {/* Terceira seção com botão 3 */}
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("3")} numero="3" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">
                      São animais de vida livre, como as borboletas e as aranhas, ou parasitas, como as pulgas e os carrapatos.
                    </p>
                  </div>

                  {/* Imagem da terceira seção */}
                  <div className="w-full flex justify-center">
                    <div className="flex flex-col justify-center items-center p-2 gap-2 w-[290px] h-[160px] rounded-[16px] relative bg-[url('/assets/images/artropodes/artropodes-modal-4.png')] bg-cover bg-center">
                    </div>
                  </div>
                </div>

                {/* Quarta seção com botão 4 */}
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("4")} numero="4" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">
                      Apresentam um exoesqueleto formado por quitina, que limita o crescimento desses animais. Por isso, eles precisam realizar mudas ou ecdises para o crescimento.
                    </p>
                  </div>

                  {/* Imagem da quarta seção */}
                  <div className="w-full flex justify-center">
                    <div className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative bg-[url('/assets/images/artropodes/artropodes-modal-5.png')] bg-cover bg-center">
                    </div>
                  </div>
                </div>

                {/* Quinta seção com botão 5 */}
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("5")} numero="5" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">
                      Podem ser organizados nos seguintes grupos: insetos, quelicerados, crustáceos e miriápodes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom button */}
          <div className="w-full mt-6 max-w-[313px] flex justify-center cursor-pointer">
            <button onClick={onClose} className="w-full bg-[#01668E] border-4 border-white rounded-full py-3 px-6 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)] relative overflow-hidden cursor-pointer">
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

export default ArtropodesModal;
