"use client";

import React, { useEffect } from "react";
import { Inter, Noto_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["600"] });
const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "600", "800"] });

export type PrecisarModalProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Modal do verbo "Precisar" (node 9:629 do Figma)
 * Cores: Primária #DD2476 | Texto #3A3A3A | Exemplo #878787 | Fundo #F2DFE7
 */
export default function PrecisarModal({ open, onClose }: PrecisarModalProps) {
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
        <div className="relative bg-[#F2DFE7] rounded-[16px] rounded-tr-none shadow-[0_12px_32px_rgba(0,0,0,0.2)] overflow-hidden mb-4 min-h-[640px]">
          {/* Header */}
          <div className="relative flex items-center justify-center px-5 pt-8 pb-4">
            <h2 className={`${noto.className} text-center text-[28px] leading-[20px] font-extrabold tracking-[-0.56px]`} style={{ color: "#DD2476" }}>
              Precisar
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
              <div className="absolute left-[23px] top-[70px] bottom-[80px] w-[2px] bg-[#DD2476]" />

              <div className="space-y-4">
                {/* 01 - Indicar precisão */}
                <TimelineItem
                  index="01"
                  circleColor="#DD2476"
                  titleColor="#DD2476"
                  title="Indicar precisão"
                  subtitle={`No sentido de indicar algo com precisão, o verbo vai ser transitivo direto, ou seja, sem preposição.`}
                  exemploPrefix="Exemplo: "
                  exemploHtml={
                    <>O investigador precisou <u>o</u> lugar do crime com rapidez.</>
                  }
                />

                {/* 02 - Necessitar */}
                <TimelineItem
                  index="02"
                  circleColor="#DD2476"
                  titleColor="#DD2476"
                  title="Necessitar"
                  subtitle={`No sentido de necessitar, o verbo vai ser transitivo indireto, com preposição.`}
                  exemploPrefix="Exemplo: "
                  exemploHtml={
                    <>Os moradores em situação de rua precisam <u>de</u> sua ajuda.</>
                  }
                />
              </div>
            </div>
          </div>

          {/* Sem CTA de reflexão para "Precisar" */}
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
