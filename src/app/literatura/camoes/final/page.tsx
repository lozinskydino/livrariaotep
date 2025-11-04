"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({ subsets: ["latin"], weight: ["400", "800"], style: ["normal", "italic"] });

export default function CamoesFinalPage() {
  const [startProgress, setStartProgress] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setStartProgress(true);
  }, []);

  const handleNavigateUp = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/literatura/camoes");
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center px-6 py-8 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/images/literatura/background-image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay vermelho para criar o filtro sobre a imagem */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#720A0A]/90 to-[#681C1C]/90 z-0"></div>
      
      {/* Barra de Progresso Superior */}
      <div className="w-full max-w-[355px] flex justify-between items-center gap-4 mb-8 relative z-10">
        {/* Barra 1 - Completa */}
        <div className="w-[110px] h-1 bg-[#C3AC7C] rounded-full"></div>
        
        {/* Barra 2 - Completa */}
        <div className="w-[110px] h-1 bg-[#C3AC7C] rounded-full"></div>

        {/* Barra 3 - Preenchida (Página Atual) com animação */}
        <div className={`w-[110px] h-1 bg-[#989494] rounded-full relative overflow-hidden progress-track ${startProgress ? 'start' : ''}`}>
          <div
            key={startProgress ? 'progress-on' : 'progress-off'}
            className="absolute left-0 top-0 h-full bg-[#C3AC7C] rounded-full progress-fill"
            style={startProgress ? ({ animation: 'progressFill 6s linear forwards' } as React.CSSProperties) : undefined}
            onAnimationEnd={() => { try { console.debug('progress animation ended'); } catch { } }}
          />
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="w-full max-w-[374px] flex flex-col items-center justify-center relative flex-1 z-10">

        {/* Seção de Texto */}
        <div className="space-y-6 relative z-10">

          
          <div className="space-y-4">
            <p className={`${ebGaramond.className} text-[20px] font-normal text-white leading-[1.05em]`}>
              Como pudemos ver, Luís de Camões buscou, em sua lírica, refletir sobre a importância de se experienciar os sentimentos em sua essência, buscando chegar ao nível mais sublime e elevado destes e fugir das sensações rasas, carnais. Essas reflexões de caráter filosófico enriqueceram o período literário em questão e marcaram a literatura mundial.
            </p>
          </div>
        </div>

        {/* Botão de Seta para Cima */}
        <div className="mt-8 relative z-10">
          <button
            onClick={handleNavigateUp}
            className="cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center justify-center"
          >
            <Image
              src="/assets/images/literatura/chevron-cima.svg"
              alt="Voltar"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>

      {/* Estilos da animação de progresso */}
      <style jsx global>{`
        .progress-fill {
          width: 0;
          will-change: width;
        }

        .progress-track.start .progress-fill {
          animation: progressFill 6s linear forwards;
        }

        .progress-track:hover .progress-fill {
          animation-play-state: paused;
        }

        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
