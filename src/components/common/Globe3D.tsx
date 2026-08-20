import React, { useEffect, useRef, useState } from 'react';

// Landmass detection for globe dot matrix
function isLandDot(lat: number, lng: number): boolean {
  // North America
  if (lat >= 15 && lat <= 72 && lng >= -168 && lng <= -52) {
    if (lat < 28 && lng < -105) return false;
    return true;
  }
  // South America
  if (lat >= -56 && lat <= 13 && lng >= -82 && lng <= -34) {
    return true;
  }
  // Europe
  if (lat >= 35 && lat <= 71 && lng >= -10 && lng <= 45) {
    return true;
  }
  // Africa
  if (lat >= -35 && lat <= 37 && lng >= -18 && lng <= 51) {
    return true;
  }
  // Asia
  if (lat >= 5 && lat <= 75 && lng >= 45 && lng <= 145) {
    if (lat < 20 && lng > 105 && lng < 118) return false;
    return true;
  }
  // Australia / NZ
  if (lat >= -45 && lat <= -10 && lng >= 110 && lng <= 178) {
    return true;
  }
  // Japan & UK & Islands
  if (lat >= 30 && lat <= 46 && lng >= 128 && lng <= 146) return true;
  if (lat >= 50 && lat <= 59 && lng >= -11 && lng <= 2) return true;

  return false;
}

/**
 * Clean, Coded 3D Canvas Globe Component
 * Serves as the high-fidelity fallback when no external media is configured or if media fails to load.
 * Clutter-free: No intrusive text markers, callout boxes, or excess decorative lines.
 */
