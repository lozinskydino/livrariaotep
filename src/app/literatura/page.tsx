"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({ subsets: ["latin"], weight: ["400", "800"], style: ["normal", "italic"] });

export default function LiteraturaPage() {
  const [startProgress, setStartProgress] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setStartProgress(true);
  }, []);

  const handleNavigate = (e: React.MouseEvent) => {
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
        {/* Barra 1 - Preenchida (Página Atual) com animação */}
        <div className={`w-[110px] h-1 bg-[#989494] rounded-full relative overflow-hidden progress-track ${startProgress ? 'start' : ''}`}>
          <div
            key={startProgress ? 'progress-on' : 'progress-off'}
            className="absolute left-0 top-0 h-full bg-[#C3AC7C] rounded-full progress-fill"
            style={startProgress ? ({ animation: 'progressFill 6s linear forwards' } as React.CSSProperties) : undefined}
            onAnimationEnd={() => { try { console.debug('progress animation ended'); } catch { } }}
          />
        </div>
        
        {/* Barra 2 - Vazia (Próxima Página) */}
        <div className="w-[110px] h-1 bg-[#989494] rounded-full"></div>

        {/* Barra 3 - Vazia (Próxima Página) */}
        <div className="w-[110px] h-1 bg-[#989494] rounded-full"></div>
      </div>

      {/* Conteúdo Principal */}
      <div className="w-full max-w-[374px] flex flex-col items-center gap-8 relative flex-1 z-10">

        {/* Seção de Texto */}
        <div className="space-y-6 mt-12 relative z-10">
          <h1 className={`${ebGaramond.className} italic text-[35px] font-extrabold text-[#C3AC7C] leading-[1.002738516671317em]`}>
            Introdução
          </h1>
          
          <div className="space-y-4">
            <p className={`${ebGaramond.className} text-[20px] font-normal text-white leading-[1.05em]`}>
              O Classicismo ou Renascimento foi um período muito rico na Literatura. Entre os principais autores está <span className="font-bold">Luís Vaz de Camões</span>, um dos nomes mais conhecidos da Literatura Portuguesa, que inovou as formas poéticas com seu modo de ver o mundo.
            </p>
            
            <p className={`${ebGaramond.className} text-[20px] font-normal text-white leading-[1.05em]`}>
              Apesar de muito conhecido, quais seriam os principais eixos temáticos explorados pelo poeta? Como ele entendia as questões sentimentais e humanas? Veja neste mapa interativo os principais aspectos da lírica camoniana para abrilhantar suas futuras análises.
            </p>
          </div>
        </div>

        {/* Botão de Seta para Baixo */}
        <div className="mt-auto mb-8 relative z-10">
          <button
            onClick={handleNavigate}
            className="cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center justify-center"
          >
            <Image
              src="/assets/images/literatura/chevron-baixo.svg"
              alt="Continuar"
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
