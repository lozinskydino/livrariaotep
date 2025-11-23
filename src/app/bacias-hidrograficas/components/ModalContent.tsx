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
  descricaoSecundaria?: string;
  mapaSrc: string;
  imagemSrc: string;
  imagemAlt: string;
  imagemSecundariaSrc?: string;
  imagemSecundariaAlt?: string;
  mapOffset: number;
  mapHorizontalOffset?: number;
  onClose: () => void;
}

export default function ModalContent({
  id,
  titulo,
  descricao,
  descricaoSecundaria,
  mapaSrc,
  imagemSrc,
  imagemAlt,
  imagemSecundariaSrc,
  imagemSecundariaAlt,
  mapOffset,
  mapHorizontalOffset = 0,
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
    // Mesma lógica de alinhamento vertical usada em conflitos-hidricos,
    // mas permitindo ajuste horizontal por modal via mapHorizontalOffset
    const baseVerticalPercent = Math.max(0, Math.min(100, (height * 0.35) / (height * 0.01)));
    const compensatedVertical = baseVerticalPercent + mapOffset;
    const compensatedHorizontal = 50 + mapHorizontalOffset;
    return `${Math.round(compensatedHorizontal)}% ${Math.round(compensatedVertical)}%`;
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
    <div
      className="relative overflow-visible flex flex-col mx-auto w-full"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(230, 245, 235, 0) 0%, rgba(204, 218, 163, 1) 100%), linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)",
      }}
    >
      {/* Background com imagem do mapa */}
      <div className="w-full relative flex justify-center">
        {/* Background com gradiente base, seguindo o Figma */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(230, 245, 235, 0) 0%, rgba(204, 218, 163, 1) 100%), linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)",
            }}
          />
        </div>

        {/* Header com botões de navegação */}
        <ModalHeader onBack={onClose} onHome={onClose} bgColor="#FFFFFF" />

        {/* Conteúdo principal responsivo */}
        <div className="relative z-10 w-full mx-auto pb-8 flex flex-col mt-[82px]">
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
          <div className="relative w-full flex justify-center -mt-[520px] sm:-mt-[520px] md:-mt-[480px] lg:-mt-[440px] xl:-mt-[400px] 2xl:-mt-[360px] z-20 pb-20 pt-4">
            <div
              className="w-[calc(100%-32px)] max-w-[600px] flex flex-col gap-10"
            >
              <InfoCard
                containerBg="#598D10"
                innerBg="#EAFBDE"
                innerBorder="#233C09"
                className="!mt-0"
              >
                <div className="flex flex-col gap-4">
                  {/* Título do card */}
                  <h2 className="text-[#233C09] text-[18px] leading-[1.2] font-extrabold font-nunito">
                    {titulo}
                  </h2>

                  {/* Texto descritivo */}
                  <p className="text-[#233C09] text-[16px] leading-[1.2] font-semibold font-nunito">
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
                  </div>

                  {descricaoSecundaria && (
                    <p className="text-[#233C09] text-[16px] leading-[1.2] font-semibold font-nunito">
                      {descricaoSecundaria}
                    </p>
                  )}

                  {imagemSecundariaSrc && (
                    <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src={imagemSecundariaSrc}
                        alt={imagemSecundariaAlt || imagemAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
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
