"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import InfoCard from "../components/InfoCard";
import InfoCardText from "../components/InfoCardText";
import Botao from "../components/Botao";

export default function BaciasHidrograficasFinalPage() {
  const router = useRouter();

  const handleVoltar = () => {
    router.push("/bacias-hidrograficas/topicos");
  };

  const handleInicio = () => {
    router.push("/bacias-hidrograficas");
  };

  return (
    <div
      className="relative flex justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #FFFFFF 0%, #CCDDA3 100%)",
      }}
    >
      <div className="relative w-[393px] lg:w-[500px] flex flex-col items-center px-8 py-10 min-h-screen">
        {/* Logo do tema */}
        <div className="mt-4 mb-8 flex justify-center w-full">
          <div className="relative w-[213px] h-[230px]">
            <Image
              src="/assets/images/bacias-hidrograficas/logo-tema-bacias.svg"
              alt="Ilustração temática das principais bacias hidrográficas mundiais"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Card de conteúdo */}
        <div className="flex-1 flex flex-col justify-start w-full">
          <InfoCard
            containerBg="#598D10"
            innerBg="#EAFBDE"
            innerBorder="#233C09"
            className="!mt-0"
          >
            <div className="flex flex-col gap-4">
              <InfoCardText className="!text-[#233C09]">
                O volume de recursos hídricos disponibilizados para abastecer a
                população de bairros, municípios, países ou regiões não é
                equilibrado, ou seja, nem todos têm acesso à água potável da
                mesma maneira. Muitas pessoas que têm fácil acesso à água
                dificilmente pensam que nem todas as casas do mundo possuem uma
                torneira que, ao ser aberta, despejará a água de que precisam.
              </InfoCardText>
              <InfoCardText className="!text-[#233C09] mb-0">
                Entretanto, a existência de extensas bacias hidrográficas não
                garante às diversas regiões o abastecimento de água para toda a
                população mundial, havendo a necessidade de pensar em
                alternativas e ações que podem ajudar a minimizar os impactos da
                falta de água para as populações. Entre as alternativas, é
                possível citar: medidas de conservação de água, como instalação
                de dispositivos de economia de água em residências e empresas;
                reutilização de água para fins não potáveis, como para a
                limpeza; coleta de água da chuva para uso em residências e
                empresas; desenvolvimento de fontes alternativas de água, como
                água dessalinizada; educação e conscientização a respeito da
                importância da conservação de água e dos impactos da falta de
                água para as pessoas; práticas individuais de redução do
                consumo de água, como tomar banhos mais curtos e fechar a
                torneira enquanto escova os dentes; entre outras ações. Por
                outro lado, é fundamental garantir o investimento e a
                intervenção das prefeituras e dos governos em parcerias com
                empresas e a população para enfrentar e resolver esse desafio.
              </InfoCardText>
            </div>
          </InfoCard>
        </div>

        {/* Botões finais */}
        <div className="w-full mt-8 flex gap-6">
          <div className="flex-1">
            <Botao onClick={handleVoltar} label="VOLTAR" variant="azul" height="67px" />
          </div>
          <div className="flex-1">
            <Botao onClick={handleInicio} label="INÍCIO" variant="verde" height="67px" />
          </div>
        </div>
      </div>
    </div>
  );
}
