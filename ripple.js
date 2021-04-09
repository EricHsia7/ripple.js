        $(".bottom-btn-b a").on("click", function (eee) {
            var ppchars = "0123456789abcdefghijklmnopqrstuvwxyz";
            var ppid = "";
            for (var i = 0; i < 16; i++) {
                var randomNumber = Math.floor(Math.random() * ppchars.length);
                ppid += ppchars.substring(randomNumber, randomNumber + 1);
            }
            var xPos = eee.pageX - $(this).offset().left - $(this).width() * 2;
            var yPos = eee.pageY - $(this).offset().top - $(this).width() * 2;
            $(this).append(
                '<div style="width:' +
                    $(this).width() * 4 +
                    "px;height:" +
                    $(this).width() * 4 +
                    "px;position:absolute;top:" +
                    yPos +
                    "px;left:" +
                    xPos +
                    'px;border-radius:99em;transform:scale(0);transition:transform 0.9s,opacity 0.8s;opacity:0.3; overflow:hidden; user-select:none;" id="' +
                    ppid +
                    '" class="btn-cc-pp"></div>'
            );
            setTimeout(function () {
                $("#" + ppid).css({ transform: "scale(1)", opacity: "0" });
            }, 1);
            setTimeout(function () {
                $("#" + ppid).remove();
            }, 800);
        });
