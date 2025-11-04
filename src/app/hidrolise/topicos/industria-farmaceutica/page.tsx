"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import InfoCard from "../../components/InfoCard";
import InfoCardTitle from "../../components/InfoCardTitle";
import InfoCardText from "../../components/InfoCardText";
import Botao from "../../components/Botao";
import ModalHeader from "../../components/ModalHeader";

export default function IndustriaFarmaceuticaPage() {
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
            <InfoCardTitle>Hidrólise da amoxicilina e o impacto ambiental</InfoCardTitle>

            <InfoCardText className="mt-2">
              A amoxicilina, um antibiótico amplamente utilizado no tratamento de infecções bacterianas, pode causar impactos ambientais significativos quando descartada de forma inadequada. Para reduzir sua toxicidade e minimizar a contaminação ambiental, é utilizado o processo de hidrólise, como ilustrado na reação abaixo:
            </InfoCardText>

            {/* Espaço reservado para a imagem/reação (placeholder) */}
            <div className="box-border flex flex-col gap-2 items-center justify-center p-2 rounded-[16px] w-full relative overflow-hidden mb-4">
              <Image
                src="/assets/images/hidrolise/hidrolise.svg"
                alt="Indústria alimentícia"
                width={600}
                height={340}
                className="rounded-[16px] w-full h-full object-cover"
                priority={false}
              />
            </div>

            <InfoCardText className="mt-2">
            Sob condições controladas, como a <b>presença de água e catalisadores básicos</b>, a molécula de amoxicilina é quebrada em dois compostos principais: p-hidroxifenilglicina e ácido 6-aminopenicilânico. Esses produtos são avaliados quanto à sua biodegradabilidade e potencial impacto ambiental.
            </InfoCardText>

            <InfoCardText className="mt-2">
            Esse processo é essencial no tratamento de efluentes industriais e na gestão de resíduos farmacêuticos, uma vez que evita que resíduos de amoxicilina sejam liberados no ambiente. Resíduos não tratados podem favorecer o surgimento de microrganismos super-resistentes e contaminar ecossistemas, representando um risco à saúde pública e ao meio ambiente.
            </InfoCardText>
          </InfoCard>

          {/* Botão Voltar */}
          <Botao onClick={handleVoltar} label="VOLTAR" variant="azul" height="67px" />
        </div>
      </div>
    </div>
  );
}
