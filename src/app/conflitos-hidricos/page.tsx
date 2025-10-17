"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Botao from "./components/Botao";

export default function ConflitosHidricos() {
  const router = useRouter();

  const handleIniciarClick = () => {
    router.push("/conflitos-hidricos/intro");
  };

  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen mx-auto">
      {/* Lona central para manter proporção mobile e funcionar em desktop */}
      <div className="w-[393px]">
        {/* Background gradiente em tela cheia conforme Figma (azul -> transparente sobre branco) */}
        <div className="absolute inset-0" aria-hidden>
          {/* Base branca */}
          <div className="w-full h-full" style={{ background: "#FFFFFF" }} />
          {/* Gradiente superior (180deg, rgba(39,87,151,1) -> rgba(230,245,235,0)) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(39, 87, 151, 1) 0%, rgba(230, 245, 235, 0) 100%)",
            }}
          />
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen py-8 px-6 w-full">
          {/* Bloco central: Logo + Botão */}
          <div className="flex w-full flex-col items-center justify-center gap-6 mt-6 mb-10">
            <Image
              src="/assets/images/conflitos-hidricos/logo.svg"
              alt="Conflitos Hídricos"
              width={365}
              height={392}
              className="w-[365px] h-auto object-contain"
              priority
            />
            <div className="w-[127px]">
              <Botao onClick={handleIniciarClick} label="INICIAR" variant="azul" height="67px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
