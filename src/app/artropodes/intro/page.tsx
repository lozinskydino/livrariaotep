"use client";

import { useRouter } from "next/navigation";
import Botao from "../components/Botao";

export default function ArtropodesIntro() {
  const router = useRouter();

  const handleVoltarClick = () => {
    router.push("/artropodes");
  };

  const handleAvancarClick = () => {
    router.push("/artropodes/topicos");
  };

  return (
    <div className="relative overflow-hidden h-screen w-[393px] mx-auto bg-[url('/assets/images/artropodes/bg.png')] bg-cover bg-center bg-no-repeat">
      {/* Conteúdo principal */}
      <div className="flex justify-center w-full mt-[80px] m-w-[315px]">
        {/* Content block */}
        <div className="w-[313px] bg-[#41AA98] border-4 border-white rounded-[16px] flex flex-col justify-end items-start gap-4 relative pt-0 pr-[5px] pb-[7px] pl-0">
          <div className="bg-[#EBF3EE] border-2 border-[#1C4F46] rounded-[16px] z-0 flex-none order-0 w-full p-[14px_10px]">
            <div className="w-full flex flex-col items-start gap-4 z-20 relative">
              {/* Main description */}
              <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-0 self-stretch z-[2]">
                Você já comeu camarão, lagosta, caranguejo ou siri? Sabia que eles estão no mesmo grupo de animais como aranhas, escorpiões, mosquitos, pulgas e centopeias? Quais características eles têm em comum para pertencerem ao mesmo grupo de invertebrados? Você sabia que estrelas-do-mar são capazes de regenerar partes do corpo perdidas? Este infográfico o ajudará a compreender melhor a temática que envolve dois grupos de invertebrados, artrópodes e equinodermos, aos quais pertencem os animais citados anteriormente.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="absolute w-full bottom-8 m-w-[313px] flex justify-center gap-4 z-20">
        <div className="">
          <Botao onClick={handleVoltarClick} label="VOLTAR" variant="azul" height="67px" />
        </div>

        <div className="">
          <Botao onClick={handleAvancarClick} label="AVANÇAR" variant="verde" height="67px" />
        </div>
      </div>
    </div>
  );
}
