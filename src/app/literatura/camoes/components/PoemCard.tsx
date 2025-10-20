"use client";

import { EB_Garamond } from "next/font/google";
import Image from "next/image";

const ebGaramond = EB_Garamond({ subsets: ["latin"], weight: ["400", "800"], style: ["normal", "italic"] });

interface PoemCardProps {
  title: string;
  content: string;
  author?: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  showZoomIcon?: boolean;
}

export default function PoemCard({
  title,
  content,
  author = "Camões",
  x,
  y,
  width = 320,
  height = 380,
  showZoomIcon = true,
}: PoemCardProps) {
  return (
    <div
      className="absolute bg-[#FFF7E8] rounded-[30px] p-6 shadow-lg flex flex-col z-20"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        pointerEvents: "none",
      }}
    >
      {showZoomIcon && (
        <div className="absolute top-4 right-4 w-8 h-8 bg-[#C3AC7C]/80 rounded-full flex items-center justify-center pointer-events-auto">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="6" stroke="#000" strokeWidth="2"/>
            <path d="M14 14L20 20" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      )}

      <h3 className={`${ebGaramond.className} text-[#8B4513] font-bold text-[18px] mb-3 leading-tight`}>
        {title}
      </h3>

      <p className={`${ebGaramond.className} text-[#333] text-[14px] leading-[1.4em] flex-1 overflow-y-auto`}>
        {content}
      </p>

      {author && (
        <p className={`${ebGaramond.className} text-[#8B4513] text-[14px] font-semibold mt-3 text-right`}>
          {author}
        </p>
      )}
    </div>
  );
}
