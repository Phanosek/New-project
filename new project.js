// do not remove, allowes autocomplete
/// <reference path="./





var time = 0;
var fullness = 0;

function setup() {
  createCanvas(800, 400);
  colorMode(HSB, 100);
}

function draw() { 
  var fullness = mouseY;

  time = time + 0.1;
  
  if (fullness > 700) {
    warning();
  } else {
    cajk();
  }

  fill("blue");
  rect(0, 380, fullness, 20);
}

function cajk() {
  background('green');
}

function warning() {
  background(0, 100, (Math.sin(time) + 1) * 50);

  fill("red");
  textAlign(CENTER);
  textSize(100);
  text("OMG, SYPEJ!", 400, 200);
}