"use client";

import React from "react";
import Image from "next/image";
import BotaoRedondo from "./BotaoRedondo";
import VideoPlayer from "./VideoPlayer";
import ModalHeader from "./ModalHeader";

interface InsetosModalProps {
  isOpen: boolean;
  onClose: () => void;
  onHome: () => void;
}

const InsetosModal: React.FC<InsetosModalProps> = ({ isOpen, onClose, onHome }) => {
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
                <h1 className="w-[281px] h-[22px] font-nunito font-extrabold text-[18px] leading-[1.2] text-[#1C4F46] flex-none order-0 flex-grow-1">Insetos</h1>

                {/* Imagem da segunda seção */}
                <div className="w-full flex justify-center">
                  <div className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative bg-[url('/assets/images/artropodes/insetos-modal-1.png')] bg-cover bg-center"></div>
                </div>

                {/* Primeira seção com botão 1 */}
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("1")} numero="1" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">Os insetos representam o maior número de artrópodes, com 750 mil espécies descritas. Podem ser exemplificados por moscas, mosquitos, borboletas, pulgas, libélulas, entre outros.</p>
                  </div>
                </div>

                {/* Imagem da segunda seção */}
                <div className="w-full flex justify-center">
                  <div
                    className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative"
                    style={{
                      backgroundImage: `url('/assets/images/artropodes/insetos-modal-2.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}></div>
                </div>

                {/* Segunda seção com botão 2 */}
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("2")} numero="2" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">Eles apresentam o corpo dividido em cabeça, tórax e abdômen e seis pernas. Podem apresentar um ou dois pares de asas ou não ter asas. Mas todos têm um par de antenas.</p>
                  </div>

                  {/* Imagem da segunda seção */}
                  <div className="w-full flex justify-center">
                    <div
                      className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[280px] rounded-[16px] relative"
                      style={{
                        backgroundImage: `url('/assets/images/artropodes/morfologia-inseto.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}></div>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-4">
                  {/* Imagem da segunda seção */}
                  <div className="w-full flex justify-center">
                    <div
                      className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative"
                      style={{
                        backgroundImage: `url('/assets/images/artropodes/insetos-modal-3.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}></div>
                  </div>

                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("3")} numero="3" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">A metamorfose está presente no desenvolvimento de muitos insetos. No caso da borboleta, ela é completa; já no caso do gafanhoto, ela é incompleta; e no caso da traça, a metamorfose não ocorre.</p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-4">
                  <div className="w-full flex justify-center">
                    <div className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative">
                      <VideoPlayer src="https://player.vimeo.com/video/1100711868?h=81e336c591&badge=0&autopause=0&player_id=0&app_id=58479" />
                    </div>
                  </div>

                  {/* Imagem da segunda seção */}
                  <div className="w-full flex justify-center">
                    <div
                      className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative"
                      style={{
                        backgroundImage: `url('/assets/images/artropodes/insetos-modal-4.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}></div>
                  </div>

                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("4")} numero="4" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">Na metamorfose completa, do ovo sai a lagarta ou larva, que forma a pupa da qual surge a fase adulta.</p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-4">
                  <div className="w-full flex justify-center">
                    <div className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative">
                      <VideoPlayer src="https://player.vimeo.com/video/1100711473?h=0c22b92fc6&badge=0&autopause=0&player_id=0&app_id=58479" />
                    </div>
                  </div>

                  {/* Imagem da segunda seção */}
                  <div className="w-full flex justify-center">
                    <div
                      className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative"
                      style={{
                        backgroundImage: `url('/assets/images/artropodes/insetos-modal-5.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}></div>
                  </div>

                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("5")} numero="5" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">Na metamorfose completa, do ovo sai a lagarta ou larva, que forma a pupa da qual surge a fase adulta.</p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-4">
                  {/* Imagem da segunda seção */}
                  <div className="w-full flex justify-center">
                    <div
                      className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative"
                      style={{
                        backgroundImage: `url('/assets/images/artropodes/insetos-modal-6.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}></div>
                  </div>

                  <div className="flex items-start gap-2">
                    <BotaoRedondo onClick={() => handleBotaoClick("6")} numero="6" />
                    <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-1">Muitos insetos são importantes na reprodução das plantas, como é o caso das abelhas, por serem polinizadores. Mas existem aqueles que são transmissores de doença, como o Aedes aegypti, que transmite os vírus da dengue, da febre amarela, do zika vírus e da chikungunya.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom button */}
          <div className="w-full mt-6 max-w-[313px] flex justify-center cursor-pointer">
            <button onClick={onClose} className="w-full bg-[#01668E] border-4 border-white rounded-full py-3 px-6 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)] relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[#94E7FC] rounded-full top-0" style={{ left: "1.01px", width: "calc(100% - 3px)", height: "calc(100% - 4px)" }} />
              <span className="relative z-10 font-nunito font-black text-base leading-[1.364] tracking-[0.04em] uppercase text-center text-[#01668E]">VOLTAR</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsetosModal;
