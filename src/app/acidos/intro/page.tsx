"use client";

import { useRouter } from "next/navigation";
import Botao from "../components/Botao";

export default function AcidosIntro() {
  const router = useRouter();

  const handleAvancarClick = () => {
    router.push("/acidos/topicos");
  };

  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen mx-auto">
      {/* Lona central para manter proporção mobile e funcionar em desktop */}
      <div className="w-[393px]">
        {/* Background gradiente em tela cheia */}
        <div className="absolute inset-0" aria-hidden>
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(180deg, #071A7A 0%, #6C2E8E 100%)",
            }}
          />
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 flex flex-col items-center min-h-screen py-8 px-6 w-full">
          {/* Cabeçalho (título superior) */}
          <div className="w-full flex items-center justify-center mb-6">
            <span className="text-white font-nunito font-semibold text-sm tracking-wide">
              Ciências da Natureza
            </span>
          </div>

          {/* Card "Você sabia?" */}
          <div className="w-full flex-1 flex items-start justify-center">
            <div className="w-[260px] bg-white rounded-[16px] shadow-[0px_4px_12px_rgba(0,0,0,0.2)] p-4">
              <h2 className="text-[#071A7A] font-nunito font-extrabold text-[18px] leading-[1.2] mb-2">
                Você sabia?
              </h2>
              <p className="text-[#10235A] font-nunito font-semibold text-[14px] leading-[1.2]">
                Você sabia que ácidos como o ácido acético, presente no vinagre, e o ácido cítrico, encontrado em balas e sucos, também desempenham papéis fundamentais na fabricação de produtos industriais? Esses compostos são utilizados para produzir itens como alimentos processados, produtos de limpeza e até cosméticos. Nesse infográfico interativo, descubra como os ácidos estão presentes em nosso cotidiano e como suas aplicações impactaram diretamente diferentes setores da indústria.
              </p>
            </div>
          </div>

          {/* Botão de avanço */}
          <div className="w-full flex items-center justify-center mt-8 mb-4">
            <div className="w-[260px]">
              <Botao
                onClick={handleAvancarClick}
                label="Conheça os ácidos"
                variant="acidos"
                height="40px"
                iconRightSrc="/assets/images/acidos/arrow-right.svg"
                iconRightAlt="Avançar"
                iconRightSize={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
