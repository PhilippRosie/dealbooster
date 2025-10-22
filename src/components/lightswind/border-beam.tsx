'use client';

import React, { useEffect, useRef } from 'react';

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  reverse?: boolean;
  initialOffset?: number;
  borderThickness?: number;
  opacity?: number;
  glowIntensity?: number;
  beamBorderRadius?: number;
  pauseOnHover?: boolean;
  speedMultiplier?: number;
  children?: React.ReactNode;
  className?: string;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  size = 70,
  duration = 12,
  delay = 0,
  colorFrom = "#06b6d4",
  colorTo = "#3b82f6",
  reverse = false,
  initialOffset = 30,
  borderThickness = 1,
  opacity = 0.9,
  glowIntensity = 2,
  beamBorderRadius = 20,
  pauseOnHover = true,
  speedMultiplier = 0.5,
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const style = document.createElement('style');
    style.textContent = `
      .border-beam-container {
        position: relative;
        border-radius: ${beamBorderRadius}px;
        padding: ${borderThickness}px;
        background: linear-gradient(
          ${reverse ? '270deg' : '90deg'},
          ${colorFrom},
          ${colorTo},
          ${colorFrom}
        );
        animation: border-beam-rotate ${duration}s linear infinite;
        animation-delay: ${delay}s;
        animation-play-state: ${pauseOnHover ? 'running' : 'running'};
        opacity: ${opacity};
      }
      
      .border-beam-container:hover {
        animation-play-state: ${pauseOnHover ? 'paused' : 'running'};
      }
      
      .border-beam-content {
        background: inherit;
        border-radius: ${beamBorderRadius - borderThickness}px;
        height: 100%;
        width: 100%;
      }
      
      @keyframes border-beam-rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [
    size,
    duration,
    delay,
    colorFrom,
    colorTo,
    reverse,
    initialOffset,
    borderThickness,
    opacity,
    glowIntensity,
    beamBorderRadius,
    pauseOnHover,
    speedMultiplier,
  ]);

  return (
    <div
      ref={containerRef}
      className={`border-beam-container ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="border-beam-content">
        {children}
      </div>
    </div>
  );
};

export default BorderBeam;
