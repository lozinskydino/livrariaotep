"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AuroraBorealModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuroraBorealModal: React.FC<AuroraBorealModalProps> = ({ isOpen, onClose }) => {
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#9C59FE] to-[#420C66]" />

        {/* Top buttons */}
        <div className="absolute flex justify-center z-20 w-full p-[15px]">
          <div className="flex justify-between items-center w-[313px]">
            <button onClick={onClose} className="w-12 h-12 rounded-full bg-[#94E7FC] border-[3px] border-white flex items-center justify-center shadow-[0px_3px_0px_0px_#01668E] cursor-pointer">
              <Image src="/assets/icons/back-arrow-icon.svg" alt="Voltar" width={28} height={27} className="text-[#01668E]" />
            </button>

            <button onClick={handleHome} className="w-12 h-12 rounded-full bg-[#94E7FC] border-[3px] border-white flex items-center justify-center shadow-[0px_3px_0px_0px_#01668E] cursor-pointer">
              <Image src="/assets/icons/home-icon.svg" alt="Home" width={24} height={24} className="text-[#01668E]" />
            </button>
          </div>
        </div>

        {/* Content container */}
        <div className="flex flex-col items-center h-full px-10 pt-[95px] pb-10 gap-3 overflow-y-auto overflow-x-hidden pl-[50px]">
            {/* Title box */}
            <div className="w-[313px] bg-[#6829A8] border-4 border-white rounded-[16px] flex flex-col justify-center items-start gap-4 relative" style={{ padding: "0px 5px 7px 0px" }}>
              <div className="bg-[#B169FA] border-2 border-[#641671] rounded-[16px] z-0 flex-none order-0 w-full" style={{ padding: "14px 10px" }}>
                <div className="w-full flex flex-row items-center gap-4 z-20 relative">
                  <h1 className="font-nunito font-extrabold text-[18px] leading-[1.2] text-white flex-grow">Aurora boreal</h1>
                </div>
              </div>
            </div>

            {/* Content block */}
            <div className="w-[313px] bg-[#6829A8] border-4 border-white rounded-[16px] flex flex-col justify-end items-start gap-4 relative" style={{ padding: "0px 5px 7px 0px" }}>
              <div className="bg-[#B169FA] border-2 border-[#641671] rounded-[16px] z-0 flex-none order-0 w-full" style={{ padding: "14px 10px" }}>
                <div className="w-full flex flex-col items-start gap-4 z-20 relative">
                  {/* Texto introdutório */}
                  <p className="text-white font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-0 self-stretch z-[2]">As auroras boreais se formam no polo norte da Terra. A seguir, estão os principais lugares de onde elas podem ser vistas:</p>

                  {/* Seção Canadá */}
                  <div className="w-full flex flex-col gap-4">
                    {/* Título Canadá */}
                    <p className="text-white font-nunito font-semibold text-[16px] leading-[1.2] flex-none self-stretch z-[2]">Canadá, nas cidades de Edmonton</p>

                    {/* Imagens do Canadá em coluna vertical */}
                    <div className="flex flex-col gap-2">
                      {/* Fort McMurray */}
                      <div
                        className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative"
                        style={{
                          backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%), url('/assets/images/forca-magnetica/fort-mcmurray.jpg')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          isolation: "isolate",
                        }}>
                        <p className="text-white font-nunito font-bold text-[16px] absolute top-2 left-3">Fort McMurray</p>
                      </div>

                      {/* YellowKnife */}
                      <div
                        className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative"
                        style={{
                          backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%), url('/assets/images/forca-magnetica/yellowknife.jpg')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          isolation: "isolate",
                        }}>
                        <p className="text-white font-nunito font-bold text-[16px] absolute top-2 left-3">YellowKnife</p>
                      </div>

                      {/* Whitehorse */}
                      <div
                        className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative"
                        style={{
                          backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%), url('/assets/images/forca-magnetica/whitehorse.jpg')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          isolation: "isolate",
                        }}>
                        <p className="text-white font-nunito font-bold text-[16px] absolute top-2 left-3">Whitehorse</p>
                      </div>

                      {/* Churchil */}
                      <div
                        className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative"
                        style={{
                          backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%), url('/assets/images/forca-magnetica/churchil.jpg')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          isolation: "isolate",
                        }}>
                        <p className="text-white font-nunito font-bold text-[16px] absolute top-2 left-3">Churchil</p>
                      </div>

                      {/* Athabasca */}
                      <div
                        className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative"
                        style={{
                          backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%), url('/assets/images/forca-magnetica/athabasca.jpg')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          isolation: "isolate",
                        }}>
                        <p className="text-white font-nunito font-bold text-[16px] absolute top-2 left-3">Athabasca</p>
                      </div>
                    </div>

                    {/* Período no Canadá */}
                    <p className="text-white font-nunito font-semibold text-[16px] leading-[1.2] flex-none self-stretch z-[2]">Em março, abril, setembro e outubro.</p>
                  </div>

                  {/* Seção Noruega */}
                  <div className="w-full flex flex-col gap-4">
                    {/* Título e período Noruega */}
                    <p className="text-white font-nunito font-semibold text-[16px] leading-[1.2] flex-none self-stretch z-[2]">Noruega, na cidade de Tromsø. Entre setembro e março.</p>

                    {/* Imagem da Noruega */}
                    <div
                      className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative"
                      style={{
                        backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%), url('/assets/images/forca-magnetica/tromso.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        isolation: "isolate",
                      }}>
                      <p className="text-white font-nunito font-bold text-[16px] absolute top-2 left-3">Tromsø</p>
                    </div>
                  </div>

                  {/* Seção Estados Unidos */}
                  <div className="w-full flex flex-col gap-4">
                    {/* Título Estados Unidos */}
                    <p className="text-white font-nunito font-semibold text-[16px] leading-[1.2] flex-none self-stretch z-[2]">Estados Unidos</p>

                    {/* Imagem dos Estados Unidos */}
                    <div
                      className="flex flex-col justify-center items-center p-2 gap-2 w-[281px] h-[160px] rounded-[16px] relative"
                      style={{
                        backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 100%), url('/assets/images/forca-magnetica/alasca.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        isolation: "isolate",
                      }}>
                      <p className="text-white font-nunito font-bold text-[16px] absolute top-2 left-3">Alasca</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom button */}
            <div className="w-full mt-6 max-w-[313px] flex justify-center cursor-pointer">
              <button onClick={onClose} className="w-full bg-[#01668E] border-4 border-white rounded-full py-3 px-6 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.15)] relative overflow-hidden cursor-pointer">
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
  );
};

export default AuroraBorealModal;
