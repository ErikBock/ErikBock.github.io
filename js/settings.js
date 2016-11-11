
var mycanvas = document.getElementById('mycanvas');     /* Hämtar mitt canvas för att kunna använda det i js */
var ctx = mycanvas.getContext('2d');                    /* Skapar ett tvådimesionellt gränsnitt */
var snakeSize = 10;
var w = 550;                                            /* Höjd och bredd på spelplanen */
var h = 550;
var score = 0;                                          /* skapar lite variabler som ska användas senare */
var snake;
var food;
var btnpress;