"use client";

import { useEffect, useState } from "react";
import Botao from "./Botao";
import ModalHeader from "./ModalHeader";

interface ModalContentProps {
  titulo: string;
  descricao: string;
  mapaSrc: string;
  imagemSrc: string;
  mapOffset: number;
  onClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({
  titulo,
  descricao,
  mapaSrc,
  imagemSrc,
  mapOffset,
  onClose,
}: ModalContentProps) => {
  const [bottomOffset, setBottomOffset] = useState(50);

  const getOffsetForViewport = (width: number, height: number) => {
    const buttonAndGapHeight = 300; // 67px botão + 40px gap

    if (typeof window !== "undefined") {
      if (window.matchMedia("(max-width: 480px)").matches) {
        return Math.min(height * 0.32, width * 0.45) + buttonAndGapHeight;
      }

      if (window.matchMedia("(max-width: 768px)").matches) {
        return Math.min(height * 0.86, width * 0.35) + buttonAndGapHeight;
      }

      if (window.matchMedia("(max-width: 1024px)").matches) {
        return Math.min(height * 0.22, width * 0.28) + buttonAndGapHeight;
      }

      if (window.matchMedia("(min-width: 1600px)").matches) {
        return Math.min(height * 0.18, width * 0.22) + buttonAndGapHeight;
      }
    }

    return Math.min(height * 0.2, width * 0.25) + buttonAndGapHeight;
  };

  useEffect(() => {
    const getMapObjectPosition = (width: number, height: number) => {
      const baseVerticalPercent = Math.max(0, Math.min(100, (height * 0.35) / (height * 0.01)));
      const compensatedPercent = baseVerticalPercent + mapOffset;
      return `50% ${Math.round(compensatedPercent)}%`;
    };

    const updateOffset = () => {
      const { innerHeight, innerWidth } = window;
      const dynamicOffset = getOffsetForViewport(innerWidth, innerHeight);
      const clampedOffset = Math.max(0, Math.min(dynamicOffset, 200));
      setBottomOffset(clampedOffset);
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, [mapOffset]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center">
      <div className="relative w-full max-w-[393px] mx-auto mt-4 mb-4 bg-white rounded-[16px] overflow-hidden">
        {/* ModalHeader */}
        <ModalHeader onBack={onClose} onHome={onClose} />

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center gap-6 p-6 pt-6 w-full">
          {/* Título */}
          <div className="w-full flex items-center justify-center">
            <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px] text-[#09163C]">
              {titulo}
            </span>
          </div>

          {/* Card principal */}
          <div className="w-[260px] bg-white rounded-xl p-4 flex flex-col gap-3">
            {/* Descrição */}
            <div className="font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700">
              <p>{descricao}</p>
            </div>

            {/* Mapa */}
            <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden border border-neutral-300">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage: `url('${mapaSrc}')`,
                  backgroundPosition: `50% ${mapOffset}%`,
                }}
              />
            </div>

            {/* Imagem */}
            <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden border border-neutral-300">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage: `url('${imagemSrc}')`,
                }}
              />
            </div>
          </div>

          {/* Botão Fechar */}
          <div className="w-[260px]">
            <Botao onClick={onClose} label="Fechar" variant="azul" height="40px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
