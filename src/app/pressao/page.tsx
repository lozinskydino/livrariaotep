"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Botao from "./components/Botao";

export default function Pressao() {
  const router = useRouter();

  const handleIniciarClick = () => {
    router.push("/pressao/intro");
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
              background: "linear-gradient(180deg, #278FAC 0%, #858C72 100%)",
            }}
          />
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-10 px-10 w-full">
          <div className="flex-1 w-full flex flex-col items-center justify-center gap-10">
            {/* Logo */}
            <div className="w-full flex items-center justify-center">
              <Image
                src="/assets/images/pressao/logo-pressao.svg"
                alt="Pressão"
                width={361}
                height={272}
                className="w-[361px] h-auto object-contain"
                priority
              />
            </div>

            {/* Botão INICIAR */}
            <div className="w-[127px]">
              <Botao onClick={handleIniciarClick} label="INICIAR" variant="verde" height="67px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
