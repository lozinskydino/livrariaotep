"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import BotaoVoltar from "../components/BotaoVoltar";
import BotaoAvancar from "../components/BotaoAvancar";
import ForcaMagneticaModal from "../components/ForcaMagneticaModal";
import VentoSolarModal from "../components/VentoSolarModal";
import AuroraBorealModal from "../components/AuroraBorealModal";
import AuroraAustralModal from "../components/AuroraAustralModal";

export default function ForcaMagneticaTerra() {
  const router = useRouter();
  const [selectedButton, setSelectedButton] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVentoSolarModalOpen, setIsVentoSolarModalOpen] = useState(false);
  const [isAuroraBorealModalOpen, setIsAuroraBorealModalOpen] = useState(false);
  const [isAuroraAustralModalOpen, setIsAuroraAustralModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const buttons = [
    {
      id: 0,
      text: "força magnética",
      bgColor: "#A03BB1",
      bgSecondary: "#FDC0FF",
      textColor: "#A03BB1",
      position: { x: 260.65, y: 235.15 },
      width: 251,
      height: 67,
    },
    {
      id: 1,
      text: "Aurora boreal",
      bgColor: "#FFB213",
      bgSecondary: "#FFEE88",
      textColor: "#EC8F14",
      position: { x: 631.65, y: 119.15 },
      width: 229,
      height: 67,
    },
    {
      id: 2,
      text: "Aurora austral",
      bgColor: "#FFB213",
      bgSecondary: "#FFEE88",
      textColor: "#EC8F14",
      position: { x: 634.65, y: 440 },
      width: 243,
      height: 67,
    },
    {
      id: 3,
      text: "VENTO SOLAR E A FORMAÇÃO\nDAS AURORAS POLARES",
      bgColor: "#FFB213",
      bgSecondary: "#FFEE88",
      textColor: "#EC8F14",
      position: { x: 250.65, y: 270 },
      width: 369,
      height: 94,
    },
  ];

  const vectors = [
    { src: "/assets/figma/vector-1.png", position: { x: 326.65, y: 329.15 }, width: 130.49, height: 116.3 },
    { src: "/assets/figma/vector-2.png", position: { x: 235, y: 119 }, width: 135.8, height: 100.59 },
    { src: "/assets/figma/vector-3.png", position: { x: 879.79, y: 125.97 }, width: 133.58, height: 150.75 },
    { src: "/assets/figma/vector-4.png", position: { x: 886.65, y: 593.15 }, width: 153.41, height: 118.99 },
  ];

  const handleButtonClick = (e: React.MouseEvent, buttonId: number) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedButton(buttonId);

    // Se for o botão de força magnética (id: 0), abrir o modal
    if (buttonId === 0) {
      setIsModalOpen(true);
    }
    // Se for o botão de aurora boreal (id: 1), abrir o modal da aurora boreal
    else if (buttonId === 1) {
      console.log("Abrindo modal Aurora Boreal");
      setIsAuroraBorealModalOpen(true);
    }
    // Se for o botão de aurora austral (id: 2), abrir o modal da aurora austral
    else if (buttonId === 2) {
      console.log("Abrindo modal Aurora Austral");
      setIsAuroraAustralModalOpen(true);
    }
    // Se for o botão de vento solar (id: 3), abrir o modal do vento solar
    else if (buttonId === 3) {
      setIsVentoSolarModalOpen(true);
    }

    console.log(`Botão ${buttonId} clicado:`, buttons[buttonId].text);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleVoltarClick = () => {
    router.back();
  };

  const handleAvancarClick = () => {
    // Navigate to next page or perform action
    router.push("/forca-magnetica/final");
  };

  return (
    <div className="relative w-full max-w-[393px] min-h-screen mx-auto bg-black overflow-hidden">
      {/* Container com scroll horizontal */}
      <div ref={scrollContainerRef} className="relative w-full h-screen overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        {/* Imagem de fundo da Terra */}
        <div className="relative" style={{ width: "1176px", height: "852px" }}>
          <Image
            src="/assets/figma/terra-background.png"
            alt="Terra"
            fill
            className="object-cover object-center"
            style={{
              minHeight: "100vh",
            }}
          />

          {/* Overlay de gradiente */}
          <div
            className="absolute inset-0 h-screen"
            style={{
              background: "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,1) 100%)",
            }}
          />

          {/* Vetores SVG */}
          {vectors.map((vector, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${vector.position.x}px`,
                top: `${vector.position.y}px`,
                width: `${vector.width}px`,
                height: `${vector.height}px`,
              }}>
              <Image src={vector.src} alt={`Vector ${index + 1}`} fill className="object-contain" />
            </div>
          ))}

          {/* Botões interativos */}
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={(e) => handleButtonClick(e, button.id)}
              className="absolute flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 border-4 border-white rounded-full shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)] relative overflow-hidden"
              style={{
                left: `${button.position.x}px`,
                top: `${button.position.y}px`,
                width: `${button.width}px`,
                height: `${button.height}px`,
                backgroundColor: button.id === 0 ? "#6829A8" : "#E6A500",
                padding: button.id === 3 ? "20px 10px" : "20px",
              }}>
              {/* Background overlay */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  left: "1.01px",
                  top: "0px",
                  width: "calc(100% - 3px)",
                  height: "calc(100% - 4px)",
                  backgroundColor: button.id === 0 ? "#E8B3FF" : "#FFF176",
                }}
              />

              {/* Texto do botão */}
              <span className="relative z-10 font-nunito font-black text-xl leading-[1.364] tracking-[0.04em] uppercase text-center whitespace-pre-line" style={{ color: button.id === 0 ? "#6829A8" : "#E6A500" }}>
                {button.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center gap-6">
        <BotaoVoltar onClick={handleVoltarClick} />
        <BotaoAvancar onClick={handleAvancarClick} />
      </div>

      {/* Elemento 'mova para o lado' fixo no topo */}
      <div className="absolute top-[45px] z-20 flex items-center justify-center w-full">
        <img src="/assets/icons/Cursor.png" alt="Elemento" />
        <img src="/assets/images/top-text.svg" alt="" />
      </div>

      {/* Modal de Força Magnética */}
      <ForcaMagneticaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Modal de Vento Solar */}
      <VentoSolarModal isOpen={isVentoSolarModalOpen} onClose={() => setIsVentoSolarModalOpen(false)} />

      {/* Modal de Aurora Boreal */}
      <AuroraBorealModal
        isOpen={isAuroraBorealModalOpen}
        onClose={() => {
          setIsAuroraBorealModalOpen(false);
        }}
      />

      {/* Modal de Aurora Austral */}
      <AuroraAustralModal
        isOpen={isAuroraAustralModalOpen}
        onClose={() => {
          setIsAuroraAustralModalOpen(false);
        }}
      />
    </div>
  );
}
