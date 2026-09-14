/**
 * Static Media Asset Helper
 * Supports:
 * - Images: JPG, JPEG, PNG, WEBP, SVG, GIF
 * - Videos: MP4, WEBM, MOV
 * - GIFs: Animated GIF from /assets/gifs/
 */

export const ASSET_PATHS = {
  images: {
    // Header logo
    logo: '/rizqoraalogo.png',
    logoRaw: '/rizqoraalogo.png',
    logoAlt: '/assets/images/rizqoraalogo.png',
    // Dedicated Footer logo (upload new file to: public/footer-logo.png)
    footerLogo: '/footer-logo.png',
    footerLogoAlt: '/assets/images/footer-logo.png',
    techBg: '/Bgmap.png',
    bgMap: '/Bgmap.png',
    globePng: '/assets/images/globe.png',
  },
  videos: {
    globeMp4: '/assets/videos/globe.mp4',
  },
  gifs: {
    globeGif: '/assets/gifs/glob.gif',
  },
};

export type MediaType = 'video' | 'gif' | 'image';

export function getMediaType(src: string): MediaType {
  const cleanSrc = src.split('?')[0].toLowerCase();
  if (
    cleanSrc.endsWith('.mp4') ||
    cleanSrc.endsWith('.webm') ||
    cleanSrc.endsWith('.mov') ||
    cleanSrc.endsWith('.m4v')
  ) {
    return 'video';
  }
  if (cleanSrc.endsWith('.gif')) {
    return 'gif';
  }
  return 'image';
}
