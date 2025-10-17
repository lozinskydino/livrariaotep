"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import InfoCard from "./InfoCard";
import Botao from "./Botao";
import ModalHeader from "./ModalHeader";

interface ModalContentProps {
  id: number;
  titulo: string;
  descricao: string;
  mapaSrc: string;
  imagemSrc: string;
  imagemAlt: string;
  mapOffset: number;
  onClose: () => void;
}

export default function ModalContent({
  id,
  titulo,
  descricao,
  mapaSrc,
  imagemSrc,
  imagemAlt,
  mapOffset,
  onClose,
}: ModalContentProps) {
  const [topOffset, setTopOffset] = useState(50);
  const [mapObjectPosition, setMapObjectPosition] = useState("50% 50%");

  const getOffsetForViewport = (width: number, height: number) => {
    const headerHeight = 86; // Header height

    if (typeof window !== "undefined") {
      if (window.matchMedia("(max-width: 480px)").matches) {
        return headerHeight + 1000;
      }

      if (window.matchMedia("(max-width: 768px)").matches) {
        return headerHeight + 20;
      }

      if (window.matchMedia("(max-width: 1024px)").matches) {
        return headerHeight + 20;
      }

      if (window.matchMedia("(min-width: 1600px)").matches) {
        return headerHeight + 20;
      }
    }

    return headerHeight + 20;
  };

  const getMapObjectPosition = (width: number, height: number) => {
    const baseVerticalPercent = Math.max(0, Math.min(100, (height * 0.35) / (height * 0.01)));
    const compensatedPercent = baseVerticalPercent + mapOffset;
    return `50% ${Math.round(compensatedPercent)}%`;
  };

  useEffect(() => {
    const updateOffset = () => {
      const { innerHeight, innerWidth } = window;
      const dynamicOffset = getOffsetForViewport(innerWidth, innerHeight);
      setTopOffset(dynamicOffset);

      const objectPos = getMapObjectPosition(innerWidth, innerHeight);
      setMapObjectPosition(objectPos);
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <div className="relative overflow-visible flex flex-col mx-auto w-full" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Background com imagem do mapa */}
      <div className="w-full relative flex justify-center">
        {/* Background branco base */}
        <div className="absolute inset-0" style={{ background: "#FFFFFF" }} />

        {/* Header com botões de navegação */}
        <ModalHeader onBack={onClose} onHome={onClose} bgColor="#FFFFFF" />

        {/* Conteúdo principal responsivo */}
        <div className="relative z-10 w-full mx-auto pb-8 flex flex-col mt-[82px]">
          {/* Título */}
          <h1 className="mt-4 mb-4 text-center text-[17px] font-extrabold font-nunito leading-[1.2] text-[#09163C] absolute z-20 w-full">
            ATUAIS CONFLITOS POR ÁGUA NO PLANETA
          </h1> 

          {/* Mapa com InfoCard sobreposto */}
          <div className="relative w-full h-[100vh] overflow-hidden">
            <Image
              src={mapaSrc}
              alt={`Mapa - ${titulo}`}
              fill
              className="object-none"
              style={{ objectPosition: mapObjectPosition }}
              priority
            />
            <div className="absolute inset-0" />
          </div>

          {/* InfoCard + Botão com scroll */}
          <div className="relative w-full flex justify-center -mt-[520px] md:-mt-[600px] z-20 pb-20 pt-4">
            <div
              className="w-[calc(100%-32px)] max-w-[600px] flex flex-col gap-10"
            >
              <InfoCard
                containerBg="#51618D"
                innerBg="#DEF3FB"
                innerBorder="#09163C"
                className="!mt-0"
              >
                <div className="flex flex-col gap-4">
                  {/* Título do card */}
                  <h2 className="text-[#09163C] text-[18px] leading-[1.2] font-extrabold font-nunito">
                    {titulo}
                  </h2>

                  {/* Texto descritivo */}
                  <p className="text-[#09163C] text-[16px] leading-[1.2] font-semibold font-nunito">
                    {descricao}
                  </p>

                  {/* Container da imagem com ano */}
                  <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src={imagemSrc}
                      alt={imagemAlt}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay com gradiente e ano */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(217, 217, 217, 0) 100%)",
                      }}
                    />
                    <div className="absolute top-[10px] left-[13px]">
                      <span className="text-white text-[16px] leading-[1.2] font-bold font-nunito">
                        2023
                      </span>
                    </div>
                  </div>
                </div>
              </InfoCard>

              {/* Botão Voltar */}
              <div className="flex justify-center items-center px-4">
                <div className="w-full">
                  <Botao onClick={onClose} label="Voltar" variant="azul" height="67px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
