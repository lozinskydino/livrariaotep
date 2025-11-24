"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import InfoCard from "../components/InfoCard";
import FooterNavegacao from "../components/FooterNavegacao";

export default function PoliasFinal() {
  const router = useRouter();

  const handleVoltar = () => router.push("/polias/topicos");
  const handleInicio = () => router.push("/polias");

  return (
    <div className="relative flex min-h-screen [@media(max-height:375px)]:h-[100vh] [@media(max-height:420px)]:h-[50vh] [@media(max-height:600px)]:h-[150vh] justify-center overflow-y-auto overflow-x-hidden bg-black">
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

      <div className="absolute inset-0" aria-hidden>
        <div
          className="h-full w-full"
          style={{ background: "linear-gradient(180deg, #1B1B1B 0%, #050505 100%)" }}
        />
      </div>

      <div className="relative z-20 flex w-full justify-center px-6 py-16 md:px-10">
        {/* Polias topo/rodapé decorativas */}
        <div className="pointer-events-none select-none" aria-hidden>
          <Image
            src="/assets/images/polias/polia-topo.svg"
            alt=""
            width={115}
            height={322}
            priority
            className="absolute left-1/2 -translate-x-1/2 top-0"
          />
        </div>
        <div className="pointer-events-none select-none" aria-hidden>
          <Image
            src="/assets/images/polias/polia-bottom.svg"
            alt=""
            width={115}
            height={322}
            className="absolute left-1/2 -translate-x-1/2 bottom-0"
          />
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "clamp(120px, 20vh, 200px)",
            bottom: "clamp(120px, 20vh, 200px)",
            width: "min(85%, 324px)",
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
                O acidente na Arena Corinthians ressalta a importância de manter rigorosos padrões de segurança e manutenção, especialmente no uso de sistemas de elevação como polias e roldanas. Esses componentes, essenciais para a distribuição adequada do peso e a movimentação segura das cargas, devem ser inspecionados e operados com o máximo cuidado para evitar falhas. A tragédia que resultou na perda de vidas e em danos significativos à estrutura destaca a necessidade de constante vigilância e aprimoramento das práticas de segurança na construção civil. Aprender com este incidente é fundamental para garantir que operações futuras utilizem tecnologias de elevação de forma segura e eficaz, protegendo a vida dos trabalhadores e a integridade das obras.
              </p>
            </InfoCard>

            <FooterNavegacao
              onVoltar={handleVoltar}
              onAvancar={handleInicio}
              labelVoltar="VOLTAR"
              labelAvancar="INÍCIO"
              className="w-full max-w-[303px] self-center"
              height="67px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
