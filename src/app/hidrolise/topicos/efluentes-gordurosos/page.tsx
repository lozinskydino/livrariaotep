"use client";

import { useRouter } from "next/navigation";
import InfoCard from "../../components/InfoCard";
import InfoCardTitle from "../../components/InfoCardTitle";
import InfoCardText from "../../components/InfoCardText";
import Botao from "../../components/Botao";
import ModalHeader from "../../components/ModalHeader";

export default function EfluentesGordurososPage() {
  const router = useRouter();
  const handleVoltar = () => router.back();
  const handleAvancar = () => router.back();
  const handleHome = () => router.push("/hidrolise");

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen mx-auto"
      style={{ backgroundColor: "#f4efdf" }}
    >
      {/* Lona central responsiva */}
      <div className="w-full relative min-h-screen flex justify-center">
        {/* Background decorativo */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-full"
            style={{
              backgroundImage: "url('/assets/images/hidrolise/bg-pattern.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
            aria-hidden
          />
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 w-full max-w-[909px] min-h-screen px-6 py-10 flex flex-col gap-6">
          <ModalHeader onBack={handleVoltar} onHome={handleHome} bgColor="#F4EFDF" />

          <InfoCard containerBg="#646363" innerBg="#d7e8f0" innerBorder="#343434" radius={16} padding={16}>
            <InfoCardTitle>Hidrólise alcalina de efluentes gordurosos</InfoCardTitle>

            <InfoCardText className="mt-2">
              Nas estações de tratamento de esgoto, um dos desafios enfrentados é a presença de óleos e gorduras provenientes de efluentes domésticos e industriais. Esses resíduos, quando descartados sem tratamento, podem causar entupimentos em tubulações e formar camadas de gordura em corpos-d’água, prejudicando a vida aquática e a qualidade da água.
            </InfoCardText>

            <InfoCardText className="mt-2">
              Para solucionar esse problema, utiliza-se a <b>hidrólise alcalina</b>, que promove a decomposição de gorduras em produtos menos prejudiciais ao ambiente. Sob a ação de uma <b>base forte</b>, como hidróxido de sódio (NaOH), as gorduras são convertidas em <b>sabões</b> e <b>glicerol</b>, ambos biodegradáveis:
            </InfoCardText>

            {/* Equação/stack textual */}
            <div className="w-full rounded-[16px] bg-[#cfe3ed] p-4 text-center text-[#343434] font-semibold mb-4">
              Triglicerídeo (gordura) + NaOH → Sabão + Glicerol
            </div>

            <InfoCardText className="mt-2">
              Esse processo não apenas facilita o tratamento dos efluentes, mas também contribui para a redução da carga de resíduos tóxicos descartados nos sistemas hídricos. Após essa etapa, as estações de tratamento de esgoto realizam outros processos, como filtração e decantação, para garantir que a água tratada possa ser devolvida ao meio ambiente de forma segura.
            </InfoCardText>

            {/* Espaço de mídia (foto/vídeo) */}
            <div className="relative overflow-hidden flex items-center justify-center py-6">
              <iframe className="w-full h-[280px]" src="https://player.vimeo.com/video/1126188744?h=9dc4f48752&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="GettyImages-1826534773"></iframe>
              
            </div>
          </InfoCard>

          {/* Botão Voltar */}
          <Botao onClick={handleVoltar} label="VOLTAR" variant="azul" height="67px" />
        </div>
      </div>
    </div>
  );
}
