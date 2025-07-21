"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Botao from "./components/Botao";

export default function Artropodes() {
  const router = useRouter();

  const handleIniciarClick = () => {
    router.push("/artropodes/intro");
  };

  return (
    <div className="relative overflow-hidden w-[393px] min-h-screen mx-auto">
      
      {/* Background com paisagem */}
      <div className="absolute inset-0">
        <Image 
          src="/assets/images/artropodes/bg.svg" 
          alt="Background Artrópodes" 
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-[40px] w-full">
        
        {/* Título integrado ao background */}
        <div className="flex-shrink-0 relative mb-8">
          <Image
            src="/assets/images/artropodes/logo.svg"
            alt="Logo Artrópodes"
            width={310}
            height={233}
            className="object-contain"
          />
        </div>

        {/* Botão INICIAR */}
        <div className="flex-shrink-0 w-[127px]">
          <Botao onClick={handleIniciarClick} label="INICIAR" variant="amarelo" height="67px" />
        </div>
      </div>
    </div>
  );
}
