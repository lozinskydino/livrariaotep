interface BotaoProps {
  onClick: () => void;
  label: string;
  variant: 'amarelo' | 'azul' | 'verde';
  height?: string;
}

export default function Botao({ onClick, label, variant, height }: BotaoProps) {
  const getColors = () => {
    switch (variant) {
      case 'amarelo':
        return {
          bg: '#FFB213',
          inner: '#FFEE88',
          text: '#F59E0B'
        };
      case 'azul':
        return {
          bg: '#01668E',
          inner: '#94E7FC',
          text: '#01668E'
        };
      case 'verde':
        return {
          bg: '#15752F',
          inner: '#67EB00',
          text: '#15752F'
        };
    }
  };

  const colors = getColors();

  return (
    <button 
      onClick={onClick} 
      className="w-full border-4 border-white border-pulse rounded-full py-3 px-6 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)] relative overflow-hidden"
      style={{ backgroundColor: colors.bg, height: height ?? "auto" }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: colors.inner,
          left: "1.01px",
          top: "0px",
          width: "calc(100% - 3px)",
          height: "calc(100% - 4px)",
        }}
      />
      <span 
        className="relative z-10 font-nunito font-black text-base leading-[1.364] tracking-[0.04em] uppercase text-center"
        style={{ color: colors.text }}
      >
        {label}
      </span>
    </button>
  );
}
