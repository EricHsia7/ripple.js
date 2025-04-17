export function isTouchSupported(): boolean {
  if (document) {
    if ('ontouchstart' in document.documentElement) {
      return true;
    }
  }
  return false;
}

export type ColorScheme = 'light' | 'dark';

export function getColorScheme(): ColorScheme {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  if (mediaQuery.matches) {
    return 'dark';
  } else {
    return 'light';
  }
}

const CssVariableValueCache = {
  light: {},
  dark: {},
};

export function getGlobalCSSPropertyValue(property: string): string {
  const CurrentColorScheme = getColorScheme();
  if (CssVariableValueCache[CurrentColorScheme].hasOwnProperty(property)) {
    return CssVariableValueCache[CurrentColorScheme][property];
  }
  const value = getComputedStyle(document.documentElement).getPropertyValue(property);
  CssVariableValueCache[CurrentColorScheme][property] = value;
  return value;
}

export function getLocalCSSPropertyValue(targetElement: HTMLElement, property: string): string {
  const value = getComputedStyle(targetElement).getPropertyValue(property);
  return value;
}
