"use client";

import React from "react";
import Botao from "./Botao";

type FooterNavegacaoProps = {
  onVoltar: () => void;
  onAvancar: () => void;
  labelVoltar?: string;
  labelAvancar?: string;
  height?: string; // ex.: "67px"
  className?: string;
};

export default function FooterNavegacao({
  onVoltar,
  onAvancar,
  labelVoltar = "VOLTAR",
  labelAvancar = "AVANÇAR",
  height = "67px",
  className = "",
}: FooterNavegacaoProps) {
  return (
    <div className={`mt-auto flex items-center justify-center gap-3 ${className}`}>
      <div className="w-[127px] md:flex-1 md:min-w-0">
        <Botao onClick={onVoltar} label={labelVoltar} variant="azul" height={height} />
      </div>
      <div className="w-[127px] md:flex-1 md:min-w-0">
        <Botao onClick={onAvancar} label={labelAvancar} variant="verde" height={height} />
      </div>
    </div>
  );
}
