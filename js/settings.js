/**
 * Created by Erik Bock on 2016-10-19.
 */

var mycanvas = document.getElementById('mycanvas');
var ctx = mycanvas.getContext('2d');
var snakeSize = 10;
var w = 550;
var h = 550;
var score = 0;
var snake;
var food;