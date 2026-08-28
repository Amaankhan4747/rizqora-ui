/**
 * Static Media Asset Helper
 * Supports:
 * - Images: JPG, JPEG, PNG, WEBP, SVG, GIF
 * - Videos: MP4, WEBM, MOV
 * - GIFs: Animated GIF from /assets/gifs/
 */

export const ASSET_PATHS = {
  images: {
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
