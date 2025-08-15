"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Inter, Noto_Sans } from "next/font/google";
import ReflexaoTitle from "@/app/regencia-verbal/components/ReflexaoTitle";

const inter = Inter({ subsets: ["latin"], weight: ["600", "700"] });
const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "800"] });

export type ReflexaoAssistirModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ReflexaoAssistirModal({ open, onClose }: ReflexaoAssistirModalProps) {
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
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
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/35" onClick={onClose} />

      {/* Conteúdo rolável */}
      <div className="relative z-[1] w-full max-w-[393px] mx-auto px-4 sm:px-0 overflow-y-auto" style={{ maxHeight: "100dvh" }}>
        {/* Container estilo modal (cantos assimétricos) */}
        <div className="relative bg-[#E6F2FB] rounded-[16px] rounded-tl-[28px] rounded-tr-[12px] shadow-[0_12px_32px_rgba(0,0,0,0.2)] overflow-hidden">
          {/* Botão Voltar (fecha modal) */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 inline-flex items-center gap-2 bg-[#2B7BDE] text-white rounded-full pl-3 pr-3 py-[6px] shadow-[0_6px_14px_rgba(43,123,222,0.35)] hover:bg-[#216bc5] transition cursor-pointer"
            aria-label="Voltar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" className="-ml-1">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className={`${inter.className} text-[13px] leading-[16px] font-semibold`}>Voltar</span>
          </button>

          {/* Título e subtítulo */}
          <div className="px-6 pt-10 pb-2 text-center">
            <h1 className={`${noto.className} text-[26px] leading-[30px] font-extrabold text-[#2B7BDE]`}>Assistir</h1>
            <div className="mt-2 flex justify-center">
              <ReflexaoTitle />
            </div>
            <p
              className={`${noto.className} mt-3 mx-auto text-center text-[#3A3A3A] text-[16px] leading-[22px] font-[500] w-[260px] h-[88px]`}
              style={{ letterSpacing: "-0.02em" }}
            >
              Veja, a seguir, como uma frase do dia a dia pode apresentar diferentes sentidos com a ausência ou troca de preposições.
            </p>
          </div>

          {/* Blocos de exemplo */}
          <div className="px-6 py-6 space-y-5">
            {/* Linha 1 */}
            <div className="grid grid-cols-[188px_126px] gap-1 items-center">
              <div className="flex flex-row justify-start items-center px-[14px] w-[188px] h-[145px] bg-[#3A7BD5] text-white rounded-[20px] shadow-[0_6px_16px_rgba(43,123,222,0.25)]">
                <p
                  className={`${noto.className} w-[166px] h-[85px] text-center text-white text-[14px] leading-[17px] font-[500]`}
                  style={{ letterSpacing: "-0.02em" }}
                >
                  “O torcedor assistiu ao jogo no estádio” – Aqui temos uma pessoa que viu o jogo, presenciou a partida.
                </p>
              </div>
              <div className="relative w-[126px] h-[145px] rounded-[20px] overflow-hidden">
                <div
                  className="absolute"
                  style={{
                    width: 160,
                    height: 166,
                    left: -17,
                    top: -21,
                    backgroundImage: "url(/assets/images/regencia-verbal/assistir-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>

            {/* Linha 2 */}
            <div className="grid grid-cols-[188px_126px] gap-1 items-center">
              <div className="flex flex-col justify-center items-center px-[14px] w-[188px] h-[145px] bg-[#3A7BD5] text-white rounded-[20px] shadow-[0_6px_16px_rgba(43,123,222,0.25)]">
                <p
                  className={`${noto.className} w-[166px] text-center text-white text-[14px] leading-[17px] font-[500]`}
                  style={{ letterSpacing: "-0.02em" }}
                >
                  “O torcedor assistiu o jogo no estádio” – Aqui temos uma pessoa que auxiliou o jogo, ou seja, ajudou de alguma maneira para que o jogo acontecesse.
                </p>
              </div>
              <div className="relative w-[126px] h-[145px] rounded-[20px] overflow-hidden">
                <div
                  className="absolute"
                  style={{
                    width: 160,
                    height: 166,
                    left: -17,
                    top: -21,
                    backgroundImage: "url(/assets/images/regencia-verbal/assistir-2.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
