var schuifje1;
var green;
var teller = 1;

function preload() {
  green = loadImage("akko_green.jpg");
}

function setup() {
  createCanvas(1800, 900);
  schuifje1 = new browser;
  schuifje1.teken();
}

function draw() {
  background(255);
  // schuifje1.meet();
  // image(green, 100, 100);
}

function keyPressed(){

}

