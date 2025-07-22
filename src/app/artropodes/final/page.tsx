"use client";

import { useRouter } from "next/navigation";
import Botao from "../components/Botao";
import Image from "next/image";

export default function ArtropodesFinal() {
  const router = useRouter();

  const handleVoltarClick = () => {
    router.push("/artropodes/topicos");
  };

  const handleHomeClick = () => {
    router.push("/artropodes");
  };

  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center min-h-screen mx-auto">
      <div className="w-[393px]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#41AA98] to-[#EBF3EE]" />
      {/* Conteúdo principal */}
      <div className="flex flex-col items-center w-full mt-[50px] gap-6">

        <div className="w-[313px] h-[160px] relative rounded-[16px] overflow-hidden mb-[40px]">
          <Image 
            src="/assets/images/artropodes/logo.svg"
            alt="Artrópodes e Equinodermos"
            fill
            className="object-cover min-h-[190px]"
            
          />
        </div>
        
        {/* Content block 1 */}
        <div className="w-[313px] bg-[#41AA98] border-4 border-white rounded-[16px] flex flex-col justify-end items-start gap-4 relative pt-0 pr-[5px] pb-[7px] pl-0">
          <div className="bg-[#EBF3EE] border-2 border-[#1C4F46] rounded-[16px] z-0 flex-none order-0 w-full p-[14px_10px]">
            <div className="w-full flex flex-col items-start gap-4 z-20 relative">
              {/* Main description */}
              <p className="text-[#1C4F46] font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-0 self-stretch z-[2]">
              Os artrópodes são os animais mais numerosos da Terra. São caracterizados pela presença de apêndices articulados e um exoesqueleto que precisa ser mudado de tempos em tempos durante o crescimento do animal. No caso dos crustáceos, muito são utilizados na gastronomia. No grupo dos equinodermos estão as estrelas-do-mar, animais com o corpo repleto de espinhos e que têm alta capacidade de regeneração. Assim, ao encontrar uma estrela-do-mar faltando um ou mais braços, lembre-se de que ela provavelmente sobreviverá e regenerará os braços que perdeu. Quando você consumir frutos do mar, lembre-se de que você pode estar ingerindo representantes do grupo dos moluscos, dos artrópodes, no caso de crustáceos, e também de equinodermos, pois pepinos-do-mar e ovas de ouriço também são usados como alimentos.
              </p>
            </div>
          </div>
        </div>

        
      </div>

      {/* Botões de navegação */}
      <div className="w-full my-[40px] flex justify-center gap-4 z-20 px-10">
        <div className="flex-1">
          <Botao onClick={handleVoltarClick} label="VOLTAR" variant="azul" height="64px" />
        </div>

        <div className="flex-1">
          <Botao onClick={handleHomeClick} label="INÍCIO" variant="verde" height="64px" />
        </div>
      </div>
      </div>
    </div>
  );
}
