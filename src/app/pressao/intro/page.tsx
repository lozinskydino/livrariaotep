"use client";

import { useRouter } from "next/navigation";
import InfoCard from "../components/InfoCard";
import FooterNavegacao from "../components/FooterNavegacao";

const INTRO_TEXT = `Você sabe o que é o soroche? Esse termo é também conhecido como “mal de altitude” ou “mal da montanha” e é uma condição comum que afeta pessoas que se deslocam para altitudes elevadas, como em diversas regiões da Bolívia. Esse país apresenta grande diversidade de altitudes, variando desde os baixos vales, como a cidade de Santa Cruz de la Sierra, que está a 400 m de altitude, até as elevadas altitudes do altiplano e das montanhas dos Andes. La Paz, uma das capitais mais altas do mundo, situa-se a cerca de 3650 metros acima do nível do mar, enquanto o Salar de Uyuni, o maior deserto de sal do mundo, está a aproximadamente 3656 metros. Nessas altitudes elevadas, a pressão atmosférica reduzida resulta em menor disponibilidade de oxigênio, o que pode causar sintomas como dores de cabeça, náuseas, fadiga e, em casos graves, edema cerebral ou pulmonar. A aclimatação gradual é determinante para minimizar os efeitos adversos, permitindo que o corpo aumente a produção de glóbulos vermelhos e melhore a eficiência na utilização do oxigênio disponível. No entanto, para muitos visitantes e até mesmo para alguns residentes, as variações extremas de altitude na Bolívia podem representar desafios significativos para a saúde e o bem-estar. Vamos entender agora como a altitude pode influenciar no funcionamento do corpo humano.`;

export default function PressaoIntroPage() {
  const router = useRouter();

  const handleVoltar = () => router.push("/pressao");
  const handleAvancar = () => router.push("/pressao/topicos");

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

      <div className="relative z-10 flex w-full max-w-[430px] flex-col items-center px-6 py-16 gap-10">
        <div className="flex w-full justify-center">
          <div className="w-full max-w-[309px]">
            <InfoCard
              containerBg="#106477"
              innerBg="#2F979C"
              innerBorder="#106D6D"
              radius={16}
              padding={24}
              className="w-full shadow-[0px_2px_0px_rgba(0,0,0,0.15)]"
            >
              <p className="relative z-10 font-nunito text-[16px] font-semibold leading-[1.2] text-white">
                {INTRO_TEXT}
              </p>
            </InfoCard>
          </div>
        </div>

        <FooterNavegacao
          onVoltar={handleVoltar}
          onAvancar={handleAvancar}
          className="w-full max-w-[303px]"
          height="67px"
        />
      </div>
    </div>
  );
}
