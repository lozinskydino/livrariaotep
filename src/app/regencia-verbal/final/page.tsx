"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

export default function RegenciaVerbalFinalPage() {
  const [startProgress, setStartProgress] = useState(false);

  useEffect(() => {
    setStartProgress(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF7E8] flex flex-col items-center px-6 py-8 relative">
      {/* Barra de Progresso Superior - na tela final a barra da esquerda fica cheia e a da direita anima */}
      <div className="w-full max-w-[355px] flex justify-between items-center gap-4 mb-8">
        {/* Barra 1 - Cheia (Página anterior concluída) */}
        <div className="w-[169px] h-1 bg-[#989494] rounded-full relative overflow-hidden">
          <div className="w-full h-full bg-[#E67E22] rounded-full" />
        </div>
        
        {/* Barra 2 - Animada (Página atual) */}
        <div className={`w-[169px] h-1 bg-[#989494] rounded-full relative overflow-hidden progress-track ${startProgress ? 'start' : ''}`}>
          <div
            key={startProgress ? 'progress-on' : 'progress-off'}
            className="absolute left-0 top-0 h-full bg-[#E67E22] rounded-full progress-fill"
            style={startProgress ? ({ animation: 'progressFill 6s linear forwards' } as React.CSSProperties) : undefined}
          />
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="w-full max-w-[374px] flex flex-col items-center gap-8">
        {/* Título e Texto conforme Figma */}
        <div className="text-center space-y-4 w-full">
          <h1 className={`${inter.className} font-semibold text-2xl text-[#E67E22]`}>Regência Verbal</h1>
          <h2 className={`${inter.className} font-semibold text-[22px] md:text-[26px] leading-[28px] md:leading-8 text-[#2C3E50] text-left`}>Viu só?</h2>
          <p className={`${inter.className} font-normal text-[14px] leading-[20px] text-[#2C3E50] text-left`}>
            Em relação ao estudo da Língua Portuguesa, a regência verbal é importante para nos ajudar a compreender melhor um enunciado e ligar uma expressão ao termo complementar. Seu aprendizado possibilita entender a que termo uma expressão se refere, evitando ambiguidades e complicações.
          </p>
        </div>

        {/* Chevron central reutilizando o mesmo SVG com rotação 180° */}
        <Link
          href="/regencia-verbal"
          prefetch
          className="cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <Image
            src="/assets/images/regencia-verbal/final-confetti.svg"
            alt="Confete"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          />
        </Link>
      </div>

      {/* Estilos globais para animação da barra (stories) */}
      <style jsx global>{`
        .progress-fill { width: 0; will-change: width; }
        .progress-track.start .progress-fill { animation: progressFill 6s linear forwards; }
        .progress-track:hover .progress-fill { animation-play-state: paused; }
        @keyframes progressFill { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </div>
  );
}
