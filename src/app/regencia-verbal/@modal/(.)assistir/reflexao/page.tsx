"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import ReflexaoAssistirPage from "@/app/regencia-verbal/assistir/reflexao/page";

export default function ReflexaoOverlay() {
  const router = useRouter();

  // Bloqueia o scroll do body enquanto o modal estiver aberto
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-[100] flex items-start justify-center"
      style={{
        paddingTop: "max(16px, env(safe-area-inset-top))",
        paddingBottom: "max(24px, env(safe-area-inset-bottom))",
      }}
    >
      {/* Backdrop que permite ver a página de trás */}
      <div className="fixed inset-0 bg-black/35" onClick={() => router.back()} />

      {/* Conteúdo: reaproveita a página existente como conteúdo do modal */}
      <div className="relative z-[1] w-full max-w-[393px] mx-auto px-4 sm:px-0 overflow-y-auto" style={{ maxHeight: "100dvh" }}>
        <ReflexaoAssistirPage />
      </div>
    </div>
  );
}
