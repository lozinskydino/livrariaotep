"use client";

import { useRouter, useParams } from "next/navigation";
import ModalHeader from "../../components/ModalHeader";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800", "900"], display: "swap" });

export default function TopicoModal() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  // Mínimo conteúdo para navegação; copiar texto/imagens do Figma depois
  const TITULOS: Record<string, string> = {
    "grandes-fortunas": "Um período de grandes fortunas",
    "exploracao-operarios": "Exploração dos operários",
    "diferencas-sociais": "As diferenças sociais e o elitismo",
    "cultura-arte-inovacoes": "A cultura, a arte e as inovações",
    "trabalhadores-domesticos": "Os trabalhadores domésticos",
    "proibicao-escravizacao": "Proibição da escravização",
    "faroeste": "Faroeste",
  };

  const title = TITULOS[id] ?? "Tópico";

  return (
    <div className={`${nunito.className} relative min-h-screen w-full overflow-hidden`}> 
      {/* Fundo similar ao da listagem para manter coesão visual */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(180deg, #80E6E8 0%, #7BD2E0 28%, #FFD9B0 100%)",
          }}
        />
      </div>

      {/* Header fixo com botões (não reutiliza componente de botão) */}
      <ModalHeader onBack={() => router.back()} onHome={() => router.push("/estados-unidos/topicos")} />

      {/* Container central, largura fixa mobile */}
      <div className="pt-[84px] pb-[24px] w-full flex justify-center">
        <div className="w-[393px] px-[12px]">
          {/* Corpo do modal */}
          <div className="rounded-[18px] border-[3px] border-white bg-white/95 shadow-[0px_6px_0px_0px_rgba(1,102,142,0.32)] p-[10px]">
            {/* Header de conteúdo do modal (título) */}
            <div className="rounded-[14px] bg-gradient-to-b from-[#E24E4E] to-[#F18A8A] text-white font-extrabold text-[18px] leading-[1.2] px-[12px] py-[10px]">
              {title}
            </div>

            {/* Conteúdo rolável do modal */}
            <div className="mt-[10px] px-[8px] pb-[6px] text-[15px] leading-[1.4] text-[#3E3E3E] max-h-[60vh] overflow-y-auto">
              <p>
                Em meados do século XIX, os Estados Unidos estabeleciam economicamente... (conteúdo a ser preenchido conforme Figma).
              </p>

              {/* Imagens de exemplo com cantos arredondados */}
              <div className="mt-[10px] space-y-[10px]">
                <div className="w-full h-[152px] bg-[#D9D9D9] rounded-[10px]" />
                <div className="w-full h-[152px] bg-[#D9D9D9] rounded-[10px]" />
              </div>

              {/* Legendas de exemplo */}
              <div className="mt-[10px] space-y-[10px]">
                <p className="text-[#C24D4D] font-extrabold">Andrew Carnegie</p>
                <p className="text-[#C24D4D] font-extrabold">James Truslow Adams</p>
              </div>
            </div>
          </div>

          {/* Botão inferior VOLTAR (não reutiliza componente Botao) */}
          <button
            onClick={() => router.back()}
            className="mt-[14px] w-full h-[55px] rounded-[26px] bg-[#94E7FC] border-[3px] border-white text-[#01668E] font-extrabold shadow-[0px_4px_0px_0px_#01668E] active:translate-y-[1px]"
          >
            VOLTAR
          </button>
        </div>
      </div>
    </div>
  );
}
