"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Botao from "../components/Botao";
import InfoCard from "../components/InfoCard";
import ModalHeader from "../components/ModalHeader";

const BASE_WIDTH = 1836;
const BASE_HEIGHT = 852;

const sections = [
  {
    label: "ACIMA DE 8 000 M – ZONA FATAL",
    button: { top: 52, left: 160, width: 320 },
    arrow: { top: 60, left: 90, rotate: -15 },
  },
  {
    label: "ENTRE 5 000 E 8 000 M – ZONA DE PERIGO",
    button: { top: 120, left: 210, width: 360 },
    arrow: { top: 126, left: 140, rotate: -5 },
  },
  {
    label: "CERCA DE 5 000 M – ZONA PROBLEMÁTICA",
    button: { top: 188, left: 280, width: 360 },
    arrow: { top: 196, left: 200, rotate: -5 },
  },
  {
    label: "ENTRE 3 500 M E 5 000 M – ZONA DE ALERTA",
    button: { top: 256, left: 320, width: 390 },
    arrow: { top: 266, left: 240, rotate: -5 },
  },
  {
    label: "ENTRE 2 000 M E 3 500 M",
    button: { top: 326, left: 410, width: 280 },
    arrow: { top: 336, left: 340, rotate: 0 },
  },
  {
    label: "NÍVEL DO MAR – 0 M",
    button: { top: 404, left: 430, width: 220 },
    arrow: { top: 450, left: 440, rotate: -70, reflect: true },
  },
  {
    label: "10 M ABAIXO DO NÍVEL DO MAR – MERGULHO NORMAL",
    button: { top: 486, left: 600, width: 440 },
    arrow: { top: 530, left: 550, rotate: -70, reflect: true },
  },
  {
    label: "40 M ABAIXO DO NÍVEL DO MAR – CANTO DA SEREIA",
    button: { top: 580, left: 750, width: 440 },
    arrow: { top: 596, left: 676, rotate: -5 },
  },
  {
    label: "300 M ABAIXO DO NÍVEL DO MAR – SUBMARINOS",
    button: { top: 666, left: 910, width: 420 },
    arrow: { top: 676, left: 834, rotate: -5 },
  },
];

type ModalContent = {
  title: string;
  bullets: string[];
  image?: {
    src: string;
    alt: string;
  };
};

