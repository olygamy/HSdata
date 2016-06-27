var bubbles = [];
var coloring = [];
var arrow;
var bubblecol;
var pm;
var alfa = 255;

function preload() {

  arrow = loadImage('arrow.png');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  coloring[0] = color(17, 186, 177, alfa);
  coloring[1] = color(16, 177, 75, alfa );
  coloring[2] = color(196, 216, 46, alfa)
  coloring[3] = color(241, 233, 18, alfa);
  coloring[4] = color(254, 188, 18, alfa);
  coloring[5] = color(248, 151, 29, alfa);
  coloring[6] = color(228, 110, 170, alfa);
  coloring[7] = color(238, 57, 115, alfa);
  coloring[8] = color(237, 31, 36, alfa);
  coloring[9] = color(174, 31, 35, alfa);
  coloring[10] = color(85, 15, 14,alfa);
  coloring[11] = color(0, 0, 0, alfa);



  var button = select('#submit');
  button.mousePressed(getData);

  var input;

  for (var i = 0; i < 12; i++) {
    bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
  }
}


function getData(pm) {
  input = select('#pm25');
  pm = input.value();
 
  println(pm);



  if (pm > 0 && pm <= 10) {
    alfa=+1;
    for (var i = 0; i < 1; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, coloring[0]);
    }
    for (var i = 1; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
    }  
  }
  
  if (pm > 10 && pm <= 20) {
    for (var i = 1; i < 2; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, coloring[1]);
    }
     for (var i = 2; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
    }
  }

  if (pm > 20 && pm <= 30) {
    for (var i = 0; i < 3; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, coloring[i]);
    }
     for (var i = 3; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
    }
  }
  
  if (pm > 30 && pm <= 40) {
    for (var i = 0; i < 4; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, coloring[i]);
    }
     for (var i = 4; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
    }
  }
  
  if (pm > 40 && pm <= 50) {
    for (var i = 0; i < 5; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, coloring[i]);
    }
     for (var i = 5; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
    }
  }
  
  if (pm > 50 && pm <= 60) {
    for (var i = 0; i < 6; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, coloring[i]);
    }
     for (var i = 6; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
    }
  }
  
if (pm > 60 && pm <= 70) {
    for (var i = 0; i < 7; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, coloring[i]);
    }
     for (var i = 7; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
    }
  }
  
 if (pm > 70 && pm <= 80) {
    for (var i = 0; i < 8; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, coloring[i]);
    }
     for (var i = 8; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
    }
  }
  
  if (pm > 80 && pm <= 90) {
    for (var i = 0; i < 9; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, coloring[i]);
    }
     for (var i = 9; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
    }
  }
  
 if (pm > 90 && pm <= 100) {
    for (var i = 0; i < 10; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, coloring[i]);
    }
     for (var i = 10; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
    }
  }
  
 if (pm > 100 && pm <= 110) {
    for (var i = 0; i < 11; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, coloring[i]);
    }
     for (var i = 11; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
    }
  }
  
 if (pm > 110) {
    for (var i = 0; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, coloring[i]);
    }
     for (var i = 12; i < 12; i++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height - 300, color(200));
    }
  }


}


function draw() {
  background(255);
  // imageMode(CENTER);
  // image(arrow, width / 2 ,height-240);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
