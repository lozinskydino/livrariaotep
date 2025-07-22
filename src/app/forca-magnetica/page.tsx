"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Botao from "./components/Botao";

export default function ForcaMagnetica() {
  const router = useRouter();

  const handleIniciarClick = () => {
    router.push("/forca-magnetica/detalhes");
  };

  return (
    <div className="relative overflow-hidden w-full min-h-screen bg-gradient-to-b from-[#9C59FE] to-[#420C66]">
      {/* Background Image com overlay roxo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/assets/figma/background-image.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        {/* Overlay roxo para dar o tom correto */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(156, 89, 254, 0.3) 0%, rgba(66, 12, 102, 0.4) 100%)",
          }}
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-[363px] mx-auto p-10 gap-10 md:gap-16">
        {/* Logo completo do Figma */}
        <div className="flex-shrink-0">
          <Image src="/assets/figma/logo-forca-magnetica.png" alt="Logo Força Magnética" width={313} height={313} className="object-contain md:w-[400px] md:h-[400px]" />
        </div>

        {/* Botão INICIAR - Unificado */}
        <div className="flex-shrink-0">
          <Botao onClick={handleIniciarClick} label="INICIAR" variant="amarelo" />
        </div>
      </div>
    </div>
  );
}