const MODALS: Record<number, ModalContent> = {
  0: {
    title: "ACIMA DE 8 000 M – ZONA FATAL",
    bullets: [
      "1 a cada 3 pessoas sofrem de alucinações.",
      "Alpinistas experientes conseguem ficar, em média, apenas 1h30min sem aparelhos de auxílio à respiração.",
      "O Monte Everest (Cordilheira dos Himalaias, que pertence a Nepal, China, Índia, Butão e Paquistão, na Ásia) tem seu pico a 8 848 m.",
    ],
  },
  1: {
    title: "ENTRE 5 000 E 8 000 M – ZONA DE PERIGO",
    bullets: [
      "Relatos de perda de consciência e memória.",
      "Riscos de desidratação.",
      "Disparo do coração para suprir falta de ar, causando de arritmias até paradas cardíacas.",
      "Frio intenso (–70 °C) e ar muito seco, podendo causar congelamento de extremidades.",
      "O Monte Aconcágua (Cordilheira dos Andes, Mendoza, Argentina, na América do Sul) tem seu pico a 6 959 m.",
      "O Kilimanjaro (entre a Tanzânia e o Quênia, na África) tem seu pico a 5 895 m.",
    ],
  },
  2: {
    title: "CERCA DE 5 000 M – ZONA PROBLEMÁTICA",
    bullets: [
      "Dificuldade de adaptação do organismo.",
      "Aumento do risco de edemas por acúmulo de líquido em pulmões e cérebro.",
      "A Pirâmide de Carstenz (Ilha de Nova Guiné, Oceania) tem seu pico a 4 884 m.",
    ],
  },
  3: {
    title: "ENTRE 3 500 M E 5 000 M – ZONA DE ALERTA",
    bullets: [
      "Tempo de reflexo diminuído.",
      "Tonturas, náuseas e dor de cabeça constante.",
      "Dificuldades para respirar normalmente.",
      "Visão noturna prejudicada.",
    ],
  },
  4: {
    title: "ENTRE 2 000 M E 3 500 M",
    bullets: [
      "Pressurização de aviões comerciais (entre 1 500 m e 2 500 m).",
      "Organismo responde mais tranquilamente à redução do oxigênio e, a partir de três dias no local, já se adapta, produzindo mais hemoglobina e facilitando o transporte do oxigênio.",
      "O Pico da Neblina (ponto mais alto do Brasil, no Amazonas) tem seu pico a 2 993 m.",
    ],
  },
  5: {
    title: "NÍVEL DO MAR – 0 M",
    bullets: ["Coluna de ar de 1 atm sobre sua cabeça."],
  },
  6: {
    title: "10 M ABAIXO DO NÍVEL DO MAR – MERGULHO NORMAL",
    bullets: [
      "A cada dez metros abaixo do nível do mar, a pressão atmosférica é acrescida de cerca de 1 atm.",
      "Tímpanos são empurrados para dentro (sensação de entupimento).",
    ],
  },
  7: {
    title: "40 M ABAIXO DO NÍVEL DO MAR – CANTO DA SEREIA",
    bullets: [
      "Pressão de cerca de 5 atm.",
      "Necessidade do uso de equipamento especial, como cilindros de ar comprimido.",
      "Interfere nos estímulos nervosos, causando “embriaguez da profundidade”, o que faz muitos afirmarem ver e ouvir sereias.",
      "Se o retorno à superfície for rápido, podem ocorrer embolias, que têm como consequências deformação e até rompimento dos pulmões.",
      "Recorde de mergulho sem equipamento em Francisco “Pipún” Ferras, no Lago São Lucas, no México, em 10 de março de 1996, onde ele atingiu 130 m de profundidade.",
    ],
  },
  8: {
    title: "300 M ABAIXO DO NÍVEL DO MAR – SUBMARINOS",
    bullets: [
      "Alcançado na exploração de petróleo submarino em grandes plataformas submersas.",
      "Mergulhadores passam por adaptação em câmaras especiais, onde respiram uma mistura de hélio, oxigênio e hidrogênio.",
    ],
    image: {
      src: "/assets/images/pressao/img-modal.svg",
      alt: "Gráfico comparando pressão atmosférica em diferentes profundidades",
    },
  },
};

