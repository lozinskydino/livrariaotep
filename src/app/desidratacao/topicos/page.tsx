"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Botao from "../components/Botao";

interface TopicoData {
  id: string;
  titulo: string;
  conteudo: string;
  conteudo2?: string;
  imagem?: string;
  imagemSecundaria?: string;
}

const topicos: TopicoData[] = [
  {
    id: "desvendando",
    titulo: "Desvendando a química do caramelo: reações de desidratação",
    conteudo: "Você já experimentou caramelo ou açúcar caramelizado? Em algumas receitas, como as de pé de moleque, maçã do amor, pudim e pipoca caramelizada, o açúcar passa pela caramelização para modificar o seu sabor, textura e aparência. Navegue por este infográfico para saber mais!",
    imagem: "/assets/images/desidratacao/pe-de-moleque.png"
  },
  {
    id: "caramelizacao",
    titulo: "A caramelização do açúcar",
    conteudo: "A caramelização se trata de um conjunto de reações químicas de compostos orgânicos e geralmente é feita com açúcar cristal, comum em nossas casas. Esse açúcar é formado por moléculas de sacarose, um dissacarídeo formado por glicose e frutose.",
    imagem: "/assets/images/desidratacao/acucar-1.png",
    imagemSecundaria: "/assets/images/desidratacao/acucar-2.png"
  },
  {
    id: "reacoes",
    titulo: "Reações de desidratação",
    conteudo: "Ao aquecer a sacarose a temperaturas acima de 160 °C, ela passa por uma série de reações químicas, que partem da eliminação de moléculas de água, também chamada de desidratação. O calor faz com que as moléculas se reorganizem, dando origem a uma textura pegajosa e ao aroma delicioso do caramelo.",
    imagem: "/assets/images/desidratacao/desidratacao.png",
  },
  {
    id: "produtos",
    titulo: "Produtos da desidratação",
    conteudo: "Por meio das fórmulas moleculares do esquema acima e experimentos, observa-se que inicialmente, a desidratação do açúcar envolve a eliminação de moléculas de água e união das moléculas restantes. As demais cotas são: C12H18O9, C36H48O24, C24H26O13\n\nNem todas as reações químicas envolvidas na caramelização foram devidamente identificadas, mas sabe-se que o processo se inicia com a desidratação, que resulta na união de moléculas, na decomposição em moléculas menores e na formação de compostos cíclicos. Alguns dos primeiros produtos formados, que alteram a cor, o sabor e as propriedades físico-químicas, são a <b>caramelana, o carameleno e o caramelino</b>. Esses compostos são formados por meio do seguinte processo:\n\n",
    conteudo2: "Ou seja, por meio das fórmulas moleculares do esquema acima e experimentos, observa-se que inicialmente, a desidratação do açúcar envolve a eliminação de moléculas de água e união das moléculas restantes.",
    imagem: "/assets/images/desidratacao/formulas.png"
  },
  {
    id: "sabor",
    titulo: "O sabor do caramelo",
    conteudo: "Além das receitas caseiras, a caramelização está presente em processos da indústria alimentícia, como a produção de doces artificiais e refrigerantes. E o sabor do caramelo depende de reações químicas controladas, pois acima de 180 °C o açúcar pode queimar, criando compostos com sabor mais amargo.\n\n",
    conteudo2: "Se você gostou de saber dessa informação, continue explorando a ciência presente no seu dia a dia. Dessa forma, aprenderá muito mais sobre o funcionamento do mundo ao seu redor e de que forma pode utilizar melhor os recursos a seu dispor.",
    imagem: "/assets/images/desidratacao/caramelo.png"
  }
];

