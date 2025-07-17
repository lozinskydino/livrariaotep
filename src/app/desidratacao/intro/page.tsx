"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Botao from "../components/Botao";

export default function DesidratacaoIntro() {
  const router = useRouter();

  const handleVoltarClick = () => {
    router.push("/desidratacao");
  };

  const handleAvancarClick = () => {
    router.push("/desidratacao/topicos");
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
      {/* Overlay rosa para dar o tom correto */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(255, 105, 180, 0.3) 0%, rgba(255, 20, 147, 0.4) 100%)",
        }}
      />

      {/* Elementos decorativos - pirulitos */}
      <div className="absolute right-4 z-5">
        <div className="animate-floating">
          <Image src="/assets/images/desidratacao/bombom.png" alt="Pirulito" width={138} height={56} />
        </div>
      </div>

      <div className="absolute right-4 z-5 top-63">
        <div className="animate-floating">
          <Image src="/assets/images/desidratacao/drops.png" alt="Drops" width={138} height={56} />
        </div>
      </div>
      
      <div className="absolute bottom-20 z-5 animate-floating">
        <Image src="/assets/images/desidratacao/pirulito.png" alt="Pirulito" width={104} height={181} />
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center h-full px-10 pt-[40px] pb-10 gap-6 overflow-y-none" style={{ paddingLeft: "50px" }}>
        
        {/* Caixa de conteúdo principal */}
        <div className="w-[313px] bg-[#A03BB1] border-4 border-white rounded-[16px] flex flex-col justify-end items-start gap-4 relative mt-8" style={{ padding: "0px 5px 7px 0px" }}>
          <div className="bg-[#FDC0FF] border-2 border-[#641671] rounded-[16px] z-0 flex-none order-0 w-full" style={{ padding: "14px 10px" }}>
            <div className="w-full flex flex-col items-start gap-4 z-20 relative">
              <p className="text-[#641671] font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-0 self-stretch z-[2]">
                Você sabe como o açúcar é transformado em caramelo? Pode ser que você saiba a resposta culinária, mas e a química? Neste infográfico interativo, vamos desvendar os segredos químicos por trás da caramelização e entender como esse processo pode gerar sobremesas caseiras e até alimentos industrializados.
              </p>
            </div>
          </div>
        </div>

        {/* Spacer para empurrar os botões para baixo */}
        <div className="flex-grow"></div>

        {/* Botões */}
        <div className="absolute max-w-[303px] bottom-[40px] z-10 flex flex-row justify-stretch items-stretch w-full gap-6 mt-auto">
          <div className="flex-1">
            <Botao onClick={handleVoltarClick} label="VOLTAR" variant="azul" height="67px" />
          </div>
          <div className="flex-1">
            <Botao onClick={handleAvancarClick} label="AVANÇAR" variant="verde" height="67px" />
          </div>
        </div>
      </div>
    </div>
  );
}
