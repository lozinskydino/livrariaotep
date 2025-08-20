"use client";

import { useRouter } from "next/navigation";
import Botao from "../components/Botao";
import Image from "next/image";

export default function EstadosUnidosFinal() {
  const router = useRouter();

  const handleVoltarClick = () => router.push("/estados-unidos/topicos");
  const handleInicioClick = () => router.push("/estados-unidos");

  return (
    <div className="relative overflow-x-hidden overflow-y-visible flex flex-col items-center min-h-screen w-full mx-auto">
      {/* Background gradiente cobrindo todo o viewport */}
      <div className="fixed inset-0 -z-10 w-screen h-screen" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, #C93030 15.258%, #29518F 58.05%, #FFECBA 106.28%)",
          }}
        />
      </div>

      <div className="w-full max-w-[393px] relative overflow-visible">
        {/* Cabeçalho Figma (bandeira + título combinados) */}
        <div
          className="absolute z-40 pointer-events-none flex w-full justify-center"
          aria-hidden
        >
          <Image
            src="/assets/images/estados-unidos/logo.svg"
            alt="Os Estados Unidos no século XIX"
            width={280}
            height={220}
            className="w-[260px] sm:w-[280px] h-auto"
            priority
          />
        </div>

        {/* Conteúdo principal */}
        {/* Espaço reservado para o cabeçalho (bandeira + título) */}
        <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-10 pt-[310px] pb-10 gap-6">
          {/* Caixa de conteúdo conforme Figma */}
          <div className="w-full relative rounded-2xl bg-[#de6173] p-[16px] mt-0 flex flex-col gap-4 items-start justify-end">
            {/* Borda branca externa (overlay) */}
            <div aria-hidden className="absolute inset-[-4px] border-4 border-white rounded-[20px] pointer-events-none shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)]" />
            {/* Plano de fundo e borda interna deslocados */}
            <div className="absolute bg-[#ffe7e7] bottom-[5.36px] left-0 right-[3.5px] rounded-2xl top-0">
              <div aria-hidden className="absolute inset-0 border-2 border-[#c93030] rounded-2xl pointer-events-none" />
            </div>
            {/* Conteúdo */}
            <div className="relative box-border flex flex-row gap-4 items-start justify-start p-0 w-full leading-none">
              <div className="basis-0 grow min-h-px min-w-px shrink-0 relative">
                <p className="text-[#c93030] font-nunito font-semibold text-[16px] leading-[1.2]">
                  Cunhado pelo escritor e historiador James Truslow Adams, a expressão “sonho americano” representa a crença fundamental de que, nos Estados Unidos, qualquer pessoa, independentemente de sua origem ou do grupo social a que pertencia, teria a oportunidade de alcançar sucesso, prosperidade e felicidade por meio do trabalho duro, da perseverança e da iniciativa individual. As raízes dessa expressão estão nos seguintes movimentos: na declaração de independência de 1776, que promete “vida, liberdade e busca da felicidade”; na expansão para o Oeste, que alimenta a crença na ascensão social pelo trabalho árduo; e na idade do ouro, no final do século XIX, com a industrialização. No entanto, as disparidades de renda, a falta de acesso à educação de qualidade e as dificuldades enfrentadas por minorias étnicas e de gênero questionam a universalidade do “sonho americano” e revelam as desigualdades presentes na sociedade do passado e do presente.
                </p>
              </div>
            </div>
          </div>

          {/* Botões */}
          <div className="flex w-full justify-center">
            <div className="max-w-[303px] z-10 flex flex-row items-stretch w-full gap-6">
              <div className="flex-1">
                <Botao onClick={handleVoltarClick} label="VOLTAR" variant="azul" height="67px" />
              </div>
              <div className="flex-1">
                <Botao onClick={handleInicioClick} label="INÍCIO" variant="verde" height="67px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
