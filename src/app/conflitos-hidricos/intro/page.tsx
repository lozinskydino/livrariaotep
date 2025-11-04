"use client";

import { useRouter } from "next/navigation";
import ModalHeader from "../components/ModalHeader";
import InfoCard from "../components/InfoCard";
import InfoCardText from "../components/InfoCardText";
import FooterNavegacao from "../components/FooterNavegacao";

export default function ConflitosHidricosIntro() {
  const router = useRouter();

  const handleVoltar = () => router.back();
  const handleHome = () => router.push("/conflitos-hidricos");
  const handleAvancar = () => router.push("/conflitos-hidricos/topicos");

  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen mx-auto" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Lona central responsiva */}
      <div className="w-full relative min-h-screen flex justify-center">
        {/* Background degradê 100% responsivo (conforme Figma) */}
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

        {/* Conteúdo alinhado ao centro, respeitando padrão mobile/desktop */}
        <div className="relative z-10 w-[393px] px-6 py-8 min-h-screen flex flex-col">
          {/* Header com botões Voltar/Home */}
          <ModalHeader onBack={handleVoltar} onHome={handleHome} />

          {/* Box-content (cores conforme Figma):
              - containerBg: #51618D (fundo externo)
              - innerBg: #DEF3FB (fundo interno)
              - innerBorder: #09163C (borda interna)
              - radius: 16, padding: 16
          */}
          <InfoCard
            containerBg="#51618D"
            innerBg="#DEF3FB"
            innerBorder="#09163C"
            radius={16}
            padding={16}
            className="mt-2"
          >
            <InfoCardText className="whitespace-pre-line">
              {`A água é vital para o corpo humano e outras vidas do planeta. Além disso, é de suma importância para os processos produtivos, como atividades agrícolas e industriais e geração de energia.

Você sabia que a água é usada em guerras como um alvo estratégico há séculos? E que o acesso diário da população pode gerar conflitos? Por que isso acontece se o acesso à água potável faz parte dos direitos humanos e é um dos Objetivos de Desenvolvimento Sustentável da Organização das Nações Unidas?

Explore no planisfério alguns dos mais de mil e seiscentos conflitos relacionados à água, em diferentes escalas — locais e globais — para compreender a importância desse recurso essencial.`}
            </InfoCardText>
          </InfoCard>

          {/* Footer com botões Voltar/Avançar */}
          <FooterNavegacao onVoltar={handleVoltar} onAvancar={handleAvancar} className="mt-6" />
        </div>
      </div>
    </div>
  );
}
