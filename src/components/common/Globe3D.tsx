import React, { useEffect, useRef, useState } from 'react';

interface CityNode {
  name: string;
  country: string;
  lat: number;
  lng: number;
}

const CITIES: CityNode[] = [
  { name: 'New York', country: 'USA', lat: 40.7128, lng: -74.006 },
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lng: -0.1278 },
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503 },
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093 },
  { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708 },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'San Francisco', country: 'USA', lat: 37.7749, lng: -122.4194 },
  { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522 },
  { name: 'São Paulo', country: 'Brazil', lat: -23.5505, lng: -46.6333 },
  { name: 'Berlin', country: 'Germany', lat: 52.52, lng: 13.405 },
];

const CONNECTIONS: [number, number][] = [
  [0, 1], // New York - London
  [1, 2], // London - Tokyo
  [2, 3], // Tokyo - Sydney
  [1, 4], // London - Dubai
  [4, 5], // Dubai - Singapore
  [0, 6], // NY - SF
  [6, 2], // SF - Tokyo
  [1, 7], // London - Paris
  [0, 8], // NY - Sao Paulo
  [7, 9], // Paris - Berlin
  [9, 4], // Berlin - Dubai
  [5, 3], // Singapore - Sydney
];

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
    if (lat < 20 && lng > 105 && lng < 118) return false; // Gulf/Sea
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

export interface Globe3DProps {
  mediaSrc?: string;
  alt?: string;
}

