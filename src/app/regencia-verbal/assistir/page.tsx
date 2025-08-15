"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../components/Botao";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

export default function RegenciaAssistir() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden flex flex-col justify-start items-center min-h-screen mx-auto">
      <div className="w-[393px] min-h-screen">
        {/* BG gradiente */}
        <div className="absolute inset-0" aria-hidden>
          <div className="w-full h-full" style={{ background: "linear-gradient(180deg, #00076C 0%, #632885 100%)" }} />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center gap-6 p-6 pt-6 w-full">
          {/* Título */}
          <div className="w-full flex items-center justify-center">
            <span className={`${inter.className} font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px] text-white`}>
              Português
            </span>
          </div>

          {/* Card */}
          <div className="w-[260px] bg-white rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-center mb-2">
              <img src="/assets/images/regencia-verbal/assistir-icon.svg" alt="Assistir" className="w-12 h-12" />
            </div>

            <div className={`${inter.className} font-semibold text-[#00076C] text-center tracking-[-0.14px] text-[16px]`}>
              Verbo: Assistir
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <strong>1. Assistir A (algo/alguém)</strong> - Com preposição "a"
              <br />
              Significa "ver, presenciar, estar presente".
              <br />
              <em>Exemplo: Ele assistiu ao filme no cinema.</em>
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <strong>2. Assistir (alguém)</strong> - Sem preposição (transitivo direto)
              <br />
              Significa "ajudar, socorrer, dar assistência".
              <br />
              <em>Exemplo: O médico assistiu o paciente durante a cirurgia.</em>
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <strong>3. Assistir EM (lugar)</strong> - Com preposição "em"
              <br />
              Significa "morar, residir".
              <br />
              <em>Exemplo: Ele assiste em São Paulo há cinco anos.</em>
            </div>
          </div>

          {/* Voltar */}
          <div className="w-[260px]">
            <Botao
              onClick={() => router.push("/regencia-verbal")}
              label="Voltar"
              variant="voltar"
              height="40px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
