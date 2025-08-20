"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../../components/Botao";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

// Imagens baixadas do Figma para as aplicações do ácido perclórico
const IMG_EXPLOSIVOS = "/assets/images/acidos/perclorico-explosivos.png";
const IMG_HERBICIDA = "/assets/images/acidos/perclorico-herbicida.png";
const IMG_ACELERADOR = "/assets/images/acidos/perclorico-acelerador.png";
const IMG_ANALISES = "/assets/images/acidos/perclorico-analises.png";

export default function AcidoPerchloricoDetalhe() {
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
                <span className="text-[16px]">Ácido perclórico - HClO</span>
                <span className="text-[12px] align-super">4</span>
              </p>
            </div>

            {/* Subtítulo */}
            <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>Quais as suas aplicações na indústria?</div>

            {/* Texto descritivo */}
            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              <p>
                A atuação do ácido perclórico na indústria inclui o uso como oxidante de alta eficiência na síntese de explosivos, combustíveis para foguetes e derivados como percloratos e nitratos. Também é aplicado na produção de herbicidas para controle de plantas invasoras, como acelerador de reações químicas e agente desidratante. Além disso, é utilizado na obtenção de medicamentos e em análises clínicas para diagnóstico de inflamações.
              </p>
              <p className="mt-2">Explore como o ácido perclórico é aplicado em diferentes setores de fabricação clicando nas imagens abaixo.</p>
            </div>

            {/* Bloco — Produção de explosivos */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>Produção de explosivos</div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden border border-neutral-300">
                <div className="absolute left-[-8px] top-[-39px] w-[247px] h-[165px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_EXPLOSIVOS}')` }} />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/perclorico/explosivos")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
              >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <Image src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" width={24} height={24} className="group-hover:hidden" />
                <Image src="/assets/images/acidos/arrow-right.svg" alt="Ir" width={24} height={24} className="hidden group-hover:inline" />
              </button>
            </div>

            {/* Bloco — Controle de pragas (herbicida) */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>Controle de pragas (herbicida)</div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden border border-neutral-300">
                <div className="absolute left-[0px] top-[-26px] w-[228px] h-[150px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_HERBICIDA}')` }} />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/perclorico/herbicida")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
              >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <img src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" className="w-6 h-6 group-hover:hidden" />
                <img src="/assets/images/acidos/arrow-right.svg" alt="Ir" className="w-6 h-6 hidden group-hover:inline" />
              </button>
            </div>

            {/* Bloco — Acelerador de reações */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>Acelerador de reações</div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden border border-neutral-300">
                <div className="absolute left-[-4px] top-[-31.32px] w-[237px] h-[160.64px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_ACELERADOR}')` }} />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/perclorico/acelerador")}
                className={`${inter.className} group cursor-pointer w-full h-10 rounded-xl px-6 py-2 bg-[#00076C] text-white flex items-center justify-center gap-1.5 hover:bg-[#C4C8FF] hover:text-[#00076C] hover:shadow-[0px_4px_9.2px_rgba(0,0,0,0.25)] transition-colors duration-200`}
              >
                <span className="font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px]">acessar conteúdo</span>
                <img src="/assets/images/acidos/arrow-right-white.svg" alt="Ir" className="w-6 h-6 group-hover:hidden" />
                <img src="/assets/images/acidos/arrow-right.svg" alt="Ir" className="w-6 h-6 hidden group-hover:inline" />
              </button>
            </div>

            {/* Bloco — Análises clínicas */}
            <div className="flex flex-col gap-2 w-[228px]">
              <div className={`${inter.className} font-semibold text-[12px] tracking-[-0.12px] text-[#00076C]`}>Análises clínicas</div>
              <div className="relative h-[98px] w-full bg-white rounded-xl overflow-hidden border border-neutral-300">
                <div className="absolute left-[-5px] top-[-45px] w-[239px] h-[162px] bg-center bg-cover" style={{ backgroundImage: `url('${IMG_ANALISES}')` }} />
              </div>
              <button
                type="button"
                onClick={() => router.push("/acidos/topicos/perclorico/analises")}
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
