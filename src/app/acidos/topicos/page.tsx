"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../components/Botao";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

// Figma node: 2:38
// Remote assets exported by MCP (used directly to garantir fidelidade visual imediata)
const IMG_BORICO = "/assets/images/acidos/borico-card.png";
const IMG_CROMICO = "/assets/images/acidos/cromico-card.png";
const IMG_PERCLORICO = "/assets/images/acidos/perclorico-card.png";
const IMG_SULFONICOS = "/assets/images/acidos/sulfonicos-card.png";

export default function AcidosTopicos() {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden flex flex-col justify-start items-center min-h-screen mx-auto">
      {/* Canvas central (mobile-first) */}
      <div className="w-[393px] min-h-screen">
        {/* Background gradiente conforme Figma (2:38) */}
        <div className="absolute inset-0" aria-hidden>
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(180deg, #00076C 0%, #632885 100%)",
            }}
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

          {/* Cards */}
          <div className="flex flex-col gap-6 items-center w-full">
            {/* Card — ÁCIDO BÓRICO */}
            <div className="w-[260px] bg-white rounded-xl p-4 flex flex-col gap-3">
              <div className="w-full flex items-center justify-between gap-2 px-1">
                <div className="text-[#00076C] w-[147px]">
                  <div className={`${inter.className} font-semibold text-[14px] tracking-[-0.14px] leading-[21.385px]`}>ÁCIDO BÓRICO</div>
                  <p className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px]`}>
                    Oxiácido fraco de fórmula <span className="font-bold">H</span>
                    <span className="align-super text-[9px]">3</span>
                    <span className="font-bold">BO</span>
                    <span className="align-super text-[9px]">3</span>, presente e comercializado em solução como água boricada.
                  </p>
                </div>
                <div className="shrink-0 w-[70px] h-20 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('${IMG_BORICO}')` }} />
              </div>

              {/* Button */}
              <Botao
                onClick={() => router.push("/acidos/topicos/borico")}
                label="acessar conteúdo"
                variant="acessar"
                height="40px"
                iconRightSrc="/assets/images/acidos/arrow-right-white.svg"
                iconRightHoverSrc="/assets/images/acidos/arrow-right.svg"
                iconRightAlt="Ir"
                iconRightSize={24}
              />
            </div>

            {/* Card — ÁCIDO CRÔMICO */}
            <div className="w-[260px] bg-white rounded-xl p-4 flex flex-col gap-3">
              <div className="w-full flex items-center justify-between gap-2 px-1">
                <div className="text-[#00076C] w-[147px]">
                  <div className={`${inter.className} font-semibold text-[14px] tracking-[-0.14px] leading-[21.385px]`}>ÁCIDO CRÔMICO</div>
                  <p className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px]`}>
                    Oxiácido fraco de fórmula <span className="font-bold">H</span>
                    <span className="align-super text-[9px]">2</span>
                    <span className="font-bold">CrO</span>
                    <span className="align-super text-[9px]">4</span>, muito utilizado nos processos de cromagem de peças.
                  </p>
                </div>
                <div className="shrink-0 w-[70px] h-[42px] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('${IMG_CROMICO}')` }} />
              </div>

              <Botao
                onClick={() => router.push("/acidos/topicos/cromico")}
                label="acessar conteúdo"
                variant="acessar"
                height="40px"
                iconRightSrc="/assets/images/acidos/arrow-right-white.svg"
                iconRightHoverSrc="/assets/images/acidos/arrow-right.svg"
                iconRightAlt="Ir"
                iconRightSize={24}
              />
            </div>

            {/* Card — ÁCIDO PERCLÓRICO */}
            <div className="w-[260px] bg-white rounded-xl p-4 flex flex-col gap-3">
              <div className="w-full flex items-center justify-between gap-2 px-1">
                <div className="text-[#00076C] w-[147px]">
                  <div className={`${inter.className} font-semibold text-[14px] tracking-[-0.14px] leading-[21.385px]`}>ÁCIDO PERCLÓRICO</div>
                  <p className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px]`}>
                    Oxiácido muito forte de fórmula <span className="font-bold">HClO</span>
                    <span className="align-super text-[9px]">4</span>, muito utilizado como agente oxidante na produção de combustíveis e explosivos.
                  </p>
                </div>
                <div className="shrink-0 w-[73px] h-16 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('${IMG_PERCLORICO}')` }} />
              </div>

              <Botao
                onClick={() => router.push("/acidos/topicos/perclorico")}
                label="acessar conteúdo"
                variant="acessar"
                height="40px"
                iconRightSrc="/assets/images/acidos/arrow-right-white.svg"
                iconRightHoverSrc="/assets/images/acidos/arrow-right.svg"
                iconRightAlt="Ir"
                iconRightSize={24}
              />
            </div>

            {/* Card — ÁCIDOS SULFÔNICOS */}
            <div className="w-[260px] bg-white rounded-xl p-4 flex flex-col gap-3">
              <div className="w-full flex items-center justify-between gap-2 px-1">
                <div className="text-[#00076C] w-[147px] relative h-[114px]">
                  <div className={`${inter.className} font-semibold text-[14px] tracking-[-0.14px] leading-[21.385px] text-center absolute left-1/2 top-[11px] -translate-x-1/2 -translate-y-1/2 w-full`}>
                    ÁCIDOS SULFÔNICOS
                  </div>
                  <p className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] absolute left-0 top-[74px] -translate-y-1/2 w-[147px]`}>
                    Oxiácidos orgânicos que apresentam na molécula o grupo <span className="font-bold">−SO</span>
                    <span className="align-super text-[9px]">3</span>
                    <span className="font-bold">H</span>, muito aplicado na produção de detergentes.
                  </p>
                </div>
                <div className="shrink-0 w-[73px] h-16 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('${IMG_SULFONICOS}')` }} />
              </div>

              <Botao
                onClick={() => router.push("/acidos/topicos/sulfonicos")}
                label="acessar conteúdo"
                variant="acessar"
                height="40px"
                iconRightSrc="/assets/images/acidos/arrow-right-white.svg"
                iconRightHoverSrc="/assets/images/acidos/arrow-right.svg"
                iconRightAlt="Ir"
                iconRightSize={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
