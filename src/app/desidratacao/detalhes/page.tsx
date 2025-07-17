"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Botao from "../components/Botao";

export default function DesidratacaoDetalhes() {
  const router = useRouter();

  const handleVoltarClick = () => {
    router.push("/desidratacao");
  };

  const handleAvancarClick = () => {
    // Você pode ajustar a rota de destino conforme necessário
    router.push("/desidratacao/proxima-etapa");
  };

  return (
    <div className="relative overflow-hidden flex flex-col justify-between items-center w-[393px] min-h-screen mx-auto gap-10 p-10 bg-gradient-to-b from-[#FF69B4] to-[#FF1493] pl-[50px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/figma/background-image.png')] bg-cover bg-center bg-no-repeat">
        {/* Overlay com gradiente rosa */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF1493]" />
      </div>

      {/* Box de conteúdo */}
      <div className="relative z-10 flex flex-col justify-end items-stretch w-full gap-4 p-4 bg-[#FF69B4] border-4 border-white rounded-2xl self-stretch">
        {/* Background interno */}
        <div className="absolute inset-0 bg-[#FFB6C1] border-2 border-[#FF1493] rounded-2xl" />

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-row items-stretch gap-4">
          <p className="font-nunito font-semibold text-base leading-[1.2] text-white text-left m-0">
            As reações de desidratação são processos químicos fundamentais onde moléculas de água são removidas de compostos orgânicos, resultando na formação de ligações duplas ou triplas. Esses processos são essenciais em diversas áreas da química, desde a síntese de alcenos a partir de álcoois até a formação de ésteres e outros compostos importantes. Compreender os mecanismos dessas reações é crucial para entender como as moléculas se transformam e como podemos controlar essas transformações em laboratório e na indústria.
          </p>
        </div>
      </div>

      {/* Botões */}
      <div className="relative z-10 flex flex-row justify-stretch items-stretch w-full gap-6">
        <Botao onClick={handleVoltarClick} label="VOLTAR" variant="azul" />
        <Botao onClick={handleAvancarClick} label="AVANÇAR" variant="verde" />
      </div>
    </div>
  );
}
