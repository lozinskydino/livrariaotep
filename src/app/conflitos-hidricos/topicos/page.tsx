"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import ModalHeader from "../components/ModalHeader";
import FooterNavegacao from "../components/FooterNavegacao";
import InfoCard from "../components/InfoCard";
import InfoCardTitle from "../components/InfoCardTitle";
import ModalContent from "../components/ModalContent";
import { topicosData } from "../data/topicosData";
import Image from "next/image";

export default function ConflitosHidricosTopicos() {
  const router = useRouter();
  const handleVoltar = () => router.push("/conflitos-hidricos/intro");
  const handleHome = () => router.push("/conflitos-hidricos");
  const handleAvancar = () => router.push("/conflitos-hidricos/final");

  // Estado do modal
  const [modalAberto, setModalAberto] = useState<number | null>(null);
  const [ultimoTopicoClicado, setUltimoTopicoClicado] = useState<number | null>(null);

  // Zoom & pan do mapa
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const dragRef = useRef({ dragging: false, startX: 0, startY: 0, origX: 0, origY: 0 });
  const PADDING = 16;
  const baseViewRef = useRef<{ scale: number; pos: { x: number; y: number } } | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  // Multi-touch (pinch)
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinchRef = useRef<{ pinching: boolean; startDistance: number; startScale: number; center: { x: number; y: number } }>({ pinching: false, startDistance: 0, startScale: 1, center: { x: 0, y: 0 } });
  // Espaçamento superior responsivo
  const [topSpacing, setTopSpacing] = useState<'normal' | 'narrow' | 'veryNarrow'>('normal');
  const [containerPad, setContainerPad] = useState<number>(16);

  useEffect(() => {
    const isVeryNarrow = window.innerWidth <= 391;
    const isNarrow = window.innerWidth <= 461;
    setTopSpacing(isVeryNarrow ? 'veryNarrow' : isNarrow ? 'narrow' : 'normal');
    setContainerPad(isVeryNarrow ? 4 : isNarrow ? 6 : 16);
  }, []);

  // Controlar overflow do body quando modal abrir/fechar
  useEffect(() => {
    if (modalAberto !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalAberto]);

  const clampScale = (s: number) => Math.min(4, Math.max(0.5, s));

  const zoomAt = useCallback((cx: number, cy: number, delta: number) => {
    setScale((prevScale) => {
      const el = containerRef.current;
      if (!el) return prevScale;
      const newScale = clampScale(prevScale + delta);
      // Manter o ponto sob o cursor estável
      setPos((prevPos) => {
        const worldX = (cx - PADDING - prevPos.x) / prevScale;
        const worldY = (cy - PADDING - prevPos.y) / prevScale;
        return {
          x: cx - PADDING - worldX * newScale,
          y: cy - PADDING - worldY * newScale,
        };
      });
      return newScale;
    });
  }, []);

  const onWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const delta = e.deltaY > 0 ? -0.12 : 0.12;
    zoomAt(cx, cy, delta);
  }, [zoomAt]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", onWheel as EventListener, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as EventListener);
  }, [onWheel]);

  // Medir dimensões naturais do SVG (naturalWidth/Height ou viewBox)
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const update = () => {
      const w = img.naturalWidth || 0;
      const h = img.naturalHeight || 0;
      if (w && h) {
        setImgSize({ w, h });
        return;
      }
      const src = img.getAttribute("src");
      if (!src) return;
      fetch(src)
        .then((r) => r.text())
        .then((svg) => {
          const m = svg.match(/viewBox=\"([\d\.\s-]+)\"/);
          if (m && m[1]) {
            const parts = m[1].trim().split(/\s+/).map(Number);
            if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
              setImgSize({ w: parts[2], h: parts[3] });
            }
          }
        })
        .catch(() => {});
    };
    if (img.complete) update();
    else img.addEventListener("load", update as EventListener, { once: true });
  }, []);

  // Aplica foco inicial nas Américas (frações relativas ao SVG)
  const fitToContainer = useCallback(() => {
    const el = containerRef.current;
    if (!el || !imgSize.w || !imgSize.h) return;
    const cw = Math.max(0, el.clientWidth - PADDING * 2);
    const ch = Math.max(0, el.clientHeight - PADDING * 2);
    if (cw === 0 || ch === 0) return;

    // Frações aproximadas do centro e caixa de foco (Américas)
    // Em telas estreitas ajustamos o centro mais à ESQUERDA
    const width = el.clientWidth;
    const isVeryNarrow = width <= 391;
    const isNarrow = width <= 461;
    const focus = isVeryNarrow
      ? { cxFrac: 0.60, cyFrac: 0.95, wFrac: 0.45, hFrac: 0.45 }
      : isNarrow
      ? { cxFrac: 0.35, cyFrac: 0.88, wFrac: 0.45, hFrac: 0.45 }
      : { cxFrac: 0.20, cyFrac: 0.5, wFrac: 0.45, hFrac: 0.45 };

    const target = clampScale(
      Math.min(cw / (imgSize.w * focus.wFrac), ch / (imgSize.h * focus.hFrac))
    );

    const worldCX = imgSize.w * focus.cxFrac;
    const worldCY = imgSize.h * focus.cyFrac;
    const screenCX = cw / 2;
    const screenCY = ch / 2;

    const posX = screenCX - worldCX * target;
    const posY = screenCY - worldCY * target;
    setScale(target);
    setPos({ x: posX, y: posY });
    baseViewRef.current = { scale: target, pos: { x: posX, y: posY } };
    setIsZoomed(false);
  }, [imgSize.w, imgSize.h]);

  useEffect(() => {
    if (!imgSize.w || !imgSize.h) return;
    fitToContainer();
  }, [imgSize.w, imgSize.h, fitToContainer]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => fitToContainer());
    ro.observe(el);
    return () => ro.disconnect();
  }, [fitToContainer]);

  const startDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    // Registrar ponteiro
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Iniciar pinch quando houver 2 toques
    if (pointersRef.current.size === 2) {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pts = Array.from(pointersRef.current.values()) as { x: number; y: number }[];
      const dx = (pts[1].x - pts[0].x);
      const dy = (pts[1].y - pts[0].y);
      const dist = Math.hypot(dx, dy);
      const cx = ((pts[0].x + pts[1].x) / 2) - rect.left; // centro relativo ao container
      const cy = ((pts[0].y + pts[1].y) / 2) - rect.top;
      pinchRef.current = { pinching: true, startDistance: dist, startScale: scale, center: { x: cx, y: cy } };
      dragRef.current.dragging = false; // não fazer pan durante pinch
      return;
    }

    // Pan apenas com zoom ativo e apenas com 1 toque
    if (!isZoomed || pointersRef.current.size !== 1) return;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    dragRef.current.dragging = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
    dragRef.current.origX = pos.x;
    dragRef.current.origY = pos.y;
  };

  const onDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    // Atualizar posição do ponteiro
    if (pointersRef.current.has(e.pointerId)) {
      pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    }

    // Pinch-zoom em andamento
    if (pinchRef.current.pinching && pointersRef.current.size >= 2) {
      const el = containerRef.current;
      if (!el) return;
      const pts = Array.from(pointersRef.current.values());
      const dx = (pts[1].x - pts[0].x);
      const dy = (pts[1].y - pts[0].y);
      const dist = Math.hypot(dx, dy);
      const factor = dist / Math.max(1, pinchRef.current.startDistance);
      const targetScale = clampScale(pinchRef.current.startScale * factor);
      const cx = pinchRef.current.center.x;
      const cy = pinchRef.current.center.y;

      setScale((prevScale) => {
        const newScale = targetScale;
        setPos((prevPos) => {
          const worldX = (cx - PADDING - prevPos.x) / prevScale;
          const worldY = (cy - PADDING - prevPos.y) / prevScale;
          return {
            x: cx - PADDING - worldX * newScale,
            y: cy - PADDING - worldY * newScale,
          };
        });
        if (baseViewRef.current) {
          setIsZoomed(newScale > baseViewRef.current.scale + 0.02);
        }
        return newScale;
      });
      return;
    }

    // Pan
    if (!dragRef.current.dragging) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    setPos({ x: dragRef.current.origX + dx, y: dragRef.current.origY + dy });
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    // Remover ponteiro
    pointersRef.current.delete(e.pointerId);
    // Encerrar pinch quando menos de 2 toques
    if (pinchRef.current.pinching && pointersRef.current.size < 2) {
      pinchRef.current.pinching = false;
    }
    dragRef.current.dragging = false;
    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const zoomIn = () => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    zoomAt(rect.width / 2, rect.height / 2, 0.2);
  };
  const zoomOut = () => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    zoomAt(rect.width / 2, rect.height / 2, -0.2);
  };
  const resetView = () => {
    fitToContainer();
  };

  // Toggle de zoom: clique 1 aplica zoom intenso; clique 2 restaura a view base
  const toggleZoom = () => {
    const el = containerRef.current;
    if (!el || !imgSize.w || !imgSize.h) return;
    const cw = Math.max(0, el.clientWidth - PADDING * 2);
    const ch = Math.max(0, el.clientHeight - PADDING * 2);
    const screenCX = cw / 2;
    const screenCY = ch / 2;

    // Foco na América do Sul (com destaque para Brasil + cone sul)
    // Ajuste fino: cxFrac (↔), cyFrac (↕), wFrac/hFrac (intensidade do zoom)
    const focus = { cxFrac: -0.04, cyFrac: 0.40, wFrac: 0.12, hFrac: 0.12 };

    if (isZoomed) {
      if (baseViewRef.current) {
        setScale(baseViewRef.current.scale);
        setPos(baseViewRef.current.pos);
      } else {
        fitToContainer();
      }
      setIsZoomed(false);
      return;
    }

    const target = clampScale(
      Math.min(cw / (imgSize.w * focus.wFrac), ch / (imgSize.h * focus.hFrac))
    );
    const worldCX = imgSize.w * focus.cxFrac;
    const worldCY = imgSize.h * focus.cyFrac;
    const posX = screenCX - worldCX * target;
    const posY = screenCY - worldCY * target;
    setScale(target);
    setPos({ x: posX, y: posY });
    setIsZoomed(true);
  };

  const itens: { id: number; texto: string }[] = [
    { id: 1, texto: "Milícia de Darfur queima 17 aldeias, confisca fontes de água e desloca civis em Bielel, Darfur do Sul, no Sudão." },
    { id: 2, texto: "Conflito pelo abastecimento de água na África do Sul causa tiroteios e feridos." },
    { id: 3, texto: "As forças russas bombardeiam a região de Kherson, causando danos a infraestruturas civis, condutas de água e instalações industriais." },
    { id: 4, texto: "As forças israelitas danificam e destroem vários sistemas de água em uma área agrícola na Cisjordânia." },
    { id: 5, texto: "Militantes em Burkina Faso atacam uma vila e causam múltiplas mortes, destruindo uma torre de água em um centro médico." },
    { id: 6, texto: "As forças Houthi sequestram 72 civis, incluindo 15 crianças, e impõem bloqueio em Shib al Maahirah, Jabal al Mukaydam e Al Kha." },
    { id: 7, texto: "Rússia destrói a barragem do reservatório de Karliv, na região de Donetsk, na Ucrânia." },
    { id: 8, texto: "Uma morte e uma pessoa ferida são relatadas em disputa pela água na aldeia de Sabih, no Iêmen." },
    { id: 9, texto: "Vários confrontos na fronteira Irã-Afeganistão sobre direitos e acesso à água resultam em mortes, feridos e destruição de propriedades." },
    { id: 10, texto: "Dois civis ficam feridos em disputa sobre bombeamento de águas subterrâneas no Iraque." },
    { id: 11, texto: "Civis que buscavam água em uma bomba de água são atingidos por um dispositivo explosivo em uma vila em Burkina Faso, resultando em morte." },
    { id: 12, texto: "Forças russas bombardeiam Uhroyidy na região de Sumy, na Ucrânia, danificando uma torre de água." },
    { id: 13, texto: "Ataques aos sistemas de água na Etiópia." },
    { id: 14, texto: "Ataque terrorista local a instalações hidrelétricas nos Estados Unidos." },
    { id: 15, texto: "Colonos israelenses vandalizam redes de abastecimento de água de agricultores palestinos na área de Al Sahel, na Cisjordânia." },
    { id: 16, texto: "Trabalhadores de uma estação de água no Sudão são sequestrados, resultando em escassez de água." },
    { id: 17, texto: "Colonos israelenses apreendem um poço de água perto de Hebron, na Cisjordânia, impedindo o acesso palestino." },
    { id: 18, texto: "A enorme barragem de Kakhovka, no rio Dnipro, é destruída, causando enormes consequências a montante e a jusante." },
    { id: 19, texto: "Rússia destrói uma barragem no rio Mokri Yali." },
    { id: 20, texto: "Violência no Sudão corta abastecimento de água e eletricidade em Cartum." },
    { id: 21, texto: "Forças israelenses despejam concreto em poço palestino em Hebron, na Cisjordânia, para interromper a irrigação." },
    { id: 22, texto: "Um sistema de abastecimento de água em Kharkiv, na Ucrânia, foi danificado em um ataque de mísseis inimigos no final de setembro, cortando a água de um hospital." },
    { id: 23, texto: "Israel lança ataques retaliatórios a Gaza após o ataque do Hamas a Israel em outubro, incluindo ataques a poços de água e bombeamento de água." },
  ];

  // Classes dinâmicas para espaçamento do topo
  const topPadClass = topSpacing === 'veryNarrow' ? 'pt-0' : topSpacing === 'narrow' ? 'pt-1' : 'pt-4 md:pt-8';
  const titleMarginClass = topSpacing === 'veryNarrow' ? 'mt-4 mb-4' : topSpacing === 'narrow' ? 'mt-4 mb-4' : 'mt-1 md:mt-2 mb-3 md:mb-4';

  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen mx-auto" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Lona central responsiva */}
      <div className="w-full relative min-h-screen flex justify-center">
        {/* Background degradê 100% responsivo (conforme Figma) */}
        <div className="absolute inset-0" aria-hidden>
          {/* Base branca */}
          <div className="w-full h-full" style={{ background: "#FFFFFF" }} />
          {/* Gradiente superior azul claro desvanecendo para branco */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #275797 0%, #FFFFFF 10%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
        </div>

        {/* Conteúdo principal responsivo (expande até desktop) */}
        <div className={`relative z-10 w-full max-w-[992px] mx-auto px-4 md:px-6 mt-[120px] pb-8 min-h-screen flex flex-col`}>

          {/* Título centralizado conforme Figma */}
          <h1 className={`mt-4 mb-4 text-center text-[17px] font-extrabold font-nunito leading-[1.2] text-[#09163C]`}>
            ATUAIS CONFLITOS POR ÁGUA NO PLANETA
          </h1>

          {/* Mapa com zoom/pan (fora de InfoCard) */}
          <div className="relative w-full min-h-[380px] md:min-h-[560px] lg:min-h-[620px] xl:min-h-[680px]">
            {/* Área interativa do mapa */}
            <div
              ref={containerRef}
              className="absolute inset-0 overflow-hidden rounded-[16px] touch-none"
              style={{ padding: containerPad }}
              onPointerDown={startDrag}
              onPointerMove={onDrag}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            >
              <div
                className="origin-center touch-none select-none"
                style={{
                  width: imgSize.w ? `${imgSize.w}px` : "100%",
                  height: imgSize.h ? `${imgSize.h}px` : "100%",
                  transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
                  transformOrigin: "center center",
                }}
              >
                <img
                  ref={imgRef}
                  src="/assets/images/conflitos-hidricos/mapa.svg"
                  alt="Mapa mundi de conflitos por água"
                  className="w-full h-full object-contain pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Botão de lupa com + (toggle zoom), canto inferior esquerdo */}
              <button
                onClick={toggleZoom}
                className="absolute left-5 bottom-5 w-12 h-12 rounded-full bg-white shadow-[0px_2px_3.6px_rgba(0,0,0,0.65)] border border-[#09163C]/20 flex items-center justify-center active:translate-y-px lg:hidden"
                aria-label="Alternar zoom"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="7" stroke="#09163C" strokeWidth="2"/>
                  <line x1="20" y1="20" x2="16.5" y2="16.5" stroke="#09163C" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="11" y1="8" x2="11" y2="14" stroke="#09163C" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="8" y1="11" x2="14" y2="11" stroke="#09163C" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Lista de cards (1–23) usando InfoCard/InfoCardTitle */}
          <div className="mt-6 flex flex-col gap-4 mb-6">
            {itens.map((item) => {
              const topicoData = topicosData.find((t) => t.id === item.id);
              const isSelected = ultimoTopicoClicado === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (item.id <= 23) {
                      setModalAberto(item.id);
                      setUltimoTopicoClicado(item.id);
                    }
                  }}
                  className={`${
                    item.id <= 23 ? "cursor-pointer" : ""
                  } transition-opacity duration-200`}
                  style={{
                    opacity: isSelected ? 0.6 : 1,
                  }}
                >
                  <InfoCard
                    containerBg={isSelected ? "#3d4563" : "#51618D"}
                    innerBg={isSelected ? "#b8d9e8" : "#DEF3FB"}
                    innerBorder="#09163C"
                  >
                    <InfoCardTitle>
                      {item.id}. {item.texto}
                    </InfoCardTitle>
                  </InfoCard>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/assets/images/conflitos-hidricos/infoclick.svg"
              alt="Info Clique"
              width={321}
              height={100}
            />
          </div>

          {/* Footer navegação */}
          <FooterNavegacao onVoltar={handleVoltar} onAvancar={handleAvancar} className="mt-6" />
        </div>
      </div>

      {/* Modal Overlay */}
      {modalAberto !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto flex justify-center">
          {(() => {
            const topico = topicosData.find((t) => t.id === modalAberto);
            if (!topico) return null;
            return (
              <ModalContent
                id={topico.id}
                titulo={topico.titulo}
                descricao={topico.descricao}
                mapaSrc={topico.mapaSrc}
                imagemSrc={topico.imagemSrc}
                imagemAlt={topico.imagemAlt}
                mapOffset={topico.mapOffset}
                onClose={() => setModalAberto(null)}
              />
            );
          })()}
        </div>
      )}
    </div>
  );
}
