"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import BotaoVoltar from "../components/BotaoVoltar";
import BotaoAvancar from "../components/BotaoAvancar";

export default function ForcaMagneticaDetalhes() {
  const router = useRouter();

  const handleVoltarClick = () => {
    router.push("/forca-magnetica");
  };

  const handleAvancarClick = () => {
    router.push("/forca-magnetica/terra");
  };

  return (
    <div className="relative overflow-hidden flex flex-col justify-between items-center w-[393px] min-h-screen mx-auto gap-10 p-10 bg-gradient-to-b from-[#9C59FE] to-[#420C66] pl-[50px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/figma/background-image.png')] bg-cover bg-center bg-no-repeat">
        {/* Overlay com gradiente escuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#420C66]" />
      </div>

      {/* Box de conteúdo */}
      <div className="relative z-10 flex flex-col justify-end items-stretch w-full gap-4 p-4 bg-[#6829A8] border-4 border-white rounded-2xl self-stretch">
        {/* Background interno */}
        <div className="absolute inset-0 bg-[#B169FA] border-2 border-[#641671] rounded-2xl" />

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-row items-stretch gap-4">
          <p className="font-nunito font-semibold text-base leading-[1.2] text-white text-left m-0">
            As luzes que geram imagens fascinantes no céu com um brilho predominantemente verde são das chamadas auroras; elas se formam em regiões próximas aos polos da Terra. Você já parou para pensar por que as auroras se formam somente nos polos e não em todos os lugares do planeta? Imagine como seria se fosse possível contemplarmos aquelas cores no céu onde quer que estivéssemos! Seria um privilégio, não é mesmo?! E o que causa esse brilho intenso tão lindo no céu? Essas perguntas serão respondidas e mais curiosidades serão mostradas no infográfico a seguir.
          </p>
        </div>
      </div>

      {/* Botões */}
      <div className="relative z-10 flex flex-row justify-stretch items-stretch w-full gap-6">
        <BotaoVoltar onClick={handleVoltarClick} />
        <BotaoAvancar onClick={handleAvancarClick} />
      </div>
    </div>
  );
}
