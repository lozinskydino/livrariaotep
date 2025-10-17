"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Botao from "../components/Botao";

export default function ForcaMagneticaFinal() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVoltarClick = () => {
    router.back();
  };

  const handleAvancarClick = () => {
    router.push("/forca-magnetica");
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #9C59FE 0%, #420C66 100%)",
        }}
      />

      {/* Content container */}
      <div className="flex flex-col items-center h-full w-[363px] mx-auto px-10 pt-[40px] pb-10 gap-3 overflow-y-none md:gap-6" style={{ paddingLeft: "50px" }}>
        {/* Logo */}
        <div className="flex-shrink-0 z-10">
          <Image src="/assets/figma/logo-forca-magnetica.png" alt="Logo Força Magnética" width={313} height={313} className="object-contain max-w-[211px]" />
        </div>

        {/* Content block */}
        <div className="w-[313px] bg-[#6829A8] border-4 border-white rounded-[16px] flex flex-col justify-end items-start gap-4 relative mb-6 md:gap-6" style={{ padding: "0px 5px 7px 0px" }}>
          <div className="bg-[#B169FA] border-2 border-[#641671] rounded-[16px] z-0 flex-none order-0 w-full md:p-8" style={{ padding: "14px 10px" }}>
            <div className="w-full flex flex-col items-start gap-4 z-20 relative">
              <p
                className="text-white font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-2 self-stretch z-[2] md:text-lg md:leading-[1.3]"
                dangerouslySetInnerHTML={{
                  __html: "Parabéns! Você concluiu o estudo sobre força magnética.<br /><br />Agora você compreende como as partículas carregadas do vento solar interagem com o campo magnético terrestre, criando os fenômenos das auroras polares.<br /><br />A força magnética é fundamental para entender diversos fenômenos naturais e aplicações tecnológicas em nosso cotidiano.<br /><br />Continue explorando os mistérios da física!",
                }}
              />
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
          <div className="flex justify-between items-center gap-6 w-full">
          <Botao onClick={handleVoltarClick} label="VOLTAR" variant="azul" />
          <Botao onClick={handleAvancarClick} label="INÍCIO" variant="verde" />
        </div>
      </div>

      {/* Modal */}
    </div>
  );
}
