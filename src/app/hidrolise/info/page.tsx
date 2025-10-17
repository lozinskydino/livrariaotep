"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Botao from "../components/Botao";
import FooterNavegacao from "../components/FooterNavegacao";
import InfoCard from "../components/InfoCard";

export default function HidroliseInfo() {
  const router = useRouter();

  const handleVoltar = () => router.back();
  const handleAvancar = () => router.push("/hidrolise/topicos");

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen mx-auto"
      style={{ backgroundColor: "#f4efdf" }}
    >
      {/* Lona central responsiva */}
      <div className="w-full relative min-h-screen flex justify-center">
        {/* Background decorativo com os mesmos elementos da landing */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Padrão de fundo principal (expansível) */}
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

          {/* Container que limita os elementos decorativos laterais ao conteúdo */}
          <div className="max-w-[600px] min-h-[100vh] relative mx-auto">
            {/* DNA superior esquerdo */}
            <div className="absolute left-[-10%] top-[-3%] w-[200px] h-[140px]">
              <Image
                src="/assets/images/hidrolise/elemento-left.svg"
                alt=""
                width={200}
                height={140}
                className="object-contain"
              />
            </div>

            {/* Átomo superior direito */}
            <div className="absolute right-[-10%] top-[-5%] w-[170px] h-[170px]">
              <Image
                src="/assets/images/hidrolise/elemento-top.svg"
                alt=""
                width={170}
                height={170}
                className="object-contain"
              />
            </div>

            {/* Microscópio inferior direito */}
            <div className="absolute right-[-30%] bottom-[-4%] w-[200px] h-[250px]">
              <Image
                src="/assets/images/hidrolise/microscopio.svg"
                alt=""
                width={129}
                height={314}
                className="object-contain"
              />
            </div>

            {/* Elemento inferior esquerdo */}
            <div
              className="absolute left-[-5%] bottom-[-5%] w-[140px] h-[140px]"
              style={{ transform: "rotate(349.464deg)", transformOrigin: "center" }}
            >
              <Image
                src="/assets/images/hidrolise/elemento-bottom.svg"
                alt=""
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 w-full max-w-[600px] min-h-screen px-6 py-10 flex flex-col gap-6">
          {/* Cartão de conteúdo conforme Figma (node 33:6541) via componente reutilizável */}
          <InfoCard containerBg="#646363" innerBg="#e6e6e6" innerBorder="#343434" radius={16} padding={16}>
            <p className="text-[#343434] text-[16px] leading-[1.2] font-semibold font-nunito">
              A hidrólise é uma reação química que desempenha um papel indispensável em diversas indústrias, como a alimentícia, a de cosméticos e a farmacêutica. Mas sua importância vai além desses setores, pois, com a crescente preocupação em preservar o meio ambiente, a hidrólise tem-se destacado como uma ferramenta indispensável para promover soluções mais sustentáveis. Nesse infográfico interativo, você poderá explorar de maneira dinâmica como a hidrólise ácida e básica funciona, suas aplicações práticas e sua relevância tanto para o progresso tecnológico quanto para a conservação dos ecossistemas.
            </p>
          </InfoCard>

          {/* Rodapé com botões (componente reutilizável) */}
          <FooterNavegacao onVoltar={handleVoltar} onAvancar={handleAvancar} />
        </div>
      </div>
    </div>
  );
}
