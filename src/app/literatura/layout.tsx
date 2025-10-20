"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function LiteraturaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    if (children !== displayChildren) {
      setTransitionStage("fadeOut");
    }
  }, [children, displayChildren]);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      onTransitionEnd={() => {
        if (transitionStage === "fadeOut") {
          setDisplayChildren(children);
          setTransitionStage("fadeIn");
        }
      }}
    >
      <div
        className={`transition-transform duration-700 ease-out ${
          transitionStage === "fadeOut" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {displayChildren}
      </div>
      
      {transitionStage === "fadeOut" && (
        <div className="absolute inset-0 top-full transition-transform duration-700 ease-out -translate-y-full">
          {children}
        </div>
      )}
    </div>
  );
}
