"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import BotaoAvancar from "./components/BotaoAvancar";

export default function ForcaMagnetica() {
  const router = useRouter();

  const handleIniciarClick = () => {
    router.push("/forca-magnetica/detalhes");
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "393px",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #9C59FE 0%, #420C66 100%)",
        margin: "0 auto",
      }}>
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
      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen"
        style={{
          width: "100%",
          padding: "40px",
          gap: "40px",
        }}>
        {/* Logo completo do Figma */}
        <div className="flex-shrink-0">
          <Image src="/assets/figma/logo-forca-magnetica.png" alt="Logo Força Magnética" width={313} height={313} className="object-contain" />
        </div>

        {/* Botão INICIAR - Unificado */}
        <div className="flex-shrink-0">
          <BotaoAvancar onClick={handleIniciarClick} label="INICIAR" />
        </div>
      </div>
    </div>
  );
}
