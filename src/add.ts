import { getLocalCSSPropertyValue, isTouchSupported } from './tools';
import { AccentColor } from './type';

function playRippleEffect(event: Event): void {
  const targetElement = event.target as HTMLElement;
  const currentPosition = getLocalCSSPropertyValue(targetElement, 'position');
  switch (currentPosition) {
    case 'static':
      targetElement.classList.add('ripple-position-relative');
      break;
    case 'fixed':
      break;
    case 'absolute':
      break;
    case 'relative':
      break;
    case 'sticky':
      break;
    default:
      break;
  }

  const newRippleElement = document.createElement('div');
}

export type AccentColor = string | [red: number, green: number, blue: number, alpha?: number];

export function addRippleTo(targetElement: HTMLElement, accentColor: AccentColor, duration: number): void {
  const triggerEventIndex = isTouchSupported() ? 0 : 1;
  const triggerEvent = ['touchstart', 'mousedown'][triggerEventIndex];
  targetElement.addEventListener(triggerEvent, function (event: Event) {});
}
