    function ripple(select,color,opacity,time) {
$(select).on( "click", function( eee ) {
  $(this).css({'width':'','height':''});
var ogstyle = $(this).attr('style');

var ppchars = "0123456789abcdefghijklmnopqrstuvwxyz";
            var ppid = "";
            for (var i = 0; i < 5; i++) {
                var randomNumber = Math.floor(Math.random() * ppchars.length);
                ppid += ppchars.substring(randomNumber, randomNumber + 1);
            }

            var ppcharsa = "0123456789abcdefghijklmnopqrstuvwxyz";
            var ppida = "";
            for (var ia = 0; ia < 5; ia++) {
                var randomNumbera = Math.floor(Math.random() * ppcharsa.length);
                ppida += ppcharsa.substring(randomNumbera, randomNumbera + 1);
            }
$(this).attr('rippleid',ppida);

  var pou = 'relative' ;
  if($(this).css('position') === 'absolute') {
    pou = 'absolute' ;
  }
  if($(this).css('position') === 'fixed') {
    pou = 'filed' ;
  }
  
            $(this).css({'width':$(this).width() + 'px','height':$(this).height() + 'px','position':pou,'overflow':'hidden','outline':'none','-webkit-tap-highlight-color':'rgba(0,0,0,0)'});
 ggww = ($(this).width()+$(this).height())*2 ;
if($(this).width() > $(this).height()) {
ggww = $(this).width()*4 ;
}
else {
ggww = $(this).height()*4 ;
}

 var xPos = (eee.pageX - $(this).offset().left)-(ggww/2);
 var yPos = (eee.pageY - $(this).offset().top)-(ggww/2);

$(this).append('<div style="width:' + ggww + 'px;height:' + ggww + 'px;position: absolute;top:' + yPos + 'px;left:' + xPos + 'px;border-radius:99em;transform:scale(0);transition:transform ' + (time/1000) + 's,opacity ' + (time/1.5/1000) + 's;opacity:' + opacity + ';background:' + color + '; overflow:hidden; -webkit-user-select:none; outline:none; -webkit-tap-highlight-color:rgba(0,0,0,0);transition-timing-function: ease-out;" id="' + ppid + '"></div>');

setTimeout(function () {
                    $('#' + ppid).css({'transform':'scale(1)'});
                }, 1);
  setTimeout(function () {
                    $('#' + ppid).css({'opacity':'0'});
                }, 5);
     setTimeout(function () {
                    $('#' + ppid).remove();
                    $('*[rippleid="' + ppida + '"]').attr('style',ogstyle);
                }, time/0.9);
  if($(this).attr('ripple-onclick') != '') {

  eval('setTimeout(function() {' + $(this).attr('ripple-onclick') + '},' + ((5+(time/1.5))/2) + ');');
  
}
});
}
