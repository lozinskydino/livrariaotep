"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import InfoCard from "../components/InfoCard";
import FooterNavegacao from "../components/FooterNavegacao";

const FINAL_TEXT = `Conhecer a relação entre pressão atmosférica e altitude é fundamental para entender as respostas fisiológicas do corpo humano a diferentes ambientes. A redução da pressão e o aumento da altitude provocam menor disponibilidade de oxigênio, desafiando a homeostase do organismo, que é a capacidade de um organismo ou sistema manter um equilíbrio interno estável, mesmo diante de mudanças externas, exigindo adaptações complexas, como a produção aumentada de glóbulos vermelhos. Enquanto algumas pessoas podem se aclimatar de forma eficaz, a exposição prolongada a altitudes extremas pode levar a condições graves de saúde, destacando a importância de medidas preventivas e intervenções médicas adequadas. Isso pode ser feito com o uso de medicamentos antes e durante a viagem ou fazendo uso do chá de coca, que é uma infusão feita com as folhas da planta Erythroxylum coca, tradicionalmente consumida nos Andes para combater os efeitos da altitude, a fadiga e os problemas digestivos, o que pode ajudar se os sintomas forem leves. O estudo dessa interligação é vital para garantir a segurança e o bem-estar em atividades em alta montanha, viagens aéreas e quaisquer situações que envolvam mudanças significativas de altitude.`;

export default function PressaoFinalPage() {
  const router = useRouter();

  const handleVoltar = () => router.push("/pressao/topicos");
  const handleInicio = () => router.push("/pressao");

  return (
    <div className="relative flex min-h-screen justify-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <div
          className="h-full w-full"
          style={{ background: "linear-gradient(180deg, #278FAC 0%, #858C72 100%)" }}
        />
      </div>

      <div className="absolute inset-0" aria-hidden>
        <div className="pointer-events-none absolute -left-28 top-16 h-[240px] w-[240px] rounded-full bg-white/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-20 h-[280px] w-[280px] rounded-full bg-[#1A5F73]/40 blur-[140px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-[430px] flex-col items-center px-6 py-14 gap-10">
        <div className="w-full flex justify-center absolute top-16">
          <Image
            src="/assets/images/pressao/logo-pressao.svg"
            alt="Pressão"
            width={211}
            height={149}
            className="w-[211px] h-auto object-contain"
            priority
          />
        </div>

        <div className="w-full max-w-[309px] mt-45">
          <InfoCard
            containerBg="#106477"
            innerBg="#2F979C"
            innerBorder="#106D6D"
            radius={16}
            padding={24}
            className="w-full shadow-[0px_2px_0px_rgba(0,0,0,0.15)]"
          >
            <p className="relative z-10 font-nunito text-[16px] font-semibold leading-[1.25] text-white whitespace-pre-line">
              {FINAL_TEXT}
            </p>
          </InfoCard>
        </div>

        <FooterNavegacao
          onVoltar={handleVoltar}
          onAvancar={handleInicio}
          labelAvancar="INÍCIO"
          className="w-full max-w-[303px]"
          height="67px"
        />
      </div>
    </div>
  );
}
