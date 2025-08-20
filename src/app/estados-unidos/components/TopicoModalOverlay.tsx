"use client";

import React from "react";
import ModalHeader from "./ModalHeader";
import { topicosContent, TopicoId } from "./topicoContent";

type Props = {
  id: string;
  onClose: () => void;
};

export default function TopicoModalOverlay({ id, onClose }: Props) {
  const content = topicosContent[(id as TopicoId)] as (typeof topicosContent)[TopicoId] | undefined;
  const title = content?.title ?? "Tópico";

  // Renderiza o corpo do modal conforme o tópico selecionado
  const renderBody = () => {
    if (!content) {
      return (
        <>
          <div className="text-[#c93030] text-[18px] font-extrabold leading-[1.2]">{title}</div>
          <div className="mt-4 text-[#c93030] text-[16px] font-semibold leading-[1.2]">
            Conteúdo deste tópico será adicionado.
          </div>
        </>
      );
    }

    return (
      <>
        {/* Título */}
        <div className="text-[#c93030] text-[18px] font-extrabold leading-[1.2]">{content.title}</div>

        {/* Blocos do tópico */}
        {content.blocks.map((block, i) => {
          if (block.type === "p") {
            return (
              <div
                key={i}
                className="mt-4 text-[#c93030] text-[16px] font-semibold leading-[1.2] break-words"
                style={{ hyphens: "auto" }}
              >
                {block.text}
              </div>
            );
          }
          // bloco de imagem com múltiplas camadas
          const className =
            block.className ??
            "bg-[0%_12.71%,_50%_50%] bg-no-repeat bg-size-[135.94%_346.19%,cover] box-border flex flex-col gap-2 h-40 items-center justify-center p-[8px] rounded-2xl shrink-0 w-full mt-4";
          const bgImages = block.overlay
            ? `url('${block.bg}'), url('${block.overlay}')`
            : `url('${block.bg}')`;
          return (
            <div
              key={i}
              className={className}
              style={{ backgroundImage: bgImages }}
              aria-label={block.aria}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden">
      {/* Background fixo com bandeira lateral + imagem + gradiente (Figma) */}
      <div className="fixed inset-0 -z-10" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('/assets/images/estados-unidos/topicos/bandeira-usa.png'), linear-gradient(180deg, #C93030 15.258%, #29518F 58.05%, #FFECBA 106.28%)",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "left 0 top 0, center center",
            backgroundSize: "auto 100%, cover",
            backgroundAttachment: "fixed, fixed",
          }}
        />
      </div>

      {/* Container do modal */}
      <div className="relative z-10 min-h-screen w-full">
        {/* Header fixo com botões */}
        <ModalHeader onBack={onClose} onHome={onClose} />

        {/* Conteúdo central com largura fixa mobile */}
        <div className="pt-[100px] pb-[24px] w-full flex justify-center">
          <div className="w-full max-w-[393px] box-border px-[8px] md:px-[12px] font-nunito">
            {/* Cartão do modal (camadas conforme Figma) */}
            <div className="relative rounded-2xl p-[16px] bg-[#de6173]">
              {/* Borda externa branca */}
              <div aria-hidden className="absolute inset-[-4px] rounded-[20px] border-4 border-white pointer-events-none shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)]" />
              {/* Plano de fundo e borda interna com offsets exatos */}
              <div className="absolute bg-[#ffe7e7] bottom-[5.36px] left-0 right-[3.5px] rounded-2xl top-0" aria-hidden>
                <div aria-hidden className="absolute inset-0 rounded-2xl border-2 border-[#c93030] pointer-events-none" />
              </div>

              {/* Área de conteúdo (sem scroll interno) */}
              <div className="relative">{renderBody()}</div>
            </div>

            {/* Botão inferior VOLTAR (camadas) */}
            <div className=" mt-[40px] w-full flex justify-center">
              <button onClick={onClose} className="relative mt-4 max-w-[393px] w-full h-[67px] cursor-pointer">
                {/* Camada base azul escuro */}
                <div aria-hidden className="absolute inset-0 rounded-[999px] bg-[#01668E]" />
                {/* Borda branca externa */}
                <div aria-hidden className="absolute inset-[-4px] rounded-[1003px] border-4 border-white shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)]" />
                {/* Topo azul claro levemente elevado */}
                <div aria-hidden className="absolute left-[1px] right-[2px] top-0 bottom-[4px] rounded-[999px] bg-[#94E7FC]" />
                {/* Rótulo */}
                <span className="relative z-10 block w-full text-center text-[#01668E] font-black tracking-[0.8px] text-[20px] uppercase">
                  VOLTAR
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
<style jsx>{`
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`}</style>
