"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Botao from "./components/Botao";

export default function BaciasHidrograficasPage() {
  const router = useRouter();

  const handleIniciarClick = () => {
    router.push("/bacias-hidrograficas/intro");
  };

  return (
    <div
      className="relative flex justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #FFFFFF 0%, #CCDDA3 100%)",
      }}
    >
      <div className="relative w-[393px] lg:w-[500px] flex flex-col items-center justify-center px-8 py-10">
        {/* Cartela principal */}
        <div className="relative flex flex-col items-center justify-center gap-6 w-full">
          <div className="relative w-full max-w-[365px] aspect-square">
            <Image
              src="/assets/images/bacias-hidrograficas/logo-tema-bacias.svg"
              alt="Mapa destacando as principais bacias hidrográficas mundiais"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Botão iniciar */}
        <div className="mt-10 w-[127px]">
          <Botao onClick={handleIniciarClick} label="INICIAR" variant="azul" height="67px" />
        </div>
      </div>
    </div>
  );
}