export const Globe3D: React.FC<Globe3DProps> = ({
  mediaSrc = '/assets/videos/globe.mp4',
  alt = 'Interactive Globe Visual',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rotationRef = useRef<number>(0.4);
  const isDraggingRef = useRef<boolean>(false);
  const lastMouseXRef = useRef<number>(0);
  const [videoError, setVideoError] = useState<boolean>(false);

  const cleanSrc = mediaSrc.split('?')[0].toLowerCase();
  const isGif = cleanSrc.endsWith('.gif');
  const isImage =
    cleanSrc.endsWith('.png') ||
    cleanSrc.endsWith('.jpg') ||
    cleanSrc.endsWith('.jpeg') ||
    cleanSrc.endsWith('.webp') ||
    cleanSrc.endsWith('.svg') ||
    cleanSrc.endsWith('.avif');
  const isVideo = !isGif && !isImage;

  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback handling
      });
    }
  }, [isVideo, mediaSrc]);

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

    // Generate lat/lng grid dots
    const numLat = 36;
    const numLng = 72;
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

    const latLngTo3D = (latDeg: number, lngDeg: number) => {
      const lat = (latDeg * Math.PI) / 180;
      const lng = (lngDeg * Math.PI) / 180;
      return {
        x: Math.cos(lat) * Math.sin(lng),
        y: -Math.sin(lat),
        z: Math.cos(lat) * Math.cos(lng),
      };
    };

    const city3D = CITIES.map((c) => latLngTo3D(c.lat, c.lng));

    let time = 0;

    const render = () => {
      time += 0.012;
      if (!isDraggingRef.current) {
        rotationRef.current += 0.0035;
      }

      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (width === 0 || height === 0) {
        animFrameId = requestAnimationFrame(render);
        return;
      }

      const radius = Math.min(width, height) * 0.38;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      const rot = rotationRef.current;
      const cosRot = Math.cos(rot);
      const sinRot = Math.sin(rot);
      const tilt = 0.22;
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
          rx,
          ry: finalY,
          rz: finalZ,
        };
      };

      // 1. Outer Atmospheric Red Halo
      const outerHalo = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.85,
        centerX,
        centerY,
        radius * 1.35
      );
      outerHalo.addColorStop(0, 'rgba(228, 3, 46, 0.25)');
      outerHalo.addColorStop(0.4, 'rgba(228, 3, 46, 0.10)');
      outerHalo.addColorStop(0.8, 'rgba(228, 3, 46, 0.02)');
      outerHalo.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = outerHalo;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Foreground Red Accent Dots on active regions
      dots.forEach((dot) => {
        const pt = transform(dot);
        if (pt.pz >= 0 && dot.isLand) {
          const isRedAccent = Math.sin(dot.x * 12 + dot.y * 8 + dot.z * 15) > 0.78;
          if (isRedAccent) {
            const alpha = 0.4 + 0.6 * pt.pz;
            ctx.fillStyle = `rgba(228, 3, 46, ${alpha})`;
            ctx.shadowColor = '#E4032E';
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.arc(pt.px, pt.py, 1.8, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      });

      // 3. Foreground Curved Flight Arcs & Pulses
      CONNECTIONS.forEach(([i, j], idx) => {
        const p1 = transform(city3D[i]);
        const p2 = transform(city3D[j]);

        if (p1.pz >= 0 && p2.pz >= 0) {
          const midX = (p1.px + p2.px) / 2;
          const dist = Math.hypot(p2.px - p1.px, p2.py - p1.py);
          const arcElevation = Math.min(dist * 0.32, 40);
          const midY = (p1.py + p2.py) / 2 - arcElevation;

          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.quadraticCurveTo(midX, midY, p2.px, p2.py);

          const arcGrad = ctx.createLinearGradient(p1.px, p1.py, p2.px, p2.py);
          arcGrad.addColorStop(0, 'rgba(228, 3, 46, 0.85)');
          arcGrad.addColorStop(0.5, 'rgba(255, 160, 170, 0.95)');
          arcGrad.addColorStop(1, 'rgba(228, 3, 46, 0.85)');

          ctx.strokeStyle = arcGrad;
          ctx.lineWidth = 1.8;
          ctx.shadowColor = '#E4032E';
          ctx.shadowBlur = 5;
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Pulse particle
          const progress = (time * 0.5 + idx * 0.15) % 1;
          const pulseX =
            (1 - progress) * (1 - progress) * p1.px +
            2 * (1 - progress) * progress * midX +
            progress * progress * p2.px;
          const pulseY =
            (1 - progress) * (1 - progress) * p1.py +
            2 * (1 - progress) * progress * midY +
            progress * progress * p2.py;

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#E4032E';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 4. Foreground City Hub Markers & Pin Callouts
      CITIES.forEach((city, idx) => {
        const pt = transform(city3D[idx]);
        if (pt.pz >= 0) {
          const pulseScale = Math.sin(time * 3 + idx) * 0.2 + 1.1;

          // Outer halo
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, 6.5 * pulseScale, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(228, 3, 46, 0.3)';
          ctx.fill();

          // Inner dot
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#E4032E';
          ctx.shadowColor = '#E4032E';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;

          // White center
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();

          // Prominent city pin callouts
          if (pt.pz > 0.38 && ['New York', 'London', 'Tokyo', 'Sydney', 'Paris', 'Dubai'].includes(city.name)) {
            const isRight = pt.px > centerX;
            const offsetX = isRight ? 14 : -14;
            const labelX = pt.px + offsetX;
            const labelY = pt.py - 14;

            ctx.beginPath();
            ctx.moveTo(pt.px, pt.py);
            ctx.lineTo(labelX, labelY);
            ctx.strokeStyle = 'rgba(228, 3, 46, 0.7)';
            ctx.lineWidth = 1;
            ctx.stroke();

            const nameText = city.name;
            const countryText = city.country;
            ctx.font = '700 10px "Space Grotesk", sans-serif';
            const nameWidth = ctx.measureText(nameText).width;
            ctx.font = '500 8px "Plus Jakarta Sans", sans-serif';
            const countryWidth = ctx.measureText(countryText).width;
            const boxWidth = Math.max(nameWidth, countryWidth) + 12;
            const boxHeight = 24;
            const boxX = isRight ? labelX : labelX - boxWidth;
            const boxY = labelY - 12;

            ctx.fillStyle = 'rgba(10, 14, 24, 0.85)';
            ctx.strokeStyle = 'rgba(228, 3, 46, 0.35)';
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 5);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#FFFFFF';
            ctx.font = '700 10px "Space Grotesk", sans-serif';
            ctx.fillText(nameText, boxX + 6, boxY + 10);

            ctx.fillStyle = 'rgba(200, 215, 235, 0.7)';
            ctx.font = '500 8px "Plus Jakarta Sans", sans-serif';
            ctx.fillText(countryText, boxX + 6, boxY + 19);
          }
        }
      });

      // 5. Glossy Rim Ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(228, 3, 46, 0.25)';
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
      className="relative w-full aspect-square max-w-[580px] mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    >
      {/* 3D Earth Rotating Media Element (Video / GIF / Image) */}
      <div className="absolute w-[76%] h-[76%] rounded-full overflow-hidden shadow-[0_0_50px_rgba(228,3,46,0.3)] border border-red-500/20 bg-black flex items-center justify-center">
        {isVideo && !videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover rounded-full scale-105"
          >
            {mediaSrc && <source src={mediaSrc} type={cleanSrc.endsWith('.webm') ? 'video/webm' : cleanSrc.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />}
            <source src="/assets/videos/globe.mp4" type="video/mp4" />
            <source src="assets/videos/globe.mp4" type="video/mp4" />
            <source src="/assets/videos/globe.webm" type="video/webm" />
          </video>
        ) : isGif ? (
          <img
            src={mediaSrc || '/assets/gifs/globe.gif'}
            alt={alt}
            className="w-full h-full object-cover rounded-full scale-105"
            onError={(e) => {
              // Fallback to static image if gif path isn't found
              (e.currentTarget as HTMLImageElement).src = '/assets/images/globe.png';
            }}
          />
        ) : (
          <img
            src={videoError ? '/assets/gifs/globe.gif' : mediaSrc || '/assets/images/globe.png'}
            alt={alt}
            className="w-full h-full object-cover rounded-full scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/assets/images/globe.png';
            }}
          />
        )}
        {/* Dark cinematic vignette overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Interactive Global Network & Flight Lines Canvas Overlay */}
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-full h-full block absolute inset-0 z-10"
      />
    </div>
  );
};
