interface BotaoRedondoProps {
  onClick: () => void;
  numero: string;
}

export default function BotaoRedondo({ onClick, numero }: BotaoRedondoProps) {
  return (
    <button 
      onClick={onClick} 
      className="w-[30px] h-[30px] border-[1px] relative overflow-hidden"
      style={{ backgroundImage: 'url(/assets/images/artropodes/botao-redondo.png)', backgroundSize: 'cover' }}
    >
      <div
        className="absolute"
      />
      <span 
        className="relative z-10 font-nunito font-black text-[14px] leading-[1.364] tracking-[0.04em] uppercase text-center"
        style={{ color: '#15752F' }}
      >
        {numero}
      </span>
    </button>
  );
}
