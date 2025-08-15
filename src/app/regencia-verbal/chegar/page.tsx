"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../components/Botao";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

export default function RegenciaChegar() {
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
              <img src="/assets/images/regencia-verbal/chegar-icon.svg" alt="Chegar" className="w-12 h-12" />
            </div>

            <div className={`${inter.className} font-semibold text-[#00076C] text-center tracking-[-0.14px] text-[16px]`}>
              Verbo: Chegar
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <strong>1. Chegar A (lugar)</strong> - Com preposição &quot;a&quot;
              <br />
              Significa &quot;atingir um destino, alcançar&quot;.
              <br />
              <em>Exemplo: Ele chegou ao trabalho pontualmente.</em>
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <strong>2. Chegar EM (lugar)</strong> - Com preposição &quot;em&quot;
              <br />
              Também indica &quot;atingir um destino&quot; (uso mais coloquial).
              <br />
              <em>Exemplo: Chegamos em casa tarde da noite.</em>
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <strong>Observação:</strong> A forma padrão é &quot;chegar a&quot;, mas &quot;chegar em&quot; também é aceita no português brasileiro, especialmente na linguagem informal.
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
