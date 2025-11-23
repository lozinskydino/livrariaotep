"use client";

import { useRouter } from "next/navigation";
import InfoCard from "../components/InfoCard";
import InfoCardText from "../components/InfoCardText";
import FooterNavegacao from "../components/FooterNavegacao";

export default function IntroPage() {
  const router = useRouter();

  const handleVoltar = () => {
    router.back();
  };

  const handleAvancar = () => {
    router.push("/bacias-hidrograficas/topicos");
  };

  return (
    <div
      className="relative flex justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #FFFFFF 0%, #CCDDA3 100%)",
      }}
    >
      <div className="relative w-[393px] lg:w-[500px] flex flex-col items-center justify-center px-8 py-10 min-h-screen">
        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-col justify-center w-full">
          <InfoCard
            containerBg="#598D10"
            innerBg="#EAFBDE"
            innerBorder="#233C09"
            className="!mt-0"
          >
            <div className="flex flex-col gap-4">
              <InfoCardText className="!text-[#233C09]">
                Este mapa interativo mostra algumas das mais importantes bacias hidrográficas distribuídas em todos os continentes. Aqui estão representadas as bacias e seus respectivos rios, que desempenham um papel fundamental na vida das comunidades locais, tanto no aspecto social, como no econômico, fornecendo água, alimentos, energia e oportunidades de lazer e turismo, moldando diretamente sua importância histórica. Para compreender esse assunto, não podemos deixar de pensar na água como um recurso natural, no contexto global, o qual todos têm necessidade de consumir e que influencia principalmente as mudanças climáticas.
              </InfoCardText>
              <InfoCardText className="!text-[#233C09]">
                Qual é a bacia hidrográfica que drena a região onde você mora? Qual é a área dessa bacia? Quais são seus rios? E o que você sabe sobre eles?
              </InfoCardText>
              <InfoCardText className="!text-[#233C09]">
                Será que o volume de recursos hídricos disponibilizados é bem distribuído e abastece suficientemente a população dos países drenados por essas bacias hidrográficas?
              </InfoCardText>
              <InfoCardText className="!text-[#233C09] mb-0">
                Vamos conhecer algumas das características dessas bacias, principalmente os seus rios principais.
              </InfoCardText>
            </div>
          </InfoCard>
        </div>

        {/* Footer de navegação */}
        <div className="w-full mt-8">
          <FooterNavegacao
            onVoltar={handleVoltar}
            onAvancar={handleAvancar}
            labelVoltar="VOLTAR"
            labelAvancar="AVANÇAR"
          />
        </div>
      </div>
    </div>
  );
}
