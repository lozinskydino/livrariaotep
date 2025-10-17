"use client";

import { useRouter } from "next/navigation";
import InfoCard from "../components/InfoCard";
import Image from "next/image";
import FooterNavegacao from "../components/FooterNavegacao";

export default function ConflitosHidricosFinal() {
  const router = useRouter();

  const handleVoltar = () => router.push("/conflitos-hidricos/topicos");
  const handleHome = () => router.push("/conflitos-hidricos");

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-[#275797] to-[#FFFFFF] pt-20 pb-10 px-10">
      {/* Logo com imagem */}
      <div className="mb-8">
        <Image
          src="/assets/images/conflitos-hidricos/logo.svg"
          alt="Conflitos Hídricos"
          width={280}
          height={300}
          className="w-[280px] h-auto object-contain"
        />
      </div>

      {/* InfoCard com conteúdo */}
      <div className="w-full max-w-[313px] mb-8">
        <InfoCard
          containerBg="#51618D"
          innerBg="#DEF3FB"
          innerBorder="#09163C"
        >
          <div className="flex flex-col gap-4">
            <p className="text-[#09163C] text-[16px] leading-[1.2] font-semibold font-nunito">
              Não esqueçamos que a água está diretamente ligada ao saneamento
              básico, ou seja, ao acesso e à necessidade de água, que são
              fatores primordiais para a existência e manutenção da vida. Ao
              cortar o acesso desse recurso em conflitos ou por uma questão
              climática, a vida fica fragilizada, o que gera situações de
              violência em micro e macro escala, como foi possível compreender
              ao explorar o mapa interativo.
            </p>
          </div>
        </InfoCard>
      </div>

      {/* Footer Navegação */}
      <FooterNavegacao
        onVoltar={handleVoltar}
        onAvancar={handleHome}
        className="w-full"
      />
    </div>
  );
}
