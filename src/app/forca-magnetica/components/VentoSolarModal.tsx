"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ModalHeader from "./ModalHeader";

interface VentoSolarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VentoSolarModal: React.FC<VentoSolarModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleHome = () => {
    router.push('/forca-magnetica');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleBackdropClick}>
      <div className="relative w-full h-full overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #9C59FE 0%, #420C66 100%)",
          }}
        />

        {/* Content wrapper with fixed width */}
        <div className="w-[393px] h-full mx-auto relative">
          {/* Top buttons */}
          <ModalHeader onClose={onClose} onHome={handleHome} />

          {/* Content container */}
          <div className="flex flex-col items-center h-full px-10 pt-[80px] pb-10 gap-3 overflow-y-auto overflow-x-hidden" style={{ paddingLeft: "50px" }}>
            {/* Title box */}
            <div className="flex gap-1 w-[313px]">
            <div className="w-[313px] bg-[#6829A8] border-4 border-white rounded-[16px] flex flex-col justify-center items-start gap-4 relative" style={{ padding: "0px 5px 7px 0px" }}>
              <div className="bg-[#B169FA] border-2 border-[#641671] rounded-[16px] z-0 flex-none order-0 w-full" style={{ padding: "14px 10px" }}>
                <div className="w-full flex flex-row items-center gap-4 z-20 relative">
                  <h1 className="font-nunito font-extrabold text-[18px] leading-[1.2] text-white flex-grow">O vento solar e a formação das auroras polares</h1>
                </div>
              </div>
            </div>

            <div className="flex gap-1 w-[313px] h-[132px] bg-[#6829A8] border-4 border-white rounded-[16px] flex-col justify-center items-start relative">
              <div className="w-full h-[200px] relative rounded-[16px] overflow-hidden">
                <Image src="/assets/images/forca-magnetica/sol-imagem.png" alt="Imagem do Sol" fill className="object-cover rounded-[16px]" />
              </div>
            </div>
          </div>

            {/* Content block */}
            <div className="w-[313px] bg-[#6829A8] border-4 border-white rounded-[16px] flex flex-col justify-end items-start gap-4 relative" style={{ padding: "0px 5px 7px 0px" }}>
            <div className="bg-[#B169FA] border-2 border-[#641671] rounded-[16px] z-0 flex-none order-0 w-full" style={{ padding: "14px 10px" }}>
              <div className="w-full flex flex-col items-start gap-4 z-20 relative">
                <p
                  className="text-white font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-2 self-stretch z-[2]"
                  dangerouslySetInnerHTML={{
                    __html:
                      "O Sol produz um fenômeno chamado vento solar, que consiste na liberação de partículas carregadas que se espalham pelo sistema solar. Quando essas partículas se aproximam da Terra, elas interagem com o campo magnético terrestre e este passa a exercer sobre elas uma força magnética de atração para os polos.<br /><br />As partículas negativamente carregadas são atraídas pelo polo sul magnético, logo, vão para o polo norte geográfico. Já as partículas positivas, são atraídas pelo polo norte magnético, se direcionando para o polo sul geográfico.<br /><br />Quando as partículas solares chegam à ionosfera, elas se chocam com as moléculas de oxigênio e nitrogênio, fazendo com que essas moléculas ganhem energia e que seus elétrons passem para a sua camada mais energética. Para que os elétrons voltem ao seu estado natural, a energia recebida pela colisão com as partículas do vento solar é liberada em forma de luz, criando aquele lindo brilho no céu.",
                  }}
                />
              </div>
            </div>
          </div>

            {/* Bottom button */}
            <div className="w-full mt-6 cursor-pointer" onClick={onClose}>
            <button className="w-full bg-[#01668E] border-4 border-white rounded-full py-3 px-6 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)] relative overflow-hidden cursor-pointer">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentoSolarModal;
