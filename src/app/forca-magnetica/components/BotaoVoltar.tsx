interface BotaoVoltarProps {
  onClick: () => void;
}

export default function BotaoVoltar({ onClick }: BotaoVoltarProps) {
  return (
    <button onClick={onClick} className="w-full bg-[#01668E] border-4 border-white border-pulse rounded-full py-3 px-6 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[#94E7FC] rounded-full"
        style={{
          left: "1.01px",
          top: "0px",
          width: "calc(100% - 3px)",
          height: "calc(100% - 4px)",
        }}
      />
      <span className="relative z-10 font-nunito font-black text-base leading-[1.364] tracking-[0.04em] uppercase text-center text-[#01668E]">VOLTAR</span>
    </button>
  );
}
