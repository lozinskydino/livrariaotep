"use client";

import { Inter, Noto_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AssistirModal from "./components/AssistirModal";
import ReflexaoAssistirModal from "./components/ReflexaoAssistirModal";
import AspirarModal from "./components/AspirarModal";
import ReflexaoAspirarModal from "./components/ReflexaoAspirarModal";
import ImplicarModal from "./components/ImplicarModal";
import ChamarModal from "./components/ChamarModal";
import AgradarModal from "./components/AgradarModal";
import IrOuChegarModal from "./components/IrOuChegarModal";
import ReflexaoAgradarModal from "./components/ReflexaoAgradarModal";
import PrecisarModal from "./components/PrecisarModal";
import RepararModal from "./components/RepararModal";
import ReflexaoRepararModal from "./components/ReflexaoRepararModal";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });
const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export default function RegenciaVerbalPage() {
  const [startProgress, setStartProgress] = useState(false);
  const [isAssistirOpen, setIsAssistirOpen] = useState(false);
  const [isReflexaoOpen, setIsReflexaoOpen] = useState(false);
  const [isAspirarOpen, setIsAspirarOpen] = useState(false);
  const [isReflexaoAspirarOpen, setIsReflexaoAspirarOpen] = useState(false);
  const [isImplicarOpen, setIsImplicarOpen] = useState(false);
  const [isChamarOpen, setIsChamarOpen] = useState(false);
  const [isIrOuChegarOpen, setIsIrOuChegarOpen] = useState(false);
  const [isAgradarOpen, setIsAgradarOpen] = useState(false);
  const [isReflexaoAgradarOpen, setIsReflexaoAgradarOpen] = useState(false);
  const [isPrecisarOpen, setIsPrecisarOpen] = useState(false);
  const [isRepararOpen, setIsRepararOpen] = useState(false);
  const [isReflexaoRepararOpen, setIsReflexaoRepararOpen] = useState(false);

  useEffect(() => {
    // Ativa a animação após montagem no cliente
    setStartProgress(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF7E8] flex flex-col items-center px-6 py-8 relative">
      {/* Barra de Progresso Superior */}
      <div className="w-full max-w-[355px] flex justify-between items-center gap-4 mb-8">
        {/* Barra 1 - Preenchida (Página Atual) com animação */}
        <div className={`w-[169px] h-1 bg-[#989494] rounded-full relative overflow-hidden progress-track ${startProgress ? 'start' : ''}`}>
          <div
            key={startProgress ? 'progress-on' : 'progress-off'}
            className="absolute left-0 top-0 h-full bg-[#E67E22] rounded-full progress-fill"
            style={startProgress ? ({ animation: 'progressFill 6s linear forwards' } as React.CSSProperties) : undefined}
            onAnimationEnd={() => { try { console.debug('progress animation ended'); } catch { } }}
          />
        </div>
        
        {/* Barra 2 - Vazia (Próxima Página) */}
        <div className="w-[169px] h-1 bg-[#989494] rounded-full"></div>
      </div>

      {/* Conteúdo Principal */}
      <div className="w-full max-w-[374px] flex flex-col items-center gap-8">
        
        {/* Seção de Texto */}
        <div className="text-center space-y-4">
          <h1 className={`${inter.className} font-semibold text-2xl text-[#E67E22]`}>
            Regência Verbal
          </h1>
          
          <p className={`${inter.className} font-normal text-[14px] leading-[20px] text-[#2C3E50] text-left`}>
            Deparamo-nos com uma grande quantidade de verbos quando iniciamos o estudo semântico e morfossintático da língua portuguesa, e essa quantidade significativa de verbos pode ter mais de um sentido. Você sabe localizar e explicar os sentidos diversos que esses verbos podem ter de acordo com o uso de uma preposição ou mesmo a ausência dela?
          </p>
          
          <p className={`${notoSans.className} font-semibold text-[14px] leading-[18px] text-[#2C3E50] text-left`}>
            Que tal ler este infográfico e ver essas diferenças com exemplos fáceis de compreender?
          </p>
        </div>

        {/* Infográfico Circular - Usando SVG Central do Figma */}
        <div className="relative w-[374px] h-[374px] flex items-center justify-center">
          {/* Círculo Central Novo do Figma (abaixo dos botões) */}
          <div className="absolute z-0 flex items-center justify-center">
            <div className="relative">
              <Image
                src="/assets/images/regencia-verbal/centro-circulo-amarelo.svg"
                alt="Círculo Central"
                width={160}
                height={160}
                className="w-[160px] h-[160px]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/assets/images/regencia-verbal/texto-regencia-verbal.svg"
                  alt="Regência Verbal"
                  width={102}
                  height={44}
                  className="w-[102px] h-[44px]"
                />
              </div>
            </div>
          </div>

          {/* Botões dos Verbos usando SVGs originais do Figma */}
          
          {/* Assistir (Topo) */}
          <div 
            className="absolute z-10 cursor-pointer hover:scale-105 hover:z-30 transition-transform duration-200"
            style={{
              top: "0px",
              left: "50%",
              transform: "translateX(-50%)"
            }}
            onClick={() => setIsAssistirOpen(true)}
          >
            <Image
              src="/assets/images/regencia-verbal/btn-assistir.svg"
              alt="Assistir"
              width={140}
              height={150}
              className="w-[140px] h-[149.6px]"
            />
          </div>

          {/* Aspirar (Topo Direita) */}
          <div 
            className="absolute z-10 cursor-pointer hover:scale-105 hover:z-30 transition-transform duration-200"
            style={{
              top: "27px",
              right: "27px"
            }}
            onClick={() => setIsAspirarOpen(true)}
          >
            <Image
              src="/assets/images/regencia-verbal/btn-aspirar.svg"
              alt="Aspirar"
              width={140}
              height={150}
              className="w-[140px] h-[149.6px]"
            />
          </div>

          {/* Chegar (Direita) */}
          <div 
            className="absolute z-10 cursor-pointer hover:scale-105 hover:z-30 transition-transform duration-200"
            style={{
              top: "50%",
              right: "0px",
              transform: "translateY(-50%)"
            }}
            onClick={() => setIsImplicarOpen(true)}
          >
            <Image
              src="/assets/images/regencia-verbal/btn-implicar.svg"
              alt="Chegar"
              width={140}
              height={150}
              className="w-[140px] h-[149.6px]"
            />
          </div>

          {/* Comparecer (Baixo Direita) */}
          <div 
            className="absolute z-10 cursor-pointer hover:scale-105 hover:z-30 transition-transform duration-200"
            style={{
              bottom: "27px",
              right: "27px"
            }}
            onClick={() => setIsIrOuChegarOpen(true)}
          >
            <Image
              src="/assets/images/regencia-verbal/btn-chegar.svg"
              alt="Comparecer"
              width={140}
              height={150}
              className="w-[140px] h-[149.6px]"
            />
          </div>

          {/* Agradar (Baixo) */}
          <div 
            className="absolute z-20 cursor-pointer hover:scale-105 hover:z-30 transition-transform duration-200"
            style={{
              bottom: "0px",
              left: "50%",
              transform: "translateX(-50%)"
            }}
            onClick={() => setIsAgradarOpen(true)}
          >
            <Image
              src="/assets/images/regencia-verbal/btn-agradar.svg"
              alt="Agradar"
              width={140}
              height={150}
              className="w-[140px] h-[149.6px]"
            />
          </div>

          {/* Precisar (Baixo Esquerda) */}
          <div 
            className="absolute z-10 cursor-pointer hover:scale-105 hover:z-30 transition-transform duration-200"
            style={{
              bottom: "27px",
              left: "27px"
            }}
            onClick={() => setIsPrecisarOpen(true)}
          >
            <Image
              src="/assets/images/regencia-verbal/btn-precisar.svg"
              alt="Precisar"
              width={140}
              height={150}
              className="w-[140px] h-[149.6px]"
            />
          </div>

          {/* Reparar (Esquerda) */}
          <div 
            className="absolute z-10 cursor-pointer hover:scale-105 hover:z-30 transition-transform duration-200"
            style={{
              top: "50%",
              left: "0px",
              transform: "translateY(-50%)"
            }}
            onClick={() => setIsRepararOpen(true)}
          >
            <Image
              src="/assets/images/regencia-verbal/btn-reparar.svg"
              alt="Reparar"
              width={140}
              height={150}
              className="w-[140px] h-[149.6px]"
            />
          </div>

          {/* Chamar (Topo Esquerda) */}
          <div 
            className="absolute z-10 cursor-pointer hover:scale-105 hover:z-30 transition-transform duration-200"
            style={{
              top: "27px",
              left: "27px"
            }}
            onClick={() => setIsChamarOpen(true)}
          >
            <Image
              src="/assets/images/regencia-verbal/btn-chamar.svg"
              alt="Chamar"
              width={140}
              height={150}
              className="w-[140px] h-[149.6px]"
            />
          </div>
        </div>

        {/* Botão de Seta para Baixo usando SVG do Figma (prefetch) */}
        <Link
          href="/regencia-verbal/final"
          prefetch
          className="cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <Image
            src="/assets/images/regencia-verbal/chevron-baixo.svg"
            alt="Continuar"
            width={100}
            height={100}
            className=""
          />
        </Link>
        {/* Estilos da animação de progresso (styled-jsx global) */}
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
      {/* Modal Assistir */}
      <AssistirModal
        open={isAssistirOpen}
        onClose={() => setIsAssistirOpen(false)}
        onVerReflexao={() => {
          setIsAssistirOpen(false);
          setIsReflexaoOpen(true);
        }}
      />
      {/* Modal Aspirar */}
      <AspirarModal
        open={isAspirarOpen}
        onClose={() => setIsAspirarOpen(false)}
        onVerReflexao={() => {
          setIsAspirarOpen(false);
          setIsReflexaoAspirarOpen(true);
        }}
      />
      {/* Modal Reflexão Aspirar */}
      <ReflexaoAspirarModal
        open={isReflexaoAspirarOpen}
        onClose={() => setIsReflexaoAspirarOpen(false)}
      />
      {/* Modal Reflexão Assistir */}
      <ReflexaoAssistirModal
        open={isReflexaoOpen}
        onClose={() => setIsReflexaoOpen(false)}
      />

      {/* Modal Implicar */}
      <ImplicarModal
        open={isImplicarOpen}
        onClose={() => setIsImplicarOpen(false)}
      />
      {/* Modal Agradar */}
      <AgradarModal
        open={isAgradarOpen}
        onClose={() => setIsAgradarOpen(false)}
        onVerReflexao={() => {
          setIsAgradarOpen(false);
          setIsReflexaoAgradarOpen(true);
        }}
      />
      {/* Modal Ir ou Chegar */}
      <IrOuChegarModal
        open={isIrOuChegarOpen}
        onClose={() => setIsIrOuChegarOpen(false)}
      />
      {/* Modal Reflexão Agradar */}
      <ReflexaoAgradarModal
        open={isReflexaoAgradarOpen}
        onClose={() => setIsReflexaoAgradarOpen(false)}
      />
      {/* Modal Precisar */}
      <PrecisarModal
        open={isPrecisarOpen}
        onClose={() => setIsPrecisarOpen(false)}
      />
      {/* Modal Reparar */}
      <RepararModal
        open={isRepararOpen}
        onClose={() => setIsRepararOpen(false)}
        onVerReflexao={() => {
          setIsRepararOpen(false);
          setIsReflexaoRepararOpen(true);
        }}
      />
      {/* Modal Reflexão Reparar */}
      <ReflexaoRepararModal
        open={isReflexaoRepararOpen}
        onClose={() => setIsReflexaoRepararOpen(false)}
      />
      {/* Modal Chamar */}
      <ChamarModal
        open={isChamarOpen}
        onClose={() => setIsChamarOpen(false)}
      />
    </div>
  );
}
