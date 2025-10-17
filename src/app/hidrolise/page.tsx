"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Angkor } from "next/font/google";
import Botao from "./components/Botao";
import Image from "next/image";

const angkor = Angkor({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hidrolise() {
  const router = useRouter();
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);

  // Atualiza a altura do viewport para aplicar regras quando <= 617px
  useEffect(() => {
    const update = () => setViewportHeight(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleIniciarClick = () => {
    router.push("/hidrolise/info");
  };

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen mx-auto"
      style={{ backgroundColor: '#f4efdf' }}
    >
      {/* Container mobile-first 393px */}
      <div className="w-full relative min-h-screen flex justify-center">

        {/* Background decorativo com elementos científicos */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Padrão de fundo principal com borda azul (repetição vertical para cobrir qualquer altura) */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-full"
            style={{
              backgroundImage: "url('/assets/images/hidrolise/bg-pattern.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
            aria-hidden
          />

          <div className="max-w-[600px] min-h-[100vh] relative mx-auto">
            {/* DNA superior esquerdo */}
            <div className="absolute left-[-10%] top-[-3%] w-[200px] h-[140px]">
              <Image
                src="/assets/images/hidrolise/elemento-left.svg"
                alt=""
                width={200}
                height={140}
                className="object-contain"
              />
            </div>

            {/* Átomo superior direito */}
            <div className="absolute right-[-10%] top-[-5%] w-[170px] h-[170px]">
              <Image
                src="/assets/images/hidrolise/elemento-top.svg"
                alt=""
                width={170}
                height={170}
                className="object-contain"
              />
            </div>

            {/* DNA rotacionado meio direito (responsivo para telas com altura <= 617px) */}
            {(() => {
              const isShort = viewportHeight !== null && viewportHeight <= 617;
              const topPercent = isShort ? 22 : 42; // diminui top em 20%
              const baseW = 160;
              const baseH = 40;
              const w = isShort ? baseW - 20 : baseW; // -20px
              const h = isShort ? baseH - 20 : baseH; // -20px
              return (
                <div
                  className="absolute left-[-18%]"
                  style={{ top: `${topPercent}%`, width: `${w}px`, height: `${h}px` }}
                >
                  <Image
                    src="/assets/images/hidrolise/dna.svg"
                    alt=""
                    width={w}
                    height={h}
                    className="object-contain"
                  />
                </div>
              );
            })()}

            {/* Microscópio inferior direito */}
            <div className="absolute right-[-30%] bottom-[-4%] w-[200px] h-[250px]">
              <Image
                src="/assets/images/hidrolise/microscopio.svg"
                alt=""
                width={129}
                height={314}
                className="object-contain"
              />
            </div>

            {/* Elemento inferior esquerdo */}
            <div
              className="absolute left-[-5%] bottom-[-5%] w-[140px] h-[140px]"
              style={{ transform: 'rotate(349.464deg)', transformOrigin: 'center' }}
            >
              <Image
                src="/assets/images/hidrolise/elemento-bottom.svg"
                alt=""
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-10 px-10 max-w-[600px]">

          {/* Logo/Título com texto estilizado */}
          <div className="w-[380.944px] h-[217.236px] relative flex items-center justify-center mb-10">
            <div
              className="absolute"
              style={{
                transform: 'rotate(357deg)',
                transformOrigin: 'center'
              }}
            >
              <h1
                className={`${angkor.className} text-center uppercase whitespace-pre-wrap`}
                style={{
                  fontSize: '44.49px',
                  lineHeight: '1.2',
                  letterSpacing: '-2.2245px',
                  color: '#343434',
                  width: '373.134px'
                }}
              >
                Hidrólise{' '}
                <span
                  className="underline decoration-wavy"
                  style={{
                    textDecorationColor: '#5d8493',
                    textUnderlineOffset: '9.5%',
                    textDecorationSkipInk: 'none'
                  }}
                >
                  ácida
                </span>
                {' e '}
                <span
                  className="underline decoration-wavy"
                  style={{
                    textDecorationColor: '#5d8493',
                    textUnderlineOffset: '12.5%',
                    textDecorationSkipInk: 'none'
                  }}
                >
                  básica
                </span>
              </h1>
            </div>
          </div>

          {/* Botão INICIAR */}
          <div className="w-[122px]">
            <Botao
              onClick={handleIniciarClick}
              label="INICIAR"
              variant="roxo"
              height="67px"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
