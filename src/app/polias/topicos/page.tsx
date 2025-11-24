"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import FooterNavegacao from "../components/FooterNavegacao";
import ModalHeader from "../components/ModalHeader";
import InfoCard from "../components/InfoCard";
import Botao from "../components/Botao";

// Botão redondo adaptado do componente Botao.tsx (mesma paleta 'amarelo')
function BotaoRedondo({ size = "clamp(46px, 6.2vw, 67px)", onClick, label }: { size?: number | string; onClick: () => void; label: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const colors = {
    bg: "#FFB213",
    inner: "#FFEE88",
    hover: "#fff6c2",
    text: "#F59E0B",
  };

  const dim = typeof size === "number" ? `${size}px` : "67px";

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 border-4 border-white rounded-full shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)] relative overflow-hidden cursor-pointer select-none"
      style={{ width: dim, height: dim, backgroundColor: colors.bg }}
      aria-label={`Tópico ${label}`}
      title={`Tópico ${label}`}
    >
      <div
        className="absolute inset-0 rounded-full transition-colors duration-300"
        style={{
          backgroundColor: isHovered ? colors.hover : colors.inner,
          left: "1.01px",
          top: "0px",
          width: "calc(100% - 3px)",
          height: "calc(100% - 4px)",
        }}
      />
      <span className="relative z-10 font-nunito font-extrabold text-[18px] md:text-[20px] leading-none" style={{ color: colors.text }}>{label}</span>
    </button>
  );
}

