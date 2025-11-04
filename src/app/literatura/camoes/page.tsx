"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import DraggableCanvas from "./components/DraggableCanvas";
import PoemCard from "./components/PoemCard";
import PoemModal from "./components/PoemModal";

const ebGaramond = EB_Garamond({ subsets: ["latin"], weight: ["400", "800"], style: ["normal", "italic"] });

// Dados dos modais
const modalData = {
  modal1: {
    title: "Contradições do amor: entre o amar e o querer",
    content: "Para o poeta, o amor deve ir além da atração pelo físico, deve ser um sentido em toda a sua essência, transcendendo o patamar do querer.",
  },
  modal2: {
    title: "Saudade metafísica: tempo e eternidade.",
    content: "Nessa temática, Luís de Camões reflete sobre os elementos da vida neste plano, em que sucumbimos aos desejos humanos, e a possibilidade de atingirmos a essência dos puros sentimentos no plano eterno. Neste soneto, ele lamenta pela perda da pessoa amada e clama para não ser esquecido no Céu.",
  },
  modal3: {
    title: "A lírica reflexiva",
    content: "Camões falou não apenas dos sentimentos e impressões pessoais, mas também refletiu sobre as dificuldades enfrentadas pela nação, dando voz aos dilemas universais enfrentados pelo ser humano em sua jornada na Terra.",
  },
};

export default function CamoesPage() {
  const [startProgress, setStartProgress] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setStartProgress(true);
  }, []);

  const handleNavigateUp = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/literatura");
  };

  const handleNavigateDown = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/literatura/camoes/final");
  };

  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden bg-[#681C1C]">
      {/* Barra de Progresso Superior */}
      <div className="w-full max-w-[355px] flex justify-between items-center gap-4 mb-4 relative z-20 px-6 pt-4">
        {/* Barra 1 - Completa */}
        <div className="w-[110px] h-1 bg-[#C3AC7C] rounded-full"></div>
        
        {/* Barra 2 - Preenchida (Página Atual) com animação */}
        <div className={`w-[110px] h-1 bg-[#989494] rounded-full relative overflow-hidden progress-track ${startProgress ? 'start' : ''}`}>
          <div
            key={startProgress ? 'progress-on' : 'progress-off'}
            className="absolute left-0 top-0 h-full bg-[#C3AC7C] rounded-full progress-fill"
            style={startProgress ? ({ animation: 'progressFill 6s linear forwards' } as React.CSSProperties) : undefined}
            onAnimationEnd={() => { try { console.debug('progress animation ended'); } catch { } }}
          />
        </div>

        {/* Barra 3 - Vazia (Próxima Página) */}
        <div className="w-[110px] h-1 bg-[#989494] rounded-full"></div>
      </div>

      {/* Botões de Navegação */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={handleNavigateUp}
          className="cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <div className="w-10 h-10 bg-[#C3AC7C]/90 rounded-full flex items-center justify-center shadow-lg">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7L7 1L13 7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>

      {/* Draggable Canvas com Cards */}
      <DraggableCanvas width={1200} height={1400}>
        {/* Card Principal - Camões */}
        <div
          className="absolute left-[200px] top-[100px] w-[450px] flex flex-col items-center z-10"
          style={{ pointerEvents: "auto" }}
        >
          {/* SVG de fundo decorativo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[434px] h-[421px] pointer-events-none -z-10">
            <Image
              src="/assets/images/literatura/bg-screen-2.svg"
              alt="Background decorativo"
              width={434}
              height={421}
              className="w-full h-full opacity-80"
            />
          </div>
          
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-[#C3AC7C] mb-6">
            <Image
              src="/assets/images/literatura/face1.png"
              alt="Luís Vaz de Camões"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <p className={`${ebGaramond.className} text-white text-center text-[18px] leading-[1.2em] mb-6 max-w-[274px]`}>
            <span className="font-bold">Luís Vaz de Camões</span> foi um autor português. No período Renascentista, este foi o autor mais influente do período, tornando-se famoso, também, pelos aspectos temáticos explorados em sua lírica.
          </p>
          <div className="bg-white rounded-[20px] px-6 py-3 flex items-center gap-3 shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={`${ebGaramond.className} text-black font-semibold text-[16px]`}>
              Mova para os lados
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Poem Cards */}
        <PoemCard
          title="Amor é fogo que arde sem se ver"
          content="Amor é um fogo que arde sem se ver, <br /> é ferida que dói, e não se sente; <br /> é um contentamento descontente, <br /> é dor que desatina sem doer. <br /> <br />É um não querer mais que bem querer; <br /> é um andar solitário entre a gente; <br /> é nunca contentar-se de contente; <br /> é um cuidar que ganha em se perder."
          x={-20}
          y={-380}
          width={340}
          height={420}
          modalId="modal1"
          onZoomClick={() => setOpenModal("modal1")}
        />

        <PoemCard
          title="Principais características da lírica camoniana"
          content="<ul style='list-style-type: disc; margin-left: 1.5em; line-height: 1.7em;'><li>Escrita de determinados nomes em letra maiúscula (Amor, Beleza e Mulher) como forma de marcar a busca pelo ideal absoluto de tais conceitos.</li><li>Apresenta métrica, rima e ritmo.</li><li>Uso de formas clássicas, como soneto, ode, entre outras.</li><li>Uso de figuras de linguagem, como metáforas, paradoxos, aliteração e outras.</li></ul>"
          x={-280}
          y={200}
          width={340}
          height={420}
        />

        <PoemCard
          title="Alma minha gentil, que te partiste"
          content="Alma minha gentil, que te partiste<br /> tão cedo desta vida descontente, <br /> repousa lá no Céu eternamente, <br /> e viva eu cá na terra sempre triste.<br /> Se lá no assento etéreo, onde subiste,<br /> memória desta vida se consente,<br /> não te esqueças daquele amor ardente<br /> que já nos olhos meus tão puro viste.<br /> [...]."
          x={680}
          y={-80}
          width={340}
          height={420}
          modalId="modal2"
          onZoomClick={() => setOpenModal("modal2")}
        />

        <PoemCard
          title="Mudam-se os tempos, mudam-se as vontades"
          content="Mudam-se os tempos, mudam-se as vontades,<br /> Muda-se o ser, muda-se a confiança; <br /> Todo o mundo é composto de mudança, <br /> Tomando sempre novas qualidades. <br /><br /> Continuamente vemos novidades, <br /> Diferentes em tudo da esperança; <br /> Do mal ficam as mágoas na lembrança, <br /> E do bem (se algum houve), as saudades.<br /><br />[...]"
          x={480}
          y={580}
          width={340}
          height={420}
          modalId="modal3"
          onZoomClick={() => setOpenModal("modal3")}
        />
      </DraggableCanvas>

      {/* Botão Chevron Baixo */}
      <button
        onClick={handleNavigateDown}
        className="cursor-pointer hover:scale-105 transition-transform duration-200 absolute bottom-20 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-10 h-10 bg-[#C3AC7C]/90 rounded-full flex items-center justify-center shadow-lg">
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>

      {/* Modais */}
      <PoemModal
        isOpen={openModal === "modal1"}
        onClose={() => setOpenModal(null)}
        title={modalData.modal1.title}
        content={modalData.modal1.content}
      />
      <PoemModal
        isOpen={openModal === "modal2"}
        onClose={() => setOpenModal(null)}
        title={modalData.modal2.title}
        content={modalData.modal2.content}
      />
      <PoemModal
        isOpen={openModal === "modal3"}
        onClose={() => setOpenModal(null)}
        title={modalData.modal3.title}
        content={modalData.modal3.content}
      />

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
