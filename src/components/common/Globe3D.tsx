import React, { useEffect, useRef } from 'react';

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

export const Globe3D: React.FC = () => {
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

    // Generate lat/lng grid dots
    const numLat = 42;
    const numLng = 84;
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

    // Convert lat/lng to 3D point on unit sphere
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

      const radius = Math.min(width, height) * 0.40;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      const rot = rotationRef.current;
      const cosRot = Math.cos(rot);
      const sinRot = Math.sin(rot);
      const tilt = 0.24; // Tilt angle (~14 degrees)
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);

      // Transform 3D point helper
      const transform = (p: { x: number; y: number; z: number }) => {
        // Y-axis rotation
        const rx = p.x * cosRot + p.z * sinRot;
        const ry = p.y;
        const rz = -p.x * sinRot + p.z * cosRot;

        // X-axis tilt
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

      // 1. Floating Drop Shadow underneath Globe on floor
      const shadowY = centerY + radius * 1.12;
      const shadowGrad = ctx.createRadialGradient(
        centerX, shadowY, 0,
        centerX, shadowY, radius * 0.85
      );
      shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
      shadowGrad.addColorStop(0.4, 'rgba(0, 0, 0, 0.25)');
      shadowGrad.addColorStop(0.8, 'rgba(0, 0, 0, 0.05)');
      shadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centerX, shadowY, radius * 0.75, radius * 0.14, 0, 0, Math.PI * 2);
      ctx.fillStyle = shadowGrad;
      ctx.fill();
      ctx.restore();

      // 2. Outer Red Atmospheric Glow Halo
      const outerHalo = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.82,
        centerX,
        centerY,
        radius * 1.35
      );
      outerHalo.addColorStop(0, 'rgba(228, 3, 46, 0.28)');
      outerHalo.addColorStop(0.35, 'rgba(228, 3, 46, 0.12)');
      outerHalo.addColorStop(0.7, 'rgba(228, 3, 46, 0.03)');
      outerHalo.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = outerHalo;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 3. Realistic Dark Glossy Sphere Surface Base
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);

      // Deep obsidian sphere base with glossy reflection
      const sphereGrad = ctx.createRadialGradient(
        centerX + radius * 0.35,
        centerY - radius * 0.4,
        radius * 0.05,
        centerX,
        centerY,
        radius
      );
      sphereGrad.addColorStop(0, '#2b3242');
      sphereGrad.addColorStop(0.2, '#181e2b');
      sphereGrad.addColorStop(0.65, '#0c0f17');
      sphereGrad.addColorStop(0.95, '#05060a');
      sphereGrad.addColorStop(1, '#020305');

      ctx.fillStyle = sphereGrad;
      ctx.fill();

      // Curved specular glossy reflection arc on top right
      const glossGrad = ctx.createLinearGradient(
        centerX - radius * 0.5,
        centerY - radius * 0.8,
        centerX + radius * 0.8,
        centerY + radius * 0.5
      );
      glossGrad.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
      glossGrad.addColorStop(0.25, 'rgba(255, 255, 255, 0.08)');
      glossGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = glossGrad;
      ctx.fill();
      ctx.restore();

      // 4. Render Background Grid Dots (Z < 0)
      dots.forEach((dot) => {
        const pt = transform(dot);
        if (pt.pz < 0) {
          if (dot.isLand) {
            const alpha = Math.max(0.05, 0.18 * (1 + pt.pz));
            ctx.fillStyle = `rgba(120, 135, 155, ${alpha})`;
            ctx.beginPath();
            ctx.arc(pt.px, pt.py, 1.0, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // 5. Render Background Connections (Z < 0)
      CONNECTIONS.forEach(([i, j]) => {
        const p1 = transform(city3D[i]);
        const p2 = transform(city3D[j]);
        if (p1.pz < 0 || p2.pz < 0) {
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          const midX = (p1.px + p2.px) / 2;
          const midY = (p1.py + p2.py) / 2 - 15;
          ctx.quadraticCurveTo(midX, midY, p2.px, p2.py);
          ctx.strokeStyle = 'rgba(228, 3, 46, 0.12)';
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      });

      // 6. Render Foreground Dots (Z >= 0)
      dots.forEach((dot) => {
        const pt = transform(dot);
        if (pt.pz >= 0) {
          if (dot.isLand) {
            // Bright high-contrast metallic dots on land
            const alpha = 0.35 + 0.65 * pt.pz;
            // Red glowing accent dots scattered across active regions
            const isRedAccent = (Math.sin(dot.x * 12 + dot.y * 8 + dot.z * 15) > 0.82);

            if (isRedAccent) {
              ctx.fillStyle = `rgba(228, 3, 46, ${alpha})`;
              ctx.shadowColor = '#E4032E';
              ctx.shadowBlur = 4;
              ctx.beginPath();
              ctx.arc(pt.px, pt.py, 1.8, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0;
            } else {
              ctx.fillStyle = `rgba(215, 225, 240, ${alpha})`;
              ctx.beginPath();
              ctx.arc(pt.px, pt.py, 1.4, 0, Math.PI * 2);
              ctx.fill();
            }
          } else {
            // Subtle ocean grid dots for depth
            const alpha = 0.08 * pt.pz;
            ctx.fillStyle = `rgba(80, 100, 125, ${alpha})`;
            ctx.beginPath();
            ctx.arc(pt.px, pt.py, 0.9, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // 7. Render Foreground Glowing Arcs & Light Pulses (Z >= 0)
      CONNECTIONS.forEach(([i, j], idx) => {
        const p1 = transform(city3D[i]);
        const p2 = transform(city3D[j]);

        if (p1.pz >= 0 && p2.pz >= 0) {
          // Calculate 3D elevated arc midpoint
          const midX = (p1.px + p2.px) / 2;
          const dist = Math.hypot(p2.px - p1.px, p2.py - p1.py);
          const arcElevation = Math.min(dist * 0.35, 45);
          const midY = (p1.py + p2.py) / 2 - arcElevation;

          // Arc stroke line with red gradient
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.quadraticCurveTo(midX, midY, p2.px, p2.py);

          const arcGrad = ctx.createLinearGradient(p1.px, p1.py, p2.px, p2.py);
          arcGrad.addColorStop(0, 'rgba(228, 3, 46, 0.85)');
          arcGrad.addColorStop(0.5, 'rgba(255, 140, 150, 0.95)');
          arcGrad.addColorStop(1, 'rgba(228, 3, 46, 0.85)');

          ctx.strokeStyle = arcGrad;
          ctx.lineWidth = 2.0;
          ctx.shadowColor = '#E4032E';
          ctx.shadowBlur = 6;
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Flowing Light Pulse particle traveling along curve
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
          ctx.arc(pulseX, pulseY, 3.2, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#E4032E';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 8. Render Foreground City Nodes & Pinned Callout Labels
      CITIES.forEach((city, idx) => {
        const pt = transform(city3D[idx]);
        if (pt.pz >= 0) {
          const pulseScale = Math.sin(time * 3 + idx) * 0.25 + 1.15;

          // Outer glowing red ring
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, 7 * pulseScale, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(228, 3, 46, 0.35)';
          ctx.fill();

          // Inner solid red node
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = '#E4032E';
          ctx.shadowColor = '#E4032E';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;

          // White center pin core
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();

          // Pinned Location Text Callouts (for prominent cities when visible)
          if (pt.pz > 0.35 && ['New York', 'London', 'Tokyo', 'Sydney', 'Paris', 'Dubai'].includes(city.name)) {
            const isRight = pt.px > centerX;
            const offsetX = isRight ? 16 : -16;
            const labelX = pt.px + offsetX;
            const labelY = pt.py - 16;

            // Pin Line
            ctx.beginPath();
            ctx.moveTo(pt.px, pt.py);
            ctx.lineTo(labelX, labelY);
            ctx.strokeStyle = 'rgba(228, 3, 46, 0.8)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Badge Background Box
            const nameText = city.name;
            const countryText = city.country;
            ctx.font = '700 11px "Space Grotesk", sans-serif';
            const nameWidth = ctx.measureText(nameText).width;
            ctx.font = '500 9px "Plus Jakarta Sans", sans-serif';
            const countryWidth = ctx.measureText(countryText).width;
            const boxWidth = Math.max(nameWidth, countryWidth) + 14;
            const boxHeight = 28;
            const boxX = isRight ? labelX : labelX - boxWidth;
            const boxY = labelY - 14;

            // Glass badge box
            ctx.fillStyle = 'rgba(12, 16, 26, 0.88)';
            ctx.strokeStyle = 'rgba(228, 3, 46, 0.4)';
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 6);
            ctx.fill();
            ctx.stroke();

            // Text
            ctx.fillStyle = '#FFFFFF';
            ctx.font = '700 11px "Space Grotesk", sans-serif';
            ctx.fillText(nameText, boxX + 7, boxY + 11);

            ctx.fillStyle = 'rgba(200, 210, 225, 0.75)';
            ctx.font = '500 9px "Plus Jakarta Sans", sans-serif';
            ctx.fillText(countryText, boxX + 7, boxY + 22);
          }
        }
      });

      // 9. Glossy Outer Rim Ring Highlight
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1.5;
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
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-full h-full block"
      />
    </div>
  );
};
