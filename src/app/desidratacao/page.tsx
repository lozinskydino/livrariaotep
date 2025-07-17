"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Botao from "./components/Botao";

export default function Desidratacao() {
  const router = useRouter();

  const handleIniciarClick = () => {
    router.push("/desidratacao/intro");
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "393px",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #FF69B4 0%, #FF1493 100%)",
        margin: "0 auto",
      }}>
      {/* Background Image com overlay rosa */}
      <div
        className="absolute inset-0">
        {/* Overlay rosa para dar o tom correto */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(255, 105, 180, 0.3) 0%, rgba(255, 20, 147, 0.4) 100%)",
          }}
        />
      </div>

      {/* Elementos decorativos - pirulitos */}
      <div className="absolute right-4 z-5">
        <div className="animate-floating">
          <Image src="/assets/images/desidratacao/bombom.png" alt="Pirulito" width={138} height={56} />
        </div>
      </div>
      
      <div className="absolute bottom-20 z-5 animate-floating">
        <Image src="/assets/images/desidratacao/pirulito.png" alt="Pirulito" width={104} height={181} />
      </div>

      {/* Conteúdo principal */}
      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen p-[40px] w-full"
        >
        {/* Círculo principal com conteúdo */}
        <div className="flex-shrink-0 relative">
          <div 
            className="rounded-full flex flex-col items-center justify-center p-8 pb-0"
          >
            <Image src="/assets/images/desidratacao/logo.png" alt="Logo Desidratação" width={356} height={268} className="object-contain max-w-[356px] max-h-[268px]" />
            
          </div>
        </div>

        {/* Botão INICIAR */}
        <div className="flex-shrink-0 w-[127px]">
          <Botao onClick={handleIniciarClick} label="INICIAR" variant="amarelo" height="67px" />
        </div>
      </div>
    </div>
  );
}
