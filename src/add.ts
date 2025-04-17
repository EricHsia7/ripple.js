import { isTouchSupported } from './tools';
import { AccentColor } from './type';

export function addRippleTo(targetElement: HTMLElement, accentColor: AccentColor, duration: number): void {
  const triggerEventIndex = isTouchSupported() ? 0 : 1;
  const triggerEvent = ['touchstart', 'mousedown'][triggerEventIndex];
  targetElement.addEventListener(triggerEvent, function (event: Event) {
    const newRippleElement = document.createElement('div');
  });
}
