export function getScriptFontClass(scriptType?: string): string {
  switch (scriptType) {
    case 'arabic':
      return 'font-script-arabic';
    case 'devanagari':
      return 'font-script-devanagari';
    case 'cjk':
      return 'font-script-cjk';
    case 'cyrillic':
      return 'font-script-cyrillic';
    case 'hebrew':
      return 'font-script-hebrew';
    case 'indic':
      return 'font-script-indic';
    default:
      return '';
  }
}
