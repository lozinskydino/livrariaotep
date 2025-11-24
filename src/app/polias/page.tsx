"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Botao from "./components/Botao";

export default function Polias() {
  const router = useRouter();

  const handleIniciarClick = () => {
    router.push("/polias/intro");
  };

  return (
    <div className="relative flex min-h-screen justify-center overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[8px] rounded-md z-10"
        style={{
          top: "86px",
          bottom: "66px",
          transform: "translateX(calc(-50% - 52px))",
          backgroundColor: "#F6A13A",
          backgroundImage: "url('/assets/images/polias/string-piece.svg')",
          backgroundSize: "5px 8px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[8px] rounded-md z-10"
        style={{
          top: "86px",
          bottom: "66px",
          transform: "translateX(calc(-50% + 52px))",
          backgroundColor: "#F6A13A",
          backgroundImage: "url('/assets/images/polias/string-piece.svg')",
          backgroundSize: "5px 8px",
        }}
        aria-hidden
      />

      <div className="absolute inset-0 z-0" aria-hidden>
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(180deg, #1B1B1B 0%, #050505 100%)",
          }}
        />
      </div>

      <div className="relative z-20 flex w-full max-w-[430px] justify-center px-6 py-16 md:px-10">
        <div className="pointer-events-none select-none" aria-hidden>
          <Image
            src="/assets/images/polias/polia-topo.svg"
            alt=""
            width={115}
            height={322}
            priority
            className="absolute left-1/2 -translate-x-1/2 top-0"
          />
        </div>

        <div className="pointer-events-none select-none" aria-hidden>
          <Image
            src="/assets/images/polias/polia-bottom.svg"
            alt=""
            width={115}
            height={322}
            className="absolute left-1/2 -translate-x-1/2 bottom-0"
          />
        </div>

        {/* Correia central com conteúdo */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "clamp(120px, 20vh, 200px)",
            bottom: "clamp(120px, 20vh, 200px)",
            width: "min(75%, 240px)",
          }}
        >
          <div className="relative flex h-full flex-col items-center justify-center gap-10 px-6">
            <Image
              src="/assets/images/polias/logo.svg"
              alt="Polias e Situações de Equilíbrio"
              width={320}
              height={160}
              className="w-full max-w-[300px] object-contain"
              priority
            />

            <div className="w-full max-w-[176px]">
              <Botao
                onClick={handleIniciarClick}
                label="INICIAR"
                variant="polias"
                height="56px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
