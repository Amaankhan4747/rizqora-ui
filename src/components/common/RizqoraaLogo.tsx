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
  height = 38,
}) => {
  const [imgError, setImgError] = useState(false);

  // Dedicated manual upload file path:
  // Upload light logo to: public/assets/images/logo.png
  // Upload dark logo to: public/assets/images/logo-dark.png (or logo.png)
  const imgSrc = variant === 'dark' 
    ? (ASSET_PATHS.images.logoDark || ASSET_PATHS.images.logo)
    : ASSET_PATHS.images.logo;

  const heightStyle = typeof height === 'number' ? `${height}px` : height;

  if (imgError) {
    // Elegant fallback space reserved while or if manual logo file is replaced
    const isDark = variant === 'dark';
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
      style={{ height: heightStyle, minWidth: '140px' }}
    >
      <img
        src={imgSrc}
        alt="Rizqoraa Logo"
        className="w-auto h-full max-h-full object-contain transition-opacity duration-200"
        onError={() => setImgError(true)}
      />
    </div>
  );
};
