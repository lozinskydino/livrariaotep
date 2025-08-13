"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../../../components/Botao";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

const IMG_ANALISES = "/assets/images/acidos/perclorico-analises.png";

export default function PerchloricoAnalises() {
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
              Ciências da Natureza
            </span>
          </div>

          {/* Card */}
          <div className="w-[260px] bg-white rounded-xl p-4 flex flex-col gap-3">
            <div className={`${inter.className} font-semibold text-[#00076C] text-left tracking-[-0.16px] text-[14px]`}>Análises clínicas</div>

            <div className="relative w-full h-[120px] bg-white rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url('${IMG_ANALISES}')` }} />
              <div className="absolute inset-0 rounded-xl border border-neutral-300 pointer-events-none" aria-hidden="true" />
            </div>

            <div className={`${inter.className} font-normal text-[12px] leading-[16px] tracking-[-0.12px] text-neutral-700`}>
              Em análises clínicas, como exames laboratoriais para diagnóstico de inflamações agudas, o ácido perclórico é utilizado para a precipitação de mucoproteínas (proteínas associadas a carboidratos presentes em secreções e fluidos corporais). Ele atua separando componentes específicos das amostras, o que facilita a identificação de alterações no organismo e torna os resultados mais precisos e confiáveis.
            </div>
          </div>

          {/* Voltar */}
          <div className="w-[260px]">
            <Botao
              onClick={() => router.push("/acidos/topicos/perclorico")}
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
