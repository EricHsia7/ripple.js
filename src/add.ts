import { getLocalCSSPropertyValue, isTouchSupported } from './tools';
import { AccentColor } from './type';

function playRippleEffect(event: Event): void {
  const scrollX = document.documentElement.scrollLeft;
  const scrollY = document.documentElement.scrollTop;
  const x = event.pageX;
  const y = event.pageY;
  const targetElement = event.target as HTMLElement;
  const targetElementRect = targetElement.getBoundingClientRect();
  const targetElementX = targetElementRect.x + scrollX;
  const targetElementY = targetElementRect.y + scrollY;
  const taregtElementWidth = targetElementRect.width;
  const targetElementHeight = targetElementRect.height;
  const pointerEelativeX = x - targetElementX;
  const pointerRelativeY = y - targetElementY;
  const rippleSize = Math.max(taregtElementWidth, targetElementHeight);
  const rippleBoundaryX = pointerEelativeX - 0.5 * rippleSize;
  const rippleBoundaryY = pointerRelativeY - 0.5 * rippleSize;
  const distanceToTop = pointerRelativeY - 0;
  const distanceToLeft = pointerEelativeX - 0;
  const distanceToRight = taregtElementWidth - pointerEelativeX;
  const distanceToBottom = targetElementHeight - pointerRelativeY;
  const distanceToTopLeftCorner = Math.hypot(distanceToTop, distanceToLeft);
  const distanceToTopRightCorner = Math.hypot(distanceToTop, distanceToRight);
  const distanceToBottomLeftCorner = Math.hypot(distanceToBottom, distanceToLeft);
  const distanceBottomRightCorner = Math.hypot(distanceToBottom, distanceToRight);
  const rippleScale = Math.max(2, Math.max(distanceToTopLeftCorner, distanceToTopRightCorner, distanceToBottomLeftCorner, distanceBottomRightCorner) / (rippleSize / 2));

  const initialPosition = getLocalCSSPropertyValue(targetElement, 'position');
  switch (initialPosition) {
    case 'static':
      targetElement.classList.add('ripple-parent-position-relative');
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

  targetElement.style.setProperty('--ripple-parent-size-width', `${taregtElementWidth}px`);
  targetElement.style.setProperty('--ripple-parent-size-height', `${targetElementHeight}px`);
  targetElement.classList.add('ripple-parent-size');

  targetElement.classList.add('ripple-parent-overflow');

  const newRippleElement = document.createElement('div');

  newRippleElement.style.setProperty('--ripple-position-left', `${rippleBoundaryX}px`);
  newRippleElement.style.setProperty('--ripple-position-top', `${rippleBoundaryY}px`);
  newRippleElement.classList.add('ripple-position');

  newRippleElement.style.setProperty('--ripple-size-width', `${rippleSize}px`);
  newRippleElement.style.setProperty('--ripple-size-height', `${rippleSize}px`);
  newRippleElement.classList.add('ripple-size');

  newRippleElement.classList.add('ripple-appearance');

  newRippleElement.style.setProperty('--ripple-scale', rippleScale.toString());
  newRippleElement.classList.add('ripple-scale');

  newRippleElement.addEventListener(
    'animationend',
    function (event2: Event) {
      const rippleEndEvent = new CustomEvent('rippleend');
      targetElement.dispatchEvent(rippleEndEvent);
      const target2 = event2.target as HTMLElement;
      target2.remove();
      targetElement.classList.remove('ripple-parent-size');
      targetElement.classList.remove('ripple-parent-overflow');
      targetElement.classList.remove('ripple-parent-position-relative');
    },
    { once: true }
  );
  targetElement.appendChild(newRippleElement);
  const rippleStartEvent = new CustomEvent('ripplestart');
  targetElement.dispatchEvent(rippleStartEvent);
}

export type AccentColor = string; // | [red: number, green: number, blue: number, alpha?: number];

export function addRippleTo(targetElement: HTMLElement, accentColor: AccentColor, duration: number): void {
  const triggerEventIndex = isTouchSupported() ? 0 : 1;
  const triggerEvent = ['touchstart', 'mousedown'][triggerEventIndex];
  targetElement.style.setProperty('--ripple-duration', `${duration}ms`);
  targetElement.style.setProperty('--ripple-accent-color', accentColor);
  targetElement.addEventListener(triggerEvent, playRippleEffect);
}
