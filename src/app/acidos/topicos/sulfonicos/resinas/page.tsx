"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../../../components/Botao";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

const IMG_RESINAS = "/assets/images/acidos/sulfonicos/resinas.png";

export default function SulfonicosResinas() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden flex flex-col justify-start items-center min-h-screen mx-auto">
      <div className="w-[393px] min-h-screen">
        <div className="absolute inset-0" aria-hidden>
          <div className="w-full h-full" style={{ background: "linear-gradient(180deg, #00076C 0%, #632885 100%)" }} />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 p-6 pt-6 w-full">
          <div className="w-full flex items-center justify-center">
            <span className={`${inter.className} font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px] text-white`}>
              Ciências da Natureza
            </span>
          </div>

          <div className="w-[260px] bg-white rounded-xl p-4 flex flex-col gap-3">
            <div className={`${inter.className} font-semibold text-[#00076C] text-left tracking-[-0.14px] text-[14px]`}>
              Fabricação de resinas
            </div>

            <div className="relative w-full h-[120px] bg-white rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url('${IMG_RESINAS}')` }} />
              <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              Os ácidos sulfônicos são amplamente utilizados na fabricação de resinas e plásticos devido às propriedades como agentes químicos
              que melhoram a reatividade e a estabilidade das formulações. Durante o processo de síntese, eles atuam como aceleradores e
              intermediários de reações químicas, facilitando a produção de materiais com maior resistência, durabilidade e flexibilidade.
              Essa aplicação é essencial na criação de plásticos de alta performance e resinas utilizadas em produtos como miçangas para
              pulseiras, etiquetas adesivas e revestimentos decorativos.
            </div>
          </div>

          <div className="w-[260px]">
            <Botao
              onClick={() => router.back()}
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
