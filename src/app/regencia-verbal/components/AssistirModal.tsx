"use client";

import React, { useEffect } from "react";
import { Inter, Noto_Sans } from "next/font/google";
import ModalCTAButton from "./ModalCTAButton";

const inter = Inter({ subsets: ["latin"], weight: ["600"] });
const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "600", "800"] });

export type AssistirModalProps = {
  open: boolean;
  onClose: () => void;
  onVerReflexao?: () => void;
};

/**
 * Modal do verbo "Assistir" (overlay translúcido), baseado no Figma (node 3-3525/3-3666).
 * - Fundo: overlay preto com 35% (para ver o conteúdo de fundo).
 * - Conteúdo: card com topo "Assistir", lista vertical com marcadores numerados (01, 02, 03)
 *   e cards internos com texto e exemplo.
 */
export default function AssistirModal({ open, onClose, onVerReflexao }: AssistirModalProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    // Evita scroll de fundo ao abrir
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-[100] flex items-start justify-center"
      style={{
        // Espaço no topo e respeito à área segura, overlay permanece fixo
        paddingTop: "max(16px, env(safe-area-inset-top))",
        paddingBottom: "max(24px, env(safe-area-inset-bottom))",
      }}
    >
      {/* Overlay translúcido (cobre toda a tela) */}
      <div
        className="fixed inset-0 bg-black/35"
        onClick={onClose}
      />

      {/* Conteúdo do modal */}
      <div
        className="relative z-[1] w-full max-w-[393px] mx-auto px-4 sm:px-0 overflow-y-auto"
        style={{ maxHeight: "100dvh" }}
      >
        <div className="relative bg-[#E6F2FB] rounded-[16px] rounded-tr-none shadow-[0_12px_32px_rgba(0,0,0,0.2)] overflow-hidden mb-4 min-h-[795px]">
          {/* Header */}
          <div className="relative flex items-center justify-center px-5 pt-8 pb-4">
            <h2 className={`${noto.className} text-center text-[22px] leading-[26px] font-extrabold text-[#2B7BDE]`}>
              Assistir
            </h2>
            <button
              aria-label="Fechar"
              onClick={onClose}
              className="w-8 h-8 grid place-items-center text-[#7A8CA0] hover:text-[#4A5B6C] absolute top-3 right-5 cursor-pointer"
            >
              {/* Ícone X simples */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Corpo - timeline */}
          <div className="px-5 pb-5">
            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-[23px] top-[70px] bottom-[70px] w-[2px] bg-[#94C6F5]" />

              <div className="space-y-4">
                {/* Item 1 */}
                <TimelineItem
                  index="01"
                  title="Ver"
                  subtitle={`No sentido de "ver", "presenciar", o verbo é transitivo indireto, ou seja, precisa da preposição, no caso a preposição "a".`}
                  exemplo={
                    <>
                      Exemplo: &quot;Assistimos <u>ao</u> jogo ontem, mas não assistimos <u>à</u> novela.&quot;
                    </>
                  }
                />

                {/* Item 2 */}
                <TimelineItem
                  index="02"
                  title="Auxiliar"
                  subtitle={`No sentido de "auxiliar", o verbo não precisa de preposição, ou seja, é transitivo direto.`}
                  exemplo={
                    <>
                      Exemplo: &quot;O resgatista assistiu <u>os</u> feridos no acidente.&quot;
                    </>
                  }
                />

                {/* Item 3 */}
                <TimelineItem
                  index="03"
                  title="Pertencer"
                  subtitle={`No sentido de "pertencer", "caber por direito", o verbo precisa da preposição "a", mas o prêmio/direito é que funciona como sujeito na frase e o merecedor dele é o complemento:`}
                  exemplo={
                    <>
                      Exemplo: &quot;O direito de estudar assiste <u>a</u> toda criança.&quot;
                    </>
                  }
                />
              </div>
            </div>
          </div>

          {/* Rodapé CTA */}
          <div className="px-5 pb-5">
            <ModalCTAButton
              label="Reflexão sobre os sentidos do verbo"
              onClick={() => {
                onClose?.();
                onVerReflexao?.();
              }}
              iconLeftSrc="/assets/images/regencia-verbal/icon-lamp.svg"
              iconLeftAlt="Lâmpada"
              iconSize={18}
              className="whitespace-nowrap mx-[5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ index, title, subtitle, exemplo }: { index: string; title: string; subtitle: string; exemplo: React.ReactNode; }) {
  return (
    <div className="relative">
      {/* Marker sobreposto ao card */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-[#2B7BDE] text-white grid place-items-center shadow-[0_6px_12px_rgba(43,123,222,0.35)] ring-4 ring-white z-[2]">
        <span className={`${inter.className} text-[14px] font-semibold`}>{index}</span>
      </div>

      {/* Card com margem para permitir a sobreposição do círculo */}
      <div className="relative z-[1] ml-[32px] bg-white rounded-[12px] p-3 pl-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
        <h3 className={`${noto.className} text-[15px] leading-[20px] font-semibold text-[#1F2D3D] mb-1`}>{title}</h3>
        <p className={`${noto.className} text-[13px] leading-[18px] text-[#415466]`}>{subtitle}</p>
        <p className={`${noto.className} text-[12px] leading-[16px] text-[#6B7C8F] italic mt-2`}>{exemplo}</p>
      </div>
    </div>
  );
}
