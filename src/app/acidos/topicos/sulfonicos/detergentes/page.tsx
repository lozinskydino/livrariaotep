"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../../../components/Botao";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

const IMG_SABOES_DETERGENTES = "/assets/images/acidos/sulfonicos/saboes-detergentes.png";

export default function SulfonicosDetergentes() {
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
              Fabricação de sabões e detergentes
            </div>

            <div className="relative w-full h-[120px] bg-white rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url('${IMG_SABOES_DETERGENTES}')` }} />
              <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              Tratando-se da fabricação de sabões e detergentes, graças à estrutura química dos ácidos sulfônicos, esses compostos têm uma
              parte polar, solúvel em água, e uma parte apolar, que se liga a óleos e gorduras. Essa combinação permite que eles quebrem e
              removam sujeiras oleosas de superfícies e tecidos. Além disso, a capacidade de formar espuma aumenta a eficiência e a percepção de
              limpeza, tornando os ácidos sulfônicos indispensáveis em formulações de produtos de higiene e limpeza.
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
