"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../../../components/Botao";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

const IMG_ESPUMA = "/assets/images/acidos/sulfonicos/espuma.png";

export default function SulfonicosTensoativos() {
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
              Formação de espuma
            </div>

            <div className="relative w-full h-[120px] bg-white rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('${IMG_ESPUMA}')` }} />
              <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              Os ácidos sulfônicos atuam na formação de espuma devido à estrutura química, que permite interagir tanto com gorduras quanto
              com a água. Essa interação reduz a tensão superficial, facilitando a formação de bolhas e garantindo uma espuma estável,
              característica importante em produtos de limpeza e higiene.
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
