"use client";

import { useRouter } from "next/navigation";
import Botao from "./components/Botao";
import Image from "next/image";

export default function EstadosUnidos() {
  const router = useRouter();

  const handleIniciarClick = () => {
    router.push("/estados-unidos/intro");
  };

  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen mx-auto">
      {/* Lona central para manter proporção mobile e funcionar em desktop */}
      <div className="w-[393px]">
        {/* Background gradiente em tela cheia (vermelho → roxo → azul → bege) */}
        <div className="absolute inset-0" aria-hidden>
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, #D63B34 0%, #8B3E61 34%, #27457C 60%, #BEB9A0 82%, #E8D8A9 100%)",
            }}
          />
          {/* Sutil vinheta para aproximar o contraste do design */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(100% 60% at 50% 40%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 60%)",
            }}
          />
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen py-8 px-6 w-full">

          {/* Bloco central: Logo + Botão mais próximo */}
          <div className="flex w-full flex-col items-center justify-center gap-6 mt-6 mb-10">
            <Image
              src="/assets/images/estados-unidos/logo.svg"
              alt="Os Estados Unidos no século XIX"
              width={310}
              height={233}
              className="w-[310px] h-auto object-contain"
              priority
            />
            <div className="w-[127px]">
              <Botao onClick={handleIniciarClick} label="INICIAR" variant="verde" height="67px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


