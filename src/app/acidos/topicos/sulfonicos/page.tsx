"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../../components/Botao";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

// Imagens locais dos ácidos sulfônicos (placeholders Figma)
const IMG_ESPUMA = "/assets/images/acidos/sulfonicos/espuma.png";
const IMG_SABOES_DETERGENTES = "/assets/images/acidos/sulfonicos/saboes-detergentes.png";
const IMG_RESINAS = "/assets/images/acidos/sulfonicos/resinas.png";
const IMG_ANTISSEPTICO = "/assets/images/acidos/sulfonicos/antisseptico.png";

export default function AcidosSulfonicosDetalhe() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden flex flex-col justify-start items-center min-h-screen mx-auto">
      {/* Canvas central (mobile-first) */}
      <div className="w-[393px] min-h-screen">
        {/* Background gradiente */}
        <div className="absolute inset-0" aria-hidden>
          <div className="w-full h-full" style={{ background: "linear-gradient(180deg, #00076C 0%, #632885 100%)" }} />
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
              <p className="leading-[21.385px] text-[16px]">Ácidos sulfônicos - HSO3−</p>
            </div>

            {/* Subtítulo */}
            <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>
              Quais as suas aplicações na indústria?
            </div>

            {/* Texto descritivo */}
            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <p>
                Os ácidos sulfônicos são compostos orgânicos derivados do ácido sulfúrico (H
                <span className="align-super text-[9px]">2</span>
                SO
                <span className="align-sub text-[9px]">4</span>), utilizados em setores como os de limpeza, têxtil e plástico. A principal
                aplicação está na produção de sabões e detergentes, devido à alta afinidade por óleos e gorduras e à capacidade de
                formar espuma, essencial em produtos de limpeza. Eles também são usados na fabricação de corantes têxteis, plásticos e
                resinas, mostrando versatilidade em diversas áreas.
              </p>
            </div>

            {/* Bloco — Formação de espuma */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>
                Formação de espuma
              </div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('${IMG_ESPUMA}')` }} />
                <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/sulfonicos/tensoativos")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
             >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <img src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" className="w-6 h-6 group-hover:hidden" />
                <img src="/assets/images/acidos/arrow-right.svg" alt="Ir" className="w-6 h-6 hidden group-hover:inline" />
              </button>
            </div>

            {/* Bloco — Fabricação de sabões e detergentes */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>
                Fabricação de sabões e detergentes
              </div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden">
                <div className="absolute left-[-8px] top-[-20px] w-[247px] h-[165px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_SABOES_DETERGENTES}')` }} />
                <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/sulfonicos/detergentes")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
             >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <img src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" className="w-6 h-6 group-hover:hidden" />
                <img src="/assets/images/acidos/arrow-right.svg" alt="Ir" className="w-6 h-6 hidden group-hover:inline" />
              </button>
            </div>

            {/* Bloco — Fabricação de resinas */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>
                Fabricação de resinas
              </div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden">
                <div className="absolute left-[-8px] top-[-20px] w-[247px] h-[165px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_RESINAS}')` }} />
                <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/sulfonicos/resinas")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
             >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <img src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" className="w-6 h-6 group-hover:hidden" />
                <img src="/assets/images/acidos/arrow-right.svg" alt="Ir" className="w-6 h-6 hidden group-hover:inline" />
              </button>
            </div>

            {/* Bloco — Antisséptico */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>
                Antisséptico
              </div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden">
                <div className="absolute left-[-8px] top-[-20px] w-[247px] h-[165px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_ANTISSEPTICO}')` }} />
                <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/sulfonicos/antisseptico")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
              >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <img src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" className="w-6 h-6 group-hover:hidden" />
                <img src="/assets/images/acidos/arrow-right.svg" alt="Ir" className="w-6 h-6 hidden group-hover:inline" />
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
