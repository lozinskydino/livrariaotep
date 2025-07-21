"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Botao from "../components/Botao";
import InsetosModal from "../components/InsetosModal";
import ArtropodesModal from "../components/ArtropodesModal";
import CrustaceosModal from "../components/CrustaceosModal";
import QueliceradosModal from "../components/QueliceradosModal";
import MiriapodesModal from "../components/MiriapodesModal";
import EquinodermosModal from "../components/EquinodermosModal";

export default function ArtropodesTopicos() {
  const router = useRouter();
  const [isInsetosModalOpen, setIsInsetosModalOpen] = useState(false);
  const [isArtropodesModalOpen, setIsArtropodesModalOpen] = useState(false);
  const [isCrustaceosModalOpen, setIsCrustaceosModalOpen] = useState(false);
  const [isQueliceradosModalOpen, setIsQueliceradosModalOpen] = useState(false);
  const [isMiriapodesModalOpen, setIsMiriapodesModalOpen] = useState(false);
  const [isEquinodermosModalOpen, setIsEquinodermosModalOpen] = useState(false);

  const handleVoltarClick = () => {
    router.push("/artropodes/intro");
  };

  const handleAvancarClick = () => {
    router.push("/artropodes/final");
  };

  const handleInsetosClick = () => {
    setIsInsetosModalOpen(true);
  };

  const handleArtropodesClick = () => {
    setIsArtropodesModalOpen(true);
  };

  const handleCrustaceosClick = () => {
    setIsCrustaceosModalOpen(true);
  };

  const handleQueliceradosClick = () => {
    setIsQueliceradosModalOpen(true);
  };

  const handleMiriapodesClick = () => {
    setIsMiriapodesModalOpen(true);
  };

  const handleEquinodermosClick = () => {
    setIsEquinodermosModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsInsetosModalOpen(false);
    setIsArtropodesModalOpen(false);
    setIsCrustaceosModalOpen(false);
    setIsQueliceradosModalOpen(false);
    setIsMiriapodesModalOpen(false);
    setIsEquinodermosModalOpen(false);
  };

  const handleHomeClick = () => {
    router.push("/artropodes");
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-y-hidden w-[393px] mx-auto bg-gradient-to-b from-[#41AA98] to-[#EBF3EE]">
      
      {/* Conteúdo principal */}
      <div className="flex flex-col items-center w-full pt-[40px] px-4">
        
        {/* Títulos */}
        <div className="flex gap-3 mb-6 w-full max-w-[315px]">
          {/* Título Artrópodes */}
          <div className="flex-1 bg-[#41AA98] border-4 border-white rounded-[16px] pr-[5px] pb-[5px] cursor-pointer" onClick={handleArtropodesClick}>
            <div className="bg-[#EBF3EE] border-2 border-[#1C4F46] rounded-[16px] p-4">
              <h2 className="text-[#1C4F46] font-nunito font-extrabold text-[17px] leading-[1.2] text-center">
                Artrópodes
              </h2>
            </div>
          </div>

          {/* Título Equinodermos */}
          <div className="flex-1 bg-[#41AA98] border-4 border-white rounded-[16px] pr-[5px] pb-[5px] cursor-pointer" onClick={handleEquinodermosClick}>
            <div className="bg-[#EBF3EE] border-2 border-[#1C4F46] rounded-[16px] p-4">
              <h2 className="text-[#1C4F46] font-nunito font-extrabold text-[17px] leading-[1.2] text-center">
                Equinodermos
              </h2>
            </div>
          </div>
        </div>

        {/* Grid de animais */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-[315px] mb-8">
          
          {/* Insetos */}
          <div className="bg-[#41AA98] border-4 border-white rounded-[60px] pr-[5px] pb-[5px] cursor-pointer" onClick={handleInsetosClick}>
            <div className="bg-[#EBF3EE] border-2 border-[#1C4F46] rounded-[60px] h-[120px] flex flex-col items-center justify-center">
                <img 
                  src="/assets/images/artropodes/insetos.svg" 
                  alt="Insetos" 
                  className="w-[110px] h-[110px] object-contain animate-pulse-step"
                />
            </div>
          </div>

          {/* Tatuzinho */}
          <div className="bg-[#41AA98] border-4 border-white rounded-[60px] pr-[5px] pb-[5px] cursor-pointer" onClick={handleCrustaceosClick}>
            <div className="bg-[#EBF3EE] border-2 border-[#1C4F46] rounded-[60px] p-4 h-[120px] flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-2">
                <img 
                  src="/assets/images/artropodes/tatuzinho.svg" 
                  alt="Tatuzinho" 
                  className="w-[95px] h-[95px] object-contain animate-pulse-step"
                />
              </div>
            </div>
          </div>

          {/* Aranha */}
          <div className="bg-[#41AA98] border-4 border-white rounded-[60px] pr-[5px] pb-[5px] cursor-pointer" onClick={handleQueliceradosClick}>
            <div className="bg-[#EBF3EE] border-2 border-[#1C4F46] rounded-[60px] p-4 h-[120px] flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-2">
                <img 
                  src="/assets/images/artropodes/aranha.svg" 
                  alt="Aranha" 
                  className="w-[95px] h-[95px] object-contain animate-pulse-step"
                />
              </div>
            </div>
          </div>

          {/* Centopeia */}
          <div className="bg-[#41AA98] border-4 border-white rounded-[60px] pr-[5px] pb-[5px] cursor-pointer" onClick={handleMiriapodesClick}>
            <div className="bg-[#EBF3EE] border-2 border-[#1C4F46] rounded-[60px] p-4 h-[120px] flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-2">
                <img 
                  src="/assets/images/artropodes/centopeia.svg" 
                  alt="Centopeia" 
                  className="w-[95px] h-[95px] object-contain animate-pulse-step"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Estrelas e bolacha-do-mar (item único em baixo) */}
        <div className="w-full max-w-[155px] mb-0 pr-[5px] pb-[5px]">
          <div className="bg-[#41AA98] border-4 border-white rounded-[60px] pr-[5px] pb-[5px] cursor-pointer" onClick={handleEquinodermosClick}>
            <div className="bg-[#EBF3EE] border-2 border-[#1C4F46] rounded-[60px] p-4 h-[120px] flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-2">
                <img 
                  src="/assets/images/artropodes/estrela-bolacha.svg" 
                  alt="Estrelas e bolacha-do-mar" 
                  className="w-[130px] h-[130px] object-contain animate-pulse-step"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Texto de interação */}
        <div className="flex flex-col items-center mb-8">
          {/* Imagem de instrução */}
                  <div className="mt-6 mb-6">
                    <Image 
                      src="/assets/images/artropodes/info-clique.svg" 
                      alt="Clique para expandir" 
                      width={185} 
                      height={62} 
                      className="object-contain"
                    />
                  </div>
        </div>
      </div>

      {/* Modal dos Insetos */}
      <InsetosModal 
        isOpen={isInsetosModalOpen} 
        onClose={handleCloseModal} 
        onHome={handleHomeClick} 
      />

      {/* Modal dos Artrópodes */}
      <ArtropodesModal 
        isOpen={isArtropodesModalOpen} 
        onClose={handleCloseModal} 
        onHome={handleHomeClick} 
      />

      {/* Modal dos Crustáceos */}
      <CrustaceosModal 
        isOpen={isCrustaceosModalOpen} 
        onClose={handleCloseModal} 
        onHome={handleHomeClick} 
      />

      {/* Modal dos Quelicerados */}
      <QueliceradosModal 
        isOpen={isQueliceradosModalOpen} 
        onClose={handleCloseModal} 
        onHome={handleHomeClick} 
      />

      {/* Modal dos Miriápodes */}
      <MiriapodesModal 
        isOpen={isMiriapodesModalOpen} 
        onClose={handleCloseModal} 
        onHome={handleHomeClick} 
      />

      {/* Modal dos Equinodermos */}
      <EquinodermosModal 
        isOpen={isEquinodermosModalOpen} 
        onClose={handleCloseModal} 
        onHome={handleHomeClick} 
      />

      {/* Botões de navegação */}
      <div className="w-full mb-[40px] flex justify-center gap-4 px-4">
        <div className="flex-1 max-w-[150px]">
          <Botao onClick={handleVoltarClick} label="VOLTAR" variant="azul" height="64px" />
        </div>
        <div className="flex-1 max-w-[150px]">
          <Botao onClick={handleAvancarClick} label="AVANÇAR" variant="verde" height="64px" />
        </div>
      </div>
    </div>
  );
}
