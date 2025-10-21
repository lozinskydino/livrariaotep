"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import InfoCard from "../components/InfoCard";
import InfoCardText from "../components/InfoCardText";
import FooterNavegacao from "../components/FooterNavegacao";

export default function HidroliseFinalPage() {
  const router = useRouter();
  const handleVoltar = () => router.push("/hidrolise/topicos");
  const handleInicio = () => router.push("/hidrolise");

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen mx-auto"
      style={{ backgroundColor: "#f4efdf" }}
    >
      {/* Container mobile-first 393px */}
      <div className="w-full relative min-h-screen flex justify-center">

        {/* Background decorativo com elementos científicos */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Padrão de fundo principal */}
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

            {/* DNA rotacionado meio esquerdo */}
            <div className="absolute left-[-18%] top-[42%] w-[160px] h-[40px]">
              <Image
                src="/assets/images/hidrolise/dna.svg"
                alt=""
                width={160}
                height={40}
                className="object-contain"
              />
            </div>

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
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-10 px-10 max-w-[600px] gap-6">

          {/* Logo/Título com SVG */}
          <div className="w-[380.944px] h-[217.236px] relative flex items-center justify-center mb-10 md:mt-20">
            <div
              className="absolute"
              style={{
                transform: 'rotate(357deg)',
                transformOrigin: 'center'
              }}
            >
              <Image
                src="/assets/images/hidrolise/logo.svg"
                alt="Hidrólise ácida e básica"
                width={373}
                height={217}
                className="object-contain"
              />
            </div>
          </div>

          {/* Cartão descritivo */}
          <InfoCard containerBg="#646363" innerBg="#e6e6e6" innerBorder="#343434" radius={16} padding={16}>
            <InfoCardText>
              A hidrólise, seja ácida ou básica, vai além de ser apenas uma reação química, desempenhando um papel fundamental em diversos setores ao conectar ciência, tecnologia e sustentabilidade. Como explorado, suas aplicações não só viabilizam processos industriais e tecnológicos, mas também promovem soluções ambientais seguras, reforçando a importância de pensar no impacto de cada etapa, desde a produção até o descarte, para garantir um futuro mais sustentável.
            </InfoCardText>
          </InfoCard>

          {/* Rodapé com botões reutilizáveis */}
          <FooterNavegacao
            onVoltar={handleVoltar}
            onAvancar={handleInicio}
            labelAvancar="INÍCIO"
          />
        </div>
      </div>
    </div>
  );
}
