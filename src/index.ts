/* v1.0.4 */
const ripple = {
  supportTouch: function () {
    if ('ontouchstart' in document.documentElement) {
      return true;
    } else {
      return false;
    }
  },
  addTo: function (
    selector: string,
    color: string,
    duration: number,
    callback?: Function | Function[]
  ): string {
    var Allelements = document.querySelectorAll(selector);
    if (Allelements) {
      if (Allelements.length === 0) {
        throw new Error(`Element was not found.`);
      }

      if (typeof callback === 'function') {
        callback = [callback];
      } else {
        if (!Array.isArray(callback) || callback.length === undefined) {
          callback = [];
        }
      }

      if (callback) {
        if (callback.length === undefined) {
          if (typeof callback === 'function') {
            callback = [callback];
          } else {
            callback = [];
          }
        }
      } else {
        callback = [];
      }

      for (let k = 0; k < Allelements.length; k++) {
        ripple.__addToSingleElement(
          Allelements[k] as HTMLElement,
          color,
          duration,
          callback[k] as Function
        );
      }

      return `Ripple effect was added to ${Allelements.length} element${Allelements.length > 1 ? 's' : ''}.`;
    } else {
      throw new Error(`Element was not found.`);
    }
  },
  __addToSingleElement: function (
    element: HTMLElement,
    color: string,
    duration: number,
    callback?: Function
  ): void {
    var eventlistener = 'mousedown';
    if (ripple.supportTouch()) {
      eventlistener = 'touchstart';
    }

    element.addEventListener(eventlistener, function (event) {
      // Remaining code in the __addToSingleElement function
      // ...

      if (typeof callback === 'function') {
        document
          .getElementById(`ripple-element-ripple-${ripple_id}`)
          ?.addEventListener(
            'animationstart',
            function (e) {
              setTimeout(function () {
                callback!();

                const rippleElement = document.getElementById(`ripple-element-ripple-${ripple_id}`);
                const rippleCss = document.getElementById(`ripple-css-${ripple_id}`);
                if (rippleElement) {
                  element.classList.remove(`ripple-element-${ripple_id}`);
                  rippleElement.remove();
                }
                if (rippleCss) {
                  rippleCss.remove();
                }
              }, duration * 1);
            },
            { once: true }
          );
      } else {
        document
          .getElementById(`ripple-element-ripple-${ripple_id}`)
          ?.addEventListener(
            'animationend',
            function (e) {
              const rippleElement = document.getElementById(
                `ripple-element-ripple-${ripple_id}`
              );
              const rippleCss = document.getElementById(
                `ripple-css-${ripple_id}`
              );
              if (rippleElement) {
                element.classList.remove(`ripple-element-${ripple_id}`);
                rippleElement.remove();
              }
              if (rippleCss) {
                rippleCss.remove();
              }
            },
            { once: true }
          );

        setTimeout(function () {
          const rippleElement = document.getElementById(
            `ripple-element-ripple-${ripple_id}`
          );
          const rippleCss = document.getElementById(
            `ripple-css-${ripple_id}`
          );
          if (rippleElement) {
            element.classList.remove(`ripple-element-${ripple_id}`);
            rippleElement.remove();
          }
          if (rippleCss) {
            rippleCss.remove();
          }
        }, duration + 50);
      }
    });
  },
};

if (!window.document) {
  throw new Error('Ripple.js needs a window with a document.');
}
window.ripple = ripple;
