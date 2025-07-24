"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ModalHeader from "./ModalHeader";

interface AuroraAustralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuroraAustralModal: React.FC<AuroraAustralModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleHome = () => {
    router.push("/forca-magnetica");
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
            <div className="w-[313px] bg-[#6829A8] border-4 border-white rounded-[16px] flex flex-col justify-center items-start gap-4 relative" style={{ padding: "0px 5px 7px 0px" }}>
              <div className="bg-[#B169FA] border-2 border-[#641671] rounded-[16px] z-0 flex-none order-0 w-full" style={{ padding: "14px 10px" }}>
                <div className="w-full flex flex-row items-center gap-4 z-20 relative">
                  <h1 className="font-nunito font-extrabold text-[18px] leading-[1.2] text-white flex-grow">Aurora austral</h1>
                </div>
              </div>
            </div>

            {/* Content block */}
            <div className="w-[313px] bg-[#6829A8] border-4 border-white rounded-[16px] flex flex-col justify-end items-start gap-4 relative" style={{ padding: "0px 5px 7px 0px" }}>
              <div className="bg-[#B169FA] border-2 border-[#641671] rounded-[16px] z-0 flex-none order-0 w-full" style={{ padding: "14px 10px" }}>
                <div className="w-full flex flex-col items-start gap-4 z-20 relative">
                  {/* Main description */}
                  <p className="text-white font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-0 self-stretch z-[2]">Por elas se formarem com maior precisão na Antártica, as auroras austrais são mais difíceis de serem observadas a olho nu. Porém, em alguns lugares, dependendo da estação do ano, isso é possível.</p>

                  {/* Nova Zelândia section */}
                  <p className="text-white font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-1 self-stretch z-[2]">Nova Zelândia</p>

                  {/* Queenstown image */}
                  <div className="w-[281px] h-[160px] rounded-[16px] relative overflow-hidden flex-none order-2">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: "url('/assets/images/forca-magnetica/queenstown.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}>
                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0 rounded-[16px]"
                        style={{
                          background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
                        }}
                      />
                      {/* Location title */}
                      <div className="absolute top-2 left-3">
                        <p className="text-white font-nunito font-bold text-[14px] leading-[1.2]">Queenstown</p>
                      </div>
                    </div>
                  </div>

                  {/* Austrália section */}
                  <p className="text-white font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-3 self-stretch z-[2]">Austrália</p>

                  {/* Tasmânia e Victoria image */}
                  <div className="w-[281px] h-[160px] rounded-[16px] relative overflow-hidden flex-none order-4">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: "url('/assets/images/forca-magnetica/tasmania-victoria.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}>
                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0 rounded-[16px]"
                        style={{
                          background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
                        }}
                      />
                      {/* Location title */}
                      <div className="absolute top-2 left-3">
                        <p className="text-white font-nunito font-bold text-[14px] leading-[1.2]">Tasmânia e Victoria</p>
                      </div>
                    </div>
                  </div>

                  {/* Argentina section */}
                  <p className="text-white font-nunito font-semibold text-[16px] leading-[1.2] flex-none order-5 self-stretch z-[2]">Argentina</p>

                  {/* Ushuaia image */}
                  <div className="w-[281px] h-[160px] rounded-[16px] relative overflow-hidden flex-none order-6">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: "url('/assets/images/forca-magnetica/ushuaia.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}>
                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0 rounded-[16px]"
                        style={{
                          background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
                        }}
                      />
                      {/* Location title */}
                      <div className="absolute top-2 left-3">
                        <p className="text-white font-nunito font-bold text-[14px] leading-[1.2]">Ushuaia</p>
                      </div>
                    </div>
                  </div>
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

export default AuroraAustralModal;
