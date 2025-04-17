export function isTouchSupported(): boolean {
  if (document) {
    if ('ontouchstart' in document.documentElement) {
      return true;
    }
  }
  return false;
}
