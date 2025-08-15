"use client";

import React, { useEffect } from "react";
import { Inter, Noto_Sans } from "next/font/google";
import ModalCTAButton from "./ModalCTAButton";

const inter = Inter({ subsets: ["latin"], weight: ["600"] });
const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "600", "800"] });

export type RepararModalProps = {
  open: boolean;
  onClose: () => void;
  onVerReflexao?: () => void;
};

/**
 * Modal do verbo "Reparar" (node 9:688 do Figma)
 * Cores: Primária #834D9B | Texto #3A3A3A | Exemplo #878787 | Fundo #E5DFF2 | Ícone #8C8C8C
 */
export default function RepararModal({ open, onClose, onVerReflexao }: RepararModalProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;
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
        paddingTop: "max(16px, env(safe-area-inset-top))",
        paddingBottom: "max(24px, env(safe-area-inset-bottom))",
      }}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/35" onClick={onClose} />

      {/* Conteúdo */}
      <div className="relative z-[1] w-full max-w-[393px] mx-auto px-4 sm:px-0 overflow-y-auto" style={{ maxHeight: "100dvh" }}>
        <div className="relative bg-[#E5DFF2] rounded-[16px] rounded-tr-none shadow-[0_12px_32px_rgba(0,0,0,0.2)] overflow-hidden mb-4 min-h-[640px]">
          {/* Header */}
          <div className="relative flex items-center justify-center px-5 pt-8 pb-4">
            <h2 className={`${noto.className} text-center text-[28px] leading-[20px] font-extrabold tracking-[-0.56px]`} style={{ color: "#834D9B" }}>
              Reparar
            </h2>
            <button
              aria-label="Fechar"
              onClick={onClose}
              className="w-8 h-8 grid place-items-center text-[#8C8C8C] hover:text-[#6e6e6e] absolute top-3 right-5 cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Corpo */}
          <div className="px-5 pb-5">
            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-[23px] top-[70px] bottom-[80px] w-[2px] bg-[#834D9B]" />

              <div className="space-y-4">
                {/* 01 - Consertar */}
                <TimelineItem
                  index="01"
                  circleColor="#834D9B"
                  titleColor="#834D9B"
                  title="Consertar"
                  subtitle={`No sentido de consertar algo, vai ser transitivo direto, ou seja, sem preposição.`}
                  exemploPrefix="Exemplo: "
                  exemploHtml={
                    <>O técnico virá para reparar <u>o</u> nosso micro-ondas”.</>
                  }
                />

                {/* 02 - Prestar atenção */}
                <TimelineItem
                  index="02"
                  circleColor="#834D9B"
                  titleColor="#834D9B"
                  title="Prestar atenção"
                  subtitle={`No sentido de prestar atenção em algo, será transitivo indireto, ou seja, com uso de preposição.`}
                  exemploPrefix="Exemplo: "
                  exemploHtml={
                    <>A blogueira reparou <u>no</u> número de seguidores novos dela”.</>
                  }
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-5 pb-5">
            <ModalCTAButton
              label="Ver reflexão sobre os sentidos do verbo"
              onClick={() => {
                onClose?.();
                onVerReflexao?.();
              }}
              iconLeftSrc="/assets/images/regencia-verbal/icon-lamp.svg"
              iconLeftAlt="Lâmpada"
              iconSize={18}
              className="whitespace-nowrap mx-[5px] !bg-[#651480] hover:!bg-[#55106B] shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ index, title, subtitle, exemploPrefix, exemploHtml, circleColor, titleColor }: {
  index: string;
  title: string;
  subtitle: string;
  exemploPrefix: string;
  exemploHtml: React.ReactNode;
  circleColor: string;
  titleColor: string;
}) {
  return (
    <div className="relative">
      {/* Marcador */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full text-white grid place-items-center shadow-[0_6px_12px_rgba(0,0,0,0.2)] ring-4 ring-white z-[2]"
        style={{ backgroundColor: circleColor }}
      >
        <span className={`${inter.className} text-[14px] font-semibold`}>{index}</span>
      </div>

      {/* Card */}
      <div className="relative z-[1] ml-[32px] bg-white rounded-[20px] p-3 pl-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
        <h3 className={`${noto.className} text-[18px] leading-[20px] font-extrabold mb-1`} style={{ color: titleColor }}>
          {title}
        </h3>
        <p className={`${noto.className} text-[16px] leading-[20px] text-[#3A3A3A]`}>{subtitle}</p>
        <p className={`${noto.className} text-[14px] leading-[20px] text-[#878787] italic mt-2`}>
          {exemploPrefix}
          {exemploHtml}
        </p>
      </div>
    </div>
  );
}
