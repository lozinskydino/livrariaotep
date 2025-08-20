"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../components/Botao";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

export default function RegenciaImplicar() {
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
              <Image src="/assets/images/regencia-verbal/implicar-icon.svg" alt="Implicar" width={48} height={48} className="w-12 h-12" />
            </div>

            <div className={`${inter.className} font-semibold text-[#00076C] text-center tracking-[-0.14px] text-[16px]`}>
              Verbo: Implicar
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <strong>1. Implicar COM (alguém)</strong> - Com preposição &quot;com&quot;
              <br />
              Significa &quot;irritar-se, aborrecer-se, provocar&quot;.
              <br />
              <em>Exemplo: Ele sempre implica com o irmão mais novo.</em>
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <strong>2. Implicar EM (algo)</strong> - Com preposição &quot;em&quot;
              <br />
              Significa &quot;acarretar, resultar em&quot;.
              <br />
              <em>Exemplo: Essa decisão pode implicar em demissões.</em>
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <strong>3. Implicar (algo)</strong> - Sem preposição (transitivo direto)
              <br />
              Significa &quot;envolver, comprometer&quot;.
              <br />
              <em>Exemplo: As evidências implicaram o suspeito no crime.</em>
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