export default function PressaoTopicos() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scale, setScale] = useState(1);
  const [showIndicator, setShowIndicator] = useState(false);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const updateOverflowState = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const needsScroll = container.scrollWidth - container.clientWidth > 1;
    setShowIndicator(needsScroll);
  }, []);

  const updateScale = useCallback(() => {
    const viewportWidth = typeof window !== "undefined" ? window.innerWidth : BASE_WIDTH;
    const widthScale = Math.max(viewportWidth / BASE_WIDTH, 1);
    setScale(widthScale);
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

  useEffect(() => {
    updateOverflowState();
  }, [scale, updateOverflowState]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const resizeObserver = new ResizeObserver(() => updateOverflowState());
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [updateOverflowState]);

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (openModalIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [openModalIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current || !showIndicator) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleBotaoClick = (index: number) => {
    if (MODALS[index]) {
      setOpenModalIndex(index);
    }
  };

  const closeModal = () => setOpenModalIndex(null);
  const handleVoltarPagina = () => router.push("/pressao/intro");
  const handleAvancarPagina = () => router.push("/pressao/final");

  return (
    <div className="min-h-screen bg-[#278FAC] overflow-hidden flex flex-col relative">
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ cursor: showIndicator ? (isDragging ? "grabbing" : "grab") : "default" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="h-screen min-h-[852px] min-w-full relative flex items-start justify-start bg-[#278FAC]">
          <div
            className="relative"
            style={{
              width: `${BASE_WIDTH * scale}px`,
              height: `${BASE_HEIGHT * scale}px`,
            }}
          >
            <div
              className="relative"
              style={{
                width: BASE_WIDTH,
                height: BASE_HEIGHT,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            >
              <Image
                src="/assets/images/pressao/bg-topicos.svg"
                alt="Infográfico de níveis de pressão"
                fill
                priority
                className="object-cover select-none pointer-events-none"
                onDragStart={handleDragStart}
              />

              {sections.map((section, index) => (
                <Fragment key={section.label}>
                  <div
                    className="absolute flex items-center"
                    style={{
                      top: section.button.top,
                      left: section.button.left,
                      minWidth: section.button.width,
                    }}
                  >
                    <Botao onClick={() => handleBotaoClick(index)} label={section.label} variant="amarelo" height="42px" />
                  </div>
                  <div
                    className="absolute"
                    style={{
                      top: section.arrow.top,
                      left: section.arrow.left,
                      width: 57,
                      height: 45,
                      transform: `rotate(${section.arrow.rotate}deg) ${
                        section.arrow.reflect ? "scaleY(-1)" : ""
                      }`,
                    }}
                  >
                    <Image src="/assets/images/pressao/seta.svg" alt="Seta" fill className="object-contain" />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 px-6 pb-8 pointer-events-none">
        {showIndicator && (
          <div className="mb-4 flex items-center justify-center gap-3 text-white uppercase tracking-[0.2em] text-xs font-nunito drop-shadow-md select-none">
            <div className="relative w-46 h-56">
              <Image src="/assets/images/pressao/icon-move.svg" alt="Mover" fill className="object-contain" />
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-4 pointer-events-auto">
          <div className="w-[140px]">
            <Botao onClick={handleVoltarPagina} label="VOLTAR" variant="azul" height="67px" />
          </div>
          <div className="w-[140px]">
            <Botao onClick={handleAvancarPagina} label="AVANÇAR" variant="verde" height="67px" />
          </div>
        </div>
      </div>
      {openModalIndex !== null && MODALS[openModalIndex] && (
        (() => {
          const modalData = MODALS[openModalIndex];
          return (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0" aria-hidden>
            <div
              className="h-full w-full"
              style={{ background: "linear-gradient(180deg, #278FAC 0%, #858C72 100%)" }}
            />
            <div className="pointer-events-none absolute -left-24 top-32 h-[220px] w-[220px] rounded-full bg-white/20 blur-[120px]" />
            <div className="pointer-events-none absolute -right-16 bottom-16 h-[260px] w-[260px] rounded-full bg-[#1A5F73]/40 blur-[140px]" />
          </div>

          <div className="relative min-h-screen max-h-screen w-full px-6 py-16 flex justify-center overflow-y-auto">
            <div className="w-full max-w-[430px] flex flex-col items-center gap-8">
              <ModalHeader onBack={closeModal} onHome={closeModal} bgColor="transparent" />

              <div className="w-full flex flex-col items-center gap-6">
                <InfoCard
                  containerBg="#106477"
                  innerBg="#2F979C"
                  innerBorder="#106D6D"
                  radius={16}
                  padding={16}
                  className="!mt-0 shadow-[0px_2px_0px_rgba(0,0,0,0.15)]"
                >
                  <p className="text-white text-[18px] font-extrabold font-nunito leading-[1.2] text-center">
                    {modalData.title}
                  </p>
                </InfoCard>

                <InfoCard
                  containerBg="#106477"
                  innerBg="#2F979C"
                  innerBorder="#106D6D"
                  radius={16}
                  padding={20}
                  className="!mt-0 shadow-[0px_2px_0px_rgba(0,0,0,0.15)]"
                >
                  <ul className="flex flex-col gap-4 list-disc pl-6 text-white text-[16px] font-semibold font-nunito leading-[1.2]">
                    {modalData.bullets.map((paragraph) => (
                      <li key={paragraph}>{paragraph}</li>
                    ))}
                  </ul>

                  {modalData.image && (
                    <div className="mt-6 w-full rounded-[16px] overflow-hidden">
                      <div className="relative w-full h-[180px]">
                        <Image
                          src={modalData.image.src}
                          alt={modalData.image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </InfoCard>
              </div>

              <div className="w-full max-w-[303px] mt-2">
                <Botao onClick={closeModal} label="VOLTAR" variant="azul" height="67px" />
              </div>
            </div>
          </div>
        </div>
          );
        })()
      )}
    </div>
  );
}
