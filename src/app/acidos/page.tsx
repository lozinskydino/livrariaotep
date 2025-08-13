"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Botao from "./components/Botao";

export default function Acidos() {
  const router = useRouter();

  const handleIniciarClick = () => {
    router.push("/acidos/intro");
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
              background: "linear-gradient(180deg, #071A7A 0%, #6C2E8E 100%)",
            }}
          />
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 flex flex-col items-center justify-between min-h-screen py-8 px-6 w-full">
          {/* Cabeçalho (título superior) */}
          <div className="w-full flex items-center justify-center mb-6">
            <span className="text-white font-nunito font-semibold text-sm tracking-wide">
              Ciências da Natureza
            </span>
          </div>

          {/* Letreiro principal */}
          <div className="flex-1 w-full flex items-center justify-center">
            <Image
              src="/assets/images/acidos/acidos-logo.svg"
              alt="Onde usamos ácidos na indústria?"
              width={310}
              height={420}
              className="object-contain"
              priority
            />
          </div>

          {/* Botão INICIAR */}
          <div className="w-[260px] mb-4">
            <Botao
              onClick={handleIniciarClick}
              label="Iniciar"
              variant="acidos"
              height="40px"
              iconRightSrc="/assets/images/acidos/arrow-right.svg"
              iconRightAlt="Avançar"
              iconRightSize={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