export default function DesidratacaoTopicos() {
  const router = useRouter();
  const [topicoAberto, setTopicoAberto] = useState<string | null>(null);

  const handleVoltarClick = () => {
    router.push("/desidratacao/intro");
  };

  const handleAvancarClick = () => {
    router.push("/desidratacao/final");
  };

  const toggleTopico = (id: string) => {
    setTopicoAberto(topicoAberto === id ? null : id);
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "393px",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #FF69B4 0%, #FF1493 100%)",
        margin: "0 auto",
      }}>
      {/* Overlay rosa para dar o tom correto */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(255, 105, 180, 0.3) 0%, rgba(255, 20, 147, 0.4) 100%)",
        }}
      />

      {/* Elementos decorativos - pirulitos */}
      <div className="absolute right-4 z-5">
        <div className="animate-floating">
          <Image src="/assets/images/desidratacao/bombom.png" alt="Pirulito" width={138} height={56} />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center h-full px-10 pt-[80px] pb-[120px] gap-[5px] overflow-hidden" style={{ paddingLeft: "50px" }}>
        
        {/* Tópicos Accordion */}
        {topicos.map((topico, index) => (
          <div key={topico.id} className="w-[313px] relative">
            {/* Tópico expandido */}
            {topicoAberto === topico.id && (
              <div className="bg-[#A03BB1] border-4 border-white rounded-[16px] flex flex-col justify-end items-start gap-4 relative mb-0" style={{ padding: "0px 5px 7px 0px" }}>
                <div className="bg-[#FDC0FF] border-2 border-[#641671] rounded-[16px] z-0 flex-none order-0 w-full" style={{ padding: "14px 10px" }}>
                  <div className="w-full flex flex-col items-start gap-4 z-20 relative">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-[#641671] font-nunito font-bold text-[16px] leading-[1.2] flex-1">
                        {topico.titulo}
                      </h3>
                      <button onClick={() => toggleTopico(topico.id)} className="ml-2">
                        <Image src="/assets/icons/arrow-up.svg" alt="Fechar" width={24} height={24} />
                      </button>
                    </div>
                    
                    {topico.id !== "produtos" && topico.id !== "sabor" && topico.imagem && (
                      <div className="w-full rounded-[12px] overflow-hidden">
                        <Image 
                          src={topico.imagem} 
                          alt={topico.titulo} 
                          width={281} 
                          height={160} 
                          className="w-full h-[160px] object-cover"
                        />
                      </div>
                    )}

                    {(topico.id === "caramelizacao" || topico.id === "produtos") && topico.imagemSecundaria && (
                      <div className="w-full rounded-[12px] overflow-hidden">
                        <Image 
                          src={topico.imagemSecundaria} 
                          alt={`${topico.titulo} - Imagem adicional`} 
                          width={281} 
                          height={160} 
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    )}
                    
                    <p className="text-[#641671] font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-0 self-stretch z-[2] whitespace-pre-line">
                      <div dangerouslySetInnerHTML={{ __html: topico.conteudo }} />
                    </p>

                    {(topico.id === "produtos" || topico.id === "sabor") && topico.imagem && (
                      <div className="w-full rounded-[12px] overflow-hidden">
                        <Image 
                          src={topico.imagem} 
                          alt={topico.titulo} 
                          width={281} 
                          height={160} 
                          className="w-full h-[160px] object-cover"
                        />
                      </div>
                    )}

                    {topico.conteudo2 && (
                      <p className="text-[#641671] font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-0 self-stretch z-[2] whitespace-pre-line">
                        <div dangerouslySetInnerHTML={{ __html: topico.conteudo2 }} />
                      </p>
                    )}
                    
                    {(topico.id !== "caramelizacao") && topico.imagemSecundaria && (
                      <div className="w-full rounded-[12px] overflow-hidden">
                        <Image 
                          src={topico.imagemSecundaria} 
                          alt={`${topico.titulo} - Imagem adicional`} 
                          width={281} 
                          height={160} 
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Tópico fechado */}
            {topicoAberto !== topico.id && (
              <button
                onClick={() => toggleTopico(topico.id)}
                className="w-full bg-[#A03BB1] border-4 border-white rounded-[16px] flex flex-col justify-end items-start gap-4 relative mb-0 hover:bg-[#8B2A9B] transition-colors"
                style={{ padding: "0px 5px 7px 0px" }}
              >
                <div className="bg-[#FDC0FF] border-2 border-[#641671] rounded-[16px] z-0 flex-none order-0 w-full" style={{ padding: "14px 10px" }}>
                  <div className="w-full flex flex-row items-center justify-between z-20 relative">
                    <h3 className="text-[#641671] font-nunito font-bold text-[16px] leading-[1.2] text-left flex-1">
                      {topico.titulo}
                    </h3>
                    <Image src="/assets/icons/arrow-down.svg" alt="Expandir" width={24} height={24} className="ml-2" />
                  </div>
                </div>
              </button>
            )}
          </div>
        ))}

        {/* Imagem de instrução */}
        <div className="mt-6 mb-6">
          <Image 
            src="/assets/images/desidratacao/info-clique.png" 
            alt="Clique para expandir" 
            width={114} 
            height={62} 
            className="object-contain"
          />
        </div>
      </div>

      {/* Botões fixos */}
      <div className="absolute max-w-[303px] bottom-[40px] left-[50px] z-10 flex flex-row justify-stretch items-stretch w-full gap-6">
        <div className="flex-1">
          <Botao onClick={handleVoltarClick} label="VOLTAR" variant="azul" height="67px" />
        </div>
        <div className="flex-1">
          <Botao onClick={handleAvancarClick} label="AVANÇAR" variant="verde" height="67px" />
        </div>
      </div>
    </div>
  );
}
