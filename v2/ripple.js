var ripple_origin_css = {};
function rippleid() {
  var a = "0123456789abcdefghijklmnopqrstuvwxyz"
  var b = ""
  for (var c = 0; c < 16; c++) {
    var d = Math.floor(Math.random() * a.length);
    b += a.substring(d, d + 1);
  }
  return 'rp' + b;
}
function ripple(selector, color, opacity, time) {
  selector.style.overflow = "hidden";
  selector.style.webkitMaskImage = '-webkit-radial-gradient(white, black)'
  selector.style.outline = 'none'
  selector.style.webkitTapHighlightColor = 'rgba(0,0,0,0)'

  selector.addEventListener('click', event => {
    var div_width = selector.clientWidth;
    var div_height = selector.clientWidth;
    var ripple_size = Math.max(div_width, div_height) * 4
    var rpid = String(rippleid())
    ripple_origin_css[rpid] = selector.getAttribute('style')



    //set css
    var c_position = "relative";
    if (selector.style.position === "fixed") {
      c_position = "fixed";
    }
    if (selector.style.position === "absolute") {
      c_position = "absolute";
    }
    selector.style.position = c_position;
    //set css end

    //ripple animation
    var rippleanimationid = rippleid()
    var ripplestyletag = document.createElement("style");
    ripplestyletag.id = rippleanimationid
    ripplestyletag.innerHTML = '.rippleanimation' + rippleanimationid + ' {animation-name:ripple' + rippleanimationid + ';animation-duration:' + (time / 1000) + 's;animation-fill-mode:forwards;animation-timing-function:ease-out}@keyframes ripple' + rippleanimationid + ' {0%{opacity:' + opacity + ';transform:translate(' + (ripple_size / -2) + 'px,' + (ripple_size / -2) + 'px) scale(0)}60%{opacity:' + (0) + ';transform:translate(' + (ripple_size / -2) + 'px,' + (ripple_size / -2) + 'px) scale(0.8)}100%{opacity:' + (0) + ';transform:translate(' + (ripple_size / -2) + 'px,' + (ripple_size / -2) + 'px) scale(1)}}'
    selector.appendChild(ripplestyletag);
    //ripple animation end
    //add ripple

    var rippledivid = rippleid()
    var ripple_div_top = (event.pageY - selector.offsetTop)
    var ripple_div_left = (event.pageX - selector.offsetLeft)

    var ripple_div = document.createElement("div");
    ripple_div.id = rippledivid
    ripple_div.style.position = 'absolute'
    ripple_div.style.top = ripple_div_top + 'px'
    ripple_div.style.left = ripple_div_left + 'px'
    ripple_div.style.width = ripple_size + 'px'
    ripple_div.style.height = ripple_size + 'px'
    ripple_div.style.background = color
    ripple_div.style.transform = 'translate(' + (ripple_size / -2) + 'px,' + (ripple_size / -2) + 'px)'
    ripple_div.style.borderRadius = ripple_size + 'px'
    ripple_div.style.webkitUserSelect = 'none'
    ripple_div.style.userSelect = 'none'
    ripple_div.classList.add('rippleanimation' + rippleanimationid);

    selector.appendChild(ripple_div);

    //add ripple end
    setTimeout(function () {
      selector.setAttribute('style', ripple_origin_css[rpid])
      document.querySelector('#' + rippledivid).remove()
      document.querySelector('#' + rippleanimationid).remove()

    }, time + 30)

  });
}
