"use client";

import React, { useEffect } from "react";
import { Inter, Noto_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["600"] });
const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "600", "800"] });

export type IrOuChegarModalProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Modal "Ir ou chegar" baseado no Figma (conteúdo textual + exemplos).
 * Mantém o mesmo padrão estrutural dos outros modais (overlay, container, header, body).
 */
export default function IrOuChegarModal({ open, onClose }: IrOuChegarModalProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
      {/* Overlay translúcido */}
      <div className="fixed inset-0 bg-black/35" onClick={onClose} />

      {/* Conteúdo do modal */}
      <div className="relative z-[1] w-full max-w-[393px] mx-auto px-4 sm:px-0 overflow-y-auto" style={{ maxHeight: "100dvh" }}>
        {/* Fundo levemente amarelado conforme o design */}
        <div className="relative rounded-[16px] rounded-tr-none shadow-[0_12px_32px_rgba(0,0,0,0.2)] overflow-hidden mb-4 min-h-[560px]" style={{ backgroundColor: "#F3F2DE" }}>
          {/* Header */}
          <div className="relative flex items-center justify-center px-5 pt-8 pb-4">
            <h2 className={`${noto.className} text-center text-[22px] leading-[26px] font-extrabold tracking-[-0.44px]`} style={{ color: "#E67E22" }}>
              Ir ou chegar
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
          <div className="px-5 pb-6">
            <p className={`${noto.className} text-[14px] leading-[20px] text-[#3A3A3A]`}>
              Verbos que indicam deslocamento vão empregar sempre a preposição <b><em>“a”</em></b> no sentido da ida e a preposição <b><em>“de”</em></b> no
              sentido da volta, enquanto a preposição <b><em>“em”</em></b> dá ideia de ausência de movimento. Veja os exemplos a seguir:
            </p>

            <div className="mt-5 space-y-3">
              <ExemploChip>“Vou <b><u>à</u></b> praia sempre que posso.”</ExemploChip>
              <ExemploChip>“Voltei cedo <b><u>da</u></b> festa.”</ExemploChip>
              <ExemploChip>“Fiquei <b><u>em</u></b> casa no domingo.”</ExemploChip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExemploChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-white rounded-full px-4 py-2 shadow-[0_2px_6px_rgba(0,0,0,0.06)]">
      <p className={`${noto.className} text-[14px] leading-[20px] text-[#3A3A3A] italic`}>{children}</p>
    </div>
  );
}
