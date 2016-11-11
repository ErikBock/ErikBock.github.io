var drawModule = (function () {

    var bodySnake = function(x, y) {                                // Funktion som ritar en kvadrat och en ram som sedan färgas
        ctx.fillStyle = 'green';                                    // Detta är alltså det ormen kommer bestå av
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    };

    var pizza = function(x, y) {                                //Samma som föregående funktion, fast denna gången för maten (pizza)
        ctx.fillStyle = 'blue';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
    };

    var scoreText = function() {                            // Funktion som beräknar och skriver ut spelarens poäng
        var score_text = "Score: " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(score_text, h-(h/2)-(h/40), h-5);
    };


    var drawSnake = function() {                      // Funktion som bestämmer längden på ormen
        var length = 4;
        snake = [];
        for (var i = length-1; i>=0; i--) {
            snake.push({x:i, y:0});
        }
    };

    var paint = function(){                         // Funktion som ansvarar för att alla andra funktioner används
        ctx.fillStyle = 'skyblue';                  // Denna del bestämmer färgen på spelplanen, vilket är hela canvaset
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, w, h);

        btn.setAttribute('disabled', true);         // Sätter knappen till läget där den går att använda

        var snakeX = snake[0].x;                    // Ormens startposition
        var snakeY = snake[0].y;

        if (direction == 'right') {                 // Koden som ser till att ormen faktiskt rör sig i den riktning spelaren trycker
            snakeX++; }
        else if (direction == 'left') {
            snakeX--; }
        else if (direction == 'up') {
            snakeY--;
        } else if(direction == 'down') {
            snakeY++; }


        // Kod som kollar om ormen har krockat med sig själv och isåfall startar den om spelet.
        if (snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || checkCollision(snakeX, snakeY, snake)) {
            //restart game
            btn.removeAttribute('disabled', true);

            ctx.clearRect(0,0,w,h);
            gameloop = clearInterval(gameloop);
            return;
        }

        if(snakeX == food.x && snakeY == food.y) {
            var tail = {x: snakeX, y: snakeY};          //Skapar ett nytt huvud istället för att lägga till en ny svans
            score ++;

            createFood();
        } else {
            tail = snake.pop();                         //Tar bort den sista delen av ormen för att ge illusionen av att den rör sig
            tail.x = snakeX;
            tail.y = snakeY;
        }

        snake.unshift(tail); //Lägger till den nya svansen längst fram i arrayen
                    //Detta gäller både om man ätit och inte, skillnaden är att endast då man äter så försvinner ej den sista delen

        btnpress = true;

        for(var i = 0; i < snake.length; i++) {         //Sätter ut lika många bodySnake (Från funktionen) som värdet på length
            bodySnake(snake[i].x, snake[i].y);
        }

        pizza(food.x, food.y);                          //Tillkallar pizza
        scoreText();                                    //Tillkallar scoretext
    };

    var createFood = function() {                   //Funktion som skapar mat
        food = {
            x: Math.floor((Math.random() * 54) + 1),
            y: Math.floor((Math.random() * 54) + 1)
        };

        for (var i=0; i>snake.length; i++) {
            var snakeX = snake[i].x;
            var snakeY = snake[i].y;

            if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
                food.x = Math.floor((Math.random() * 54) + 1);
                food.y = Math.floor((Math.random() * 54) + 1);
            }
        }



    };

    var checkCollision = function(x, y, array) {            //Funktion som kollar efter kollision med kanter
        for(var i = 0; i < array.length; i++) {
            if(array[i].x === x && array[i].y === y)
                return true;
        }
        return false;
    };

    var init = function(){                                  //Startvärdena då koden körs första gången
        direction = 'down';
        score= 0;
        drawSnake();
        createFood();
        gameloop = setInterval(paint, 40);                  //gameloop bestämmer hur ofta koden ska köras
                                                            //Detta bestämmer i sin tur vilken hastighet ormen har
    };


    return {
        init : init
    };


}());