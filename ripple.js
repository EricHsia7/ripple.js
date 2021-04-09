(function ($) {
    $.fn.ripple = function (options) {
        var settings = $.extend(
            {
                opacity: "0.6",
                color: "#000",
                time: "0.6",
                darkmodecolor:"#fff"
            },
            options
        );
        return this.each(function () {
            $(this).on("click", function (eee) {
            var ppchars = "0123456789abcdefghijklmnopqrstuvwxyz";
            var rippleid = "";
            for (var i = 0; i < 16; i++) {
                var randomNumber = Math.floor(Math.random() * ppchars.length);
                rippleid += ppchars.substring(randomNumber, randomNumber + 1);
            }
            var xPos = eee.pageX - $(eee).offset().left - $(eee).width() * 2;
            var yPos = eee.pageY - $(eee).offset().top - $(eee).width() * 2;
            $(eee).append(
                '<div style="width:' +
                    $(eee).width() * 4 +
                    "px;height:" +
                    $(eee).width() * 4 +
                    "px;position:absolute;top:" +
                    yPos +
                    "px;left:" +
                    xPos +
                    'px;border-radius:99em;transform:scale(0);transition:transform 0.9s,opacity 0.8s;opacity:0.3; overflow:hidden; user-select:none;" id="' +
                    rippleid +
                    '" class="btn-cc-pp"></div>'
            );
            setTimeout(function () {
                $("#" + rippleid).css({ transform: "scale(1)", opacity: "0" });
            }, 1);
            setTimeout(function () {
                $("#" + rippleid).remove();
            }, 800);
        });
            }
        });
    };
})(jQuery);
