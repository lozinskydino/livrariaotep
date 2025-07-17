'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Botao from '../components/Botao';

export default function DesidratacaoFinal() {
  const router = useRouter();

  const handleVoltarClick = () => {
    router.push('/desidratacao/topicos');
  };

  const handleInicioClick = () => {
    router.push('/desidratacao');
  };

  return (
    <div className="relative w-[393px] h-screen mx-auto overflow-hidden">
      {/* Fundo com gradiente */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #FF69B4 0%, #FF1493 100%)',
        }}
      />

      <div className="absolute right-4 z-5">
              <div className="animate-floating">
                <Image src="/assets/images/desidratacao/bombom.png" alt="Pirulito" width={138} height={56} />
              </div>
            </div>

      {/* Logo do Desidrata o */}
      <div className="flex sticky w-full justify-center mt-20 z-10">
        <Image 
          src="/assets/images/desidratacao/logo.png" 
          alt="Logo Desidratação" 
          width={233} 
          height={190} 
          className="object-contain"
        />
      </div>


      {/* Elementos decorativos - pirulito invertido no canto superior direito */}
      <div className="absolute right-0 top-[280px] z-20">
        <div className="animate-floating">
          <Image 
            src="/assets/images/desidratacao/pirulito.png" 
            alt="Pirulito" 
            width={104} 
            height={181} 
            className="transform scale-x-[-1]"
          />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="z-10 flex flex-col items-center justify-center pt-3 p-[40px] w-full">
        
        {/* Caixa de conteúdo principal */}
        <div className="bg-[#A03BB1] border-4 border-white rounded-[16px] flex flex-col justify-end items-start gap-4 relative mb-8 w-full max-w-[313px]" style={{ padding: "0px 5px 7px 0px" }}>
          <div className="bg-[#FDC0FF] border-2 border-[#641671] rounded-[16px] z-0 flex-none order-0 w-full" style={{ padding: "14px 10px" }}>
            <div className="w-full flex flex-col items-start gap-4 z-20 relative">
              <p className="text-[#641671] font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-0 self-stretch z-[2]">
                A caramelização do açúcar, relacionada a diversas receitas culinárias, não envolve apenas a transformação visual e do sabor de alimentos. Ela é um exemplo de como as reações químicas estão presentes em nosso cotidiano, desde receitas simples até produtos industriais. Entender esses processos nos ajuda a valorizar a ciência por trás da culinária, de cada produto que consumimos ou de fenômenos que presenciamos.
              </p>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="absolute bottom-[40px] flex gap-4 w-full max-w-[313px]">
          <div className="flex-1">
            <Botao 
              onClick={handleVoltarClick} 
              label="VOLTAR" 
              variant="azul" 
              height="67px" 
            />
          </div>
          <div className="flex-1">
            <Botao 
              onClick={handleInicioClick} 
              label="INÍCIO" 
              variant="verde" 
              height="67px" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