export const CodedGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rotationRef = useRef<number>(0.4);
  const isDraggingRef = useRef<boolean>(false);
  const lastMouseXRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    // Pre-calculate lat/lng grid dots for spherical projection
    const numLat = 38;
    const numLng = 76;
    const dots: { x: number; y: number; z: number; isLand: boolean }[] = [];

    for (let i = 0; i < numLat; i++) {
      const latDeg = (i / (numLat - 1)) * 180 - 90;
      const lat = (latDeg * Math.PI) / 180;
      const cosLat = Math.cos(lat);
      const sinLat = Math.sin(lat);

      for (let j = 0; j < numLng; j++) {
        const lngDeg = (j / numLng) * 360 - 180;
        const lng = (lngDeg * Math.PI) / 180;

        const x = cosLat * Math.sin(lng);
        const y = -sinLat;
        const z = cosLat * Math.cos(lng);
        const land = isLandDot(latDeg, lngDeg);

        dots.push({ x, y, z, isLand: land });
      }
    }

    const render = () => {
      if (!isDraggingRef.current) {
        rotationRef.current += 0.003;
      }

      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (width === 0 || height === 0) {
        animFrameId = requestAnimationFrame(render);
        return;
      }

      const radius = Math.min(width, height) * 0.44;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      const rot = rotationRef.current;
      const cosRot = Math.cos(rot);
      const sinRot = Math.sin(rot);
      const tilt = 0.2;
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);

      const transform = (p: { x: number; y: number; z: number }) => {
        const rx = p.x * cosRot + p.z * sinRot;
        const ry = p.y;
        const rz = -p.x * sinRot + p.z * cosRot;

        const finalY = ry * cosT - rz * sinT;
        const finalZ = ry * sinT + rz * cosT;

        return {
          px: centerX + rx * radius,
          py: centerY + finalY * radius,
          pz: finalZ,
        };
      };

      // 1. Clean Atmosphere Glow
      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.75,
        centerX,
        centerY,
        radius * 1.15
      );
      glow.addColorStop(0, 'rgba(228, 3, 46, 0.15)');
      glow.addColorStop(0.5, 'rgba(228, 3, 46, 0.05)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // 2. Dark Globe Body Base
      const sphereGrad = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        radius * 0.1,
        centerX,
        centerY,
        radius
      );
      sphereGrad.addColorStop(0, '#161922');
      sphereGrad.addColorStop(0.7, '#0B0D14');
      sphereGrad.addColorStop(1, '#05060A');

      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Render Dot Matrix
      dots.forEach((dot) => {
        const pt = transform(dot);
        // Only render visible hemisphere
        if (pt.pz >= -0.05) {
          const depthAlpha = Math.max(0, pt.pz);
          
          if (dot.isLand) {
            // Land dot (Crisp white / silver with subtle red tint on highlight edges)
            const alpha = 0.25 + 0.75 * depthAlpha;
            ctx.fillStyle = `rgba(240, 243, 250, ${alpha})`;
            ctx.beginPath();
            ctx.arc(pt.px, pt.py, 1.4 + 0.6 * depthAlpha, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Ocean grid point (very subtle dark blue/slate)
            if (depthAlpha > 0.4) {
              ctx.fillStyle = `rgba(80, 100, 130, ${0.12 * depthAlpha})`;
              ctx.beginPath();
              ctx.arc(pt.px, pt.py, 0.8, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      });

      // 4. Subtle Globe Outer Rim
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(228, 3, 46, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrameId);
      observer.disconnect();
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    lastMouseXRef.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - lastMouseXRef.current;
    rotationRef.current += deltaX * 0.005;
    lastMouseXRef.current = e.clientX;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="w-full h-full relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export interface Globe3DProps {
  /** Optional media asset source (video, gif, jpg, png, webp). If omitted or invalid, falls back to static candidates or CodedGlobe */
  mediaSrc?: string;
  /** Accessible label */
  alt?: string;
}

const DEFAULT_MEDIA_CANDIDATES = [
  '/assets/gifs/globe.gif',
  '/assets/videos/globe.mp4',
  '/assets/images/globe.png',
  '/assets/images/globe.webp',
];

/**
 * Universal Hero Visual Component (Single Source of Truth)
 * 
 * Strict Priority:
 * 1. If valid mediaSrc or static asset (e.g. /assets/gifs/globe.gif) exists -> Renders ONLY the media asset (GIF, video, or image). CodedGlobe is NOT mounted.
 * 2. If no media asset exists OR all candidates fail -> Renders ONLY the CodedGlobe fallback.
 * 3. Never renders both simultaneously.
 * 4. Clean presentation without cluttered markers, callout boxes, or distracting red dots.
 */
export const Globe3D: React.FC<Globe3DProps> = ({
  mediaSrc,
  alt = 'Interactive Globe Visual',
}) => {
  // Build ordered list of candidates to try
  const candidateList = React.useMemo(() => {
    if (mediaSrc) {
      return [mediaSrc, ...DEFAULT_MEDIA_CANDIDATES.filter((c) => c !== mediaSrc)];
    }
    return DEFAULT_MEDIA_CANDIDATES;
  }, [mediaSrc]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [allFailed, setAllFailed] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Reset when mediaSrc changes
  useEffect(() => {
    setCurrentIndex(0);
    setAllFailed(false);
  }, [mediaSrc]);

  const currentSrc = candidateList[currentIndex] || '';
  const cleanSrc = currentSrc.split('?')[0].toLowerCase().trim();

  const isVideo =
    cleanSrc.endsWith('.mp4') ||
    cleanSrc.endsWith('.webm') ||
    cleanSrc.endsWith('.mov') ||
    cleanSrc.endsWith('.m4v');

  const isImageOrGif =
    cleanSrc.endsWith('.gif') ||
    cleanSrc.endsWith('.png') ||
    cleanSrc.endsWith('.jpg') ||
    cleanSrc.endsWith('.jpeg') ||
    cleanSrc.endsWith('.webp') ||
    cleanSrc.endsWith('.svg') ||
    cleanSrc.endsWith('.avif');

  const handleMediaError = () => {
    if (currentIndex + 1 < candidateList.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  useEffect(() => {
    if (!allFailed && isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [allFailed, isVideo, currentSrc]);

  return (
    <div className="relative w-full aspect-square max-w-[580px] mx-auto flex items-center justify-center select-none">
      {/* Globe Media Visual Container - Transparent, no black background disc */}
      <div className="w-full h-full flex items-center justify-center relative">
        {!allFailed && currentSrc ? (
          <>
            {isVideo ? (
              <video
                key={currentSrc}
                ref={videoRef}
                src={currentSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onError={handleMediaError}
                className="w-full h-full object-contain select-none pointer-events-none"
              />
            ) : isImageOrGif ? (
              <img
                key={currentSrc}
                src={currentSrc}
                alt={alt}
                onError={handleMediaError}
                className="w-full h-full object-contain select-none pointer-events-none"
              />
            ) : (
              <CodedGlobe />
            )}
          </>
        ) : (
          /* Coded Canvas Globe strictly rendered ONLY when media is absent or errored */
          <CodedGlobe />
        )}
      </div>
    </div>
  );
};
