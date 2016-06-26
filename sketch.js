
var bubbles = [];
var coloring = [];
var arrow;
var bubblecol;

function preload() {

  arrow = loadImage('arrow.png');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  coloring[0] = color(17, 186, 177);
  coloring[1] = color(16, 177, 75);
  coloring[2] = color(196, 216, 46)
  coloring[3] = color(241, 233, 18);
  coloring[4] = color(254, 188, 18);
  coloring[5] = color(248, 151, 29);
  coloring[6] = color(228, 110, 170);
  coloring[7] = color(238, 57, 115);
  coloring[8] = color(237, 31, 36);
  coloring[9] = color(174, 31, 35);
  coloring[10] = color(85, 15, 14);
  coloring[11] = color(0, 0, 0);
  
  for (var i = 0; i < 12; i++) {
    bubbles[i] = new Bubble(width / 3 + i * 30, height-300, color(200));
  }
 
}

function draw() {
  background(255);
  // imageMode(CENTER);
  // image(arrow, width / 2 ,height-240);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

 if (keyIsDown(LEFT_ARROW)) {
  
  for (var i = 0; i < 1; i++) {
    // for (var c = 0; c < 1; c++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height-300, coloring[0]);
      // bubbles[1].update(color(237, 31, 36));
    }

  }


 if (keyIsDown(RIGHT_ARROW)) {
  
  for (var i = 0; i < 1; i++) {
    // for (var c = 0; c < 1; c++) {
      bubbles[i] = new Bubble(width / 3 + i * 30, height-300, color(200));
      // bubbles[1].update(color(237, 31, 36));
    }
  }
}


// function hightlight(){
//   bublecol.style('coloring[0]');
  
// }

// function unhightlight(){
//   bublecol.style('color(200)');
// }c

// function data() {
//   if (keyIsDown(A)) {
  
//   for (var i = 0; i < 1; i++) {
//     // for (var c = 0; c < 1; c++) {
//       bubbles[i] = new Bubble(width / 3 + i * 30, height-300, coloring[0]);
//       // bubbles[1].update(color(237, 31, 36));
//     }
//   }
// }


// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
