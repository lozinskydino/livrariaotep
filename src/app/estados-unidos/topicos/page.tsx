"use client";

import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import Botao from "../components/Botao";
import TopicoModalOverlay from "../components/TopicoModalOverlay";
import { useRouter } from "next/navigation";
import { Nunito } from "next/font/google";
import { modalIds, TopicoId } from "../components/topicoContent";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
});

export default function EstadosUnidosTopicos() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragState = useRef<{
    startX: number;
    startY: number;
    scrollLeft: number;
    target: Element | null;
  } | null>(null);
  const [showHint, setShowHint] = useState(true);
  const [hasPanorama, setHasPanorama] = useState(true);
  const [panoramaWidth, setPanoramaWidth] = useState<number | null>(null);
  const [panoramaHeight, setPanoramaHeight] = useState<number | null>(null);
  const [bgWidth, setBgWidth] = useState<number | null>(null);
  const [scrollerHeight, setScrollerHeight] = useState<number>(0);
  const [scrollerWidth, setScrollerWidth] = useState<number>(0);
  const tapRef = useRef<{
    startX: number;
    startY: number;
    time: number;
    wagonId: string;
  } | null>(null);
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [imgNatural, setImgNatural] = useState<{ w: number; h: number } | null>(
    null
  );

  // Assets exportados do Figma (nomes com espaços e acentuação)
  const bgSrc = encodeURI(
    "/assets/images/estados-unidos/topicos/bg-estacao.png"
  );
  const infoSrc = encodeURI("/assets/images/estados-unidos/Infor.png");
  const router = useRouter();

  // Pré-carrega a imagem para garantir que imgNatural seja definido, mesmo se o onLoad do <img> não disparar em alguns cenários
  useEffect(() => {
    if (imgNatural) return; // já configurado
    const img = new Image();
    img.src = bgSrc;
    const onLoad = () => {
      setImgNatural({ w: img.naturalWidth, h: img.naturalHeight });
    };
    const onError = () => setHasPanorama(false);
    if (img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
      onLoad();
      return; // não precisa de listeners
    }
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);
    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [bgSrc, imgNatural]);

  // Utilitário para rolagem suave controlada pelos botões
  const scrollToX = (x: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: x, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      setIsDragging(true);
      isDraggingRef.current = true;
      setShowHint(false);
      el.setPointerCapture(e.pointerId);
      dragState.current = {
        startX: e.clientX,
        startY: e.clientY,
        scrollLeft: el.scrollLeft,
        target: e.target as Element,
      };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current || !dragState.current) return;
      const dx = e.clientX - dragState.current.startX;
      el.scrollLeft = dragState.current.scrollLeft - dx; // arrastar para o lado
    };

    const endDrag = (e?: PointerEvent) => {
      setIsDragging(false);
      isDraggingRef.current = false;
      if (e && el.hasPointerCapture(e.pointerId)) {
        el.releasePointerCapture(e.pointerId);
      }
      // TAP detection (abre modal quando o toque começou em um vagão)
      if (e && dragState.current) {
        const dx = e.clientX - dragState.current.startX;
        const dy = e.clientY - dragState.current.startY;
        const dist = Math.hypot(dx, dy);
        if (dist <= 6) {
          const startEl = dragState.current.target as HTMLElement | null;
          const wagonEl = startEl?.closest?.('[data-wagon-id]') as
            | (HTMLElement & { dataset: { wagonId?: string } })
            | null;
          const id = wagonEl?.dataset?.wagonId as TopicoId | undefined;
          if (id) {
            if (modalIds.has(id)) {
              setActiveTopicId(id);
            } else {
              router.push(`/estados-unidos/topicos/${id}`);
            }
          }
        }
      }
      dragState.current = null;
    };

    const onMouseLeave = () => endDrag();

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // Observa dimensões disponíveis do scroller (responsivo/desktop)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setScrollerHeight(el.clientHeight);
      setScrollerWidth(el.clientWidth);
    };
    update();
    // Algumas plataformas retornam 0 no primeiro tick; agenda uma leitura após o layout
    const rafId = requestAnimationFrame(() => {
      if (el.clientHeight === 0 || el.clientWidth === 0) {
        update();
      }
    });
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    ro?.observe(el);
    const onWin = () => update();
    window.addEventListener("resize", onWin);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", onWin);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Recalcula a largura do panorama usando "cover":
  // escala = max(scrollerWidth/naturalWidth, scrollerHeight/naturalHeight)
  // larguraConteudo = naturalWidth * escala
  useEffect(() => {
    if (imgNatural && scrollerHeight && scrollerWidth) {
      const scale = Math.max(
        scrollerWidth / imgNatural.w,
        scrollerHeight / imgNatural.h
      );
      setPanoramaWidth(imgNatural.w * scale);
      setPanoramaHeight(imgNatural.h * scale);
    }
  }, [imgNatural, scrollerHeight, scrollerWidth]);

  const handleVoltar = () => router.push("/estados-unidos/intro");
  const handleAvancar = () => router.push("/estados-unidos/final");

  // Mapeamento dos vagões com posições relativas (percentuais sobre a imagem natural)
  // leftPct/widthPct relativos à largura; topPct/heightPct relativos à altura
  const DEFAULT_DESC_WIDTH_PX = 220; // largura padrão (px) da descrição
  const DEFAULT_TEXT_OFFSET_PCT = 6; // deslocamento padrão para baixar o texto dentro do vagão
  const WAGOES: Array<{
    id: TopicoId;
    label: string;
    leftPct: number;
    widthPct: number;
    topPct: number;
    heightPct: number;
    btnTopPct?: number; // topo do botão (opcional), relativo à altura
    descWidthPx?: number; // largura da caixa de descrição em pixels
    textOffsetPct?: number; // deslocamento adicional do texto (positivo = desce), relativo à altura do vagão
  }> = [
    {
      id: "grandes-fortunas",
      label: "UM PERÍODO DE GRANDES FORTUNAS",
      leftPct: 8.5,
      widthPct: 10,
      topPct: 54,
      heightPct: 35,
      btnTopPct: 8,
      descWidthPx: 160,
      textOffsetPct: 11,
    },
    {
      id: "exploracao-operarios",
      label: "EXPLORAÇÃO\nDOS OPERÁRIOS",
      leftPct: 15,
      widthPct: 10,
      topPct: 50,
      heightPct: 30,
      textOffsetPct: 0,
    },
    {
      id: "diferencas-sociais",
      label: "AS DIFERENÇAS\nSOCIAIS E O\nELITISMO",
      leftPct: 30.9,
      widthPct: 10.5,
      topPct: 53.5,
      heightPct: 21,
      btnTopPct: 0,
      textOffsetPct: 15,
    },
    {
      id: "cultura-arte-inovacoes",
      label: "A CULTURA, A\nARTE E AS\nINOVAÇÕES",
      leftPct: 44.3,
      widthPct: 10.5,
      topPct: 53.5,
      heightPct: 21,
      btnTopPct: 0,
      textOffsetPct: 15,
    },
    {
      id: "trabalhadores-domesticos",
      label: "OS\nTRABALHADORES\nDOMÉSTICOS",
      leftPct: 57.5,
      widthPct: 10.5,
      topPct: 53.5,
      heightPct: 21,
      btnTopPct: 0,
      textOffsetPct: 15,
    },
    {
      id: "proibicao-escravizacao",
      label: "PROIBIÇÃO DA\nESCRAVIZAÇÃO",
      leftPct: 70.8,
      widthPct: 10.5,
      topPct: 53.5,
      heightPct: 21,
      btnTopPct: 0,
      textOffsetPct: 15,
    },
    {
      id: "faroeste",
      label: "FAROESTE",
      leftPct: 84.4,
      widthPct: 10,
      topPct: 54,
      heightPct: 22,
      btnTopPct: 0,
      textOffsetPct: 12,
    },
  ];

  return (
    <div className={`${nunito.className} relative overflow-hidden flex flex-col items-stretch min-h-screen w-full`}>
      {/* Fundo em tela cheia seguindo a paleta do Figma */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, #80E6E8 0%, #7BD2E0 28%, #FFD9B0 100%)",
          }}
        />
      </div>

      <div className="w-full min-h-screen relative">
        {/* Oculta a barra de rolagem no iOS/Android/WebKit e Firefox */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar{ display:none; }
          .no-scrollbar{ -ms-overflow-style:none; scrollbar-width:none; }
        `}</style>

        {/* Área principal com arraste horizontal */}
        <div className="relative z-10 min-h-screen w-full">
          {/* Informação fixa no topo */}
          <div className="fixed top-[52px] left-1/2 -translate-x-1/2 z-20 select-none pointer-events-none">
            <NextImage
              src={infoSrc}
              alt="mova para o lado"
              width={140}
              height={140}
              className="w-[140px] h-auto opacity-95"
            />
          </div>

          {/* Canvas panorâmico */}
          <div
            ref={scrollerRef}
            className={`absolute inset-0 no-scrollbar overflow-x-auto overflow-y-hidden cursor-${
              isDragging ? "grabbing" : "grab"
            } select-none rounded-[0px]`}
            style={{ touchAction: "pan-x" }}
          >
            {/* Se existir um panorama único, usamos a largura real da imagem para o scroll */}
            {hasPanorama ? (
              <div
                className="relative"
                style={{
                  height: scrollerHeight || 640,
                  width: panoramaWidth
                    ? `${panoramaWidth}px`
                    : `${Math.max(scrollerWidth || 0, 393)}px`,
                }}
              >
                {/* Cena dimensionada exatamente ao tamanho exibido da imagem */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden"
                  style={{
                    width: `${panoramaWidth ?? Math.max(scrollerWidth || 0, 393)}px`,
                    height: `${panoramaHeight ?? (scrollerHeight || 640)}px`,
                  }}
                >
                  <NextImage
                    src={bgSrc}
                    alt="BG Estação"
                    fill
                    sizes="100vw"
                    className="block w-full h-full object-cover select-none pointer-events-none"
                    onLoadingComplete={(img) => {
                      setImgNatural({ w: img.naturalWidth, h: img.naturalHeight });
                    }}
                    onError={() => setHasPanorama(false)}
                  />



                  {/* Overlays dos vagões: botão e texto */}
                  {panoramaWidth && panoramaHeight && (
                    <>
                      {WAGOES.map((w) => {
                        const pillH = 55;
                        const fontSize = 17;
                        const left = `${w.leftPct}%`;
                        const top = `${w.topPct}%`;
                        const width = `${w.widthPct}%`;
                        const height = `${w.heightPct}%`;
                        const btnTop = w.btnTopPct != null ? `${w.btnTopPct}%` : undefined;
                        const textTop = `calc(50% + ${(w.textOffsetPct ?? DEFAULT_TEXT_OFFSET_PCT)}%)`;
                        return (
                          <div
                            key={w.id}
                            className="absolute"
                            style={{ left, top, width, height, transform: "translateY(-50%)" }}
                            data-wagon-id={w.id}
                            onPointerDown={(e) => {
                              tapRef.current = {
                                startX: e.clientX,
                                startY: e.clientY,
                                time: Date.now(),
                                wagonId: w.id,
                              };
                            }}
                            onPointerUp={(e) => {
                              const s = tapRef.current;
                              tapRef.current = null;
                              if (!s || s.wagonId !== w.id) return;
                              const dx = e.clientX - s.startX;
                              const dy = e.clientY - s.startY;
                              const dist = Math.hypot(dx, dy);
                              if (dist <= 6) {
                                if (modalIds.has(w.id)) {
                                  setActiveTopicId(w.id);
                                } else {
                                  router.push(`/estados-unidos/topicos/${w.id}`);
                                }
                              }
                            }}
                            onPointerCancel={() => {
                              tapRef.current = null;
                            }}
                            onPointerLeave={() => {
                              // se sair da área durante o gesto, não considerar tap
                              tapRef.current = null;
                            }}
                          >
                            {/* Botão (componente) "CLIQUE NO VAGÃO" */}
                            {btnTop && (
                              <div
                                className="absolute left-1/2 -translate-x-1/2 z-10"
                                style={{ top: btnTop, width: "max-content" }}
                                onPointerDown={(e) => e.stopPropagation()}
                              >
                                {/* Escala leve para aproximar fonte de 15px (Botao usa text-base ~16px) */}
                                <div style={{ transform: "scale(0.9375)", transformOrigin: "center" }}>
                                  <Botao
                                    onClick={() =>
                                      modalIds.has(w.id)
                                        ? setActiveTopicId(w.id)
                                        : router.push(`/estados-unidos/topicos/${w.id}`)
                                    }
                                    label="CLIQUE NO VAGÃO"
                                    variant="verde"
                                    height={`${pillH}px`}
                                  />
                                </div>
                              </div>
                            )}

                            {/* Texto do vagão */}
                            <div
                              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-extrabold cursor-pointer select-none"
                              style={{
                                color: "white",
                                textTransform: "uppercase",
                                lineHeight: 1.4,
                                fontSize,
                                textShadow: "0 1px 0 rgba(0,0,0,0.35)",
                                padding: "0 8px",
                                width: "100%",
                                maxWidth: `${(w.descWidthPx ?? DEFAULT_DESC_WIDTH_PX)}px`,
                                top: textTop,
                              }}
                              role="button"
                              aria-label={`Abrir modal ${w.label.replace(/\n/g, " ")}`}
                              onPointerDown={(e) => e.stopPropagation()}
                              onClick={() =>
                                modalIds.has(w.id)
                                  ? setActiveTopicId(w.id)
                                  : router.push(`/estados-unidos/topicos/${w.id}`)
                              }
                            >
                              {w.label.split("\n").map((line, i) => (
                                <div key={i}>{line}</div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div
                className="relative"
                style={{
                  height: scrollerHeight || 640,
                  width: bgWidth ? `${bgWidth}px` : 1180,
                }}
              >
                {/* Fundo/cidade (BG ESTAÇÃO.png) */}
                <NextImage
                  src={bgSrc}
                  alt="Cenário da estação"
                  fill
                  sizes="100vw"
                  className="select-none pointer-events-none"
                  style={{ objectFit: "contain", objectPosition: "bottom center" }}
                  onLoadingComplete={(img) => {
                    setBgWidth(img.naturalWidth * ((scrollerHeight || 640) / img.naturalHeight));
                  }}
                />

              </div>
            )}
          </div>

          {/* Rodapé com botões (overlay) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex justify-center z-20 pointer-events-none">
            <div className="max-w-[303px] flex flex-row items-stretch w-full gap-6 pointer-events-auto">
              <div className="flex-1">
                <Botao onClick={handleVoltar} label="VOLTAR" variant="azul" height="67px" />
              </div>
              <div className="flex-1">
                <Botao onClick={handleAvancar} label="AVANÇAR" variant="verde" height="67px" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pequena animação para a mão */}
      <style>{`
        @keyframes wiggle { 0%,100% { transform: translateX(0); } 50% { transform: translateX(6px); } }
      `}</style>

      {/* Modal overlay local (sem rota) */}
      {activeTopicId && (
        <TopicoModalOverlay id={activeTopicId} onClose={() => setActiveTopicId(null)} />
      )}
    </div>
  );
}
