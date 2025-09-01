"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../../components/Botao";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

// Imagens baixadas do Figma para o ácido crômico
const IMG_AUTOMOTIVA = "/assets/images/acidos/cromico-automotiva.png";
const IMG_COURO = "/assets/images/acidos/cromico-couro-2.png";
const IMG_VIDROS = "/assets/images/acidos/cromico-vidros.png";
const IMG_CERAMICA = "/assets/images/acidos/cromico-ceramica.png";

export default function AcidoCromicoDetalhe() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden flex flex-col justify-start items-center min-h-screen mx-auto">
      {/* Canvas central (mobile-first) */}
      <div className="w-[393px] min-h-screen">
        {/* Background gradiente conforme padrão */}
        <div className="absolute inset-0" aria-hidden>
          <div
            className="w-full h-full"
            style={{ background: "linear-gradient(180deg, #00076C 0%, #632885 100%)" }}
          />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center gap-6 p-6 pt-6 w-full">
          {/* Título */}
          <div className="w-full flex items-center justify-center">
            <span className={`${inter.className} font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px] text-white`}>
              Ciências da Natureza
            </span>
          </div>

          {/* Card principal */}
          <div className="w-[260px] bg-white rounded-xl p-4 flex flex-col gap-3">
            {/* Cabeçalho card */}
            <div className={`${inter.className} font-semibold text-[#00076C] text-center tracking-[-0.16px]`}>
              <p className="leading-[21.385px]">
                <span className="text-[16px]">Ácido Crômico - H</span>
                <span className="text-[12px] align-sub">2</span>
                <span className="text-[16px]">CrO</span>
                <span className="text-[12px] align-sub">4</span>
              </p>
            </div>

            {/* Subtítulo */}
            <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>
              Quais as suas aplicações na indústria?
            </div>

            {/* Texto descritivo */}
            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <p>
                O ácido crômico é o componente principal do processo de cromagem, que consiste em revestir
                metais com uma fina camada de cromo para obter acabamentos de alto brilho, durabilidade e
                resistência à corrosão. Também é empregado na fabricação de cerâmicas, na produção de vidros
                coloridos, na limpeza de materiais de laboratório e na indústria de impressão, fotografia e curtume.
              </p>
              <p className="mt-2">
                É ainda utilizado na fabricação de dicromatos e trióxido de cromo, importantes agentes de oxidação.
                Descubra como o ácido crômico está envolvido em diferentes processos clicando nas imagens abaixo.
              </p>
            </div>

            {/* Bloco — Indústria automotiva */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>
                Indústria automotiva
              </div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden">
                <div className="absolute left-[-8px] top-[-20px] w-[247px] h-[165px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_AUTOMOTIVA}')` }} />
                <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/cromico/automotiva")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
              >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <Image src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" width={24} height={24} className="group-hover:hidden" />
                <Image src="/assets/images/acidos/arrow-right.svg" alt="Ir" width={24} height={24} className="hidden group-hover:inline" />
              </button>
            </div>

            {/* Bloco — Fábrica de produção de couro */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>
                Fábrica de produção de couro
              </div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden">
                <div className="absolute left-[-8px] top-[-20px] w-[247px] h-[165px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_COURO}')` }} />
                <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/cromico/couro")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
              >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <Image src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" width={24} height={24} className="group-hover:hidden" />
                <Image src="/assets/images/acidos/arrow-right.svg" alt="Ir" width={24} height={24} className="hidden group-hover:inline" />
              </button>
            </div>

            {/* Bloco — Vidros coloridos */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>
                Vidros coloridos
              </div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden">
                <div className="absolute left-[-8px] top-[-20px] w-[247px] h-[165px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_VIDROS}')` }} />
                <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/cromico/vidros")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
              >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <Image src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" width={24} height={24} className="group-hover:hidden" />
                <Image src="/assets/images/acidos/arrow-right.svg" alt="Ir" width={24} height={24} className="hidden group-hover:inline" />
              </button>
            </div>

            {/* Bloco — Produção de cerâmica */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>
                Produção de cerâmica
              </div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden">
                <div className="absolute left-[-8px] top-[-20px] w-[247px] h-[165px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_CERAMICA}')` }} />
                <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/cromico/ceramica")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
              >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <Image src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" width={24} height={24} className="group-hover:hidden" />
                <Image src="/assets/images/acidos/arrow-right.svg" alt="Ir" width={24} height={24} className="hidden group-hover:inline" />
              </button>
            </div>
          </div>

          {/* Botão Voltar */}
          <div className="w-[260px]">
            <Botao
              onClick={() => router.push("/acidos/topicos")}
              label="Voltar"
              variant="acidos"
              height="40px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
