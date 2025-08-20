"use client";

import { useRouter } from "next/navigation";
import Botao from "../components/Botao";
import Image from "next/image";

export default function EstadosUnidosIntro() {
  const router = useRouter();

  const handleVoltarClick = () => router.push("/estados-unidos");
  const handleAvancarClick = () => router.push("/estados-unidos/topicos");

  return (
    <div className="relative overflow-visible flex flex-col items-center min-h-screen w-full mx-auto">
      {/* Background gradiente full-viewport */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, #C93030 15.258%, #29518F 58.05%, #FFECBA 106.28%)",
          }}
        />
      </div>
      <div className="w-[393px] relative overflow-visible">

        {/* Bandeira USA (sobreposição no topo-esquerda) */}
        <div className="absolute -top-[26px] -left-[31px] w-[216.118px] h-[188.936px] z-20 pointer-events-none" aria-hidden>
          <Image
            src="/assets/images/estados-unidos/bandeira.svg"
            alt="Bandeira dos Estados Unidos"
            width={216}
            height={189}
            className="block max-w-none w-[216.118px] h-[188.936px]"
            priority
          />
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-10 pt-20 pb-10 gap-6">
          {/* Caixa de conteúdo conforme Figma */}
          <div className="w-full relative rounded-2xl bg-[#de6173] p-[16px] mt-6 flex flex-col gap-4 items-start justify-end">
            {/* Borda branca externa (overlay) */}
            <div aria-hidden className="absolute inset-[-4px] border-4 border-white rounded-[20px] pointer-events-none shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)]" />
            {/* Plano de fundo e borda interna deslocados */}
            <div className="absolute bg-[#ffe7e7] bottom-[5.36px] left-0 right-[3.5px] rounded-2xl top-0">
              <div aria-hidden className="absolute inset-0 border-2 border-[#c93030] rounded-2xl pointer-events-none" />
            </div>
            {/* Conteúdo */}
            <div className="relative box-border flex flex-row gap-4 items-start justify-start p-0 w-full leading-none">
              <div className="basis-0 grow min-h-px min-w-px shrink-0 relative">
                <p className="text-[#c93030] font-nunito font-semibold text-[16px] leading-[1.2]">
                  O conceito do “sonho americano” tem suas raízes na fundação dos Estados Unidos e está profundamente ligado aos ideais de liberdade, igualdade e prosperidade. Ele evoluiu ao longo do tempo e assumiu diferentes significados dependendo do contexto histórico e social. Além disso, esteve presente durante a colonização, na Declaração de Independência, e se reinventou no Destino Manifesto, voltando a ganhar força após a Segunda Guerra Mundial. No período de expansão territorial e industrialização, durante o século XIX, foi moldado por diferentes influências econômicas e moldou comportamentos e características sociais. Conheça alguns desses elementos por meio do conteúdo interativo a seguir.
                </p>
              </div>
            </div>
          </div>

          {/* Botões */}
          <div className="flex w-full justify-center">
            <div className="max-w-[303px] z-10 flex flex-row items-stretch w-full gap-6">
              <div className="flex-1">
                <Botao onClick={handleVoltarClick} label="VOLTAR" variant="azul" height="67px" />
              </div>
              <div className="flex-1">
                <Botao onClick={handleAvancarClick} label="AVANÇAR" variant="verde" height="67px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

