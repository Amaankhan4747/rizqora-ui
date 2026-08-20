export interface CMSSection {
  [key: string]: any;
}

export function cmsText(cms: CMSSection | undefined, key: string, fallback: string): string {
  if (!cms || cms[key] === undefined || cms[key] === null) return fallback;
  return String(cms[key]);
}

export function cmsArray<T>(custom: any, fallback: T[]): T[] {
  if (Array.isArray(custom) && custom.length > 0) return custom;
  return fallback;
}
