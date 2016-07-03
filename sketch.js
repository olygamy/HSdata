var kolos = [];

var s;

var keythinga = false;
var keythings = false;
var keythingd = false;
var fadeA;
var fadeS;
var fadeD;
var sA;
var sS;
var sD;

function setup() {
  createCanvas(800, 600);
  for (var i = 0; i < 4; i++) {
    kolos[i] = new Kolo(width / 3 + i * 33, height - 300, 20, color(200));
  }
  // s = 20;
   sA = 20;
  sS = 20;
  sD = 20;
  fadeA = false;
  fadeS = false;
  fadeD = false;
}



function keyTyped() {

  if (key === 'a') {
    keythinga = true;
    keythings = false;
    keythingd = false;
    fadeA = true;
    fadeS = false;
    fadeD = false;
    reset();
  }

  if (key === 's') {
    keythings = true;
    keythinga = true;
    keythingd = false;
    fadeA = false;
    fadeS = true;
    fadeD = false;
    reset();
  }
  if (key === 'd') {
    keythingd = true;
    keythinga = true;
    keythings = true;
    fadeA = false;
    fadeS = false;
    fadeD = true;
    reset();

  }

}

function stay() {

}

function fadein() {

 // s = s + 1;
  //   if (s > 40) {
  //     s = 40;
  //   }
  
  // uncomment above and comment out below for all circles to be always enlarges 

  if (fadeA == true) {
    sA = sA + 1;
    if (sA > 40) {
      sA = 40;
    }
  }

  if (fadeS == true) {
    sS = sS + 1;
    if (sS > 40) {
      sS = 40;
    }
  }

  if (fadeD == true) {

    sD = sD + 1;
    if (sD > 40) {
      sD = 40;
    }
  }
}

function reset() {

// if (fadeA == false) {
//   s = 20;
//   }
// if (fadeS == false) {
//   s = 20;
//   }
// if (fadeD == false) {
//   s = 20;
//   }

// uncomment above and comment out below for all circles to be always enlarges 

if (sA = 40) {
   sA = 20;
  }

  if (sS = 40) {
    sS = 20;
  }

  if (sD = 40) {
    sD = 20;
   }
}

function draw() {

  background(255);
  for (var i = 0; i < kolos.length; i++) {
    kolos[i].display();

  }
  
  // change vars sA sS sD to s for the all enlarge effect

  if (keythinga == true) {
    fadein();
    fill(0, 255);
    ellipse(50, 50, s, s);
    for (var i = 0; i < 1; i++) {
      kolos[i].update((color(200, 45, 45, 255)), sA);
    }

  }
  if (keythings == true) {
    fadein();
    fill(0, 255);
    ellipse(150, 50, s, s);
    for (var i = 1; i < 2; i++) {
      kolos[i].update((color(200, 45, 45, 255)), sS);
    }
  }

  if (keythingd == true) {
    fadein();
    fill(0, 255);
    ellipse(250, 50, s, s);

    for (var i = 2; i < 3; i++) {
      kolos[i].update((color(200, 145, 45, 255)), sD);
    }
  }
}
