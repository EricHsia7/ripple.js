const ripple = {
  supportTouch: function () {
    if ('ontouchstart' in document.documentElement) {
      return true
    }
    else {
      return false
    }
  },
  addTo: function (selector, color, duration, callback) {
    var Allelements = document.querySelectorAll(selector)
    if (Allelements) {
      if (Allelements.length === undefined) {
        Allelements = [Allelements]
      }
      if (Allelements.length === 0) {
        throw (new Error(`Element was not found.`))
      }
      if (typeof callback === 'function') {
        callback = [callback]
      }
      else {
        if (!Array.isArray(callback) || callback.length === undefined) {
          var callback = []
        }
      }
      if (callback) {
        if (callback.length === undefined) {
          if (typeof callback === 'function') {
            callback = [callback]
          } else {
            var callback = []
          }
        }
      }
      else {
        var callback = []
      }

      for (var k = 0; k < Allelements.length; k++) {
        ripple._addToSingleElement(Allelements[k], color, duration, callback[k]);
      }
      return `Ripple effect was added to ${Allelements.length} element${(Allelements.length > 1 ? 's' : '')}.`
    }
    else {
      throw (new Error(`Element was not found.`))
    }
  },
  _addToSingleElement: function (element, color, duration, callback) {
    var eventlistener = 'mousedown'
    if (ripple.supportTouch()) {
      eventlistener = 'touchstart'
    }
    element.addEventListener(eventlistener, function (event) {
      var idchars = "0123456789abcdefghijklmnopqrstuvwxyz";
      var ripple_id = "";
      for (var i = 0; i < 16; i++) {
        var idrandomNumber = Math.floor(Math.random() * idchars.length);
        ripple_id += idchars.substring(idrandomNumber, idrandomNumber + 1);
      }
      var scroll_x = document.documentElement.scrollLeft
      var scroll_y = document.documentElement.scrollTop
      var x = event.pageX
      var y = event.pageY
      var element_rect = element.getBoundingClientRect()
      var element_x = element_rect.x + scroll_x
      var element_y = element_rect.y + scroll_y
      var element_width = element.clientWidth
      var element_height = element.clientHeight
      var relative_x = x - element_x
      var relative_y = y - element_y
      var ripple_size = Math.max(element_width, element_height)
      var ripple_boundary_x = relative_x - 0.5 * ripple_size
      var ripple_boundary_y = relative_y - 0.5 * ripple_size
      var distance_top = relative_y - 0
      var distance_left = relative_x - 0
      var distance_right = element_width - relative_x
      var distance_bottom = element_height - relative_y
      var distance_top_left_corner = Math.sqrt(Math.pow(distance_top, 2) + Math.pow(distance_left, 2))
      var distance_top_right_corner = Math.sqrt(Math.pow(distance_top, 2) + Math.pow(distance_right, 2))
      var distance_bottom_left_corner = Math.sqrt(Math.pow(distance_bottom, 2) + Math.pow(distance_left, 2))
      var distance_bottom_right_corner = Math.sqrt(Math.pow(distance_bottom, 2) + Math.pow(distance_right, 2))
      var ripple_zoom = Math.max(2, (Math.max(distance_top_left_corner, distance_top_right_corner, distance_bottom_left_corner, distance_bottom_right_corner) / (ripple_size / 2)))
      var element_position = getComputedStyle(element).getPropertyValue('position')
      if (!(element_position === 'absolute') && !(element_position === 'fixed')) {
        element_position = 'relative'
      }
      var css = `.ripple-element-${ripple_id} {position:${element_position};overflow:hidden;width:${element_width}px;height:${element_height}px; outline:none; -webkit-tap-highlight-color:rgba(0,0,0,0); -webkit-mask-image: -webkit-radial-gradient(white, black);mask-image: -webkit-radial-gradient(white, black);}.ripple-element-ripple-${ripple_id} {background:${color};width:${ripple_size}px; height:${ripple_size}px;border-radius:50%;position:absolute; top:${ripple_boundary_y}px; left:${ripple_boundary_x}px;transform:scale(0); opacity:0;animation-duration: ${duration}ms;animation-name: ripple-animation-opacity-${ripple_id},ripple-animation-zoom-${ripple_id};animation-iteration-count: forward;animation-timing-function:linear;}@keyframes ripple-animation-opacity-${ripple_id} {0% {opacity:0.15;}60% {opacity:0.15;}100% { opacity:0;} } @keyframes ripple-animation-zoom-${ripple_id} {0% {transform:scale(0.1)}65% {  transform:scale(${ripple_zoom})}100% {transform:scale(${ripple_zoom})}}`
      element.classList.add(`ripple-element-${ripple_id}`)
      var css_style_element = document.createElement("style")
      css_style_element.innerHTML = css
      css_style_element.id = `ripple-css-${ripple_id}`
      element.appendChild(css_style_element)
      var ripple_element_ripple = document.createElement("div")
      ripple_element_ripple.id = `ripple-element-ripple-${ripple_id}`
      ripple_element_ripple.classList.add(`ripple-element-ripple-${ripple_id}`)
      element.appendChild(ripple_element_ripple)

      if (typeof callback === 'function') {
        document.getElementById(`ripple-element-ripple-${ripple_id}`).addEventListener('animationstart', function (e) {
          setTimeout(function () {
            callback()
            if (!(document.getElementById(`ripple-element-ripple-${ripple_id}`) === null)) {
              element.classList.remove(`ripple-element-${ripple_id}`)
              document.getElementById(`ripple-element-ripple-${ripple_id}`).remove()
              document.getElementById(`ripple-css-${ripple_id}`).remove()
            }
          }, duration * 0.75)
        }, { once: true });
      }
      else {
        document.getElementById(`ripple-element-ripple-${ripple_id}`).addEventListener('animationend', function (e) {
          if (!(document.getElementById(`ripple-element-ripple-${ripple_id}`) === null)) {
            element.classList.remove(`ripple-element-${ripple_id}`)
            document.getElementById(`ripple-element-ripple-${ripple_id}`).remove()
            document.getElementById(`ripple-css-${ripple_id}`).remove()
          }
        }, { once: true })
        setTimeout(function () {
          if (!(document.getElementById(`ripple-element-ripple-${ripple_id}`) === null)) {
            element.classList.remove(`ripple-element-${ripple_id}`)
            document.getElementById(`ripple-element-ripple-${ripple_id}`).remove()
            document.getElementById(`ripple-css-${ripple_id}`).remove()
          }
        }, duration + 50);
      }
    })
  }
};

if (!window.document) {
  throw (new Error('Ripple.js need a window with a document.'));
}
window.ripple = ripple;