"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import InfoCard from "../../components/InfoCard";
import InfoCardTitle from "../../components/InfoCardTitle";
import InfoCardText from "../../components/InfoCardText";
import Botao from "../../components/Botao";
import ModalHeader from "../../components/ModalHeader";

export default function IndustriaAlimenticiaPage() {
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
        {/* Background decorativo com os mesmos elementos da seção */}
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
          <ModalHeader onBack={handleVoltar} onHome={handleHome} bgColor="#F4EFDF"/>
          <InfoCard containerBg="#646363" innerBg="#d7e8f0" innerBorder="#343434" radius={16} padding={16}>
            <InfoCardTitle>Hidrólise ácida de glicosídeos flavonoides</InfoCardTitle>
            <InfoCardText className="mt-2">
              Muitos flavonoides das plantas estão presentes na forma de <b>glicosídeos</b>, ou seja, ligados a moléculas de açúcar. Para liberar a forma ativa do flavonoide (aglicona), utiliza-se a <b>hidrólise ácida</b>.
            </InfoCardText>
            <InfoCardText className="mt-2">
              Um exemplo comum é a hidrólise do <b>rutinosídeo</b>, um glicosídeo do flavonoide <b>quercetina</b>:
            </InfoCardText>

            {/* Espaço reservado para a imagem/reação (placeholder) */}
            <div className="box-border flex flex-col gap-2 items-center justify-center p-2 rounded-[16px] w-full relative overflow-hidden mb-4">
              <Image
                src="/assets/images/hidrolise/hidrolise2.svg"
                alt="Indústria alimentícia"
                width={600}
                height={340}
                className="rounded-[16px] w-full h-full object-cover"
                priority={false}
              />
            </div>

            <InfoCardText className="mt-2">
              Sob ação de um ácido (como ácido clorídrico, HC, diluído) e aquecimento, o açúcar (rutina) é separado da molécula de quercetina.
              O resultado é a liberação da <b>quercetina livre</b>, que possui maior atividade biológica e é mais facilmente absorvida pelo organismo.
            </InfoCardText>
            <InfoCardText className="mt-2">
              Essa técnica é amplamente utilizada na indústria farmacêutica e alimentícia para obter flavonoides puros com propriedades antioxidantes e anti-inflamatórias.
            </InfoCardText>
          </InfoCard>

          {/* Botão Voltar */}
          <Botao onClick={handleVoltar} label="VOLTAR" variant="azul" height="67px" />
        </div>
      </div>
    </div>
  );
}