export default function PoliasTopicos() {
  const router = useRouter();

  // Scroll drag como em forca-magnetica/terra
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const onTouchEnd = () => setIsDragging(false);

  // Coordenadas extraídas do Figma (node 17:1321) para os 7 botões amarelos
  const buttons = [
    { xPct: 24.0, yPct: 26.5 }, // 1
    { xPct: 20.0, yPct: 56.5 }, // 2
    { xPct: 50.0, yPct: 78.0 }, // 3 (levemente mais alto para afastar do footer)
    { xPct: 88.0, yPct: 83.0 }, // 4
    { xPct: 86.0, yPct: 42.0 }, // 5
    { xPct: 69.0, yPct: 49.0 }, // 6
    { xPct: 60.0, yPct: 24.0 }, // 7
  ];

  const handleVoltar = () => router.push("/polias");
  const handleAvancar = () => router.push("/polias/final");

  const [openId, setOpenId] = useState<number | null>(null);

  const modalContent: Record<
    number,
    {
      title: string;
      text?: string;
      textIsHtml?: boolean;
      content?: Array<{
        type: "text" | "image";
        text?: string;
        src?: string;
        alt?: string;
        isHtml?: boolean;
      }>;
    }
  > = {
    1: {
      title: "LINHA DO TEMPO DO ACIDENTE",
      text: `<b>09:00</b> - Início das operações de elevação da cobertura.<br />
          <b>11:30</b> - Início do levantamento da peça estrutural pelo guindaste.<br />
          <b>12:40</b> - Colapso do guindaste e desabamento da peça.<br />
          <b>13:05</b> - Chegada de equipes de emergência ao local.`,
      textIsHtml: true,
    },
    2: {
      title: "DIAGRAMA DO ACIDENTE",
      content: [
        {
          type: "text",
          text: "Peça de 420 toneladas (420 000 kg) foi a última colocada na estrutura da cobertura metálica."
        },
        {
          type: "image",
          src: "/assets/images/polias/modal-1.png",
          alt: "Estrutura da cobertura metálica"
        },
        {
          type: "text",
          text: "Guindaste - Modelo LR 11350 (Lieberth); Lança principal 30m -150m;\nContrapeso: 990 ton;\nTreliçado: 12 m – 114m"
        },
        {
          type: "image",
          src: "/assets/images/polias/modal-2.png",
          alt: "Especificações do guindaste"
        },
        {
          type: "text",
          text: "O guindaste levantava a última peça da cobertura da arquibancada da ala leste. O módulo superior seria içado até uma altura de cerca de 40 m. A instalação, comparada ao módulo da ala sul, idêntico ao da ala leste, deveria exigir 72h e 65 trabalhadores para ser finalizado."
        },
        {
          type: "image",
          src: "/assets/images/polias/modal-3.png",
          alt: "Processo de instalação"
        },
        {
          type: "text",
          text: "<b>Desequilíbrio</b>\n\nSegundo funcionários, uma parte do solo sob o guindaste acabou cedendo. Isso fez com que a lança principal balançasse e a peça da cobertura batesse em uma parte da arquibancada do estádio.",
          isHtml: true,
        },
        {
          type: "image",
          src: "/assets/images/polias/modal-4.png",
          alt: "Diagrama do acidente"
        },
        {
          type: "text",
          text: "Com o impacto da peça na arquibancada, a lança principal tombou e a peça caiu sobre a arquibancada e na área externa da ala leste. O guindaste e a peça foram lançados ou arrastados por dezenas de metros."
        },
        
      ]
    },
    3: {
      title: "FATORES CONTRIBUINTES",
      text: `<b>Sobrecarga no guindaste</b><br /><br />

• Falhas mecânicas nas polias/ roldanas.<br />
• Possível erro operacional.`,
    },
    4: {
      title: "CONSEQUÊNCIAS DO ACIDENTE",
      text: `• Vítimas: dois operários.<br />
• Danos estruturais: parte da cobertura danificada.<br />
• 5 mil m2 interditados: 30% de uma das alas do estádio fechado pela defesa civil.<br />
• Atrasos na obra: impacto no cronograma da construção.<br />`,
    },
    5: {
      title: "MEDIDAS DE SEGURANÇA",
      text: `• Procedimentos de inspeção e manutenção de guindastes.<br />
• Treinamento para operadores de guindastes.<br />
• Uso de tecnologias avançadas para monitoramento de cargas.<br />`,
    },
    6: {
      title: "ALEGAÇÕES DA CONSTRUTORA E DEFESA CIVIL",
      text: `• A construtora responsável pela obra afirma que o guindaste estava escorado a uma base de brita, além de contar com o apoio de chapas de aço, seguindo o procedimento padrão.<br />
      • A Defesa Civil não viu indícios de que o terreno tenha cedido, entrando em contradição com as alegações dos funcionários.<br />`,
    },
    7: { title: "LIÇÕES APRENDIDAS", text: `
      • Importância de seguir rigorosamente as normas de segurança. <br />
      • Necessidade de verificar regularmente a integridade de polias e roldanas. <br />
      • Implementação de práticas de segurança aprimoradas em futuras construções. <br />
      
      ` },
    
  };

  const openModal = (id: number) => setOpenId(id);
  const closeModal = () => setOpenId(null);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-y-auto overflow-x-hidden">
      <div
        ref={scrollRef}
        className="relative w-full min-h-screen overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing lg:cursor-default lg:active:cursor-default"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative w-[1176px] h-[852px] lg:w-full lg:flex lg:justify-center select-none">
          <Image
            src="/assets/images/polias/estadio.png"
            alt="Estádio"
            fill
            className="object-cover object-center"
            style={{ minHeight: "100vh", width: "100%" }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
            }}
          />

          <div className="absolute" style={{ left: 40, top: 40, width: 313 }}>
            <div className="relative rounded-2xl bg-[#A5A29E] p-[16px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)] border-4 border-white">
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ border: "2px solid #67615B" }} />
              <div className="relative flex items-center justify-center">
                <p className="text-[#333230] font-nunito font-extrabold text-[18px] leading-[1.2] text-center">ACIDENTE DURANTE CONSTRUÇÃO DE ESTÁDIO</p>
              </div>
            </div>
          </div>

          {buttons.map((b, idx) => (
            <div
              key={idx}
              className="absolute z-10"
              style={{ left: `${b.xPct}%`, top: `${b.yPct}%`, transform: "translate(-50%, -50%)" }}
            >
              <BotaoRedondo onClick={() => openModal(idx + 1)} label={`${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicador 'mova para o lado' (somente mobile) */}
      <div className="fixed bottom-[108px] z-30 flex items-center justify-center w-full lg:hidden">
        <Image src="/assets/images/polias/move-icon.png" alt="Cursor" width={153} height={53}/>
      </div>

      {/* Navegação inferior */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center px-10 z-50">
        <div className="max-w-[313px] w-full">
          <FooterNavegacao onVoltar={handleVoltar} onAvancar={handleAvancar} height="67px" />
        </div>
      </div>
      {/* Modal Overlay */}
      {openId && (
        <div className="fixed inset-0 z-40 bg-[#1B1B1B] overflow-y-auto">
          <div className="relative min-h-screen w-full flex flex-col items-center">
            <ModalHeader onBack={closeModal} onHome={closeModal} bgColor="transparent" />

            <div className="w-full max-w-[400px] px-5 pt-6 pb-10 flex flex-col gap-5">
              <InfoCard containerBg="#A5A29E" innerBg="#E6E1DB" innerBorder="#67615B" className="!mt-0 shadow-[0px_4px_0px_0px_#333230]">
                <p className="text-[#333230] font-nunito font-extrabold text-[18px] leading-[1.2] text-left">
                  {modalContent[openId].title}
                </p>
              </InfoCard>

              <InfoCard containerBg="#A5A29E" innerBg="#E6E1DB" innerBorder="#67615B" className="!mt-0 shadow-[0px_4px_0px_0px_#333230]">
                <div className="flex flex-col gap-4">
                  {modalContent[openId].content ? (
                    modalContent[openId].content!.map((item, idx) => (
                      <div key={idx}>
                        {item.type === "text" ? (
                          item.isHtml === false ? (
                            <p className="text-[#333230] text-[16px] leading-[1.35] font-semibold font-nunito whitespace-pre-line">
                              {item.text}
                            </p>
                          ) : (
                            <p
                              className="text-[#333230] text-[16px] leading-[1.35] font-semibold font-nunito"
                              dangerouslySetInnerHTML={{ __html: item.text || "" }}
                            />
                          )
                        ) : (
                          <div className="relative w-full rounded-lg overflow-hidden border-2 border-[#67615B]">
                            <Image
                              src={item.src!}
                              alt={item.alt!}
                              width={400}
                              height={200}
                              className="w-full h-auto object-contain bg-white"
                            />
                          </div>
                        )}
                      </div>
                    ))
                  ) : modalContent[openId].text ? (
                    modalContent[openId].textIsHtml === false ? (
                      <p className="text-[#333230] text-[16px] leading-[1.35] font-semibold font-nunito whitespace-pre-line">
                        {modalContent[openId].text}
                      </p>
                    ) : (
                      <p
                        className="text-[#333230] text-[16px] leading-[1.35] font-semibold font-nunito"
                        dangerouslySetInnerHTML={{ __html: modalContent[openId].text || "" }}
                      />
                    )
                  ) : null}
                </div>
              </InfoCard>

              <div className="mt-4 flex justify-center">
                <div className="w-full max-w-[303px]">
                  <Botao onClick={closeModal} label="VOLTAR" variant="azul" height="67px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
