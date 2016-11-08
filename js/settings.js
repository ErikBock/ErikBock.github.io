
var mycanvas = document.getElementById('mycanvas');     /* Hämtar mitt canvas för att kunna använda det i js */
var ctx = mycanvas.getContext('2d');
var snakeSize = 10;
var w = 550;
var h = 550;
var score = 0;
var snake;
var food;