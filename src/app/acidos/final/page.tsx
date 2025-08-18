"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Botao from "../components/Botao";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

export default function AcidosFinalPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00076C] to-[#632885] flex flex-col items-center px-7 py-6">
      <div className="w-full max-w-[320px] flex flex-col items-center gap-8 pt-6">
        {/* Título Principal */}
        <h1 className={`${inter.className} font-semibold text-[15.275px] leading-[21.385px] tracking-[-0.1527px] text-white text-center`}>
          Ciências da Natureza
        </h1>

        {/* Card de Finalização */}
        <div className="w-[260px] bg-white rounded-xl p-4 flex flex-col gap-3">
          {/* Título do Card */}
          <h2 className={`${inter.className} font-semibold text-base leading-[21.385px] tracking-[-0.16px] text-[#00076C] text-center`}>
            Finalização
          </h2>

          {/* Texto Principal */}
          <div className={`${inter.className} font-normal text-xs leading-4 tracking-[-0.12px] text-[#00076C] text-left`}>
            Os ácidos desempenham papéis essenciais na indústria, como o ácido bórico, aplicado em cosméticos e produtos oftalmológicos, o ácido crômico, utilizado no revestimento de metais por cromagem, o ácido perclórico, essencial na produção de explosivos e em análises clínicas, e os ácidos sulfônicos, empregados na fabricação de detergentes e corantes têxteis. Esses compostos impactam nossa saúde e o meio ambiente de diferentes maneiras, desde a produção de medicamentos e cosméticos até a fabricação de materiais de limpeza e fertilizantes. Compreender tais aplicações auxilia a identificar possibilidades de atuação profissional, como nas indústrias farmacêutica, alimentícia, química e de biotecnologia. Ter essa compreensão também nos permite refletir sobre os impactos positivos, como a inovação tecnológica, e os negativos, como o descarte inadequado de resíduos químicos, que influenciam as cadeias de produção industrial.
          </div>
        </div>

        {/* Botão Voltar */}
        <div className="w-[260px]">
          <Botao
            onClick={() => router.push("/acidos")}
            label="Reiniciar"
            variant="acidos"
            height="40px"
          />
        </div>
      </div>
    </div>
  );
}
