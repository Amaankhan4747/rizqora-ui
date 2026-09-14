import React, { useState } from 'react';
import { ASSET_PATHS } from '../../utils/assets';

interface RizqoraaLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  height?: number | string;
  showTagline?: boolean;
}

export const RizqoraaLogo: React.FC<RizqoraaLogoProps> = ({
  className = '',
  variant = 'light',
  height = 40,
}) => {
  const [imgError, setImgError] = useState(false);

  // High-resolution uploaded logo paths:
  // - Header (light): /rizqoraalogo.png
  // - Footer (dark): /footer-logo.png (dedicated footer logo file)
  const isDark = variant === 'dark';
  const primarySrc = isDark 
    ? ASSET_PATHS.images.footerLogo 
    : ASSET_PATHS.images.logo;

  const fallbackSrc = isDark 
    ? ASSET_PATHS.images.footerLogoAlt 
    : ASSET_PATHS.images.logoAlt;

  const heightStyle = typeof height === 'number' ? `${height}px` : height;

  if (imgError) {
    // Graceful SVG typography fallback if asset fails
    return (
      <div 
        className={`inline-flex items-center gap-2 select-none px-1 py-0.5 rounded transition-colors ${className}`}
        style={{ height: heightStyle }}
      >
        <div className="w-8 h-8 rounded-lg bg-[#E4032E] flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
          R
        </div>
        <div className="flex flex-col">
          <span className={`text-xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight ${
            isDark ? 'text-white' : 'text-[#141414]'
          }`}>
            Rizqoraa<span className="text-[#E4032E]">.</span>
          </span>
          <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold leading-none">
            Connecting Every Language
          </span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`inline-flex items-center select-none ${className}`}
      style={{ height: heightStyle }}
    >
      <img
        src={primarySrc}
        alt="Rizqoraa Logo"
        className="w-auto h-full max-h-full object-contain transition-opacity duration-200"
        onError={(e) => {
          const target = e.currentTarget;
          if (fallbackSrc && target.src !== window.location.origin + fallbackSrc) {
            target.src = fallbackSrc;
          } else {
            setImgError(true);
          }
        }}
      />
    </div>
  );
};
