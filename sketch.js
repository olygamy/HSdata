var kolos = [];
var bubbles = [];
var coloring = [];
var al = 0;
var pm;
var s = 10;

function setup() {

  createCanvas(800, 600);

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
  coloring[11] = color(0, 0, 0, al);
  coloring[12] = color(200);


  var button = select('#submit');
  button.mousePressed(getData);

  var input;

  for (var i = 0; i < 12; i++) {
    kolos[i] = new Kolo(width / 3 + i * 33, height - 300, 10, color(200, 0));
  }

  for (var i = 0; i < 12; i++) {
    bubbles[i] = new Bubble(width / 3 + i * 33, height - 300, color(200));
  }
}

function getData(pm) {
  input = select('#pm25');
  pm = input.value();
  return pm;
}


function getAlfa(colx, n, m, s) {

  for (var i = n; i < m; i++) {
    kolos[i] = new Kolo(width / 3 + i * 33, height - 300, s, color(200));
    // kolos[i].display();
    kolos[i].update(color(coloring[i], al), s);
  }
}

function transit(endal, endsize, elseal, elsesize) {
 
  al = al + 1;
  if (al > endal) {
    al = endal;
  }
  s = s + 0.1;
  if (s > endsize) {
    s = endsize;
  }
 
}

function draw() {

  background(255);


  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    kolos[i].display();

  }


  if (getData(pm) > 0 && getData(pm) <= 10) {
    getAlfa(color(coloring[0], al), 0, 1, s)
  }
 

  if (getData(pm) > 10 && getData(pm) <= 20) {
    transit(255, 20);
    getAlfa(color(coloring[1], al), 0, 1, s)
  }

  if (getData(pm) > 20 && getData(pm) <= 30) {
    transit(255, 20);
     getAlfa(color(coloring[2], al), 0, 2, s)
  }
  
  if (getData(pm) > 30 && getData(pm) <= 40) {
    transit(255, 20);
    getAlfa(color(coloring[3], al), 0,3, s)
    }
  
    if (getData(pm) > 40 && getData(pm) <= 50) {
    transit(255, 20);
    getAlfa(color(coloring[4], al), 0, 4, s)
  }

}
