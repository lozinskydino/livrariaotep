interface BotaoAvancarProps {
  onClick: () => void;
  label: string;
}

export default function BotaoAvancar({ onClick, label }: Partial<BotaoAvancarProps>) {
  return (
    <button onClick={onClick} className="w-full bg-[#15752F] border-4 border-white rounded-full py-3 px-6 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)] relative overflow-hidden border-pulse">
      <div
        className="absolute inset-0 bg-[#67EB00] rounded-full"
        style={{
          left: "1.01px",
          top: "0px",
          width: "calc(100% - 3px)",
          height: "calc(100% - 4px)",
        }}
      />
      <span className="relative z-10 font-nunito font-black text-base leading-[1.364] tracking-[0.04em] uppercase text-center text-[#15752F]">{label ?? "AVANÇAR"}</span>
    </button>
  );
}
