(function (window, document, drawModule, undefined) {

    var btn1 = document.getElementById('btnEas');
    var btn2 = document.getElementById('btnMed');
    var btn3 = document.getElementById('btnHar');

    btn1.addEventListener("click", function(){ drawModule.init(65, this);});
    btn2.addEventListener("click", function(){ drawModule.init(50, this);});
    btn3.addEventListener("click", function(){ drawModule.init(35, this);});

    document.onkeydown = function(event) {                  // Kollar efter användarens knapptryck

        var keyCode;

        if (window.event) {                                 //De olika webbläsarna har olika system för knapptryck
            keyCode = window.event.keyCode;                 // Detta var ett försök att fixa det för firefox, men det funkade ej
        }
        else if (event.keyCode) {
            keyCode = event.keyCode;
        }
        else {
            keyCode = event.which;
        }
        keys(keyCode);

    };

    function keys(key)              //Funktion som bestämmer ormens riktning och använder användarens input som variabel
    {
        if (btnpress == true) {

            switch (key) {

                case 37:
                    if (direction != 'right') {
                        direction = 'left';
                        console.log('left');
                        btnpress = false;
                    }

                    break;

                case 39:
                    if (direction != 'left') {
                        direction = 'right';
                        console.log('right');
                        btnpress = false;
                    }
                    break;

                case 38:
                    if (direction != 'down') {
                        direction = 'up';
                        console.log('up');
                        btnpress = false;
                    }
                    break;

                case 40:
                    if (direction != 'up') {
                        direction = 'down';
                        console.log('down');
                        btnpress = false;
                    }
                    break;
            }
        }
    }


})(window, document, drawModule);
