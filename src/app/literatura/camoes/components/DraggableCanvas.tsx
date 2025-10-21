"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

interface DraggableCanvasProps {
  children: ReactNode;
  width?: number;
  height?: number;
}

export default function DraggableCanvas({
  children,
  width = 1200,
  height = 1400,
}: DraggableCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [maxScroll, setMaxScroll] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      
      // Detectar se é mobile
      const mobile = containerWidth < 768;
      setIsMobile(mobile);
      
      // Calcular posição para centralizar o card principal (200, 100)
      // Card tem 450px de largura, então metade = 225px
      const centerX = (containerWidth / 2) - 200 - 225;
      const centerY = (containerHeight / 2) - 100 - 250; // Ajuste para centralizar verticalmente
      
      setPosition({ x: centerX, y: centerY });
      
      setMaxScroll({
        x: Math.max(0, width - containerWidth),
        y: Math.max(0, height - containerHeight),
      });
    }
  }, [width, height]);

  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setDragStart({
      x: clientX - position.x,
      y: clientY - position.y,
    });
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;

    const newX = clientX - dragStart.x;
    const newY = clientY - dragStart.y;

    // Limites diferentes para mobile e desktop
    const minX = isMobile ? -600 : -200;
    const maxX = isMobile ? 600 : 1200;
    const minY = -600;
    const maxY = 400;

    setPosition({
      x: Math.max(minX, Math.min(maxX, newX)),
      y: Math.max(minY, Math.min(maxY, newY)),
    });
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        handleMove(e.clientX, e.clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
      }
    };

    const handleMouseUp = () => handleEnd();
    const handleTouchEnd = () => handleEnd();

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleTouchEnd);
      
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isDragging, dragStart, maxScroll]);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-hidden touch-none select-none"
      style={{
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: "none",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: isDragging ? "none" : "transform 0.1s ease-out",
          width: `${width}px`,
          height: `${height}px`,
          willChange: "transform",
        }}
        className="relative"
      >
        {children}
      </div>
    </div>
  );
}
