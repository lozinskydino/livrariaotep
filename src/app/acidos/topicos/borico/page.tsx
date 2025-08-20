"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../../components/Botao";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

// Figma node: 5:226 assets (mantidos remotos para fidelidade imediata)
const IMG_COSMETICA = "/assets/images/acidos/cosmetica.png";
const IMG_INSETICIDA = "/assets/images/acidos/inseticida-domestico.png";
const IMG_FIBRA = "/assets/images/acidos/fibra-de-vidro.png";
const IMG_ANTISSEPTICO = "/assets/images/acidos/antisseptico.png";

export default function AcidoBoricoDetalhe() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden flex flex-col justify-start items-center min-h-screen mx-auto">
      {/* Canvas central (mobile-first) */}
      <div className="w-[393px] min-h-screen">
        {/* Background gradiente conforme Figma */}
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
              <p className="leading-[21.385px] text-[0px]">
                <span className="text-[16px]">Ácido Bórico - H</span>
                <span className="text-[12px] align-super">3</span>
                <span className="text-[16px]">BO</span>
                <span className="text-[12px] align-super">3</span>
              </p>
            </div>

            {/* Subtítulo */}
            <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>Quais as suas aplicações na indústria?</div>

            {/* Texto descritivo */}
            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <p>
                O ácido bórico pode ser encontrado em uma variedade de produtos e aplicações industriais, como antissépticos,
                inseticidas e como retardantes de chamas. Ele também tem ação bacteriostática e fungicida, ainda que fraca.
                Suas principais funções na indústria estão relacionadas à produção de fibras de vidro e no desenvolvimento de
                vidros de maior resistência, conhecidos como “vidros de borossilicato”.
              </p>
              <p className="mt-2">Confira como o ácido bórico está relacionado a outros exemplos clicando nas imagens abaixo.</p>
            </div>

            {/* Bloco — Indústria cosmética */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>Indústria cosmética</div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden">
                <div className="absolute left-[-8px] top-[-39px] w-[247px] h-[165px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_COSMETICA}')` }} />
                <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/borico/cosmetica")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
              >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <Image src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" width={24} height={24} className="group-hover:hidden" />
                <Image src="/assets/images/acidos/arrow-right.svg" alt="Ir" width={24} height={24} className="hidden group-hover:inline" />
              </button>
            </div>

            {/* Bloco — Inseticida doméstico */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>Inseticida doméstico</div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-center bg-contain bg-no-repeat rotate-[318deg]" style={{ backgroundImage: `url('${IMG_INSETICIDA}')` }} />
                <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/borico/inseticida")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
              >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <Image src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" width={24} height={24} className="group-hover:hidden" />
                <Image src="/assets/images/acidos/arrow-right.svg" alt="Ir" width={24} height={24} className="hidden group-hover:inline" />
              </button>
            </div>

            {/* Bloco — Fabricação de fibra de vidro */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>Fabricação de fibra de vidro</div>
              <div className="relative h-[98px] w-full overflow-hidden rounded-xl">
                <div className="absolute left-[-4px] top-[-31.32px] w-[237px] h-[160.644px] bg-no-repeat bg-[50%_225.79%] [background-size:95.78%_93.27%]" style={{ backgroundImage: `url('${IMG_FIBRA}')` }} />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/borico/fibra")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
              >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <Image src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" width={24} height={24} className="group-hover:hidden" />
                <Image src="/assets/images/acidos/arrow-right.svg" alt="Ir" width={24} height={24} className="hidden group-hover:inline" />
              </button>
            </div>

            {/* Bloco — Antisséptico */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>Antisséptico</div>
              <div className="relative h-[98px] w-full overflow-hidden rounded-xl">
                <div className="absolute left-[-5px] top-[-21px] w-[239px] h-[162px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_ANTISSEPTICO}')` }} />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/borico/antisseptico")}
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
