"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import InfoCard from "../components/InfoCard";
import FooterNavegacao from "../components/FooterNavegacao";

export default function PoliasIntro() {
  const router = useRouter();

  const handleVoltarClick = () => router.push("/polias");
  const handleAvancarClick = () => router.push("/polias/topicos");

  return (
    <div className="relative flex min-h-screen justify-center overflow-y-auto overflow-x-hidden bg-black">
      {/* Cordas ajustadas como na página principal de polias */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[8px] rounded-md z-10"
        style={{
          top: "86px",
          bottom: "66px",
          transform: "translateX(calc(-50% - 52px))",
          backgroundColor: "#F6A13A",
          backgroundImage: "url('/assets/images/polias/string-piece.svg')",
          backgroundSize: "5px 8px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[8px] rounded-md z-10"
        style={{
          top: "86px",
          bottom: "66px",
          transform: "translateX(calc(-50% + 52px))",
          backgroundColor: "#F6A13A",
          backgroundImage: "url('/assets/images/polias/string-piece.svg')",
          backgroundSize: "5px 8px",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 z-0" aria-hidden>
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(180deg, #1B1B1B 0%, #050505 100%)",
          }}
        />
      </div>

      <div className="relative z-20 flex w-full min-w-screen [@media(max-height:375px)]:h-[250vh] [@media(max-height:420px)]:h-[220vh] [@media(max-height:600px)]:h-[150vh] justify-center px-6 py-16 md:px-10">
        <div className="pointer-events-none select-none z-20" aria-hidden>
          <Image
            src="/assets/images/polias/polia-topo.svg"
            alt=""
            width={115}
            height={322}
            priority
            className="absolute left-1/2 -translate-x-1/2 top-0"
          />
        </div>

        <div className="pointer-events-none select-none z-20" aria-hidden>
          <Image
            src="/assets/images/polias/polia-bottom.svg"
            alt=""
            width={115}
            height={322}
            className="absolute left-1/2 -translate-x-1/2 bottom-0"
          />
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 z-20"
          style={{
            top: "clamp(120px, 20vh, 200px)",
            bottom: "clamp(120px, 20vh, 200px)",
            width: "min(75%, 309px)",
          }}
        >
          <div className="relative flex h-full flex-col items-center justify-between gap-6">
            <InfoCard
              containerBg="#A5A29E"
              innerBg="#E6E1DB"
              innerBorder="#67615B"
              radius={16}
              padding={16}
              className="shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)]"
            >
              <p className="relative z-10 text-[#343434] font-nunito font-semibold text-[16px] leading-[1.2]">
                Em 27 de novembro de 2013 houve um acidente na Arena Corinthians, que destacou a importância crítica dos sistemas de elevação, como polias e roldanas, na segurança das operações de construção. Durante a instalação de uma parte da cobertura do estádio, um guindaste de grande porte, fundamental para o levantamento de estruturas pesadas, sofreu um colapso. As polias e roldanas, componentes essenciais no funcionamento do guindaste, são projetadas para distribuir o peso e facilitar a movimentação segura das cargas. No entanto, falhas mecânicas ou erros operacionais envolvendo esses elementos podem resultar em graves consequências. O desabamento resultante causou a morte de dois operários e provocou danos extensivos à estrutura da arena, ressaltando a necessidade de rigorosos padrões de segurança e manutenção no uso de equipamentos de elevação em grandes obras.
              </p>
            </InfoCard>

            <FooterNavegacao
              onVoltar={handleVoltarClick}
              onAvancar={handleAvancarClick}
              className="w-full max-w-[303px] self-center"
              height="67px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
