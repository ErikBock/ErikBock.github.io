
var mycanvas = document.getElementById('mycanvas');     // Hämtar mitt canvas för att kunna använda det i js
var ctx = mycanvas.getContext('2d');                    // Skapar ett tvådimesionellt gränsnitt
var snakeSize = 10;
var w = 550;                                            // Höjd och bredd på spelplanen
var h = 550;
var score = 0;                                          // skapar lite variabler som ska användas senare
var snake;
var food;
var btnpress;                                           // Denna ska användas för att förhindra flera knapptryck inom en kort tid

var highScore = localStorage.getItem("highScoreInStorage");         // Hämtar Highscore om det finns lagrat på datorn sedan tidigare
if (highScore == null){                                         //Ser till att HS = 0 om det inte finns något värde
    highScore = 0
}
